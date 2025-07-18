import { IsString, IsNumber } from 'class-validator';

export class CreatePurchaseHistoryDto {
  @IsString()
  id: string;

  @IsString()
  sellerShopName: string;

  @IsString()
  sellerName: string;

  @IsString()
  shopAddress: string;

  @IsString()
  item: string;

  @IsNumber()
  quantity: number;

  @IsNumber()
  totalPrice: number;

  @IsString()
  buyerName: string;

  @IsString()
  transportationName: string;

  @IsString()
  destinationAddress: string;

  @IsString()
  transactionType: string;

  @IsString()
  deliveryDate: string;

  @IsString()
  deliveryTime: string;
} 