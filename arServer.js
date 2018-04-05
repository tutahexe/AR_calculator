
var express = require('express');
var app = express();
var request = require('request');
var bodyParser = require ('body-parser');

app.set("view engine", "pug");

app.use(bodyParser.json());

app.get('/', function (req, res) {
    // request({
    //   url: 'https://api.guildwars2.com/v2/commerce/prices/49424',
    //   json: true
    //   }, function (error, response, body){
    //     var r = body.id;
    //     res.json(r);     
    // })
res.render ("index");
  });

app.listen(3000, function () {
  console.log('App is running');
});

