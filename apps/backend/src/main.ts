import Fastify from 'fastify'
import cors from '@fastify/cors'

import { prisma } from './prisma'

// Cria o servidor, logger mostra as requisições
const app = Fastify({ logger: true })
// Libera o CORS
await app.register(cors, {origin: true})

app.get('/monsters', async () => {
    return await prisma.monster.findMany()
})


await app.listen({port: 3333, host: '0.0.0.0'})