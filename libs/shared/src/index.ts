// Porta de entrada da lib compartilhada (@tibia/shared).
// Tipos e código usados por frontend E backend ficam aqui.

// Cria o Molde, que o banco de dados retorna
export interface MonsterDefinition {
    id: number
    name: string;
    maxHealth: number;
    goldReward: number;
    imageUrl: string | null;
}

export interface Monster extends MonsterDefinition{
    health: number;
}
