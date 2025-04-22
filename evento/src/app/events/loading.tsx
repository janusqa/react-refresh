import SkeletonCard from '@/components/SkeletonCard';
import React from 'react';

export default function Loading() {
    return (
        <div className="flex flex-wrap gap-20 justify-center max-w-[1100px] mx-auto px-[20px] py-24">
            {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCard key={i} />
            ))}
        </div>
    );
}
