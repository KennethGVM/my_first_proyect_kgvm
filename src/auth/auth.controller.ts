import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { HttpStatus } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login( 
    @Body() data: LoginDto
  ){
      const userToken = await this.authService.validateUser(data);

      if (!userToken) throw new HttpException('Credenciales invalidas', HttpStatus.UNAUTHORIZED);
      return userToken;
  }

}
