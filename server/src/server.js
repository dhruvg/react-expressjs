import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import reducers from '../../client/src/reducers/index';
import App from '../../client/src/app';

const app = express();

app.use(express.static('public'));

app.get('/api', (req, res) => {
  res.send({ message: 'I am a server route.' });
});

app.get('*', (req, res) => {
  const store = createStore(reducers);

  const context = {};

  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter
        location={req.originalUrl}
        context={context}
      >
        <App />
      </StaticRouter>
    </Provider>,
  );

  const finalState = store.getState();

  if (context.url) {
    res.writeHead(301, {
      Location: context.url,
    });
    res.end();
  } else {

    // Hack
    let templatePath;
    if (process.env.NODE_ENV === 'development') {
      templatePath = '../server/views/index.ejs';
    } else {
      templatePath = '../views/index.ejs';
    }

    res.status(200).render(templatePath, {
      html,
      script: JSON.stringify(finalState),
    });
  }
});

export default app;
