import React, { useMemo, useState } from 'react';
import EmptyView from './EmptyView';
import Select from 'react-select';
import { sortingOptions } from '../lib/constants';
// import useItems from '../hooks/useItems';
import { useItems, useRemoveItem, useToggleItem } from '../store/itemsStore';

export default function ItemList() {
    const [sortBy, setSortBy] = useState(sortingOptions[0].value);

    // const { items, handleRemoveItem, handleToggleItem } = useItems();
    const items = useItems();
    const handleRemoveItem = useRemoveItem;
    const handleToggleItem = useToggleItem();

    const sortedItems = useMemo(
        () =>
            sortBy === sortingOptions[0].value
                ? items
                : [...items].sort((a, b) => {
                      if (sortBy === sortingOptions[1].value) {
                          return b.packed - a.packed;
                      }

                      if (sortBy === sortingOptions[2].value) {
                          return a.packed - b.packed;
                      }
                  }),
        [items, sortBy]
    );

    return (
        <ul className="item-list">
            {items.length === 0 && <EmptyView />}
            {items.length > 0 && (
                <section className="sorting">
                    <Select
                        onChange={(option) => setSortBy(option.value)}
                        defaultValue={sortingOptions[0]}
                        options={sortingOptions}
                    />
                </section>
            )}
            {sortedItems.map((item) => (
                <Item
                    key={item.id}
                    item={item}
                    handleRemoveItem={handleRemoveItem}
                    handleToggleItem={handleToggleItem}
                />
            ))}
        </ul>
    );
}

function Item({
    item: { name, packed, id },
    handleRemoveItem,
    handleToggleItem,
}) {
    return (
        <li className="item">
            <label>
                <input
                    type="checkbox"
                    checked={packed}
                    onChange={() => handleToggleItem(id)}
                />
                {name}
            </label>
            <button onClick={() => handleRemoveItem(id)}>❌</button>
        </li>
    );
}
