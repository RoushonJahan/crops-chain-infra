import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrackOrdersController } from './track-orders.controller';
import { TrackOrdersService } from './track-orders.service';
import { TrackOrder, TrackOrderSchema } from './schemas/track-order.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: TrackOrder.name, schema: TrackOrderSchema }]),
  ],
  controllers: [TrackOrdersController],
  providers: [TrackOrdersService],
})
export class TrackOrdersModule {}
