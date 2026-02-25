'use client';

import { useState, createContext } from 'react';

type SearchContextProviderProps = {
    children: React.ReactNode;
};

type TSearchContext = {
    searchQuery: string;
    handleChangeSearchQuery: (query: string) => void;
};

export const SearchContext = createContext<TSearchContext | null>(null);

export default function SearchContextProvider({
    children,
}: SearchContextProviderProps) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleChangeSearchQuery = (query: string) => {
        setSearchQuery(query);
    };

    return (
        <SearchContext.Provider
            value={{ searchQuery, handleChangeSearchQuery }}
        >
            {children}
        </SearchContext.Provider>
    );
}
