import { Type } from '@nestjs/common'
import { GetMeUseCase } from './get-me.usecase'

export const useCases: Type<any>[] = [GetMeUseCase]
