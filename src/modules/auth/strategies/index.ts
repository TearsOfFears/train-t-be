import { Type } from '@nestjs/common'
import { JwtStrategy } from './jwt.strategy'
import { LocalStrategy } from './local.strategy'
import { Strategy } from 'passport-jwt'

export const strategies: Type<Strategy>[] = [JwtStrategy, LocalStrategy]
