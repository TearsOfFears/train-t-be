import { DynamicModule, Global, Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { TypeOrmModule } from '@nestjs/typeorm'
import { envValidationSchema } from '../../../env-validation-schema'
import { jwtConfig, typeOrmConfig } from './configs'

// import { EmailsModule } from '../emails/emails.module';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      validationSchema: envValidationSchema,
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync(typeOrmConfig()),
    JwtModule.registerAsync(jwtConfig),
  ],
  providers: [ConfigModule, ConfigService],
  exports: [JwtModule, ConfigModule, ConfigService],
})
export class CommonModule {
  static forRoot(): DynamicModule {
    return {
      module: CommonModule,
      global: true,
    }
  }
}
