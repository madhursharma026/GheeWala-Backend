// import { PartialType } from '@nestjs/mapped-types';
// import { CreateOrderDto } from './create-order.dto';

// export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
// import { PartialType } from '@nestjs/mapped-types';
// import { CreateProductDto } from './create-product.dto';

// export class UpdateProductDto extends PartialType(CreateProductDto) {}
import { IsString, IsOptional, IsDate } from 'class-validator';

export class UpdateOrderDto {
    @IsString()
    @IsOptional()
    DeliveryStatus: string;
}
