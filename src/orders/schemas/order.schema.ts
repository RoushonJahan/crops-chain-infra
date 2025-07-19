import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop({ required: true, unique: true })
  id: string;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  date: string;

  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: true })
  totalPrice: number;

  @Prop({ required: true })
  productId: string;


  @Prop({ required: true })
  sellerShopId: string;

  @Prop({ required: true })
  buyerShopId: string;

  @Prop({ required: true })
  transportId: string;

  @Prop({ required: true })
  transationId: string;

}

export const OrderSchema = SchemaFactory.createForClass(Order);