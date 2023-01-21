import {
  Controller,
  Post,
  Body,
} from "@nestjs/common";
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  login(@Body() userLoginDto: SignInDto) {
    return this.authService.signIn(userLoginDto);
  }

  @Post('sign-up')
  registration(@Body() createUserDto: SignUpDto) {
    return this.authService.signUp(createUserDto);
  }
}
