
import { IsNumber, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { EPost } from './post.entity';

@Entity()
export class User {
  @IsNumber()
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @Column()
  nick: string;

  @IsString()
  @Column()
  email: string;

  @IsString()
  @Column()
  password: string;

  @OneToMany(
      () => EPost,
      (post) => post.user
  )
  posts:EPost[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}