import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PurchaseHistoryDocument = PurchaseHistory & Document;

@Schema()
export class PurchaseHistory {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  buyerId: string;

  @Prop({ required: true })
  productId: string;

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: true })
  totalPrice: number;

  @Prop({ required: true })
  purchaseDate: Date;
}

export const PurchaseHistorySchema = SchemaFactory.createForClass(PurchaseHistory);
