var express = require('express');
var app = express();
var renderCnt = require('./controllers/renderCntr');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));


renderCnt(app);

app.listen(3000);
console.log("Start")
