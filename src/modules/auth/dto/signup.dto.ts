import { IsEmail, IsString, MinLength } from 'class-validator';

export class SignupDto {
  @IsString()
  name: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsEmail()
  email: string;
}
