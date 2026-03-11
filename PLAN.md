# Daybreak Board Game Tracker - Project Plan

## Background & Motivation
Daybreak is a cooperative board game about climate change. Players must reduce global emissions to zero (Drawdown) before the planet reaches 2.0°C of warming. The game involves tracking emissions, sequestration, and a "thermometer" of carbon cubes.

This application aims to provide a digital companion that simplifies the arithmetic of tracking net carbon and temperature, similar to popular Magic: The Gathering life counter apps.

## Proposed Solution
A mobile-friendly web application (Progressive Web App - PWA) that allows 1-4 players to:
- Input their current gross emissions and sequestration.
- Automatically calculate "Net Carbon" ($Net = Emissions - Sequestration$).
- Track the "Thermometer" state and current global temperature ($0.0^\circ\text{C}$ to $2.0^\circ\text{C}$).
- Visualize the "Temperature Bands" and their impact on game mechanics (Crisis cards, die rolls).

## Technologies
- **Frontend:** React (TypeScript) for a responsive UI.
- **Icons:** Lucide React for consistent and high-quality iconography.
- **Styling:** Vanilla CSS (Modern CSS variables and Flexbox/Grid) as per project guidelines.
- **State Management:** React Context API or simple `useState` hooks for local-first tracking.
- **Persistence:** `localStorage` to save game state across sessions.
- **Deployment:** Vercel, Netlify, or GitHub Pages (Static Site Hosting).

## Functional Requirements
- **Player Setup:** Choose 1-4 players.
- **CO2 Tracking:**
  - **Individual Player Emissions:** Increment/decrement Gross Emissions for each player independently. All counters must also allow direct numerical input by tapping the value.
- **Sequestration Tracking (Shared):**
  - **Global Sequestration Pool:** A shared counter for Trees, Oceans, and DAC (Direct Air Capture) tokens. All players contribute to and draw from this single pool. This counter must also allow direct numerical input.
- **Calculation Logic:**
  - **Net Carbon:** Automatically calculate $Net = \sum(\text{Player Emissions}) - \sum(\text{Global Sequestration})$.
- **Thermometer & Temperature:**
  - Automatic update of carbon cubes on the thermometer based on Net Carbon.
  - Automatic calculation of Temperature Bands (0.1°C per band, where each band holds $5 \times \text{Players}$ cubes).
  - Alert when reaching Drawdown ($Net \le 0$).
  - Game Over warning at $2.0^\circ\text{C}$ (8 bands).
- **Game Aids:**
  - Display the number of Crisis cards to draw based on temperature.
  - Display the number of Planetary Die rolls required.
- **Persistence:** Auto-save current state to the browser.
- **Reset:** Quickly clear the board for a new game.

## Non-Functional Requirements
- **Responsive Design:** Optimized for mobile phones (portrait and landscape) to be used alongside the board game.
- **Simplicity:** Minimalistic UI with large, easy-to-tap buttons (MTG counter style).
- **Performance:** Instant feedback on value changes; sub-second load times.
- **Offline Capability:** Functional as a PWA for offline use at game nights.

## Implementation Plan

### Phase 1: Project Setup & Core Logic
- [ ] Initialize React + TypeScript project.
- [ ] Create core logic for CO2/Temperature calculations ($BandSize = 5 \times Players$).
- [ ] Implement state management for player data.

### Phase 2: UI/UX Development
- [ ] Build the main counter dashboard (MTG style).
- [ ] Integrate Lucide React icons for Emissions (e.g., Factory), Sequestration (e.g., Tree, Waves), and Temperature (e.g., Thermometer).
- [ ] Design the "Thermometer" visualization.
- [ ] Implement responsive styles using Vanilla CSS.

### Phase 3: Features & Polishing
- [ ] Add Drawdown/Game Over notifications.
- [ ] Implement `localStorage` persistence.
- [ ] Add a "Reset Game" feature.

### Phase 4: Deployment & PWA
- [ ] Configure PWA manifest and service worker.
- [ ] Deploy to a hosting provider.

## Verification
- Unit tests for the carbon-to-temperature logic.
- Manual testing of the UI on mobile and desktop viewports.
- Verification of state persistence after page refresh.
