import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EPost } from 'src/entity/post.entity';
import { User } from 'src/entity/user.entity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, EPost])],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
