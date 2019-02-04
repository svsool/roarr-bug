const log = require('roarr').default;
const createSerializeErrorMiddleware = require('@roarr/middleware-serialize-error').default;

const childLog = log.child(createSerializeErrorMiddleware());

const error = new Error('foo');

log.debug({error}, 'bar');
childLog.debug({error}, 'bar');
