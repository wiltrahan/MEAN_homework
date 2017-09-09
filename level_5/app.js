var express = require("express");
var app = express();

app.use(express.static("public"));

// var citiesRoute = app.route('/cities');
var cities = require('./routes/cities');
app.use('/cities', cities);

app.listen(3000, function(req, res) {
  console.log("ready on 3000");
});

