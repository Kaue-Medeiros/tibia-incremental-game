import { useReducer, useEffect } from 'react'
import type { MonsterDefinition } from '@tibia/shared'
import './App.css'

import HealthBar from './components/HealthBar';
import { gameReducer } from './game/reducer'
import { initialState } from './game/initialState';

function App() {
  const [state, dispatch] = useReducer(gameReducer, initialState)

  // Carrega os monstros da API nos estados necessarios
  useEffect(() => {
    async function loadMonsters() {
      const res = await fetch('http://localhost:3333/monsters')
      const data = await res.json() as MonsterDefinition[]
      dispatch({type: 'MONSTERS_LOADED', definitions: data}) // Dispatch do reducer com a ação "MONSTERS_LOADED"
    }
    loadMonsters()
  }, [])

  // Tratar carregamentos
  if(state.loading || !state.currentMonster) {
    return <p>Carregando monstros</p>
  }

  const monster = state.currentMonster

  return (
    <div onClick={() => dispatch({type: 'ATTACK'})}>
      <p>Gold: {state.goldBalance}</p>
      <h2>{monster.name}</h2>
      <HealthBar currentHealth={monster.health} maxHealth={monster.maxHealth}/>
      <img src={monster.imageUrl ? monster.imageUrl : 'https://pub-4234ad56a4554460871a4a2882ab4bc2.r2.dev/broken-image.jpg'} alt={monster.name} style={{ width: '96px', imageRendering: 'pixelated', outline: 0 } } />
    </div>
  )
}

export default App
