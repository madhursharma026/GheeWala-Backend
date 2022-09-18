import { IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  Title: string;

  @IsString()
  CategoryImage: string;
}
