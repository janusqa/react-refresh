'use client';

import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react';

export default function SearchForm() {
    const [searchText, setSearchText] = useState('');
    const router = useRouter();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!searchText) return;
        router.push(`/events/${searchText}`);
    };

    return (
        <form onSubmit={handleSubmit} className="w-full sm:w-[580px]">
            <input
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-custom-accent/50 transition focus:ring-2 focus:bg-white/10"
                placeholder="Search events in any city..."
                spellCheck={false}
            />
        </form>
    );
}
