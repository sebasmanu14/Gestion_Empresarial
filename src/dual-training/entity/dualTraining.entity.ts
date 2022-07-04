/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity()
export class DualTraining {
  @PrimaryColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;
}
