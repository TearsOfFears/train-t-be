import { IsEmail, IsString, MinLength } from 'class-validator'

export class RegisterUserDto {
  @IsEmail()
  email: string

  @MinLength(6, { message: 'Password must be more then 6 symbols' })
  password: string

  @IsString()
  name: string

  @IsString()
  surname: string
}
