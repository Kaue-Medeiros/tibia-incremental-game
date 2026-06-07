import type { MonsterDefinition, Monster } from '@tibia/shared'

export function spawnMonster(definition: MonsterDefinition):Monster {
    return {
        ...definition,
        health: definition.maxHealth
    }
}

// Sorteia um indice dentro de definitions e chama spawnMonster
export function getRandomMonster(definitions: MonsterDefinition[]):Monster {
    const randomIndex = Math.floor(Math.random() * definitions.length)
    return spawnMonster(definitions[randomIndex])
}