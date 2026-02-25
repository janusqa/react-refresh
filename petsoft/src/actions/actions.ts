'use server';

import prisma from '@/lib/prisma';
import { Pet } from '@/lib/types';
import { sleep } from '@/lib/utils';
import { revalidatePath } from 'next/cache';

export async function addPet(pet: Omit<Pet, 'id'>) {
    await sleep(2000);
    await prisma.pet.create({ data: pet });
    revalidatePath('/app', 'layout');
}
