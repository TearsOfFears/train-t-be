import { IsNumber, IsOptional, Max, Min } from 'class-validator'
import { Type } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'

export class PaginationDto {
  @IsNumber()
  @IsOptional()
  @Min(1)
  @Type(() => Number)
  @ApiProperty({
    type: Number,
    required: false,
    example: '2',
    description: 'Page number',
  })
  index?: number = 1

  @IsNumber()
  @IsOptional()
  @Min(1)
  @Max(50)
  @Type(() => Number)
  @ApiProperty({
    type: Number,
    required: false,
    example: '2',
    description: 'Page Size',
  })
  size?: number = 20
}
