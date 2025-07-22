// prisma/test-seed.ts
import { PrismaClient } from '../generated/prisma';
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      email: 'test@example.com',
      password: '1234',
      boletos: {
        create: [
          { numero: 101 },
          { numero: 102 },
        ],
      },
    },
  });

  console.log('Usuario creado con boletos:', user);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
