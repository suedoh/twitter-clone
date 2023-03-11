# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.

## Running Services with Docker Compose

The projects Docker Compose file is configured for running the following services locally:

    - Postgres
    - Redis
    - Prisma
    - Hasura GraphQL Engine
    - PgAdmin

### Requirements
    - Docker
    - Docker Compose

### Usage

    1. Clone this repository
    2. Create a .env file based on .env.example
    3. Run docker-compose up -d to start the services in the background
    4. Verify that the services are running by visiting the following URLs:

    - PgAdmin: http://localhost:5050
    - Hasura Console: http://localhost:8080/console
    - Prisma Studio: http://localhost:5555
    - Redis: http://localhost:6379

### Postgres

The Postgres service provides a database for the other services to use. By default, it runs on port 5432.

To connect to the database, you can use any Postgres client, such as psql or PgAdmin.
Redis

The Redis service provides a cache for the other services to use. By default, it runs on port 6379.
Prisma

The Prisma service provides a migration tool and database client for your Postgres database. It also provides a web UI called Prisma Studio for exploring and editing your database.

To use Prisma, you need to configure your database connection in prisma/schema.prisma. Once you've done that, you can run the following commands to apply migrations and start Prisma Studio:
```
docker-compose run prisma migrate dev
docker-compose up -d prisma
```
Prisma Studio will be available at http://localhost:5555.

### PgAdmin

PgAdmin is a web-based database management tool for Postgres. It provides a web UI for exploring and editing your database.

To use PgAdmin, you need to configure the following environment variables in your .env file:

    - PGADMIN_DEFAULT_EMAIL: the email address for the initial admin user
    - PGADMIN_DEFAULT_PASSWORD: the password for the initial admin user

Once you've done that, you can run the following command to start the PgAdmin server:
```
docker-compose up -d pgadmin
```
PgAdmin will be available at http://localhost:5050.

### Hasura GraphQL Engine

The Hasura GraphQL Engine provides a GraphQL API for your database. It allows you to quickly create a GraphQL API without writing any server-side code.

To use Hasura, you need to configure your database connection in hasura/config.yaml. Once you've done that, you can run the following command to start the Hasura server:
Hasura Console will be available at http://localhost:8080/console.

### Redis

Redis is an in-memory data structure store used as a database, cache, and message broker. This Docker Compose file sets up a Redis service running on port 6379.

You can connect to Redis using a Redis client library or command-line tool. The Redis URL for this Docker Compose file is redis://localhost:6379.

Instructions to interact with Redis container:

1. Start the Docker Compose stack by running the following command in the project directory:
`docker-compose up -d`
2. Connect to the Redis container by running the following command:
`docker-compose exec redis redis-cli`
This will open a Redis command line interface where you can interact with Redis.
3. To test if Redis is working correctly, you can set a key-value pair using the set command:
`set mykey "Hello Redis"`
4. You can retrieve the value of the key using the get command:
`get mykey`
5. This should output Hello Redis.
You can exit the Redis command line interface by running the `exit` command.

### Teardown

To stop the services, run docker-compose down. This will stop and remove all containers and networks created by Docker Compose.
