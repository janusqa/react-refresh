import React, { useRef, useState } from 'react';
import Button from './Button';
// import useItems from '../hooks/useItems';
import { useAddItem } from '../store/itemsStore';

export default function AddItemForm() {
    const [itemText, setItemText] = useState('');
    const inputRef = useRef();

    // const { handleAddItem } = useItems();
    const handleAddItem = useAddItem();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!itemText.trim()) {
            inputRef.current.focus();
            return;
        }

        handleAddItem(itemText);
        setItemText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add an item</h2>
            <input
                ref={inputRef}
                type="text"
                value={itemText}
                onChange={(e) => setItemText(e.target.value)}
                autoFocus={true}
            />
            <Button>Add to list</Button>
        </form>
    );
}
