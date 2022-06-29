import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity()
export class Level {
  @PrimaryColumn()
  id: number;
  @Column()
  semester_level: number;
}