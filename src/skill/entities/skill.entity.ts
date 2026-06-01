import { ApiProperty } from '@nestjs/swagger';
import { Classe } from 'src/classe/entities/classe.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Skill {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  description: string;

  @ApiProperty()
  @Column()
  manaCost: number;

  @ApiProperty()
  @Column()
  classesId: number;

  @ManyToOne(() => Classe, (classes) => classes.id)
  @JoinColumn({ name: 'classesId' })
  classes: Classe[];
}
