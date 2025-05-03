## Getting Started

1. Create a `.env` file in the root directory with the following content:

    ```
    PORT=4400
    JWT_SECRET=superjwt
    JWT_EXPIRES_IN=1d

    POSTGRES_HOST=localhost
    POSTGRES_PORT=5436
    POSTGRES_USER=postgres
    POSTGRES_PASSWORD=test
    POSTGRES_DB=train
    ```

2. Start the project using Docker Compose:

    ```bash
    docker compose up
    ```
