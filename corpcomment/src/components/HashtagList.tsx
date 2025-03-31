import { useIsFeedbackItemsLoading } from '../store/feedbackItemsStore';
import HashtagItem from './HashtagItem';
import useCompanyList from '../hooks/useCompanyList';

export default function HashtagList() {
    const isLoading = useIsFeedbackItemsLoading();
    const companyList = useCompanyList();

    if (isLoading) return null;

    return (
        <ul className="hashtags">
            {companyList.map((company) => (
                <HashtagItem key={company} hashtag={company} />
            ))}
        </ul>
    );
}
