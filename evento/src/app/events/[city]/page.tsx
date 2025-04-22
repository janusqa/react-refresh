import EventsList from '@/components/EventsList';
import H1 from '@/components/H1';
import React, { Suspense } from 'react';
import Loading from '@/app/events/loading';
import { type Metadata } from 'next';
import { captilize } from '@/lib/utils';
import { z } from 'zod';

type Props = {
    params: Promise<{
        city: string;
    }>;
    searchParams: Promise<{
        [key: string]: string | string[] | undefined;
    }>;
};

const eventPageTitle = (city: string) =>
    city === 'all' ? 'All Events' : `Events in ${captilize(city)}`;

export const generateMetadata = async ({ params }: Props) => {
    const { city } = await params;

    return { title: eventPageTitle(city) } as Metadata;
};

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function EventsPage({ params, searchParams }: Props) {
    const { city } = await params;
    const { page, limit } = await searchParams;

    const parsedPage = pageNumberSchema.safeParse(page);
    const parsedLimit = pageNumberSchema.safeParse(limit);
    if (!parsedPage.success) throw Error('Invalid page');
    if (!parsedLimit.success) throw Error('Invalid limit');

    return (
        <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
            <H1 className="mb-20">{eventPageTitle(city)}</H1>
            <Suspense
                key={`${city}${parsedPage.data}${parsedLimit.data}`}
                fallback={<Loading />}
            >
                <EventsList
                    city={city}
                    page={parsedPage.data}
                    limit={parsedLimit.data}
                />
            </Suspense>
        </main>
    );
}
