// import { PrismaClient } from '@prisma/client';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();
// const globalObj = typeof window !== 'undefined' ? window : global;

// if (!globalObj.client) {
//   globalObj.client = new PrismaClient();
// }

// const client = globalObj.client;

// export default client;
// import { PrismaClient } from "@prisma/client";


// let prisma;
// index.js
import { PrismaClient } from '@prisma/client';

let prisma;

if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
} else {
    if (!global.cachedPrisma) {
        global.cachedPrisma = new PrismaClient();
    }
    prisma = global.cachedPrisma;
}

export const db = prisma;
