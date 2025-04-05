import { BookmarkFilledIcon } from '@radix-ui/react-icons';
import { useBookmarks, useSetBookmark } from '../store/searchStore';

type Props = {
    jobId: number;
};

export default function BookmarkIcon({ jobId }: Props) {
    const setBookmark = useSetBookmark();
    const bookmarks = useBookmarks();

    const handleBookmark = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        setBookmark(jobId);
        e.stopPropagation();
        // we need this too because the button is inside an
        // <a> tag which ignores stopPropagation. So we
        // need to stop the default behaviour of onClick for
        // for <a> tags. Other tags obey stopPropagation.
        e.preventDefault();
    };

    return (
        <button onClick={handleBookmark} className="bookmark-btn">
            <BookmarkFilledIcon
                className={bookmarks.includes(jobId) ? 'filled' : ''}
            />
        </button>
    );
}
