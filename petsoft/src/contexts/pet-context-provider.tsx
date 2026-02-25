'use client';

import { addPet } from '@/actions/actions';
import { Pet } from '@/lib/types';
import { useState, createContext, useEffect } from 'react';

type PetContextProviderProps = {
    data: Pet[];
    children: React.ReactNode;
};

type TPetContext = {
    pets: Pet[];
    selectedPetId: string | null;
    selectedPet: Pet | undefined;
    numberOfPets: number;
    handleChangeSelectedPetId: (id: string) => void;
    handleCheckoutPet: (id: string) => void;
    handleAddPet: (pet: Omit<Pet, 'id'>) => void;
    handleEditPet: (petId: string, pet: Omit<Pet, 'id'>) => void;
};

export const PetContext = createContext<TPetContext | null>(null);

export default function PetContextProvider({
    data,
    children,
}: PetContextProviderProps) {
    // state
    const [pets, setPets] = useState(data);
    const [selectedPetId, setSelectedPetId] = useState<string | null>(null);

    // derived state
    const selectedPet = pets.find((pet) => pet.id === selectedPetId);
    const numberOfPets = pets.length;

    // event handlers / actions
    const handleChangeSelectedPetId = (id: string) => {
        setSelectedPetId(id);
    };
    const handleCheckoutPet = (id: string) => {
        setPets((prevPets) => prevPets.filter((pet) => pet.id !== id));
        setSelectedPetId(null);
    };
    const handleAddPet = async (pet: Omit<Pet, 'id'>) => {
        // setPets((prevPets) => [
        //     ...prevPets,
        //     { ...pet, id: crypto.randomUUID() },
        // ]);

        await addPet(pet);
    };
    const handleEditPet = (petId: string, pet: Omit<Pet, 'id'>) => {
        setPets((prevPets) =>
            prevPets.map((p) => (p.id === petId ? { ...pet, id: petId } : p)),
        );
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
                handleCheckoutPet,
                handleAddPet,
                handleEditPet,
            }}
        >
            {children}
        </PetContext.Provider>
    );
}
