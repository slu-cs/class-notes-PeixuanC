// Hello world web server
const express = require('express');

// Create the server
const app = express();

// Respond to one request
//cs-Linuxlab-11.stlawu.edu:3000/
app.get('/', function(request, response) {
  response.send('Hello Handsome');
});

//cs-Linuxlab-11.stlawu.edu:3000/foo
app.get('/foo', function(request, response) {
  response.send('Hello Foo');
});

//cs-Linuxlab-11.stlawu.edu:3000/foo/bar
app.get('/foo/bar', function(request, response) {
  response.send('Hello bar');
});

//cs-Linuxlab-11.stlawu.edu:3000/zap/z(for any z)
app.get('/zap/:z', function(request, response) {
  response.send('Hello ${request.params.z}');
});

//cs-Linuxlab-11.stlawu.edu:3000/zap?x=X&y=Y
app.get('/zap/:z', function(request, response) {
  response.send('Hello zap with ${request.params.z}');
});

// cs-linuxlab-09.stlawu.edu:3000/zap?x=&y=
app.get('/zap', function(request, response) {
  response.send(`Hello zap with ${request.query.x} and ${request.query.y}`);
});

// Start the server
app.listen(3000);
console.log('Server is ready.');
