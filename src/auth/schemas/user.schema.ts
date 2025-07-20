import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum UserRole {
  FARMER = 'farmer',
  BUYER = 'buyer',
  ADMIN = 'admin',
}

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  id: string;

  @Prop({ required: true, enum: UserRole })
  role: UserRole;

  @Prop({ required: true })
  password: string;

  @Prop({ default: false })
  isPhoneVerified: boolean;

  @Prop({ type: String, required: false })
  otp?: string;

  @Prop({ type: Date, required: false })
  otpExpiry?: Date;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User); 