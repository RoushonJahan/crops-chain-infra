import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FarmersController } from './farmers.controller';
import { FarmersService } from './farmers.service';
import { Farmer, FarmerSchema } from './schemas/farmer.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Farmer.name, schema: FarmerSchema }]),
  ],
  controllers: [FarmersController],
  providers: [FarmersService],
})
export class FarmersModule {}
