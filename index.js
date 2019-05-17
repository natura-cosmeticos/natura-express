const BaseCommand = require('./src/commands/base-command');
const baseEvents = require('./src/base-events');
const expressAdapter = require('./src/express/handler-to-function-adapter');
const expressAppBuilder = require('./src/express/app-builder');
const expressCorsMiddleware = require('./src/express/cors-middleware');
const ExpressHandler = require('./src/express/handler');
const expressLoggingMiddleware = require('./src/express/logging-middleware');
const mochaHelpers = require('./src/tests/mocha-helpers');
const testsHelpers = require('./src/tests/helpers');

module.exports = {
  App: {
    baseEvents,
    Command: BaseCommand,
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
    mochaHelpers,
  },
};
