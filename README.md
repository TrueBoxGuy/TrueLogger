# TrueLogger
A lightweight logger with support for custom messages and timestamps.
## How to use
Firstly, you need to create a new instance of the logger with a **moment** timestamp format.
```javascript
const logger = new TrueLogger('HH:mm:ss');
```
To send a log message, use one of these methods:

| Category      | Tag           | Tag Color  |
| ------------- |:-------------:| ----------:|
| info          | [I]           | Grey       |
| warn          | [W]           | Yellow     |
| error         | [E]           | Red        |
| debug         | [D]           | Blue       |

The log methods also use the spread operator, so you can do:
```javascript
logger.info('Spread','operator');
```
## Packages this project uses.
I used **moment** and **chalk** for this project. The links are below.

[Moment](https://www.npmjs.com/package/moment)

[Chalk](https://www.npmjs.com/package/chalk)
