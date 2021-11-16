console.log('producer...');

import Kafka from 'node-rdkafka';

//Create a stream to which we write our events to
const stream = Kafka.Producer.createWriteStream({
    //We define our broker and topic
    'metadata.broker.list' : 'localhost:9092' }, {} , {topic:'test'});

function queueMessage(){
    const success = stream.write(Buffer.from('hola'));
    if(success){
        console.log('message wrote successfully to stream')
    }else{
        console.log('something went wrong...');
    }
    
}

//Set interval to write messages or events to the stream(for example each 3 seconds)
setInterval(() =>{
    queueMessage();
},3000)