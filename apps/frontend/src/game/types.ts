import type { Monster, MonsterDefinition } from '@tibia/shared'

export interface GameState {
    goldBalance: number;
    clickDamage: number;
    currentMonster: Monster | null;
    definitions: MonsterDefinition[];
    loading: boolean;
}

export type GameAction = 
    | { type: 'MONSTERS_LOADED'; definitions: MonsterDefinition[] }
    | { type: 'ATTACK' }
    | { type: 'BUY_UPGRADE'; price: number}