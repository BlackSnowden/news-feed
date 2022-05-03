import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'languages' })
export class Language {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  language: string;

  @Column()
  language_name: string;

  @CreateDateColumn({ type: 'timestamptz' })
  created_at: Date;

  @CreateDateColumn({ type: 'timestamptz' })
  updated_at: Date;
}
