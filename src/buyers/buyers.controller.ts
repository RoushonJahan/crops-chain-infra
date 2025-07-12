import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { BuyersService } from './buyers.service';
import { Buyer } from './schemas/buyer.schema';

@Controller('buyers')
export class BuyersController {
  constructor(private readonly buyersService: BuyersService) {}

  @Post()
  async create(@Body() buyer: Buyer): Promise<Buyer> {
    return this.buyersService.create(buyer);
  }

  @Get()
  async findAll(): Promise<Buyer[]> {
    return this.buyersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Buyer | null> {
    return this.buyersService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() buyer: Buyer): Promise<Buyer | null> {
    return this.buyersService.update(id, buyer);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Buyer | null> {
    return this.buyersService.delete(id);
  }
}
