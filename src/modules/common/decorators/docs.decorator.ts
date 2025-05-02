import {
  ApiInternalServerErrorResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger'
import {
  applyDecorators,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
  Type,
} from '@nestjs/common'
import { IdDTO } from '../dtos/id.dto'

export const ApiGetResponse = (
  description: string,
  type: Type<unknown> | Function | [Function] | string,
) => ApiResponse({ status: 200, description, type })

export const ApiCreateResponse = (description: string, type: () => void) =>
  ApiResponse({ status: 201, description, type })

export const ApiUpdateResponse = (description: string) =>
  ApiResponse({ status: 201, description, type: IdDTO })

export function ApiController(name: string) {
  return applyDecorators(ApiTags(name), Controller(name))
}

function ApiDoc(
  description: string,
  responseEntity: Type<unknown> | Function | [Function] | string,
  responseDescription: string,
) {
  return applyDecorators(
    ApiOperation({ summary: description }),
    ApiGetResponse(responseDescription, responseEntity),
    ApiInternalServerErrorResponse({
      // status: 500,
      description: 'Internal Server Error',
    }),
  )
}

export function ApiGet(
  path: string,
  description: string,
  responseEntity: Type<unknown> | Function | [Function] | string,
) {
  const responseDescription = `Successfully fetched page of ${responseEntity.constructor.name}`
  return applyDecorators(
    Get(path),
    ApiDoc(description, responseEntity, responseDescription),
  )
}

export function ApiPost(
  path: string,
  description: string,
  responseEntity: Type<unknown> | Function | [Function] | string,
) {
  const responseDescription = `Successfully create ${responseEntity.constructor.name}`
  return applyDecorators(
    Post(path),
    ApiDoc(description, responseEntity, responseDescription),
  )
}

export function ApiPut(
  path: string,
  description: string,
  responseEntity: Type<unknown> | Function | [Function] | string,
) {
  const responseDescription = `Successfully update ${responseEntity.constructor.name}`
  return applyDecorators(
    Put(path),
    ApiDoc(description, responseEntity, responseDescription),
  )
}

export function ApiPatch(
  path: string,
  description: string,
  responseEntity: Type<unknown> | Function | [Function] | string,
) {
  const responseDescription = `Successfully update ${responseEntity.constructor.name}`
  return applyDecorators(
    Patch(path),
    ApiDoc(description, responseEntity, responseDescription),
  )
}

export function ApiDelete(
  path: string,
  description: string,
  responseEntity: Type<unknown> | Function | [Function] | string,
) {
  const responseDescription = `Successfully delete ${responseEntity.constructor.name}`
  return applyDecorators(
    Delete(path),
    ApiDoc(description, responseEntity, responseDescription),
  )
}
