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

var xxx = '\
{\
  "configs": [\
    {\
      "server": "www.flysun.us",\
      "server_port": "80",\
      "password": "showmethemoney",\
      "local_port": "10086",\
      "method": "aes-256-cfb",\
      "timeout": "600"\
    }\
  ],\
  "index": "0",\
  "server_history": "123|www.flysun.us"\
}\
';

app.get('/hello', function(req, res) {
    res.send(cry.encryptAES(xxx, key));
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
