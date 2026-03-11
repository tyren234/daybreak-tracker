import { AlertTriangle, Dice5, FileText, ArrowDown } from 'lucide-react';
import { calculateDiceRolls, calculateCrisisCards } from '../logic/carbon-logic';

interface GameStatsProps {
  netCarbon: number;
  temp: number;
  numBands: number;
  isDrawdown: boolean;
  isGameOver: boolean;
}

export const GameStats = ({ netCarbon, temp, numBands, isDrawdown, isGameOver }: GameStatsProps) => {
  const dice = calculateDiceRolls(numBands);
  const crisis = calculateCrisisCards(temp);

  return (
    <div style={{ marginBottom: 'var(--spacing-unit)' }}>
      {isGameOver && (
        <div className="card" style={{ backgroundColor: 'var(--danger-color)', color: 'white', textAlign: 'center' }}>
          <AlertTriangle size={32} style={{ margin: '0 auto 0.5rem' }} />
          <h2 style={{ margin: 0 }}>Game Over - 2.0°C Reached!</h2>
        </div>
      )}

      {isDrawdown && !isGameOver && (
        <div className="card" style={{ backgroundColor: 'var(--success-color)', color: 'white', textAlign: 'center' }}>
          <ArrowDown size={32} style={{ margin: '0 auto 0.5rem' }} />
          <h2 style={{ margin: 0 }}>Drawdown Reached!</h2>
          <p style={{ margin: 0 }}>Net carbon is zero or negative.</p>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem' }}>
        <div className="card" style={{ textAlign: 'center', marginBottom: 0 }}>
          <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>Net CO2</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: netCarbon > 0 ? 'var(--danger-color)' : 'var(--success-color)' }}>
            {netCarbon > 0 ? `+${netCarbon}` : netCarbon}
          </div>
        </div>
        <div className="card" style={{ textAlign: 'center', marginBottom: 0 }}>
          <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>Crisis</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
            <FileText size={18} /> {crisis}
          </div>
        </div>
        <div className="card" style={{ textAlign: 'center', marginBottom: 0 }}>
          <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>Dice</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
            <Dice5 size={18} /> {dice}
          </div>
        </div>
      </div>
    </div>
  );
};
