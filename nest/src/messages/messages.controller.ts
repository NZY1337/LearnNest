import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

/*
    @body decorator: @Body() body: any
    @query decorator: @Query('paramName') paramName: string
    @param decorator: @Param('id') id: string
    @controller decorator: @Controller('messages')
*/

@Controller('messages')
export class MessagesController {
  constructor(public messagesService: MessagesService) {}

  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
  }

  @Get(':id')
  async getMessage(@Param('id') id: string) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const message = await this.messagesService.findOne(id);

    if (!message) throw new NotFoundException('message not found');
  }
}
