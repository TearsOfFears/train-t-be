import { Injectable } from '@nestjs/common'
import { TrainRepository } from '../repositories/interfaces/train.repository'
import { TrainListResponse } from '../responses'
import { ListQuery } from '../dto/list.query'
import { TrainResponse } from '../responses/train.response'
import { Paginator } from '../../common/utils/paginator'

@Injectable()
export class GetAllTrainsUseCase {
  constructor(private readonly trainRepository: TrainRepository) {}

  async execute(query: ListQuery) {
    const { items, totalItems } = await this.trainRepository.findAll(query)
    const meta = Paginator.metaBuilder(totalItems, query.size)
    return new TrainListResponse(TrainResponse.fromDomainArray(items), meta)
  }
}
