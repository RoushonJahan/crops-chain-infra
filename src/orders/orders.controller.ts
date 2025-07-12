import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order } from './schemas/order.schema';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  async findAll(): Promise<Order[]> {
    return this.ordersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Order | null> {
    return this.ordersService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() order: Order): Promise<Order | null> {
    return this.ordersService.update(id, order);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Order | null> {
    return this.ordersService.remove(id);
  }
}
