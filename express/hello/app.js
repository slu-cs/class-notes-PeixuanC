//hello world web server
const express = require('express');

//Create the server
const app = express

//Respond to one single request
app.get('/', function(request,response){
  response,send('Hello Handsome')
})


// start the server
app.listen(3000);
console.log('Server');
