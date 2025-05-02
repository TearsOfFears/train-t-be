import { ApiController, ApiGet } from '../../common/decorators/docs.decorator'
import { User } from '../../common/decorators/current-user.decorator'
import { UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from '../../common/guards'
import { IUser } from '../../common/types/user'
import { GetMeUseCase } from '../usecases/get-me.usecase'
import { UserResponse } from '../responses/UserReponse'

@ApiController('user')
export class UserController {
  constructor(private readonly getMeUseCase: GetMeUseCase) {}

  @ApiGet('me', 'Get current user full info', UserResponse)
  @UseGuards(JwtAuthGuard)
  getMe(@User() currentUser: IUser) {
    return this.getMeUseCase.execute(currentUser)
  }
}
