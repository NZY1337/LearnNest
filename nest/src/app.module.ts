import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './post/post.module';
import { UsersService } from './user.services';
import { PostsService } from './post.service';
import { PrismaService } from './prisma.service';
import { MessagesModule } from './messages/message.module';

@Module({
  imports: [PostsModule, MessagesModule],
  controllers: [AppController],
  providers: [AppService, UsersService, PostsService, PrismaService],
})
export class AppModule {}
