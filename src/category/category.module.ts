import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryService } from './category.service';
import { Category } from './entities/category.entity';
import { MulterModule } from '@nestjs/platform-express';
import { CategoryController } from './category.controller';

@Module({
  imports: [MulterModule.register({dest: './CategoryImages'}),TypeOrmModule.forFeature([Category])],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule { }
