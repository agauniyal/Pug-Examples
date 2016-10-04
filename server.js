'use strict';

// require packages
const express = require('express');
const pug = require('pug');


let locals = {
  title: "Let's learn Pug",
  heading: 'Welcome to Index page',
  webUrl: 'https://pugjs.org/api/getting-started.html',
  githubUrl: 'https://github.com/pugjs/pug'
};

// Let's create an app out of express
const app = express();

// Let's use pug
app.set('view engine', 'pug');

// some default routes - defined in routes.js
app.get('/', function(request, response){
  response.render('index', locals);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});