import { IsString, IsNumber, IsOptional, IsArray } from 'class-validator';

export class CreateBuyerDto {
  @IsString()
  id: string;

  @IsString()
  shopName: string;

  @IsString()
  ownerName: string;

  @IsString()
  phone: string;

  @IsString()
  location: string;

} 