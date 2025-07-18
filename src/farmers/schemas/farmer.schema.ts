import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FarmerDocument = Farmer & Document;

@Schema()
export class Farmer {
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
  transactionType: string;

  @Prop({ required: true })
  location: string;

  @Prop({ type: [String], required: true, default: [] })
  products: string[];

  @Prop({ required: true, default: 0 })
  rating: number;

  @Prop({ required: true, default: 0 })
  totalOrders: number;

  @Prop({ required: true })
  joinDate: string;
}

export const FarmerSchema = SchemaFactory.createForClass(Farmer);
