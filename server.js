'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { allClients, clientId, AddNewCustomer, deleteCustomer } = require('./handlers/clientHandlers');
const { getWord, getRandomWord, findLetter } = require("./handlers/hangmanHandlers");



express()
  .use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('tiny'))
  .use(express.static('public'))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))

  // endpoints

// access list of all clients
.get("/clients", (req,res) => {
  const data = allClients();

  res.status(200).json({status: 200, message : data})
})

// get a specific customer
.get("/clients/:id", (req,res) => {
const ID = req.params.id ;
const data = clientId(ID) ;
res.status(200).json({status: 200, client: data})
})
 
// create a new customer 
.post("/clients" , AddNewCustomer )

// delete customer
.delete("/clients/:id", deleteCustomer )


// hangman 
.get("/hangman/word/:id", getWord)

.get("/hangman/word", getRandomWord)

.get("/hangman/guess/:id/:letter", findLetter)




.listen(8000, () => console.log(`Listening on port 8000`));
