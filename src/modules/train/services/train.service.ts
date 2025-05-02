import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common'
import { TrainRepository } from '../repositories/interfaces/train.repository'
import { TrainModel } from '../models/train.model'

@Injectable()
export class TrainService {
  constructor(private readonly trainRepository: TrainRepository) {}

  async checkExistByTrainId(id: string) {
    const exist = await this.trainRepository.findById(id)
    if (!exist) throw new NotFoundException('Train not found')
    return exist
  }

  checkOwner(train: TrainModel, userId: string) {
    if (train.ownerId != userId)
      throw new UnauthorizedException('You dont have access to edit this train')
  }
}
