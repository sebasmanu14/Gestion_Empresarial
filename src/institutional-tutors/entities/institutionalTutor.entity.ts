/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity()
export class InstitutionalTutor {
  @PrimaryColumn()
  id: number;
  @Column()
  identityCard: number;
  @Column()
  name: string;
  @Column()
  lastName: string;
  @Column()
  institutionalEmail: string;
  @Column()
  personalEmail: string;
  @Column()
  address: string;
  @Column()
  phone: string;
  @Column()
  studentNumbers: number;

  


}
