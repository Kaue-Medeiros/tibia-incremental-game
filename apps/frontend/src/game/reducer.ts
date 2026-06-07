import type { GameState, GameAction } from './types'
import { getRandomMonster } from './monsters'

export function gameReducer(state:GameState, action:GameAction):GameState {
    switch(action.type){
        case 'MONSTERS_LOADED':
            return {
                ...state,
                definitions: action.definitions,
                currentMonster: getRandomMonster(action.definitions),
                loading: false
            }
            
        case 'ATTACK': {
            if(!state.currentMonster) return state

            const newHealth = state.currentMonster.health - state.clickDamage

            if(newHealth <= 0){
                return {
                    ...state,
                    goldBalance: state.goldBalance + state.currentMonster.goldReward,
                    currentMonster: getRandomMonster(state.definitions)
                }
            }

            return {
                ...state,
                currentMonster: { ...state.currentMonster, health: newHealth }
            }
        }

        default:
            return state

    }
}