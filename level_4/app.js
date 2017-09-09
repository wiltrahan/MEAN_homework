var express = require("express");
var app = express();

var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false});

app.use(express.static("public"));


var cities = {
  "Providence": "Rhode Island",
  "Boston": "Massachusetts",
  "New York": "New York",
  "Miami": "Florida",
  "Los Angeles": "California",
  "Denver": "Colorado",
  "Dallas": "Texas"
};

app.param('city', function(req, res, next) {
  var city = req.params.city;
  var cityReq = city[0].toUpperCase() + city.slice(1).toLowerCase();
  req.cityName = cityReq;
  next();
});

app.post('/cities', parseUrlencoded, function(req, res) {
  var newCity = req.body;
  cities[newCity.city] = newCity.state;

  res.status(201).json(newCity.city);
});

app.delete('/cities/:city', function(req, res) {
  delete cities[req.cityName];
  res.sendStatus(200);
})

app.get("/cities", function(req, res) {
  if(req.query.limit >= 0) {
    res.json(cites.slice(0, req.query.limit))
  } else {
    res.json(Object.keys(cities));
  }
});

app.get("/cities/:city", function(req, res) {
  var state = cities[req.cityName];
  if(state) {
    res.json(state);
  } else {
    res.status(404).json("State not found for " + req.params.city);
  }
});

app.listen(3000, function(req, res) {
  console.log("ready on 3000");
});

