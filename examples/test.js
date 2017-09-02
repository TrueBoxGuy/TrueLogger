const TrueLogger = require('./classes/TrueLogger');

//Create a new instance with a moment format
const trueLogger = new TrueLogger('HH:mm:ss');

//different types of logs and spread operator
trueLogger.info('Spread', 'test');
trueLogger.warn('Spread', 'test');
trueLogger.error('hi', 'you noob');
trueLogger.debug('hi', 'you noob');

//Create a custom log message
trueLogger.custom('a', 'green', 'hi', 'you noob')
