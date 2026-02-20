'use client';

import { usePetContext } from '@/lib/hooks';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function PetList() {
    const { pets, selectedPetId, handleChangeSelectedPetId } = usePetContext();

    return (
        <ul className="bg-white border-b border-light">
            {pets.map((pet) => (
                <li key={pet.id}>
                    <button
                        onClick={() => handleChangeSelectedPetId(pet.id)}
                        className={cn(
                            'flex flex-row items-center h-17.5 w-full px-5 text-base gap-3 hover:bg-[#EFF1F2] focus:bg-[#EFF1F2] transition',
                            {
                                'bg-[#EFF1F2]': selectedPetId === pet.id,
                            },
                        )}
                    >
                        <Image
                            src={pet.imageUrl}
                            alt="Pet image"
                            width={45}
                            height={45}
                            className="rounded-full object-cover w-11.25 h-11.25"
                        />
                        <p className="font-semibold">{pet.name}</p>
                    </button>
                </li>
            ))}
        </ul>
    );
}
