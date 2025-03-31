import { create } from 'zustand';
import { type FeedbackItemType } from '../lib/types';
import { extractHashtags } from '../lib/utils';

const companyName = (text: string) => extractHashtags(text)[0] || '';

const createItem = (text: string): FeedbackItemType => {
    const company = companyName(text);

    return {
        id: new Date().getTime(),
        upvoteCount: 0,
        badgeLetter: company[0]?.toUpperCase() || '?',
        company,
        text,
        daysAgo: 0,
    };
};

type State = {
    items: FeedbackItemType[];
    isLoading: boolean;
    errorMessage: string;
    selectedCompany: string;
    selectCompany: (company: string) => void;
    addItem: (text: string) => Promise<void>;
    getItems: () => Promise<void>;
};

export const useItemsStore = create<State>()((set) => ({
    items: [],
    isLoading: false,
    errorMessage: '',
    selectedCompany: '',

    selectCompany: (company: string) => {
        set({ selectedCompany: company });
    },

    addItem: async (text) => {
        try {
            const newItem = createItem(text);

            set((state) => ({ items: [...state.items, newItem] }));

            set({ isLoading: true });
            const response = await fetch(
                'https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ ...newItem, id: undefined }),
                }
            );

            if (!response.ok) {
                set((state) => ({
                    items: state.items.filter((item) => item.id != newItem.id),
                }));
                throw new Error('Failed to add feedback item');
            }

            // const data = await response.json();

            // set((state) => ({
            //     items: state.items.map((item) =>
            //         item.id === newItem.id
            //             ? { ...data.feedback, id: data.feedback.id }
            //             : item
            //     ),
            // }));

            set({ errorMessage: '' });
        } catch (error) {
            if (error instanceof Error) {
                set({ errorMessage: error.message });
            } else {
                set({ errorMessage: 'An unknown error occurred' });
            }
        } finally {
            set({ isLoading: false });
        }
    },

    getItems: async () => {
        set({ isLoading: true });

        try {
            const response = await fetch(
                'https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks'
            );

            if (!response.ok) {
                throw new Error('Failed to fetch feedback items');
            }

            const data = await response.json();
            set({ items: data.feedbacks });
            set({ errorMessage: '' });
        } catch (error) {
            if (error instanceof Error) {
                set({ errorMessage: error.message });
            } else {
                set({ errorMessage: 'An unknown error occurred' });
            }
        } finally {
            set({ isLoading: false });
        }
    },
}));

export const useFeedbackItems = () => useItemsStore((state) => state.items);
export const useSelectedCompany = () =>
    useItemsStore((state) => state.selectedCompany);
export const useSelectCompany = () =>
    useItemsStore((state) => state.selectCompany);
export const useAddFeedbackItem = () => useItemsStore((state) => state.addItem);
export const useGetFeedbackItems = () =>
    useItemsStore((state) => state.getItems);
export const useIsFeedbackItemsLoading = () =>
    useItemsStore((state) => state.isLoading);
export const useFeedbackItemsErrorMessage = () =>
    useItemsStore((state) => state.errorMessage);
