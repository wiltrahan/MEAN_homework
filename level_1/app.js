var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
  res.end();
});
app.get('/name', function(req, res) {
  res.send("Hi, I'm Wil Trahan!");
  res.end();
});

app.get('/moved', function(req, res) {
  res.redirect(301, '/surprise');
  res.send('SURPRISE!');
  res.end();
});

app.listen(3000, function(req, res){
  console.log("ready on port 3000");
});
