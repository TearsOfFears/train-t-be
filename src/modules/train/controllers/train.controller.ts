import { Body, Param, Query, UseGuards } from '@nestjs/common'
import { IdDTO } from '../../common/dtos/id.dto'
import { CreateTrainDto } from '../dto/create-train.dto'
import {
  ApiController,
  ApiDelete,
  ApiGet,
  ApiPatch,
  ApiPost,
  ApiPut,
} from '../../common/decorators/docs.decorator'
import { CreateTrainUseCase } from '../usecases/create-train.usecase'
import { GetAllTrainsUseCase } from '../usecases/get-all-trains.usecase'
import { GetTrainByIdUseCase } from '../usecases/get-train-by-id.usecase'
import { RemoveTrainUseCase } from '../usecases/remove-train.usecase'
import { UpdateTrainUseCase } from '../usecases/update-train.usecase'
import { JwtAuthGuard } from '../../common/guards'
import { TrainResponse } from '../responses/train.response'
import { UpdateTrainDto } from '../dto/update-train.dto'
import { UpdateTrainStatusUseCase } from '../usecases/update-train-status.usecase'
import { ListQuery } from '../dto/list.query'
import { TrainListResponse } from '../responses'
import { User } from '../../common/decorators/current-user.decorator'
import { IUser } from '../../common/types/user'
import { MessageResponseDto } from '../../common/dtos/message-response.dto'
import { UpdateTrainStatusDto } from '../dto/update-train-status.dto'

@ApiController('train')
export class TrainController {
  constructor(
    private readonly createTrainUseCase: CreateTrainUseCase,
    private readonly getAllTrainsUseCase: GetAllTrainsUseCase,
    private readonly getTrainByIdUseCase: GetTrainByIdUseCase,
    private readonly removeTrainUseCase: RemoveTrainUseCase,
    private readonly updateTrainUseCase: UpdateTrainUseCase,
    private readonly updateTrainStatusUseCase: UpdateTrainStatusUseCase,
  ) {}

  @ApiPost('', 'Create train', TrainResponse)
  @UseGuards(JwtAuthGuard)
  create(@User() user: IUser, @Body() createTrainDto: CreateTrainDto) {
    return this.createTrainUseCase.execute(user, createTrainDto)
  }

  @ApiGet('list', 'List trains by id', TrainListResponse)
  findAll(@Query() query: ListQuery) {
    return this.getAllTrainsUseCase.execute(query)
  }

  @ApiGet(':id', 'Get train by id', TrainResponse)
  findOne(@Param() params: IdDTO) {
    return this.getTrainByIdUseCase.execute(params.id)
  }

  @ApiDelete(':id', 'Delete train by id', MessageResponseDto)
  @UseGuards(JwtAuthGuard)
  remove(@User() user: IUser, @Param() params: IdDTO) {
    return this.removeTrainUseCase.execute(user, params.id)
  }

  @ApiPut(':id', 'Update train by id', TrainResponse)
  @UseGuards(JwtAuthGuard)
  update(
    @User() user: IUser,
    @Body() updateTrainDto: UpdateTrainDto,
    @Param() params: IdDTO,
  ) {
    return this.updateTrainUseCase.execute(user, params.id, updateTrainDto)
  }

  @ApiPatch(':id/status', 'Update train status', TrainResponse)
  @UseGuards(JwtAuthGuard)
  updateStatus(
    @User() user: IUser,
    @Body() updateTrainStatusDto: UpdateTrainStatusDto,
    @Param() params: IdDTO,
  ) {
    return this.updateTrainStatusUseCase.execute(
      user,
      params.id,
      updateTrainStatusDto,
    )
  }
}
