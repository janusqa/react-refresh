import { TJobItem } from '../lib/types';
import { useCurrentJobId } from '../store/searchStore';
import BookmarkIcon from './BookmarkIcon';

type Props = {
    jobItem: TJobItem;
};

export default function JobListItem({
    jobItem: { id, badgeLetters, title, company, daysAgo },
}: Props) {
    const activeJobId = useCurrentJobId();
    const isActive = activeJobId === id;

    return (
        <li className={`job-item ${isActive ? 'job-item--active' : ''}`.trim()}>
            <a href={`#/${id}`} className="job-item__link">
                <div className="job-item__badge">{badgeLetters}</div>

                <div className="job-item__middle">
                    <h3 className="third-heading">{title}</h3>
                    <p className="job-item__company">{company}</p>
                </div>

                <div className="job-item__right">
                    <BookmarkIcon jobId={id} />
                    <time className="job-item__time">{daysAgo}d</time>
                </div>
            </a>
        </li>
    );
}
