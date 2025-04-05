import { type TSortMethod } from '../lib/types';
import { useSortMethod } from '../store/settingsStore';

type Props = {
    handleSort: (method: TSortMethod) => void;
};

export default function Sorting({ handleSort }: Props) {
    const sortMethod = useSortMethod();

    return (
        <section className="sorting">
            <i className="fa-solid fa-arrow-down-short-wide"></i>
            <SortButton
                label="relevance"
                handleSort={() => handleSort('relevance')}
                isActive={sortMethod === 'relevance'}
            />
            <SortButton
                label="recent"
                handleSort={() => handleSort('recent')}
                isActive={sortMethod === 'recent'}
            />
        </section>
    );
}

type SortButtonProps = {
    handleSort: () => void;
    isActive: boolean;
    label: TSortMethod;
};

function SortButton({ handleSort, label, isActive }: SortButtonProps) {
    return (
        <button
            onClick={handleSort}
            className={`sorting__button ${
                isActive ? 'sorting__button--active' : ''
            }`.trim()}
        >
            {label}
        </button>
    );
}
