// import 'server-only';
import { betterAuth } from 'better-auth';
import { prismaAdapter } from '@better-auth/prisma-adapter';
import { nextCookies } from 'better-auth/next-js';
import prisma from './prisma';

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: 'sqlite',
    }),
    emailAndPassword: {
        enabled: true,
    },
    session: {
        // cache user sessions in app to increse performance
        cookieCache: {
            enabled: true,
            maxAge: 60, // 60 = 1 min, 60 * 5 = 5 mins
        },
    },
    plugins: [nextCookies()],
});
