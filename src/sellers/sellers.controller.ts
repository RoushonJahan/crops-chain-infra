import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { SellersService } from './sellers.service';
import { Seller } from './schemas/seller.schema';

@Controller('sellers')
export class SellersController {
  constructor(private readonly sellersService: SellersService) {}

  @Get()
  async findAll(): Promise<Seller[]> {
    return this.sellersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Seller | null> {
    return this.sellersService.findOne(id);
  }

  @Post()
  async create(@Body() seller: Seller): Promise<Seller> {
    return this.sellersService.create(seller);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() seller: Seller): Promise<Seller | null> {
    return this.sellersService.update(id, seller);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Seller | null> {
    return this.sellersService.remove(id);
  }
}
