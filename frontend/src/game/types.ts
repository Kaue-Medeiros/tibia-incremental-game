export interface Monster {
    name: string;
    maxHealth: number;
    health: number;
    goldReward: number;
}

export interface GameState {
    goldBalance: number;
    clickDamage: number;
    currentMonster: Monster;

}