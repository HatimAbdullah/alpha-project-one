
run-service: build run

build:
	docker image -t department-service .
run:
	docker container run -d -rm -p 8083:80 department-service
