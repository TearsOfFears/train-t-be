import { Module } from '@nestjs/common'
import { UserModule } from './modules/user/user.module'
import { TrainModule } from './modules/train/train.module'
import { AuthModule } from './modules/auth/auth.module'
import { CommonModule } from './modules/common/common.module'

@Module({
  imports: [CommonModule.forRoot(), UserModule, TrainModule, AuthModule],
})
export class AppModule {}
