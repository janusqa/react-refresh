'use client';

import Link from 'next/link';
import React from 'react';
import Logo from './Logo';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const routes = [
    { name: 'Home', path: '/' },
    { name: 'All Events', path: '/events/all' },
];

export default function Header() {
    const activePathname = usePathname();

    return (
        <header className="flex items-center justify-between border-b border-white/10 h-14 px-3 sm:px-9">
            <Logo />
            <nav className="h-full">
                <ul className="flex gap-x-6 h-full text-sm">
                    {routes.map(({ path, name }) => (
                        <li
                            key={path}
                            className={cn(
                                'hover:text-custom-accent transition relative flex items-center',
                                {
                                    'text-white': activePathname === path,
                                    'text-white/50': activePathname !== path,
                                }
                            )}
                        >
                            <Link href={path}>{name}</Link>
                            {activePathname === path && (
                                <motion.div
                                    layoutId="header-active-link"
                                    className="bg-custom-accent h-1 w-full absolute bottom-0"
                                ></motion.div>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
