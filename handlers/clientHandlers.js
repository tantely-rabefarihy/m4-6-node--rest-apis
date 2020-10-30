const { v4: uuidv4 } = require('uuid');
const { clients } = require('../data/clients');



// retrieve all clients
const allClients = () => {
return clients ;
} ;

// retrieve a specific customer 
const clientId = (identification) => { 
    const clientSearched = clients.find(client => {
        if (client.id === identification) {
            return client } else { return ""}
    }) ;
    return clientSearched ;
    
} ;

console.log("this is the answer: ", clientId("59761c23b30d971669fb42ff"));

 



    
// add a new customer
const AddNewCustomer = (req, res) => {
const newCust = req.body; 
console.log("new customer :", newCust);
const {isActive, age, name, gender, company, email, phone, address} = newCust ;
newCust.id = uuidv4();

// check if customer already in database
const customerInDb = (customer) => {
    clients.filter(client => { 
       if (client.email.includes(customer.email)) 
       {return true}
    }) ;
}

    if (!customerInDb) {
clients.push(newCust);
res.status(201).json({status: 201 , message: "new customer"})
    } else {
res.status(400).json({status: 400 , message: "Customer already in the system"})
}

};

// deleting a customer 

const deleteCustomer = (req, res) => {

    const { id } = req.params ;
    const targetCustomer = clients.find(client => {client.id === id });
    if (!targetCustomer) {
        res.status(400).json({status:400, message: "customer doesn't exist"})
    } else {
        res.status(202).json({status:202, message: "customer deleted"})
    }

}


module.exports = {allClients , clientId, AddNewCustomer, deleteCustomer } ;