import { RefreshCw, Play } from 'lucide-react';
import { useGameState } from './hooks/use-game-state';
import { PlayerCounter } from './components/PlayerCounter';
import { GlobalSequestration } from './components/GlobalSequestration';
import { Thermometer } from './components/Thermometer';
import { GameStats } from './components/GameStats';

function App() {
  const { 
    state, 
    stats, 
    setGrossEmissions, 
    setPlayerName,
    setGlobalSequestration, 
    advanceRound, 
    resetGame,
    setPlayersCount
  } = useGameState();

  return (
    <div className="app-container">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--accent-color)' }}>Daybreak</h1>
          <div style={{ fontSize: '0.9rem', opacity: 0.8, fontWeight: 'bold' }}>Round {state.round}</div>
        </div>
        <div style={{ display: 'flex', gap: '0.4rem' }}>
          {[1, 2, 3, 4].map(n => (
            <button 
              key={n}
              className={`btn ${state.players.length === n ? '' : 'btn-secondary'}`}
              style={{ padding: '0.4rem 0.6rem', minWidth: '2.2rem', fontSize: '0.8rem' }}
              onClick={() => {
                if (window.confirm(`Change to ${n} players and reset game?`)) {
                  setPlayersCount(n);
                }
              }}
            >
              {n}P
            </button>
          ))}
        </div>
      </header>

      <Thermometer 
        cubes={state.thermometerCubes} 
        temp={stats.currentTemperature} 
        numBands={stats.numBands}
        numPlayers={state.players.length}
      />

      <GameStats 
        netCarbon={stats.netCarbon} 
        temp={stats.currentTemperature}
        numBands={stats.numBands}
        isDrawdown={stats.isDrawdown}
        isGameOver={stats.isGameOver}
      />

      <GlobalSequestration 
        value={state.globalSequestration} 
        onChange={setGlobalSequestration} 
      />

      <div className="player-grid">
        {state.players.map((player) => (
          <PlayerCounter 
            key={player.id} 
            name={player.name} 
            value={player.grossEmissions} 
            onChange={(val) => setGrossEmissions(player.id, val)}
            onNameChange={(newName) => setPlayerName(player.id, newName)}
          />
        ))}
      </div>

      <footer style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
        <button className="btn btn-secondary" style={{ flex: 1 }} onClick={() => {
          if (window.confirm('Reset current game?')) resetGame();
        }}>
          <RefreshCw size={20} /> Reset
        </button>
        <button className="btn" style={{ flex: 2, padding: '1rem' }} onClick={advanceRound}>
          <Play size={20} /> Advance Round
        </button>
      </footer>
    </div>
  );
}

export default App;
