import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { User } from 'src/entity/user.entity';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('join')
    join(@Body() user:User):Promise<string>{
        return this.authService.create(user);
    }

    @Get('users')
    findAll():Promise<User[]>{
        return this.authService.findAll();
    }

    @Get('user/:id')
    findOne(@Param('id') id:number):Promise<User>{
        return this.authService.findOne(id);
    }

    @Put('modify/:id')
    modify(@Param('id') id:number, @Body() user:User):Promise<string>{
        return this.authService.modify(id, user);
    }

    @Delete('delete/:id')
    delete(@Param('id') id:number):Promise<string>{
        return this.authService.delete(id);
    }
}
