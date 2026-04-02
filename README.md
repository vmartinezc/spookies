# spookies

A shared horror movie tracker for my friends (shoutout James + Gaby), and also yours. Log scary movies, rate them on a 1–5 ghost scale. Based on my friends scoring, decide if I can watch the movie or not.

## Features

- **Shared group feed** — everyone's logs in one place, newest first
- **Ghost rating system** — rate movies from 1 👻 to 5 👻👻👻👻👻
- **VHS landing screen** — full-screen VHS shelf with custom static video overlay
- **Retro Win98 UI** — chunky borders, system dialog aesthetic, I want this to feel like you logged in to your old family computer
- **Offline storage** — all data persisted locally via AsyncStorage

## Tech stack

- [Expo](https://expo.dev) (React Native)
- [TypeScript](https://www.typescriptlang.org)
- [React Navigation](https://reactnavigation.org) — bottom tabs + native stack
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/) — local persistence
- [expo-av](https://docs.expo.dev/versions/latest/sdk/av/) — VHS static video playback
- [expo-font](https://docs.expo.dev/versions/latest/sdk/font/) — VT323 custom font

## Project structure

```
spookies/
├── assets/
│   │   
│   ├── vhs-shelf.jpg
|   ├── vhs-static.mp4
│   └── VT323-Regular.ttf
├── hooks/
│   └── useAddScreen.ts
├── screens/
│   ├── AddScreen.tsx
│   ├── AddScreen.styles.ts
│   ├── FeedScreen.tsx
│   └── LandingScreen.tsx
├── storage.ts
├── types.ts
└── App.tsx
```

## Getting started

### Prerequisites

- Node.js 18+
- Expo CLI (`npm install -g expo-cli`)
- Expo Go app on your phone, or an iOS/Android simulator

### Install

```bash
git clone https://github.com/yourname/spookies.git
cd spookies
npm install
```

### Run

```bash
npx expo start
```

Scan the QR code with Expo Go on your phone, or press `i` for iOS simulator / `a` for Android.

## Data model

```ts
type Movie = {
  id: string        // Date.now() timestamp
  title: string
  addedBy: string   // whoever logged it
  spooks: 1 | 2 | 3 | 4 | 5
  note?: string     // optional free text
  watchedAt: string // ISO date string
}
```

## Fonts

VT323 is not bundled by default. Download it from [Google Fonts](https://fonts.google.com/specimen/VT323) and place the TTF at `assets/VT323-Regular.ttf`.
