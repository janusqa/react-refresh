'use server';

import prisma from '@/lib/prisma';
import { sleep } from '@/lib/utils';
import { revalidatePath } from 'next/cache';

type ActionState = {
    success: boolean;
    message: string;
    id: string;
};

export async function savePet(prevState: ActionState, formData: FormData) {
    await sleep(2000);

    const id = formData.get('id') as string;

    const petData = {
        name: formData.get('name') as string,
        ownerName: formData.get('ownerName') as string,
        imageUrl:
            (formData.get('imageUrl') as string) ||
            'https://bytegrad.com/course-assets/react-nextjs/pet-placeholder.png',
        age: Number(formData.get('age') as string),
        notes: formData.get('notes') as string,
    };

    try {
        const pet = id
            ? await prisma.pet.update({ where: { id }, data: petData })
            : await prisma.pet.create({ data: petData });

        revalidatePath('/app', 'layout');

        return { success: true, message: 'Saved successfully', id: pet.id };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Database error occurred', id: '' };
    }
}

export async function deletePet(id: string) {
    await sleep(2000);

    try {
        const pet = await prisma.pet.delete({ where: { id } });
        revalidatePath('/app', 'layout');
        return { success: true, message: 'Deleted successfully', id: pet.id };
    } catch (error) {
        console.log(error);
        return { success: false, message: 'Database error occurred', id: '' };
    }
}
