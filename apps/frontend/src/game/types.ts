import type { Monster } from '@tibia/shared'

export interface GameState {
    goldBalance: number;
    clickDamage: number;
    currentMonster: Monster;

}