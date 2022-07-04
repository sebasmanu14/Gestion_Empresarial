/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity()
export class SchoolPeriod {
  @PrimaryColumn()
  id: number;
  @Column()
  year: string;
}
