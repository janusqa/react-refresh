import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import { useSetNextPage, useSetPrevPage } from '../store/paginationStore';

type Props = {
    count: number;
    prevPage: number;
    nextPage: number;
    currentPage: number;
    lastPage: number;
};
export default function PaginationControls({
    count,
    prevPage,
    nextPage,
    currentPage,
    lastPage,
}: Props) {
    const setPrevPage = useSetPrevPage();
    const setNextPage = useSetNextPage();

    return (
        <section className="pagination">
            {currentPage > 1 && (
                <button
                    onClick={(e) => {
                        setPrevPage();
                        e.currentTarget.blur();
                    }}
                    className="pagination__button pagination__button--previous"
                >
                    <ArrowLeftIcon />
                    Page {prevPage}
                </button>
            )}

            {currentPage < lastPage && (
                <button
                    onClick={(e) => {
                        setNextPage(count);
                        e.currentTarget.blur();
                    }}
                    className="pagination__button pagination__button--next"
                >
                    Page {nextPage}
                    <ArrowRightIcon />
                </button>
            )}
        </section>
    );
}
