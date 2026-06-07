import { useEffect, useReducer } from "react"
import { gameReducer } from "./reducer"
import { initialState } from "./initialState"
import type { MonsterDefinition } from "@tibia/shared"

// Meu Custom Hook useGame
export function useGame() {
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

    return { state, dispatch }
}