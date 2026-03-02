'use client';

import { Pet } from '@/lib/types';
import { useState, createContext, useEffect } from 'react';

type PetContextProviderProps = {
    data: Pet[];
    children: React.ReactNode;
};

type TPetContext = {
    pets: Pet[];
    selectedPetId: Pet['id'] | null;
    selectedPet: Pet | undefined;
    numberOfPets: number;
    handleChangeSelectedPetId: (id: Pet['id']) => void;
};

export const PetContext = createContext<TPetContext | null>(null);

export default function PetContextProvider({
    data,
    children,
}: PetContextProviderProps) {
    // state
    const [pets, setPets] = useState(data);
    const [selectedPetId, setSelectedPetId] = useState<Pet['id'] | null>(null);

    // derived state
    const selectedPet = pets.find((pet) => pet.id === selectedPetId);
    const numberOfPets = pets.length;

    // event handlers / actions
    const handleChangeSelectedPetId = (id: Pet['id']) => {
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
