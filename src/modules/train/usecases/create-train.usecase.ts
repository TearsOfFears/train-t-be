import { BadRequestException, Injectable } from '@nestjs/common'
import { CreateTrainDto } from '../dto/create-train.dto'
import { TrainRepository } from '../repositories/interfaces/train.repository'
import { TrainResponse } from '../responses/train.response'
import { IUser } from '../../common/types/user'

@Injectable()
export class CreateTrainUseCase {
  constructor(private readonly trainRepository: TrainRepository) {}

  async execute(user: IUser, createTrainDto: CreateTrainDto) {
    const exist = await this.trainRepository.findByName(createTrainDto.name)
    if (exist)
      throw new BadRequestException(
        'Such a train with this name already exists',
      )
    const train = await this.trainRepository.create(createTrainDto, user.id)

    return TrainResponse.fromDomain(train)
  }
}
