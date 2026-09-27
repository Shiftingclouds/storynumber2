/* NUIT BLANCHE — story configuration: variables, stats, people, clues, codex, map, endings. */
(function (root) {
  "use strict";
  var NB = root.NB || (root.NB = {});
  var esc = function (s) { return NB.text ? NB.text.escapeHTML(s) : String(s); };

  /* ---------------- clues & deductions (declared first: they become variables) ---------------- */

  var clues = {
    c_phrase: { title: "Your father's words", text: "The caller said “Le fort a besoin de son gardien.” The fort needs its keeper. Your father said it every time he left for a night job." },
    c_close: { title: "Open and close", text: "Mémé: “Aurèle said a Lacroix would open it. And a Lacroix would have to close it.”" },
    c_six_notes: { title: "Six notes", text: "The Keyman hums the same six notes, over and over, while he cuts keys." },
    c_bellmark: { title: "The bell bruise", text: "Each victim has a bruise at the temple the exact shape of the lip of a handbell. A Carillon Hush-bell, rung hard enough to kill." },
    c_wolfhair: { title: "Wolf hair", text: "Grey wolf hair, clenched in the victim's fist." },
    c_voice: { title: "The last memory", text: "Aimé tasted it: cold hands, the ring of a bell, and a young man's voice, soft, with an accent. “Sorry, love.”" },
    c_kandi_worn: { title: "Ruari's bracelets", text: "Ruari Strachan wears bracelets of plastic pony beads, rave kandi from 1998, stacked up both wrists." },
    c_kandi_bead: { title: "A plastic bead", text: "A pink plastic pony bead in the snow beside Guy Hébert's body." },
    c_bite: { title: "Under the bruise", text: "Under the bell bruise on Mireille Caron's temple, Aimé found two punctures, very small, very neat." },
    c_pelt: { title: "Not a wolf's", text: "Dario, holding the hair to the light: “That's not one of us. It's old. Dead hair. That came off a pelt.”" },
    c_pelt_room: { title: "The trophy room", text: "At the Beaver Club, a grey wolf pelt hangs among the furs. Someone has cut squares out of it." },
    c_tidying: { title: "A little tidying", text: "Honora Strachan, over dinner: the Hush's failing has left “loose ends,” and the Club is “seeing to a little tidying.”" },
    c_bell_stolen: { title: "The missing bell", text: "A Hush-bell went missing from the Carillon's armory in La Tempérance three weeks ago. Sister Agathe signed for it last." },
    c_register: { title: "The Register", text: "The Carillon keeps a Register of every person the Hush has unmade." },
    c_lazare_absent: { title: "Lazare's empty night", text: "Lazare was not on patrol the night Guy Hébert died. Agathe covered for him. He won't say where he was." },
    c_victim_list: { title: "In the Register", text: "Every victim of the Quiet Killings is in the Carillon's Register of the unmade." },
    c_bourdon_list: { title: "Fresh ink", text: "Beside each victim's name in the Register: a tick, in fresh ink, in the Bourdon's hand." },
    c_accord_signers: { title: "Who signed", text: "The Accord of '67 was signed by the Bourdon, Honora Strachan and the Conductor, and witnessed by Rose." },
    c_angel_word: { title: "The angel's word", text: "Jean-Baptiste: “The hand that rings the stolen bell drinks at the President's right side.”" },
    c_meme_hum: { title: "M\u00e9m\u00e9's song", text: "M\u00e9m\u00e9 hummed six notes as she drifted off. \u201cAur\u00e8le's song,\u201d she called it. \u201cHe put it in the lock.\u201d" },
    c_ruari_sorry: { title: "Sorry, love", text: "Ruari, lifting his mouth from your throat, dizzy and soft: \u201cSorry, love.\u201d The exact words." },
    c_torn_page: { title: "The torn page", text: "The Keyman keeps a page torn from a notebook, the only thing he came down the stairs with in 2011. The torn edge matches the page missing from Aur\u00e8le's notebook." },
    c_furs_taste: { title: "Brother Olivier's last memory", text: "Aimé tasted the young hunter who died behind Saint-Jude: cold hands, a bell, a pale wrist stacked with plastic beads, “sorry, love”, and the smell of a cellar hung with furs." },
    c_flinch: { title: "The Keyman flinched", text: "When you told the Keyman your name, he flinched as if you'd struck him." },
    c_serge_visits: { title: "Every week", text: "Nadim: a Lacroix came to his door every week for fifteen years and talked to him through the steel. Then, in 2011, he stopped." }
  };

  var deductions = {
    ded_bite: { title: "The bell hid a bite", text: "The bruise isn't the wound. Someone bit them, then rang a bell over the bite to hide it. A vampire.", from: [["c_bellmark", "c_bite"]] },
    ded_planted: { title: "The hair was planted", text: "The wolf hair came off a dead pelt. Somebody wants the pack blamed.", from: [["c_wolfhair", "c_pelt"], ["c_wolfhair", "c_pelt_room"], ["c_wolfhair", "c_furs_taste"]] },
    ded_bell: { title: "A stolen Carillon bell", text: "The killer rings a Hush-bell, and one went missing from the Carillon's own armory.", from: [["c_bellmark", "c_bell_stolen"]] },
    ded_ruari_there: { title: "Ruari was there", text: "The bead in the snow came off Ruari Strachan's wrist.", from: [["c_kandi_bead", "c_kandi_worn"]] },
    ded_ruari: { title: "Ruari is the killer", text: "Soft voice, an accent, “sorry, love”, and the one who drinks at Honora's right hand. Ruari Strachan.", from: [["c_voice", "c_kandi_worn"], ["c_angel_word", "c_kandi_worn"], ["c_voice", "c_ruari_sorry"], ["c_furs_taste", "c_kandi_worn"]] },
    ded_list: { title: "The Compagnie chose them", text: "Every victim is in the Register, ticked in the Bourdon's hand. The killings aren't random. They're a list.", from: [["c_victim_list", "c_bourdon_list"]] },
    ded_keyman: { title: "The Keyman is family", text: "A nameless old man on the Missing Line hums your grandfather's song, the one he put in the lock, and flinches at the name Lacroix.", from: [["c_six_notes", "c_meme_hum"], ["c_flinch", "c_meme_hum"], ["c_torn_page", "c_meme_hum"], ["c_torn_page", "c_six_notes"]] },
    ded_wolf: { title: "Theory: a wolf did it", text: "Wolf hair in the fist, a Carillon bell to cover it. A loup-garou who knows the hunters' tricks.", from: [["c_wolfhair", "c_bellmark"]], theory: true },
    ded_lazare: { title: "Theory: Lazare did it", text: "A Hush-bell bruise, and the one hunter with no alibi for the second night.", from: [["c_bellmark", "c_lazare_absent"]], theory: true }
  };

  /* ---------------- variables ---------------- */

  var startVars = {
    name: "", night: 0, steam: true,
    look_skin: 1, look_hair: 1, look_style: 0, look_beard: 0, look_eyes: 0,
    twenties: "",

    /* voice & temper (opposed, 0-100 = left side) */
    wry: 50, reckless: 50, guarded: 50,

    /* skills */
    hands: 35, nerve: 15, charm: 20, wits: 20, lore: 0,

    /* the clock, wishes, favors */
    hush: 100, wishes: 0, wishes_used: 0, wish_unlocked: false,
    favor_aime: false, favor_clarke: false, favor_gisele: false, favor_rose: false, favor_honora: false, favor_manon: false,
    owe_rose: false, owe_clarke: false,

    /* regard (-100..100) and desire (0..100) */
    rel_lazare: 0, rel_dario: 0, rel_rose: 0, rel_nadim: 0, rel_fleurette: 10, rel_aime: 20, rel_gisele: 0, rel_honora: 0,
    rel_ruari: 0, rel_clarke: 0, rel_keyman: 0, rel_bourdon: 0, rel_agathe: 0, rel_manon: 0, rel_lucille: 40, rel_rosa: 0, rel_mathis: 0,
    des_lazare: 0, des_dario: 0, des_rose: 0, des_nadim: 0, des_ruari: 0,

    /* met */
    met_lazare: false, met_dario: false, met_rose: false, met_nadim: false, met_fleurette: false, met_aime: false, met_gisele: false,
    met_honora: false, met_ruari: false, met_clarke: false, met_keyman: false, met_lucille: false, met_bourdon: false,
    met_agathe: false, met_manon: false, met_angel: false, met_rosa: false, met_mathis: false,

    /* intimacy */
    kissed_lazare: false, kissed_dario: false, kissed_rose: false, kissed_nadim: false, kissed_ruari: false,
    slept_lazare: false, slept_dario: false, slept_rose: false, slept_nadim: false, slept_ruari: false, slept_both: false,
    three_kiss: false, romance: "",

    /* night one */
    dentist: "", marcname: "Julien", has_photo: false, photo: "", lutin: "", turned_back: 0, called: "", saved_agathe: "", window_talk: "", has_notebook: false, n1_memory: "", n1_gave_name: false, told_djinn: false, n1_ride: "", n1_reply_dario: "", n1_reply_lazare: "",
    opened_by: "", n1_nadim: "", n1_lied: false, n1_with: "", bell_failed: false,
    /* night two */
    meme_told: false, mireille_kind: false, know_true_name: false, meme_way: "", n2_crowd: "", met_mireille: false, keyman_asked: false, n2_ruari: "", serge_promise: false, meme_key: false, clarke_moved: false, n2_stance: "", plate_got: false, plate_how: "", has_key: false, took_hair: false, aime_tasted: false, n2_escort: "", saw_scarf: false,
    clarke_job: "",
    /* night three */
    fleurette_open: false, keyman_told: false, luc_friend: false, shared_father: false, rose_invite: false, n3_order: "", mireille_daughter: false, n3_sang: "", feeder: "", rose_q: "", gisele_way: "", climbed: false, n3_last: "", hours: 6, patrolled: false, saw_rose: false, bridge_nadim: false, beaver_dinner: false, honora_contract: false, fed_ruari: false,
    visited_gisele: false, visited_aime: false, visited_keyman: false, visited_dario: false,
    /* night four */
    outfit: "", gisele_tip: false, party_talks: 0, nadim_danced: false, coat_seen: false, thaw_side: "", philippe_saw: false, remembered_bell: false, n4_rose_q: 0,
    cufflinks: false, overheard: false, rose_lead: 5, danced_won: false, know_affair: false, thaw: false, mem_notes: false, n4_told_lazare: false, path: "",
    /* nights five & six */
    n5_walk: "", lazare_said_name: false, n5_bourdon: "", mathis_promise: false, agathe_help: false, lectern_how: "", angel_asked: "", n6_parents: "", change_how: "", n6_lazare: "",
    bourdon_deal: false, read_register: false, know_keyman: false, angel_heard: false, ally_angel: false, reconciled: false,
    lazare_left_carillon: false, agathe_turned: false, manon_safe: false, manon_cut: false, lazare_inside: false,
    lazare_rehushed: false, lazare_restored: false, honora_alliance: "", canoe_alt: 5, canoe_crashed: false, change_rung: false,
    visited_parents: false, mathis_out: false, n6_lane: "", nadim_taken: false, bourdon_knows: false, olivier_dead: false, n5_roof: "",
    /* night seven */
    keyman_known: false, keyman_forgiven: false, keyman_safe: false, keyman_taken: false, accused: "", ruari_fate: "", n7_with: "", stolen_bell: false, has_serge_key: false, keyman_freed: "", meme_saw_serge: false, war_over: false, know_other_key: false, n7_guest: "",
    honora_turned: false, clarke_turned: false, invited_rose: false, ally_rose: false, rose_bargain: false,
    /* night eight */
    intent: "", role_door: "", role_crowd: "", role_bells: "", role_beside: "", last_night: "", throuple_ready: false, voice: "", nadim_consent: false, fleurette_plan: false, n8_wish: false,
    ally_lazare: false, ally_dario: false, ally_gisele: false, ally_aime: false, ally_fleurette: false, ally_clarke: false,
    ally_manon: false, ally_keyman: false, ally_honora: false,
    /* night nine */
    door_held: false, crowd_safe: false, bells_stopped: false, hush_fate: "", mc_fate: "", great_wish: "", world: "", price: "", nadim_free: false, n9_fell: "", agathe_fate: "", mathis_fate: "",
    lazare_fate: "alive", dario_fate: "alive", aime_fate: "alive", fleurette_fate: "", manon_fate: "", nadim_fate: "",
    keyman_fate: "", bourdon_fate: "", honora_fate: "", clarke_fate: "",
    /* part two: lent */
    chapter: 0, ch10_lunch: "", ch10_dinner: "", meme_key_back: false, funeral: "", time_lazare: 0, time_dario: 0, time_rose: 0, time_nadim: 0, time_serge: 0,
    easter_due: false, mc_wolf: false, easter_how: "", angel_judgment: false, nadim_sister: false, mathis_mother: false,
    hw_thursday: "", zeina_free: false, aime_safe: false, hs_door: "", hs_decoy: "", hs_cellar: "", hs_beside: "", price_freed: false, radiator_fixed: false,
    /* part three: the long light */
    meme_gone: false, meme_fort: false, rosa_knows: false, lilac_test: "", rose_yes: "", nadim_q: "", know_song_name: false, final_romance: "",
    sj_fire: "", sj_bell: "", sj_crowd: "", sj_beside: "", sj_mountain: "", angel_end: "", last_before: "", fleurette_sj: false,

    /* New Game+ memories (set from the meta store when a New Game+ begins) */
    ngplus: false, runs: 0, mem_enzo: false, mem_keyman: false, mem_killer: false, mem_accord: false, mem_bells: false, mem_wolves: false
  };
  Object.keys(clues).forEach(function (k) { startVars[k] = false; });
  Object.keys(deductions).forEach(function (k) { startVars[k] = false; });

  var clamp = {
    wry: [0, 100], reckless: [0, 100], guarded: [0, 100],
    hands: [0, 100], nerve: [0, 100], charm: [0, 100], wits: [0, 100], lore: [0, 100],
    hush: [0, 100], wishes: [0, 3], hours: [0, 6], rose_lead: [0, 10], canoe_alt: [0, 10]
  };
  ["lazare", "dario", "rose", "nadim", "fleurette", "aime", "gisele", "honora", "ruari", "clarke", "keyman", "bourdon", "agathe", "manon", "lucille", "rosa", "mathis"].forEach(function (p) {
    clamp["rel_" + p] = [-100, 100];
  });
  ["lazare", "dario", "rose", "nadim", "ruari"].forEach(function (p) { clamp["des_" + p] = [0, 100]; });

  var opposed = { wry: ["Wry", "Earnest"], reckless: ["Reckless", "Wary"], guarded: ["Guarded", "Open"] };

  /* ---------------- people (the journal's encyclopedia) ---------------- */

  function hush(text, known) {
    if (known) return '<span class="nb-thawed">' + text + "</span>";
    var n = Math.max(6, Math.round(String(text).replace(/<[^>]+>/g, "").length * 0.9));
    return '<span class="nb-hushed" title="Hushed" aria-label="(hushed)">' + new Array(Math.ceil(n / 2) + 1).join("▇") + "</span>";
  }

  var people = {
    mc: { name: function (v) { return (v.name || "You") + " Lacroix"; }, epithet: "The locksmith", self: true },
    lazare: {
      name: function (v) { return v.thaw ? "Lazare Desautels (Lorenzo Ferrante)" : "Lazare Desautels"; }, short: "Lazare",
      epithet: "Hunter of the Carillon", romance: true,
      desc: function (v) {
        return "<p>A hunter of the Carillon, the order of mortals sworn to keep the Hush. He's thirty-one, tall and severe, with dark curls kept too short. He carries iron in his sleeves and a brass handbell against his chest. He was raised in the towers of Notre-Dame from the age of " + hush("ten", v.thaw) + ", and believes a loup-garou killed his parents.</p>" +
          "<p>He has a scar on his chin he says he doesn't remember getting. " + hush("Dario gave it to him, age nine, with a snow shovel, on rue Jarry, by accident, and cried harder than he did.", v.thaw) + "</p>" +
          "<p>" + hush("His name was Lorenzo Ferrante. The Carillon took him from his parents' house in 2005 and the Hush unmade him from their memory. Rosa and Vito Ferrante are alive, and have never known they had a son.", v.thaw) + "</p>" +
          (v.know_affair ? "<p>He has been sleeping with Dario Santangelo for seven years. He calls it a tactical relationship.</p>" : "") +
          (v.lazare_rehushed && !v.lazare_restored ? "<p><b>The Bourdon rang the great bell over him. He doesn't remember any of it now.</b></p>" : "") +
          (v.lazare_left_carillon ? "<p>He has walked out of the Carillon.</p>" : "");
      }
    },
    dario: {
      name: function () { return "Dario Santangelo"; }, short: "Dario", epithet: "Alpha of the Sept-Ans", romance: true,
      desc: function (v) {
        return "<p>Alpha of the Sept-Ans, Montréal's loup-garou pack. He's thirty-one, broad and bearded, with a broken nose and a gold chain. He drives a tow truck, sings Céline at karaoke with total commitment, wears the lumpy red toque his nonna knitted him in every weather, and swears in French, English and Italian, often all three in one breath.</p>" +
          "<p>At twelve a priest told him boys like him were damned, so he stopped going to Mass. Seven Easters later, he turned. " + hush("When he turned, the Hush let go of him, and he remembered the boy on the next balcony, the one nobody else remembered.", v.thaw || v.know_affair) + "</p>" +
          (v.know_affair ? "<p>He calls Lazare <i>Enzo</i> when he thinks no one can hear. " + hush("It isn't a taunt. It's his name.", v.thaw) + "</p>" : "") +
          (v.manon_cut ? "<p>The Carillon cut Manon on the night of the Thaw. He hasn't forgiven anyone for it, including himself.</p>" : "");
      }
    },
    rose: {
      name: function () { return "Rose"; }, short: "Rose", epithet: "Le Beau Danseur", romance: true,
      desc: function (v) {
        return "<p>A demon. In 1740 he came to a Mardi Gras dance in a fine black coat and gloves and danced with a girl named Rose Latulipe until the stroke of midnight. The story says a priest drove him out. " + hush("She said no. He has been in love with that refusal for two hundred and eighty-six years.", v.danced_won || v.rel_rose >= 30) + "</p>" +
          "<p>He runs Le Mardi Gras on the Main, where it's always the last hour before Ash Wednesday. He never lies, and he bargains for everything. He never takes off his gloves.</p>" +
          "<p>A demon can only enter where he is invited. Under the Hush, no sleeper has been able to see him to invite him in " + hush("for fifty-nine years", v.saw_rose) + ".</p>" +
          (v.owe_rose ? "<p><b>You owe him one yes, whenever he asks.</b></p>" : "");
      }
    },
    nadim: {
      name: function () { return "Nadim"; }, short: "Nadim", epithet: "A djinn of smokeless fire", romance: true,
      desc: function (v) {
        return "<p>A djinn from the hills above Beirut, from before Beirut had that name. He was sold at the Missing Line in 1958 and bound in brass under the fort on Île Sainte-Hélène in 1967, to power the Hush. You opened the door.</p>" +
          "<p>He is formal, sardonic and very old, and nothing he knows about the world is newer than the summer of Expo 67. " + hush("He grieves in ways he will not let you see.", v.bridge_nadim) + "</p>" +
          "<p>By the law of his kind, he is in your debt. He can unmake a moment you regret (a <b>wish</b>). While he owes you, he can't refuse a wish, so he can't truly say yes or no to anything.</p>" +
          (v.plate_got ? "<p>You bought back his name-plate from the Missing Line.</p>" : "");
      }
    },
    fleurette: {
      name: function () { return "Madame Fleurette"; }, short: "Fleurette", epithet: "A ghost with a jukebox",
      desc: function (v) {
        return "<p>A ghost. In life, Réal Gauthier (1941–1977), who ruled a cabaret on Stanley Street as Madame Fleurette. Her heart gave out on the sidewalk on the night of the Truxx raid, in October 1977, watching the police vans. She haunts the jukebox at Chez Normande, a dive in the Village.</p>" +
          "<p>The dead hear everything that's said in bars. She'll tell you most of it.</p>" +
          "<p>" + hush("A ghost stays for as long as no one alive remembers her name. She would like, very much, to hear hers said somewhere the whole city can hear it.", v.rel_fleurette >= 40) + "</p>";
      }
    },
    aime: {
      name: function () { return "Aimé Bélanger"; }, short: "Aimé", epithet: "A ghoul, and the undertaker's son",
      desc: function (v) {
        return "<p>A ghoul, twenty-nine, the son of Salon funéraire Bélanger & Fils in Verdun. He sat behind you in Secondaire 3. He eats a mouthful of the dead and inherits their last memories. He sells some of them on the Missing Line, and hates himself a little for it.</p>" +
          "<p>He listens to true-crime podcasts, can't lie to save his life, and would do most things for you. " + hush("He's had a crush on you since you were fifteen.", v.rel_aime >= 50) + "</p>";
      }
    },
    gisele: {
      name: function () { return "Gisèle Pépin"; }, short: "Gisèle", epithet: "Witch of the Buanderie",
      desc: function (v) {
        return "<p>Eighty-six. She's the head of the coven that runs Buanderie Pépin, a laundromat in Pointe-Saint-Charles, and casts spells in the dryers. She smokes du Maurier and plays bingo on Tuesdays. She flies the chasse-galerie.</p>" +
          "<p>" + hush("In 1956 she was your grandfather's first love, before he married Lucille. In 1966 he came to her for help building a lock for the Compagnie. She told him no, and she never forgave him for building it anyway.", v.visited_gisele) + "</p>";
      }
    },
    honora: {
      name: function () { return "Honora Strachan"; }, short: "Honora", epithet: "President of the Beaver Club",
      desc: function (v) {
        return "<p>President of the Beaver Club, the fur-traders' dining society of 1785 that never disbanded, and whose members are all vampires. She was turned in 1812, the widow of a North West Company partner. Small and very polite, with manners like a scalpel.</p>" +
          (v.c_accord_signers ? "<p>She signed the Accord of '67.</p>" : "") +
          (v.honora_turned ? "<p>She has withdrawn from the Compagnie.</p>" : "");
      }
    },
    ruari: {
      name: function () { return "Ruari Strachan"; }, short: "Ruari", epithet: "Honora's fledgling",
      desc: function (v) {
        return "<p>A vampire, turned in 1998 at a rave in a Verdun warehouse. He has Glasgow vowels, stacked kandi bracelets, and he's gorgeous and bored. He is Honora's creature and her messenger.</p>" +
          (v.ded_ruari ? "<p><b>He is the one killing the unmade.</b></p>" : "");
      }
    },
    clarke: {
      name: function () { return "Everett Clarke"; }, short: "the Conductor", epithet: "The Conductor of the Missing Line",
      desc: function (v) {
        return "<p>A warlock, which here means a man who cheated a demon out of the price of his power. He was born in Barbados and came to Montréal as a sleeping-car porter. In 1911, somewhere past Kingston, he won his soul back in a card game. He runs the Missing Line, and his word is its law.</p>" +
          "<p>" + hush("In 1958 he sold a djinn named Nadim. He has regretted it for sixty-eight years, which isn't the same as making it right.", v.bridge_nadim || v.c_accord_signers) + "</p>";
      }
    },
    keyman: {
      name: function (v) { return v.keyman_known ? "The Keyman (Serge Lacroix)" : "The Keyman"; }, short: "the Keyman", epithet: "A key-cutter on the Missing Line",
      desc: function (v) {
        return "<p>A nameless old man who cuts keys at a stall on the Missing Line. He hums the same six notes. Nobody knows where he came from, including him.</p>" +
          "<p>" + hush("He is Serge Lacroix, your father. The Hush unmade him in 2011, when he tried to set Nadim free. He made the call.", v.keyman_known) + "</p>";
      }
    },
    lucille: {
      name: function () { return "Lucille Lacroix"; }, short: "Mémé", epithet: "Your grandmother",
      desc: function (v) {
        return "<p>Your grandmother, eighty-eight, Aurèle's widow, in a care home in Verdun. On most days she doesn't know you. At three in the morning, sometimes, she knows everything.</p>";
      }
    },
    bourdon: {
      name: function () { return "Brother Clément Ouimet"; }, short: "the Bourdon", epithet: "Grand Master of the Carillon",
      desc: function (v) {
        return "<p>Grand Master of the Carillon, called the Bourdon after the great bell. Eighty-one, gentle and tired. He raised Lazare. He believes the Hush saved ten thousand lives, and he may be right.</p>" +
          "<p>" + hush("He signed the Accord of '67 at twenty-two. He chose the children the Carillon took.", v.c_accord_signers || v.read_register) + "</p>";
      }
    },
    agathe: {
      name: function () { return "Sister Agathe Marchand"; }, short: "Agathe", epithet: "Hunter of the Carillon",
      desc: function (v) {
        return "<p>Lazare's partner in the Carillon, thirty-three. Freckles, flat jokes, and faith like a load-bearing wall. She's the closest thing he has to a sister.</p>" +
          (v.c_bell_stolen ? "<p>A Hush-bell went missing from her armory.</p>" : "");
      }
    },
    rosa: {
      name: function () { return "Rosa Ferrante"; }, short: "Rosa", epithet: "Of rue Jarry",
      desc: function (v) {
        return "<p>Sixty-three, of rue Jarry in Saint-Léonard, in the same brown-brick duplex since 1988. She makes the coffee too strong, goes to Saint-Bernardin at ten every Sunday, and is married to Vito, a retired tile-setter who lives in the basement workshop.</p>" +
          "<p>" + hush("She had a son, Lorenzo, born 25 February 1994. The Carillon took him when he was ten, and the Hush took him out of her.", v.thaw) + "</p>" +
          (v.n6_parents === "told" ? "<p>A stranger in her kitchen told her his name was Lorenzo. She didn't know him. She told him to come back on Sunday anyway.</p>" : "") +
          (v.n6_parents === "birthday" ? "<p>She lit a candle on a cake she'd bought for nobody and sang happy birthday to a stranger. She doesn't know why she cried.</p>" : "");
      }
    },
    mathis: {
      name: function () { return "Mathis Tremblay"; }, short: "Mathis", epithet: "A novice of the Carillon",
      desc: function (v) {
        return "<p>A novice of the Carillon, ten, eleven in June, with a pudding-bowl haircut and enormous eyes. He came to the towers at eight and doesn't remember before. He can hear the great bell.</p>" +
          "<p>He keeps a crayon drawing of a woman with yellow hair and a green coat in front of a red door. " + hush("His mother was unmade from him in September 2023.", v.read_register) + "</p>" +
          (v.mathis_promise ? "<p>You promised to help him find her.</p>" : "") +
          (v.mathis_out ? "<p>He walked out of the towers with you.</p>" : "");
      }
    },
    manon: {
      name: function () { return "Manon Lefebvre"; }, short: "Manon", epithet: "Second of the Sept-Ans",
      desc: function (v) {
        return "<p>Dario's second, forty-six. She was a nun until the day in 2009 she walked out of the convent. The pack found her seven years later. She's the calmest person in any room, and she bites.</p>" +
          (v.manon_cut ? "<p><b>The Carillon cut her on the night of the Thaw. She is a sleeper now, and doesn't remember the pack.</b></p>" : "");
      }
    },
    angel: {
      name: function () { return "Jean-Baptiste"; }, short: "the angel", epithet: "The angel in the great bell",
      desc: function (v) {
        return "<p>The angel that lives in the Gros Bourdon, the eleven-ton bell cast in 1848 that hangs in La Persévérance, one of the two towers of Notre-Dame. It has objected to the Hush since 1967. The Carillon ring their changes to drown it out.</p>";
      }
    }
  };

  /* ---------------- codex ---------------- */

  var codex = {
    veillee: { title: "The Veillée", text: "What the hidden world calls itself. A veillée was the old Québécois evening gathering where people told stories of loups-garous, flying canoes and the devil at the dance. The Veillée is those stories, still up after midnight." },
    sleepers: { title: "Sleepers", text: "Mortals. The Veillée's word for everyone who sleeps through it." },
    hush: { title: "The Hush", text: "La Berceuse, the lullaby: a spell over the island of Montréal, cast in 1967 for Expo. Sleepers who glimpse the Veillée forget what they saw by morning. Its power came from a bound djinn." },
    unmaking: { title: "Unmaking", text: "The Hush can do more than make you forget a night. It can erase a person from everyone's memory, or erase a person's own memory of themselves. The Veillée calls such people the unmade." },
    carillon: { title: "The Carillon", text: "Mortal hunters sworn to the Hush. They carry iron, and handbells tuned to make sleepers forget. Their seat is the two towers of Notre-Dame: La Persévérance and La Tempérance. Their Grand Master is called the Bourdon." },
    beaver_club: { title: "The Beaver Club", text: "Founded in 1785 as a dining society for fur traders who had wintered in the pays d'en haut. It never disbanded. Its members are vampires, and every one of them 'wintered' once." },
    sept_ans: { title: "The Sept-Ans", text: "Montréal's loup-garou pack, named for the seven years. They live in Église Saint-Jude, a deconsecrated church in Saint-Léonard, which is now their bar and home, Chez Jude." },
    loup_garou: { title: "Loups-garous", text: "In Québec folklore, anyone who goes seven years without their Easter duties becomes a loup-garou. The curse is lifted by drawing the wolf's blood with a blade. The Carillon call this mercy. The pack calls it murder: the freed wolf becomes a sleeper, and the Hush takes back everything they knew." },
    missing_line: { title: "The Missing Line", text: "The Montréal métro has Lines 1, 2, 4 and 5. Line 3 was planned in the sixties and never built. The Veillée built it. After the last train, its ghost stations hold a market. Enter through the ovens at the back of a certain 24-hour bagel bakery on Saint-Viateur." },
    favors: { title: "Favors", text: "On the Missing Line, you don't pay in money. You pay in owing. A favor, once given, is kept by everyone who heard it given." },
    djinn: { title: "Djinn", text: "Beings of smokeless fire. A djinn owes their liberator, and while in debt can't refuse a wish. Nadim's gift is to make and to unmake." },
    wishes: { title: "Wishes", text: "Nadim can unmake one moment you regret: the last choice you made. Each wish is spent when it's used, and he can only grant as many as he has the strength for. A wish unspent at the end might be worth far more." },
    ghosts: { title: "Ghosts", text: "The dead stay for as long as no one alive remembers their name. Say it where the city can hear it, and they can go." },
    ghouls: { title: "Ghouls", text: "Ghouls eat a mouthful of the dead and inherit their last memories. Most of Montréal's ghouls are undertakers. It's a family business." },
    buanderie: { title: "The Buanderie", text: "Five old women and a laundromat in Pointe-Saint-Charles. Spells go in the dryers on high heat. They are the oldest coven on the island, and they flew the chasse-galerie long before anyone put it in a storybook." },
    chasse_galerie: { title: "La chasse-galerie", text: "The flying canoe. The devil's contract lets it fly anywhere in a night, as long as no one aboard says a holy word or touches a steeple. Québécois swears are holy words: tabarnak, câlice, hostie, ciboire." },
    demons: { title: "Demons and invitations", text: "A demon can only go where it's invited, and only take what it's freely given. Under the Hush, sleepers can't see demons at all, so they can't invite them in." },
    beau_danseur: { title: "Le Beau Danseur", text: "The handsome stranger in gloves who danced with Rose Latulipe at a Mardi Gras ball in 1740, until the stroke of midnight and the start of Lent. In the story, a priest recognised him and drove him out. In the Veillée, you hear a different version." },
    warlocks: { title: "Warlocks", text: "From the Old English wǣrloga, oath-breaker. A warlock is someone who made a bargain with a demon for power, then didn't pay." },
    accord: { title: "The Accord of '67", text: "The treaty that made the Hush, for Expo 67, when the whole world came to the island. It was signed in devil's ink and paid for with a djinn." },
    compagnie: { title: "The Compagnie", text: "Named for the Compagnie du Saint-Sacrement, the secret society of dévots whose members helped fund the founding of Ville-Marie in 1642. The modern Compagnie is the three who signed the Accord, and whoever they dine with." },
    lacroix_lock: { title: "The Lacroix lock", text: "Locks of the Veillée are made against magic: no creature of it can open one. A mortal hand can, if it knows how. Aurèle Lacroix built the fort's lock in 1967 so that only a Lacroix could open it, or close it." },
    angel: { title: "The angel in the bell", text: "Jean-Baptiste, the Gros Bourdon of Notre-Dame: eleven tons of bronze, cast in 1848, rung on the great feasts. An angel lives in it. It has been saying no since 1967, and the Carillon have been ringing to drown it out." },
    nuit_blanche: { title: "Nuit blanche", text: "The white night. Every winter, Montréal stays up until dawn for art in the streets, and half a million people are out after midnight. This year it's the night the Hush runs out." },
    lutins: { title: "Lutins", text: "Small house-spirits who braid horses' manes in the night. With no horses left in the city, they braid people's hair on the Missing Line for a favor apiece." },
    feux_follets: { title: "Feux follets", text: "Will-o'-the-wisps: the souls of the unshriven, as small green lights. On the Missing Line they're sold in jars as lamps. It's legal. It isn't kind." }
  };

  /* ---------------- the story map ---------------- */

  var map = [
    { night: 1, id: "n1_door", title: "The door", branches: { finesse: "Opened it by hand", force: "Drilled it", back: "Turned back" } },
    { night: 1, id: "n1_with", title: "After the bells", branches: { lazare: "Went with Lazare", dario: "Went with Dario", ran: "Ran for the van", played: "Played them off each other" } },
    { night: 2, id: "n2_plate", title: "Nadim's name", branches: { clarke: "Handed it to the Conductor", stole: "Palmed it for Nadim", bargained: "Made it your fee", conned: "Tricked the Conductor", favor: "Spent Aimé's favor", lost: "Kept out of it" } },
    { night: 2, id: "n2_escort", title: "Walked home by", branches: { lazare: "Lazare", dario: "Dario", both: "Both of them", friends: "Your friends" } },
    { night: 3, id: "n3_first", title: "The first hour", branches: { dario: "Saint-Jude", lazare: "The patrol", rose: "Le Mardi Gras", nadim: "The bridge", gisele: "The Buanderie", club: "The Beaver Club", aime: "The funeral home", keyman: "The Keyman" } },
    { night: 4, id: "n4_dance", title: "The dance", branches: { won: "You led", lost: "He led" } },
    { night: 4, id: "n4_coat", title: "The coat room", branches: { revealed: "Stepped in", slipped: "Slipped away", joked: "Made a joke", stayed: "Stayed", three: "The three of you" } },
    { night: 4, id: "n4_split", title: "The split", branches: { bells: "Followed Lazare", wolves: "Followed Dario" } },
    { night: 5, id: "n5_path", title: "Night Five", branches: { bells: "La Persévérance", wolves: "Saint-Jude" } },
    { night: 6, id: "n6_path", title: "Night Six", branches: { bells: "Change-Ringing", wolves: "La Chasse-galerie" } },
    { night: 6, id: "n6_leads", title: "Lazare and Dario", branches: { reconciled: "Reconciled", broken: "Broken" } },
    { night: 7, id: "n7_father", title: "The Keyman", branches: { saved: "Saved him", taken: "He was taken" } },
    { night: 7, id: "n7_accuse", title: "The accusation", branches: { ruari: "Ruari", honora: "Honora", compagnie: "The Compagnie", pack: "The pack", lazare: "Lazare", none: "No one" } },
    { night: 7, id: "n7_rose", title: "Rose's offer", branches: { invited: "Invited him", refused: "Refused", bargained: "Bargained" } },
    { night: 8, id: "n8_last", title: "The last night", branches: { lazare: "Lazare", dario: "Dario", both: "Both", rose: "Rose", friends: "Friends", lucille: "Mémé", alone: "Alone" } },
    { night: 9, id: "n9_lock", title: "At the lock", branches: { rebound: "Closed it on Nadim", lock: "Took his place", gardien: "Your father took it", fallen: "Broke it forever", remade: "Remade the Hush", rose: "Rose's bargain", wished: "The great wish" } }
  ];

  /* ---------------- Ask Fleurette ---------------- */

  var questions = [
    { id: "q_veillee", q: "What is the Veillée, really?", a: "Chéri, it's every story your mémé told you to make you go to bed. The wolves, the canoe, the handsome stranger at the dance. We didn't go away when you stopped believing. We just stopped letting you see.", when: function () { return true; }, codex: "veillee" },
    { id: "q_hush", q: "What happens when the Hush runs out?", a: "Nobody knows, which is what makes it exciting. In '67 they said there'd have been a war. Maybe. Or maybe a lot of people would've had a very strange week and then gotten used to it, like they got used to everything else.", when: function () { return true; }, codex: "hush" },
    { id: "q_me", q: "How did you die?", a: "October 1977. The police raided Truxx on Stanley. A hundred and forty-six men in the vans. I wasn't even inside. I was on the sidewalk in my good coat, watching, and my heart said, Fleurette, I don't want to see this, and it stopped. Very dramatic. I've always had timing.", when: function () { return true; } },
    { id: "q_stay", q: "Why are you still here?", a: "A ghost stays as long as nobody alive remembers her name. Everyone who knew Fleurette is dead or in Florida. So here I am, on a jukebox, taking requests.", when: function (v) { return v.night >= 2; }, codex: "ghosts" },
    { id: "q_lazare", q: "What do you know about Lazare?", a: "Tall, sad, and ironed. The Carillon boys come in here sometimes to not drink. That one looks at the dance floor like it's a sin he's pricing. And, chéri, he isn't looking at the girls.", when: function (v) { return v.met_lazare; } },
    { id: "q_dario", q: "What do you know about Dario?", a: "Dario Santangelo sang Céline at my jukebox in 2017, drunk, crying, the whole of 'Pour que tu m'aimes encore.' He tipped me a dollar. On a jukebox. I've loved him ever since.", when: function (v) { return v.met_dario; } },
    { id: "q_both", q: "Lazare and Dario hate each other, right?", a: "Oh, chéri. In my experience, when two men fight that much, somebody should check the coat room.", when: function (v) { return v.met_lazare && v.met_dario && !v.know_affair; } },
    { id: "q_rose", q: "Is Rose dangerous?", a: "He's a devil. Of course he's dangerous. But he's never lied to anyone in this bar, and I can't say that about anybody else who's walked in. If he offers you a dance, count the steps.", when: function (v) { return v.saw_rose || v.night >= 3; }, codex: "beau_danseur" },
    { id: "q_nadim", q: "Where did Nadim come from?", a: "He was sold at the Missing Line in '58, and Everett Clarke did the selling. Ask the Conductor about it sometime, if you want to watch a man with perfect manners run out of them.", when: function (v) { return v.met_nadim && v.night >= 2; } },
    { id: "q_father", q: "Did you ever meet my father?", a: "Serge Lacroix. Quiet, good hands, drank Labatt 50 like it was medicine. He came in on Thursdays for years, always around four in the morning, always from the bridge. Then one Thursday he didn't. I'm sorry, chéri. I thought you knew he'd been one of us, a little.", when: function (v) { return v.night >= 2; } },
    { id: "q_killings", q: "Who's killing the unmade?", a: "The dead don't all come through my bar. But the ones who do say it was cold, and quick, and that he apologised. Whoever it is has manners. That narrows it down less than you'd think in this city.", when: function (v) { return v.c_bellmark; } },
    { id: "q_ruari", q: "What do you make of Ruari?", a: "Pretty boy, very sad, very old for his face. He came in the night of his turning in '98 with glitter still on his cheeks and asked me if it ever stopped hurting. I lied to him. He's been lying to himself since.", when: function (v) { return v.met_ruari; } },
    { id: "q_honora", q: "Can Honora Strachan be trusted?", a: "Honora is the only person I know who can say 'dear' so it sounds like a knife. You can trust her to do what's good for the Beaver Club. Figure out what that is, and you'll know what she'll do.", when: function (v) { return v.met_honora; } },
    { id: "q_gisele", q: "Who's Gisèle Pépin?", a: "A witch with a laundromat and a mouth like a sailor's parrot. She was your grandfather's sweetheart in '56, before your mémé. Ask her about the canoe. Better yet, don't. Let her offer.", when: function (v) { return v.night >= 3; } },
    { id: "q_keyman", q: "Who is the Keyman?", a: "The old one who cuts keys on the Line? Nobody knows. He turned up in 2011 with no name and good hands. Now that you mention it, chéri, he has your hands.", when: function (v) { return v.met_keyman; }, clue: "c_flinch" },
    { id: "q_accord", q: "Who signed the Accord of '67?", a: "Three signatures, one witness. That's all the dead know. The ones who'd know more are very much alive and very careful. Ask the devil. He was there. He's always there.", when: function (v) { return v.night >= 3 && !v.c_accord_signers; }, codex: "accord" },
    { id: "q_enzo", q: "Who is Enzo?", a: "I heard that name once, in a back booth, two in the morning, from a big man with a broken nose who thought nobody was listening. He said it like a prayer. I'm dead, chéri, not stupid.", when: function (v) { return v.know_affair && !v.thaw; } },
    { id: "q_thaw", q: "What happened at the Thaw?", a: "For an hour the whole city remembered everything it had been made to forget. I had forty people in here crying at once. A woman found her brother. A man found out his wife was a vampire and asked her to dance. Then one o'clock came, and the bells rang, and most of them went home and forgot again.", when: function (v) { return v.thaw; } },
    { id: "q_remade", q: "Could the Hush be made again, some better way?", a: "Gisèle thinks so. A Hush everyone agreed to, instead of one that was bought. You'd need a witch to weave it, a voice to sing it, a key to lock it, and something with the power to hold it, freely given. Easy. Like getting the whole Village to agree on a brunch spot.", when: function (v) { return v.night >= 7; } },
    { id: "q_wish", q: "What should I do with my last wish?", a: "Don't waste it on a bad date, chéri. A wish unspent at the end of all this is worth more than a hundred at the start. Nadim knows it. He's just too proud to say it.", when: function (v) { return v.wish_unlocked && v.night >= 5; }, codex: "wishes" },
    { id: "q_name", q: "What would you want, if you could have anything?", a: "My name on a big screen on Sainte-Catherine, lit up, with the whole Village standing under it. Madame Fleurette, one night only. And then I'd like to finally go and see what comes after. I've been waiting a long time for my cue.", when: function (v) { return v.rel_fleurette >= 30 && v.night >= 5; } }
  ];

  /* ---------------- the story so far (offline recap) ---------------- */

  function recap(v, st) {
    var out = [];
    if (v.night >= 1) out.push("<b>Night One.</b> A caller with your father's words sent you to the fort on Île Sainte-Hélène. You opened a Lacroix lock and let out Nadim, a djinn bound since 1967, and the Hush began to fail. Lazare of the Carillon found out you can't be Hushed. Dario of the Sept-Ans arrived with his wolves. " +
      ({ lazare: "You left with Lazare.", dario: "You left with Dario.", ran: "You ran.", played: "You played them against each other and slipped away." }[v.n1_with] || "") + " A ghost named Fleurette welcomed you to the Veillée.");
    if (v.night >= 2) out.push("<b>Night Two.</b> Mémé told you a Lacroix must open the lock, and a Lacroix must close it. On the Missing Line you met Aimé, the Conductor, Ruari and the Keyman. " + (v.plate_got ? "You won back Nadim's name-plate, and he granted you a wish." : "Nadim granted you a wish.") + " A woman who'd been unmade was found dead with a bell bruise and wolf hair in her fist.");
    if (v.night >= 3) out.push("<b>Night Three.</b> You had six hours before dawn and spent them as you chose. At dawn a second body lay at the foot of the mountain stairs.");
    if (v.night >= 4) out.push("<b>Night Four.</b> You danced with the devil" + (v.danced_won ? ", and led." : ", and he led.") + (v.know_affair ? " You found Lazare and Dario in the coat room." : "") + " At midnight the Hush let go for an hour: <b>the Thaw</b>. Lazare remembered he is Enzo Ferrante. " + (v.path === "bells" ? "You followed Lazare to the towers." : v.path === "wolves" ? "You followed Dario to Saint-Jude." : ""));
    if (v.night >= 5) out.push(v.path === "bells"
      ? "<b>Night Five.</b> Inside the Carillon: the Bourdon's confession, the Register of the unmade, and a voice in the great bell."
      : "<b>Night Five.</b> The siege at Saint-Jude, the pack, and a war council on the Line." + (v.lazare_rehushed ? " The Bourdon re-Hushed Lazare." : ""));
    if (v.night >= 6) out.push(v.path === "bells"
      ? "<b>Night Six.</b> Rue Jarry. Then you rang the wrong change, and the angel spoke. The Compagnie took Nadim."
      : "<b>Night Six.</b> The chasse-galerie flew to the towers to bring Lazare out. The Compagnie took Nadim.");
    if (v.night >= 7) out.push("<b>Night Seven.</b> " + (v.keyman_known ? "You found your father." : "") + " The Compagnie's dinner" + (v.accused ? ", and your accusation." : "."));
    if (v.night >= 8) out.push("<b>Night Eight.</b> The plan, and the last night before Nuit blanche.");
    return out;
  }

  /* ---------------- achievements & endings ---------------- */

  var achievements = {
    opened: { title: "Le Serrurier", desc: "Opened a lock that was built to stay shut." },
    unhushable: { title: "Ring It Again", desc: "Shrugged off a Carillon bell." },
    both_ways: { title: "Both Ways", desc: "Played a hunter and a wolf off each other and walked away.", hidden: true },
    jukebox: { title: "Requests", desc: "Met Madame Fleurette." },
    name_plate: { title: "A Name, Returned", desc: "Won back Nadim's name-plate." },
    first_wish: { title: "Wish It Undone", desc: "Unmade a moment with a wish." },
    six_hours: { title: "The Small Hours", desc: "Spent every hour of Night Three." },
    fed: { title: "Donor", desc: "Let a vampire drink from you.", hidden: true },
    led: { title: "You Lead", desc: "Out-danced the devil." },
    coat_room: { title: "Check the Coat Room", desc: "Found out about Lazare and Dario." },
    three_kiss: { title: "A Kiss for Each", desc: "The coat room, the three of you.", hidden: true },
    thaw: { title: "The Thaw", desc: "Were there when the Hush let go." },
    register: { title: "The Register", desc: "Read the Carillon's book of the unmade." },
    angel: { title: "The Wrong Change", desc: "Let the angel speak.", hidden: true },
    no_swears: { title: "Not One Tabarnak", desc: "Flew the chasse-galerie without falling.", hidden: true },
    manon: { title: "Not Her", desc: "Stopped the Carillon's knife." },
    restored: { title: "Say His Name", desc: "Brought Lazare back to himself.", hidden: true },
    rue_jarry: { title: "Rue Jarry", desc: "Walked Lazare home." },
    reconciled: { title: "Seven Years", desc: "Put Lazare and Dario back in the same room, on purpose." },
    papa: { title: "Papa", desc: "Found your father." },
    accuser: { title: "J'accuse", desc: "Named the killer at the Compagnie's table." },
    wrong_man: { title: "Wrong", desc: "Accused the wrong one.", hidden: true },
    invited: { title: "Come In", desc: "Invited the devil in." },
    planner: { title: "The Plan", desc: "Assigned every role and lost no one." , hidden: true },
    lazare_heart: { title: "La Persévérance", desc: "Won Lazare's heart." },
    dario_heart: { title: "Lost Causes", desc: "Won Dario's heart." },
    both_hearts: { title: "Three", desc: "Won both their hearts, and they won each other's.", hidden: true },
    rose_heart: { title: "After Midnight", desc: "Won the devil's heart." },
    nadim_heart: { title: "Smokeless", desc: "Won Nadim's heart, freely given.", hidden: true },
    thrifty: { title: "Unspent", desc: "Reached the lock with three wishes.", hidden: true },
    fleurette_name: { title: "Madame Fleurette, One Night Only", desc: "Put her name on every screen in the city." },
    nobody_died: { title: "Everybody Home", desc: "Nuit blanche, and no one you love died." },
    deja_vu: { title: "Déjà Vu", desc: "Used a memory from another night.", hidden: true }
  };

  var endings = {
    sleep_through: { title: "Sleep Through It", desc: "You turned back on the bridge and went home to bed. The city didn't.", clue: "Refuse the job." },
    sleeper: { title: "Sleeper", desc: "You forgot. You'll never know what you forgot.", clue: "Ask to forget, or be made to." },
    unmade: { title: "Unmade", desc: "You died at the fort, and the night went on without you.", clue: "Go in without enough people." },
    compagnie_peace: { title: "The Compagnie's Peace", desc: "You closed the lock on Nadim. The Hush held. The city slept.", clue: "Close the lock." },
    new_bourdon: { title: "The New Bourdon", desc: "The Hush was rebound, and Lazare rang it. No more children are taken. You'll have to live with the rest.", clue: "Close the lock, with Lazare beside you." },
    the_lock: { title: "The Lock", desc: "You took Nadim's place. The Hush holds, and nobody remembers why there's a locksmith's van parked outside the fort.", clue: "Take his place." },
    white_night: { title: "White Night", desc: "The Hush fell on Nuit blanche. Half a million people saw the Veillée, and the Veillée saw them back.", clue: "Break the lock forever." },
    seven_years: { title: "Seven Years Late", desc: "The Hush fell, and so did you: seven Easters overdue. You run with the pack now.", clue: "Break the lock, and run with the wolves." },
    the_remembering: { title: "The Remembering", desc: "A Hush remade by consent. The unmade went home.", clue: "Remake it: a witch, a voice, a key, a gift." },
    three: { title: "Three", desc: "Lazare, Dario, you.", clue: "Bring them back to each other, and let them bring you in." },
    enzo: { title: "Enzo", desc: "You gave them back to each other, and walked home alone, glad.", clue: "Reconcile them, and step aside." },
    ringer: { title: "The Ringer", desc: "Lazare, a rebuilt Carillon that takes no children, and you.", clue: "Love the hunter; remake the order." },
    wolf_heart: { title: "Wolf Heart", desc: "Dario, and the pack, in a city that can see them.", clue: "Love the wolf; let the Hush fall." },
    last_dance: { title: "The Last Dance", desc: "Rose holds the Hush. You hold Rose. It's always a quarter to midnight.", clue: "Take the devil's bargain." },
    invited: { title: "Invited", desc: "The devil, freely chosen, in a city that can finally see him.", clue: "Invite him in, and let them see." },
    smokeless_fire: { title: "Smokeless Fire", desc: "Your last wish set Nadim free. He stayed anyway.", clue: "Save a wish for the end, and give it back." },
    accord_unmade: { title: "The Accord Unmade", desc: "You wished 1967 undone, and the island woke up remembering.", clue: "Spend the great wish on the Accord." },
    wintered: { title: "Wintered", desc: "You took Honora's offer, and a seat at the Club. You'll see every winter from now on.", clue: "Dine with the vampires, and say yes." },
    last_stop: { title: "Last Stop", desc: "The Conductor retired. The Missing Line is yours.", clue: "Earn the Conductor's trust." },
    last_call: { title: "Last Call", desc: "Madame Fleurette, on every screen in the city. She took her bow, and went.", clue: "Put her name up in lights." },
    ashes: { title: "Ashes", desc: "The angel's justice. The tower burned, and not only the guilty.", clue: "Let the angel judge." },
    le_gardien: { title: "Le Gardien", desc: "Your father took the lock. You visit every Thursday, the way he visited Nadim.", clue: "Find your father. Forgive him. Let him keep the fort." },
    true_night: { title: "True Night", desc: "Nobody died. Everybody remembered. You got it right, this time.", clue: "New Game+ only. Remember everything." }
  };

  /* ---------------- stats screen ---------------- */

  function statScreen(v, st) {
    var sections = [];
    var looks = NB.portraits && NB.portraits.lookLabels;
    sections.push({ rows: [{ type: "id", items: [
      ["Name", esc((v.name || "?") + " Lacroix")],
      ["Night", v.night ? v.night + " of 9" : "—"],
      ["The Hush", v.hush + "%"],
      ["Wishes", v.wish_unlocked ? String(v.wishes) : "—"]
    ] }] });
    sections.push({ title: "Voice & temper", rows: Object.keys(opposed).map(function (k) {
      return { type: "opposed", left: opposed[k][0], right: opposed[k][1], value: v[k] };
    }) });
    sections.push({ title: "Skills", rows: [
      { type: "bar", label: "Hands", value: v.hands, note: "Locks, tools, anything that needs doing with care." },
      { type: "bar", label: "Nerve", value: v.nerve, note: "Staying when everything says run." },
      { type: "bar", label: "Charm", value: v.charm, note: "Getting people to want what you want." },
      { type: "bar", label: "Wits", value: v.wits, note: "Noticing. Lying. Putting things together." },
      { type: "bar", label: "Lore", value: v.lore, note: "What you know about the Veillée." }
    ] });
    var fav = [];
    [["favor_aime", "Aimé"], ["favor_clarke", "the Conductor"], ["favor_gisele", "Gisèle"], ["favor_rose", "Rose"], ["favor_honora", "Honora Strachan"], ["favor_manon", "Manon"]].forEach(function (f) {
      if (v[f[0]]) fav.push("A favor from " + f[1]);
    });
    if (v.owe_rose) fav.push("You owe Rose one yes.");
    if (v.owe_clarke) fav.push("You owe the Conductor a job.");
    if (fav.length) sections.push({ title: "Favors", rows: [{ type: "list", items: fav }] });
    return sections;
  }

  function narratorFacts(v) {
    return { name: v.name || "Julien", surname: "Lacroix", pronouns: "he/him", background: "a 29-year-old gay night locksmith from Verdun, Montréal" };
  }

  function hintFallback(e) {
    var m;
    if ((m = /^favor_(\w+)$/.exec(e))) return "Requires a favor from " + ({ aime: "Aimé", clarke: "the Conductor", gisele: "Gisèle", rose: "Rose", honora: "Honora", manon: "Manon" }[m[1]] || m[1]);
    if ((m = /^(ded_\w+)$/.exec(e)) && deductions[m[1]]) return "Requires a deduction: “" + deductions[m[1]].title.replace(/^Theory: /, "") + "” (connect clues in your Journal)";
    if ((m = /^(c_\w+)$/.exec(e)) && clues[m[1]]) return "Requires a clue: " + clues[m[1]].title;
    if ((m = /^wishes\s*>=?\s*1$/.exec(e))) return "Requires a wish";
    if ((m = /^ally_(\w+)$/.exec(e))) return "Requires " + ((people[m[1]] && people[m[1]].short) || m[1]) + " on your side";
    if ((m = /^met_(\w+)$/.exec(e))) return "Requires having met " + ((people[m[1]] && people[m[1]].short) || m[1]);
    if ((m = /^mem_(\w+)$/.exec(e))) return "Requires a memory from another night";
    if (/^hours\s*>=\s*(\d)$/.test(e)) return "Not enough hours left before dawn";
    return "";
  }

  NB.config = {
    title: "Nuit Blanche",
    eyebrow: "Montréal · February",
    subtitle: "Nine nights, and everything after",
    motto: "Le fort a besoin de son gardien.",
    sceneList: ["night1", "night2", "night2b", "night3", "night3b", "night3c", "night4", "night4b", "night5a", "night6a", "night5b", "night6b", "night7", "night7b", "night8", "night8b", "night9", "night9b", "ch10", "ch11", "ch12", "ch13", "ch14", "ch15", "endings"],
    startVars: startVars,
    clamp: clamp,
    opposed: opposed,
    statNames: {
      hands: "Hands", nerve: "Nerve", charm: "Charm", wits: "Wits", lore: "Lore", hush: "The Hush", wishes: "Wishes",
      rel_lazare: "Lazare", rel_dario: "Dario", rel_rose: "Rose", rel_nadim: "Nadim", rel_fleurette: "Fleurette", rel_aime: "Aimé",
      rel_gisele: "Gisèle", rel_honora: "Honora", rel_ruari: "Ruari", rel_clarke: "the Conductor", rel_keyman: "the Keyman",
      rel_bourdon: "the Bourdon", rel_agathe: "Agathe", rel_manon: "Manon", rel_lucille: "Mémé",
      des_lazare: "Lazare's desire", des_dario: "Dario's desire", des_rose: "Rose's desire", des_nadim: "Nadim's desire", des_ruari: "Ruari's desire"
    },
    hints: { "owe_rose": "Only if you owe Rose", "not owe_rose": "Not while you owe Rose", "hours >= 2": "Needs two hours before dawn", "hours >= 1": "Needs an hour before dawn" },
    hintFallback: hintFallback,
    trackChanges: ["wry", "reckless", "guarded", "hands", "nerve", "charm", "wits", "lore",
      "rel_lazare", "rel_dario", "rel_rose", "rel_nadim", "rel_fleurette", "rel_aime", "rel_gisele", "rel_honora", "rel_ruari", "rel_clarke",
      "rel_keyman", "rel_bourdon", "rel_agathe", "rel_manon", "rel_lucille"],
    lookKeys: ["look_skin", "look_hair", "look_style", "look_beard", "look_eyes"],
    people: people,
    contacts: { marc: "Marc-Andr\u00e9", philippe: "Philippe (dentist)", normande: "Normande", residence: "R\u00e9sidence Sainte-Marguerite", agathe_sms: "Agathe" },
    clues: clues,
    deductions: deductions,
    codex: codex,
    map: map,
    questions: questions,
    recap: recap,
    hush: hush,
    achievements: achievements,
    endings: endings,
    cards: ["1", "2", "3", "4", "5a", "6a", "5b", "6b", "7", "8", "9", "thaw", "vault", "morning", "title"],
    romanceable: ["lazare", "dario", "rose", "nadim"],
    statScreen: statScreen,
    narratorFacts: narratorFacts,
    inputDefaults: { name: "Julien" },
    aboutHTML: [
      "<p><b>Nuit Blanche</b> is an interactive novel in nine nights. You read, and at each choice you decide what you say and do. The story remembers.</p>",
      "<p><b>Choices.</b> Pick an option and press <b>Next</b> (or press 1–9 and Enter). A greyed-out option says why it's locked: a skill that's too low, a favor you don't have, a clue you haven't found.</p>",
      "<p><b>Your voice.</b> Most things you say come in four registers: <i>wry</i>, <i>earnest</i>, <i>bold</i> or <i>guarded</i>. People like different ones. Lazare distrusts a joke; Dario lives for one.</p>",
      "<p><b>The Journal</b> holds everyone you've met: portraits, hearts for how they feel about you, and what they'll remember. It also has the codex, your clues (connect two to make a deduction) and, later, Madame Fleurette, who will answer your questions.</p>",
      "<p><b>Wishes.</b> Once Nadim owes you, you can spend a wish to unmake the last choice you made. You can only hold three. A wish kept to the very end may be worth more than any mistake.</p>",
      "<p><b>The Hush</b> gauge in the header is the clock. When it reaches zero, it's Nuit blanche.</p>",
      "<p><b>Intimate scenes</b> are on the page by default. Settings can change them to fade to black.</p>",
      "<p>There are 23 endings. After your first, the Story Map and New Game+ open up.</p>"
    ].join("")
  };
})(typeof window !== "undefined" ? window : globalThis);
