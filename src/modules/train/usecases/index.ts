import { Type } from '@nestjs/common'
import { CreateTrainUseCase } from './create-train.usecase'
import { GetAllTrainsUseCase } from './get-all-trains.usecase'
import { GetTrainByIdUseCase } from './get-train-by-id.usecase'
import { RemoveTrainUseCase } from './remove-train.usecase'
import { UpdateTrainUseCase } from './update-train.usecase'
import { UpdateTrainStatusUseCase } from './update-train-status.usecase'

export const useCases: Type<any>[] = [
  CreateTrainUseCase,
  GetAllTrainsUseCase,
  GetTrainByIdUseCase,
  RemoveTrainUseCase,
  UpdateTrainUseCase,
  UpdateTrainStatusUseCase,
]
