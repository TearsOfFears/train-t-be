import { Injectable } from '@nestjs/common'
import { TrainService } from '../services/train.service'
import { TrainResponse } from '../responses/train.response'

@Injectable()
export class GetTrainByIdUseCase {
  constructor(private readonly trainService: TrainService) {}

  async execute(id: string) {
    const train = await this.trainService.checkExistByTrainId(id)

    return TrainResponse.fromDomain(train)
  }
}
