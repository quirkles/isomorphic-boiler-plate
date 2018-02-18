/* global process, require */
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from '../../app/routes';

const registerServerSideRenderMiddleware = app => {
  const bundleInfo =
    process.env.NODE_ENV === 'development'
      ? {
          bundle: { js: '/static/bundle.js' },
          vendor: { js: '/static/vendor.js' },
        }
      : require('../../../bundleInfo.json'); // eslint-disable-line import/no-unresolved

  app.use((req, res) => {
    let context = {};
    const html = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        {renderRoutes(routes)}
      </StaticRouter>,
    );
    res.write(`
      <!doctype html>
      <div id="app">${html}</div>
      <script type="text/javascript" src=${bundleInfo.vendor.js}></script>
      <script type="text/javascript" src=${bundleInfo.bundle.js}></script>
    `);
    res.end();
  });
  return app;
};

export default registerServerSideRenderMiddleware;
