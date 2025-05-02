import { Injectable } from '@nestjs/common'
import { RegisterUserDto } from '../dto/register-user.dto'
import * as bcryptjs from 'bcryptjs'
import { UserService } from '../../user/services/user.service'
import { UserRepository } from '../../user/repositories/interfaces/user.repository'

@Injectable()
export class RegisterUseCase {
  constructor(
    private readonly userService: UserService,
    private readonly userRepository: UserRepository,
  ) {}

  async execute(registerUserDto: RegisterUserDto) {
    await this.userService.checkIfUserExistedByEmail(registerUserDto.email)

    const hashedPassword = await bcryptjs.hash(registerUserDto.password, 10)

    await this.userRepository.save({
      email: registerUserDto.email,
      password: hashedPassword,
      name: registerUserDto.name,
      surname: registerUserDto.surname,
    })

    return {
      message: 'User successfully registered',
    }
  }
}
