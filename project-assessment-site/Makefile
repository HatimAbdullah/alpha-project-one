run-service: build run 

build: 
	docker image build -t project-assessment-site .
run: 	
	docker container run -d --rm -p 80:80 project-assessment-site	
