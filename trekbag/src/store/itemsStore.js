import { create } from 'zustand';
import { initialItems } from '../lib/constants';
import { nanoid } from 'nanoid';
import { persist } from 'zustand/middleware';

export const useItemsStore = create(
    persist(
        (set) => ({
            items: initialItems,

            addItem: (item) =>
                set((state) => ({
                    items: [
                        ...state.items,
                        { id: nanoid(), name: item, packed: false },
                    ],
                })),

            removeItem: (id) =>
                set((state) => ({
                    items: state.items.filter((item) => item.id != id),
                })),

            markAllAsComplete: () =>
                set((state) => ({
                    items: state.items.map((item) => ({
                        ...item,
                        packed: true,
                    })),
                })),

            markAllAsInComplete: () =>
                set((state) => ({
                    items: state.items.map((item) => ({
                        ...item,
                        packed: false,
                    })),
                })),

            resetToInitial: () => set(() => ({ items: initialItems })),

            removeAllItems: () => set(() => ({ items: [] })),

            toggleItem: (id) =>
                set((state) => ({
                    items: state.items.map((item) => {
                        if (item.id === id)
                            return { ...item, packed: !item.packed };
                        return { ...item };
                    }),
                })),
        }),
        {
            name: 'items',
        }
    )
);

export const useItems = () => useItemsStore((state) => state.items);
export const useItemsTotal = () => useItemsStore((state) => state.items.length);
export const useItemsPackedTotal = () =>
    useItemsStore((state) => state.items.filter((item) => item.packed).length);
export const useAddItem = () => useItemsStore((state) => state.addItem);
export const useRemoveItem = () => useItemsStore((state) => state.removeItem);
export const useMarkAllAsComplete = () =>
    useItemsStore((state) => state.markAllAsComplete);
export const useMarkAllAsInComplete = () =>
    useItemsStore((state) => state.markAllAsInComplete);
export const useResetToInitial = () =>
    useItemsStore((state) => state.resetToInitial);
export const useRemoveAllItems = () =>
    useItemsStore((state) => state.removeAllItems);
export const useToggleItem = () => useItemsStore((state) => state.toggleItem);
