import { useEffect, useState } from 'react';
import { BASE_API_URL } from '../lib/constants';
import { TJobItem, TJobItemDetails } from '../lib/types';
import {
    useBookmarks,
    useSearchText,
    useSetActiveJobId,
} from '../store/searchStore';
import { useDebounce } from './debounce';
import { useQueries, useQuery } from '@tanstack/react-query';
import { getJobItem, getJobItems } from '../lib/services';

export function useActiveJobId() {
    const setJobId = useSetActiveJobId();

    useEffect(
        function () {
            const handleHashChange = () => {
                const idStr = window.location.hash.match(/(?:\/)(\d+)$/)?.[1];
                if (idStr) {
                    const num = Number(idStr);
                    setJobId(Number.isInteger(num) ? num : null);
                } else {
                    setJobId(null);
                }
            };

            handleHashChange();

            addEventListener('hashchange', handleHashChange);

            return function () {
                window.removeEventListener('hashchange', handleHashChange);
            };
        },
        [setJobId]
    );
}

export function useSearchJobItemsTQ() {
    const searchText = useSearchText();
    const debouncedSearchText = useDebounce(searchText);

    const { data, isLoading, isError, error } = useQuery<TJobItem[], Error>({
        queryKey: ['job-items', debouncedSearchText],
        queryFn: () => getJobItems(debouncedSearchText),
        gcTime: 1000 * 60 * 60 * 1,
        staleTime: 1000 * 60 * 60 * 1, // 60 * 60 * 1, // 1h / ms * s * m * h where 1000ms = 1s
        enabled: Boolean(debouncedSearchText) && debouncedSearchText.length > 3,
        refetchOnWindowFocus: false, // for dev purposes
        retry: false,
        throwOnError: () => false,
    });

    return { data, isLoading, isError, error } as const;
}

export function useJobItemsTQ() {
    const bookmarks = useBookmarks();

    const results = useQueries({
        queries: bookmarks.map((bookmark) => ({
            queryKey: ['job-item', bookmark],
            queryFn: () => getJobItem(bookmark),
            gcTime: 1000 * 60 * 60 * 1,
            staleTime: 1000 * 60 * 60 * 1, // 60 * 60 * 1, // 1h / ms * s * m * h where 1000ms = 1s
            enabled: Boolean(bookmark),
            refetchOnWindowFocus: false, // for dev purposes
            retry: false,
            throwOnError: () => false,
        })),
    });

    const data = results
        .map((result) => result.data)
        .filter(
            (data): data is TJobItemDetails =>
                data !== null && data !== undefined
        );
    const isLoading = results.some((result) => result.isLoading);
    const isError = results.some((result) => result.isError);
    const error = results.find((result) => result.error)?.error ?? null;

    return { data, isLoading, isError, error } as const;
}

export function useJobItemTQ(jobId: number | null) {
    const { data, isLoading, isError, error } = useQuery<
        TJobItemDetails,
        Error
    >({
        queryKey: ['job-item', jobId],
        queryFn: () => getJobItem(jobId),
        gcTime: 1000 * 60 * 60 * 1,
        staleTime: 1000 * 60 * 60 * 1, // 60 * 60 * 1, // 1h / ms * s * m * h where 1000ms = 1s
        enabled: Boolean(jobId),
        refetchOnWindowFocus: false, // for dev purposes
        retry: false,
        throwOnError: () => false,
    });

    return { data, isLoading, isError, error } as const;
}

export function useJobItems() {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [jobItems, setJobItems] = useState<TJobItem[]>([]);

    const searchText = useSearchText();
    const debouncedSearchText = useDebounce(searchText);

    useEffect(
        function () {
            const fetchJobs = async (text: string) => {
                setIsLoading(true);

                try {
                    const response = await fetch(
                        `${BASE_API_URL}?search=${text}`
                    );

                    if (!response.ok) {
                        throw new Error('Failed to fetch Jobs');
                    }

                    const data = await response.json();
                    setJobItems(data.jobItems);
                    setErrorMessage('');
                } catch (error) {
                    if (error instanceof Error) {
                        setErrorMessage(error.message);
                        console.error(error.message);
                    } else {
                        setErrorMessage('An unknown error occurred');
                        console.error('An unknown error occurred');
                    }
                } finally {
                    setIsLoading(false);
                }
            };

            if (debouncedSearchText && debouncedSearchText.length > 3)
                fetchJobs(debouncedSearchText);
        },
        [debouncedSearchText]
    );

    return {
        jobItemsLoading: isLoading,
        jobItemsError: errorMessage,
        jobItems,
    } as const;
}

export function useJobItem(jobId: number | null) {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [jobItem, setJobItem] = useState<TJobItemDetails | null>(null);

    useEffect(
        function () {
            const fetchJobDetails = async (id: number) => {
                setIsLoading(true);
                try {
                    const response = await fetch(`${BASE_API_URL}/${id}`);

                    if (!response.ok) {
                        throw new Error('Failed to fetch Jobs');
                    }

                    const data = await response.json();
                    setJobItem(data.jobItem);
                    setErrorMessage('');
                } catch (error) {
                    if (error instanceof Error) {
                        setErrorMessage(error.message);
                        console.error(error.message);
                    } else {
                        setErrorMessage('An unknown error occurred');
                        console.error('An unknown error occurred');
                    }
                } finally {
                    setIsLoading(false);
                }
            };

            if (jobId !== null) fetchJobDetails(jobId);
        },
        [jobId]
    );

    return {
        jobItemLoading: isLoading,
        jobItemError: errorMessage,
        jobItem,
    } as const;
}
