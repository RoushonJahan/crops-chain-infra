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
  transactionType: string;

  @Prop({ required: true })
  location: string;

}

export const FarmerSchema = SchemaFactory.createForClass(Farmer);
