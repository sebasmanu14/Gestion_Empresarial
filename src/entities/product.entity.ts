import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity()
export class Product {
  @PrimaryColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  price: number;
  @Column()
  stock: number;
  @Column()
  status: string;
}
