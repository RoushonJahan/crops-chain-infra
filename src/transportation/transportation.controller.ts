import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TransportationService } from './transportation.service';
import { Transportation } from './schemas/transportation.schema';

@Controller('transportation')
export class TransportationController {
  constructor(private readonly transportationService: TransportationService) {}

  @Post()
  async create(@Body() transportation: Transportation): Promise<Transportation> {
    return this.transportationService.create(transportation);
  }

  @Get()
  async findAll(): Promise<Transportation[]> {
    return this.transportationService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Transportation | null> {
    return this.transportationService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() transportation: Transportation): Promise<Transportation | null> {
    return this.transportationService.update(id, transportation);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Transportation | null> {
    return this.transportationService.delete(id);
  }
}
