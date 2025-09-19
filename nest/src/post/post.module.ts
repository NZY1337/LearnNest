import { Module } from '@nestjs/common';
import { PostsService } from './post.service';
import { PostsController } from './post.controller';
import { PrismaService } from '../prisma.service';

@Module({
    controllers: [PostsController],
    providers: [PostsService, PrismaService],
})
export class PostsModule { }
