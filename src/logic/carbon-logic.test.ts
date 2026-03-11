import { describe, it, expect } from 'vitest';
import { calculateGameStats } from './carbon-logic';
import type { GameState } from '../types/game-state.types';

describe('carbon-logic', () => {
  const mockState: GameState = {
    players: [
      { id: '1', name: 'P1', grossEmissions: 10 },
      { id: '2', name: 'P2', grossEmissions: 15 },
    ],
    globalSequestration: 5,
    thermometerCubes: 20,
    round: 1,
  };

  it('calculates total gross emissions correctly', () => {
    const stats = calculateGameStats(mockState);
    expect(stats.totalGrossEmissions).toBe(25);
  });

  it('calculates net carbon correctly', () => {
    const stats = calculateGameStats(mockState);
    expect(stats.netCarbon).toBe(20);
  });

  it('calculates temperature based on cubes and players', () => {
    // 2 players = 10 cubes per band
    // 20 cubes = 2 full bands
    // 2 bands * 0.25 = 0.5 degrees
    const stats = calculateGameStats(mockState);
    expect(stats.numBands).toBe(2);
    expect(stats.currentTemperature).toBe(0.5);
  });

  it('detects drawdown correctly', () => {
    const drawdownState: GameState = {
      ...mockState,
      globalSequestration: 30, // 25 emissions - 30 seq = -5 net
    };
    const stats = calculateGameStats(drawdownState);
    expect(stats.isDrawdown).toBe(true);
  });

  it('detects game over at 2.0 degrees', () => {
    const gameOverState: GameState = {
      ...mockState,
      thermometerCubes: 80, // 2 players * 5 = 10 per band. 80 cubes = 8 bands. 8 * 0.25 = 2.0
    };
    const stats = calculateGameStats(gameOverState);
    expect(stats.isGameOver).toBe(true);
  });
});
