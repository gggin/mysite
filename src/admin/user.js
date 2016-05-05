var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

var config = require('../config.js');
mongoose.connect(config.DB_PATH);

// parse application/json
var jsonParser = bodyParser.json();
router.use(bodyParser.json());

var schemas = require('./userSchema');

var User = mongoose.model('User', schemas.UserSchema);

router.use(session({
    secret: config.ADMIN_SECRECT,
    store: new MongoStore({
        url: config.DB_PATH
    })
}));


router.get("/time", function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({time: Date.now()}))
});

router.post("/login", function (req, res, next) {
    try {
        var u = req.body.username;
        var p = req.body.password;

        User.findOne({name: u}, function (err, user) {
            if (err || !user) {
                res.sendStatus(403);
                return;
            }
            if (cryptor.SHA256(user.salt + p) === user.password) {
                req.session.login = true;
                req.session.username = u;
                res.send({success: true});
            } else {
                res.sendStatus(403);
            }
        });

    } catch (e) {
        res.send(403);
    }
});


function authorize(req, res, next) {
    if (req.session.login) {
        next();
    } else {
        res.sendStatus(403);
    }
}

function adminAuthorize(req, res, next) {
    if (req.session.login && (req.session.username === 'gggin' || req.session.username === 'ray')) {
        next();
    } else {
        res.sendStatus(403);
    }
}

var baucis = require('baucis');
baucis.rest('User');
router.use('/rest', adminAuthorize);
router.use('/rest', baucis());

router.use('/logout', authorize);
router.get('/logout', function (req, res) {
    req.session.login = false;
    res.send({result: 'success'});
});

var cryptor = require('../lib/cryptor');

router.use("/add-user", adminAuthorize);
router.post("/add-user", function (req, res) {
    try {
        var u = req.body.username;
        var p = req.body.password;
        var email = req.body.email;
        var mobile = req.body.mobile;
        var salt = Math.random().toString(36).substring(7);
        var user;
        if (mobile) {
            user = new User({name: u, salt: salt, password: cryptor.SHA256(salt + p), email: email, mobile: mobile})
        } else {
            user = new User({name: u, salt: salt, password: cryptor.SHA256(salt + p), email: email})
        }
        user.save(function (err) {
            if (err) {
                res.send(err);
            } else {
                res.send({result: 'success'});
            }
        });
    } catch (e) {
        res.sendStatus(403);
    }
});

router.use("/pick-info", authorize);
router.get("/pick-info", function (req, res) {
    res.send({success: true});
});

module.exports = router;

/*

 */