import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Seller {
  @Prop({ required: true, unique: true })
  id: string;

  @Prop({ required: true })
  shopName: string;

  @Prop({ required: true })
  ownerName: string;

  @Prop()
  phone: string;

  @Prop()
  email: string;

  @Prop()
  location: string;

  @Prop()
  transactionType: string;

  @Prop()
  transactionId: string;

  @Prop()
  totalOrders: number;

  @Prop()
  joinDate: string;

  @Prop([String])
  products: string[];

  @Prop()
  rating: number;
}

export type SellerDocument = Seller & Document;
export const SellerSchema = SchemaFactory.createForClass(Seller); 