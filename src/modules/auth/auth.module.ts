import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { UserModule } from '../user/user.module'
import { CommonModule } from '../common/common.module'
import { services } from './services'
import { strategies } from './strategies'
import { controllers } from './controllers'
import { useCases } from './usecases'

@Module({
  imports: [CommonModule, UserModule, PassportModule],
  controllers: [...controllers],
  providers: [...services, ...strategies, ...useCases],
})
export class AuthModule {}
