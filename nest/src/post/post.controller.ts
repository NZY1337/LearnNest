import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { PostsService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  async create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.createPost(createPostDto);
  }

  @Get()
  async findAll(@Query('skip') skip?: number, @Query('take') take?: number) {
    return this.postsService.posts({ skip: Number(skip), take: Number(take) });
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.postsService.post({ id: Number(id) });
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.updatePost({
      where: { id: Number(id) },
      data: updatePostDto,
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.postsService.deletePost({ id: Number(id) });
  }
}
