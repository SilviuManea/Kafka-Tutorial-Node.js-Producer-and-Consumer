# Kafka-Tutorial-Node.js-Producer-and-Consumer

Simple consumer producer node app using Kafka with Docker

A kafka producer/consumer proof of concept using node.

## Prerequisites

- `node`
- `docker`

## Running locally

- `npm install` - installs npm dependencies.
- `./scripts/start-kafka.sh` - starts kafka inside docker container.
- `./scripts/create-topic.sh` - creates kafka topic.
- `npm run start:producer` - starts producer.
- `npm run start:consumer` - starts consumer

## Issues

- `docker-compose up` - if you have issues building the docker container use it with sudo.(might need to install docker compose first)

## Scripts

- To create a Topic execute -

sudo docker exec -it kafka /opt/bitnami/kafka/bin/kafka-topics.sh \
 --create \
 --bootstrap-server localhost:9092 \
 --replication-factor 1 \
 --partitions 1 \
 --topic test

## Dependencies

- `npm i node-rdkafka --save` - necessary kafka dependency
- `npm i avsc --save` - necessary dependency if we put objects into the stream , not necessary if we put only plain text

## Source information and reference

https://github.com/kriscfoster/node-kafka-producer-consumer

and

https://www.youtube.com/watch?v=EiDLKECLcZw
