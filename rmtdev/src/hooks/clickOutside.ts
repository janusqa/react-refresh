import { RefObject, useEffect } from 'react';

export function useClickOutside(
    refs: RefObject<HTMLElement | null>[],
    handler: () => void
) {
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            if (
                !refs.some(
                    (ref) => ref?.current && ref.current.contains(target)
                )
            ) {
                handler();
            }
        };

        document.addEventListener('click', handleClickOutside);

        return function () {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [handler, refs]);
}
