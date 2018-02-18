/* globals document */

import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { renderRoutes } from 'react-router-config';
import createBrowserHistory from 'history/createBrowserHistory';

import routes from './routes';
import reducers from './reducers';

const history = createBrowserHistory();

const middleware = routerMiddleware(history);

const rootEl = document.getElementById('app');

const store = createStore(reducers, applyMiddleware(middleware));

/*
configureStore takes 3 args, the root reducer, init store state, and additional middlewares
by default, configureStore comes with redux-logger middleware. Here we
registering our fetchMiddleware
*/

ReactDOM.hydrate(
  <Provider store={store}>
    <Router history={history}>{renderRoutes(routes)}</Router>
  </Provider>,
  rootEl,
);
