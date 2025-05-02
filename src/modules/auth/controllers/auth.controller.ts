import { Body, UseGuards } from '@nestjs/common'
import { ApiController, ApiPost } from '../../common/decorators/docs.decorator'
import { LocalAuthGuard } from '../../common/guards'
import { RegisterUserDto } from '../dto/register-user.dto'
import { LoginUseCase } from '../usecases/login.usecase'
import { User } from '../../common/decorators/current-user.decorator'
import { IUser } from '../../common/types/user'
import { RegisterUseCase } from '../usecases/register.usecase'
import { MessageResponseDto } from '../../common/dtos/message-response.dto'
import { LoginResponse } from '../responses/login.response'

@ApiController('auth')
export class AuthController {
  constructor(
    private readonly loginUseCase: LoginUseCase,
    private readonly registerUseCase: RegisterUseCase,
  ) {}

  @ApiPost('register', 'Register a new user', MessageResponseDto)
  async register(@Body() registerUserDto: RegisterUserDto) {
    return this.registerUseCase.execute(registerUserDto)
  }

  @ApiPost('login', 'Login user', LoginResponse)
  @UseGuards(LocalAuthGuard)
  async login(@User() user: IUser) {
    return this.loginUseCase.execute(user)
  }
}
