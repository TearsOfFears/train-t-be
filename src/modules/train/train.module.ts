import { Module } from '@nestjs/common'

import { TypeOrmModule } from '@nestjs/typeorm'
import { useCases } from './usecases'
import { services } from './services'
import { TrainEntity } from './entities/train.entity'
import { repositories } from './repositories'
import { controllers } from './controllers'

@Module({
  imports: [TypeOrmModule.forFeature([TrainEntity])],
  controllers: [...controllers],
  providers: [...useCases, ...services, ...repositories],
})
export class TrainModule {}
