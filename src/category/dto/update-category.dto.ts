import { IsString, IsOptional } from 'class-validator';

export class UpdateCategoryDto {
    @IsString()
    @IsOptional()
    Title: string;

    @IsString()
    @IsOptional()
    CategoryImage: string;
}
