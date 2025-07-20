import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { BuyersModule } from './buyers/buyers.module';
import { FarmersModule } from './farmers/farmers.module';
import { PurchaseHistoryModule } from './purchase-history/purchase-history.module';
import { TrackOrdersModule } from './track-orders/track-orders.module';
import { TransportationModule } from './transportation/transportation.module';
import { AuthModule } from './auth/auth.module';
import { databaseConfig } from './config/database.config';

@Module({
  imports: [
    MongooseModule.forRoot(databaseConfig.uri),
    AuthModule,
    ProductsModule,
    OrdersModule,
    BuyersModule,
    FarmersModule,
    PurchaseHistoryModule,
    TrackOrdersModule,
    TransportationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
