# PostgreSQL test setup for Docker

## Start containers

```bash
# Manually
docker-compose up -d

# Using make
make up
```

## Stop containers

```bash
# Manually
docker-compose down

# Using make
make down
```

## Other commands

```bash
# Stop containers and remove related volumes
make downwipe

# Configuration info
make info

# Connect to first PostgreSQL container
make shell

# Start PostgreSQL command line inside first container
make psql
```

## pgAdmin web interface

```bash
# pgAdmin
localhost:5050
```
