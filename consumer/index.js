console.log('consumer...');

import Kafka from 'node-rdkafka';
import eventType from '../eventType.js';

//Create the consumer
const consumer = Kafka.KafkaConsumer({
    'group.id':'kafka',
    //We define our broker
    'metadata.broker.list' : 'localhost:9092' }, {});

//connect the consumer
consumer.connect();

//when consumer is ready
consumer.on('ready',()=>{
    console.log('consumer ready...')
    //subscribe to one topic(or more than one.)
    consumer.subscribe(['test']);
    //consume the events for that topic as they flow in
    consumer.consume();
}).on('data',(data) => {
    //any time any new data comes in this function is going to be called.
    console.log(`received message: ${eventType.fromBuffer(data.value)}`);
});