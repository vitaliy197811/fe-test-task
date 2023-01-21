import { Injectable, UnauthorizedException } from "@nestjs/common";
import { SignInDto } from "./dto/sign-in.dto";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';
import { SignUpDto } from "./dto/sign-up.dto";

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService
  ) {
  }

  async signIn(dto: SignInDto): Promise<{ token: string }> {
    const user = await this.validateUser(dto);

    return this.generateToken(user);
  }

  async signUp(createUserDto: SignUpDto) {
    return this.userService.create(createUserDto);
  }

  private async validateUser(dto: SignInDto) {
    const { password, id } = await this.userService.getPassword(dto.name);
    if (password) {
      const passwordEquals = await bcrypt.compare(dto.password, password);

      if (passwordEquals) {
        return { password, id, ...dto };
      }
    }

    throw new UnauthorizedException({ message: "Incorrect password or name" });
  }

  private async generateToken(user: SignInDto) {
    const payload = { name: user.name, id: user.id };
    return {
      token: this.jwtService.sign(payload)
    };
  }
}

