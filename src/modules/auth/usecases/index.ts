import { Type } from '@nestjs/common'
import { LoginUseCase } from './login.usecase'
import { RegisterUseCase } from './register.usecase'

export const useCases: Type<any>[] = [LoginUseCase, RegisterUseCase]
