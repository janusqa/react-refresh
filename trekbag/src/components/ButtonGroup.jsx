import React from 'react';
import Button from './Button';
import { nanoid } from 'nanoid';
// import useItems from '../hooks/useItems';
import {
    useMarkAllAsComplete,
    useMarkAllAsInComplete,
    useRemoveAllItems,
    useResetToInitial,
} from '../store/itemsStore';

export default function ButtonGroup() {
    // const {
    //     handleMarkAllAsComplete,
    //     handleMarkAllAsInComplete,
    //     handleResetToInitial,
    //     handleRemoveAllItems,
    // } = useItems();

    const handleMarkAllAsComplete = useMarkAllAsComplete();
    const handleMarkAllAsInComplete = useMarkAllAsInComplete();
    const handleResetToInitial = useResetToInitial();
    const handleRemoveAllItems = useRemoveAllItems();

    const secondaryButtons = [
        { text: 'Mark all as completed', handleClick: handleMarkAllAsComplete },
        {
            text: 'Mark all as incomplete',
            handleClick: handleMarkAllAsInComplete,
        },
        { text: 'Reset to initial', handleClick: handleResetToInitial },
        { text: 'Remove all items', handleClick: handleRemoveAllItems },
    ];
    return (
        <section className="button-group">
            {secondaryButtons.map(({ text, handleClick }) => (
                <Button
                    key={nanoid()}
                    handleClick={handleClick}
                    buttonType="secondary"
                >
                    {text}
                </Button>
            ))}
        </section>
    );
}
