import { Minus, Plus, Factory } from 'lucide-react';

interface PlayerCounterProps {
  name: string;
  value: number;
  onChange: (newValue: number) => void;
}

export const PlayerCounter = ({ name, value, onChange }: PlayerCounterProps) => {
  return (
    <div className="card">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
        <Factory size={20} color="var(--danger-color)" />
        <h3 style={{ margin: 0 }}>{name}</h3>
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
        <button className="btn large-btn" onClick={() => onChange(value + 1)}>
          <Plus size={24} />
        </button>
      </div>
    </div>
  );
};
