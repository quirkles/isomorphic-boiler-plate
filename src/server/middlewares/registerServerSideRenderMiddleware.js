/* global process, require */
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from '../../app/routes';

export function getBundleInfo() {
  return process.env.NODE_ENV === 'development'
    ? {
        bundle: { js: '/static/bundle.js' },
        vendor: { js: '/static/vendor.js' },
      }
    : require('../../../bundleInfo.json'); // eslint-disable-line import/no-unresolved
}

const bundleInfo = getBundleInfo();

export function renderApp(req, res) {
  let context = {};
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      {renderRoutes(routes)}
    </StaticRouter>,
  );
  const document = `<!doctype html><div id="app">${html}</div><script type="text/javascript" src=${bundleInfo.vendor.js}></script><script type="text/javascript" src=${bundleInfo.bundle.js}></script>`; //eslint-disable-line
  res.write(document);
  res.end();
}

const registerServerSideRenderMiddleware = app => {
  app.use(renderApp);
  return app;
};

export default registerServerSideRenderMiddleware;
