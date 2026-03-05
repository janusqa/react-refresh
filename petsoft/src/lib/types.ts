import z from 'zod';
import type { User } from '@/generated/prisma/client';
import { CredentialsSchema, PetSchema } from './validation';

type BaseActionState = {
    success: boolean;
    message: string;
};

export type PetFormActionState = BaseActionState & {
    id: TPet['id'] | null;
};

export type AuthFormActionState = BaseActionState;

export type TCredentials = z.infer<typeof CredentialsSchema>;
export type TPet = z.infer<typeof PetSchema>;
export type TUser = Omit<User, 'createdAt' | 'updatedAt'>;
