import express from 'express';
import React from 'react';
import Router from 'react-router';
import routes from '../shared/routes';

const app = express();

// Set up Jade templating
app.set('views', './views');
app.set('view engine', 'jade');

app.get('/*', function(req, res) {
  Router.run(routes, req.url, Handler => {
    let content = React.renderToString(<Handler />);
    res.render('index', { content: content });
  });
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Debt busting awaits at http://%s:%s', host, port);
});

export default server;
