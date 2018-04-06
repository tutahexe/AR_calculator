
var express = require('express');
var app = express();
var request = require('request');
var bodyParser = require ('body-parser');
var ar1_buyPrice;

app.set("view engine", "pug");
app.use(bodyParser.json());

app.get('/', function (req, res) {
  const items = [
    49424,
    49430,
    49431,
    49432
  ];

  const api = 'https://api.guildwars2.com/v2/commerce/prices/';

  Promise.all(
    items.map(item =>
      new Promise(resolve => 
        request({ url: api + item, json: true }, (err, resp, body) =>
          resolve({
            id: item,
            buy: body.buys.unit_price,
            sell: body.sells.unit_price
          })
        )
      )
    )
  ).then(respGroup => {
    /**
     * respGroup ~= [
     *  { id: 49424, buy: 1231, sell: 23 },
     *  { id: 49430, buy: 122, sell: 233 },
     *  { id: 49431, buy: 125, sell: 123 },
     *  { id: 49432, buy: 121, sell: 323 },
     * ]
     */
    res.render('index', { items: respGroup });
  });
});


// app.get('/', function (req, res) {
//     request({
//       url: 'https://api.guildwars2.com/v2/commerce/prices/49424',
//       json: true
//       }, function (error, response, body){
//         var ar1_buyPrice = body.buys.unit_price;
//         var ar1_sellPrice = body.sells.unit_price;
//     })
//     res.render ("index", {message1:ar1_buyPrice});  
// });

app.listen(3000, function () {
  console.log('App is running');
});

// var ar7_buyPrice = body.buys.unit_price;
// var ar7_sellPrice = body.sells.unit_price;
// var ar8_buyPrice = body.buys.unit_price;
// var ar8_sellPrice = body.sells.unit_price;
// var ar9_buyPrice = body.buys.unit_price;
// var ar9_sellPrice = body.sells.unit_price;