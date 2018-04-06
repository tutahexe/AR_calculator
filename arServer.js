
var express = require('express');
var app = express();
var request = require('request');
var bodyParser = require ('body-parser');
var ar1_buyPrice;

app.set("view engine", "pug");

app.use(bodyParser.json());

app.get('/', function (req, res) {
    request({
      url: 'https://api.guildwars2.com/v2/commerce/prices/49424',
      json: true
      }, function (error, response, body){
        var ar1_buyPrice = body.buys.unit_price;
        var ar1_sellPrice = body.sells.unit_price;
    })
    request({
      url: 'https://api.guildwars2.com/v2/commerce/prices/49430',
      json: true
      }, function (error, response, body){
        var ar7_buyPrice = body.buys.unit_price;
        var ar7_sellPrice = body.sells.unit_price;
      })
    request({
      url: 'https://api.guildwars2.com/v2/commerce/prices/49431',
      json: true
      }, function (error, response, body){
        var ar8_buyPrice = body.buys.unit_price;
        var ar8_sellPrice = body.sells.unit_price;
    })
    request({
      url: 'https://api.guildwars2.com/v2/commerce/prices/49432',
      json: true
      }, function (error, response, body){
        var ar9_buyPrice = body.buys.unit_price;
        var ar9_sellPrice = body.sells.unit_price;
    })
    res.render ("index", {message1:ar1_buyPrice});  
  });

app.listen(3000, function () {
  console.log('App is running');
});

// var ar7_buyPrice = body.buys.unit_price;
// var ar7_sellPrice = body.sells.unit_price;
// var ar8_buyPrice = body.buys.unit_price;
// var ar8_sellPrice = body.sells.unit_price;
// var ar9_buyPrice = body.buys.unit_price;
// var ar9_sellPrice = body.sells.unit_price;