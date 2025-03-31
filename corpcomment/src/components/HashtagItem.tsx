import { useSelectCompany } from '../store/feedbackItemsStore';

type HashtagItemProps = {
    hashtag: string;
};

export default function HashtagItem({ hashtag }: HashtagItemProps) {
    const setSelectedCompany = useSelectCompany();
    return (
        <li key={hashtag}>
            <button onClick={() => setSelectedCompany(hashtag)}>
                #{hashtag}
            </button>
        </li>
    );
}
