const moment = require('moment'),
  chalk = require('chalk');

class TrueLogger {

  /**
   * constructor - Makes a new logger
   *
   * @param  {string} timestampFormat A moment timestamp format.
   */
  constructor(timestampFormat) {
    this.timestampFormat = timestampFormat;
  }


  /**
   * getTimeStamp - Gets the timestamp for this instance.
   *
   * @return {String}  The timestamp.
   */
  getTimeStamp() {
    return moment().format(this.timestampFormat)
  }

  /**
   * info - Logs something in the info category.
   *
   * @param  {...string} input A spread of strings that you want to log.
   */
  info(...input) {
    log("Info", this.getTimeStamp(), ...input);
  }

}

function log(category, timestamp, ...input) {
  console.log(chalk `{grey [${category.toUpperCase()}]} {green ${timestamp}}: ${input.join(" ")}`)
}

module.exports = TrueLogger;
