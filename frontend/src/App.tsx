import { useState } from 'react'
import type { Monster } from './game/types'
import './App.css'

import HealthBar from './components/HealthBar';

const clickDamage = 1;

function App() {

  const [monster, setMonster] = useState<Monster>({ 
    name: "Rat",
    maxHealth: 10,
    health: 10,
    goldReward: 2
  })

  const [gold, setGold] = useState<number>(0)

  function handleAttack() {
    const newHealth = monster.health - clickDamage

    if(newHealth <= 0){ // Died
      setGold(prev => prev + monster.goldReward)
      setMonster({
        name: "Rat",
        maxHealth: 10,
        health: 10,
        goldReward: 2
      })
    } else {
      setMonster({...monster, health: newHealth}) // Survived
    }

  }

  return (
    <div onClick={handleAttack}>
      <p>Gold: {gold}</p>
      <p>{monster.name}</p>
      <HealthBar healthPercentage={100 * monster.health/monster.maxHealth }/>
      <p>{monster.health}/{monster.maxHealth}</p>
    </div>
  )
}

export default App
