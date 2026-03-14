import { describe, it, expect } from 'vitest';
import { gameReducer, initialState } from './use-game-state';

describe('gameReducer', () => {
  it('updates player name correctly', () => {
    const action = { 
      type: 'SET_PLAYER_NAME' as const, 
      playerId: '1', 
      name: 'Alice' 
    };
    const newState = gameReducer(initialState, action);
    const player = newState.players.find(p => p.id === '1');
    expect(player?.name).toBe('Alice');
    
    // Other players should remain unchanged
    const player2 = newState.players.find(p => p.id === '2');
    expect(player2?.name).toBe('Player 2');
  });

  it('updates gross emissions correctly', () => {
    const action = { 
      type: 'SET_GROSS_EMISSIONS' as const, 
      playerId: '1', 
      amount: 10 
    };
    const newState = gameReducer(initialState, action);
    const player = newState.players.find(p => p.id === '1');
    expect(player?.grossEmissions).toBe(10);
  });
});
