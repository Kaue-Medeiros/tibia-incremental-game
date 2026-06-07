import type { GameState } from './types'

export const initialState:GameState = {
    goldBalance: 0,
    clickDamage: 1,
    currentMonster: null,
    definitions: [],
    loading: true
}