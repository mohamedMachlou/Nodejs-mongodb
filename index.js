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
    firstName: {type: String,uppercase: true, required: true},
    lastName:  {type: String,uppercase: true, required: true},
    salary: {
            type: Number,
            min: 5000,
            max: 9999999999999999999999999,
    },
    phoneNumber: {
                type: String, 
                required: function(){ return this.salary >= 10000},
                minlength: 8,
                maxlength: 15,
            },
    dateNaissance: {
                     type: Date, 
                     dafault: Date.now
                    },
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
async function createClient() {
        const client = new Client( {
                firstName: 'Mohamed',
                lastName: 'Mohamed',
                phoneNumber: '0653508858',
                salary: 297987,
                tags: ['Web Developer','Angular', 'Expressjs', 'fullstack', 'Nodejs'],
            })
        
            try {
                const result = await client.save()
                console.log(result)

            }
            catch(err){
                
                console.log("Create new client error : ", err.errors);
            }
}

createClient();


/////////////////////////////////////////////////////////////////////////////////
// Get all Clients

// Selectionner les clients 
// .select({firstName: 1, lastName: 1,phonrNumber:1, phoneNumber:1, salary:1, tags:1, _id:0})


///////////////// Find using query
///// .find({firstName: 'Zakaria'})

///// Les oprtateurs de comparaisons
// eq      equal
// ne      not equal 
// gt      greater than 
// gte     greater than or equal to
// lt      less than
// lte     less than or equal to 
// in    
// nin     not in

//// .and([{salary: { $gt: 99998 }}])


//////////////// Operateurs logiques (query)
// and
// or 
// .find()
// .and([{firstName: "Machlou"}, {lastName: "Mohamed"}])
// .or([{firstName: "Machlou"}, {lastName: "Mohamed"}])

// Expression regulieres
// commance par Mohamed
// .find({firstName: /^mohamed/i})

// terminer par par Mohamed
// .find({firstName: /mohamed$/i})

// contient une chaine de caractere
// .find({firstName: /.*A.*/i})

async function getClients(){
    pageNumber = 2;
    pageSize = 3;

    const clients = await Client
        .find({firstName: /.*A.*/i})
        .skip((pageNumber - 1)* pageSize)
        .limit(pageSize)
        console.log(clients);
        
    }

// getClients();


///////////////////////////// Update Client

async function updateClient(id){
    // let client = await Client.findById(id);
    // client.firstName = 'Karim',
    // client.lastName = 'Bazi',
    // salary = 40000,
    // client.save()
    //     .then((client) => console.log('client updated : ',client))
    //     .catch((err) => console.log(err))
    

    let client = await Client.findByIdAndUpdate({_id: id}, {
        $set: {
            firstName: 'Ayoub',
            lastName: 'Tazi',
        }
    },{new : true})
    console.log('client updated : ',client)
}

// updateClient('67f3a7baa3a86e1eb1f6b46d');





