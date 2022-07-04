import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity()
export class Career {
  @PrimaryColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;
}
