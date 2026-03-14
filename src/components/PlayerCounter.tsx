import { useState, useRef, useEffect } from 'react';
import { Minus, Plus, Factory, Check } from 'lucide-react';

interface PlayerCounterProps {
  name: string;
  value: number;
  onChange: (newValue: number) => void;
  onNameChange: (newName: string) => void;
}

export const PlayerCounter = ({ name, value, onChange, onNameChange }: PlayerCounterProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(name);
  const saveInProgress = useRef(false);

  useEffect(() => {
    if (isEditing) {
      setTempName(name);
      saveInProgress.current = false;
    }
  }, [isEditing, name]);

  const handleSave = () => {
    if (saveInProgress.current) return;
    saveInProgress.current = true;
    
    const trimmedName = tempName.trim();
    if (trimmedName && trimmedName !== name) {
      onNameChange(trimmedName);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      setIsEditing(false);
    }
  };

  return (
    <div className="card">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', minHeight: '2rem' }}>
        <Factory size={20} color="var(--danger-color)" />
        {isEditing ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flex: 1 }}>
            <input
              autoFocus
              className="counter-input"
              style={{ margin: 0, padding: '0.2rem 0.5rem', fontSize: '1rem', flex: 1 }}
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
              onKeyDown={handleKeyDown}
              onBlur={handleSave}
            />
            <button 
              className="btn" 
              style={{ padding: '0.2rem', minWidth: 'auto' }} 
              onMouseDown={(e) => {
                // Prevent onBlur from firing before this click
                e.preventDefault();
                handleSave();
              }}
              aria-label="Save name"
            >
              <Check size={16} />
            </button>
          </div>
        ) : (
          <h3 
            style={{ margin: 0, cursor: 'pointer' }} 
            onClick={() => setIsEditing(true)}
          >
            {name}
          </h3>
        )}
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
