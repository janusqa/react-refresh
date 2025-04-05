import { create } from 'zustand';
import { type TSortMethod } from '../lib/types';

type State = {
    sortMethod: TSortMethod;
    setSortMethod: (text: 'relevance' | 'recent') => void;
};

const useSettingsStore = create<State>()((set) => ({
    sortMethod: 'relevance',

    setSortMethod: (text) => set({ sortMethod: text }),
}));

export const useSortMethod = () =>
    useSettingsStore((state) => state.sortMethod);

export const useSetSortMethod = () =>
    useSettingsStore((state) => state.setSortMethod);
