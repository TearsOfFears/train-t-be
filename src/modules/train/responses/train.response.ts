import { Expose } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'
import { TrainModel } from '../models/train.model'
import { TrainStatusEnum } from '../interfaces/train-status.enum'

export class TrainResponse {
  @Expose()
  @ApiProperty({ description: 'Unique identifier of the train', type: String })
  id: string

  @Expose()
  @ApiProperty({ description: 'Name of the train', type: String })
  name: string

  @Expose()
  @ApiProperty({
    description: 'City where the train departs from',
    type: String,
  })
  startCity: string

  @Expose()
  @ApiProperty({ description: 'City where the train arrives at', type: String })
  endCity: string

  @Expose()
  @ApiProperty({ description: 'Departure time of the train', type: String })
  departure: string

  @Expose()
  @ApiProperty({ description: 'Arrival time of the train', type: String })
  arrival: string

  @Expose()
  @ApiProperty({
    description: 'Number of available seats in the train',
    type: Number,
  })
  availableSeats: number

  @Expose()
  @ApiProperty({ description: 'Price of the train ticket', type: Number })
  price: number

  @Expose()
  @ApiProperty({ description: 'Owner id', type: 'string' })
  ownerId: string

  @Expose()
  @ApiProperty({ description: 'Train status', type: 'string' })
  status: TrainStatusEnum

  constructor(props: TrainResponse) {
    Object.assign(this, props)
  }

  static fromDomain(model: TrainModel): TrainResponse {
    return new TrainResponse({
      id: model.id,
      name: model.name,
      startCity: model.startCity,
      endCity: model.endCity,
      departure: model.departure,
      arrival: model.arrival,
      availableSeats: model.availableSeats,
      price: model.price,
      ownerId: model.ownerId,
      status: model.status,
    })
  }

  static fromDomainArray(models: TrainModel[]): TrainResponse[] {
    return models.map(TrainResponse.fromDomain)
  }
}
