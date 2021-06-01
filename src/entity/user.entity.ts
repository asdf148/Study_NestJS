
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { EPost } from './post.entity';

@Entity()
export class User {
  @IsOptional()
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

  @IsOptional()
  @OneToMany(
      () => EPost,
      (post) => post.user
  )
  posts:EPost[];

  @IsOptional()
  @CreateDateColumn()
  createdAt: Date;

  @IsOptional()
  @UpdateDateColumn()
  updatedAt: Date;
}