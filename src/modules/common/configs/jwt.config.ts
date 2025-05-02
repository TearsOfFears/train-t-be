import { ConfigModule, ConfigService } from '@nestjs/config'
import { JwtModuleOptions } from '@nestjs/jwt/dist/interfaces/jwt-module-options.interface'

const jwtConfigEnvs = (configService: ConfigService): JwtModuleOptions => ({
  secret: configService.get<string>('JWT_SECRET'),
  signOptions: { expiresIn: configService.get<string>('JWT_EXPIRES_IN') },
})

export const jwtConfig = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService): Promise<JwtModuleOptions> =>
    jwtConfigEnvs(configService),
}
