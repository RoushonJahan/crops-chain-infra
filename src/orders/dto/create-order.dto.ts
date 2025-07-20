import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsNotEmpty()
  date: string;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsNumber()
  quantity: number;

  @IsNumber()
  totalPrice: number;

  @IsString()
  @IsNotEmpty()
  productId: string;

  @IsString()
  @IsNotEmpty()
  sellerShopId: string;

  @IsString()
  @IsNotEmpty()
  buyerShopId: string;

  @IsString()
  @IsNotEmpty()
  transportId: string;

  @IsString()
  @IsNotEmpty()
  transationId: string;
} 