import { Seeds } from '../database-init';
import { User } from "../../src/modules/users/entities/user.entity";
import { randomUUID } from 'crypto';

const ADMIN_SEEDS: User = {
  id: randomUUID(),
  name: 'Admin',
  password: '$2b$10$fALrOTcccx4eJop.CpgqJ.706qYJU862Ef4U5lmel1qp8kPcWWwjG', // password
  track: [],
} as User;

export class CreateGenreSeeds extends Seeds {
  constructor() {
    super(User, ADMIN_SEEDS, User.name);
  }
}
