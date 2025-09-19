import { PrismaService } from './prisma.service';
import { Post, Prisma } from '../generated/prisma';
export declare class PostsService {
    private prisma;
    constructor(prisma: PrismaService);
    post(postWhereUniqueInput: Prisma.PostWhereUniqueInput): Promise<Post | null>;
    posts(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.PostWhereUniqueInput;
        where?: Prisma.PostWhereInput;
        orderBy?: Prisma.PostOrderByWithRelationInput;
    }): Promise<Post[]>;
    createPost(data: Prisma.PostCreateInput): Promise<Post>;
    updatePost(params: {
        where: Prisma.PostWhereUniqueInput;
        data: Prisma.PostUpdateInput;
    }): Promise<Post>;
    deletePost(where: Prisma.PostWhereUniqueInput): Promise<Post>;
}
