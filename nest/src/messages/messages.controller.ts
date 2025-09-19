import { Body, Controller, Get, Post, Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.services';

/*
    @body decorator: @Body() body: any
    @query decorator: @Query('paramName') paramName: string
    @param decorator: @Param('id') id: string
    @controller decorator: @Controller('messages')
*/

@Controller('messages')
export class MessagesController {
    messagesServices: MessagesService;

    constructor() {
        // Don't DO this on real app
        // use DEPS Injection
        this.messagesServices = new MessagesService();
    }

    @Get()
    listMessages() {
        return this.messagesServices.findAll();
    }

    @Post()
    createMessage(@Body() body: CreateMessageDto) {
        return this.messagesServices.create(body.content)
    }

    @Get(':id')
    async getMessage(@Param('id') id: string) {
        const message = await this.messagesServices.findOne(id);

        if (!message) throw new NotFoundException('message not found')
    }
}
