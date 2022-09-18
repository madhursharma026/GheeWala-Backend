// import { PartialType } from '@nestjs/mapped-types';
// import { CreateProductDto } from './create-product.dto';

// export class UpdateProductDto extends PartialType(CreateProductDto) {}
import { IsString, IsOptional } from 'class-validator';

export class UpdateProductDto {
    @IsString()
    @IsOptional()
    Title: string;

    @IsString()
    @IsOptional()
    ProductImage: string;

    @IsString()
    @IsOptional()
    CategoryId: string;

    @IsString()
    @IsOptional()
    ShortDescription: string;

    @IsString()
    @IsOptional()
    LongDescription: string;

    @IsString()
    @IsOptional()
    Inventory: string;
}
