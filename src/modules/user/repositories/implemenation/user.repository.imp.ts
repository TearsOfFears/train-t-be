// src/user/repositories/user.repository.impl.ts
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UserRepository } from '../interfaces/user.repository'
import { UserEntity } from '../../entities/user.entity'
import { UserModel } from '../../models/user.model'

@Injectable()
export class UserRepositoryImpl implements UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  async findByEmail(email: string): Promise<UserModel | null> {
    const user = await this.repository.findOne({
      where: { email },
    })
    if (user) {
      return UserModel.from(user)
    }
    return null
  }

  async save(userSave: Partial<UserEntity>): Promise<UserModel | null> {
    const user = await this.repository.save(userSave)
    if (user) {
      return UserModel.from(user)
    }
    return null
  }

  async findById(id: string): Promise<UserModel | null> {
    const user = await this.repository.findOne({
      where: { id },
    })
    if (user) {
      return UserModel.from(user)
    }
    return null
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete({ id })
  }
}
