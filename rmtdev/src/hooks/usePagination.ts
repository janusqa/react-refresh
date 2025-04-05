import { useMemo } from 'react';
import {
    useCurrentPage,
    usePageSize,
    useSetPage,
} from '../store/paginationStore';

export function usePagination<T>(items: T[] | undefined) {
    const page = useCurrentPage();
    const size = usePageSize();
    const count = items?.length ?? 0;
    const lastPage = Math.ceil(count / size);
    const setCurrentPage = useSetPage();

    const startIndex = (page - 1) * size;
    const endIndex = page * size;
    const paginatedItems = useMemo(
        () => items?.slice(startIndex, endIndex) ?? [],
        [items, startIndex, endIndex]
    );

    return {
        items: paginatedItems,
        page,
        count,
        prevPage: Math.max(1, page - 1),
        nextPage: Math.min(page + 1, lastPage),
        lastPage,
        setCurrentPage,
    } as const;
}
