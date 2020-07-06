run-service: build run 

build: 
	docker image build -t role-service .
run: 	
	docker container run -d --rm -p 8082:80 role-service	
