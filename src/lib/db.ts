// DB connection - force reload 4
import { PrismaClient } from "../../prisma/generated/client_v3";

const prismaClientSingleton = () => {
    return new PrismaClient();
};

declare global {
    var prismaGlobalV3: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prismaGlobalV3 ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobalV3 = prisma;
