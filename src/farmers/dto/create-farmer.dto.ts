import { IsString, IsNumber, IsOptional, IsArray } from 'class-validator';

export class CreateFarmerDto {
  @IsString()
  id: string;

  @IsString()
  shopName: string;

  @IsString()
  ownerName: string;

  @IsString()
  phone: string;

  @IsString()
  transactionType: string;

  @IsString()
  location: string;

} 