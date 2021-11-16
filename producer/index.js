console.log('producer...');

import Kafka from 'node-rdkafka';
import eventType from '../eventType.js';

//Create a stream to which we write our events to
const stream = Kafka.Producer.createWriteStream({
    //We define our broker and topic
    'metadata.broker.list' : 'localhost:9092' }, {} , {topic:'test'});

function getRandomAnimal(){
    const categories = ['CAT','DOG']; //THIS values are the ones available on the eventType enum. The process will not work if we pass some other value that is nos declared there.
    return categories[Math.floor(Math.random() * categories.length)]; //returns a random index
}

function getRandomNoise(animal){
    if(animal === 'CAT'){
        const noises = ['purr','meow'];
        return noises[Math.floor(Math.random() * noises.length)]; //returns a random index
    }else if (animal === 'DOG'){
        const noises = ['woof','bark'] //THIS values are the ones available on the eventType enum. The process will not work if we pass some other value that is nos declared there.
        return noises[Math.floor(Math.random() * noises.length)]; //returns a random index
    }
 
}

//Writing objects to the stream
function queueMessage(){
        const category = getRandomAnimal();
        const noise = getRandomNoise(category);
        //We define the event(object in our case)
        const event = {category, noise};
        //We write the event to the buffer using eventType.toBuffer(event)
        const success = stream.write(eventType.toBuffer(event));
        if(success){
            console.log('message wrote successfully to stream')
        }else{
            console.log('something went wrong...');
        } 
}

/* //Use This one for plain text 
function queueMessage(){
    const success = stream.write(Buffer.from('hola'));
    if(success){
        console.log('message wrote successfully to stream')
    }else{
        console.log('something went wrong...');
    }
    
}
*/

//Set interval to write messages or events to the stream(for example each 3 seconds)
setInterval(() =>{
    queueMessage();
},3000)