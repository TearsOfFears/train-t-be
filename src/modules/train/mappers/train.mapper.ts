import { TrainEntity } from '../entities/train.entity'
import { TrainModel } from '../models/train.model'

type Entity = TrainEntity

export class TrainSummaryMapper {
  static toModel(entity: Entity): TrainModel {
    return TrainModel.from({
      id: entity.id,
      name: entity.name,
      startCity: entity.startCity,
      endCity: entity.endCity,
      departure: entity.departure,
      arrival: entity.arrival,
      availableSeats: entity.availableSeats,
      price: entity.price,
      ownerId: entity.ownerId,
      status: entity.status,
    })
  }

  static toModels(entities: Entity[]): TrainModel[] {
    return entities.map(this.toModel)
  }
}
