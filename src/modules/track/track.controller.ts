import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TrackService } from './track.service';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { AuthGuard } from "../../core/guards/auth.guard";
import { User } from "../../core/decorators/user.decorator";
import { User as UserEntity } from "../users/entities/user.entity";

@Controller('track')
@UseGuards(AuthGuard)
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  @Post()
  create(@Body() createTrackDto: CreateTrackDto, @User() user: UserEntity) {
    return this.trackService.create(createTrackDto, user);
  }

  @Get(':userId')
  findAllTrack(@Param('id') id: string) {
    return this.trackService.findAll(id);
  }

  @Get()
  findAllTrackCurrentUser(@User() user: UserEntity) {
    return this.trackService.findAll(user.id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTrackDto: UpdateTrackDto) {
    return this.trackService.update(+id, updateTrackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trackService.remove(+id);
  }
}
