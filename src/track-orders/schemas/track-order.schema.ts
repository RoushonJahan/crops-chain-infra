import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TrackOrderDocument = TrackOrder & Document;

@Schema()
export class TrackOrder {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  orderId: string;

  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  timestamp: Date;
}

export const TrackOrderSchema = SchemaFactory.createForClass(TrackOrder);
