import { Expose } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'
import { UserModel } from '../models/user.model'

export class UserResponse {
  @Expose()
  @ApiProperty({ description: 'Unique identifier of the user', type: String })
  id: string

  @Expose()
  @ApiProperty({ description: 'Name of the user', type: String })
  name: string

  @Expose()
  @ApiProperty({ description: 'Name of the surname', type: String })
  surname: string

  @Expose()
  @ApiProperty({ description: 'Name of the email', type: String })
  email: string

  constructor(props: UserResponse) {
    Object.assign(this, props)
  }

  static fromDomain(model: UserModel): UserResponse {
    return new UserResponse({
      id: model.id,
      name: model.name,
      email: model.email,
      surname: model.surname,
    })
  }
}
