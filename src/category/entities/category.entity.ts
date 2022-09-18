import { Product } from 'src/product/entities/product.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    Title: string;

    @Column({ nullable: false })
    CategoryImage: string;

    @OneToMany(() => Product, (product) => product.category)
    products: Product[]
}
