import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Seller, SellerDocument } from './schemas/seller.schema';

@Injectable()
export class SellersService {
  constructor(
    @InjectModel(Seller.name) private sellerModel: Model<SellerDocument>,
  ) {}

  async findAll(): Promise<Seller[]> {
    return this.sellerModel.find().exec();
  }

  async findOne(id: string): Promise<Seller | null> {
    return this.sellerModel.findById(id).exec();
  }

  async create(seller: Seller): Promise<Seller> {
    const created = new this.sellerModel(seller);
    return created.save();
  }

  async update(id: string, seller: Seller): Promise<Seller | null> {
    return this.sellerModel.findOneAndUpdate({ id }, seller, { new: true }).exec();
  }

  async remove(id: string): Promise<Seller | null> {
    return this.sellerModel.findOneAndDelete({ id }).exec();
  }
}