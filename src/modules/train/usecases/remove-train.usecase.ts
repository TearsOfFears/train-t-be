import { Injectable } from '@nestjs/common'
import { TrainService } from '../services/train.service'
import { TrainRepository } from '../repositories/interfaces/train.repository'
import { MessageResponseDto } from '../../common/dtos/message-response.dto'
import { IUser } from '../../common/types/user'

@Injectable()
export class RemoveTrainUseCase {
  constructor(
    private readonly trainRepository: TrainRepository,
    private readonly trainService: TrainService,
  ) {}

  async execute(user: IUser, id: string): Promise<MessageResponseDto> {
    const train = await this.trainService.checkExistByTrainId(id)
    await this.trainRepository.delete(id)
    this.trainService.checkOwner(train, user.id)
    return {
      message: 'Train deleted successfully',
    }
  }
}
