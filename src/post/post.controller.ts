import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EPost } from 'src/entity/post.entity';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Get()
    async findAll(){
        return await this.postService.findAll();
    }

    @Get()
    async findOne(@Param('id') id:number){
        return await this.postService.findOne(id);
    }

    @Post()
    async create(@Body() post:EPost){
        return await this.postService.create(post);
    }

    @Put()
    async update(@Param('id') id:number, @Body() post:EPost){
        return await this.postService.update(id, post);
    }

    @Delete()
    async delete(@Param('id') id:number){
        return await this.postService.delete(id);
    }
}
