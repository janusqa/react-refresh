import { TriangleUpIcon } from '@radix-ui/react-icons';
import { FeedbackItemType } from '../lib/types';
import { useState } from 'react';

type FeedbackItemProps = {
    feedbackItem: FeedbackItemType;
};

export default function FeedbackItem({
    feedbackItem: { upvoteCount, badgeLetter, company, text, daysAgo },
}: FeedbackItemProps) {
    const [open, setOpen] = useState(false);
    const [voteCount, setUpvoteCount] = useState(upvoteCount);

    const handleUpVoteCount = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        setUpvoteCount((prev) => prev + 1);
        e.currentTarget.disabled = true;
        e.stopPropagation(); // stop event bubbling up to the li
    };

    return (
        <li
            onClick={() => setOpen((prev) => !prev)}
            className={`feedback ${open ? 'feedback--expand' : ''}`.trim()}
        >
            <button onClick={handleUpVoteCount}>
                <TriangleUpIcon />
                <span>{voteCount}</span>
            </button>
            <div>
                <p>{badgeLetter}</p>
            </div>
            <div>
                <p>{company}</p>
                <p>{text}</p>
            </div>
            <p>{daysAgo == 0 ? 'NEW' : `${daysAgo}d`}</p>
        </li>
    );
}
