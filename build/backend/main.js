/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(child_process__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var command_line_args__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var command_line_args__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(command_line_args__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _libs_Utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _libs_Utils_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_libs_Utils_js__WEBPACK_IMPORTED_MODULE_5__);






const optionDefinitions = [{
  name: 'configPath',
  alias: 'c',
  type: String
}, {
  name: 'version',
  alias: 'v',
  type: Boolean
}, {
  name: 'start',
  alias: 's',
  type: Boolean
}, {
  name: 'from',
  alias: 'f',
  type: Number
}, {
  name: 'only',
  alias: 'o',
  type: Number
}, {
  name: 'list',
  alias: 'l',
  type: Boolean
}, {
  name: 'kill',
  alias: 'k',
  type: Number
}, {
  name: 'pause',
  alias: 'p',
  type: Number
}];
const argv = command_line_args__WEBPACK_IMPORTED_MODULE_4___default()(optionDefinitions);
const command = path__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(__dirname, 'start.js');
const cfg = argv.configPath ? argv.configPath : path__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(__dirname, '../../private/config.toml');
_libs_Utils_js__WEBPACK_IMPORTED_MODULE_5___default.a.readConfig({
  filePath: cfg
}).then(config => {
  const {
    packageInfo,
    homeFolder
  } = config;
  const systemHome = path__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(os__WEBPACK_IMPORTED_MODULE_0___default.a.homedir(), packageInfo.name);
  const PIDHome = path__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(systemHome, 'PIDs');
  return _libs_Utils_js__WEBPACK_IMPORTED_MODULE_5___default.a.initialFolder({
    homeFolder: systemHome
  }).then(() => _libs_Utils_js__WEBPACK_IMPORTED_MODULE_5___default.a.initialFolder({
    homeFolder: PIDHome
  })).then(() => config);
}).then(config => {
  const {
    packageInfo,
    homeFolder
  } = config;
  console.log(`\x1b[1m\x1b[32m${packageInfo.name.toUpperCase()}\x1b[0m\x1b[21m v${packageInfo.version}`);

  if (argv.version) {} else if (argv.list) {
    _libs_Utils_js__WEBPACK_IMPORTED_MODULE_5___default.a.listProcess();
  } else if (argv.kill > -1) {
    _libs_Utils_js__WEBPACK_IMPORTED_MODULE_5___default.a.killProcess({
      PID: argv.kill
    }).then(() => _libs_Utils_js__WEBPACK_IMPORTED_MODULE_5___default.a.listProcess());
  } else if (argv.pause > -1) {
    _libs_Utils_js__WEBPACK_IMPORTED_MODULE_5___default.a.killProcess({
      PID: argv.pause,
      pause: true
    }).then(() => _libs_Utils_js__WEBPACK_IMPORTED_MODULE_5___default.a.listProcess());
  } else if (!!argv.start) {
    const commandArgv = process.argv.slice(2);
    commandArgv.splice(commandArgv.indexOf('-s'), 1);
    _libs_Utils_js__WEBPACK_IMPORTED_MODULE_5___default.a.initialFolder(config).then(folder => {
      const outLog = path__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(folder, 'out.log');
      const out = fs__WEBPACK_IMPORTED_MODULE_1___default.a.openSync(outLog, 'a');
      const err = fs__WEBPACK_IMPORTED_MODULE_1___default.a.openSync(outLog, 'a');
      Object(child_process__WEBPACK_IMPORTED_MODULE_3__["spawn"])(command, commandArgv, {
        stdio: ['ignore', out, err],
        detached: true
      }).unref();
      setTimeout(() => {
        _libs_Utils_js__WEBPACK_IMPORTED_MODULE_5___default.a.listProcess({
          packageInfo
        });
      }, 1000);
    });
  } else if (!argv.start) {
    _libs_Utils_js__WEBPACK_IMPORTED_MODULE_5___default.a.initialAll(argv).then(options => _libs_Utils_js__WEBPACK_IMPORTED_MODULE_5___default.a.initialBots(options)).then(Bots => _libs_Utils_js__WEBPACK_IMPORTED_MODULE_5___default.a.startBots({
      Bots
    })).catch(e => {
      console.trace(e);
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(this, "src/backend"))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("command-line-args");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {const os = __webpack_require__(1);

const fs = __webpack_require__(2);

const path = __webpack_require__(3);

const url = __webpack_require__(7);

const level = __webpack_require__(8);

const mongodb = __webpack_require__(9).MongoClient;

const toml = __webpack_require__(10);

const i18n = __webpack_require__(11);

const dvalue = __webpack_require__(12);

const ecRequest = __webpack_require__(13);

class Utils {
  static waterfallPromise(jobs) {
    return jobs.reduce((prev, curr) => {
      return prev.then(() => curr());
    }, Promise.resolve());
  }

  static retryPromise(promise, args, maxTries, context, timeout) {
    context = context || null;
    return promise.apply(context, args).then(d => {
      return Promise.resolve(d);
    }, e => {
      if (maxTries <= 0) return Promise.reject(e);else {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            this.retryPromise(promise, args, maxTries - 1, context, timeout).then(resolve, reject);
          }, timeout || 0);
        });
      }
    });
  }

  static toHex(n) {
    return `0x${n.toString(16)}`;
  }

  static zeroFill(i, l) {
    let s = i.toString();

    if (l > s.length) {
      s = `${new Array(l - s.length).fill(0).join('')}${s}`;
    }

    return s;
  }

  static parseBoolean(bool) {
    return typeof bool == 'string' ? bool.toLowerCase() != 'false' : !!bool;
  }

  static parseTime(timestamp) {
    let result;
    const uptime = new Date().getTime() - timestamp;

    if (uptime > 86400 * 365 * 1000) {
      result = `${(uptime / (86400 * 365 * 1000)).toFixed(2)} Yrs`;
    } else if (uptime > 86400 * 30 * 1000) {
      result = `${(uptime / (86400 * 30 * 1000)).toFixed(2)} Mon`;
    } else if (uptime > 86400 * 1000) {
      result = `${(uptime / (86400 * 1000)).toFixed(2)} Day`;
    } else if (uptime > 3600 * 1000) {
      result = `${(uptime / (3600 * 1000)).toFixed(2)} Hrs`;
    } else if (uptime > 60 * 1000) {
      result = `${(uptime / (60 * 1000)).toFixed(2)} Min`;
    } else {
      result = `${(uptime / 1000).toFixed(2)} Sec`;
    }

    return result;
  }

  static toToml(data, notRoot) {
    let result;

    if (data instanceof Object || typeof data == 'object') {
      result = Object.keys(data).map(v => {
        if (data[v] instanceof Object || typeof data[v] == 'object') {
          return `[${v}]\r\n${this.toToml(data[v], true)}\r\n`;
        } else if (typeof data[v] == 'string') {
          return `${v} = "${data[v]}"${!notRoot ? '\r\n' : ''}`;
        } else {
          return `${v} = ${data[v]}${!notRoot ? '\r\n' : ''}`;
        }
      }).join('\r\n');
    } else {
      result = new String(data).toString();
    }

    return result;
  }

  static ETHRPC({
    protocol,
    port,
    hostname,
    path,
    data
  }) {
    const opt = {
      protocol,
      port,
      hostname,
      path,
      headers: {
        'content-type': 'application/json'
      },
      data
    };
    return ecRequest.post(opt).then(rs => {
      return Promise.resolve(JSON.parse(rs.data));
    });
  }

  static initialAll({
    version,
    configPath
  }) {
    const filePath = configPath ? configPath : path.resolve(__dirname, '../private/config.toml');
    return this.readConfig({
      filePath
    }).then(config => {
      const rsConfig = config;
      rsConfig.argv = arguments[0];
      return this.initialFolder(config).then(() => rsConfig);
    }).then(config => Promise.all([config, this.initialLevel(config), this.initialDB(config), this.initialLogger(config), this.initiali18n(config), this.initialProcess(config)])).then(rs => Promise.resolve({
      config: rs[0],
      database: {
        leveldb: rs[1],
        mongodb: rs[2]
      },
      logger: rs[3],
      i18n: rs[4]
    }));
  }

  static readFile({
    filePath
  }) {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }

  static fileExists({
    filePath
  }) {
    return new Promise(resolve => {
      fs.access(filePath, fs.constants.F_OK, err => {
        resolve(!err);
      });
    });
  }

  static readConfig({
    filePath
  }) {
    let config;
    return this.readPackageInfo().then(packageInfo => {
      const basePath = path.resolve(os.homedir(), packageInfo.name);
      return this.fileExists({
        filePath
      }).then(rs => this.readFile({
        filePath: rs ? filePath : path.resolve(__dirname, '../../../sample.config.toml')
      })).then(data => {
        config = toml.parse(data);
        config.packageInfo = packageInfo;
        config.runtime = {
          filePath,
          startTime: new Date().getTime()
        };
        config.homeFolder = config.base.folder ? path.resolve(basePath, config.base.folder) : basePath;
        return Promise.resolve(config);
      });
    });
  }

  static readPackageInfo() {
    const filePath = path.resolve(__dirname, '../../../package.json');
    return this.readFile({
      filePath
    }).then(data => {
      const pkg = JSON.parse(data);
      const packageInfo = {
        name: pkg.name,
        version: pkg.version,
        powerby: pkg.name + " v" + pkg.version
      };
      return Promise.resolve(packageInfo);
    });
  }

  static listProcess() {
    return this.readPackageInfo().then(packageInfo => {
      const PIDFolder = path.resolve(os.homedir(), packageInfo.name, 'PIDs');
      this.scanFolder({
        folder: PIDFolder
      }).then(list => {
        const jobs = list.map(v => parseInt(path.parse(v).name)).filter(v => v > -1).sort((a, b) => {
          return a > b ? 1 : -1;
        }).map((PID, i) => this.readProcess({
          PID,
          PIDFolder
        }));
        return Promise.all(jobs).then(d => {
          const bar = new Array(20).fill('-').join('');
          console.log(`${bar}\r\n${d.join('\r\n')}\r\n${bar}`);
        });
      });
    });
  }

  static readProcess({
    PID,
    PIDFolder
  }) {
    return this.readPackageInfo().then(packageInfo => {
      const PIDFolder = path.resolve(os.homedir(), packageInfo.name, 'PIDs');
      const PFile = path.resolve(PIDFolder, `${PID}.toml`);
      return Promise.resolve(PFile);
    }).then(PFile => new Promise((resolve, reject) => {
      fs.readFile(PFile, (e, d) => {
        if (e) {
          reject(e);
        } else {
          let status;
          let uptime = '';
          const pInfo = toml.parse(d);
          const cPath = pInfo.runtime.configPath;

          if (this.testProcess({
            PID
          })) {
            status = `\x1b[42m  on  \x1b[0m`;
            uptime = this.parseTime(pInfo.runtime.startTime);
          } else {
            status = `\x1b[41m off  \x1b[0m`;
            PID = `\x1b[90m${PID}\x1b[0m`;
            uptime = '\t';
          }

          resolve([PID, status, uptime, cPath].join('\t'));
        }
      });
    }));
  }

  static testProcess({
    PID
  }) {
    try {
      process.kill(PID, 0);
      return true;
    } catch (e) {
      return false;
    }
  }

  static killProcess({
    PID,
    pause
  }) {
    if (PID == 0) {
      return this.readPackageInfo().then(packageInfo => {
        const PIDFolder = path.resolve(os.homedir(), packageInfo.name, 'PIDs');
        return this.scanFolder({
          folder: PIDFolder
        });
      }).then(list => {
        const PIDs = list.map(PFile => path.parse(PFile).name);
        return Promise.all(PIDs.map(pid => this.killProcess({
          PID: pid,
          pause
        })));
      });
    }

    try {
      process.kill(PID);
    } catch (e) {}

    return this.readPackageInfo().then(packageInfo => {
      const fPID = path.resolve(os.homedir(), packageInfo.name, 'PIDs', `${PID}.toml`);
      return new Promise((resolve, reject) => {
        if (pause) {
          resolve(true);
        } else {
          fs.unlink(fPID, resolve);
        }
      });
    });
  }

  static scanFolder({
    folder
  }) {
    return new Promise((resolve, reject) => {
      fs.readdir(folder, (e, d) => {
        if (e) {
          reject(e);
        } else {
          resolve(d.map(v => path.resolve(folder, v)));
        }
      });
    });
  }

  static initialFolder({
    homeFolder
  }) {
    if (!homeFolder) {
      return Promise.reject(new Error('folder name is undefined'));
    }

    return new Promise((resolve, reject) => {
      fs.exists(homeFolder, rs => {
        if (!rs) {
          fs.mkdir(homeFolder, (e, d) => {
            if (e) {
              reject(e);
            } else {
              resolve(homeFolder);
            }
          });
        } else {
          resolve(homeFolder);
        }
      });
    });
  }

  static initialProcess(config) {
    const {
      packageInfo
    } = config;
    const processContent = Utils.toToml(config);
    const systemHome = path.resolve(os.homedir(), packageInfo.name);
    return new Promise((resolve, reject) => {
      const PID = process.pid;
      const pathPID = path.resolve(systemHome, 'PIDs', `${PID}.toml`);
      fs.writeFile(pathPID, processContent, function (e) {
        if (e) {
          reject(e);
        } else {
          resolve(true);
        }
      });
    });
  }

  static initialLevel({
    homeFolder
  }) {
    const dbPath = path.resolve(homeFolder, 'dataset');
    return this.initialFolder({
      homeFolder: dbPath
    }).then(() => level(dbPath));
  }

  static initialDB({
    database
  }) {
    if (Object.keys(database).length == 0) {
      return Promise.resolve(false);
    }

    let dbPath;
    let dbConfig = database;
    dbConfig.pathname = `/${database.db}`;
    dbConfig.slashes = true;

    if (database.user && database.password) {
      dbConfig.auth = dvalue.sprintf('%s:%s', database.user, database.password);
      dbPath = url.format(database);
    } else {
      dbPath = url.format(database);
    }

    return new Promise((resolve, reject) => {
      mongodb.connect(dbPath, {
        useNewUrlParser: true
      }, (e, d) => {
        if (e) {
          resolve(false);
        } else {
          const db = d.db();
          db.close = d.close;
          resolve(db);
        }
      });
    });
  }

  static initialLogger({
    homeFolder,
    base
  }) {
    return Promise.resolve({
      log: console.log,
      debug: base.debug ? console.log : () => {},
      trace: console.trace
    });
  }

  static initiali18n() {
    const localesFolder = path.resolve(__dirname, '../locales');
    return Promise.resolve(i18n);
  }

  static initialBots({
    config,
    database,
    logger,
    i18n
  }) {
    const interfaceFN = 'Bot.js';

    const interfaceBot = __webpack_require__(14)(path.resolve(__dirname, interfaceFN));

    return this.scanFolder({
      folder: __dirname
    }).then(list => list.filter(v => path.parse(v).name != path.parse(interfaceFN).name)).then(list => list.map(v => __webpack_require__(14)(v))).then(list => list.filter(v => v.isBot)).then(list => list.map(v => new v())).then(list => Promise.all(list.map(v => v.init({
      config,
      database,
      logger,
      i18n
    }))));
  }

  static startBots({
    Bots
  }) {
    return Promise.all(Bots.map(bot => bot.start())).then(() => Bots);
  }

  static close({
    Bots
  }) {
    const database = Bots[0].database;
    database.mongodb.close();
    database.leveldb.close();
  }

}

module.exports = Utils;
/* WEBPACK VAR INJECTION */}.call(this, "src/backend/libs"))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("level");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("toml");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("i18n");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("dvalue");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("ecrequest");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 14;

/***/ })
/******/ ]);