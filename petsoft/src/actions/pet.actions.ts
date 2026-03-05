'use server';

import { PetFormActionState } from '@/lib/types';
import { sleep } from '@/lib/utils';
import { revalidatePath } from 'next/cache';
import { PetSchema } from '@/lib/validation';
import z from 'zod';
import { petService } from '@/services/pet.service';
import { getSession } from '@/lib/auth-session';

export async function savePet(
    prevState: PetFormActionState,
    formData: FormData,
) {
    await sleep(2000);

    const userSession = await getSession();

    if (!userSession)
        return { success: false, message: 'Unauthorized', id: null };

    const { user } = userSession;

    const validData = PetSchema.safeParse({
        id: formData.get('id'),
        name: formData.get('name'),
        ownerName: formData.get('ownerName'),
        imageUrl: formData.get('imageUrl'),
        age: formData.get('age'),
        notes: formData.get('notes'),
    });

    if (!validData.success)
        return { success: false, message: 'Invalid data', id: null };

    try {
        const pet = await petService.savePet(user.id, validData.data);
        revalidatePath('/app', 'layout');

        return { success: true, message: 'Saved successfully', id: pet.id };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Database error occurred', id: null };
    }
}

export async function deletePet(petId: unknown) {
    await sleep(2000);

    const userSession = await getSession();

    if (!userSession)
        return { success: false, message: 'Unauthorized', id: null };

    const { user } = userSession;

    const validId = z.cuid().safeParse(petId);

    if (!validId.success)
        return { success: false, message: 'Invalid Id', id: null };

    const id = validId.data;

    try {
        const pet = await petService.deletePet(user.id, id);
        revalidatePath('/app', 'layout');
        return { success: true, message: 'Deleted successfully', id: pet.id };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Database error occurred', id: null };
    }
}
