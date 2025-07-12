import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from './schemas/order.schema';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
  ) {}

  async findAll(): Promise<Order[]> {
    return this.orderModel.find().exec();
  }

  async findOne(id: string): Promise<Order | null> {
    return this.orderModel.findOne({ id }).exec();
  }

  async create(order: Order): Promise<Order> {
    const created = new this.orderModel(order);
    return created.save();
  }

  async update(id: string, order: Order): Promise<Order | null> {
    return this.orderModel.findOneAndUpdate({ id }, order, { new: true }).exec();
  }

  async remove(id: string): Promise<Order | null> {
    return this.orderModel.findOneAndDelete({ id }).exec();
  }
}