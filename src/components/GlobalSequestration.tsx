import { Minus, Plus, Trees, Waves, Zap } from 'lucide-react';

interface GlobalSequestrationProps {
  value: number;
  onChange: (newValue: number) => void;
}

export const GlobalSequestration = ({ value, onChange }: GlobalSequestrationProps) => {
  return (
    <div className="card" style={{ borderLeft: '4px solid var(--success-color)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Trees size={20} color="var(--success-color)" />
          <Waves size={20} color="var(--accent-color)" />
          <Zap size={20} color="var(--warning-color)" />
          <h3 style={{ margin: 0 }}>Global Sequestration</h3>
        </div>
      </div>
      <div className="counter-controls">
        <button className="btn btn-secondary large-btn" onClick={() => onChange(value - 1)}>
          <Minus size={24} />
        </button>
        <input 
          type="number" 
          className="counter-input counter-value" 
          value={value} 
          onChange={(e) => onChange(parseInt(e.target.value) || 0)}
          onFocus={(e) => e.target.select()}
        />
        <button className="btn large-btn" style={{ backgroundColor: 'var(--success-color)' }} onClick={() => onChange(value + 1)}>
          <Plus size={24} />
        </button>
      </div>
    </div>
  );
};
