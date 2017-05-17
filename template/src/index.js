import express from 'express';
var path = require('path');
var app = express();
var exphbs  = require('express-handlebars');

app.use(express.static(path.join(__dirname, '/../dist/client')));
app.set('views', path.join(__dirname, '/views'));
app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, './views/layouts/')
}));

app.set('view engine', '.hbs');

app.get('/', function(req, res, next){
  res.locals = {};
  res.locals.footerScripts = `
    <script src="/vendor.js"></script>
    <script src="/bundle.js"></script>
  `;
  res.render('index');
});

app.use(function(err, req, res, next){
  console.error(err)
  res.status(500).send(err)
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
