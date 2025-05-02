import { Injectable } from '@nestjs/common'
import { IUser } from '../../common/types/user'
import { UserResponse } from '../responses/UserReponse'
import { UserService } from '../services/user.service'

@Injectable()
export class GetMeUseCase {
  constructor(private readonly userService: UserService) {}

  async execute(currentUser: IUser) {
    const user = await this.userService.checkIfUserExistedById(currentUser.id)

    return UserResponse.fromDomain(user)
  }
}
