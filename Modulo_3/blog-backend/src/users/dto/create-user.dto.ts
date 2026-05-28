import { IsEmail, IsString, MinLength} from 'class-validator';

export class CreateUserDto {
  @IsString()
  username?: string;

  @IsString()
  email?: string;


  @IsString()
  @MinLength(6)
  password?: string;
}

