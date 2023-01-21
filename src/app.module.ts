import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeormConfig } from "../database/database-init";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from "./modules/users/users.module";
import { AuthModule } from "./modules/auth/auth.module";
import { TrackModule } from "./modules/track/track.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig),
    AuthModule,
    UsersModule,
    TrackModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
