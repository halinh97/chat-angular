var express = require('express');
var app = express();
var path = require('path');
var http = require('http');
var passport = require('passport');
var bodyParser = require('body-parser');

require('./source/app_api/models/db');
require('./source/app_api/config/passport');

var server = http.createServer(app);
var io = require('socket.io')(server);

var routesApi = require('./source/app_api/routes/index');

app.use(passport.initialize());
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'source')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', routesApi);
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

io.on('connection', function(socket){
    console.log('ok');
    socket.on('sendMessage', function(message){
       io.sockets.emit('newMessage', message) ;
    });
});


server.listen(8000, function() {
    console.log('listening on localhost:8000');
});