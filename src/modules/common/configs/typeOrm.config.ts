import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm'
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface'

function getSSLConfig(env: string) {
  const configs = {
    production: { rejectUnauthorized: true },
    local: false,
    deploy: { rejectUnauthorized: true },
  }
  if (!configs[env] === undefined) {
    throw new Error('Set network in your .env file')
  }

  return configs[env]
}

const typeOrmConfigEnvs = (
  configService: ConfigService,
): TypeOrmModuleOptions => {
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
    ssl: getSSLConfig(configService.get<string>('NODE_ENV')),
  }
}

export const typeOrmConfig = () => ({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (
    configService: ConfigService,
  ): Promise<TypeOrmModuleAsyncOptions> => typeOrmConfigEnvs(configService),
})
