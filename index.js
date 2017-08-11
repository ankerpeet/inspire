//DEPENDENCIES
var express = require('express');
var bodyParser = require('body-parser');

//DATABASE
var dbConnect = require('./config/db/mlab-config');

//PORT NUMBER
var port = 3000;

//LISTENING
var server = express();
server.listen(port,()=>{
  console.log('Listening on port: ', port);
})

//FRONTEND
server.use(express.static(__dirname + '/public' ));

//CONNECT TO BODY-PARSER
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:true}));

//ROUTES
var todosRouter = require('./routes/todos');
server.use('/api/todos', todosRouter);