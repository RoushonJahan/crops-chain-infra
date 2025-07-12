import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TrackOrder, TrackOrderDocument } from './schemas/track-order.schema';

@Injectable()
export class TrackOrdersService {
  constructor(@InjectModel(TrackOrder.name) private trackOrderModel: Model<TrackOrderDocument>) {}

  async create(trackOrder: TrackOrder): Promise<TrackOrder> {
    const createdTrackOrder = new this.trackOrderModel(trackOrder);
    return createdTrackOrder.save();
  }

  async findAll(): Promise<TrackOrder[]> {
    return this.trackOrderModel.find().exec();
  }

  async findOne(id: string): Promise<TrackOrder | null> {
    return this.trackOrderModel.findOne({ id }).exec();
  }

  async update(id: string, trackOrder: TrackOrder): Promise<TrackOrder | null> {
    return this.trackOrderModel.findOneAndUpdate({ id }, trackOrder, { new: true }).exec();
  }

  async delete(id: string): Promise<TrackOrder | null> {
    return this.trackOrderModel.findOneAndDelete({ id }).exec();
  }
}
