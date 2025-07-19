import { IsString, IsNumber, IsOptional, IsArray, IsEmail } from 'class-validator';

export class UpdateBuyerDto {
  @IsOptional()
  @IsString()
  id?: string;

  @IsOptional()
  @IsString()
  shopName?: string;

  @IsOptional()
  @IsString()
  ownerName?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  location?: string;

  @IsOptional()
  @IsString()
  transactionType?: string;

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
} 