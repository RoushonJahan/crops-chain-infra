import { IsString, IsNumber, IsOptional, IsArray } from 'class-validator';

export class CreateSellerDto {
  @IsString()
  id: string;

  @IsString()
  shopName: string;

  @IsString()
  ownerName: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  location?: string;

  @IsOptional()
  @IsString()
  transactionType?: string;

  @IsOptional()
  @IsString()
  transactionId?: string;

  @IsOptional()
  @IsNumber()
  totalOrders?: number;

  @IsOptional()
  @IsString()
  joinDate?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  products?: string[];

  @IsOptional()
  @IsNumber()
  rating?: number;
} 