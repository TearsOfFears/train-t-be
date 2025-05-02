import { UserRepository } from './interfaces/user.repository'
import { UserRepositoryImpl } from './implemenation/user.repository.imp'
import { Provider } from '@nestjs/common'

export const repositories: Provider[] = [
  {
    provide: UserRepository,
    useClass: UserRepositoryImpl,
  },
]
