/* globals __dirname*/
import express from 'express';
import path from 'path';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import expressWinston from 'express-winston';
import logger from '../logger';

const registerCommonMiddleware = app => {
  app.use(compression());
  app.use(
    '/static',
    express.static(path.join(__dirname, '../../../dist'), { maxAge: '365d' }),
  );
  app.use(cookieParser());
  app.use(expressWinston.logger({ winstonInstance: logger }));
  return app;
};

export default registerCommonMiddleware;
