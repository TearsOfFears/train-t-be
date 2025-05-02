import { Injectable, NotFoundException } from '@nestjs/common'
import { UserRepository } from '../repositories/interfaces/user.repository'

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async checkIfUserExistedById(id: string) {
    const user = await this.userRepository.findById(id)
    if (!user) throw new NotFoundException('User not found')
    return user
  }

  async checkIfUserExistedByEmail(email: string) {
    const user = await this.userRepository.findByEmail(email)
    if (user) throw new NotFoundException('User with this email exist')
    return user
  }

  async checkIfUserNotExistedByEmail(email: string) {
    const user = await this.userRepository.findByEmail(email)
    if (!user) throw new NotFoundException('User with this not email exist')
    return user
  }
}
