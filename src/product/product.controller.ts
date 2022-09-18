import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, NotFoundException } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Post('add_product/categoryId=:categoryId')
  @UseInterceptors(FileInterceptor('ProductImage'))
  async createCategory(@Body() body: CreateProductDto, @UploadedFile() ProductImage: Express.Multer.File, @Param('categoryId') categoryId: string) {
    if ((ProductImage.mimetype === "image/jpeg") || (ProductImage.mimetype === "image/jpg") || (ProductImage.mimetype === "image/png")) {
      const newProduct = await this.productService.create(body.Title, ProductImage.filename, body.ShortDescription, body.LongDescription, body.Inventory, +categoryId);
      return newProduct;
    } else {
      throw new NotFoundException('Only Image Files are allowed!');
    }
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('ProductImage'))
  async updateCategory(@Param('id') id: string, @Body() body: UpdateProductDto, @UploadedFile() ProductImage: Express.Multer.File) {
    if ((ProductImage.mimetype === "image/jpeg") || (ProductImage.mimetype === "image/jpg") || (ProductImage.mimetype === "image/png")) {
      const updatedCategory = await this.productService.update(+id, body.Title, ProductImage.filename, body.ShortDescription, body.LongDescription, body.Inventory);
      return updatedCategory;
    } else {
      throw new NotFoundException('Only Image Files are allowed!');
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
