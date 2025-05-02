import { PaginationResponse } from '../responses/pagination.response'
import { SelectQueryBuilder } from 'typeorm'

export abstract class Paginator {
  static paginate(limit: number, page: number) {
    const skip = (page - 1) * limit
    const paginateObject = {
      take: limit,
      skip,
    }
    return {
      paginateObject,
      limit: limit,
      page: skip,
    }
  }

  static paginateQuery<T extends Object>(
    searchQuery: SelectQueryBuilder<T>,
    limitPage: number,
    pageIndex: number,
  ) {
    const { limit, page } = this.paginate(limitPage, pageIndex)
    searchQuery.take(limit).skip(page)
  }

  static metaBuilder(totalItems: number, limit: number): PaginationResponse {
    const totalPages = Math.ceil(totalItems / limit)
    const meta = {
      totalItems,
      totalPages,
    }
    return meta
  }
}
