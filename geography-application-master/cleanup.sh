#!/usr/bin/env bash
set -e
docker stop $(docker ps -qa) \
    || docker rm -f $(docker ps -qa) \
    || docker rmi -f $(docker images -qa) \
    || docker network prune