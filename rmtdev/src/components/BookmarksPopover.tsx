import { forwardRef } from 'react';
import { useJobItemsTQ } from '../hooks/jobs';
import JobList from './JobList';
import { createPortal } from 'react-dom';

// if props are needed then use delclarition like
// const BookmarksPopover = forwardRef<HTMLDivElement, Props>(function BookmarksPopover((props, ref) {...})
/// so the first type is for the ref, the second for the props,
// but the function takes the props arg firs then then te ref arg.
// It is strange syntax yes.

const BookmarksPopover = forwardRef<HTMLDivElement>(function BookmarksPopover(
    _props,
    ref
) {
    const {
        data: jobItems,
        isLoading: jobItemsLoading,
        isError,
        error,
    } = useJobItemsTQ();

    return createPortal(
        <div ref={ref} className="bookmarks-popover">
            <JobList
                jobItems={jobItems}
                isLoading={jobItemsLoading}
                isError={isError}
                error={error}
            />
        </div>,
        document.body
    );
});

export default BookmarksPopover;
