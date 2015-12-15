/**
 * Created by GGGin on 2015/12/9.
 */

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(urlencodedParser);

// parse application/json
var jsonParser = bodyParser.json();
//app.use(bodyParser.json())


var key = "c5760$%^1d6191202487a94d4()_2d1a";
var cry = require('./cryptor.js');
var fs = require('fs')

var xxx = JSON.parse(fs.readFileSync("./data.json","utf8"));


app.get('/loadjson', function(req, res) {
  xxx = JSON.parse(fs.readFileSync("./data.json","utf8"));
  res.setHeader('Content-Type', 'application/json');
  res.send("good");
});

app.get('/hello', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(cry.encryptAES(JSON.stringify(xxx), key)));
});

app.route('/test')
    .get(function(req, res) {
        console.log(req,res);
        res.send('Get a random book');
    })
    .post(function(req, res) {
        console.log(req.body);
        res.send('Add a book');
    });

app.use('/', express.static('public'));

app.listen(80);
