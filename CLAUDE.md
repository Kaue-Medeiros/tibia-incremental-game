# Tibia Incremental Game

Jogo **incremental + idle** com tema de Tibia, inspirado em **Clicker Heroes** e
**Cookie Clicker**. O jogador clica num monstro para reduzir a vida dele; ao morrer, o
monstro dropa ouro, que compra upgrades, itens e personagens (auto-attack).

Projeto em evolução para **full-stack**: as definições dos monstros sairão de um array no
código e passarão a viver num PostgreSQL, servidas por um backend Fastify via Prisma.

## Stack

- **Monorepo:** NX (v22) + npm workspaces
- **Frontend:** Vite + React 19 + TypeScript
- **Backend:** Fastify + TypeScript (roda com `tsx`)
- **Banco:** PostgreSQL (via Docker), ORM **Prisma 7** (driver adapter `@prisma/adapter-pg`)
- **Imagens:** Cloudflare R2 (bucket público; `imageUrl` guardada no banco)
- **Infra:** Docker + Docker Compose (db + backend + frontend)

## Estrutura do repositório

```
.
├── apps/
│   ├── frontend/          # app Vite + React (o jogo) + Dockerfile
│   │   └── src/
│   │       ├── game/      # lógica do jogo (types, monsters, reducer...)
│   │       └── components/# componentes de UI (ex.: HealthBar)
│   └── backend/           # API Fastify + Dockerfile
│       ├── src/           # main.ts (servidor) + prisma.ts (client singleton)
│       ├── prisma/        # schema.prisma, migrations, seed.ts
│       └── generated/     # Prisma Client gerado (gitignored)
├── libs/
│   └── shared/            # tipos compartilhados (MonsterDefinition, Monster)
├── docker-compose.yml     # db (Postgres) + backend + frontend
├── nx.json                # config do NX (plugin @nx/vite infere targets)
├── tsconfig.base.json     # TS base; define o path @tibia/shared
└── package.json           # workspaces: apps/*, libs/*
```

### Pacotes/aliases
- `@tibia/shared` → `libs/shared/src/index.ts`. Importável de qualquer projeto, sem
  caminhos relativos. É a **fonte única** de tipos compartilhados.

## Comandos

Rodar da **raiz** do repositório (não de dentro de `apps/`):

```bash
# Frontend
npx nx serve frontend          # dev server do jogo (http://localhost:5173)
npx nx build frontend          # build de produção (tsc -b && vite build)

# Backend (API em http://localhost:3333)
npm run -w backend dev         # sobe a API com auto-reload (tsx watch)
npm run -w backend seed        # popula a tabela Monster (rat/wolf/sheep)
npm exec -w backend -- prisma migrate dev --name <nome>   # cria/aplica migração
npm exec -w backend -- prisma generate                    # gera o Prisma Client
npm exec -w backend -- prisma studio                      # UI visual do banco

# Sistema inteiro via Docker
docker compose up --build -d   # sobe db + backend + frontend (jogo em :4173)
docker compose down            # para tudo (-v também apaga o volume do banco)

npm install                    # instala deps de todos os workspaces
```

> Para desenvolvimento ativo (hot reload), prefira `nx serve frontend` + `npm run -w
> backend dev`. O Docker é o "sistema completo, pronto pra rodar com um comando".

## Convenções

- **Idioma do código:** tudo em **inglês**, nomes em **camelCase** (não snake_case).
- **Tipos compartilhados** (usados por front E back) vão em `@tibia/shared`. Tipos só do
  frontend (ex.: `GameState`, estado de runtime do navegador) ficam no frontend.
- **Imutabilidade no React:** nunca mutar estado direto; criar objeto novo (`{...obj}`).

## Decisões de arquitetura

- **Banco guarda *definições* de monstro** (o "molde": `name`, `maxHealth`, `goldReward`,
  `imageUrl`), **não** a vida atual. `health` é estado de runtime do cliente: o backend
  entrega o molde, o frontend cria a instância viva e a faz perder vida. Reflete a função
  `spawnMonster` em `apps/frontend/src/game/monsters.ts`.

## Modo de trabalho (para o Claude)

O dono do projeto (Kaue) está **aprendendo** o stack e quer atuar como aluno: ao invés de
receber código pronto, prefere que o Claude **ensine** — quebrar em etapas, introduzir os
conceitos novos, passar a task e depois revisar. Iniciante em Prisma, Fastify, Postgres,
Cloudflare R2 e NX. Ver memória do projeto para detalhes.
