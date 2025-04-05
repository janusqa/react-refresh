import { create } from 'zustand';
import { RESULTS_PER_PAGE } from '../lib/constants';

type State = {
    page: number;
    pageSize: number;
    setPage: (page: number) => void;
    setPrevPage: () => void;
    setNextPage: (total: number) => void;
    setPageSize: (pageSize: number) => void;
};

const usePaginationStore = create<State>()((set) => ({
    page: 1,
    pageSize: RESULTS_PER_PAGE,

    setPage: (page) => set({ page: page }),
    setPrevPage: () =>
        set((state) => ({
            page: Math.max(1, state.page - 1),
        })),
    setNextPage: (total) =>
        set((state) => ({
            page: Math.min(state.page + 1, Math.ceil(total / state.pageSize)),
        })),
    setPageSize: (pageSize) => set({ pageSize: pageSize }),
}));

export const useCurrentPage = () => usePaginationStore((state) => state.page);
export const usePageSize = () => usePaginationStore((state) => state.pageSize);
export const useSetPage = () => usePaginationStore((state) => state.setPage);

export const useSetPrevPage = () =>
    usePaginationStore((state) => state.setPrevPage);
export const useSetNextPage = () =>
    usePaginationStore((state) => state.setNextPage);
export const useSetPageSize = () =>
    usePaginationStore((state) => state.setPageSize);
