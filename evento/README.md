### How to scaffold
- npx create-next-app@latest . 
- npm run dev

### scaffold sqlite db with prisma
- npm i -D prisma@latest
- npm i @prisma/client@latest
- npx prisma init --datasource-provider sqlite
  - ```
    Your Prisma schema was created at prisma/schema.prisma
    You can now open it in your favorite editor.

    warn You already have a .gitignore file. Don't forget to add `.env` in it to not commit any private information.

    Next steps:
    1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
    2. Run prisma db pull to turn your database schema into a Prisma schema.
    3. Run prisma generate to generate the Prisma Client. You can then start querying your database.
    4. Tip: Explore how you can extend the ORM with scalable connection pooling, global caching, and real-time database events. Read: https://pris.ly/cli/beyond-orm

    ```
- create your model(s)
- npx prisma db push  // creates the db
- npx prisma generate
- seed database
  - create a seed.ts file in prisma folder
  - configure prisma seed in package.josn
  - npm i -D ts-node@latest
  - run "npx prisma db seed"


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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
