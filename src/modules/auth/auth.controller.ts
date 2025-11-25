import { Body, Controller, Post } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signupUser(@Body() dto: SignupDto) {
    return this.authService.signup(dto);
  }
}
