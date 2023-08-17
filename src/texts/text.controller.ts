import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TextService } from './text.service';
import{
    ApiNotFoundResponse,
    ApiOkResponse,
  } from '@nestjs/swagger'
import { Text } from './text.entity';

@Controller('texts')
export class TextController {
    constructor(private readonly textService: TextService) {}

    @Get()
    @ApiOkResponse()
    @ApiNotFoundResponse()
    async getAllTexts() {
        const response = await this.textService.findAll();
        return response
    }

    @Post()
    @ApiOkResponse()
    @ApiNotFoundResponse()
    async create(@Body() text: Text){
        return await this.textService.create(text);
    }

    @Delete(":id")
    @ApiOkResponse()
    @ApiNotFoundResponse()
    async delete(@Param('id') id: number) {
        return await this.textService.remove(id);
    }
}