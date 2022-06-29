import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity()
export class Company {
  @PrimaryColumn()
  id: number;
  @Column()
  company_name: string;
  @Column()
  phone: string;
  @Column()
  company_address: string;
  @Column()
  company_description: string;
}
