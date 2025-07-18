import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { FarmersService } from './farmers.service';
import { Farmer } from './schemas/farmer.schema';
import { CreateFarmerDto } from './dto/create-farmer.dto';
import { UpdateFarmerDto } from './dto/update-farmer.dto';

@Controller('farmers')
export class FarmersController {
  constructor(private readonly farmersService: FarmersService) {}

  @Post()
  async create(@Body() createFarmerDto: CreateFarmerDto): Promise<Farmer> {
    return this.farmersService.create(createFarmerDto);
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
  async update(@Param('id') id: string, @Body() updateFarmerDto: UpdateFarmerDto): Promise<Farmer | null> {
    return this.farmersService.update(id, updateFarmerDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Farmer | null> {
    return this.farmersService.delete(id);
  }
}
