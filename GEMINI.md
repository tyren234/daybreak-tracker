# GEMINI.md - Daybreak Tracker Standards

This document defines the foundational mandates and engineering standards for the Daybreak Board Game Tracker project. All development must adhere to these guidelines.

## 1. Project Overview
- **Goal:** A mobile-first, high-performance CO2 and temperature tracker for the "Daybreak" board game.
- **Primary Plan:** Refer to `PLAN.md` in this directory for architectural details and feature roadmaps.

## 2. Naming Conventions
- **Directories:** `kebab-case` (e.g., `src/components`, `src/hooks`).
- **React Components:** `PascalCase` (e.g., `EmissionCounter.tsx`).
- **Files (Logic/Types):** `kebab-case` (e.g., `carbon-logic.ts`, `game-state.types.ts`).
- **CSS Files:** `kebab-case` matching the component name (e.g., `emission-counter.css`).
- **Variables/Functions:** `camelCase`.
- **Constants:** `UPPER_SNAKE_CASE`.

## 3. Coding Standards
- **Framework:** React with TypeScript.
- **Iconography:** Use **Lucide React** for all UI icons. Icons should be sized consistently and have accessible labels where necessary.
- **Typing:** Strict typing is mandatory. Avoid `any`. Define interfaces for all component props and state objects.
- **Styling:** Vanilla CSS only. Use CSS Variables for theme colors and spacing to ensure consistency.
- **State Management:** Prioritize React Hooks (`useState`, `useReducer`, `useContext`) for local and global state.
- **Modularity:** Keep logic separated from presentation. Complex calculations (e.g., Net Carbon to Temperature conversion) must reside in pure utility functions.

## 4. Documentation
- **Change Tracking:** All significant architectural changes or logic shifts must be documented in Markdown files within the project root or a `docs/` folder.
- **Comments:** Use JSDoc for complex utility functions.

## 5. Testing & Validation
- **Unit Tests:** Mandatory for all core logic, especially carbon/temperature math. Use Vitest or Jest.
- **UI Validation:** Manual verification is required for:
    - Mobile responsiveness (iOS/Android viewports).
    - "MTG-style" interaction (large tap targets, no accidental double-taps).
    - Visual feedback for "Drawdown" and "Game Over" states.

## 6. Process Mandates
- **Surgical Updates:** Changes must be focused and idiomatic.
- **Verification:** Never settle for unverified changes. Run logic tests and visual checks after every feature implementation.
