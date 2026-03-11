import type { GameState, GameCalculations } from '../types/game-state.types';

export const TEMP_PER_BAND = 0.25; // As per PLAN.md: 8 bands = 2.0°C
export const CUBES_PER_PLAYER_PER_BAND = 5;

/**
 * Calculates current game statistics based on the state.
 */
export const calculateGameStats = (state: GameState): GameCalculations => {
  const totalGrossEmissions = state.players.reduce((sum, p) => sum + p.grossEmissions, 0);
  const netCarbon = totalGrossEmissions - state.globalSequestration;
  
  const numPlayers = state.players.length || 1;
  const bandSize = CUBES_PER_PLAYER_PER_BAND * numPlayers;
  
  const fullBands = Math.floor(state.thermometerCubes / bandSize);
  const currentTemperature = fullBands * TEMP_PER_BAND;
  
  const isDrawdown = netCarbon <= 0;
  const isGameOver = currentTemperature >= 2.0;

  return {
    totalGrossEmissions,
    netCarbon,
    currentTemperature,
    numBands: fullBands,
    isDrawdown,
    isGameOver
  };
};

/**
 * Calculates the number of planetary dice rolls required.
 * Rule of thumb: 1 die per full band.
 */
export const calculateDiceRolls = (numBands: number): number => {
  return numBands;
};

/**
 * Calculates the number of crisis cards to draw.
 * Rule of thumb: 2 cards + 1 per 0.5°C? 
 * (Placeholder logic based on game commonalities)
 */
export const calculateCrisisCards = (temp: number): number => {
  return 1 + Math.floor(temp / 0.5);
};
