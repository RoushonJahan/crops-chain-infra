import { IsString, IsNumber, IsOptional, IsArray, IsEmail } from 'class-validator';

export class CreateBuyerDto {
  @IsString()
  id: string;

  @IsString()
  shopName: string;

  @IsString()
  ownerName: string;

  @IsString()
  phone: string;

  @IsEmail()
  email: string;

  @IsString()
  location: string;

  @IsString()
  transactionType: string;

  @IsOptional()
  @IsNumber()
  totalOrders?: number;

  @IsString()
  joinDate: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  products?: string[];
} 