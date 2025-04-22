import Link from 'next/link';
import React from 'react';

const routes = [
    { name: 'Terms & Conditions', path: '/terms-conditions' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
];

export default function Footer() {
    return (
        <footer className="mt-auto flex items-center] justify-between h-16 border-t border-white/10 px-3 sm:px-9 text-xs text-white/25">
            <small className="text-xs">
                &copy; 2025 JanusQA. All rights reserved.
            </small>
            <ul className="flex gap-x-3 sm:gap-x-8">
                {routes.map(({ path, name }) => (
                    <li key={path}>
                        <Link href={path}>{name}</Link>
                    </li>
                ))}
            </ul>
        </footer>
    );
}
