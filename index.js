const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://medmachlou:feAWyX7CnDVGW1yZ@cluster0.nmuzflm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() =>  console.log('Mongo Database connected ...'))
    .catch((err) =>  console.error('db could not connect ...'))

/// Client Schema
const clientShema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phoneNumber: Number,
    dateNaissance: { type: Date, dafault: Date.now},
    tags: [String],
})

// Client Model

const Client = mongoose.model('Client', clientShema);

const client = new Client( {
    firstName: 'Machlou',
    lastName: 'Mohamed',
    phoneNumber: '0653508459',
    tags: ['Web Developer', 'fullstack', 'Nodejs'],
})

client.save();