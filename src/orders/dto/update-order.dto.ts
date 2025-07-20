import { IsString, IsNumber, IsOptional, IsNotEmpty } from 'class-validator';

export class UpdateOrderDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  id?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  type?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  date?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  status?: string;

  @IsOptional()
  @IsNumber()
  quantity?: number;

  @IsOptional()
  @IsNumber()
  totalPrice?: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  productId?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  sellerShopId?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  buyerShopId?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  transportId?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  transationId?: string;
} 