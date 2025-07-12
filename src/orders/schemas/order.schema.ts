import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop({ required: true })
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
  location: string;

  @Prop({ required: true })
  estimatedDelivery: string;

  @Prop({ required: true })
  trackingId: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);