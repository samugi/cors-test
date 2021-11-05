const express = require('express');
const app = express();

// No CORS Headder set
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/message.json');
});

// CORS header `Access-Control-Allow-Origin` set to accept all
app.get('/allow-cors', function(request, response) {
  response.set('Access-Control-Allow-Origin', '*');
  response.sendFile(__dirname + '/message.json');
});

// listen for requests :)
const listener = app.listen('8880', function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
