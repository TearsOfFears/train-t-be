import { Type } from '@nestjs/common'
import { UserService } from './user.service'

export const services: Type<any>[] = [UserService]
