export type PlayerState = {
  id: string;
  name: string;
  grossEmissions: number;
};

export type GameState = {
  players: PlayerState[];
  globalSequestration: number;
  thermometerCubes: number;
  round: number;
};

export type GameCalculations = {
  totalGrossEmissions: number;
  netCarbon: number;
  currentTemperature: number;
  numBands: number;
  isDrawdown: boolean;
  isGameOver: boolean;
};
