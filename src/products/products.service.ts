import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async findOne(id: string): Promise<Product | null> {
    return this.productModel.findById(id).exec();
  }

  async create(product: Product): Promise<Product> {
    const created = new this.productModel(product);
    return created.save();
  }

  async update(id: string, product: Product): Promise<Product | null> {
    return this.productModel.findOneAndUpdate({ id }, product, { new: true }).exec();
  }

  async remove(id: string): Promise<Product | null> {
    return this.productModel.findOneAndDelete({ id }).exec();
  }
}
