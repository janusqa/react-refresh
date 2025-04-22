import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function captilize(str: string) {
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

export async function getData<T>(url: string, revalidate: number = 300) {
    const response = await fetch(url, {
        next: {
            revalidate, // bust the cashe every five mins.
        },
    });

    const data = (await response.json()) as T;

    return data;
}

// DEPRECATED in favor of zod
// export function getSearchValue(
//     input: string | string[] | undefined,
//     defaultValue: number
// ): number {
//     if (input === undefined) return defaultValue;
//     const value = Array.isArray(input) ? input[0] : input;
//     const parsed = Number(value);
//     return isNaN(parsed)
//         ? defaultValue
//         : Math.max(0, Math.floor(parsed > 0 ? parsed : defaultValue)); // Ensure non-negative integer
// }
