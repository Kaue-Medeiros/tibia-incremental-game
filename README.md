# Projeto TibiaClicker Idle ( React + Vite & Typescript)

Monorepo do meu projeto Tibia Clicker Idle, que contém toda a stack do jogo clicker: Jogo simples, Rank (futuramente), ...

## Stack
| Subsistema | 
| --- |
| **Monorepo:** NX + npm workspaces | 
| **Frontend:** Vite + React 19 + Typescript |
| **Backend:** Fastify + Typescript (executado com tsx) |
| **Banco de Dados:** PostgreSQL + Prisma 7 (ORM) |
| **Imagens:** Object Storage do Cloudfare R2 |
| **Infra:** Docker + Docker Compose |



## Pre Requisitos
Node 22+ e npm
<br>
Docker + Docker Compose

## Setup

1. Clone o repositório e entre na pasta:
    ```bash
        git clone https://github.com/Kaue-Medeiros/tibia-incremental-game>
        cd tibia-incremental-game
    ```

2. Instale as dependências de todos os workspaces (a partir da raíz)
    ```bash
        npm install
    ```

3. Crie os arquivos de ambiente a partir dos exemplos
    ```bash
        cp .env.example .env
        cp apps/backend/.env.example apps/backend/.env
    ```


## Como Rodar

### 1. Inicializar o Banco (primeira vez sempre!)
Suba o Postgres e prepare o Schema + Dados:
```bash
    docker compose up -d db
    npm exec -w backend -- prisma generate deploy
    npx -w backend prisma db seed
```

### 2. Rodar em modo desenvolvimento
Em dois terminais, com hot reload:<br>
```bash
npm run -w backend dev          # API: http://localhost:3333
npx nx serve frontend           # Jogo: http://localhost:5173
```


### 3. Rodar tudo no Docker
Sobe a db + backend + frontend de uma vez:<br>
```bash 
docker compose up --build```          # Jogo: http://localhost:4173
