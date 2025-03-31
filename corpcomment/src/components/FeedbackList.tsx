import FeedbackItem from './FeedbackItem';
import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';
import {
    useFeedbackItemsErrorMessage,
    useIsFeedbackItemsLoading,
} from '../store/feedbackItemsStore';
import useFilteredFeedbackList from '../hooks/useFilteredFeedbackList';

export default function FeedbackList() {
    const isLoading = useIsFeedbackItemsLoading();
    const errorMessage = useFeedbackItemsErrorMessage();
    const filteredFeedbackItems = useFilteredFeedbackList();

    return (
        <ol className="feedback-list">
            {isLoading && <Spinner />}
            {errorMessage && <ErrorMessage message={errorMessage} />}
            {filteredFeedbackItems.map((item) => (
                <FeedbackItem key={item.id} feedbackItem={item} />
            ))}
        </ol>
    );
}
