// import 'server-only';

import { PrismaClient } from '@/generated/prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
const globalForPrisma = global as unknown as {
    prisma: PrismaClient;
};
const adapter = new PrismaBetterSqlite3({
    url: process.env.DATABASE_URL || 'file:./dev.db',
});
const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({
        adapter,
    });
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

async function applyPragmas() {
    await prisma.$executeRawUnsafe('PRAGMA journal_mode = WAL;');
    await prisma.$executeRawUnsafe('PRAGMA busy_timeout = 5000;');
    await prisma.$executeRawUnsafe('PRAGMA synchronous = NORMAL;');
    await prisma.$executeRawUnsafe('PRAGMA wal_autocheckpoint = 0;');
    await prisma.$executeRawUnsafe('PRAGMA foreign_keys = ON;');
    await prisma.$executeRawUnsafe('PRAGMA cache_size = -20000;');
    await prisma.$executeRawUnsafe('PRAGMA temp_store = MEMORY;');
    await prisma.$executeRawUnsafe('PRAGMA mmap_size = 2147483648;');
}

applyPragmas();

export default prisma;
