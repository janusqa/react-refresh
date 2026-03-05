import z from 'zod';

export const PetSchema = z
    .object({
        id: z.union([z.literal(''), z.cuid()]).optional(),
        name: z
            .string()
            .trim()
            .min(1, { message: 'Name is required' })
            .max(100),
        ownerName: z
            .string()
            .trim()
            .min(1, { message: 'Owner name is required' })
            .max(100),
        imageUrl: z.union([
            z.literal(''),
            z.url({ message: 'Image url must be a valid url' }),
        ]),
        age: z.coerce
            .number()
            .int()
            .positive({ message: 'Age must be a positive number' })
            .max(99999, { message: 'Age must be less than 99999' }),
        notes: z.union([z.literal(''), z.string().trim().max(1000)]),
    })
    .transform((data) => ({
        ...data,
        imageUrl:
            data.imageUrl ||
            'https://bytegrad.com/course-assets/react-nextjs/pet-placeholder.png',
    }));

export const CredentialsSchema = z.object({
    email: z.email({ message: 'Invalid email address' }).trim().toLowerCase(),
    password: z
        .string()
        .min(8, { message: 'Password must be at least 8 characters' }),
    callbackUrl: z.union([z.string().trim().startsWith('/'), z.literal('')]),
});
