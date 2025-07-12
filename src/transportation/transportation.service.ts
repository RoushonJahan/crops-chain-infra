import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transportation, TransportationDocument } from './schemas/transportation.schema';

@Injectable()
export class TransportationService {
  constructor(@InjectModel(Transportation.name) private transportationModel: Model<TransportationDocument>) {}

  async create(transportation: Transportation): Promise<Transportation> {
    const createdTransportation = new this.transportationModel(transportation);
    return createdTransportation.save();
  }

  async findAll(): Promise<Transportation[]> {
    return this.transportationModel.find().exec();
  }

  async findOne(id: string): Promise<Transportation | null> {
    return this.transportationModel.findOne({ id }).exec();
  }

  async update(id: string, transportation: Transportation): Promise<Transportation | null> {
    return this.transportationModel.findOneAndUpdate({ id }, transportation, { new: true }).exec();
  }

  async delete(id: string): Promise<Transportation | null> {
    return this.transportationModel.findOneAndDelete({ id }).exec();
  }
}
