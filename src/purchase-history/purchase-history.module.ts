import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PurchaseHistoryController } from './purchase-history.controller';
import { PurchaseHistoryService } from './purchase-history.service';
import { PurchaseHistory, PurchaseHistorySchema } from './schemas/purchase-history.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: PurchaseHistory.name, schema: PurchaseHistorySchema }]),
  ],
  controllers: [PurchaseHistoryController],
  providers: [PurchaseHistoryService],
})
export class PurchaseHistoryModule {}
