const express = require('express');
var nunjucks = require('nunjucks')
const bodyParser = require('body-parser');
var path = require("path")

const app = express();

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());

const port = process.env.PORT || 8080;

nunjucks.configure('views', {
	autoescape: true,
	noCache: true,
	express: app
});
app.set('views', path.join("views"))
app.use(express.static('public'))
app.set('view engine', 'nunjucks');
app.set('view options', {
	layout: false
});


require('./routes')(app);

app.listen(port,"0.0.0.0", () => {
	console.log('We are live on ' + port);
});