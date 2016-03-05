var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var cheerio = require('cheerio');
var app = express();


app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.listen(app.get('port'), function() {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});

app.get('/scrape', function(req, res) {
    var color = req.param('name');
    res.send(color);
})