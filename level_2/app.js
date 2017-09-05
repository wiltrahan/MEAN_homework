var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/cities', function(req, res) {
  var cities = ['Providence', 'Boston', 'New York', 'Miami'];
  res.json(cities);
});

app.listen(3000, function(req, res) {
  console.log("ready on 3000");
});
