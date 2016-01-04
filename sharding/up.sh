#!/bin/bash
docker network create --driver bridge example2net || true
docker-compose up
