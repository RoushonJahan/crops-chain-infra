import { IsString, IsEmail, IsEnum, MinLength } from 'class-validator';
import { UserRole } from '../schemas/user.schema';

export class SignupDto {
  @IsString()
  name: string;

  @IsString()
  phone: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  confirmPassword: string;

  @IsEnum(UserRole)
  role: UserRole;

  @IsString()
  location: string;

  @IsString()
  shopName: string;

  @IsString()
  ownerName: string;

  @IsString()
  transactionType: string;
} 