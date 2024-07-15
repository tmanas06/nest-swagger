import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDTO } from './dto/register.dto';
import { LoginDTO } from './dto/login.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  @ApiOperation({description: 'To register a new user with email', summary: 'Register a user with details'})
  create(@Body() registerDTO: RegisterDTO) {
    return this.authService.register(registerDTO);
  }

  @Post('/login')
  @ApiOperation({description: 'Login with email and password', summary: 'Endpoint to login with user email and password'})
  login(@Body() loginDTO : LoginDTO) {
    return this.authService.login(loginDTO);
  }
}