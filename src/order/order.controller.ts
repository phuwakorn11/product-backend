import { Controller, Get, Param, Put } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from './order.schema';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  async getAllOrders(): Promise<Order[]> {
    return this.orderService.getAllOrders();
  }

  @Get(':id')
  async getOrderById(@Param('id') id: string): Promise<Order> {
    return this.orderService.getOrderById(id);
  }

  @Put(':id')
  async changeStatus(
    @Param('id') id: string,
    changeStatusDto: { status: string },
  ): Promise<Order> {
    const changeStatus = await this.orderService.findByIdAndUpdate(
      id,
      changeStatusDto,
      { new: true },
    );
    return changeStatus;
  }
}
