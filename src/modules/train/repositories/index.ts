import { TrainRepository } from './interfaces/train.repository'
import { TrainRepositoryImpl } from './implemenations/train.repository.imp'
import { Provider } from '@nestjs/common'

export const repositories: Provider[] = [
  {
    provide: TrainRepository,
    useClass: TrainRepositoryImpl,
  },
]
