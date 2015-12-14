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

app.get('/hello', function(req, res){
    res.send('hello world');
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

app.listen(3000);
