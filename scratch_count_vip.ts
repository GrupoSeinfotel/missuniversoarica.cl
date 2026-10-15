import { PrismaClient } from './prisma/generated/client_v3';

const prisma = new PrismaClient();

async function countTickets() {
  try {
    const vipCount = await prisma.ticket.count({
      where: {
        type: 'VIP'
      }
    });

    const vipPaidCount = await prisma.ticket.count({
      where: {
        type: 'VIP',
        status: 'PAID'
      }
    });

    const generalCount = await prisma.ticket.count({
      where: {
        type: 'GENERAL'
      }
    });

    const generalPaidCount = await prisma.ticket.count({
      where: {
        type: 'GENERAL',
        status: 'PAID'
      }
    });

    const flowNoCandidateCount = await prisma.ticket.count({
      where: {
        paymentMethod: 'FLOW',
        status: 'PAID',
        candidateId: null
      }
    });

    console.log(`=== REPORTE DE ENTRADAS ARICA ===`);
    console.log(`VIP Generadas: ${vipCount}`);
    console.log(`VIP Pagadas:   ${vipPaidCount}`);
    console.log(`GEN Generadas: ${generalCount}`);
    console.log(`GEN Pagadas:   ${generalPaidCount}`);
    console.log(`---------------------------------`);
    console.log(`Flow Pagadas sin Candidata: ${flowNoCandidateCount}`);
    console.log(`=================================`);
  } catch (error) {
    console.error("Error querying database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

countTickets();
