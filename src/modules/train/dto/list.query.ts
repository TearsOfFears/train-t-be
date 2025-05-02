import { PaginationDto } from '../../common/dtos/pagination.dto'
import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsEnum, IsOptional, IsString } from 'class-validator'
import { SortOrderEnum } from '../../common/types/sort-order.enum'

export class ListQuery extends PaginationDto {
  @ApiPropertyOptional({
    example: 'Some other site name',
    description: 'Part of site name ',
  })
  @IsOptional()
  @IsString()
  query?: string

  @ApiPropertyOptional({
    example: 'name',
    description: 'Field name for sorting',
  })
  @IsOptional()
  @IsString()
  sortBy?: TrainSortBy

  @ApiPropertyOptional({
    example: SortOrderEnum.ASC,
    description: 'Sorting order',
  })
  @IsOptional()
  @IsEnum(SortOrderEnum)
  sortingOrder?: SortOrderEnum
}

export enum TrainSortBy {
  name = 'name',
  availableSeats = 'availableSeats',
}
