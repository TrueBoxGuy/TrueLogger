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
    return moment().format(this.timestampFormat);
  }

  /**
   * info - Logs something in the info category.
   *
   * @param  {...string} input A spread of strings that you want to log.
   */
  info(...input) {
    log("I", "grey", this.getTimeStamp(), ...input);
  }

  /**
   * warn- Logs something in the warn category.
   *
   * @param  {...string} input A spread of strings that you want to log.
   */
  warn(...input) {
    log("W", "yellow", this.getTimeStamp(), ...input);
  }

  /**
   * error - Logs something in the error category.
   *
   * @param  {...string} input A spread of strings that you want to log.
   */
  error(...input) {
    log("E", "red", this.getTimeStamp(), ...input);
  }

  /**
   * debug - Logs something in the debug category.
   *
   * @param  {...string} input A spread of strings that you want to log.
   */
  debug(...input) {
    log("D", "blue", this.getTimeStamp(), ...input);
  }


  /**
   * custom - Sends a custom log message.
   *
   * @param  {string} category The category of this log message.
   * @param  {string} color    The color you want the category to show up as.
   * @param  {...string} input A spread of strings that you want to log.
   */
  custom(category, color, ...input) {
    log(category, color, this.getTimeStamp(), ...input);
  }

}

function log(category, color, timestamp, ...input) {
  console.log(chalk `{${color} [${category.toUpperCase()}]} {green ${timestamp}}: ${input.join(" ")}`);
}

module.exports = TrueLogger;
