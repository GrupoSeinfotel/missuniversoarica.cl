const { PrismaClient } = require('../prisma/generated/client_v3');
const prisma = new PrismaClient();

// REGLAS DE NEGOCIO VIP LEGACY
// Packs disponibles: 30, 80, 200 votos.
// Cantidad de packs: 1 a 3.
// Bono: 10% si cantidad > 1.
// Ratio Correos: 90% Normal (Gmail/Hotmail/etc) / 10% Universitario (@alumnos.uta.cl).
// Cuota: 5 perfiles por ejecución diaria (por ciudad).

const VOTE_PACKS = [30, 80, 200];
const MAX_ITEMS = 3;

// Pool extendido de nombres y dominios para generar identidades realistas
const FIRST_NAMES = ["Carlos", "Jose", "Camila", "Paola", "Nicolas", "Laura", "Diego", "Sofia", "Sebastian", "Javiera", "Fernanda", "Valentina", "Jorge", "Antonella", "Ricardo", "Marcelo", "Andres", "Luisa", "Felipe", "Constanza"];
const LAST_NAMES = ["Lopez", "Garcia", "Martinez", "Rodriguez", "Perez", "Sanchez", "Gonzalez", "Munoz", "Rojas", "Sepulveda", "Morales", "Ortiz", "Silva", "Fuentes", "Castro"];
const NORMAL_DOMAINS = ["gmail.com", "hotmail.com", "outlook.com", "icloud.com", "yahoo.com", "live.cl"];
const UNI_DOMAINS = ["alumnos.uta.cl"];

function generateIdentity(isUniversity) {
    const fName = FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
    const lName = LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)];
    const domain = isUniversity ? UNI_DOMAINS[0] : NORMAL_DOMAINS[Math.floor(Math.random() * NORMAL_DOMAINS.length)];
    const year = 1980 + Math.floor(Math.random() * 25);
    const rand = Math.floor(Math.random() * 999);

    // Formato ofuscado solicitado por el usuario o similar real: cam8123***@hotmail.com
    const emailPrefix = `${fName.toLowerCase().substring(0, 3)}${year}${rand}`;
    const maskedEmail = `${emailPrefix}***@${domain}`;

    return maskedEmail;
}

async function syncLegacyBatch() {
    console.log("🚀 Iniciando Sincronización VIP Legacy ARICA...");

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // 1. Verificar cuota de hoy (Límite 5)
    const injectedToday = await prisma.vote.count({
        where: {
            type: "LEGACY_PREMIUM",
            createdAt: { gte: today }
        }
    });

    if (injectedToday >= 5) {
        console.log(`⚠️ Cuota diaria alcanzada (${injectedToday}/5).`);
        return;
    }

    const remaining = 5 - injectedToday;
    const candidates = await prisma.candidate.findMany({
        where: { status: "APPROVED" },
        select: { id: true }
    });

    if (candidates.length === 0) {
        console.log("❌ Sin candidatas aprobadas.");
        return;
    }

    // 2. Inyectar registros hasta completar cuota
    for (let i = 0; i < remaining; i++) {
        // Ratio 90/10
        const isUni = Math.random() < 0.10;
        const guestEmail = generateIdentity(isUni);

        // Selección de votos aleatoria según packs
        const pack = VOTE_PACKS[Math.floor(Math.random() * VOTE_PACKS.length)];
        const qty = 1 + Math.floor(Math.random() * MAX_ITEMS);
        const totalVotes = Math.floor((pack * qty) * (qty > 1 ? 1.1 : 1.0));

        const randomCandidate = candidates[Math.floor(Math.random() * candidates.length)];

        await prisma.vote.create({
            data: {
                candidateId: randomCandidate.id,
                guestEmail: guestEmail,
                amount: totalVotes,
                type: "LEGACY_PREMIUM",
                ipAddress: `186.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`
            }
        });

        console.log(`✅ [ARICA] ${guestEmail} -> ${totalVotes} votos (${qty}x${pack} + bono)`);
    }

    console.log(`🎉 Finalizado. 5 nuevos perfiles inyectados en Arica.`);
}

syncLegacyBatch()
    .catch(err => console.error("❌ Error en ARICA:", err))
    .finally(() => prisma.$disconnect());
