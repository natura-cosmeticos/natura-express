const { assert } = require('chai');
const NodeBase = require('../index');

describe('API', () => {
  it('verify Express module contract', () => {
    const { Express } = NodeBase;

    assert.typeOf(Express.adapter, 'function');
    assert.typeOf(Express.appBuilder, 'function');
    assert.typeOf(Express.corsMiddleware, 'function');
    assert.typeOf(Express.Handler, 'function');
    assert.typeOf(Express.loggingMiddleware, 'function');
  });
});
