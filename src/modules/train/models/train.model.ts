import { TrainStatusEnum } from '../interfaces/train-status.enum'

export interface TrainModelProps {
  id: string
  name: string
  startCity: string
  endCity: string
  departure: string
  arrival: string
  availableSeats: number
  price: number
  ownerId: string
  status: TrainStatusEnum
}

export class TrainModel implements TrainModelProps {
  id: string
  name: string
  startCity: string
  endCity: string
  departure: string
  arrival: string
  availableSeats: number
  price: number
  ownerId: string
  status: TrainStatusEnum

  private constructor(props: TrainModelProps) {
    Object.assign(this, props)
  }

  static from(props: TrainModelProps): TrainModel {
    return new TrainModel(props)
  }

  toPlain() {
    return { ...this }
  }
}
