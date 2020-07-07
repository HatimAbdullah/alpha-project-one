run-cluster: build run

build: 
	docker-compose build

run: 
	docker-compose up -d

kill: 
	docker-compose down

logs:
	docker-compose logs
