// Now we have migrated to prisma we can get this type directly from prisma client
// import { EventoEvent } from $prisma/client
// export type EventoEvent = {
//     id: number;
//     name: string;
//     slug: string;
//     city: string;
//     location: string;
//     date: Date;
//     organizerName: string;
//     imageUrl: string;
//     description: string;
// };

export { type EventoEvent } from '@/generated/prisma';
