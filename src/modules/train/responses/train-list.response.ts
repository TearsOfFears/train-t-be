import { ApiProperty } from '@nestjs/swagger'
import { PaginationResponse } from '../../common/responses/pagination.response'
import { Type } from 'class-transformer'
import { TrainResponse } from './train.response'

export class TrainListResponse {
  @ApiProperty({
    type: () => [TrainResponse],
  })
  items: TrainResponse[]

  @ApiProperty({
    description: 'Meta data of pagination',
    type: () => PaginationResponse,
  })
  @Type(() => PaginationResponse)
  meta: PaginationResponse

  constructor(
    items: TrainResponse[] = [],
    meta: PaginationResponse = new PaginationResponse(),
  ) {
    this.items = items
    this.meta = meta
  }
}
