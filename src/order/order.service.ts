import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './order.schema';

@Injectable()
export class OrderService {
  [x: string]: any;
  constructor(
    @InjectModel(Order.name) private readonly orderModel: Model<Order>,
  ) {}

  async getAllOrders(): Promise<Order[]> {
    return this.orderModel.find().exec();
  }

  async getOrderById(id: string): Promise<Order> {
    const order = await this.orderModel.findById(id).exec();
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    return order;
  }



  async changeStatus(
    id: string,
    changeStatusDto: { status: string },
  ): Promise<Order> {
    
    const changeStatus = await this.orderModel.findByIdAndUpdate(
      id,
      changeStatusDto,
      { new: true },
    );
    return changeStatus;
  }



}
