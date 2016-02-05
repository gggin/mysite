var express = require('express');
var router = express.Router();

const session = require('express-session');
const MongoStore = require('connect-mongo/es5')(session);

var config = require('../config.js');

router.use(session({
    secret: config.ADMIN_SECRECT,
    store: new MongoStore({
        url:config.DB_PATH
    })
}));

router.get("/login", function (req, res, next) {
    console.log(req.session);
    res.send({abc: 123});
});

module.exports = router;

/*

 */