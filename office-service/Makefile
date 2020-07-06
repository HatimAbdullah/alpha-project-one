run-service: build run


build:
	docker image build -t office-service .
run:
	docker container run -d --rm -p 8084:80 office-service
