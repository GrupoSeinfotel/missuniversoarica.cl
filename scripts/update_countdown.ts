import { PrismaClient } from "../prisma/generated/client_v3";

const prisma = new PrismaClient();

async function main() {
    const key = "HERO_COUNTDOWN";
    const value = "2026-04-24T18:00:00";

    console.log(`Actualizando ${key} a ${value} en Arica...`);

    await prisma.systemSetting.upsert({
        where: { key },
        update: { value },
        create: { key, value }
    });

    console.log("¡Actualización completada con éxito!");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
