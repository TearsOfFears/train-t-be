import { Type } from '@nestjs/common'
import { AuthService } from './auth.service'

export const services: Type<any>[] = [AuthService]
