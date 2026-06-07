import 'dotenv/config'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../generated/prisma/client'

const connectionString = process.env.DATABASE_URL
if(!connectionString){
    throw new Error(`DATABASE_URL nao definida em .env`)
}

const adapter = new PrismaPg({connectionString})

// Exporta prisma, a conexao com a db, que vai ser chamada pelos outros arquivos do backend
export const prisma = new PrismaClient({ adapter }) 