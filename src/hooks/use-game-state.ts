import { useReducer, useEffect } from 'react';
import type { GameState, PlayerState } from '../types/game-state.types';
import { calculateGameStats } from '../logic/carbon-logic';

type GameAction =
  | { type: 'SET_GROSS_EMISSIONS'; playerId: string; amount: number }
  | { type: 'SET_PLAYER_NAME'; playerId: string; name: string }
  | { type: 'SET_GLOBAL_SEQUESTRATION'; amount: number }
  | { type: 'ADVANCE_ROUND' }
  | { type: 'RESET_GAME' }
  | { type: 'SET_PLAYERS_COUNT'; count: number };

const STORAGE_KEY = 'daybreak-tracker-state';

export const createDefaultPlayers = (count: number): PlayerState[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: (i + 1).toString(),
    name: `Player ${i + 1}`,
    grossEmissions: 0,
  }));
};

export const initialState: GameState = {
  players: createDefaultPlayers(4),
  globalSequestration: 0,
  thermometerCubes: 0,
  round: 1,
};

const vibrate = (pattern: number | number[] = 10) => {
  if (typeof window !== 'undefined' && window.navigator && window.navigator.vibrate) {
    window.navigator.vibrate(pattern);
  }
};

export const gameReducer = (state: GameState, action: GameAction): GameState => {
  switch (action.type) {
    case 'SET_GROSS_EMISSIONS':
      vibrate();
      return {
        ...state,
        players: state.players.map((p) =>
          p.id === action.playerId ? { ...p, grossEmissions: Math.max(0, action.amount) } : p
        ),
      };
    case 'SET_PLAYER_NAME':
      return {
        ...state,
        players: state.players.map((p) =>
          p.id === action.playerId ? { ...p, name: action.name } : p
        ),
      };
    case 'SET_GLOBAL_SEQUESTRATION':
      vibrate();
      return {
        ...state,
        globalSequestration: Math.max(0, action.amount),
      };
    case 'ADVANCE_ROUND': {
      vibrate(50);
      const { netCarbon } = calculateGameStats(state);
      return {
        ...state,
        round: state.round + 1,
        thermometerCubes: Math.max(0, state.thermometerCubes + netCarbon),
      };
    }
    case 'SET_PLAYERS_COUNT':
      vibrate(30);
      return {
        ...state,
        players: createDefaultPlayers(action.count),
        globalSequestration: 0,
        thermometerCubes: 0,
        round: 1,
      };
    case 'RESET_GAME':
      vibrate([20, 50, 20]);
      return {
        ...state,
        round: 1,
        globalSequestration: 0,
        thermometerCubes: 0,
        players: state.players.map(p => ({ ...p, grossEmissions: 0 })),
      };
    default:
      return state;
  }
};

export const useGameState = () => {
  const [state, dispatch] = useReducer(gameReducer, initialState, (initial) => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return initial;
    const parsed = JSON.parse(stored);
    return { ...initial, ...parsed };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const setGrossEmissions = (playerId: string, amount: number) => {
    dispatch({ type: 'SET_GROSS_EMISSIONS', playerId, amount });
  };

  const setPlayerName = (playerId: string, name: string) => {
    dispatch({ type: 'SET_PLAYER_NAME', playerId, name });
  };

  const setGlobalSequestration = (amount: number) => {
    dispatch({ type: 'SET_GLOBAL_SEQUESTRATION', amount });
  };

  const advanceRound = () => {
    dispatch({ type: 'ADVANCE_ROUND' });
  };

  const resetGame = () => {
    dispatch({ type: 'RESET_GAME' });
  };

  const setPlayersCount = (count: number) => {
    dispatch({ type: 'SET_PLAYERS_COUNT', count });
  };

  return {
    state,
    setGrossEmissions,
    setPlayerName,
    setGlobalSequestration,
    advanceRound,
    resetGame,
    setPlayersCount,
    stats: calculateGameStats(state),
  };
};
