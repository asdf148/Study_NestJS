import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/entity/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(Post)
        private postsRepository: Repository<Post>,
    ){}

    async create(post:Post){
        await this.postsRepository.save(post);
        return "saved";
    }

    async findAll(): Promise<Post[]>{
        const posts = await this.postsRepository.find();
        return posts;
    }

    async findOne(id:number):Promise<Post>{
        const post = await this.postsRepository.findOne(id);
        return post;
    }

    async update(post:Post){
        // const updatedPost = await this.postsRepository.update(post);
    }
}
