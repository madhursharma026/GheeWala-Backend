import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('place_order/userId=:userId/productId=:productId')
  async createCategory(@Body() body: CreateOrderDto, @Param('userId') userId: string, @Param('productId') productId: string) {
      const newProduct = await this.orderService.create(body.Qty, +userId, +productId);
      return newProduct;
  }

  @Patch(':id')
  async updateCategory(@Param('id') id: string, @Body() body: UpdateOrderDto) {
      const updatedCategory = await this.orderService.update(+id, body.DeliveryStatus);
      return updatedCategory;
  }
}
