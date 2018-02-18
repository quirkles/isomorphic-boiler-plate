import express from 'express';
import { pipe } from 'ramda';

import startApp from './startApp';
import registerCommonMiddleware from './middlewares/registerCommonMiddleware';
import registerServerSideRenderMiddleware from './middlewares/registerServerSideRenderMiddleware';

const app = express();

pipe(registerCommonMiddleware, registerServerSideRenderMiddleware, startApp)(
  app,
);
