import { useMemo } from 'react';
import { useFeedbackItems } from '../store/feedbackItemsStore';

const useCompnayList = () => {
    const feedbackItems = useFeedbackItems();

    const companyList = useMemo(
        () => [
            ...new Set(feedbackItems.map((item) => item.company.toLowerCase())),
        ],
        [feedbackItems]
    );

    return companyList;
};

export default useCompnayList;
