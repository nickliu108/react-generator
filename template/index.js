var express = require('express');
var path = require('path');

var app = express();
var exphbs  = require('express-handlebars');

app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main'
}));

app.set('view engine', '.hbs');

app.get('/', function(req, res, next){
  res.render('index');
});

app.use(function(err, req, res, next){
  console.error(err)
  res.status(500).send(err)
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
