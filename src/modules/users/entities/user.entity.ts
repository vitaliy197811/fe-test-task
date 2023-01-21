import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';
import { Track } from "../../track/entities/track.entity";

@Entity('users')
export class User {
 @PrimaryGeneratedColumn('uuid')
  id: string;

 @Column()
 name: string;

 @Column({ select: false })
 password: string;
 @BeforeInsert()
 @BeforeUpdate()
 private async hashPassword(): Promise<void> {
  this.password = await bcrypt.hash(this.password, 10);
 }

 @OneToMany(() => Track, track => track.user)
 track: Track[];
}
