import { Injectable } from '@nestjs/common'
import { TrainService } from '../services/train.service'
import { TrainRepository } from '../repositories/interfaces/train.repository'
import { TrainResponse } from '../responses/train.response'
import { UpdateTrainStatusDto } from '../dto/update-train-status.dto'
import { IUser } from '../../common/types/user'

@Injectable()
export class UpdateTrainStatusUseCase {
  constructor(
    private readonly trainRepository: TrainRepository,
    private readonly trainService: TrainService,
  ) {}

  async execute(
    user: IUser,
    id: string,
    updateTrainStatusDto: UpdateTrainStatusDto,
  ) {
    const train = await this.trainService.checkExistByTrainId(id)
    this.trainService.checkOwner(train, user.id)
    const updated = await this.trainRepository.save({
      id,
      ...updateTrainStatusDto,
    })

    return TrainResponse.fromDomain(updated)
  }
}
