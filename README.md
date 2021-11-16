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
