// import { PrismaClient } from '@prisma/client';
// import { PrismaClient } from '@prisma/client';


import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
// let prisma;

if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
} else {
    if (!global.cachedPrisma) {
        global.cachedPrisma = new PrismaClient();
    }
    prisma = global.cachedPrisma;
}

export const db = prisma;
