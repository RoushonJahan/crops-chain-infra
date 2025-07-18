import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Farmer, FarmerDocument } from './schemas/farmer.schema';
import { CreateFarmerDto } from './dto/create-farmer.dto';
import { UpdateFarmerDto } from './dto/update-farmer.dto';

@Injectable()
export class FarmersService {
  constructor(@InjectModel(Farmer.name) private farmerModel: Model<FarmerDocument>) {}

  async create(createFarmerDto: CreateFarmerDto): Promise<Farmer> {
    const createdFarmer = new this.farmerModel(createFarmerDto);
    return createdFarmer.save();
  }

  async findAll(): Promise<Farmer[]> {
    return this.farmerModel.find().exec();
  }

  async findOne(id: string): Promise<Farmer | null> {
    return this.farmerModel.findOne({ id }).exec();
  }

  async update(id: string, updateFarmerDto: UpdateFarmerDto): Promise<Farmer | null> {
    return this.farmerModel.findOneAndUpdate({ id }, updateFarmerDto, { new: true }).exec();
  }

  async delete(id: string): Promise<Farmer | null> {
    return this.farmerModel.findOneAndDelete({ id }).exec();
  }
}
