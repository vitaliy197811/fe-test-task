import {
  CanActivate,
  ExecutionContext, ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private jwtService: JwtService) {
  }

  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    const token = req.headers.authorization;
    const user = this.jwtService.verify(token);

    if (user.name !== 'Admin') {
      throw new ForbiddenException();
    }
    return true;
  }
}
