import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrderService {
  constructor(@InjectRepository(Order) private repo: Repository<Order>) { }

  // create(createProductDto: CreateProductDto) {
  //   return 'This action adds a new product';
  // }
  create(Qty: number, userId, productId) {
    const product = this.repo.create({ Qty });
    product.product = productId
    product.user = userId
    return this.repo.save(product);
  }
  update(id: number, DeliveryStatus: string) {
    return this.repo.update(id, { DeliveryStatus })
  }
}
