
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { Roles } from './roles.decorator';
import { Role } from 'src/enums/role.enum';
import { RolesGuard } from './roles.guard';
import { User } from 'src/users/user.model';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService,
    private  usersService: UsersService
  ) { }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, string>) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }
  @Post('register')
  signUp(@Body() newUser: User) {
    return this.usersService.create(newUser)
  }

  @Roles(Role.Commander)
  @UseGuards(AuthGuard, RolesGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
