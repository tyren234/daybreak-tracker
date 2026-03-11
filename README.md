# Daybreak Board Game Tracker

A mobile-first, high-performance CO2 and temperature tracker for the "Daybreak" board game. This digital companion simplifies the arithmetic of tracking net carbon and temperature, similar to popular Magic: The Gathering life counter apps.

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation
1. Clone the repository (if applicable) or navigate to the project folder.
2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Development Server
To start the app in development mode with Hot Module Replacement (HMR):
```bash
npm run dev
```
The app will be available at `http://localhost:5173`.

### Hosting on Local Network (Mobile Testing)
To access the app from other devices (like your phone) on the same Wi-Fi network:
```bash
npm run dev -- --host
```
Vite will display a **Network** URL (e.g., `http://192.168.1.50:5173`) that you can open in your phone's browser.

### Running Tests
To run the automated unit tests once:
```bash
npm test
```
To run tests in interactive watch mode:
```bash
npx vitest
```

### Building for Production
To create a production-ready build in the `dist` folder:
```bash
npm run build
```

---

## 🛠 Features
- **Player Setup:** Supports 1 to 4 players.
- **CO2 Tracking:** Individual player gross emission counters.
- **Shared Sequestration:** Global pool for trees, oceans, and DAC tokens.
- **Smart Calculations:** 
  - Automatic calculation of Net Carbon.
  - Automatic conversion of carbon cubes to temperature bands.
  - Real-time updates for Crisis cards and Planetary Die rolls.
- **Game Alerts:** Visual feedback for "Drawdown" and "Game Over" (2.0°C).
- **Persistence:** Automatically saves current game state to browser `localStorage`.
- **Reset:** Quickly clear all values for a new session.

---

## 🏗 Project Structure
- `src/components/`: UI components (Counters, Thermometer, Stats, etc.)
- `src/logic/`: Pure utility functions for game math and logic.
- `src/hooks/`: Custom React hooks for state management (`useGameState`).
- `src/types/`: TypeScript interface definitions.
- `src/index.css`: Global styles and theme variables.

---

## 🧰 Tech Stack
- **Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vite.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Testing:** [Vitest](https://vitest.dev/)
- **Styling:** Vanilla CSS (Modern CSS Variables)
