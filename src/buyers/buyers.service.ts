import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Buyer, BuyerDocument } from './schemas/buyer.schema';

@Injectable()
export class BuyersService {
  constructor(@InjectModel(Buyer.name) private buyerModel: Model<BuyerDocument>) {}

  async create(buyer: Buyer): Promise<Buyer> {
    const createdBuyer = new this.buyerModel(buyer);
    return createdBuyer.save();
  }

  async findAll(): Promise<Buyer[]> {
    return this.buyerModel.find().exec();
  }

  async findOne(id: string): Promise<Buyer | null> {
    return this.buyerModel.findOne({ id }).exec();
  }

  async update(id: string, buyer: Buyer): Promise<Buyer | null> {
    return this.buyerModel.findOneAndUpdate({ id }, buyer, { new: true }).exec();
  }

  async delete(id: string): Promise<Buyer | null> {
    return this.buyerModel.findOneAndDelete({ id }).exec();
  }
}
