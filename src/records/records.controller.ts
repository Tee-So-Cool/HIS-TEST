import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { RecordsService } from './records.service';
import { CreateRecordDto } from './dto/create-record.dto';

@Controller('records')
export class RecordsController {
  constructor(private readonly recordsService: RecordsService) {}

  @Post()
  create(@Body() dto: CreateRecordDto) {
    return this.recordsService.create(dto);
  }

  @Get()
  findAll(@Query('userId') userId?: string) {
    return this.recordsService.findAll(userId);
  }
}
