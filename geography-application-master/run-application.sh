#!/usr/bin/env bash

docker network create geo-net

cd 01_DB
docker build -f Dockerfile.single -t geo-db .
docker run -d -it -p 27017:27017 --name=geography-db --network geo-net geo-db
docker start geography-db

cd ../02_Server/
docker build -f Dockerfile.single -t geo-srv .
docker run -d -it -p 4000:4000 --name=geography-server --network geo-net geo-srv
docker start geography-server

cd ../03_Client
docker build -t geo-ui .
docker run -d -it -p 3000:3000 --name=geography-frontend --network geo-net geo-ui
docker start geography-frontend
