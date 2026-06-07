import './App.css'

import HealthBar from './components/HealthBar';
import { useGame } from './game/useGame';

function App() {

  // Custom hook para o carregamento
  const { state, dispatch } = useGame()

  // Tratar carregamentos
  if(state.loading || !state.currentMonster) {
    return <p>Carregando monstros</p>
  }

  const monster = state.currentMonster

  return (
    <>
    <div onClick={() => dispatch({type: 'ATTACK'})}>
      <p>Gold: {state.goldBalance}</p>
      <h2>{monster.name}</h2>
      <HealthBar currentHealth={monster.health} maxHealth={monster.maxHealth}/>
      <img src={monster.imageUrl ? monster.imageUrl : 'https://pub-4234ad56a4554460871a4a2882ab4bc2.r2.dev/broken-image.jpg'} alt={monster.name} style={{ width: '96px', imageRendering: 'pixelated', outline: 0 } } />

      <br/>
    </div>
    <button onClick={() => dispatch({ type: 'BUY_UPGRADE', price: 10 })}>COMPRAR UPGRADE</button>
    </>
  )
}

export default App
