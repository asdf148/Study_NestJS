import { Body, Controller, Post } from '@nestjs/common';
import { User } from 'src/entity/user.entity';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post()
    join(@Body() user:User){
        return this.authService.create(user);
    }
}
