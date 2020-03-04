// Hello world web server
const express = require('express');

// Create the server
const app = express();

//log request to the console\
app.use(function(request, response, next){
  console.log('----------------------',new Data().toLocaleTimeString());
  console.log(request.method, request.url);
  console.log('body =', request.body);
  next();//keep hadling this request
});

//home page
app.get('/', function(request, response){
  response.send(`
    <h1>Bakery</h1>
    <ul>
    <li><a href="/cakes">Cakes</a></li>
    <li><a href="/pies">Pies</a></li>
    </ul>
      `);

});

//Handle undefined routes
app.use(function(request, response,next){
  console.log('Replied with 404');
  response.status(404).end()
});

//handle other errors
app.use(function(error,request,response,next){
  console.log(error.stack);
  response.status(500).send(error.message)
})




// Start the server
app.listen(3000);
console.log('Server is ready.');
