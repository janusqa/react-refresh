import { auth } from '@/lib/auth';
import prisma from '@/lib/prisma';

const users = [
    { email: 'john@test.com', password: 'password' },
    { email: 'jane@test.com', password: 'password' },
];

const pets = [
    {
        name: 'Benjamin',
        ownerName: 'John Doe',
        imageUrl: 'https://bytegrad.com/course-assets/images/rn-image-4.png',
        age: 2,
        notes: "Doesn't like to be touched on the belly. Plays well with other dogs.",
    },
    {
        name: 'Richard',
        ownerName: 'Josephine Dane',
        imageUrl: 'https://bytegrad.com/course-assets/images/rn-image-5.png',
        age: 5,
        notes: 'Needs medication twice a day.',
    },
    {
        name: 'Anna',
        ownerName: 'Frank Doe',
        imageUrl: 'https://bytegrad.com/course-assets/images/rn-image-6.png',
        age: 4,
        notes: 'Allergic to chicken.',
    },
];

async function main() {
    console.log(`Start seeding ...`);

    // seed users
    for (const user of users) {
        try {
            await auth.api.signUpEmail({
                body: {
                    email: user.email,
                    password: user.password,
                    name: user.email,
                },
            });
        } catch (error) {
            console.error(error);
            console.log(`User ${user.email} already exists, skipping...`);
        }
    }

    // fetch users to get their ids
    const createdUsers = await prisma.user.findMany();

    // seed pets linked to users
    for (const pet of pets) {
        const randomUser =
            createdUsers[Math.floor(Math.random() * createdUsers.length)];
        await prisma.pet.create({
            data: { ...pet, userId: randomUser.id },
        });
    }

    console.log(`Seeding finished.`);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
