import { useMemo } from 'react';
import {
    useFeedbackItems,
    useSelectedCompany,
} from '../store/feedbackItemsStore';

const useFilteredFeedbackList = () => {
    const feedbackItems = useFeedbackItems();
    const selectedCompany = useSelectedCompany();

    const filteredFeedbackItems = useMemo(
        () =>
            feedbackItems.filter((item) =>
                selectedCompany.trim().length === 0
                    ? true
                    : item.company.toLowerCase() ===
                      selectedCompany.toLowerCase()
            ),
        [feedbackItems, selectedCompany]
    );

    return filteredFeedbackItems;
};

export default useFilteredFeedbackList;
