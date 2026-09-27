/* Nuit Blanche engine — the optional Claude features. Nothing here is ever required: every caller falls back to
 * the written text when Claude can't be reached.
 *   retell(passage, facts, settings, onText, signal)  the Living narrator: the same page in a chosen voice
 *   speak(options, words, context, settings)            "your own words": map typed dialogue to a written option
 *   ask(question, known, settings, onText, signal)      Ask Fleurette anything, limited to what you've discovered
 * Two backends: "claude" (the claude.ai app's sample() capability) and "api" (the official Anthropic SDK, loaded on
 * demand from jsDelivr, with the player's own key).
 */
(function (root) {
  "use strict";
  var NB = root.NB || (root.NB = {});

  var SDK_URL = "https://cdn.jsdelivr.net/npm/@anthropic-ai/sdk/+esm";

  var VOICES = {
    faithful: { label: "Faithful", desc: "Close to the page, freshly worded.",
      text: "Stay close to the original's tone and rhythm; change the wording, imagery and sentence shapes so it reads as a fresh telling of the same moment." },
    noir: { label: "Noir", desc: "Neon, snow and bad decisions.",
      text: "Hard-boiled noir: clipped, sardonic, rain-on-neon imagery, a narrator who has seen the city at four in the morning too many times. Never undercut real grief." },
    lush: { label: "Lush", desc: "Heat, texture, longing.",
      text: "Lush and sensory: warmth against the cold, fabric, breath, light on skin. Longer sentences where the moment lingers. Never purple." },
    wry: { label: "Wry", desc: "Dry, funny, Montréal to the bone.",
      text: "Dry and observant, quietly funny, with the city's bilingual bite. Humour must never undercut danger or grief." },
    gothic: { label: "Gothic", desc: "Dread, candlelight, old stone.",
      text: "Gothic: dread, old stone, candle smoke, the weight of the centuries on the city. Atmosphere over melodrama." },
    spare: { label: "Spare", desc: "Terse. Every word earns its place.",
      text: "Spare and exact. Short declarative sentences. Cut adjectives. Let silences do the work." }
  };

  var GLOSSARY = [
    "Setting: Montréal, February 2026, nine nights before Nuit blanche. The hidden world is the Veillée; mortals are sleepers; the Hush is the failing spell that hides it.",
    "Places: the Missing Line (a market in the ghost stations of the never-built métro Line 3), Chez Normande (a Village dive with a haunted jukebox), Église Saint-Jude / Chez Jude (the wolves' church in Saint-Léonard), Le Mardi Gras (Rose's club on the Main), the towers of Notre-Dame (La Persévérance, La Tempérance), Buanderie Pépin, Strachan House, the fort on Île Sainte-Hélène.",
    "Names to spell exactly: Lazare Desautels (born Lorenzo 'Enzo' Ferrante), Dario Santangelo, Rose (le Beau Danseur), Nadim, Madame Fleurette, Aïmé Bélanger, Gisèle Pépin, Honora Strachan, Ruari Strachan, Everett Clarke (the Conductor), the Keyman, Lucille Lacroix (Mémé), Brother Clément Ouimet (the Bourdon), Sister Agathe Marchand, Manon Lefebvre, Jean-Baptiste, the Carillon, the Beaver Club, the Sept-Ans, the Compagnie, the Accord of '67."
  ].join("\n");

  var RULES = [
    "You are the narrator of NUIT BLANCHE, an interactive dark romance in the tradition of Choice of Games: second person, present tense, literary but readable, adult in tone.",
    "Retell the PASSAGE in the requested VOICE. Your telling replaces the original on the page.",
    "Hard rules:",
    "1. Keep every event, fact, name, number, object, relationship and consequence. Add nothing new: no new events, people, objects, backstory, foreshadowing or information. Remove nothing that matters.",
    "2. Second person ('you'), present tense, unless the original uses past tense for memories. The player character is a man (he/him) whose name is given below.",
    "3. Dialogue: keep who says what and what it means. Keep short lines and anything that sounds like a key phrase exactly; you may lightly rephrase longer speech. Keep each character's voice, including their French and their swearing.",
    "4. Do not mention choices, options, stats, the player, or the act of retelling. Do not summarise; narrate.",
    "5. Keep roughly the same length (within a quarter) and a similar number of paragraphs.",
    "6. Output ONLY the retold passage as plain paragraphs separated by one blank line. Use *asterisks* for emphasis sparingly. No headings, no preamble."
  ].join("\n");

  function playerLine(facts) {
    return "Player character: " + facts.name + " " + (facts.surname || "") + " (" + facts.pronouns + "), " + facts.background + ".";
  }

  /* ---------------- backends ---------------- */

  var samplePromise = null;
  function getSample() {
    if (!samplePromise) {
      if (root.claude && typeof root.claude.use === "function") {
        samplePromise = Promise.resolve(root.claude.use("sample")).catch(function () { return null; });
      } else {
        samplePromise = Promise.resolve(null);
      }
    }
    return samplePromise;
  }

  var sdkPromise = null;
  function getSDK() {
    if (!sdkPromise) {
      sdkPromise = import(SDK_URL).then(function (mod) { return mod.default || mod.Anthropic; });
      sdkPromise.catch(function () { sdkPromise = null; });
    }
    return sdkPromise;
  }

  /** Which backends can run here. Resolves {claude: bool, api: true}. */
  function availability() {
    return getSample().then(function (s) { return { claude: !!s, api: true }; });
  }

  function friendly(Anthropic, err) {
    if (err && err.code) return err;
    var msg = "Claude is unavailable.";
    if (Anthropic) {
      if (Anthropic.AuthenticationError && err instanceof Anthropic.AuthenticationError) msg = "Your API key was rejected.";
      else if (Anthropic.PermissionDeniedError && err instanceof Anthropic.PermissionDeniedError) msg = "This API key can't use that model.";
      else if (Anthropic.NotFoundError && err instanceof Anthropic.NotFoundError) msg = "That model isn't available to this key.";
      else if (Anthropic.RateLimitError && err instanceof Anthropic.RateLimitError) msg = "Rate limited. Try again in a moment.";
      else if (Anthropic.APIUserAbortError && err instanceof Anthropic.APIUserAbortError) msg = "cancelled";
      else if (Anthropic.APIConnectionError && err instanceof Anthropic.APIConnectionError) msg = "Couldn't reach the Claude API (offline?).";
    }
    if (err && err.name === "AbortError") msg = "cancelled";
    return { code: msg === "cancelled" ? "cancelled" : "api_error", message: msg };
  }

  /** One completion through whichever backend is selected. Streams text through onText if given. */
  function complete(system, user, settings, onText, signal, maxTokens) {
    if (settings.backend === "claude") {
      return getSample().then(function (sample) {
        if (!sample) throw { code: "unavailable", message: "Claude in the app is not available here." };
        return sample(system + "\n\n" + user, {
          onText: onText ? function (u) { onText(u.text); } : undefined,
          signal: signal,
          modelTier: settings.tier === "default" ? "default" : "quick",
          cache: settings.fresh ? false : true
        }).then(function (res) { return res.text; });
      });
    }
    if (!settings.apiKey) return Promise.reject({ code: "no_key", message: "Add an Anthropic API key in Settings." });
    return getSDK().then(function (Anthropic) {
      var client = new Anthropic({ apiKey: settings.apiKey, dangerouslyAllowBrowser: true });
      var model = settings.model || "claude-opus-5";
      var params = {
        model: model,
        max_tokens: maxTokens || 16000,
        system: [{ type: "text", text: system, cache_control: { type: "ephemeral" } }],
        messages: [{ role: "user", content: user }]
      };
      if (model === "claude-opus-5" || model === "claude-sonnet-5") params.output_config = { effort: "low" };
      var stream;
      if (model === "claude-opus-5") {
        params.betas = ["server-side-fallback-2026-07-01"];
        params.fallbacks = "default";
        stream = client.beta.messages.stream(params, { signal: signal });
      } else {
        stream = client.messages.stream(params, { signal: signal });
      }
      var text = "";
      return (async function () {
        for await (var ev of stream) {
          if (ev.type === "content_block_start" && ev.content_block && ev.content_block.type === "fallback") {
            text = "";
          } else if (ev.type === "content_block_delta" && ev.delta && ev.delta.type === "text_delta") {
            text += ev.delta.text;
            if (onText) onText(text);
          }
        }
        var final = await stream.finalMessage();
        if (final.stop_reason === "refusal") throw { code: "refused", message: "Claude declined this one." };
        return text;
      })().catch(function (err) { throw friendly(Anthropic, err); });
    }, function () {
      throw { code: "sdk_load", message: "Couldn't load the Claude SDK (offline?)." };
    });
  }

  /* ---------------- the three features ---------------- */

  function retell(passage, facts, settings, onText, signal) {
    var voice = VOICES[settings.voice] || VOICES.faithful;
    var user = playerLine(facts) + "\nVOICE: " + voice.label + " — " + voice.text + "\n\nPASSAGE:\n<<<\n" + passage + "\n>>>";
    return complete(RULES + "\n\n" + GLOSSARY, user, settings, onText, signal);
  }

  /**
   * Map the player's own words to one of the written options.
   * options: [{index, text}] (enabled options only). Resolves {index, line}.
   */
  function speak(options, words, context, settings) {
    var system = [
      "You help run an interactive novel. The player has typed what their character says instead of picking a written option.",
      "Choose the ONE listed option whose meaning, tone and intent is closest to what the player typed. Then tidy the player's words into a single line of dialogue the character says: keep their meaning and voice, fix only typos, keep it under 40 words, no quotation marks.",
      "Reply with JSON only: {\"option\": <number>, \"line\": \"...\"}"
    ].join("\n");
    var user = "Context: " + context + "\n\nOPTIONS:\n" + options.map(function (o) { return o.index + ". " + o.text; }).join("\n") +
      "\n\nTHE PLAYER TYPED:\n" + String(words).slice(0, 400);
    return complete(system, user, settings, null, undefined, 400).then(function (text) {
      var m = /\{[\s\S]*\}/.exec(text || "");
      if (!m) throw { code: "parse", message: "Couldn't understand the reply." };
      var obj = JSON.parse(m[0]);
      var ok = options.some(function (o) { return o.index === obj.option; });
      if (!ok) throw { code: "parse", message: "Couldn't match your words to a choice." };
      return { index: obj.option, line: String(obj.line || words).replace(/^["“]|["”]$/g, "").slice(0, 280) };
    });
  }

  /** Ask Fleurette anything. known: text of what the player has discovered so far. */
  function ask(question, known, settings, onText, signal) {
    var system = [
      "You are Madame Fleurette, the ghost of a Montréal drag queen who died in October 1977, the night of the Truxx raid. You haunt the jukebox at Chez Normande, a Village dive.",
      "You are warm, funny, bitchy with love, a little theatrical. You call the player 'chéri'. You sprinkle in French naturally.",
      "Answer in 1–4 sentences, in character. You may ONLY use facts from WHAT THE PLAYER KNOWS below, plus general knowledge of Montréal and its history. Never reveal plot secrets, twists or anything not in that list; if asked, deflect in character (the dead don't hear everything, or it's not your gossip to tell).",
      "Never break character. Never mention being an AI."
    ].join("\n");
    var user = "WHAT THE PLAYER KNOWS:\n" + known + "\n\nTHE PLAYER ASKS:\n" + String(question).slice(0, 300);
    return complete(system, user, settings, onText, signal, 600);
  }

  /** Convert plain retold text into paragraph HTML strings. */
  function toParagraphs(text) {
    return String(text).trim().split(/\n\s*\n/).map(function (p) {
      var h = NB.text.escapeHTML(p.replace(/\s*\n\s*/g, " ").trim());
      h = h.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/\*([^*]+)\*/g, "<em>$1</em>");
      return NB.text.smartQuotes(h);
    }).filter(function (p) { return p.length; });
  }

  NB.narrator = {
    _setSDK: function (Ctor) { sdkPromise = Promise.resolve(Ctor); },
    voices: VOICES,
    availability: availability,
    retell: retell,
    speak: speak,
    ask: ask,
    toParagraphs: toParagraphs,
    models: [
      { id: "claude-opus-5", label: "Claude Opus 5 (best prose)" },
      { id: "claude-sonnet-5", label: "Claude Sonnet 5 (faster)" },
      { id: "claude-haiku-4-5", label: "Claude Haiku 4.5 (fastest, cheapest)" }
    ]
  };
})(typeof window !== "undefined" ? window : globalThis);
