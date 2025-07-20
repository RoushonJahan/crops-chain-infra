import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { User, UserSchema } from './schemas/user.schema';
import { Farmer, FarmerSchema } from '../farmers/schemas/farmer.schema';
import { Buyer, BuyerSchema } from '../buyers/schemas/buyer.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Farmer.name, schema: FarmerSchema },
      { name: Buyer.name, schema: BuyerSchema },
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {} 