/**
 * Created by gggin on 16-2-5.
 */

var express = require('express');
var app = express();

var admin = require('./admin/user.js');
app.use("/admin", admin);

app.listen(17777);
