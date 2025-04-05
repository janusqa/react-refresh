import { useCallback, useMemo } from 'react';
import { useSearchJobItemsTQ } from '../hooks/jobs';
import { usePagination } from '../hooks/usePagination';
import { type TSortMethod } from '../lib/types';
import { useSetSortMethod, useSortMethod } from '../store/settingsStore';
import JobList from './JobList';
import PaginationControls from './PaginationControls';
import ResultsCount from './ResultsCount';
import SortingControls from './SortingControls';

export default function Sidebar() {
    // const { jobItems, jobItemsLoading } = useJobItems();

    const sortMethod = useSortMethod();
    const setSortMethod = useSetSortMethod();

    const {
        data: jobItems,
        isLoading: jobItemsLoading,
        isError,
        error,
    } = useSearchJobItemsTQ();

    const jobItemsSorted = useMemo(
        () =>
            [...(jobItems ?? [])].sort((a, b) => {
                if (sortMethod === 'relevance') {
                    return b.relevanceScore - a.relevanceScore;
                } else if (sortMethod === 'recent') {
                    return b.daysAgo - a.daysAgo;
                }
                return 0;
            }),
        [jobItems, sortMethod]
    );

    const {
        items: jobItemsPage,
        page,
        count,
        prevPage,
        nextPage,
        lastPage,
        setCurrentPage,
    } = usePagination(jobItemsSorted);

    const handleSort = useCallback(
        (method: TSortMethod) => {
            setSortMethod(method);
            setCurrentPage(1); // Reset to page 1 when sorting changes
        },
        [setCurrentPage, setSortMethod]
    );

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <ResultsCount count={count} />
                <SortingControls handleSort={handleSort} />
            </div>
            <JobList
                jobItems={jobItemsPage}
                isLoading={jobItemsLoading}
                isError={isError}
                error={error}
            />
            <PaginationControls
                count={count}
                currentPage={page}
                prevPage={prevPage}
                nextPage={nextPage}
                lastPage={lastPage}
            />
        </div>
    );
}
