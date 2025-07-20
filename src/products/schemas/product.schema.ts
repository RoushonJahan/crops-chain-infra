import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product {
  @Prop({ required: true, unique: true })
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: true })
  shopId: string;

  @Prop({ required: true })
  harvestDate: string;

}

export type ProductDocument = Product & Document;
export const ProductSchema = SchemaFactory.createForClass(Product); 