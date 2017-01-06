var express = require('express'),
	exphbs  = require('express-handlebars'),
	app = express(),
	path = require('path'),
	port = 3000;

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'index'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

// main route
app.get('/', function(req, res) {
  res.render('layouts/index');
});



module.exports = app;