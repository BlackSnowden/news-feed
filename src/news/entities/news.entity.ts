import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from './category.entity';
import { Country } from './country.entity';
import { Language } from './language.entity';
import { Source } from './source.entity';

@Entity({ name: 'news' })
export class New {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  news_url: string;

  @Column()
  news_publication_date_UTC: string;

  @ManyToOne(() => Country)
  @JoinColumn({ name: 'country' })
  country_id: Country;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category' })
  category_id: Category;

  @ManyToOne(() => Language)
  @JoinColumn({ name: 'language' })
  language_id: Language;

  @ManyToOne(() => Source)
  @JoinColumn({ name: 'source' })
  source_id: Source;

  @CreateDateColumn({ type: 'timestamptz' })
  created_at: Date;

  @CreateDateColumn({ type: 'timestamptz' })
  updated_at: Date;
}
