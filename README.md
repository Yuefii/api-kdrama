# API K-DRAMA


## Fitur Apps

- get all data.
- search data.

## Tech Stack

- **Express:** [docs](https://expressjs.com/)
- **Prisma ORM:** [docs](https://www.prisma.io/)
- **Docker:** [docs](https://www.docker.com/)

# Documentation Project

Api Documentation [here](/docs/public_api.md)

# Setup

## Setup Enviroment
```
DATABASE_URL="mysql://root:secret@localhost:3306/name-database?schema=public"
PORT=8080
API_KEY=*****************
BASE_URL=http://example.com
```

## Database Backup

Database backup on CSV file [here](/database/)


### Install dependencies

```bash
pnpm install
```

## Easy to Running with docker

running all docker compose
```bash
docker compose up -d
```
running docker for database
```bash
docker compose up -d mysql
```
```bash
docker compose up -d adminer
```

## Available scripts

### Run apps

```bash
npm run dev
```
```bash
npm run build
```
```bash
npm run start
```