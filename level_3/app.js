var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/cities", function(req, res) {
  var cities = [
    "Providence",
    "Boston",
    "New York",
    "Miami",
    "Los Angeles",
    "Denver",
    "Dallas"
  ];
  if (req.query.limit > 0 && req.query.limit < cities.length) {
    res.json(cities.slice(0, req.query.limit));
  } else if(req.query.limit > cities.length) {
    console.log('on the right path');
  } else {
    res.json(cities);
  }
});

app.listen(3000, function(req, res) {
  console.log("ready on 3000");
});
