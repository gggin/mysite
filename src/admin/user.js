var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

var config = require('../config.js');
mongoose.connect(config.DB_PATH);

var UserSchema = new mongoose.Schema(
    {
        name: String,
        password: String,
        salt: String,
        mobile: String,
        registerTime: {type: Number, default: Date.now},
        email: String,
    }
);

// parse application/json
var jsonParser = bodyParser.json();
router.use(bodyParser.json());

var User = mongoose.model('User', UserSchema);

router.use(session({
    secret: config.ADMIN_SECRECT,
    store: new MongoStore({
        url:config.DB_PATH
    })
}));

var baucis = require('baucis');
baucis.rest('User');
router.use('/rest', baucis());

router.post("/login", function (req, res, next) {
    try {
        var u = req.body.username;
        var p = req.body.password;
        res.setHeader('Content-Type', 'application/json');
        req.session.login = true;
        res.send(JSON.stringify({success: true}));
    } catch(e) {
        res.send(403);
    }
});


function authorize(req, res, next) {
    console.log(req.session);
    if (req.session.login) {
        next();
    } else {
        res.sendStatus(403);
    }
}

router.use("/pick-info", authorize);

router.get("/pick-info", function(req, res) {
   res.setHeader('Content-Type', 'application/json');
   res.send(JSON.stringify({success: true}));
});

module.exports = router;

/*

 */