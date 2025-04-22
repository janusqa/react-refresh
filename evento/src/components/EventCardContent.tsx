import { EventoEvent } from '@/lib/types';
import Image from 'next/image';
import React from 'react';

export default function EventCardContent({ event }: { event: EventoEvent }) {
    return (
        <section className="relative flex flex-col h-[380px] max-w-[500px] bg-white/[3%] rounded-xl overflow-hidden transition hover:scale-105 active:scale-[1.02]">
            <Image
                src={event.imageUrl}
                alt="Event Image"
                width={500}
                height={280}
                className="h-[60%] object-fit"
            />
            <div className="flex flex-col flex-1 items-center justify-center">
                <h2 className="text-2xl font-semibold">{event.name}</h2>
                <p className="italic text-white/75">By {event.organizerName}</p>
                <p className="text-sm text-white/50 mt-4">{event.location}</p>
            </div>
            <section className="flex flex-col items-center justtify-center absolute left-[12px] top-[12px] h-[45px] w-[45px] bg-black/30 rounded-md">
                <p className="text-xl font-bold -mb-[5px]">
                    {new Date(event.date).toLocaleDateString('en-US', {
                        day: '2-digit',
                    })}
                </p>
                <p className="text-xs uppercase text-custom-accent">
                    {new Date(event.date).toLocaleDateString('en-US', {
                        month: 'short',
                    })}
                </p>
            </section>
        </section>
    );
}
