import { useState, useEffect } from 'react'
import type { MonsterDefinition, Monster } from '@tibia/shared'
import './App.css'

import HealthBar from './components/HealthBar';
import { getRandomMonster } from './game/monsters'


const clickDamage = 1;

function App() {
  const [definitions, setDefinitions] = useState<MonsterDefinition[]>([])
  const [monster, setMonster] = useState<Monster | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [gold, setGold] = useState<number>(0)
  


  // Carrega os monstros da API nos estados necessarios
  useEffect(() => {
    async function loadMonsters() {
      const res = await fetch('http://localhost:3333/monsters')
      const data = await res.json() as MonsterDefinition[]

      setDefinitions(data)
      setMonster(getRandomMonster(data))
      setLoading(false)
    }

    loadMonsters()
  }, [])


  function handleAttack() {
    if(!monster) return
    

    const newHealth = monster.health - clickDamage

    if(newHealth <= 0){ // Died
      setGold(prev => prev + monster.goldReward)
      setMonster(getRandomMonster(definitions))
    } else {
      setMonster({...monster, health: newHealth}) // Survived
    }

  }


  // Tratar carregamentos
  if(loading || !monster) {
    return <p>Carregando monstros</p>
  }

  return (
    <div onClick={handleAttack}>
      <p>Gold: {gold}</p>
      <h2>{monster.name}</h2>
      <HealthBar currentHealth={monster.health} maxHealth={monster.maxHealth}/>
      <img src={monster.imageUrl ? monster.imageUrl : 'https://pub-4234ad56a4554460871a4a2882ab4bc2.r2.dev/broken-image.jpg'} alt={monster.name} style={{ width: '96px', imageRendering: 'pixelated', outline: 0 } } />
    </div>
  )
}

export default App
