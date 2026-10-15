import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const tx = await prisma.ticketEventTransaction.findUnique({
    where: { id: 'cmo1yk8tb0013geb0bd0t25xz' },
    include: { tickets: true }
  });
  console.log('Transaction Info:');
  console.dir(tx, { depth: null });

  if (tx?.candidateId) {
    const candidate = await prisma.candidate.findUnique({
      where: { id: tx.candidateId },
      select: { fullName: true }
    });
    console.log('Associated Candidate:', candidate?.fullName);
  } else {
    console.log('No candidateId in transaction.');
  }

  const allRecentTxs = await prisma.ticketEventTransaction.findMany({
    where: { quantity: 3, status: 'PAID' },
    orderBy: { createdAt: 'desc' },
    take: 5
  });
  console.log('Recent transactions with 3 tickets:');
  console.dir(allRecentTxs, { depth: null });
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
