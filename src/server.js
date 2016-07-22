/**
 * Created by gggin on 16-2-5.
 */

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

var config = require('./config');
mongoose.connect(config.DB_PATH);

// parse application/json
var jsonParser = bodyParser.json();
router.use(bodyParser.json());

var User = mongoose.model('User', schemas.UserSchema);

app.use(session({
    secret: config.ADMIN_SECRECT,
    store: new MongoStore({
        url: config.DB_PATH
    })
}));

var admin = require('./admin/user.js');
app.use("/admin", admin);

app.listen(17777);
