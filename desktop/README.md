# Nuit Blanche desktop app (Windows)

Wraps `dist/nuit-blanche.html` in its own window with Electron.

```bash
npm install
npm start          # run it in a window (Linux/Mac/Windows)
npm run dist:win   # build release/NuitBlanche.exe (portable, no installer)
```

The .exe is unsigned, so Windows SmartScreen will warn the first time:
click **More info → Run anyway**.

Saves live in the app's own storage, separate from any browser you've played in.
