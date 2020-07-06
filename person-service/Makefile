
run-service: build run

build:
	docker image build -t person-service .

run: 
	docker container run -d --rm -p 8081:80 person-service
