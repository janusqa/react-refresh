import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type State = {
    searchText: string;
    bookmarks: number[];
    activeJobId: number | null;
    setSearchText: (text: string) => void;
    setBookmark: (id: number) => void;
    setActiveJobId: (id: number | null) => void;
};

const useSearchStore = create<State>()(
    persist(
        (set) => ({
            searchText: '',
            bookmarks: [],
            activeJobId: null,

            setSearchText: (text) => set({ searchText: text }),
            setBookmark: (id) => {
                set((state) => {
                    const bookmarks = state.bookmarks.includes(id)
                        ? state.bookmarks.filter((bookmark) => bookmark !== id)
                        : [...state.bookmarks, id];
                    return { bookmarks };
                });
            },
            setActiveJobId: (id) => set({ activeJobId: id }),
        }),
        {
            // persist only part of the state not the whole state. Sweet!!
            // to persist entire state just commento out partilize
            name: 'rmtdev-storage-bookmarks',
            partialize: (state) => ({
                bookmarks: state.bookmarks,
            }),
        }
    )
);

export const useSearchText = () => useSearchStore((state) => state.searchText);
export const useBookmarks = () => useSearchStore((state) => state.bookmarks);
export const useCurrentJobId = () =>
    useSearchStore((state) => state.activeJobId);

export const useSetSearchText = () =>
    useSearchStore((state) => state.setSearchText);
export const useSetBookmark = () =>
    useSearchStore((state) => state.setBookmark);
export const useSetActiveJobId = () =>
    useSearchStore((state) => state.setActiveJobId);
