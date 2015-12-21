#!/bin/bash
docker network create --driver bridge example1net || true
docker-compose up
