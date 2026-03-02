import type { Pet as PrismaPet } from '@/generated/prisma/client';

export type Pet = Omit<PrismaPet, 'createdAt' | 'updatedAt'>;

export type PetFormActionState = {
    success: boolean;
    message: string;
    id: Pet['id'] | null;
};
