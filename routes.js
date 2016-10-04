'use strict';

const locals = require('./dataStore.js');

// Default route
let index = function (request, response) {
  response.render('index', locals.index);
};

// Contact Page route
let contact = function (request, response) {
  response.render('contact', locals.contact);
};

// Another route without templating engine
let hello = function (request, response) {
  response.send('<h2>Hello World!</h2>');
};


// export all route methods
module.exports = {
  index,
  hello,
  contact
};