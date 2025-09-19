import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './post/post.module';
import { UsersService } from './user.services';
import { PostsService } from './post.service';
import { PrismaService } from './prisma.service';
import { MessageModule } from './messages/message.module';
import { MessagesController } from './messages/messages.controller';

@Module({
    imports: [PostsModule, MessageModule],
    controllers: [AppController, MessagesController],
    providers: [AppService, UsersService, PostsService, PrismaService],
})

export class AppModule { }
