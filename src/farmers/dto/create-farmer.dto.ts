import { IsString, IsNumber, IsOptional, IsArray, IsEmail } from 'class-validator';

export class CreateFarmerDto {
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
  transactionType: string;

  @IsString()
  location: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  products?: string[];

  @IsOptional()
  @IsNumber()
  rating?: number;

  @IsOptional()
  @IsNumber()
  totalOrders?: number;

  @IsString()
  joinDate: string;
} 