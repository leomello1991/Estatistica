// import Youch from 'youch';
// import * as Sentry from '@sentry/node';
// import 'express-async-errors';
// import sentryConfig from './config/sentry';
require('./database');

require('dotenv/config');

const express = require('express');
const cors = require('cors');
const routes = require('./routes');

class App {
  constructor() {
    this.server = express();
    // Sentry.init(sentryConfig);

    this.middlewares();
    this.routes();
    // this.exceptionHandler();
  }

  middlewares() {
    // this.server.use(Sentry.Handlers.requestHandler());
    this.server.use(cors({ origin: false }));
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
    // this.server.use(Sentry.Handlers.errorHandler());
  }

  // exceptionHandler() {
  //   this.server.use(async (err, req, res, next) => {
  //     if (process.env.NODE_URL === 'development') {
  //       const errors = await new Youch(err, req).toJSON();
  //       return res.status(500).json(errors);
  //     }
  //     return res.status(500).json({ error: 'Internal server Error' });
  //   });
  // }
}

module.exports = App().server;
