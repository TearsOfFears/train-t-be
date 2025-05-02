import { ApiProperty } from '@nestjs/swagger'
import { IsNumber } from 'class-validator'

export class PaginationResponse {
  @ApiProperty({
    example: 3,
  })
  @IsNumber()
  totalItems!: number

  @ApiProperty({
    example: 100,
  })
  @IsNumber()
  totalPages!: number
}
