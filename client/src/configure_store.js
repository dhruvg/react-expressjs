/* eslint import/no-extraneous-dependencies: 0, global-require: 0 */

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index';

export default function configureStore(preloadedState) {
  const middlewares = [
    thunkMiddleware,
  ];
  if (process.env.NODE_ENV === 'development') {
    const { logger } = require('redux-logger');
    middlewares.push(logger);
  }
  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(...middlewares),
    ),
  );
}
