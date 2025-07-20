import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { User, UserDocument, UserRole } from './schemas/user.schema';
import { Farmer, FarmerDocument } from '../farmers/schemas/farmer.schema';
import { Buyer, BuyerDocument } from '../buyers/schemas/buyer.schema';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { VerifyOtpDto } from './dto/verify-otp.dto';
import { ResendOtpDto } from './dto/resend-otp.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Farmer.name) private farmerModel: Model<FarmerDocument>,
    @InjectModel(Buyer.name) private buyerModel: Model<BuyerDocument>,
  ) {}

  async signup(signupDto: SignupDto) {
    const { password, confirmPassword, role, ...userData } = signupDto;

    // Check if passwords match
    if (password !== confirmPassword) {
      throw new BadRequestException('Passwords do not match');
    }

    // Check if user already exists
    const existingUser = await this.userModel.findOne({ id: userData.phone });
    if (existingUser) {
      throw new BadRequestException('User with this phone number already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate OTP
    const otp = this.generateOTP();
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    // Create user record
    const user = new this.userModel({
      id: userData.phone,
      role,
      password: hashedPassword,
      otp,
      otpExpiry,
    });

    await user.save();

    // Create farmer or buyer record based on role
    if (role === UserRole.FARMER) {
      const farmer = new this.farmerModel({
        id: userData.phone,
        shopName: userData.shopName,
        ownerName: userData.ownerName,
        phone: userData.phone,
        transactionType: userData.transactionType,
        location: userData.location,
      });
      await farmer.save();
    } else if (role === UserRole.BUYER) {
      const buyer = new this.buyerModel({
        id: userData.phone,
        shopName: userData.shopName,
        ownerName: userData.ownerName,
        phone: userData.phone,
        transactionType: userData.transactionType,
        location: userData.location,
      });
      await buyer.save();
    }

    return {
      message: 'User registered successfully. Please verify your phone number.',
      phone: userData.phone,
      otp: otp, // In production, this should be sent via SMS
    };
  }

  async login(loginDto: LoginDto) {
    const { phone, password } = loginDto;

    // Check for admin login
    if (phone === '01500000000' && password === 'admin') {
      const adminToken = jwt.sign(
        { 
          id: 'admin',
          phone: '01500000000',
          role: UserRole.ADMIN 
        },
        process.env.JWT_SECRET || 'your-secret-key',
        { expiresIn: '24h' }
      );

      return {
        message: 'Admin login successful',
        token: adminToken,
        user: {
          id: 'admin',
          phone: '01500000000',
          role: UserRole.ADMIN,
          name: 'Admin'
        }
      };
    }

    // Find user by phone
    const user = await this.userModel.findOne({ id: phone });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Check if phone is verified
    if (!user.isPhoneVerified) {
      throw new BadRequestException('Please verify your phone number first');
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Get user details from farmer or buyer table
    let userDetails: FarmerDocument | BuyerDocument | null = null;
    if (user.role === UserRole.FARMER) {
      userDetails = await this.farmerModel.findOne({ id: phone });
    } else if (user.role === UserRole.BUYER) {
      userDetails = await this.buyerModel.findOne({ id: phone });
    }

    // Generate JWT token
    const token = jwt.sign(
      { 
        id: user.id,
        phone: user.id,
        role: user.role 
      },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    return {
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        name: userDetails?.ownerName || '',
        phone: user.id,
        role: user.role,
        location: userDetails?.location || '',
        ...(user.role === UserRole.FARMER && { farmName: userDetails?.shopName }),
      }
    };
  }

  async verifyOtp(verifyOtpDto: VerifyOtpDto) {
    const { phone, otp } = verifyOtpDto;

    const user = await this.userModel.findOne({ id: phone });
    if (!user) {
      throw new BadRequestException('User not found');
    }

    if (user.isPhoneVerified) {
      throw new BadRequestException('Phone number already verified');
    }

    if (user.otp !== otp) {
      throw new BadRequestException('Invalid OTP');
    }

    if (user.otpExpiry && user.otpExpiry < new Date()) {
      throw new BadRequestException('OTP has expired');
    }

    // Mark phone as verified
    user.isPhoneVerified = true;
    user.otp = undefined;
    user.otpExpiry = undefined;
    await user.save();

    return {
      message: 'Phone number verified successfully',
      user: {
        id: user.id,
        role: user.role,
      }
    };
  }

  async resendOtp(resendOtpDto: ResendOtpDto) {
    const { phone } = resendOtpDto;

    const user = await this.userModel.findOne({ id: phone });
    if (!user) {
      throw new BadRequestException('User not found');
    }

    if (user.isPhoneVerified) {
      throw new BadRequestException('Phone number already verified');
    }

    // Generate new OTP
    const otp = this.generateOTP();
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    user.otp = otp;
    user.otpExpiry = otpExpiry;
    await user.save();

    return {
      message: 'OTP resent successfully',
      otp: otp, // In production, this should be sent via SMS
    };
  }

  private generateOTP(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }
} 