import { forwardRef, Module } from "@nestjs/common";
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from "@nestjs/jwt";
import { UsersModule } from "../users/users.module";

@Module({
  imports: [
    forwardRef(()=> UsersModule),
    JwtModule.register({
      secret: process.env.JWT_KEY,
      signOptions: {
        expiresIn: '30d',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [JwtModule]
})
export class AuthModule {}
