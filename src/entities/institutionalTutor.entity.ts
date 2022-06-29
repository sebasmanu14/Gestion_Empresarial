/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity()
export class InstitutionalTutor {
  @PrimaryColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  address: string;


}
