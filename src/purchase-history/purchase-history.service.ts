import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PurchaseHistory, PurchaseHistoryDocument } from './schemas/purchase-history.schema';

@Injectable()
export class PurchaseHistoryService {
  constructor(@InjectModel(PurchaseHistory.name) private purchaseHistoryModel: Model<PurchaseHistoryDocument>) {}

  async create(purchaseHistory: PurchaseHistory): Promise<PurchaseHistory> {
    const createdPurchaseHistory = new this.purchaseHistoryModel(purchaseHistory);
    return createdPurchaseHistory.save();
  }

  async findAll(): Promise<PurchaseHistory[]> {
    return this.purchaseHistoryModel.find().exec();
  }

  async findOne(id: string): Promise<PurchaseHistory | null> {
    return this.purchaseHistoryModel.findOne({ id }).exec();
  }

  async update(id: string, purchaseHistory: PurchaseHistory): Promise<PurchaseHistory | null> {
    return this.purchaseHistoryModel.findOneAndUpdate({ id }, purchaseHistory, { new: true }).exec();
  }

  async delete(id: string): Promise<PurchaseHistory | null> {
    return this.purchaseHistoryModel.findOneAndDelete({ id }).exec();
  }
}
