import { PrismaClient } from '@prisma/client';

const globalObj = typeof window !== 'undefined' ? window : global;

if (!globalObj.client) {
  globalObj.client = new PrismaClient();
}

const client = globalObj.client;

export default client;
