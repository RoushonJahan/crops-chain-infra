import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { SellersModule } from './sellers/sellers.module';
import { OrdersModule } from './orders/orders.module';
import { BuyersModule } from './buyers/buyers.module';
import { FarmersModule } from './farmers/farmers.module';
import { PurchaseHistoryModule } from './purchase-history/purchase-history.module';
import { TrackOrdersModule } from './track-orders/track-orders.module';
import { TransportationModule } from './transportation/transportation.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongoadmin:mongoadmin@192.168.52.212:27017/'),
    ProductsModule,
    SellersModule,
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
