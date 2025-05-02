import { BadRequestException, Injectable } from '@nestjs/common'
import * as bcryptjs from 'bcryptjs'
import { UserService } from '../../user/services/user.service'

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.checkIfUserNotExistedByEmail(email)
    const isValidPasswords = await bcryptjs.compare(password, user.password)
    if (user && isValidPasswords) {
      return user
    }

    throw new BadRequestException('User password is incorrect')
  }
}
