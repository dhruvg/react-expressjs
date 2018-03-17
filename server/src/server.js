import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import configureStore from '../../client/src/configure_store';
import App from '../../client/src/app';

const app = express();

app.use(express.static('public'));

app.get('/api', (req, res) => {
  res.send({ message: 'I am a server route.' });
});

app.get('/', (req, res) => {
  const store = configureStore();

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
    let assetUrlPrefix = '';
    if (process.env.NODE_ENV === 'development') {
      assetUrlPrefix = 'http://localhost:8080';
    }
    res.status(200).render('../views/index.ejs', {
      html,
      script: JSON.stringify(finalState),
      assetUrlPrefix,
    });
  }
});

export default app;
