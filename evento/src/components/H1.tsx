import { cn } from '@/lib/utils';
import React from 'react';

export default function H1({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <h1
            className={cn(
                'text-3xl lg:text-6xl font-bold tracking-tight',
                className
            )}
        >
            {children}
        </h1>
    );
}
