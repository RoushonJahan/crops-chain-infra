import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Farmer, FarmerDocument } from './schemas/farmer.schema';

@Injectable()
export class FarmersService {
  constructor(@InjectModel(Farmer.name) private farmerModel: Model<FarmerDocument>) {}

  async create(farmer: Farmer): Promise<Farmer> {
    const createdFarmer = new this.farmerModel(farmer);
    return createdFarmer.save();
  }

  async findAll(): Promise<Farmer[]> {
    return this.farmerModel.find().exec();
  }

  async findOne(id: string): Promise<Farmer | null> {
    return this.farmerModel.findOne({ id }).exec();
  }

  async update(id: string, farmer: Farmer): Promise<Farmer | null> {
    return this.farmerModel.findOneAndUpdate({ id }, farmer, { new: true }).exec();
  }

  async delete(id: string): Promise<Farmer | null> {
    return this.farmerModel.findOneAndDelete({ id }).exec();
  }
}
