import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TransportationController } from './transportation.controller';
import { TransportationService } from './transportation.service';
import { Transportation, TransportationSchema } from './schemas/transportation.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Transportation.name, schema: TransportationSchema }]),
  ],
  controllers: [TransportationController],
  providers: [TransportationService],
})
export class TransportationModule {}
