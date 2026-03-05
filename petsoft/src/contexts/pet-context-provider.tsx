'use client';

import { TPet } from '@/lib/types';
import { useState, createContext, useEffect } from 'react';

type PetContextProviderProps = {
    data: TPet[];
    children: React.ReactNode;
};

type TPetContext = {
    pets: TPet[];
    selectedPetId: TPet['id'] | null;
    selectedPet: TPet | undefined;
    numberOfPets: number;
    handleChangeSelectedPetId: (id: TPet['id']) => void;
};

export const PetContext = createContext<TPetContext | null>(null);

export default function PetContextProvider({
    data,
    children,
}: PetContextProviderProps) {
    // state
    const [pets, setPets] = useState(data);
    const [selectedPetId, setSelectedPetId] = useState<TPet['id'] | null>(null);

    // derived state
    const selectedPet = pets.find((pet) => pet.id === selectedPetId);
    const numberOfPets = pets.length;

    // event handlers / actions
    const handleChangeSelectedPetId = (id: TPet['id']) => {
        setSelectedPetId(id);
    };

    useEffect(() => {
        setPets(data);
    }, [data]);

    return (
        <PetContext.Provider
            value={{
                pets,
                selectedPetId,
                selectedPet,
                numberOfPets,
                handleChangeSelectedPetId,
            }}
        >
            {children}
        </PetContext.Provider>
    );
}
