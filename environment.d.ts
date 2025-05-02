declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: string
    JWT_EXPIRES_IN: string
    JWT_SECRET: string
    // Backend URL
    PORT: number
    // Postgres setup
    POSTGRES_HOST: string
    POSTGRES_PORT: number
    POSTGRES_USER: string
    POSTGRES_PASSWORD: string
    POSTGRES_DB: string
  }
}
