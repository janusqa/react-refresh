// force functions to run on the server by using server-only npm package. NB!!! THIS IS NOT SERVER ACTIONS OR RELATED TO IT !!!
// npm i server-only@latest
// then import it into files that have functions that should run on server only
// import "server-only"

import 'server-only';

import { type EventoEvent } from '@/lib/types';
import prisma from '@/lib/db';
import { notFound } from 'next/navigation';
import { unstable_cache } from 'next/cache';

// fetch already places results in the data cache, but if we are using
// an orm it does not happen by default. Hence if we want to cache results
// fetched by an orm (and not fetch) we can use NextJS unstable_cache to do it
export const getEvents = unstable_cache(
    async (
        city: string,
        skip: number,
        take: number,
        revalidate: number = 300
    ) => {
        // return await getData<EventoEvent[]>(
        //     `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
        //     revalidate
        // );
        console.log(revalidate);
        const events =
            city.toLowerCase() !== 'all'.toLowerCase()
                ? await prisma.$queryRaw<EventoEvent[]>`
        SELECT * 
        FROM "EventoEvent" 
        WHERE LOWER(city) = LOWER(${city})
        ORDER BY date
        LIMIT ${take} OFFSET ${skip};
    `
                : await prisma.$queryRaw<EventoEvent[]>`
        SELECT * 
        FROM "EventoEvent"
        ORDER BY date
        LIMIT ${take} OFFSET ${skip};
    `;

        const [result] =
            city.toLowerCase() !== 'all'.toLowerCase()
                ? await prisma.$queryRaw<{ totalCount: number }[]>`
        SELECT COUNT(id) as totalCount
        FROM "EventoEvent" 
        WHERE LOWER(city) = LOWER(${city})
        `
                : await prisma.$queryRaw<{ totalCount: number }[]>`
        SELECT COUNT(id) AS totalCount 
        FROM "EventoEvent"
        `;

        return { events, totalCount: Number(result.totalCount) };
    }
);

export const getEvent = unstable_cache(
    async (slug: string, revalidate: number = 300) => {
        // return await getData<EventoEvent>(
        //     `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`,
        //     revalidate
        // );
        console.log(revalidate);
        const event = await prisma.$queryRaw<EventoEvent[]>`
        SELECT * 
        FROM "EventoEvent" 
        WHERE LOWER(slug) = LOWER(${slug});
    `;

        if (event.length === 0) return notFound();

        return event[0];
    }
);
