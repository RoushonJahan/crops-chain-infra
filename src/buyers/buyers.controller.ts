import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { BuyersService } from './buyers.service';
import { Buyer } from './schemas/buyer.schema';
import { CreateBuyerDto } from './dto/create-buyer.dto';
import { UpdateBuyerDto } from './dto/update-buyer.dto';

@Controller('buyers')
export class BuyersController {
  constructor(private readonly buyersService: BuyersService) {}

  @Post()
  async create(@Body() createBuyerDto: CreateBuyerDto): Promise<Buyer> {
    return this.buyersService.create(createBuyerDto);
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
  async update(@Param('id') id: string, @Body() updateBuyerDto: UpdateBuyerDto): Promise<Buyer | null> {
    return this.buyersService.update(id, updateBuyerDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Buyer | null> {
    return this.buyersService.delete(id);
  }
}
