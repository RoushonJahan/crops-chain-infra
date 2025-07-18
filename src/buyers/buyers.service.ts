import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Buyer, BuyerDocument } from './schemas/buyer.schema';
import { CreateBuyerDto } from './dto/create-buyer.dto';
import { UpdateBuyerDto } from './dto/update-buyer.dto';

@Injectable()
export class BuyersService {
  constructor(@InjectModel(Buyer.name) private buyerModel: Model<BuyerDocument>) {}

  async create(createBuyerDto: CreateBuyerDto): Promise<Buyer> {
    const createdBuyer = new this.buyerModel(createBuyerDto);
    return createdBuyer.save();
  }

  async findAll(): Promise<Buyer[]> {
    return this.buyerModel.find().exec();
  }

  async findOne(id: string): Promise<Buyer | null> {
    return this.buyerModel.findOne({ id }).exec();
  }

  async update(id: string, updateBuyerDto: UpdateBuyerDto): Promise<Buyer | null> {
    return this.buyerModel.findOneAndUpdate({ id }, updateBuyerDto, { new: true }).exec();
  }

  async delete(id: string): Promise<Buyer | null> {
    return this.buyerModel.findOneAndDelete({ id }).exec();
  }
}
