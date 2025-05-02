import { UserEntity } from '../../entities/user.entity'
import { UserModel } from '../../models/user.model'

export abstract class UserRepository {
  abstract findByEmail(email: string): Promise<UserModel | null>

  abstract save(user: Partial<UserEntity>): Promise<UserModel>

  abstract findById(id: string): Promise<UserModel | null>

  abstract remove(id: string): Promise<void>
}
