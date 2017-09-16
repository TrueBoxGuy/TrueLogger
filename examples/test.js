const TrueLogger = require('../classes/TrueLogger');

//Create a new instance with a moment format, see moment js.
const trueLogger = new TrueLogger('HH:mm:ss');

//different types of logs and spread operator
trueLogger.info('Spread', 'test');
trueLogger.warn('Spread', 'test');
trueLogger.error('a', 'b', 'c');
trueLogger.debug(...['a', 'b', 'c']);

//Create a custom log message
trueLogger.custom('a', 'green', 'custom', 'message');
