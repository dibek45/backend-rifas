import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.findMany({
    include: { boletos: true },
  });

  console.log('Usuarios con boletos:', users);
}

main()
  .catch(e => {
    console.error('❌ Error ejecutando consulta:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
