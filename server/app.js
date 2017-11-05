var express, mongo, path, server;

express = require('express');
server = express();
path = require('path');

//Imports
import cors from 'cors';
import bodyParser from 'body-parser';
import { serverPort } from '../etc/configs.json';
import * as db from './utils/utils';

server.use('/cssFiles', express["static"](__dirname + '/views/media/css'));
server.use('/imgFiles', express["static"](__dirname + '/views/media/img'));
server.use('/jsFiles', express["static"](__dirname + '/views/media/js'));

db.setUpConnection();

server.use( bodyParser.json() );
server.use(cors({ origin: '*' }));


server.get('/users', function(req, res){
  console.log('req: ' + req.url);
  db.listUsers().then(data => res.send(data));
});
server.get('/users/:login', function(req, res){
  console.log('req: ' + req.url);
  db.getUsersByLogin(req.params.login).then(data => res.send(data));
});


server.listen(serverPort, function() {
  console.log(`I'm working on port ${serverPort}`);
});


