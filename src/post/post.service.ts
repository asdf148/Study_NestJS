import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EPost } from 'src/entity/post.entity';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(EPost)
        private postsRepository: Repository<EPost>,
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ){}

    async create(id:number, post:EPost):Promise<string>{
        const dbUser = await this.usersRepository.findOne(id);
        console.log(dbUser);
        post.user = dbUser;
        await this.postsRepository.save(post);
        return "saved";
    }

    async findAll(): Promise<EPost[]> {
        return this.postsRepository.find();
    }

    async findOne(id:number):Promise<EPost> {
        return this.postsRepository.findOne(id);
    }

    async update(id:number, post:EPost):Promise<string> {
        const updatedPost = await this.postsRepository.findOne(id);
        updatedPost.content = post.content;
        updatedPost.title = post.title;
        await this.postsRepository.save(updatedPost);
        return "updated";
    }

    async delete(id:number):Promise<string> {
        await this.postsRepository.delete(id);
        return "deleted";
    }
}
