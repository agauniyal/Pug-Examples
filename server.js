'use strict';

// require pug and http server
const pug = require('pug');
const http = require('http');

// create a new template for pug to parse
const pugTemplate = "h1= name";

// set locals
const locals = {
  name: "Abhinav Gauniyal"
}

// set compile Function for that template
var compileFn = pug.compile(pugTemplate);
// produce html output with compileFn on these locals
var html = compileFn(locals);


// create a new webserver and send template
http.createServer((request, response) => {
  response.end(html);
}).listen(process.env.PORT);