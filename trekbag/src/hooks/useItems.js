import { useContext } from 'react';
import ItemsContext from '../contexts/itemsContext';

const useItems = () => {
    const context = useContext(ItemsContext);

    if (!context)
        throw new Error('useItems must be used within a ItemsContext Provider');

    return context;
};

export default useItems;
