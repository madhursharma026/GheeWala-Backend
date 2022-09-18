import { IsString } from 'class-validator';

export class CreateProductDto {
    @IsString()
    Title: string;

    @IsString()
    ProductImage: string;

    @IsString()
    CategoryId: string;

    @IsString()
    ShortDescription: string;

    @IsString()
    LongDescription: string;

    @IsString()
    Inventory: string;
}
