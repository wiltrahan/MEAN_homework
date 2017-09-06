var express = require("express");
var app = express();

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

app.get("/cities", function(req, res) {

  var citySize = Object.keys(cities).length;
  var citySlice = Object.entries(cities).slice(0).map(entry => entry[0]);

  if (req.query.limit > 0 && req.query.limit < citySize) {
    res.json(citySlice.slice(0, req.query.limit));
  } else if(req.query.limit > citySize) {
    res.status(404).json('There are only ' + citySize + ' cities in this list.');
  } else {
    res.json(cities);
  }
});

app.param('city', function(req, res, next) {
  var city = req.params.city;
  var cityReq = city[0].toUpperCase() + city.slice(1).toLowerCase();
  req.cityName = cityReq;
  next();
});

app.get("/cities/:city", function(req, res) {

  var state = cities[req.cityName];
  if(state) {
    res.json(state);
  } else {
    res.status(404).json("City Not Found");
  }



});

app.listen(3000, function(req, res) {
  console.log("ready on 3000");
});

