import { IsOptional, IsString } from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsOptional()
  id?: string;

  @IsString()
  name: string;


  @IsString()
  password: string;
}
