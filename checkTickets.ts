import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const txs = await prisma.ticketEventTransaction.findMany({
    select: { id: true, commerceOrder: true, candidateId: true, ticketType: true, status: true, quantity: true },
    where: { status: "PAID" },
    orderBy: { createdAt: 'desc' },
    take: 10
  });
  console.log('Last 10 PAID TicketEventTransactions:');
  console.dir(txs, { depth: null });
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
