import { TrainEntity } from '../../entities/train.entity'
import { CreateTrainDto } from '../../dto/create-train.dto'
import { TrainModel } from '../../models/train.model'
import { DeepPartial } from 'typeorm'
import { List } from '../../interfaces/train-list.interfaces'
import { ListQuery } from '../../dto/list.query'

export abstract class TrainRepository {
  abstract create(trainDto: CreateTrainDto, userId: string): Promise<TrainModel>

  abstract save(train: DeepPartial<TrainEntity>): Promise<TrainModel>

  abstract findAll(query: ListQuery): Promise<List<TrainModel>>

  abstract findById(id: string): Promise<TrainModel | null>

  abstract findByName(name: string): Promise<TrainModel | null>

  abstract delete(id: string): Promise<void>
}
