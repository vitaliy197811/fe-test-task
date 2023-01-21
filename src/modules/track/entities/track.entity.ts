import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../users/entities/user.entity";

@Entity('track')
export class Track {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "date" })
  date: Date;

  @Column()
  hours: number;

  @Column()
  message: string;

  @Column()
  done: boolean;

  @ManyToOne(() => User, user => user.track)
  user: User;
}
