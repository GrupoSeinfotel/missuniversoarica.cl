import { PrismaClient } from './prisma/generated/client_v3';

const prisma = new PrismaClient();

async function findTopVoters() {
  try {
    // 1. Agrupar por voterId (Usuarios registrados)
    const topRegistered = await prisma.vote.groupBy({
      by: ['voterId'],
      where: {
        voterId: { not: 'system' }
      },
      _count: { id: true },
      _sum: { amount: true },
      orderBy: {
        _sum: { amount: 'desc' }
      },
      take: 5
    });

    console.log("Top Votantes Registrados (por puntos):");
    for (const v of topRegistered) {
        const user = await prisma.user.findUnique({
            where: { id: v.voterId! },
            select: { email: true }
        });
        console.log(`Email: ${user?.email || 'N/A'}, Votos: ${v._count.id}, Puntos: ${v._sum.amount}`);
    }

    // 2. Agrupar por IP (para ver si hay alguien sin registro muy activo)
    const topIps = await prisma.vote.groupBy({
      by: ['ipAddress'],
      _count: { id: true },
      _sum: { amount: true },
      orderBy: {
        _sum: { amount: 'desc' }
      },
      take: 5
    });

    console.log("\nTop IPs (por puntos):");
    topIps.forEach(v => {
        console.log(`IP: ${v.ipAddress}, Votos: ${v._count.id}, Puntos: ${v._sum.amount}`);
    });

  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

findTopVoters();
