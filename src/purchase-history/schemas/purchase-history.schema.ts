import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PurchaseHistoryDocument = PurchaseHistory & Document;

@Schema()
export class PurchaseHistory {
  @Prop({ required: true, unique: true })
  id: string;

  @Prop({ required: true })
  sellerShopName: string;

  @Prop({ required: true })
  sellerName: string;

  @Prop({ required: true })
  shopAddress: string;

  @Prop({ required: true })
  item: string;

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: true })
  totalPrice: number;

  @Prop({ required: true })
  buyerName: string;

  @Prop({ required: true })
  transportationName: string;

  @Prop({ required: true })
  destinationAddress: string;

  @Prop({ required: true })
  transactionType: string;

  @Prop({ required: true })
  deliveryDate: string;

  @Prop({ required: true })
  deliveryTime: string;
}

export const PurchaseHistorySchema = SchemaFactory.createForClass(PurchaseHistory);
