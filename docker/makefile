PGADMIN_PORT = $(shell cat .env | grep PGADMIN_PUBLIC_PORT | cut -d= -f2)
SERVER_FILE = $(shell cat .env | grep PGADMIN_SERVER_JSON_FILE)

up: info upcontainers

upcontainers:
	# Start containers
	@docker compose up -d

down:
	# Stop containers
	@docker compose down

downwipe:
	# Stop containers and delete volumes
	@docker compose down -v

shell:
	# Connect to first PostgreSQL container
	@docker compose exec db1 bash

psql:
	# Start PostgreSQL command line inside first container
	@docker compose exec db1 psql -h db1 -U postgres

info:
	@echo CONFIGURATION
	@echo "-> PGADMIN_PORT=$(PGADMIN_PORT)"
	@echo "-> $(SERVER_FILE)"
	@echo
