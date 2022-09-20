import { IsDate, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsDate()
  Qty: number;

  @IsString()
  userId: string;

  @IsString()
  productId: string;
}
