import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PurchaseHistoryService } from './purchase-history.service';
import { PurchaseHistory } from './schemas/purchase-history.schema';

@Controller('purchase-history')
export class PurchaseHistoryController {
  constructor(private readonly purchaseHistoryService: PurchaseHistoryService) {}

  @Post()
  async create(@Body() purchaseHistory: PurchaseHistory): Promise<PurchaseHistory> {
    return this.purchaseHistoryService.create(purchaseHistory);
  }

  @Get()
  async findAll(): Promise<PurchaseHistory[]> {
    return this.purchaseHistoryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PurchaseHistory | null> {
    return this.purchaseHistoryService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() purchaseHistory: PurchaseHistory): Promise<PurchaseHistory | null> {
    return this.purchaseHistoryService.update(id, purchaseHistory);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<PurchaseHistory | null> {
    return this.purchaseHistoryService.delete(id);
  }
}
