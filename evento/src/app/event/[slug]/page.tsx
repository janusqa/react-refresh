import H1 from '@/components/H1';
import { getEvent } from '@/lib/server-utils';
import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export const generateMetadata = async ({ params }: Props) => {
    const { slug } = await params;

    const event = await getEvent(slug);

    return {
        title: event.name,
    } as Metadata;
};

export const generateStaticParams = () => {
    // top 100 most popular events
    // nextjs will pre-render these specific routes and make them static
    return [{ slug: 'comedy-extravaganza' }, { slug: 'dj-pratice-session' }];
};

export default async function EventPage({ params }: Props) {
    const { slug } = await params;

    const event = await getEvent(slug);

    return (
        <main>
            <section className="relative flex justify-center items-center overflow-hidden py-14 md:py-20">
                <Image
                    src={event.imageUrl}
                    alt="Event background image"
                    fill
                    quality={50}
                    sizes="(max-width:1280px) 100vw, 1280px"
                    className="object-cover blur-3xl z-0"
                    priority
                />
                <div className="relative flex flex-col items-center gap-6 md:flex-row lg:gap-16 z-1">
                    <Image
                        className="rounded-xl border-2 border-white/50 object-cover"
                        src={event.imageUrl}
                        alt={event.name}
                        width={300}
                        height={201}
                        priority
                    />

                    <div className="flex flex-col items-center h-[201px]">
                        <p className="text-white/75">
                            {new Date(event.date).toLocaleDateString('en-US', {
                                weekday: 'long',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </p>
                        <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
                            {event.name}
                        </H1>
                        <p className="whitespace-nowrap text-xl text-white/75">
                            Organized by{' '}
                            <span className="italic">
                                {event.organizerName}
                            </span>
                        </p>
                        <button className="bg-white/20 bg-blur text-lg capitalize mt-5 md:mt-auto w-[95vw] sm:w-full py-2 rounded-md border-white/10 border-2 transition focus:scale-105 hover:scale-105 active:scale-[1.02]">
                            Get tickets
                        </button>
                    </div>
                </div>
            </section>
            <div className="text-center px-5 py-16 min-h-[75vh]">
                <EventPageSection
                    heading="About this event"
                    body={event.description}
                />
                <EventPageSection heading="Location" body={event.location} />
            </div>
        </main>
    );
}

function EventPageSection({
    heading,
    body,
}: {
    heading: string;
    body: string;
}) {
    return (
        <section className="mb-12">
            <h2 className="text-2xl mb-2">{heading}</h2>
            <p className="text-lg leading-9 text-white/75 max-w-4xl mx-auto">
                {body}
            </p>
        </section>
    );
}
