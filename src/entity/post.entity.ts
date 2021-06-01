import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class EPost {
  @IsOptional()
  @IsNumber()
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @Column()
  title: string;

  @IsString()
  @Column()
  content: string;

  @IsOptional()
  @IsNumber()
  @ManyToOne(
      () => User,
      (user) => user.posts
  )
  user: User;

  @IsOptional()
  @CreateDateColumn()
  createdAt: Date;

  @IsOptional()
  @UpdateDateColumn()
  updatedAt: Date;
}