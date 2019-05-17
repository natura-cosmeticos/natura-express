const { assert } = require('chai');
const NodeBase = require('../index');

describe('API', () => {
  it('verify App module contract', () => {
    const { App } = NodeBase;

    assert.typeOf(App.Command, 'function');
    assert.typeOf(App.baseEvents, 'object');
  });

  it('verify Express module contract', () => {
    const { Express } = NodeBase;

    assert.typeOf(Express.adapter, 'function');
    assert.typeOf(Express.appBuilder, 'function');
    assert.typeOf(Express.corsMiddleware, 'function');
    assert.typeOf(Express.Handler, 'function');
    assert.typeOf(Express.loggingMiddleware, 'function');
  });

  it('verify Tests module contract', () => {
    const { Tests } = NodeBase;

    assert.typeOf(Tests.helpers, 'object');
    assert.typeOf(Tests.mochaHelpers, 'object');
  });
});
