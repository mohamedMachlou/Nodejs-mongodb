const mongoose = require('mongoose');

// Connection to mongo database On line 
// mongoose.connect('mongodb+srv://medmachlou:feAWyX7CnDVGW1yZ@cluster0.nmuzflm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
//     .then(() =>  console.log('Mongo Database connected ...'))
//     .catch((err) =>  console.error('db could not connect ...'))

// Connection to mongo database 
mongoose.connect('mongodb://127.0.0.1:27018/clientsDB')
    .then(() =>  console.log('Mongo Database connected ...'))
    .catch((err) =>  console.error('db could not connect ...'))

/// Client Schema
const clientShema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phoneNumber: String,
    dateNaissance: { type: Date, dafault: Date.now},
    tags: [String],
})

// Client Model
const Client = mongoose.model('Client', clientShema);

// Create new client
// async function createClient() {
//     const client = new Client( {
//         firstName: 'Machlou',
//         lastName: 'Mohamed',
//         phoneNumber: '0653508459',
//         tags: ['Web Developer', 'fullstack', 'Nodejs'],
//     })
    
//     const result = await client.save();

//     console.log(result);
// }
/////////////////////////////////////////////////////////////////////////////////
// Create new client
// function createClient() {
    //     const client = new Client( {
        //         firstName: 'Machlou',
        //         lastName: 'Mohamed',
        //         phoneNumber: '0653508459',
        //         tags: ['Web Developer', 'fullstack', 'Nodejs'],
        //     })
        
        //     client.save()
        //     .then((result) => console.log(result))
        //     .catch((err) => console.log(err));
// }
// createClient();

/////////////////////////////////////////////////////////////////////////////////

// Get all Clients
async function getClients(){
    const clients = await Client.find();
    console.log(clients);

}

getClients();





