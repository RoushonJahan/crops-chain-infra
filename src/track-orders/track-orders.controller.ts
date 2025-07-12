import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TrackOrdersService } from './track-orders.service';
import { TrackOrder } from './schemas/track-order.schema';

@Controller('track-orders')
export class TrackOrdersController {
  constructor(private readonly trackOrdersService: TrackOrdersService) {}

  @Post()
  async create(@Body() trackOrder: TrackOrder): Promise<TrackOrder> {
    return this.trackOrdersService.create(trackOrder);
  }

  @Get()
  async findAll(): Promise<TrackOrder[]> {
    return this.trackOrdersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<TrackOrder | null> {
    return this.trackOrdersService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() trackOrder: TrackOrder): Promise<TrackOrder | null> {
    return this.trackOrdersService.update(id, trackOrder);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<TrackOrder | null> {
    return this.trackOrdersService.delete(id);
  }
}
