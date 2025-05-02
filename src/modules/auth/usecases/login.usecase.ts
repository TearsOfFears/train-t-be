import { Injectable } from '@nestjs/common'
import { IUser } from '../../common/types/user'
import { UserService } from '../../user/services/user.service'
import { UserRepository } from '../../user/repositories/interfaces/user.repository'
import { JwtService } from '@nestjs/jwt'
import { LoginResponse } from '../responses/login.response'

@Injectable()
export class LoginUseCase {
  constructor(
    private readonly userService: UserService,
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async execute(user: IUser) {
    const { id } = user
    const userExisted = await this.userRepository.findById(id)
    const token = this.jwtService.sign({ id: user.id, email: user.email })
    return LoginResponse.fromDomain(userExisted, token)
  }
}
