import { IsOptional, IsString } from "class-validator";

export class SignUpDto {
  @IsString()
  @IsOptional()
  id?: string;

  @IsString()
  name: string;

  @IsString()
  password: string;
}
