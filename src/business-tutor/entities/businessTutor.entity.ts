import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity()
export class BusinessTutor {
  @PrimaryColumn()
  id: number;
  @Column()
  identification_card: number;
  @Column()
  name: string;
  @Column()
  surname: string;
  @Column()
  address: string;
  @Column()
  institutional_mail: string;
  @Column()
  personal_mail: string;
  @Column()
  telephone: number;
}
