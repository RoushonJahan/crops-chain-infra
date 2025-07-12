import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TransportationDocument = Transportation & Document;

@Schema()
export class Transportation {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  vehicle: string;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  capacity: string;

  @Prop({ required: true })
  pricePerKm: number;

  @Prop({ required: true })
  specialization: string;

  @Prop({ required: true })
  coverage: string;

  @Prop({ required: true })
  contact: string;

  @Prop({ required: true })
  email: string;

  @Prop([String])
  features: string[];
}

export const TransportationSchema = SchemaFactory.createForClass(Transportation);
