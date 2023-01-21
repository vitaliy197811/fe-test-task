import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly repo: Repository<User>
  ) {
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const findExists = await this.repo.findOne({ where: { name: createUserDto.name } });
    if (findExists) {
      throw new BadRequestException("І'мя вже використовується");
    }
    const user = this.repo.create(createUserDto);
    return this.repo.save(user);
  }

  getPassword(name: string): Promise<User> {
    return this.repo.findOne({ where: { name }, select: ["password", "id"] });
  }

  findAll(): Promise<User[]> {
    return this.repo.find();
  }

  findOne(id: string): Promise<User> {
    return this.repo.findOne({
      where: { id },
      relations: ['track']
    });
  }

  update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return this.repo.save({ id, ...updateUserDto });
  }

  remove(id: string) {
    return this.repo.delete(id);
  }
}
