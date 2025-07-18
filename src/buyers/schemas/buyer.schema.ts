import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BuyerDocument = Buyer & Document;

@Schema()
export class Buyer {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  shopName: string;

  @Prop({ required: true })
  ownerName: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  transactionType: string;

  @Prop({ required: true })
  transactionId: string;

  @Prop({ required: true, default: 0 })
  totalOrders: number;

  @Prop({ required: true })
  joinDate: string;

  @Prop({ type: [String], required: true, default: [] })
  products: string[];
}

export const BuyerSchema = SchemaFactory.createForClass(Buyer);
