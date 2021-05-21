import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from 'src/entity/post.entity';
import { User } from 'src/entity/user.entity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Post])],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
