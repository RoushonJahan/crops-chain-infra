import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FarmerDocument = Farmer & Document;

@Schema()
export class Farmer {
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

  @Prop({ required: true })
  farmName: string;
}

export const FarmerSchema = SchemaFactory.createForClass(Farmer);
