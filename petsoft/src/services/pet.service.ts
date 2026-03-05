import 'server-only';
import { TPet, TUser } from '@/lib/types';
import { petRepository } from '@/repositories/pet.repository';

async function savePet(userId: TUser['id'], petData: TPet) {
    return await petRepository.savePet(userId, petData);
}

async function deletePet(userId: TUser['id'], id: TPet['id']) {
    return await petRepository.deletePet(userId, id);
}

async function getPets(userId: TUser['id']) {
    return await petRepository.getPets(userId);
}

export const petService = { savePet, deletePet, getPets };
