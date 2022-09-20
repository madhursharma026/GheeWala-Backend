import { Product } from 'src/product/entities/product.entity';
// import { User } from 'src/users/entities/user.entity';
import { User } from 'src/auth/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, CreateDateColumn } from 'typeorm';

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, default: 'Not Delivered' })
    DeliveryStatus: string;

    @CreateDateColumn({ name: 'placed_at' })
    placed_at: Date;

    @Column({ nullable: false })
    Qty: number;

    @ManyToOne(() => User, user => user.orders)
    user: User;

    @ManyToOne(() => Product, product => product.orders)
    product: Product;
}
