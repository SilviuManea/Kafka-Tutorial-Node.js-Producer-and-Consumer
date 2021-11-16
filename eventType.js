import avro from 'avsc'; //used to serialize and deserialize out objects in order to send them throught the stream

//We define the event type with advanced data(enums and objects)
export default avro.Type.forSchema({

    type: 'record',
    fields: [
        {
            name: 'category',
            type: {type:'enum',symbols:['CAT','DOG']}
        },
        {
            name: 'noise',
            type: 'string'
        },
    ],
});

