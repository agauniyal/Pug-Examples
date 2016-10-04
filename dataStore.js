'use strict';

// here are some locals to be sent to pug renderer
let locals = {
  navigation: [
    {
      pageName: 'Index',
      link: '/'
    },
    {
      pageName: 'Contact',
      link: 'contact'
    }
  ]
};

// Or you can add objects for particular views
locals.index = {
  heading: 'Welcome to Index page',
  webUrl: 'https://pugjs.org/api/getting-started.html',
  githubUrl: 'https://github.com/pugjs/pug',
  title: "Let's learn Pug",
  nav: locals.navigation
};

locals.contact = {
  heading: 'Welcome to Contact page',
  author: 'Abhinav Gauniyal',
  githubUrl: 'https://github.com/agauniyal',
  title: "Contact Me",
  nav: locals.navigation
};


// you can add properties later too
locals.contact.title = "Let's catch up";

// export locals object
module.exports = locals;