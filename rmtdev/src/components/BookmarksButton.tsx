import { TriangleDownIcon } from '@radix-ui/react-icons';
import BookmarksPopover from './BookmarksPopover';
import { useCallback, useRef, useState } from 'react';
import { useClickOutside } from '../hooks/clickOutside';

export default function BookmarksButton() {
    const [isOpen, setIsOpen] = useState(false);

    const bookmarkButtonRef = useRef<HTMLButtonElement>(null);
    const bookmarkPopoverRef = useRef<HTMLDivElement>(null);

    const outsideClickHandler = useCallback(() => setIsOpen(false), []);

    useClickOutside(
        [bookmarkButtonRef, bookmarkPopoverRef],
        outsideClickHandler
    );

    const handleClick = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <section>
            <button
                ref={bookmarkButtonRef}
                onClick={handleClick}
                className="bookmarks-btn"
            >
                Bookmarks <TriangleDownIcon />
            </button>
            {isOpen && <BookmarksPopover ref={bookmarkPopoverRef} />}
        </section>
    );
}
