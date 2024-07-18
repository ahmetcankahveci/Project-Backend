import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { PhonebookService, PhonebookRecord } from './phonebook.service'; // PhonebookRecord'u ekliyoruz

@Controller('phonebook')
export class PhonebookController {
  constructor(private readonly phonebookService: PhonebookService) {}

  @Get()
  getAll(): PhonebookRecord[] {
    return this.phonebookService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: number): PhonebookRecord {
    return this.phonebookService.getById(id);
  }

  @Post()
  create(@Body() record: PhonebookRecord): PhonebookRecord {
    return this.phonebookService.create(record);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updatedRecord: PhonebookRecord,
  ): PhonebookRecord {
    return this.phonebookService.update(id, updatedRecord);
  }

  @Delete(':id')
  delete(@Param('id') id: number): void {
    this.phonebookService.delete(id);
  }
}
