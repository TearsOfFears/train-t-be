import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm'
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface'

const typeOrmConfigEnvs = (
  configService: ConfigService,
): TypeOrmModuleOptions => {
  // if (withEntities) {
  //   return {
  //     host: configService.get<string>('POSTGRES_HOST'),
  //     port: configService.get<number>('POSTGRES_PORT_DB'),
  //     logging: ['error'],
  //     type: 'postgres',
  //     entities: ['dist/**/*.entity.{ts,js}', 'dist/**/*.view.{ts,js}'],
  //     subscribers: ['dist/**/*.subscriber.{ts,js}'],
  //     migrations: ['dist/migration/**/*.{ts,js}'],
  //     useUTC: true,
  //     database: configService.get<string>('POSTGRES_DB'),
  //     schema: 'public',
  //     username: configService.get<string>('POSTGRES_USER'),
  //     password: configService.get<string>('POSTGRES_PASSWORD'),
  //     ssl: getSSLConfig(configService.get<string>('SERVER_MODE')),
  //     synchronize: true,
  //   };
  // }
  return {
    host: configService.get<string>('POSTGRES_HOST'),
    port: configService.get<number>('POSTGRES_PORT'),
    type: 'postgres',
    logging: ['error', 'migration'],
    entities: ['dist/**/*.entity.{ts,js}', 'dist/**/*.view.{ts,js}'],
    subscribers: ['dist/**/*.subscriber.{ts,js}'],
    migrations: ['dist/migration/**/*.{ts,js}'],
    database: configService.get<string>('POSTGRES_DB'),
    username: configService.get<string>('POSTGRES_USER'),
    password: configService.get<string>('POSTGRES_PASSWORD'),
    schema: 'public',
    synchronize: true,
  }
}

export const typeOrmConfig = () => ({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (
    configService: ConfigService,
  ): Promise<TypeOrmModuleAsyncOptions> => typeOrmConfigEnvs(configService),
})
