import { PrismaClient } from './generated/prisma';
import * as dotenv from 'dotenv';
dotenv.config();

const prisma = new PrismaClient();

const userData = {
    email: 'alice@prisma.io',
    name: 'Alice',
    posts: {
        create: [
            {
                title: 'Hello World',
                content: 'My first post!',
            },
        ],
    },
};

async function main() {
    console.log('Seeding database...');
    await prisma.post.deleteMany();
    await prisma.user.deleteMany();

    // Seed new data
    const user = await prisma.user.create({
        data: userData,
    });

    console.log({ user });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
    })
