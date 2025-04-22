'use client';

import { EventoEvent } from '@/lib/types';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import React, { useRef } from 'react';

// To animate a component with framermotion we need to do this unlike how it is done with native html elements
// Also this uses some react hooks under hood so we need to make this component a client component
const MotionLink = motion.create(Link);

export default function EventCard({
    event,
    children,
}: {
    event: EventoEvent;
    children: React.ReactNode;
}) {
    const ref = useRef<HTMLAnchorElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'start start'],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

    return (
        <MotionLink
            ref={ref}
            href={`/event/${event.slug}`}
            style={{ scale: scaleProgress, opacity: opacityProgress }}
            initial={{ scale: 0.8, opacity: 0 }}
            className="block w-full h-full" // Ensure proper dimensions
        >
            {children}
        </MotionLink>
    );
}
