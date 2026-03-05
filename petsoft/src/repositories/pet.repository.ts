import 'server-only';
import prisma from '@/lib/prisma';
import { TPet, TUser } from '@/lib/types';

async function savePet(userId: TUser['id'], petData: TPet) {
    const { id, ...data } = petData;
    const pet = id
        ? await prisma.pet.update({
              where: { id, userId },
              data,
          })
        : await prisma.pet.create({ data: { ...data, userId } });

    return pet;
}

async function deletePet(userId: TUser['id'], id: TPet['id']) {
    return await prisma.pet.delete({ where: { id, userId } });
}

async function getPets(userId: TUser['id']) {
    return await prisma.pet.findMany({ where: { userId } });
}

export const petRepository = { savePet, deletePet, getPets };
