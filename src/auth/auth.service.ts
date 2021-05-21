import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ){}

    async create(user:User){
        console.log(user);//다 나옴
        const newUser = this.usersRepository.create(user);
        console.log(newUser);
        await this.usersRepository.save(user);
    }
}
