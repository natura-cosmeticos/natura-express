const expressAdapter = require('./src/express/handler-to-function-adapter');
const expressAppBuilder = require('./src/express/app-builder');
const expressCorsMiddleware = require('./src/express/cors-middleware');
const ExpressHandler = require('./src/express/handler');
const expressLoggingMiddleware = require('./src/express/logging-middleware');
const testsHelpers = require('./src/tests/helpers');

const baseEvents = {
  error: 'error',
  forbidden: 'forbidden',
  noContent: 'noContent',
  notFound: 'notFound',
  success: 'success',
  unauthorized: 'unauthorized',
  validationFailed: 'validationFailed',
};

module.exports = {
  App: {
    baseEvents,
  },
  Express: {
    adapter: expressAdapter,
    appBuilder: expressAppBuilder,
    corsMiddleware: expressCorsMiddleware,
    Handler: ExpressHandler,
    loggingMiddleware: expressLoggingMiddleware,
  },
  Tests: {
    helpers: testsHelpers,
  },
};
