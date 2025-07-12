import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BuyerDocument = Buyer & Document;

@Schema()
export class Buyer {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  location: string;
}

export const BuyerSchema = SchemaFactory.createForClass(Buyer);
