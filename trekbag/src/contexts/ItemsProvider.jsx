import React, { useEffect, useState } from 'react';
import { initialItems } from '../lib/constants';
import { nanoid } from 'nanoid';
import ItemsContext from './itemsContext';

export default function ItemsProvider({ children }) {
    // function passed to useState only runs once on first render and not for each re-render there after
    const [items, setItems] = useState(
        () => JSON.parse(localStorage.getItem('items')) || initialItems
    );

    const handleAddItem = (item) =>
        setItems([...items, { id: nanoid(), name: item, packed: false }]);

    const handleMarkAllAsComplete = () =>
        setItems(items.map((item) => ({ ...item, packed: true })));

    const handleMarkAllAsInComplete = () =>
        setItems(items.map((item) => ({ ...item, packed: false })));

    const handleResetToInitial = () => setItems(initialItems);

    const handleRemoveAllItems = () => setItems([]);

    const handleRemoveItem = (id) =>
        setItems(items.filter((item) => item.id != id));

    const handleToggleItem = (id) =>
        setItems(
            items.map((item) => {
                if (item.id === id) return { ...item, packed: !item.packed };
                return { ...item };
            })
        );

    const totalItems = items.length;
    const totalItemsPacked = items.filter((item) => item.packed).length;

    useEffect(
        function () {
            localStorage.setItem('items', JSON.stringify(items));
        },
        [items]
    );

    return (
        <ItemsContext.Provider
            value={{
                items,
                totalItems,
                totalItemsPacked,
                handleAddItem,
                handleMarkAllAsComplete,
                handleMarkAllAsInComplete,
                handleResetToInitial,
                handleRemoveAllItems,
                handleRemoveItem,
                handleToggleItem,
            }}
        >
            {children}
        </ItemsContext.Provider>
    );
}
