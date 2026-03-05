# Quickstart

1) npx create-next-app@latest .
2) npx shadcn@latest init (use zinc color pallette when given option)
   1) npx shadcn@latest add <component> e.g. npx shadcn@latest add button
   2) ERROR AFTER INSTALLING: The solution that worked for me was start the project with npm run dev, comment the @import "tw-animate-css"; line in global.css save file, uncomment it and save file again.
   3) add the below to global.css to renable hand cursor on buttons.  V4 shadcn-ui removed the behaviour
      ```
      @layer base {
         button:not([disabled]),
         [role="button"]:not([disabled]) {
            cursor: pointer;
         }
      }
      ```
   

HOW to hard reset a nextJS project
- rm -rf .next
- npm run dev


# Prisma

## install 
- $ npm install prisma tsx @types/better-sqlite3 -D
- $ npm install @prisma/client @prisma/adapter-better-sqlite3 dotenv
- $ npx prisma init --datasource-provider sqlite --output ../src/generated/prisma

# create table schemas
Update ./prisma/schema.prisma with your table models

# prototype  & experiment changing and updating your shemas
- $ npx prisma db push  // use when prototyping or experimenting with changes.
...
...
- $ npx prisma db push
- $ npx prisma db push
...
...
- $ npx prisma db push 
- $ npx prisma migrate reset (npx prisma db push --force-reset)// after prototyping or experimenting reset the database which will cause full data loss
- $ npx prisma migrate dev --name <name-of-migration>  // run a migration to save your changes in a migration
- $ npx prisma generate

# seeding
// create a seed script called seed.ts
// configure primsa.config.ts with the loacation of this seed file
// examples: https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding#example-seed-scripts
```ts
import "dotenv/config";
import { defineConfig, env } from "prisma/config";
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts", 
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});
```
- $ npx prisma db seed

# use primsa in code
*** FOR NEXTJS SEE: https://www.prisma.io/docs/guides/frameworks/nextjs ***

otherwise:
```ts
import { PrismaClient } from "./generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL || "file:./dev.db",
});

export const prisma = new PrismaClient({ adapter });
```
---
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).


## Authentication/Authorization

### better-auth
- https://better-auth.com/docs/installation
- npm install better-auth  
- npm install @better-auth/prisma-adapter
- generate a secret key 
- add to .env
  - BETTER_AUTH_SECRET=
  - BETTER_AUTH_URL=
- set up /lib/auth.ts  (see docs for using different orms ect)
  - ```ts
      import { betterAuth } from "better-auth";
      import { prismaAdapter } from "better-auth/adapters/prisma";
      // If your Prisma file is located elsewhere, you can change the path
      import { PrismaClient } from "@/generated/prisma/client";

      const prisma = new PrismaClient();
      export const auth = betterAuth({
          database: prismaAdapter(prisma, {
              provider: "sqlite", // or "mysql", "postgresql", ...etc
          }),
      });
    ```
- setup lib/auth-client.ts for client components to use, lib/auth-session.ts for server components and actions, and lib/auth-session-middleware.ts for middle ware
- npx auth@latest generate
- npx prisma db push (or migrate command if you are using migrations)
- npx prisma generate (ALWAYS REGENERATE CLIENT AFTER DB CHANGES)
- setup the catch all routes api handler (see installation in docs)
  - /app/api/auth/[..all]/routes.ts
  - ```ts
      import { auth } from '@/lib/auth'; // path to your auth file
      import { toNextJsHandler } from 'better-auth/next-js';

      const authHandlers = toNextJsHandler(auth);

      export const { GET } = authHandlers;

      export async function POST(request: Request) {
          const clonedRequest = request.clone();

          // use ArcJet to do different protections here
          // It will use "request" so clone it so authHandlers
          // can use a copy of "request" while arcJet uses
          // "request"

          return authHandlers.POST(clonedRequest);
      }

    ```
- /proxy.ts
    - ```ts
        import { getSession } from './lib/auth-session';
        import { NextRequest, NextResponse } from 'next/server';

        export async function proxy(request: NextRequest) {
          const session = await getSession(request);

          if (!session) return NextResponse.redirect(new URL('/login', request.url));
        }

        export const config = {
            matcher: ['/app/:path*'],
        };
      ```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
