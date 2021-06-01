import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EPost } from 'src/entity/post.entity';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Get('posts')
    findAll():Promise<EPost[]>{
        return this.postService.findAll();
    }

    @Get('post/:id')
    findOne(@Param('id') id:number):Promise<EPost>{
        return this.postService.findOne(id);
    }

    @Post('write')
    create(@Body() post:EPost):Promise<string>{
        return this.postService.create(post);
    }

    @Put('update/:id')
    update(@Param('id') id:number, @Body() post:EPost):Promise<string>{
        return this.postService.update(id, post);
    }

    @Delete('delete/:id')
    delete(@Param('id') id:number):Promise<string>{
        return this.postService.delete(id);
    }
}
