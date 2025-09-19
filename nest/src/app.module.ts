import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './post/post.module';

@Module({
  imports: [PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
