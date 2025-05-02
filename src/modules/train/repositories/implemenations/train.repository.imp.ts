import { TrainEntity } from '../../entities/train.entity'
import { CreateTrainDto } from '../../dto/create-train.dto'
import { TrainRepository } from '../interfaces/train.repository'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Injectable } from '@nestjs/common'
import { TrainSummaryMapper } from '../../mappers/train.mapper'
import { TrainModel } from '../../models/train.model'
import { ListQuery } from '../../dto/list.query'
import { List } from '../../interfaces/train-list.interfaces'
import { Paginator } from '../../../common/utils/paginator'

@Injectable()
export class TrainRepositoryImpl implements TrainRepository {
  constructor(
    @InjectRepository(TrainEntity)
    private readonly repository: Repository<TrainEntity>,
  ) {}

  async findByName(name: string): Promise<TrainModel | null> {
    const train = await this.repository.findOne({ where: { name } })
    if (train) {
      return TrainSummaryMapper.toModel(train)
    }
    return null
  }

  async create(trainDto: CreateTrainDto, userId: string): Promise<TrainModel> {
    const train = await this.repository.save({
      ...trainDto,
      owner: { id: userId },
    })
    return TrainSummaryMapper.toModel(train)
  }

  async save(train: TrainEntity): Promise<TrainModel> {
    const trainSaved = await this.repository.save(train)
    return TrainSummaryMapper.toModel(trainSaved)
  }

  async findAll(query: ListQuery): Promise<List<TrainModel>> {
    const searchQuery = await this.repository.createQueryBuilder('train')

    Paginator.paginateQuery(searchQuery, query.size, query.index)

    if (query?.query) {
      searchQuery.andWhere('train.name ILIKE :searchQuery', {
        searchQuery: `%${query?.query}%`,
      })
    }

    if (query?.sortBy && query?.sortingOrder) {
      searchQuery.orderBy(`train.${query?.sortBy}`, query.sortingOrder)
    }

    const [totalItems, items] = await Promise.all([
      searchQuery.getCount(),
      searchQuery.getMany(),
    ])

    return {
      items: TrainSummaryMapper.toModels(items),
      totalItems,
    }
  }

  async findById(id: string): Promise<TrainModel | null> {
    const item = await this.repository.findOne({ where: { id } })

    return TrainSummaryMapper.toModel(item)
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id)
  }
}
