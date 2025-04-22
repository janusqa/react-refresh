import React from 'react';
import EventCard from './EventCard';
import { getEvents } from '@/lib/server-utils';
import EventCardContent from './EventCardContent';
import PaginationControls from './PaginationControls';
import { PAGE_LIMIT } from '@/lib/constants';

type Props = {
    city: string;
    page?: number;
    limit?: number;
};

export default async function EventsList({
    city,
    page = 1,
    limit = PAGE_LIMIT,
}: Props) {
    const currentPage = Math.max(page, 1);
    const resultsPerPage = Math.max(Math.min(limit, PAGE_LIMIT), 1);
    const skip = (currentPage - 1) * resultsPerPage;
    const take = resultsPerPage;

    const { events, totalCount } = await getEvents(city, skip, take);

    // Calculate current page (1-based)
    const totalPages = Math.max(1, Math.ceil(totalCount / take));

    // Calculate previous and next pages with boundaries
    const prevPage = Math.max(1, currentPage - 1);
    const nextPage = Math.min(totalPages, currentPage + 1);

    const prevUrl = `/events/${city}?page=${prevPage}&limit=${take}`;
    const nextUrl = `/events/${city}?page=${nextPage}&limit=${take}`;

    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
                {events.map((event) => (
                    <section key={event.id}>
                        <EventCard event={event}>
                            <EventCardContent event={event} />
                        </EventCard>
                    </section>
                ))}
            </section>
            <PaginationControls prevUrl={prevUrl} nextUrl={nextUrl} />
        </>
    );
}
