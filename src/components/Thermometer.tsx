import { Thermometer as ThermometerIcon, Cuboid as Cube } from 'lucide-react';

interface ThermometerProps {
  cubes: number;
  temp: number;
  numBands: number;
  numPlayers: number;
}

export const Thermometer = ({ cubes, temp, numBands, numPlayers }: ThermometerProps) => {
  const cubesPerBand = 5 * numPlayers;
  const cubesInCurrentBand = cubes % cubesPerBand;

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ThermometerIcon size={24} color={temp >= 1.5 ? 'var(--danger-color)' : 'var(--warning-color)'} />
          <h2 style={{ margin: 0 }}>{temp.toFixed(1)}°C</h2>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>Carbon Cubes</div>
          <div style={{ fontWeight: 'bold' }}>{cubes}</div>
        </div>
      </div>

      <div style={{ 
        height: '24px', 
        background: '#444', 
        borderRadius: '12px', 
        overflow: 'hidden',
        position: 'relative',
        marginBottom: '0.5rem'
      }}>
        <div style={{ 
          height: '100%', 
          width: `${(cubesInCurrentBand / cubesPerBand) * 100}%`,
          background: 'linear-gradient(90deg, var(--warning-color), var(--danger-color))',
          transition: 'width 0.3s ease'
        }} />
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', opacity: 0.8 }}>
        <span>Band {numBands + 1}</span>
        <span>{cubesInCurrentBand} / {cubesPerBand} cubes</span>
      </div>

      <div style={{ marginTop: '1rem', display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} style={{
            height: '8px',
            flex: 1,
            background: i < numBands ? 'var(--danger-color)' : '#444',
            borderRadius: '4px'
          }} />
        ))}
      </div>
    </div>
  );
};
