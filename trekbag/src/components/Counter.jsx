import React from 'react';
import { useItemsPackedTotal, useItemsTotal } from '../store/itemsStore';
// import useItems from '../hooks/useItems';

export default function Counter() {
    // const { totalItems, totalItemspacked } = useItems();
    const itemsTotal = useItemsTotal();
    const itemsPackedTotal = useItemsPackedTotal();

    return (
        <p>
            <strong>{itemsPackedTotal}</strong> / {itemsTotal} items packed
        </p>
    );
}
