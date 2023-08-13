# Open Music Api App

This Porgam is a submission for Dicoding course 'Learn the Basics of Back-End Applications'.  
Source code for consumer message broker program (RabbitMQ): [openmusic-app-queue-consumer](https://github.com/HadiRoyan/openmusic-app-queue-consumer)

## Installation
1. Download or clone project form this repository
2. Set up database (PostgreSQL), message broker (RabbitMQ), Redis
3. Create an .env file and fill in the following values
    ```text
    # server configuration
    HOST=localhost
    PORT=5000

    # node-postgres configuration
    PGUSER=<your postgresql username>
    PGHOST=<your postgresql host>
    PGPASSWORD=<your postgresql password>
    PGDATABASE= <your postgresql database>
    PGPORT=<your postgresql port>

    #JWT
    ACCESS_TOKEN_KEY=<your JWT access token>
    REFRESH_TOKEN_KEY=<your JWT refresh token>
    ACCESS_TOKEN_AGE=<your JWT token age>

    # Message broker
    RABBITMQ_SERVER=amqp://localhost

    # Redis
    REDIS_SERVER=127.0.0.1
    ```
4. Open terminal and run `npm install`
5. Run the program:
    - local/development: `npm run start-dev`
    - production:  `npm run start-prod`