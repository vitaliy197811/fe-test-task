import { IsBoolean, IsDate, IsNumber, IsOptional, IsString } from "class-validator";
import { Transform } from "class-transformer";

export class CreateTrackDto {
  @IsOptional()
  @IsNumber()
  id: number;

  @Transform( ({ value }) => new Date(value))
  @IsDate()
  date: Date;

  @IsNumber()
  hours: number;

  @IsString()
  message: string;

  @IsBoolean()
  done: boolean;
}
