#!/bin/bash

sudo apt update
sudo apt install docker.io git docker-compose make
git clone https://github.com/HatimAbdullah/alpha-project-one.git
docker-compose build
docker-compose up
