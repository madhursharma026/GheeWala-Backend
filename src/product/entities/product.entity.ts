import { Category } from 'src/category/entities/category.entity';
import { Order } from 'src/order/entities/order.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne,OneToMany } from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    Title: string;

    @Column({ nullable: false })
    ProductImage: string;

    @Column({ nullable: false })
    ShortDescription: string;

    @Column({ nullable: false })
    LongDescription: string;

    @Column({ nullable: false })
    Inventory: string;

    @ManyToOne(() => Category, (category) => category.products)
    category: Category

    @OneToMany(() => Order, order => order.product)
    orders: Order[];
}

