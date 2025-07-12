import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { FarmersService } from './farmers.service';
import { Farmer } from './schemas/farmer.schema';

@Controller('farmers')
export class FarmersController {
  constructor(private readonly farmersService: FarmersService) {}

  @Post()
  async create(@Body() farmer: Farmer): Promise<Farmer> {
    return this.farmersService.create(farmer);
  }

  @Get()
  async findAll(): Promise<Farmer[]> {
    return this.farmersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Farmer | null> {
    return this.farmersService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() farmer: Farmer): Promise<Farmer | null> {
    return this.farmersService.update(id, farmer);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Farmer | null> {
    return this.farmersService.delete(id);
  }
}
