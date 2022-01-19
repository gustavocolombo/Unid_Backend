import {
  Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn,
} from 'typeorm';

@Entity('tools')
export default class Tools {
  @PrimaryGeneratedColumn('uuid')
    id: string;

  @Column()
    title: string;

  @Column()
    link: string;

  @Column({ type: 'text', array: true, default: [] })
    tags: string[];

  @Column()
    description: string;

  @CreateDateColumn()
    created_at: Date;

  @UpdateDateColumn()
    updated_at: Date;
}
