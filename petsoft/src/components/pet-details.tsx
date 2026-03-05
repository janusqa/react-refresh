'use client';
import { usePetContext } from '@/lib/hooks';
import { TPet } from '@/lib/types';
import Image from 'next/image';
import PetButton from './pet-button';
import { useTransition } from 'react';
import { deletePet } from '@/actions/pet.actions';
import { toast } from 'sonner';

export default function PetDetails() {
    const { selectedPet } = usePetContext();

    return (
        <section className="flex flex-col h-full w-full">
            {!selectedPet ? (
                <EmptyView />
            ) : (
                <>
                    <TopBar pet={selectedPet!} />
                    <OtherInfo pet={selectedPet!} />
                    <Notes pet={selectedPet!} />
                </>
            )}
        </section>
    );
}

type Props = {
    pet: TPet;
};

function TopBar({ pet }: Props) {
    const { handleChangeSelectedPetId, selectedPet } = usePetContext();

    const [isPending, startTransition] = useTransition();

    const onDeletePet = async () => {
        if (!selectedPet) return;
        const result = await deletePet(selectedPet.id);
        if (result.success) {
            toast.success(result.message);
            handleChangeSelectedPetId('');
        } else {
            toast.error(result.message);
        }
    };

    return (
        <div className="flex flex-row items-center bg-white px-8 py-5 border-b border-light">
            <Image
                src={pet?.imageUrl}
                alt="Selected pet image"
                width={75}
                height={75}
                className="h-18.75 w-18.75 object-cover rounded-full"
            />

            <h2 className="text-3xl font-semibold leading-7 ml-5">
                {pet?.name}
            </h2>

            <div className="ml-auto space-x-2">
                <PetButton disabled={isPending} actionType="edit">
                    Edit
                </PetButton>
                <PetButton
                    disabled={isPending}
                    actionType="checkout"
                    onClick={() => startTransition(onDeletePet)}
                >
                    {isPending ? 'Deleting...' : 'Checkout'}
                </PetButton>
            </div>
        </div>
    );
}

function OtherInfo({ pet }: Props) {
    return (
        <div className="flex flex-row justify-around px-5 py-10 text-center">
            <div>
                <h3 className="text-[13px] font-medium uppercase text-zinc-700">
                    Owner name
                </h3>
                <p className="mt-1 text-lg text-zinc-800">{pet?.ownerName}</p>
            </div>
            <div>
                <h3 className="text-[13px] font-medium uppercase text-zinc-700">
                    Age
                </h3>
                <p className="mt-1 text-lg text-zinc-800">{pet?.age}</p>
            </div>
        </div>
    );
}

function Notes({ pet }: Props) {
    return (
        <section className="flex-1 bg-white px-7 py-5 rounded-md mb-9 mx-8 border border-light">
            {pet?.notes}
        </section>
    );
}

function EmptyView() {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full">
            <p className="text-2xl font-medium text-zinc-700">
                Select a pet to see details
            </p>
        </div>
    );
}
