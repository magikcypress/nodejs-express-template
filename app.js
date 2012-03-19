var express = require('express');
var http = require('http');
var fs = require('fs');

var app = express.createServer();

app.configure('development', function() {
    app.use(express.logger());
    app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true,
    }));
});

app.configure('production', function() {
    app.use(express.logger());
    app.use(express.errorHandler());
});

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('view options', {layout: true});
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(__dirname + '/public')); 

app.get('/', function(req, res) {
    // throw new Error('My error!');
    //res.send('Hello world!');
    res.render('root');
});

app.get('/404', function(req, res){
      throw new NotFound;
});

app.get('/500', function(req, res){
      throw new Error('keyboard cat!');
});

function isEmpty(column) {
  return column !== "" && column !== undefined
}

app.listen(4000);
