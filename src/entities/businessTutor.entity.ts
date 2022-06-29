import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity()
export class BusinessTutor {
  @PrimaryColumn()
  id: number;
  @Column()
  tutorName: string;
  @Column()
  addressTutor: string;
  @Column()
  companyFk: number;
}
