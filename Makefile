run-cluster: build run

build: 
	docker-compose build

run: 
	docker-compose up

kill: 
	docker-compose down

logs:
	docker-compose logs
