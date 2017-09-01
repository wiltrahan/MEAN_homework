var express = require('express');
var app = express();

// app.get('/', function(req, res) {
//   res.sendFile(__dirname + '/public/index.html')
// });

app.use(express.static('public'));

app.get('/cities', function(req, res) {
  var cities = ['Providence', 'Boston', 'New York', 'Miami'];
  res.json(cities);
});

app.listen(3000, function(req, res) {
  console.log("ready on 3000");
});
