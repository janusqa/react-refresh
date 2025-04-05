import { useEffect, useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
    const isClient = typeof window !== 'undefined';

    const [value, setValue] = useState<T>(() => {
        if (!isClient) {
            return initialValue;
        }

        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(`Error reading localStorage key "${key}":`, error);
            return initialValue;
        }
    });

    useEffect(
        function () {
            if (!isClient) {
                return;
            }

            try {
                localStorage.setItem(key, JSON.stringify(value));
            } catch (error) {
                console.error(
                    `Error setting localStorage key "${key}":`,
                    error
                );
            }
        },
        [key, value, isClient]
    );

    return [value, setValue] as const;
}
