var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false});

var cities = {
  "Providence": "RI",
  "Boston": "MA",
  "Miami": "FL",
  "Denver": "CO",
  "Dallas": "TX"
};

router.route('/')
  .get(function(req, res) {
    if(req.query.limit >= 0) {
      res.json(cites.slice(0, req.query.limit))
    } else {
      res.json(Object.keys(cities));
    }
  })
  .post(parseUrlencoded, function(req, res) {
    var newCity = req.body;
    cities[newCity.city] = newCity.state;
    res.status(201).json(newCity.city);
  });

router.route('/:city')
  .all(function(req, res, next){
    var city = req.params.city;
    var cityReq = city[0].toUpperCase() + city.slice(1).toLowerCase();
    req.cityName = cityReq;
    next();
  })
  .get(function(req, res) {
    var state = cities[req.cityName];
    if(state) {
      res.json(state);
    } else {
      res.status(404).json("State not found for " + req.params.city);
    }
  })
  .delete(function(req, res) {
    delete cities[req.cityName];
    res.sendStatus(200);
  });


module.exports = router;
