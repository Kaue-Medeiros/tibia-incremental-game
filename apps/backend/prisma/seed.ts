import { prisma } from '../src/prisma'

async function main() {

  const R2_BASE = 'https://pub-4234ad56a4554460871a4a2882ab4bc2.r2.dev'

  // limpa a tabela monsters
  await prisma.monster.deleteMany()


  // adiciona os dados na tabela monsters
  await prisma.monster.createMany({ data: [{
    name: 'Rat',
    maxHealth: 10,
    goldReward: 2,
    imageUrl: `${R2_BASE}/rat.gif`
  }, {
    name: 'Sheep',
    maxHealth: 5,
    goldReward: 1,
    imageUrl: `${R2_BASE}/sheep.gif`
  }, {
    name: 'Wolf',
    maxHealth: 20,
    goldReward: 4,
    imageUrl: `${R2_BASE}/wolf.gif`
  }
  ]})
  
}

// Executa a main e, depois de fazer o seed, desconecta da db
main()
  .then(() => console.log('✅ Seed concluído'))
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
