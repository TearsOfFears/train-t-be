import { TrainStatusEnum } from '../interfaces/train-status.enum'
import { ApiProperty } from '@nestjs/swagger'
import { IsEnum } from 'class-validator'

export class UpdateTrainStatusDto {
  @ApiProperty({
    example: TrainStatusEnum.NOT_STARTED,
    description: 'Train status',
  })
  @IsEnum(TrainStatusEnum)
  status: TrainStatusEnum
}
