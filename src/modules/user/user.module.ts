import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { UserEntity } from './entities/user.entity'
import { services } from './services'
import { controllers } from './controllers'
import { repositories } from './repositories'
import { useCases } from './usecases'

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [...controllers],
  providers: [...services, ...repositories, ...useCases],
  exports: [...services, ...repositories],
})
export class UserModule {}
