import React from 'react';
import express from 'express';

let app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Serve static files from the 'public' folder
app.use(express.static('public'));

var HTML_CONTENT = '<html><body><section id="content">abc</section><script src="/js/bundle.js"></script></body></html>'
// GET /
app.get('/', function (req, res) {
  res.send(HTML_CONTENT);
  // res.render('layout', {
  //   // content: ReactDOMServer.renderToString(<HelloWorld />)
  //     content: "abc"
  // });
});

// Start server
let server = app.listen(1337, function () {
  let host = server.address().address;
  let port = server.address().port;

  if (host === '::') {
    host = 'localhost';
  }

  console.log('Example app listening at http://%s:%s', host, port);
});
