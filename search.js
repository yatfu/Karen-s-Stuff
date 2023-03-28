const fs = require('fs') // used to read raw json

let rawData = fs.readFileSync('tickets.json') // read the data before executing the next line of code
let parsedData = JSON.parse(rawData) // converts JSON to JS object

// at this point the data is an array of STRINGS
// depending on what other code you have, you may have to parse the strings as numbers

// SEARCHBYCODE: function that searches parsedData array by code, then returns the entire ticket
// input: code of ticket, output: ticket object
let searchByCode = (code) => {
  for (let i = 0; i < parsedData.length; i++) {
    if (parsedData[i].code === code) return parsedData[i]
  }
  console.error('Ticket not found :(')
  return null
} 

// WELCOME: u probably dont need this function, but it just returns 'Welcome NAME!'
// input: ticket object, output: string (name of ticket)
let welcome = (ticket) =>'Welcome ' + ticket.name + '!'



console.log(welcome(searchByCode('2')))