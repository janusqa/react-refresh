'use server';

import prisma from '@/lib/prisma';
import { Pet, PetFormActionState } from '@/lib/types';
import { sleep } from '@/lib/utils';
import { revalidatePath } from 'next/cache';
import { petSchema } from '@/lib/validation';

export async function savePet(
    prevState: PetFormActionState,
    formData: FormData,
) {
    await sleep(2000);

    const id = formData.get('id') as string;

    const apiData = petSchema.safeParse({
        name: formData.get('name'),
        ownerName: formData.get('ownerName'),
        imageUrl: formData.get('imageUrl'),
        age: formData.get('age'),
        notes: formData.get('notes'),
    });

    if (!apiData.success)
        return { success: false, message: 'Invalid data', id: null };

    const petData = apiData.data;

    try {
        const pet = id
            ? await prisma.pet.update({
                  where: { id },
                  data: petData,
              })
            : await prisma.pet.create({ data: petData });

        revalidatePath('/app', 'layout');

        return { success: true, message: 'Saved successfully', id: pet.id };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Database error occurred', id: null };
    }
}

export async function deletePet(id: Pet['id']) {
    await sleep(2000);

    try {
        const pet = await prisma.pet.delete({ where: { id } });
        revalidatePath('/app', 'layout');
        return { success: true, message: 'Deleted successfully', id: pet.id };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Database error occurred', id: null };
    }
}
