'use strict';

// require packages
const express = require('express');
const pug = require('pug');

// require routes
const routes = require('./routes.js');

// Let's create an app out of express
const app = express();

// Let's use pug
app.set('view engine', 'pug');

// serve static files from 'public' directory
app.use(express.static('public'));

// some default routes - defined in routes.js
app.get('/', routes.index);
app.get('/hello', routes.hello);
app.get('/contact', routes.contact);

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});