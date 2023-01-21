import { Injectable } from '@nestjs/common';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Track } from "./entities/track.entity";
import { Repository } from "typeorm";

@Injectable()
export class TrackService {
  constructor(@InjectRepository(Track) private readonly repo: Repository<Track>) {
  }

  create(createTrackDto: CreateTrackDto, user) {
    const date = new Date(createTrackDto.date).toISOString();
    delete createTrackDto.date;
    console.log(user)
    const track = this.repo.create({
      ...createTrackDto,
      date,
      user: user
    });
    return this.repo.save(track);
  }

  findAll(id: string) {
    return this.repo.find({ where: { user: { id } } });
  }

  update(id: number, updateTrackDto: UpdateTrackDto) {
    return this.repo.update(id,  updateTrackDto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
