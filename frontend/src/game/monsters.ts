import type { Monster } from './types'

export function spawnMonster(definition: Monster):Monster {
    return {
        ...definition,
        health: definition.maxHealth
    }
}

export function getRandomMonster():Monster {
    const randomIndex = Math.floor(Math.random() * monsters.length)
    return spawnMonster(monsters[randomIndex])
}

const rat: Monster = {
    name: 'Rat',
    maxHealth: 10,
    health: 10,
    goldReward: 2
}

const wolf: Monster = {
    name: 'Wolf',
    maxHealth: 20,
    health: 20,
    goldReward: 4
}

const sheep: Monster = {
    name: 'Sheep',
    maxHealth: 5,
    health: 5,
    goldReward: 1
}

export const monsters:Monster[] = [rat, wolf, sheep]