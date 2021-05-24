import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EPost } from 'src/entity/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(EPost)
        private postsRepository: Repository<EPost>,
    ){}

    async create(post:EPost):Promise<string>{
        await this.postsRepository.save(post);
        return "saved";
    }

    async findAll(): Promise<EPost[]> {
        const posts = await this.postsRepository.find();
        return posts;
    }

    async findOne(id:number):Promise<EPost> {
        const post = await this.postsRepository.findOne(id);
        return post;
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
