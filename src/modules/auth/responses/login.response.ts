import { Expose } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'
import { UserModel } from '../../user/models/user.model'

export class LoginResponse {
  @Expose()
  @ApiProperty({ description: 'Unique identifier of the user', type: String })
  id: string

  @Expose()
  @ApiProperty({ description: 'Name of the user', type: String })
  name: string

  @Expose()
  @ApiProperty({ description: 'Email of the user', type: String })
  email: string

  @Expose()
  @ApiProperty({ description: 'surname of the user', type: String })
  surname: string

  @Expose()
  @ApiProperty({ description: 'Authentication token (JWT)', type: String })
  token: string

  constructor(props: LoginResponse) {
    Object.assign(this, props)
  }

  static fromDomain(model: UserModel, token: string): LoginResponse {
    return new LoginResponse({
      id: model.id,
      name: model.name,
      email: model.email,
      surname: model.surname,
      token,
    })
  }
}
