(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __defNormalProp = (obj, key, value2) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value: value2 }) : obj[key] = value2;
  var __name = (target, value2) => __defProp(target, "name", { value: value2, configurable: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __publicField = (obj, key, value2) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value2);

  // node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js
  var require_ms = __commonJS({
    "node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js"(exports, module) {
      var s = 1e3;
      var m = s * 60;
      var h = m * 60;
      var d = h * 24;
      var w = d * 7;
      var y = d * 365.25;
      module.exports = function(val, options) {
        options = options || {};
        var type = typeof val;
        if (type === "string" && val.length > 0) {
          return parse2(val);
        } else if (type === "number" && isFinite(val)) {
          return options.long ? fmtLong(val) : fmtShort(val);
        }
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
      };
      function parse2(str) {
        str = String(str);
        if (str.length > 100) {
          return;
        }
        var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
        if (!match) {
          return;
        }
        var n = parseFloat(match[1]);
        var type = (match[2] || "ms").toLowerCase();
        switch (type) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return n * y;
          case "weeks":
          case "week":
          case "w":
            return n * w;
          case "days":
          case "day":
          case "d":
            return n * d;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return n * h;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return n * m;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return n * s;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return n;
          default:
            return void 0;
        }
      }
      __name(parse2, "parse");
      function fmtShort(ms) {
        var msAbs = Math.abs(ms);
        if (msAbs >= d) {
          return Math.round(ms / d) + "d";
        }
        if (msAbs >= h) {
          return Math.round(ms / h) + "h";
        }
        if (msAbs >= m) {
          return Math.round(ms / m) + "m";
        }
        if (msAbs >= s) {
          return Math.round(ms / s) + "s";
        }
        return ms + "ms";
      }
      __name(fmtShort, "fmtShort");
      function fmtLong(ms) {
        var msAbs = Math.abs(ms);
        if (msAbs >= d) {
          return plural(ms, msAbs, d, "day");
        }
        if (msAbs >= h) {
          return plural(ms, msAbs, h, "hour");
        }
        if (msAbs >= m) {
          return plural(ms, msAbs, m, "minute");
        }
        if (msAbs >= s) {
          return plural(ms, msAbs, s, "second");
        }
        return ms + " ms";
      }
      __name(fmtLong, "fmtLong");
      function plural(ms, msAbs, n, name) {
        var isPlural = msAbs >= n * 1.5;
        return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
      }
      __name(plural, "plural");
    }
  });

  // node_modules/.pnpm/debug@4.3.6_supports-color@9.4.0/node_modules/debug/src/common.js
  var require_common = __commonJS({
    "node_modules/.pnpm/debug@4.3.6_supports-color@9.4.0/node_modules/debug/src/common.js"(exports, module) {
      function setup(env) {
        createDebug.debug = createDebug;
        createDebug.default = createDebug;
        createDebug.coerce = coerce;
        createDebug.disable = disable;
        createDebug.enable = enable;
        createDebug.enabled = enabled;
        createDebug.humanize = require_ms();
        createDebug.destroy = destroy;
        Object.keys(env).forEach((key) => {
          createDebug[key] = env[key];
        });
        createDebug.names = [];
        createDebug.skips = [];
        createDebug.formatters = {};
        function selectColor(namespace) {
          let hash = 0;
          for (let i = 0; i < namespace.length; i++) {
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0;
          }
          return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
        }
        __name(selectColor, "selectColor");
        createDebug.selectColor = selectColor;
        function createDebug(namespace) {
          let prevTime;
          let enableOverride = null;
          let namespacesCache;
          let enabledCache;
          function debug(...args) {
            if (!debug.enabled) {
              return;
            }
            const self2 = debug;
            const curr = Number(/* @__PURE__ */ new Date());
            const ms = curr - (prevTime || curr);
            self2.diff = ms;
            self2.prev = prevTime;
            self2.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);
            if (typeof args[0] !== "string") {
              args.unshift("%O");
            }
            let index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
              if (match === "%%") {
                return "%";
              }
              index++;
              const formatter = createDebug.formatters[format];
              if (typeof formatter === "function") {
                const val = args[index];
                match = formatter.call(self2, val);
                args.splice(index, 1);
                index--;
              }
              return match;
            });
            createDebug.formatArgs.call(self2, args);
            const logFn = self2.log || createDebug.log;
            logFn.apply(self2, args);
          }
          __name(debug, "debug");
          debug.namespace = namespace;
          debug.useColors = createDebug.useColors();
          debug.color = createDebug.selectColor(namespace);
          debug.extend = extend;
          debug.destroy = createDebug.destroy;
          Object.defineProperty(debug, "enabled", {
            enumerable: true,
            configurable: false,
            get: /* @__PURE__ */ __name(() => {
              if (enableOverride !== null) {
                return enableOverride;
              }
              if (namespacesCache !== createDebug.namespaces) {
                namespacesCache = createDebug.namespaces;
                enabledCache = createDebug.enabled(namespace);
              }
              return enabledCache;
            }, "get"),
            set: /* @__PURE__ */ __name((v) => {
              enableOverride = v;
            }, "set")
          });
          if (typeof createDebug.init === "function") {
            createDebug.init(debug);
          }
          return debug;
        }
        __name(createDebug, "createDebug");
        function extend(namespace, delimiter) {
          const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
          newDebug.log = this.log;
          return newDebug;
        }
        __name(extend, "extend");
        function enable(namespaces) {
          createDebug.save(namespaces);
          createDebug.namespaces = namespaces;
          createDebug.names = [];
          createDebug.skips = [];
          let i;
          const split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
          const len = split.length;
          for (i = 0; i < len; i++) {
            if (!split[i]) {
              continue;
            }
            namespaces = split[i].replace(/\*/g, ".*?");
            if (namespaces[0] === "-") {
              createDebug.skips.push(new RegExp("^" + namespaces.slice(1) + "$"));
            } else {
              createDebug.names.push(new RegExp("^" + namespaces + "$"));
            }
          }
        }
        __name(enable, "enable");
        function disable() {
          const namespaces = [
            ...createDebug.names.map(toNamespace),
            ...createDebug.skips.map(toNamespace).map((namespace) => "-" + namespace)
          ].join(",");
          createDebug.enable("");
          return namespaces;
        }
        __name(disable, "disable");
        function enabled(name) {
          if (name[name.length - 1] === "*") {
            return true;
          }
          let i;
          let len;
          for (i = 0, len = createDebug.skips.length; i < len; i++) {
            if (createDebug.skips[i].test(name)) {
              return false;
            }
          }
          for (i = 0, len = createDebug.names.length; i < len; i++) {
            if (createDebug.names[i].test(name)) {
              return true;
            }
          }
          return false;
        }
        __name(enabled, "enabled");
        function toNamespace(regexp) {
          return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
        }
        __name(toNamespace, "toNamespace");
        function coerce(val) {
          if (val instanceof Error) {
            return val.stack || val.message;
          }
          return val;
        }
        __name(coerce, "coerce");
        function destroy() {
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
        __name(destroy, "destroy");
        createDebug.enable(createDebug.load());
        return createDebug;
      }
      __name(setup, "setup");
      module.exports = setup;
    }
  });

  // node_modules/.pnpm/debug@4.3.6_supports-color@9.4.0/node_modules/debug/src/browser.js
  var require_browser = __commonJS({
    "node_modules/.pnpm/debug@4.3.6_supports-color@9.4.0/node_modules/debug/src/browser.js"(exports, module) {
      exports.formatArgs = formatArgs;
      exports.save = save;
      exports.load = load;
      exports.useColors = useColors;
      exports.storage = localstorage();
      exports.destroy = /* @__PURE__ */ (() => {
        let warned = false;
        return () => {
          if (!warned) {
            warned = true;
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
          }
        };
      })();
      exports.colors = [
        "#0000CC",
        "#0000FF",
        "#0033CC",
        "#0033FF",
        "#0066CC",
        "#0066FF",
        "#0099CC",
        "#0099FF",
        "#00CC00",
        "#00CC33",
        "#00CC66",
        "#00CC99",
        "#00CCCC",
        "#00CCFF",
        "#3300CC",
        "#3300FF",
        "#3333CC",
        "#3333FF",
        "#3366CC",
        "#3366FF",
        "#3399CC",
        "#3399FF",
        "#33CC00",
        "#33CC33",
        "#33CC66",
        "#33CC99",
        "#33CCCC",
        "#33CCFF",
        "#6600CC",
        "#6600FF",
        "#6633CC",
        "#6633FF",
        "#66CC00",
        "#66CC33",
        "#9900CC",
        "#9900FF",
        "#9933CC",
        "#9933FF",
        "#99CC00",
        "#99CC33",
        "#CC0000",
        "#CC0033",
        "#CC0066",
        "#CC0099",
        "#CC00CC",
        "#CC00FF",
        "#CC3300",
        "#CC3333",
        "#CC3366",
        "#CC3399",
        "#CC33CC",
        "#CC33FF",
        "#CC6600",
        "#CC6633",
        "#CC9900",
        "#CC9933",
        "#CCCC00",
        "#CCCC33",
        "#FF0000",
        "#FF0033",
        "#FF0066",
        "#FF0099",
        "#FF00CC",
        "#FF00FF",
        "#FF3300",
        "#FF3333",
        "#FF3366",
        "#FF3399",
        "#FF33CC",
        "#FF33FF",
        "#FF6600",
        "#FF6633",
        "#FF9900",
        "#FF9933",
        "#FFCC00",
        "#FFCC33"
      ];
      function useColors() {
        if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
          return true;
        }
        if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
          return false;
        }
        let m;
        return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
        typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
        // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
        typeof navigator !== "undefined" && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
        typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
      }
      __name(useColors, "useColors");
      function formatArgs(args) {
        args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
        if (!this.useColors) {
          return;
        }
        const c = "color: " + this.color;
        args.splice(1, 0, c, "color: inherit");
        let index = 0;
        let lastC = 0;
        args[0].replace(/%[a-zA-Z%]/g, (match) => {
          if (match === "%%") {
            return;
          }
          index++;
          if (match === "%c") {
            lastC = index;
          }
        });
        args.splice(lastC, 0, c);
      }
      __name(formatArgs, "formatArgs");
      exports.log = console.debug || console.log || (() => {
      });
      function save(namespaces) {
        try {
          if (namespaces) {
            exports.storage.setItem("debug", namespaces);
          } else {
            exports.storage.removeItem("debug");
          }
        } catch (error) {
        }
      }
      __name(save, "save");
      function load() {
        let r;
        try {
          r = exports.storage.getItem("debug");
        } catch (error) {
        }
        if (!r && typeof process !== "undefined" && "env" in process) {
          r = process.env.DEBUG;
        }
        return r;
      }
      __name(load, "load");
      function localstorage() {
        try {
          return localStorage;
        } catch (error) {
        }
      }
      __name(localstorage, "localstorage");
      module.exports = require_common()(exports);
      var { formatters } = module.exports;
      formatters.j = function(v) {
        try {
          return JSON.stringify(v);
        } catch (error) {
          return "[UnexpectedJSONParseError]: " + error.message;
        }
      };
    }
  });

  // node_modules/.pnpm/ua-parser-js@1.0.38/node_modules/ua-parser-js/src/ua-parser.js
  var require_ua_parser = __commonJS({
    "node_modules/.pnpm/ua-parser-js@1.0.38/node_modules/ua-parser-js/src/ua-parser.js"(exports, module) {
      (function(window1, undefined2) {
        "use strict";
        var LIBVERSION = "1.0.38", EMPTY = "", UNKNOWN = "?", FUNC_TYPE = "function", UNDEF_TYPE = "undefined", OBJ_TYPE = "object", STR_TYPE = "string", MAJOR = "major", MODEL = "model", NAME = "name", TYPE = "type", VENDOR = "vendor", VERSION = "version", ARCHITECTURE = "architecture", CONSOLE = "console", MOBILE = "mobile", TABLET = "tablet", SMARTTV = "smarttv", WEARABLE = "wearable", EMBEDDED = "embedded", UA_MAX_LENGTH = 500;
        var AMAZON = "Amazon", APPLE = "Apple", ASUS = "ASUS", BLACKBERRY = "BlackBerry", BROWSER = "Browser", CHROME = "Chrome", EDGE = "Edge", FIREFOX = "Firefox", GOOGLE = "Google", HUAWEI = "Huawei", LG = "LG", MICROSOFT = "Microsoft", MOTOROLA = "Motorola", OPERA = "Opera", SAMSUNG = "Samsung", SHARP = "Sharp", SONY = "Sony", XIAOMI = "Xiaomi", ZEBRA = "Zebra", FACEBOOK = "Facebook", CHROMIUM_OS = "Chromium OS", MAC_OS = "Mac OS";
        var extend = /* @__PURE__ */ __name(function(regexes2, extensions) {
          var mergedRegexes = {};
          for (var i in regexes2) {
            if (extensions[i] && extensions[i].length % 2 === 0) {
              mergedRegexes[i] = extensions[i].concat(regexes2[i]);
            } else {
              mergedRegexes[i] = regexes2[i];
            }
          }
          return mergedRegexes;
        }, "extend"), enumerize = /* @__PURE__ */ __name(function(arr) {
          var enums = {};
          for (var i = 0; i < arr.length; i++) {
            enums[arr[i].toUpperCase()] = arr[i];
          }
          return enums;
        }, "enumerize"), has = /* @__PURE__ */ __name(function(str1, str2) {
          return typeof str1 === STR_TYPE ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false;
        }, "has"), lowerize = /* @__PURE__ */ __name(function(str) {
          return str.toLowerCase();
        }, "lowerize"), majorize = /* @__PURE__ */ __name(function(version) {
          return typeof version === STR_TYPE ? version.replace(/[^\d\.]/g, EMPTY).split(".")[0] : undefined2;
        }, "majorize"), trim = /* @__PURE__ */ __name(function(str, len) {
          if (typeof str === STR_TYPE) {
            str = str.replace(/^\s\s*/, EMPTY);
            return typeof len === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
          }
        }, "trim");
        var rgxMapper = /* @__PURE__ */ __name(function(ua, arrays) {
          var i = 0, j, k, p, q, matches, match;
          while (i < arrays.length && !matches) {
            var regex = arrays[i], props = arrays[i + 1];
            j = k = 0;
            while (j < regex.length && !matches) {
              if (!regex[j]) {
                break;
              }
              matches = regex[j++].exec(ua);
              if (!!matches) {
                for (p = 0; p < props.length; p++) {
                  match = matches[++k];
                  q = props[p];
                  if (typeof q === OBJ_TYPE && q.length > 0) {
                    if (q.length === 2) {
                      if (typeof q[1] == FUNC_TYPE) {
                        this[q[0]] = q[1].call(this, match);
                      } else {
                        this[q[0]] = q[1];
                      }
                    } else if (q.length === 3) {
                      if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                        this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined2;
                      } else {
                        this[q[0]] = match ? match.replace(q[1], q[2]) : undefined2;
                      }
                    } else if (q.length === 4) {
                      this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined2;
                    }
                  } else {
                    this[q] = match ? match : undefined2;
                  }
                }
              }
            }
            i += 2;
          }
        }, "rgxMapper"), strMapper = /* @__PURE__ */ __name(function(str, map) {
          for (var i in map) {
            if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
              for (var j = 0; j < map[i].length; j++) {
                if (has(map[i][j], str)) {
                  return i === UNKNOWN ? undefined2 : i;
                }
              }
            } else if (has(map[i], str)) {
              return i === UNKNOWN ? undefined2 : i;
            }
          }
          return str;
        }, "strMapper");
        var oldSafariMap = {
          "1.0": "/8",
          "1.2": "/1",
          "1.3": "/3",
          "2.0": "/412",
          "2.0.2": "/416",
          "2.0.3": "/417",
          "2.0.4": "/419",
          "?": "/"
        }, windowsVersionMap = {
          "ME": "4.90",
          "NT 3.11": "NT3.51",
          "NT 4.0": "NT4.0",
          "2000": "NT 5.0",
          "XP": [
            "NT 5.1",
            "NT 5.2"
          ],
          "Vista": "NT 6.0",
          "7": "NT 6.1",
          "8": "NT 6.2",
          "8.1": "NT 6.3",
          "10": [
            "NT 6.4",
            "NT 10.0"
          ],
          "RT": "ARM"
        };
        var regexes = {
          browser: [
            [
              /\b(?:crmo|crios)\/([\w\.]+)/i
              // Chrome for Android/iOS
            ],
            [
              VERSION,
              [
                NAME,
                "Chrome"
              ]
            ],
            [
              /edg(?:e|ios|a)?\/([\w\.]+)/i
              // Microsoft Edge
            ],
            [
              VERSION,
              [
                NAME,
                "Edge"
              ]
            ],
            [
              // Presto based
              /(opera mini)\/([-\w\.]+)/i,
              /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
              /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
              // Opera
            ],
            [
              NAME,
              VERSION
            ],
            [
              /opios[\/ ]+([\w\.]+)/i
              // Opera mini on iphone >= 8.0
            ],
            [
              VERSION,
              [
                NAME,
                OPERA + " Mini"
              ]
            ],
            [
              /\bop(?:rg)?x\/([\w\.]+)/i
              // Opera GX
            ],
            [
              VERSION,
              [
                NAME,
                OPERA + " GX"
              ]
            ],
            [
              /\bopr\/([\w\.]+)/i
              // Opera Webkit
            ],
            [
              VERSION,
              [
                NAME,
                OPERA
              ]
            ],
            [
              // Mixed
              /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i
              // Baidu
            ],
            [
              VERSION,
              [
                NAME,
                "Baidu"
              ]
            ],
            [
              /(kindle)\/([\w\.]+)/i,
              /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
              // Trident based
              /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,
              /(?:ms|\()(ie) ([\w\.]+)/i,
              // Webkit/KHTML based                                               // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
              /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
              // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ, aka ShouQ
              /(heytap|ovi)browser\/([\d\.]+)/i,
              /(weibo)__([\d\.]+)/i
              // Weibo
            ],
            [
              NAME,
              VERSION
            ],
            [
              /\bddg\/([\w\.]+)/i
              // DuckDuckGo
            ],
            [
              VERSION,
              [
                NAME,
                "DuckDuckGo"
              ]
            ],
            [
              /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
              // UCBrowser
            ],
            [
              VERSION,
              [
                NAME,
                "UC" + BROWSER
              ]
            ],
            [
              /microm.+\bqbcore\/([\w\.]+)/i,
              /\bqbcore\/([\w\.]+).+microm/i,
              /micromessenger\/([\w\.]+)/i
              // WeChat
            ],
            [
              VERSION,
              [
                NAME,
                "WeChat"
              ]
            ],
            [
              /konqueror\/([\w\.]+)/i
              // Konqueror
            ],
            [
              VERSION,
              [
                NAME,
                "Konqueror"
              ]
            ],
            [
              /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
              // IE11
            ],
            [
              VERSION,
              [
                NAME,
                "IE"
              ]
            ],
            [
              /ya(?:search)?browser\/([\w\.]+)/i
              // Yandex
            ],
            [
              VERSION,
              [
                NAME,
                "Yandex"
              ]
            ],
            [
              /slbrowser\/([\w\.]+)/i
              // Smart Lenovo Browser
            ],
            [
              VERSION,
              [
                NAME,
                "Smart Lenovo " + BROWSER
              ]
            ],
            [
              /(avast|avg)\/([\w\.]+)/i
              // Avast/AVG Secure Browser
            ],
            [
              [
                NAME,
                /(.+)/,
                "$1 Secure " + BROWSER
              ],
              VERSION
            ],
            [
              /\bfocus\/([\w\.]+)/i
              // Firefox Focus
            ],
            [
              VERSION,
              [
                NAME,
                FIREFOX + " Focus"
              ]
            ],
            [
              /\bopt\/([\w\.]+)/i
              // Opera Touch
            ],
            [
              VERSION,
              [
                NAME,
                OPERA + " Touch"
              ]
            ],
            [
              /coc_coc\w+\/([\w\.]+)/i
              // Coc Coc Browser
            ],
            [
              VERSION,
              [
                NAME,
                "Coc Coc"
              ]
            ],
            [
              /dolfin\/([\w\.]+)/i
              // Dolphin
            ],
            [
              VERSION,
              [
                NAME,
                "Dolphin"
              ]
            ],
            [
              /coast\/([\w\.]+)/i
              // Opera Coast
            ],
            [
              VERSION,
              [
                NAME,
                OPERA + " Coast"
              ]
            ],
            [
              /miuibrowser\/([\w\.]+)/i
              // MIUI Browser
            ],
            [
              VERSION,
              [
                NAME,
                "MIUI " + BROWSER
              ]
            ],
            [
              /fxios\/([-\w\.]+)/i
              // Firefox for iOS
            ],
            [
              VERSION,
              [
                NAME,
                FIREFOX
              ]
            ],
            [
              /\bqihu|(qi?ho?o?|360)browser/i
              // 360
            ],
            [
              [
                NAME,
                "360 " + BROWSER
              ]
            ],
            [
              /(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i
            ],
            [
              [
                NAME,
                /(.+)/,
                "$1 " + BROWSER
              ],
              VERSION
            ],
            [
              /samsungbrowser\/([\w\.]+)/i
              // Samsung Internet
            ],
            [
              VERSION,
              [
                NAME,
                SAMSUNG + " Internet"
              ]
            ],
            [
              /(comodo_dragon)\/([\w\.]+)/i
              // Comodo Dragon
            ],
            [
              [
                NAME,
                /_/g,
                " "
              ],
              VERSION
            ],
            [
              /metasr[\/ ]?([\d\.]+)/i
              // Sogou Explorer
            ],
            [
              VERSION,
              [
                NAME,
                "Sogou Explorer"
              ]
            ],
            [
              /(sogou)mo\w+\/([\d\.]+)/i
              // Sogou Mobile
            ],
            [
              [
                NAME,
                "Sogou Mobile"
              ],
              VERSION
            ],
            [
              /(electron)\/([\w\.]+) safari/i,
              /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
              /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i
              // QQBrowser/2345 Browser
            ],
            [
              NAME,
              VERSION
            ],
            [
              /(lbbrowser)/i,
              /\[(linkedin)app\]/i
              // LinkedIn App for iOS & Android
            ],
            [
              NAME
            ],
            [
              // WebView
              /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
              // Facebook App for iOS & Android
            ],
            [
              [
                NAME,
                FACEBOOK
              ],
              VERSION
            ],
            [
              /(Klarna)\/([\w\.]+)/i,
              /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
              /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
              /safari (line)\/([\w\.]+)/i,
              /\b(line)\/([\w\.]+)\/iab/i,
              /(alipay)client\/([\w\.]+)/i,
              /(twitter)(?:and| f.+e\/([\w\.]+))/i,
              /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i
              // Chromium/Instagram/Snapchat
            ],
            [
              NAME,
              VERSION
            ],
            [
              /\bgsa\/([\w\.]+) .*safari\//i
              // Google Search Appliance on iOS
            ],
            [
              VERSION,
              [
                NAME,
                "GSA"
              ]
            ],
            [
              /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i
              // TikTok
            ],
            [
              VERSION,
              [
                NAME,
                "TikTok"
              ]
            ],
            [
              /headlesschrome(?:\/([\w\.]+)| )/i
              // Chrome Headless
            ],
            [
              VERSION,
              [
                NAME,
                CHROME + " Headless"
              ]
            ],
            [
              / wv\).+(chrome)\/([\w\.]+)/i
              // Chrome WebView
            ],
            [
              [
                NAME,
                CHROME + " WebView"
              ],
              VERSION
            ],
            [
              /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
              // Android Browser
            ],
            [
              VERSION,
              [
                NAME,
                "Android " + BROWSER
              ]
            ],
            [
              /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
              // Chrome/OmniWeb/Arora/Tizen/Nokia
            ],
            [
              NAME,
              VERSION
            ],
            [
              /version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i
              // Mobile Safari
            ],
            [
              VERSION,
              [
                NAME,
                "Mobile Safari"
              ]
            ],
            [
              /version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i
              // Safari & Safari Mobile
            ],
            [
              VERSION,
              NAME
            ],
            [
              /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
              // Safari < 3.0
            ],
            [
              NAME,
              [
                VERSION,
                strMapper,
                oldSafariMap
              ]
            ],
            [
              /(webkit|khtml)\/([\w\.]+)/i
            ],
            [
              NAME,
              VERSION
            ],
            [
              // Gecko based
              /(navigator|netscape\d?)\/([-\w\.]+)/i
              // Netscape
            ],
            [
              [
                NAME,
                "Netscape"
              ],
              VERSION
            ],
            [
              /mobile vr; rv:([\w\.]+)\).+firefox/i
              // Firefox Reality
            ],
            [
              VERSION,
              [
                NAME,
                FIREFOX + " Reality"
              ]
            ],
            [
              /ekiohf.+(flow)\/([\w\.]+)/i,
              /(swiftfox)/i,
              /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
              // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror/Klar
              /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
              // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
              /(firefox)\/([\w\.]+)/i,
              /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
              // Other
              /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
              // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir/Obigo/Mosaic/Go/ICE/UP.Browser
              /(links) \(([\w\.]+)/i,
              /panasonic;(viera)/i
              // Panasonic Viera
            ],
            [
              NAME,
              VERSION
            ],
            [
              /(cobalt)\/([\w\.]+)/i
              // Cobalt
            ],
            [
              NAME,
              [
                VERSION,
                /master.|lts./,
                ""
              ]
            ]
          ],
          cpu: [
            [
              /(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i
              // AMD64 (x64)
            ],
            [
              [
                ARCHITECTURE,
                "amd64"
              ]
            ],
            [
              /(ia32(?=;))/i
              // IA32 (quicktime)
            ],
            [
              [
                ARCHITECTURE,
                lowerize
              ]
            ],
            [
              /((?:i[346]|x)86)[;\)]/i
              // IA32 (x86)
            ],
            [
              [
                ARCHITECTURE,
                "ia32"
              ]
            ],
            [
              /\b(aarch64|arm(v?8e?l?|_?64))\b/i
              // ARM64
            ],
            [
              [
                ARCHITECTURE,
                "arm64"
              ]
            ],
            [
              /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i
              // ARMHF
            ],
            [
              [
                ARCHITECTURE,
                "armhf"
              ]
            ],
            [
              // PocketPC mistakenly identified as PowerPC
              /windows (ce|mobile); ppc;/i
            ],
            [
              [
                ARCHITECTURE,
                "arm"
              ]
            ],
            [
              /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i
              // PowerPC
            ],
            [
              [
                ARCHITECTURE,
                /ower/,
                EMPTY,
                lowerize
              ]
            ],
            [
              /(sun4\w)[;\)]/i
              // SPARC
            ],
            [
              [
                ARCHITECTURE,
                "sparc"
              ]
            ],
            [
              /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
            ],
            [
              [
                ARCHITECTURE,
                lowerize
              ]
            ]
          ],
          device: [
            [
              //////////////////////////
              // MOBILES & TABLETS
              /////////////////////////
              // Samsung
              /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
            ],
            [
              MODEL,
              [
                VENDOR,
                SAMSUNG
              ],
              [
                TYPE,
                TABLET
              ]
            ],
            [
              /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
              /samsung[- ]([-\w]+)/i,
              /sec-(sgh\w+)/i
            ],
            [
              MODEL,
              [
                VENDOR,
                SAMSUNG
              ],
              [
                TYPE,
                MOBILE
              ]
            ],
            [
              // Apple
              /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i
              // iPod/iPhone
            ],
            [
              MODEL,
              [
                VENDOR,
                APPLE
              ],
              [
                TYPE,
                MOBILE
              ]
            ],
            [
              /\((ipad);[-\w\),; ]+apple/i,
              /applecoremedia\/[\w\.]+ \((ipad)/i,
              /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
            ],
            [
              MODEL,
              [
                VENDOR,
                APPLE
              ],
              [
                TYPE,
                TABLET
              ]
            ],
            [
              /(macintosh);/i
            ],
            [
              MODEL,
              [
                VENDOR,
                APPLE
              ]
            ],
            [
              // Sharp
              /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
            ],
            [
              MODEL,
              [
                VENDOR,
                SHARP
              ],
              [
                TYPE,
                MOBILE
              ]
            ],
            [
              // Huawei
              /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
            ],
            [
              MODEL,
              [
                VENDOR,
                HUAWEI
              ],
              [
                TYPE,
                TABLET
              ]
            ],
            [
              /(?:huawei|honor)([-\w ]+)[;\)]/i,
              /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
            ],
            [
              MODEL,
              [
                VENDOR,
                HUAWEI
              ],
              [
                TYPE,
                MOBILE
              ]
            ],
            [
              // Xiaomi
              /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
              /\b; (\w+) build\/hm\1/i,
              /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
              /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
              /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
              /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i
              // Xiaomi Mi
            ],
            [
              [
                MODEL,
                /_/g,
                " "
              ],
              [
                VENDOR,
                XIAOMI
              ],
              [
                TYPE,
                MOBILE
              ]
            ],
            [
              /oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,
              /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i
              // Mi Pad tablets
            ],
            [
              [
                MODEL,
                /_/g,
                " "
              ],
              [
                VENDOR,
                XIAOMI
              ],
              [
                TYPE,
                TABLET
              ]
            ],
            [
              // OPPO
              /; (\w+) bui.+ oppo/i,
              /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
            ],
            [
              MODEL,
              [
                VENDOR,
                "OPPO"
              ],
              [
                TYPE,
                MOBILE
              ]
            ],
            [
              /\b(opd2\d{3}a?) bui/i
            ],
            [
              MODEL,
              [
                VENDOR,
                "OPPO"
              ],
              [
                TYPE,
                TABLET
              ]
            ],
            [
              // Vivo
              /vivo (\w+)(?: bui|\))/i,
              /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
            ],
            [
              MODEL,
              [
                VENDOR,
                "Vivo"
              ],
              [
                TYPE,
                MOBILE
              ]
            ],
            [
              // Realme
              /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
            ],
            [
              MODEL,
              [
                VENDOR,
                "Realme"
              ],
              [
                TYPE,
                MOBILE
              ]
            ],
            [
              // Motorola
              /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
              /\bmot(?:orola)?[- ](\w*)/i,
              /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
            ],
            [
              MODEL,
              [
                VENDOR,
                MOTOROLA
              ],
              [
                TYPE,
                MOBILE
              ]
            ],
            [
              /\b(mz60\d|xoom[2 ]{0,2}) build\//i
            ],
            [
              MODEL,
              [
                VENDOR,
                MOTOROLA
              ],
              [
                TYPE,
                TABLET
              ]
            ],
            [
              // LG
              /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
            ],
            [
              MODEL,
              [
                VENDOR,
                LG
              ],
              [
                TYPE,
                TABLET
              ]
            ],
            [
              /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
              /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
              /\blg-?([\d\w]+) bui/i
            ],
            [
              MODEL,
              [
                VENDOR,
                LG
              ],
              [
                TYPE,
                MOBILE
              ]
            ],
            [
              // Lenovo
              /(ideatab[-\w ]+)/i,
              /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
            ],
            [
              MODEL,
              [
                VENDOR,
                "Lenovo"
              ],
              [
                TYPE,
                TABLET
              ]
            ],
            [
              // Nokia
              /(?:maemo|nokia).*(n900|lumia \d+)/i,
              /nokia[-_ ]?([-\w\.]*)/i
            ],
            [
              [
                MODEL,
                /_/g,
                " "
              ],
              [
                VENDOR,
                "Nokia"
              ],
              [
                TYPE,
                MOBILE
              ]
            ],
            [
              // Google
              /(pixel c)\b/i
              // Google Pixel C
            ],
            [
              MODEL,
              [
                VENDOR,
                GOOGLE
              ],
              [
                TYPE,
                TABLET
              ]
            ],
            [
              /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i
              // Google Pixel
            ],
            [
              MODEL,
              [
                VENDOR,
                GOOGLE
              ],
              [
                TYPE,
                MOBILE
              ]
            ],
            [
              // Sony
              /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
            ],
            [
              MODEL,
              [
                VENDOR,
                SONY
              ],
              [
                TYPE,
                MOBILE
              ]
            ],
            [
              /sony tablet [ps]/i,
              /\b(?:sony)?sgp\w+(?: bui|\))/i
            ],
            [
              [
                MODEL,
                "Xperia Tablet"
              ],
              [
                VENDOR,
                SONY
              ],
              [
                TYPE,
                TABLET
              ]
            ],
            [
              // OnePlus
              / (kb2005|in20[12]5|be20[12][59])\b/i,
              /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
            ],
            [
              MODEL,
              [
                VENDOR,
                "OnePlus"
              ],
              [
                TYPE,
                MOBILE
              ]
            ],
            [
              // Amazon
              /(alexa)webm/i,
              /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,
              /(kf[a-z]+)( bui|\)).+silk\//i
              // Kindle Fire HD
            ],
            [
              MODEL,
              [
                VENDOR,
                AMAZON
              ],
              [
                TYPE,
                TABLET
              ]
            ],
            [
              /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
              // Fire Phone
            ],
            [
              [
                MODEL,
                /(.+)/g,
                "Fire Phone $1"
              ],
              [
                VENDOR,
                AMAZON
              ],
              [
                TYPE,
                MOBILE
              ]
            ],
            [
              // BlackBerry
              /(playbook);[-\w\),; ]+(rim)/i
              // BlackBerry PlayBook
            ],
            [
              MODEL,
              VENDOR,
              [
                TYPE,
                TABLET
              ]
            ],
            [
              /\b((?:bb[a-f]|st[hv])100-\d)/i,
              /\(bb10; (\w+)/i
              // BlackBerry 10
            ],
            [
              MODEL,
              [
                VENDOR,
                BLACKBERRY
              ],
              [
                TYPE,
                MOBILE
              ]
            ],
            [
              // Asus
              /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
            ],
            [
              MODEL,
              [
                VENDOR,
                ASUS
              ],
              [
                TYPE,
                TABLET
              ]
            ],
            [
              / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
            ],
            [
              MODEL,
              [
                VENDOR,
                ASUS
              ],
              [
                TYPE,
                MOBILE
              ]
            ],
            [
              // HTC
              /(nexus 9)/i
              // HTC Nexus 9
            ],
            [
              MODEL,
              [
                VENDOR,
                "HTC"
              ],
              [
                TYPE,
                TABLET
              ]
            ],
            [
              /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
              // ZTE
              /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
              /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
              // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
            ],
            [
              VENDOR,
              [
                MODEL,
                /_/g,
                " "
              ],
              [
                TYPE,
                MOBILE
              ]
            ],
            [
              // Acer
              /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
            ],
            [
              MODEL,
              [
                VENDOR,
                "Acer"
              ],
              [
                TYPE,
                TABLET
              ]
            ],
            [
              // Meizu
              /droid.+; (m[1-5] note) bui/i,
              /\bmz-([-\w]{2,})/i
            ],
            [
              MODEL,
              [
                VENDOR,
                "Meizu"
              ],
              [
                TYPE,
                MOBILE
              ]
            ],
            [
              // Ulefone
              /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
            ],
            [
              MODEL,
              [
                VENDOR,
                "Ulefone"
              ],
              [
                TYPE,
                MOBILE
              ]
            ],
            [
              // MIXED
              /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,
              // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
              /(hp) ([\w ]+\w)/i,
              /(asus)-?(\w+)/i,
              /(microsoft); (lumia[\w ]+)/i,
              /(lenovo)[-_ ]?([-\w]+)/i,
              /(jolla)/i,
              /(oppo) ?([\w ]+) bui/i
              // OPPO
            ],
            [
              VENDOR,
              MODEL,
              [
                TYPE,
                MOBILE
              ]
            ],
            [
              /(kobo)\s(ereader|touch)/i,
              /(archos) (gamepad2?)/i,
              /(hp).+(touchpad(?!.+tablet)|tablet)/i,
              /(kindle)\/([\w\.]+)/i,
              /(nook)[\w ]+build\/(\w+)/i,
              /(dell) (strea[kpr\d ]*[\dko])/i,
              /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
              /(trinity)[- ]*(t\d{3}) bui/i,
              /(gigaset)[- ]+(q\w{1,9}) bui/i,
              /(vodafone) ([\w ]+)(?:\)| bui)/i
              // Vodafone
            ],
            [
              VENDOR,
              MODEL,
              [
                TYPE,
                TABLET
              ]
            ],
            [
              /(surface duo)/i
              // Surface Duo
            ],
            [
              MODEL,
              [
                VENDOR,
                MICROSOFT
              ],
              [
                TYPE,
                TABLET
              ]
            ],
            [
              /droid [\d\.]+; (fp\du?)(?: b|\))/i
              // Fairphone
            ],
            [
              MODEL,
              [
                VENDOR,
                "Fairphone"
              ],
              [
                TYPE,
                MOBILE
              ]
            ],
            [
              /(u304aa)/i
              // AT&T
            ],
            [
              MODEL,
              [
                VENDOR,
                "AT&T"
              ],
              [
                TYPE,
                MOBILE
              ]
            ],
            [
              /\bsie-(\w*)/i
              // Siemens
            ],
            [
              MODEL,
              [
                VENDOR,
                "Siemens"
              ],
              [
                TYPE,
                MOBILE
              ]
            ],
            [
              /\b(rct\w+) b/i
              // RCA Tablets
            ],
            [
              MODEL,
              [
                VENDOR,
                "RCA"
              ],
              [
                TYPE,
                TABLET
              ]
            ],
            [
              /\b(venue[\d ]{2,7}) b/i
              // Dell Venue Tablets
            ],
            [
              MODEL,
              [
                VENDOR,
                "Dell"
              ],
              [
                TYPE,
                TABLET
              ]
            ],
            [
              /\b(q(?:mv|ta)\w+) b/i
              // Verizon Tablet
            ],
            [
              MODEL,
              [
                VENDOR,
                "Verizon"
              ],
              [
                TYPE,
                TABLET
              ]
            ],
            [
              /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i
              // Barnes & Noble Tablet
            ],
            [
              MODEL,
              [
                VENDOR,
                "Barnes & Noble"
              ],
              [
                TYPE,
                TABLET
              ]
            ],
            [
              /\b(tm\d{3}\w+) b/i
            ],
            [
              MODEL,
              [
                VENDOR,
                "NuVision"
              ],
              [
                TYPE,
                TABLET
              ]
            ],
            [
              /\b(k88) b/i
              // ZTE K Series Tablet
            ],
            [
              MODEL,
              [
                VENDOR,
                "ZTE"
              ],
              [
                TYPE,
                TABLET
              ]
            ],
            [
              /\b(nx\d{3}j) b/i
              // ZTE Nubia
            ],
            [
              MODEL,
              [
                VENDOR,
                "ZTE"
              ],
              [
                TYPE,
                MOBILE
              ]
            ],
            [
              /\b(gen\d{3}) b.+49h/i
              // Swiss GEN Mobile
            ],
            [
              MODEL,
              [
                VENDOR,
                "Swiss"
              ],
              [
                TYPE,
                MOBILE
              ]
            ],
            [
              /\b(zur\d{3}) b/i
              // Swiss ZUR Tablet
            ],
            [
              MODEL,
              [
                VENDOR,
                "Swiss"
              ],
              [
                TYPE,
                TABLET
              ]
            ],
            [
              /\b((zeki)?tb.*\b) b/i
              // Zeki Tablets
            ],
            [
              MODEL,
              [
                VENDOR,
                "Zeki"
              ],
              [
                TYPE,
                TABLET
              ]
            ],
            [
              /\b([yr]\d{2}) b/i,
              /\b(dragon[- ]+touch |dt)(\w{5}) b/i
              // Dragon Touch Tablet
            ],
            [
              [
                VENDOR,
                "Dragon Touch"
              ],
              MODEL,
              [
                TYPE,
                TABLET
              ]
            ],
            [
              /\b(ns-?\w{0,9}) b/i
              // Insignia Tablets
            ],
            [
              MODEL,
              [
                VENDOR,
                "Insignia"
              ],
              [
                TYPE,
                TABLET
              ]
            ],
            [
              /\b((nxa|next)-?\w{0,9}) b/i
              // NextBook Tablets
            ],
            [
              MODEL,
              [
                VENDOR,
                "NextBook"
              ],
              [
                TYPE,
                TABLET
              ]
            ],
            [
              /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i
              // Voice Xtreme Phones
            ],
            [
              [
                VENDOR,
                "Voice"
              ],
              MODEL,
              [
                TYPE,
                MOBILE
              ]
            ],
            [
              /\b(lvtel\-)?(v1[12]) b/i
              // LvTel Phones
            ],
            [
              [
                VENDOR,
                "LvTel"
              ],
              MODEL,
              [
                TYPE,
                MOBILE
              ]
            ],
            [
              /\b(ph-1) /i
              // Essential PH-1
            ],
            [
              MODEL,
              [
                VENDOR,
                "Essential"
              ],
              [
                TYPE,
                MOBILE
              ]
            ],
            [
              /\b(v(100md|700na|7011|917g).*\b) b/i
              // Envizen Tablets
            ],
            [
              MODEL,
              [
                VENDOR,
                "Envizen"
              ],
              [
                TYPE,
                TABLET
              ]
            ],
            [
              /\b(trio[-\w\. ]+) b/i
              // MachSpeed Tablets
            ],
            [
              MODEL,
              [
                VENDOR,
                "MachSpeed"
              ],
              [
                TYPE,
                TABLET
              ]
            ],
            [
              /\btu_(1491) b/i
              // Rotor Tablets
            ],
            [
              MODEL,
              [
                VENDOR,
                "Rotor"
              ],
              [
                TYPE,
                TABLET
              ]
            ],
            [
              /(shield[\w ]+) b/i
              // Nvidia Shield Tablets
            ],
            [
              MODEL,
              [
                VENDOR,
                "Nvidia"
              ],
              [
                TYPE,
                TABLET
              ]
            ],
            [
              /(sprint) (\w+)/i
              // Sprint Phones
            ],
            [
              VENDOR,
              MODEL,
              [
                TYPE,
                MOBILE
              ]
            ],
            [
              /(kin\.[onetw]{3})/i
              // Microsoft Kin
            ],
            [
              [
                MODEL,
                /\./g,
                " "
              ],
              [
                VENDOR,
                MICROSOFT
              ],
              [
                TYPE,
                MOBILE
              ]
            ],
            [
              /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
              // Zebra
            ],
            [
              MODEL,
              [
                VENDOR,
                ZEBRA
              ],
              [
                TYPE,
                TABLET
              ]
            ],
            [
              /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
            ],
            [
              MODEL,
              [
                VENDOR,
                ZEBRA
              ],
              [
                TYPE,
                MOBILE
              ]
            ],
            [
              ///////////////////
              // SMARTTVS
              ///////////////////
              /smart-tv.+(samsung)/i
              // Samsung
            ],
            [
              VENDOR,
              [
                TYPE,
                SMARTTV
              ]
            ],
            [
              /hbbtv.+maple;(\d+)/i
            ],
            [
              [
                MODEL,
                /^/,
                "SmartTV"
              ],
              [
                VENDOR,
                SAMSUNG
              ],
              [
                TYPE,
                SMARTTV
              ]
            ],
            [
              /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
              // LG SmartTV
            ],
            [
              [
                VENDOR,
                LG
              ],
              [
                TYPE,
                SMARTTV
              ]
            ],
            [
              /(apple) ?tv/i
              // Apple TV
            ],
            [
              VENDOR,
              [
                MODEL,
                APPLE + " TV"
              ],
              [
                TYPE,
                SMARTTV
              ]
            ],
            [
              /crkey/i
              // Google Chromecast
            ],
            [
              [
                MODEL,
                CHROME + "cast"
              ],
              [
                VENDOR,
                GOOGLE
              ],
              [
                TYPE,
                SMARTTV
              ]
            ],
            [
              /droid.+aft(\w+)( bui|\))/i
              // Fire TV
            ],
            [
              MODEL,
              [
                VENDOR,
                AMAZON
              ],
              [
                TYPE,
                SMARTTV
              ]
            ],
            [
              /\(dtv[\);].+(aquos)/i,
              /(aquos-tv[\w ]+)\)/i
              // Sharp
            ],
            [
              MODEL,
              [
                VENDOR,
                SHARP
              ],
              [
                TYPE,
                SMARTTV
              ]
            ],
            [
              /(bravia[\w ]+)( bui|\))/i
              // Sony
            ],
            [
              MODEL,
              [
                VENDOR,
                SONY
              ],
              [
                TYPE,
                SMARTTV
              ]
            ],
            [
              /(mitv-\w{5}) bui/i
              // Xiaomi
            ],
            [
              MODEL,
              [
                VENDOR,
                XIAOMI
              ],
              [
                TYPE,
                SMARTTV
              ]
            ],
            [
              /Hbbtv.*(technisat) (.*);/i
              // TechniSAT
            ],
            [
              VENDOR,
              MODEL,
              [
                TYPE,
                SMARTTV
              ]
            ],
            [
              /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
              /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
              // HbbTV devices
            ],
            [
              [
                VENDOR,
                trim
              ],
              [
                MODEL,
                trim
              ],
              [
                TYPE,
                SMARTTV
              ]
            ],
            [
              /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i
              // SmartTV from Unidentified Vendors
            ],
            [
              [
                TYPE,
                SMARTTV
              ]
            ],
            [
              ///////////////////
              // CONSOLES
              ///////////////////
              /(ouya)/i,
              /(nintendo) ([wids3utch]+)/i
              // Nintendo
            ],
            [
              VENDOR,
              MODEL,
              [
                TYPE,
                CONSOLE
              ]
            ],
            [
              /droid.+; (shield) bui/i
              // Nvidia
            ],
            [
              MODEL,
              [
                VENDOR,
                "Nvidia"
              ],
              [
                TYPE,
                CONSOLE
              ]
            ],
            [
              /(playstation [345portablevi]+)/i
              // Playstation
            ],
            [
              MODEL,
              [
                VENDOR,
                SONY
              ],
              [
                TYPE,
                CONSOLE
              ]
            ],
            [
              /\b(xbox(?: one)?(?!; xbox))[\); ]/i
              // Microsoft Xbox
            ],
            [
              MODEL,
              [
                VENDOR,
                MICROSOFT
              ],
              [
                TYPE,
                CONSOLE
              ]
            ],
            [
              ///////////////////
              // WEARABLES
              ///////////////////
              /((pebble))app/i
              // Pebble
            ],
            [
              VENDOR,
              MODEL,
              [
                TYPE,
                WEARABLE
              ]
            ],
            [
              /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
              // Apple Watch
            ],
            [
              MODEL,
              [
                VENDOR,
                APPLE
              ],
              [
                TYPE,
                WEARABLE
              ]
            ],
            [
              /droid.+; (glass) \d/i
              // Google Glass
            ],
            [
              MODEL,
              [
                VENDOR,
                GOOGLE
              ],
              [
                TYPE,
                WEARABLE
              ]
            ],
            [
              /droid.+; (wt63?0{2,3})\)/i
            ],
            [
              MODEL,
              [
                VENDOR,
                ZEBRA
              ],
              [
                TYPE,
                WEARABLE
              ]
            ],
            [
              /(quest( \d| pro)?)/i
              // Oculus Quest
            ],
            [
              MODEL,
              [
                VENDOR,
                FACEBOOK
              ],
              [
                TYPE,
                WEARABLE
              ]
            ],
            [
              ///////////////////
              // EMBEDDED
              ///////////////////
              /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
              // Tesla
            ],
            [
              VENDOR,
              [
                TYPE,
                EMBEDDED
              ]
            ],
            [
              /(aeobc)\b/i
              // Echo Dot
            ],
            [
              MODEL,
              [
                VENDOR,
                AMAZON
              ],
              [
                TYPE,
                EMBEDDED
              ]
            ],
            [
              ////////////////////
              // MIXED (GENERIC)
              ///////////////////
              /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i
              // Android Phones from Unidentified Vendors
            ],
            [
              MODEL,
              [
                TYPE,
                MOBILE
              ]
            ],
            [
              /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i
              // Android Tablets from Unidentified Vendors
            ],
            [
              MODEL,
              [
                TYPE,
                TABLET
              ]
            ],
            [
              /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
              // Unidentifiable Tablet
            ],
            [
              [
                TYPE,
                TABLET
              ]
            ],
            [
              /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
              // Unidentifiable Mobile
            ],
            [
              [
                TYPE,
                MOBILE
              ]
            ],
            [
              /(android[-\w\. ]{0,9});.+buil/i
              // Generic Android Device
            ],
            [
              MODEL,
              [
                VENDOR,
                "Generic"
              ]
            ]
          ],
          engine: [
            [
              /windows.+ edge\/([\w\.]+)/i
              // EdgeHTML
            ],
            [
              VERSION,
              [
                NAME,
                EDGE + "HTML"
              ]
            ],
            [
              /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
              // Blink
            ],
            [
              VERSION,
              [
                NAME,
                "Blink"
              ]
            ],
            [
              /(presto)\/([\w\.]+)/i,
              /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
              /ekioh(flow)\/([\w\.]+)/i,
              /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
              /(icab)[\/ ]([23]\.[\d\.]+)/i,
              /\b(libweb)/i
            ],
            [
              NAME,
              VERSION
            ],
            [
              /rv\:([\w\.]{1,9})\b.+(gecko)/i
              // Gecko
            ],
            [
              VERSION,
              NAME
            ]
          ],
          os: [
            [
              // Windows
              /microsoft (windows) (vista|xp)/i
              // Windows (iTunes)
            ],
            [
              NAME,
              VERSION
            ],
            [
              /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i
              // Windows Phone
            ],
            [
              NAME,
              [
                VERSION,
                strMapper,
                windowsVersionMap
              ]
            ],
            [
              /windows nt 6\.2; (arm)/i,
              /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
              /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i
            ],
            [
              [
                VERSION,
                strMapper,
                windowsVersionMap
              ],
              [
                NAME,
                "Windows"
              ]
            ],
            [
              // iOS/macOS
              /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
              /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
              /cfnetwork\/.+darwin/i
            ],
            [
              [
                VERSION,
                /_/g,
                "."
              ],
              [
                NAME,
                "iOS"
              ]
            ],
            [
              /(mac os x) ?([\w\. ]*)/i,
              /(macintosh|mac_powerpc\b)(?!.+haiku)/i
              // Mac OS
            ],
            [
              [
                NAME,
                MAC_OS
              ],
              [
                VERSION,
                /_/g,
                "."
              ]
            ],
            [
              // Mobile OSes
              /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i
              // Android-x86/HarmonyOS
            ],
            [
              VERSION,
              NAME
            ],
            [
              /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
              /(blackberry)\w*\/([\w\.]*)/i,
              /(tizen|kaios)[\/ ]([\w\.]+)/i,
              /\((series40);/i
              // Series 40
            ],
            [
              NAME,
              VERSION
            ],
            [
              /\(bb(10);/i
              // BlackBerry 10
            ],
            [
              VERSION,
              [
                NAME,
                BLACKBERRY
              ]
            ],
            [
              /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i
              // Symbian
            ],
            [
              VERSION,
              [
                NAME,
                "Symbian"
              ]
            ],
            [
              /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
              // Firefox OS
            ],
            [
              VERSION,
              [
                NAME,
                FIREFOX + " OS"
              ]
            ],
            [
              /web0s;.+rt(tv)/i,
              /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i
              // WebOS
            ],
            [
              VERSION,
              [
                NAME,
                "webOS"
              ]
            ],
            [
              /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
              // watchOS
            ],
            [
              VERSION,
              [
                NAME,
                "watchOS"
              ]
            ],
            [
              // Google Chromecast
              /crkey\/([\d\.]+)/i
              // Google Chromecast
            ],
            [
              VERSION,
              [
                NAME,
                CHROME + "cast"
              ]
            ],
            [
              /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
              // Chromium OS
            ],
            [
              [
                NAME,
                CHROMIUM_OS
              ],
              VERSION
            ],
            [
              // Smart TVs
              /panasonic;(viera)/i,
              /(netrange)mmh/i,
              /(nettv)\/(\d+\.[\w\.]+)/i,
              // Console
              /(nintendo|playstation) ([wids345portablevuch]+)/i,
              /(xbox); +xbox ([^\);]+)/i,
              // Other
              /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
              /(mint)[\/\(\) ]?(\w*)/i,
              /(mageia|vectorlinux)[; ]/i,
              /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
              // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
              /(hurd|linux) ?([\w\.]*)/i,
              /(gnu) ?([\w\.]*)/i,
              /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
              /(haiku) (\w+)/i
              // Haiku
            ],
            [
              NAME,
              VERSION
            ],
            [
              /(sunos) ?([\w\.\d]*)/i
              // Solaris
            ],
            [
              [
                NAME,
                "Solaris"
              ],
              VERSION
            ],
            [
              /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
              /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
              /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
              /(unix) ?([\w\.]*)/i
              // UNIX
            ],
            [
              NAME,
              VERSION
            ]
          ]
        };
        var UAParser = /* @__PURE__ */ __name(function(ua, extensions) {
          if (typeof ua === OBJ_TYPE) {
            extensions = ua;
            ua = undefined2;
          }
          if (!(this instanceof UAParser)) {
            return new UAParser(ua, extensions).getResult();
          }
          var _navigator = typeof window1 !== UNDEF_TYPE && window1.navigator ? window1.navigator : undefined2;
          var _ua = ua || (_navigator && _navigator.userAgent ? _navigator.userAgent : EMPTY);
          var _uach = _navigator && _navigator.userAgentData ? _navigator.userAgentData : undefined2;
          var _rgxmap = extensions ? extend(regexes, extensions) : regexes;
          var _isSelfNav = _navigator && _navigator.userAgent == _ua;
          this.getBrowser = function() {
            var _browser = {};
            _browser[NAME] = undefined2;
            _browser[VERSION] = undefined2;
            rgxMapper.call(_browser, _ua, _rgxmap.browser);
            _browser[MAJOR] = majorize(_browser[VERSION]);
            if (_isSelfNav && _navigator && _navigator.brave && typeof _navigator.brave.isBrave == FUNC_TYPE) {
              _browser[NAME] = "Brave";
            }
            return _browser;
          };
          this.getCPU = function() {
            var _cpu = {};
            _cpu[ARCHITECTURE] = undefined2;
            rgxMapper.call(_cpu, _ua, _rgxmap.cpu);
            return _cpu;
          };
          this.getDevice = function() {
            var _device = {};
            _device[VENDOR] = undefined2;
            _device[MODEL] = undefined2;
            _device[TYPE] = undefined2;
            rgxMapper.call(_device, _ua, _rgxmap.device);
            if (_isSelfNav && !_device[TYPE] && _uach && _uach.mobile) {
              _device[TYPE] = MOBILE;
            }
            if (_isSelfNav && _device[MODEL] == "Macintosh" && _navigator && typeof _navigator.standalone !== UNDEF_TYPE && _navigator.maxTouchPoints && _navigator.maxTouchPoints > 2) {
              _device[MODEL] = "iPad";
              _device[TYPE] = TABLET;
            }
            return _device;
          };
          this.getEngine = function() {
            var _engine = {};
            _engine[NAME] = undefined2;
            _engine[VERSION] = undefined2;
            rgxMapper.call(_engine, _ua, _rgxmap.engine);
            return _engine;
          };
          this.getOS = function() {
            var _os = {};
            _os[NAME] = undefined2;
            _os[VERSION] = undefined2;
            rgxMapper.call(_os, _ua, _rgxmap.os);
            if (_isSelfNav && !_os[NAME] && _uach && _uach.platform && _uach.platform != "Unknown") {
              _os[NAME] = _uach.platform.replace(/chrome os/i, CHROMIUM_OS).replace(/macos/i, MAC_OS);
            }
            return _os;
          };
          this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.getEngine(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            };
          };
          this.getUA = function() {
            return _ua;
          };
          this.setUA = function(ua2) {
            _ua = typeof ua2 === STR_TYPE && ua2.length > UA_MAX_LENGTH ? trim(ua2, UA_MAX_LENGTH) : ua2;
            return this;
          };
          this.setUA(_ua);
          return this;
        }, "UAParser");
        UAParser.VERSION = LIBVERSION;
        UAParser.BROWSER = enumerize([
          NAME,
          VERSION,
          MAJOR
        ]);
        UAParser.CPU = enumerize([
          ARCHITECTURE
        ]);
        UAParser.DEVICE = enumerize([
          MODEL,
          VENDOR,
          TYPE,
          CONSOLE,
          MOBILE,
          SMARTTV,
          TABLET,
          WEARABLE,
          EMBEDDED
        ]);
        UAParser.ENGINE = UAParser.OS = enumerize([
          NAME,
          VERSION
        ]);
        if (typeof exports !== UNDEF_TYPE) {
          if (typeof module !== UNDEF_TYPE && module.exports) {
            exports = module.exports = UAParser;
          }
          exports.UAParser = UAParser;
        } else {
          if (typeof define === FUNC_TYPE && define.amd) {
            define(function() {
              return UAParser;
            });
          } else if (typeof window1 !== UNDEF_TYPE) {
            window1.UAParser = UAParser;
          }
        }
        var $ = typeof window1 !== UNDEF_TYPE && (window1.jQuery || window1.Zepto);
        if ($ && !$.ua) {
          var parser = new UAParser();
          $.ua = parser.getResult();
          $.ua.get = function() {
            return parser.getUA();
          };
          $.ua.set = function(ua) {
            parser.setUA(ua);
            var result = parser.getResult();
            for (var prop in result) {
              $.ua[prop] = result[prop];
            }
          };
        }
      })(typeof window === "object" ? window : exports);
    }
  });

  // node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/Logger.js
  var require_Logger = __commonJS({
    "node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/Logger.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Logger = void 0;
      var debug_1 = __importDefault(require_browser());
      var APP_NAME = "mediasoup-client";
      var _a2;
      var Logger = (_a2 = class {
        constructor(prefix) {
          if (prefix) {
            this._debug = (0, debug_1.default)(`${APP_NAME}:${prefix}`);
            this._warn = (0, debug_1.default)(`${APP_NAME}:WARN:${prefix}`);
            this._error = (0, debug_1.default)(`${APP_NAME}:ERROR:${prefix}`);
          } else {
            this._debug = (0, debug_1.default)(APP_NAME);
            this._warn = (0, debug_1.default)(`${APP_NAME}:WARN`);
            this._error = (0, debug_1.default)(`${APP_NAME}:ERROR`);
          }
          this._debug.log = console.info.bind(console);
          this._warn.log = console.warn.bind(console);
          this._error.log = console.error.bind(console);
        }
        get debug() {
          return this._debug;
        }
        get warn() {
          return this._warn;
        }
        get error() {
          return this._error;
        }
      }, __name(_a2, "Logger"), _a2);
      exports.Logger = Logger;
    }
  });

  // node_modules/.pnpm/events@3.3.0/node_modules/events/events.js
  var require_events = __commonJS({
    "node_modules/.pnpm/events@3.3.0/node_modules/events/events.js"(exports, module) {
      "use strict";
      var R = typeof Reflect === "object" ? Reflect : null;
      var ReflectApply = R && typeof R.apply === "function" ? R.apply : /* @__PURE__ */ __name(function ReflectApply2(target, receiver, args) {
        return Function.prototype.apply.call(target, receiver, args);
      }, "ReflectApply");
      var ReflectOwnKeys;
      if (R && typeof R.ownKeys === "function") {
        ReflectOwnKeys = R.ownKeys;
      } else if (Object.getOwnPropertySymbols) {
        ReflectOwnKeys = /* @__PURE__ */ __name(function ReflectOwnKeys2(target) {
          return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
        }, "ReflectOwnKeys");
      } else {
        ReflectOwnKeys = /* @__PURE__ */ __name(function ReflectOwnKeys2(target) {
          return Object.getOwnPropertyNames(target);
        }, "ReflectOwnKeys");
      }
      function ProcessEmitWarning(warning) {
        if (console && console.warn) console.warn(warning);
      }
      __name(ProcessEmitWarning, "ProcessEmitWarning");
      var NumberIsNaN = Number.isNaN || /* @__PURE__ */ __name(function NumberIsNaN2(value2) {
        return value2 !== value2;
      }, "NumberIsNaN");
      function EventEmitter() {
        EventEmitter.init.call(this);
      }
      __name(EventEmitter, "EventEmitter");
      module.exports = EventEmitter;
      module.exports.once = once;
      EventEmitter.EventEmitter = EventEmitter;
      EventEmitter.prototype._events = void 0;
      EventEmitter.prototype._eventsCount = 0;
      EventEmitter.prototype._maxListeners = void 0;
      var defaultMaxListeners = 10;
      function checkListener(listener) {
        if (typeof listener !== "function") {
          throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
        }
      }
      __name(checkListener, "checkListener");
      Object.defineProperty(EventEmitter, "defaultMaxListeners", {
        enumerable: true,
        get: /* @__PURE__ */ __name(function() {
          return defaultMaxListeners;
        }, "get"),
        set: /* @__PURE__ */ __name(function(arg) {
          if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) {
            throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
          }
          defaultMaxListeners = arg;
        }, "set")
      });
      EventEmitter.init = function() {
        if (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) {
          this._events = /* @__PURE__ */ Object.create(null);
          this._eventsCount = 0;
        }
        this._maxListeners = this._maxListeners || void 0;
      };
      EventEmitter.prototype.setMaxListeners = /* @__PURE__ */ __name(function setMaxListeners(n) {
        if (typeof n !== "number" || n < 0 || NumberIsNaN(n)) {
          throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
        }
        this._maxListeners = n;
        return this;
      }, "setMaxListeners");
      function _getMaxListeners(that) {
        if (that._maxListeners === void 0) return EventEmitter.defaultMaxListeners;
        return that._maxListeners;
      }
      __name(_getMaxListeners, "_getMaxListeners");
      EventEmitter.prototype.getMaxListeners = /* @__PURE__ */ __name(function getMaxListeners() {
        return _getMaxListeners(this);
      }, "getMaxListeners");
      EventEmitter.prototype.emit = /* @__PURE__ */ __name(function emit(type) {
        var args = [];
        for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
        var doError = type === "error";
        var events = this._events;
        if (events !== void 0) doError = doError && events.error === void 0;
        else if (!doError) return false;
        if (doError) {
          var er;
          if (args.length > 0) er = args[0];
          if (er instanceof Error) {
            throw er;
          }
          var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
          err.context = er;
          throw err;
        }
        var handler = events[type];
        if (handler === void 0) return false;
        if (typeof handler === "function") {
          ReflectApply(handler, this, args);
        } else {
          var len = handler.length;
          var listeners = arrayClone(handler, len);
          for (var i = 0; i < len; ++i) ReflectApply(listeners[i], this, args);
        }
        return true;
      }, "emit");
      function _addListener(target, type, listener, prepend) {
        var m;
        var events;
        var existing;
        checkListener(listener);
        events = target._events;
        if (events === void 0) {
          events = target._events = /* @__PURE__ */ Object.create(null);
          target._eventsCount = 0;
        } else {
          if (events.newListener !== void 0) {
            target.emit("newListener", type, listener.listener ? listener.listener : listener);
            events = target._events;
          }
          existing = events[type];
        }
        if (existing === void 0) {
          existing = events[type] = listener;
          ++target._eventsCount;
        } else {
          if (typeof existing === "function") {
            existing = events[type] = prepend ? [
              listener,
              existing
            ] : [
              existing,
              listener
            ];
          } else if (prepend) {
            existing.unshift(listener);
          } else {
            existing.push(listener);
          }
          m = _getMaxListeners(target);
          if (m > 0 && existing.length > m && !existing.warned) {
            existing.warned = true;
            var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            w.name = "MaxListenersExceededWarning";
            w.emitter = target;
            w.type = type;
            w.count = existing.length;
            ProcessEmitWarning(w);
          }
        }
        return target;
      }
      __name(_addListener, "_addListener");
      EventEmitter.prototype.addListener = /* @__PURE__ */ __name(function addListener(type, listener) {
        return _addListener(this, type, listener, false);
      }, "addListener");
      EventEmitter.prototype.on = EventEmitter.prototype.addListener;
      EventEmitter.prototype.prependListener = /* @__PURE__ */ __name(function prependListener(type, listener) {
        return _addListener(this, type, listener, true);
      }, "prependListener");
      function onceWrapper() {
        if (!this.fired) {
          this.target.removeListener(this.type, this.wrapFn);
          this.fired = true;
          if (arguments.length === 0) return this.listener.call(this.target);
          return this.listener.apply(this.target, arguments);
        }
      }
      __name(onceWrapper, "onceWrapper");
      function _onceWrap(target, type, listener) {
        var state = {
          fired: false,
          wrapFn: void 0,
          target,
          type,
          listener
        };
        var wrapped = onceWrapper.bind(state);
        wrapped.listener = listener;
        state.wrapFn = wrapped;
        return wrapped;
      }
      __name(_onceWrap, "_onceWrap");
      EventEmitter.prototype.once = /* @__PURE__ */ __name(function once2(type, listener) {
        checkListener(listener);
        this.on(type, _onceWrap(this, type, listener));
        return this;
      }, "once");
      EventEmitter.prototype.prependOnceListener = /* @__PURE__ */ __name(function prependOnceListener(type, listener) {
        checkListener(listener);
        this.prependListener(type, _onceWrap(this, type, listener));
        return this;
      }, "prependOnceListener");
      EventEmitter.prototype.removeListener = /* @__PURE__ */ __name(function removeListener(type, listener) {
        var list, events, position, i, originalListener;
        checkListener(listener);
        events = this._events;
        if (events === void 0) return this;
        list = events[type];
        if (list === void 0) return this;
        if (list === listener || list.listener === listener) {
          if (--this._eventsCount === 0) this._events = /* @__PURE__ */ Object.create(null);
          else {
            delete events[type];
            if (events.removeListener) this.emit("removeListener", type, list.listener || listener);
          }
        } else if (typeof list !== "function") {
          position = -1;
          for (i = list.length - 1; i >= 0; i--) {
            if (list[i] === listener || list[i].listener === listener) {
              originalListener = list[i].listener;
              position = i;
              break;
            }
          }
          if (position < 0) return this;
          if (position === 0) list.shift();
          else {
            spliceOne(list, position);
          }
          if (list.length === 1) events[type] = list[0];
          if (events.removeListener !== void 0) this.emit("removeListener", type, originalListener || listener);
        }
        return this;
      }, "removeListener");
      EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
      EventEmitter.prototype.removeAllListeners = /* @__PURE__ */ __name(function removeAllListeners(type) {
        var listeners, events, i;
        events = this._events;
        if (events === void 0) return this;
        if (events.removeListener === void 0) {
          if (arguments.length === 0) {
            this._events = /* @__PURE__ */ Object.create(null);
            this._eventsCount = 0;
          } else if (events[type] !== void 0) {
            if (--this._eventsCount === 0) this._events = /* @__PURE__ */ Object.create(null);
            else delete events[type];
          }
          return this;
        }
        if (arguments.length === 0) {
          var keys = Object.keys(events);
          var key;
          for (i = 0; i < keys.length; ++i) {
            key = keys[i];
            if (key === "removeListener") continue;
            this.removeAllListeners(key);
          }
          this.removeAllListeners("removeListener");
          this._events = /* @__PURE__ */ Object.create(null);
          this._eventsCount = 0;
          return this;
        }
        listeners = events[type];
        if (typeof listeners === "function") {
          this.removeListener(type, listeners);
        } else if (listeners !== void 0) {
          for (i = listeners.length - 1; i >= 0; i--) {
            this.removeListener(type, listeners[i]);
          }
        }
        return this;
      }, "removeAllListeners");
      function _listeners(target, type, unwrap) {
        var events = target._events;
        if (events === void 0) return [];
        var evlistener = events[type];
        if (evlistener === void 0) return [];
        if (typeof evlistener === "function") return unwrap ? [
          evlistener.listener || evlistener
        ] : [
          evlistener
        ];
        return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
      }
      __name(_listeners, "_listeners");
      EventEmitter.prototype.listeners = /* @__PURE__ */ __name(function listeners(type) {
        return _listeners(this, type, true);
      }, "listeners");
      EventEmitter.prototype.rawListeners = /* @__PURE__ */ __name(function rawListeners(type) {
        return _listeners(this, type, false);
      }, "rawListeners");
      EventEmitter.listenerCount = function(emitter, type) {
        if (typeof emitter.listenerCount === "function") {
          return emitter.listenerCount(type);
        } else {
          return listenerCount.call(emitter, type);
        }
      };
      EventEmitter.prototype.listenerCount = listenerCount;
      function listenerCount(type) {
        var events = this._events;
        if (events !== void 0) {
          var evlistener = events[type];
          if (typeof evlistener === "function") {
            return 1;
          } else if (evlistener !== void 0) {
            return evlistener.length;
          }
        }
        return 0;
      }
      __name(listenerCount, "listenerCount");
      EventEmitter.prototype.eventNames = /* @__PURE__ */ __name(function eventNames() {
        return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
      }, "eventNames");
      function arrayClone(arr, n) {
        var copy = new Array(n);
        for (var i = 0; i < n; ++i) copy[i] = arr[i];
        return copy;
      }
      __name(arrayClone, "arrayClone");
      function spliceOne(list, index) {
        for (; index + 1 < list.length; index++) list[index] = list[index + 1];
        list.pop();
      }
      __name(spliceOne, "spliceOne");
      function unwrapListeners(arr) {
        var ret = new Array(arr.length);
        for (var i = 0; i < ret.length; ++i) {
          ret[i] = arr[i].listener || arr[i];
        }
        return ret;
      }
      __name(unwrapListeners, "unwrapListeners");
      function once(emitter, name) {
        return new Promise(function(resolve, reject) {
          function errorListener(err) {
            emitter.removeListener(name, resolver);
            reject(err);
          }
          __name(errorListener, "errorListener");
          function resolver() {
            if (typeof emitter.removeListener === "function") {
              emitter.removeListener("error", errorListener);
            }
            resolve([].slice.call(arguments));
          }
          __name(resolver, "resolver");
          ;
          eventTargetAgnosticAddListener(emitter, name, resolver, {
            once: true
          });
          if (name !== "error") {
            addErrorHandlerIfEventEmitter(emitter, errorListener, {
              once: true
            });
          }
        });
      }
      __name(once, "once");
      function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
        if (typeof emitter.on === "function") {
          eventTargetAgnosticAddListener(emitter, "error", handler, flags);
        }
      }
      __name(addErrorHandlerIfEventEmitter, "addErrorHandlerIfEventEmitter");
      function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
        if (typeof emitter.on === "function") {
          if (flags.once) {
            emitter.once(name, listener);
          } else {
            emitter.on(name, listener);
          }
        } else if (typeof emitter.addEventListener === "function") {
          emitter.addEventListener(name, /* @__PURE__ */ __name(function wrapListener(arg) {
            if (flags.once) {
              emitter.removeEventListener(name, wrapListener);
            }
            listener(arg);
          }, "wrapListener"));
        } else {
          throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
        }
      }
      __name(eventTargetAgnosticAddListener, "eventTargetAgnosticAddListener");
    }
  });

  // node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/enhancedEvents.js
  var require_enhancedEvents = __commonJS({
    "node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/enhancedEvents.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.EnhancedEventEmitter = void 0;
      var npm_events_package_1 = require_events();
      var Logger_1 = require_Logger();
      var enhancedEventEmitterLogger = new Logger_1.Logger("EnhancedEventEmitter");
      var _a2;
      var EnhancedEventEmitter = (_a2 = class extends npm_events_package_1.EventEmitter {
        constructor() {
          super();
          this.setMaxListeners(Infinity);
        }
        emit(eventName, ...args) {
          return super.emit(eventName, ...args);
        }
        /**
         * Special addition to the EventEmitter API.
         */
        safeEmit(eventName, ...args) {
          try {
            return super.emit(eventName, ...args);
          } catch (error) {
            enhancedEventEmitterLogger.error("safeEmit() | event listener threw an error [eventName:%s]:%o", eventName, error);
            try {
              super.emit("listenererror", eventName, error);
            } catch (error2) {
            }
            return Boolean(super.listenerCount(eventName));
          }
        }
        on(eventName, listener) {
          super.on(eventName, listener);
          return this;
        }
        off(eventName, listener) {
          super.off(eventName, listener);
          return this;
        }
        addListener(eventName, listener) {
          super.on(eventName, listener);
          return this;
        }
        prependListener(eventName, listener) {
          super.prependListener(eventName, listener);
          return this;
        }
        once(eventName, listener) {
          super.once(eventName, listener);
          return this;
        }
        prependOnceListener(eventName, listener) {
          super.prependOnceListener(eventName, listener);
          return this;
        }
        removeListener(eventName, listener) {
          super.off(eventName, listener);
          return this;
        }
        removeAllListeners(eventName) {
          super.removeAllListeners(eventName);
          return this;
        }
        listenerCount(eventName) {
          return super.listenerCount(eventName);
        }
        listeners(eventName) {
          return super.listeners(eventName);
        }
        rawListeners(eventName) {
          return super.rawListeners(eventName);
        }
      }, __name(_a2, "EnhancedEventEmitter"), _a2);
      exports.EnhancedEventEmitter = EnhancedEventEmitter;
    }
  });

  // node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/errors.js
  var require_errors = __commonJS({
    "node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/errors.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.InvalidStateError = exports.UnsupportedError = void 0;
      var _a2;
      var UnsupportedError = (_a2 = class extends Error {
        constructor(message) {
          super(message);
          this.name = "UnsupportedError";
          if (Error.hasOwnProperty("captureStackTrace")) {
            Error.captureStackTrace(this, _a2);
          } else {
            this.stack = new Error(message).stack;
          }
        }
      }, __name(_a2, "UnsupportedError"), _a2);
      exports.UnsupportedError = UnsupportedError;
      var _a3;
      var InvalidStateError = (_a3 = class extends Error {
        constructor(message) {
          super(message);
          this.name = "InvalidStateError";
          if (Error.hasOwnProperty("captureStackTrace")) {
            Error.captureStackTrace(this, _a3);
          } else {
            this.stack = new Error(message).stack;
          }
        }
      }, __name(_a3, "InvalidStateError"), _a3);
      exports.InvalidStateError = InvalidStateError;
    }
  });

  // node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/utils.js
  var require_utils = __commonJS({
    "node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/utils.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.clone = clone;
      exports.generateRandomNumber = generateRandomNumber;
      exports.deepFreeze = deepFreeze;
      function clone(value2) {
        if (value2 === void 0) {
          return void 0;
        } else if (Number.isNaN(value2)) {
          return NaN;
        } else if (typeof structuredClone === "function") {
          return structuredClone(value2);
        } else {
          return JSON.parse(JSON.stringify(value2));
        }
      }
      __name(clone, "clone");
      function generateRandomNumber() {
        return Math.round(Math.random() * 1e7);
      }
      __name(generateRandomNumber, "generateRandomNumber");
      function deepFreeze(object) {
        const propNames = Reflect.ownKeys(object);
        for (const name of propNames) {
          const value2 = object[name];
          if (value2 && typeof value2 === "object" || typeof value2 === "function") {
            deepFreeze(value2);
          }
        }
        return Object.freeze(object);
      }
      __name(deepFreeze, "deepFreeze");
    }
  });

  // node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js
  var require_ms2 = __commonJS({
    "node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js"(exports, module) {
      var s = 1e3;
      var m = s * 60;
      var h = m * 60;
      var d = h * 24;
      var w = d * 7;
      var y = d * 365.25;
      module.exports = function(val, options) {
        options = options || {};
        var type = typeof val;
        if (type === "string" && val.length > 0) {
          return parse2(val);
        } else if (type === "number" && isFinite(val)) {
          return options.long ? fmtLong(val) : fmtShort(val);
        }
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
      };
      function parse2(str) {
        str = String(str);
        if (str.length > 100) {
          return;
        }
        var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
        if (!match) {
          return;
        }
        var n = parseFloat(match[1]);
        var type = (match[2] || "ms").toLowerCase();
        switch (type) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return n * y;
          case "weeks":
          case "week":
          case "w":
            return n * w;
          case "days":
          case "day":
          case "d":
            return n * d;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return n * h;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return n * m;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return n * s;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return n;
          default:
            return void 0;
        }
      }
      __name(parse2, "parse");
      function fmtShort(ms) {
        var msAbs = Math.abs(ms);
        if (msAbs >= d) {
          return Math.round(ms / d) + "d";
        }
        if (msAbs >= h) {
          return Math.round(ms / h) + "h";
        }
        if (msAbs >= m) {
          return Math.round(ms / m) + "m";
        }
        if (msAbs >= s) {
          return Math.round(ms / s) + "s";
        }
        return ms + "ms";
      }
      __name(fmtShort, "fmtShort");
      function fmtLong(ms) {
        var msAbs = Math.abs(ms);
        if (msAbs >= d) {
          return plural(ms, msAbs, d, "day");
        }
        if (msAbs >= h) {
          return plural(ms, msAbs, h, "hour");
        }
        if (msAbs >= m) {
          return plural(ms, msAbs, m, "minute");
        }
        if (msAbs >= s) {
          return plural(ms, msAbs, s, "second");
        }
        return ms + " ms";
      }
      __name(fmtLong, "fmtLong");
      function plural(ms, msAbs, n, name) {
        var isPlural = msAbs >= n * 1.5;
        return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
      }
      __name(plural, "plural");
    }
  });

  // node_modules/.pnpm/debug@4.3.7_supports-color@9.4.0/node_modules/debug/src/common.js
  var require_common2 = __commonJS({
    "node_modules/.pnpm/debug@4.3.7_supports-color@9.4.0/node_modules/debug/src/common.js"(exports, module) {
      function setup(env) {
        createDebug.debug = createDebug;
        createDebug.default = createDebug;
        createDebug.coerce = coerce;
        createDebug.disable = disable;
        createDebug.enable = enable;
        createDebug.enabled = enabled;
        createDebug.humanize = require_ms2();
        createDebug.destroy = destroy;
        Object.keys(env).forEach((key) => {
          createDebug[key] = env[key];
        });
        createDebug.names = [];
        createDebug.skips = [];
        createDebug.formatters = {};
        function selectColor(namespace) {
          let hash = 0;
          for (let i = 0; i < namespace.length; i++) {
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0;
          }
          return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
        }
        __name(selectColor, "selectColor");
        createDebug.selectColor = selectColor;
        function createDebug(namespace) {
          let prevTime;
          let enableOverride = null;
          let namespacesCache;
          let enabledCache;
          function debug(...args) {
            if (!debug.enabled) {
              return;
            }
            const self2 = debug;
            const curr = Number(/* @__PURE__ */ new Date());
            const ms = curr - (prevTime || curr);
            self2.diff = ms;
            self2.prev = prevTime;
            self2.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);
            if (typeof args[0] !== "string") {
              args.unshift("%O");
            }
            let index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
              if (match === "%%") {
                return "%";
              }
              index++;
              const formatter = createDebug.formatters[format];
              if (typeof formatter === "function") {
                const val = args[index];
                match = formatter.call(self2, val);
                args.splice(index, 1);
                index--;
              }
              return match;
            });
            createDebug.formatArgs.call(self2, args);
            const logFn = self2.log || createDebug.log;
            logFn.apply(self2, args);
          }
          __name(debug, "debug");
          debug.namespace = namespace;
          debug.useColors = createDebug.useColors();
          debug.color = createDebug.selectColor(namespace);
          debug.extend = extend;
          debug.destroy = createDebug.destroy;
          Object.defineProperty(debug, "enabled", {
            enumerable: true,
            configurable: false,
            get: /* @__PURE__ */ __name(() => {
              if (enableOverride !== null) {
                return enableOverride;
              }
              if (namespacesCache !== createDebug.namespaces) {
                namespacesCache = createDebug.namespaces;
                enabledCache = createDebug.enabled(namespace);
              }
              return enabledCache;
            }, "get"),
            set: /* @__PURE__ */ __name((v) => {
              enableOverride = v;
            }, "set")
          });
          if (typeof createDebug.init === "function") {
            createDebug.init(debug);
          }
          return debug;
        }
        __name(createDebug, "createDebug");
        function extend(namespace, delimiter) {
          const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
          newDebug.log = this.log;
          return newDebug;
        }
        __name(extend, "extend");
        function enable(namespaces) {
          createDebug.save(namespaces);
          createDebug.namespaces = namespaces;
          createDebug.names = [];
          createDebug.skips = [];
          let i;
          const split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
          const len = split.length;
          for (i = 0; i < len; i++) {
            if (!split[i]) {
              continue;
            }
            namespaces = split[i].replace(/\*/g, ".*?");
            if (namespaces[0] === "-") {
              createDebug.skips.push(new RegExp("^" + namespaces.slice(1) + "$"));
            } else {
              createDebug.names.push(new RegExp("^" + namespaces + "$"));
            }
          }
        }
        __name(enable, "enable");
        function disable() {
          const namespaces = [
            ...createDebug.names.map(toNamespace),
            ...createDebug.skips.map(toNamespace).map((namespace) => "-" + namespace)
          ].join(",");
          createDebug.enable("");
          return namespaces;
        }
        __name(disable, "disable");
        function enabled(name) {
          if (name[name.length - 1] === "*") {
            return true;
          }
          let i;
          let len;
          for (i = 0, len = createDebug.skips.length; i < len; i++) {
            if (createDebug.skips[i].test(name)) {
              return false;
            }
          }
          for (i = 0, len = createDebug.names.length; i < len; i++) {
            if (createDebug.names[i].test(name)) {
              return true;
            }
          }
          return false;
        }
        __name(enabled, "enabled");
        function toNamespace(regexp) {
          return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
        }
        __name(toNamespace, "toNamespace");
        function coerce(val) {
          if (val instanceof Error) {
            return val.stack || val.message;
          }
          return val;
        }
        __name(coerce, "coerce");
        function destroy() {
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
        __name(destroy, "destroy");
        createDebug.enable(createDebug.load());
        return createDebug;
      }
      __name(setup, "setup");
      module.exports = setup;
    }
  });

  // node_modules/.pnpm/debug@4.3.7_supports-color@9.4.0/node_modules/debug/src/browser.js
  var require_browser2 = __commonJS({
    "node_modules/.pnpm/debug@4.3.7_supports-color@9.4.0/node_modules/debug/src/browser.js"(exports, module) {
      exports.formatArgs = formatArgs;
      exports.save = save;
      exports.load = load;
      exports.useColors = useColors;
      exports.storage = localstorage();
      exports.destroy = /* @__PURE__ */ (() => {
        let warned = false;
        return () => {
          if (!warned) {
            warned = true;
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
          }
        };
      })();
      exports.colors = [
        "#0000CC",
        "#0000FF",
        "#0033CC",
        "#0033FF",
        "#0066CC",
        "#0066FF",
        "#0099CC",
        "#0099FF",
        "#00CC00",
        "#00CC33",
        "#00CC66",
        "#00CC99",
        "#00CCCC",
        "#00CCFF",
        "#3300CC",
        "#3300FF",
        "#3333CC",
        "#3333FF",
        "#3366CC",
        "#3366FF",
        "#3399CC",
        "#3399FF",
        "#33CC00",
        "#33CC33",
        "#33CC66",
        "#33CC99",
        "#33CCCC",
        "#33CCFF",
        "#6600CC",
        "#6600FF",
        "#6633CC",
        "#6633FF",
        "#66CC00",
        "#66CC33",
        "#9900CC",
        "#9900FF",
        "#9933CC",
        "#9933FF",
        "#99CC00",
        "#99CC33",
        "#CC0000",
        "#CC0033",
        "#CC0066",
        "#CC0099",
        "#CC00CC",
        "#CC00FF",
        "#CC3300",
        "#CC3333",
        "#CC3366",
        "#CC3399",
        "#CC33CC",
        "#CC33FF",
        "#CC6600",
        "#CC6633",
        "#CC9900",
        "#CC9933",
        "#CCCC00",
        "#CCCC33",
        "#FF0000",
        "#FF0033",
        "#FF0066",
        "#FF0099",
        "#FF00CC",
        "#FF00FF",
        "#FF3300",
        "#FF3333",
        "#FF3366",
        "#FF3399",
        "#FF33CC",
        "#FF33FF",
        "#FF6600",
        "#FF6633",
        "#FF9900",
        "#FF9933",
        "#FFCC00",
        "#FFCC33"
      ];
      function useColors() {
        if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
          return true;
        }
        if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
          return false;
        }
        let m;
        return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
        typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
        // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
        typeof navigator !== "undefined" && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
        typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
      }
      __name(useColors, "useColors");
      function formatArgs(args) {
        args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
        if (!this.useColors) {
          return;
        }
        const c = "color: " + this.color;
        args.splice(1, 0, c, "color: inherit");
        let index = 0;
        let lastC = 0;
        args[0].replace(/%[a-zA-Z%]/g, (match) => {
          if (match === "%%") {
            return;
          }
          index++;
          if (match === "%c") {
            lastC = index;
          }
        });
        args.splice(lastC, 0, c);
      }
      __name(formatArgs, "formatArgs");
      exports.log = console.debug || console.log || (() => {
      });
      function save(namespaces) {
        try {
          if (namespaces) {
            exports.storage.setItem("debug", namespaces);
          } else {
            exports.storage.removeItem("debug");
          }
        } catch (error) {
        }
      }
      __name(save, "save");
      function load() {
        let r;
        try {
          r = exports.storage.getItem("debug");
        } catch (error) {
        }
        if (!r && typeof process !== "undefined" && "env" in process) {
          r = process.env.DEBUG;
        }
        return r;
      }
      __name(load, "load");
      function localstorage() {
        try {
          return localStorage;
        } catch (error) {
        }
      }
      __name(localstorage, "localstorage");
      module.exports = require_common2()(exports);
      var { formatters } = module.exports;
      formatters.j = function(v) {
        try {
          return JSON.stringify(v);
        } catch (error) {
          return "[UnexpectedJSONParseError]: " + error.message;
        }
      };
    }
  });

  // node_modules/.pnpm/h264-profile-level-id@2.0.0_supports-color@9.4.0/node_modules/h264-profile-level-id/lib/Logger.js
  var require_Logger2 = __commonJS({
    "node_modules/.pnpm/h264-profile-level-id@2.0.0_supports-color@9.4.0/node_modules/h264-profile-level-id/lib/Logger.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Logger = void 0;
      var debug_1 = __importDefault(require_browser2());
      var APP_NAME = "h264-profile-level-id";
      var _a2;
      var Logger = (_a2 = class {
        constructor(prefix) {
          if (prefix) {
            this._debug = (0, debug_1.default)(`${APP_NAME}:${prefix}`);
            this._warn = (0, debug_1.default)(`${APP_NAME}:WARN:${prefix}`);
            this._error = (0, debug_1.default)(`${APP_NAME}:ERROR:${prefix}`);
          } else {
            this._debug = (0, debug_1.default)(APP_NAME);
            this._warn = (0, debug_1.default)(`${APP_NAME}:WARN`);
            this._error = (0, debug_1.default)(`${APP_NAME}:ERROR`);
          }
          this._debug.log = console.info.bind(console);
          this._warn.log = console.warn.bind(console);
          this._error.log = console.error.bind(console);
        }
        get debug() {
          return this._debug;
        }
        get warn() {
          return this._warn;
        }
        get error() {
          return this._error;
        }
      }, __name(_a2, "Logger"), _a2);
      exports.Logger = Logger;
    }
  });

  // node_modules/.pnpm/h264-profile-level-id@2.0.0_supports-color@9.4.0/node_modules/h264-profile-level-id/lib/index.js
  var require_lib = __commonJS({
    "node_modules/.pnpm/h264-profile-level-id@2.0.0_supports-color@9.4.0/node_modules/h264-profile-level-id/lib/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.generateProfileLevelIdStringForAnswer = exports.isSameProfile = exports.parseSdpProfileLevelId = exports.levelToString = exports.profileToString = exports.profileLevelIdToString = exports.parseProfileLevelId = exports.ProfileLevelId = exports.Level = exports.Profile = void 0;
      var Logger_1 = require_Logger2();
      var logger = new Logger_1.Logger();
      var Profile;
      (function(Profile2) {
        Profile2[Profile2["ConstrainedBaseline"] = 1] = "ConstrainedBaseline";
        Profile2[Profile2["Baseline"] = 2] = "Baseline";
        Profile2[Profile2["Main"] = 3] = "Main";
        Profile2[Profile2["ConstrainedHigh"] = 4] = "ConstrainedHigh";
        Profile2[Profile2["High"] = 5] = "High";
        Profile2[Profile2["PredictiveHigh444"] = 6] = "PredictiveHigh444";
      })(Profile || (exports.Profile = Profile = {}));
      var Level;
      (function(Level2) {
        Level2[Level2["L1_b"] = 0] = "L1_b";
        Level2[Level2["L1"] = 10] = "L1";
        Level2[Level2["L1_1"] = 11] = "L1_1";
        Level2[Level2["L1_2"] = 12] = "L1_2";
        Level2[Level2["L1_3"] = 13] = "L1_3";
        Level2[Level2["L2"] = 20] = "L2";
        Level2[Level2["L2_1"] = 21] = "L2_1";
        Level2[Level2["L2_2"] = 22] = "L2_2";
        Level2[Level2["L3"] = 30] = "L3";
        Level2[Level2["L3_1"] = 31] = "L3_1";
        Level2[Level2["L3_2"] = 32] = "L3_2";
        Level2[Level2["L4"] = 40] = "L4";
        Level2[Level2["L4_1"] = 41] = "L4_1";
        Level2[Level2["L4_2"] = 42] = "L4_2";
        Level2[Level2["L5"] = 50] = "L5";
        Level2[Level2["L5_1"] = 51] = "L5_1";
        Level2[Level2["L5_2"] = 52] = "L5_2";
      })(Level || (exports.Level = Level = {}));
      var _a2;
      var ProfileLevelId = (_a2 = class {
        constructor(profile, level) {
          this.profile = profile;
          this.level = level;
        }
      }, __name(_a2, "ProfileLevelId"), _a2);
      exports.ProfileLevelId = ProfileLevelId;
      var DefaultProfileLevelId = new ProfileLevelId(Profile.ConstrainedBaseline, Level.L3_1);
      var _a3;
      var BitPattern = (_a3 = class {
        constructor(str) {
          this.mask = ~byteMaskString("x", str);
          this.masked_value = byteMaskString("1", str);
        }
        isMatch(value2) {
          return this.masked_value === (value2 & this.mask);
        }
      }, __name(_a3, "BitPattern"), _a3);
      var _a4;
      var ProfilePattern = (_a4 = class {
        constructor(profile_idc, profile_iop, profile) {
          this.profile_idc = profile_idc;
          this.profile_iop = profile_iop;
          this.profile = profile;
        }
      }, __name(_a4, "ProfilePattern"), _a4);
      var ProfilePatterns = [
        new ProfilePattern(66, new BitPattern("x1xx0000"), Profile.ConstrainedBaseline),
        new ProfilePattern(77, new BitPattern("1xxx0000"), Profile.ConstrainedBaseline),
        new ProfilePattern(88, new BitPattern("11xx0000"), Profile.ConstrainedBaseline),
        new ProfilePattern(66, new BitPattern("x0xx0000"), Profile.Baseline),
        new ProfilePattern(88, new BitPattern("10xx0000"), Profile.Baseline),
        new ProfilePattern(77, new BitPattern("0x0x0000"), Profile.Main),
        new ProfilePattern(100, new BitPattern("00000000"), Profile.High),
        new ProfilePattern(100, new BitPattern("00001100"), Profile.ConstrainedHigh),
        new ProfilePattern(244, new BitPattern("00000000"), Profile.PredictiveHigh444)
      ];
      function parseProfileLevelId(str) {
        const ConstraintSet3Flag = 16;
        if (typeof str !== "string" || str.length !== 6) {
          return void 0;
        }
        const profile_level_id_numeric = parseInt(str, 16);
        if (profile_level_id_numeric === 0) {
          return void 0;
        }
        const level_idc = profile_level_id_numeric & 255;
        const profile_iop = profile_level_id_numeric >> 8 & 255;
        const profile_idc = profile_level_id_numeric >> 16 & 255;
        let level;
        switch (level_idc) {
          case Level.L1_1: {
            level = (profile_iop & ConstraintSet3Flag) !== 0 ? Level.L1_b : Level.L1_1;
            break;
          }
          case Level.L1:
          case Level.L1_2:
          case Level.L1_3:
          case Level.L2:
          case Level.L2_1:
          case Level.L2_2:
          case Level.L3:
          case Level.L3_1:
          case Level.L3_2:
          case Level.L4:
          case Level.L4_1:
          case Level.L4_2:
          case Level.L5:
          case Level.L5_1:
          case Level.L5_2: {
            level = level_idc;
            break;
          }
          // Unrecognized level_idc.
          default: {
            logger.warn(`parseProfileLevelId() | unrecognized level_idc [str:${str}, level_idc:${level_idc}]`);
            return void 0;
          }
        }
        for (const pattern of ProfilePatterns) {
          if (profile_idc === pattern.profile_idc && pattern.profile_iop.isMatch(profile_iop)) {
            return new ProfileLevelId(pattern.profile, level);
          }
        }
        logger.warn(`parseProfileLevelId() | unrecognized profile_idc/profile_iop combination [str:${str}, profile_idc:${profile_idc}, profile_iop:${profile_iop}]`);
        return void 0;
      }
      __name(parseProfileLevelId, "parseProfileLevelId");
      exports.parseProfileLevelId = parseProfileLevelId;
      function profileLevelIdToString(profile_level_id) {
        if (profile_level_id.level == Level.L1_b) {
          switch (profile_level_id.profile) {
            case Profile.ConstrainedBaseline: {
              return "42f00b";
            }
            case Profile.Baseline: {
              return "42100b";
            }
            case Profile.Main: {
              return "4d100b";
            }
            // Level 1_b is not allowed for other profiles.
            default: {
              logger.warn(`profileLevelIdToString() | Level 1_b not is allowed for profile ${profile_level_id.profile}`);
              return void 0;
            }
          }
        }
        let profile_idc_iop_string;
        switch (profile_level_id.profile) {
          case Profile.ConstrainedBaseline: {
            profile_idc_iop_string = "42e0";
            break;
          }
          case Profile.Baseline: {
            profile_idc_iop_string = "4200";
            break;
          }
          case Profile.Main: {
            profile_idc_iop_string = "4d00";
            break;
          }
          case Profile.ConstrainedHigh: {
            profile_idc_iop_string = "640c";
            break;
          }
          case Profile.High: {
            profile_idc_iop_string = "6400";
            break;
          }
          case Profile.PredictiveHigh444: {
            profile_idc_iop_string = "f400";
            break;
          }
          default: {
            logger.warn(`profileLevelIdToString() | unrecognized profile ${profile_level_id.profile}`);
            return void 0;
          }
        }
        let levelStr = profile_level_id.level.toString(16);
        if (levelStr.length === 1) {
          levelStr = `0${levelStr}`;
        }
        return `${profile_idc_iop_string}${levelStr}`;
      }
      __name(profileLevelIdToString, "profileLevelIdToString");
      exports.profileLevelIdToString = profileLevelIdToString;
      function profileToString(profile) {
        switch (profile) {
          case Profile.ConstrainedBaseline: {
            return "ConstrainedBaseline";
          }
          case Profile.Baseline: {
            return "Baseline";
          }
          case Profile.Main: {
            return "Main";
          }
          case Profile.ConstrainedHigh: {
            return "ConstrainedHigh";
          }
          case Profile.High: {
            return "High";
          }
          case Profile.PredictiveHigh444: {
            return "PredictiveHigh444";
          }
          default: {
            logger.warn(`profileToString() | unrecognized profile ${profile}`);
            return void 0;
          }
        }
      }
      __name(profileToString, "profileToString");
      exports.profileToString = profileToString;
      function levelToString(level) {
        switch (level) {
          case Level.L1_b: {
            return "1b";
          }
          case Level.L1: {
            return "1";
          }
          case Level.L1_1: {
            return "1.1";
          }
          case Level.L1_2: {
            return "1.2";
          }
          case Level.L1_3: {
            return "1.3";
          }
          case Level.L2: {
            return "2";
          }
          case Level.L2_1: {
            return "2.1";
          }
          case Level.L2_2: {
            return "2.2";
          }
          case Level.L3: {
            return "3";
          }
          case Level.L3_1: {
            return "3.1";
          }
          case Level.L3_2: {
            return "3.2";
          }
          case Level.L4: {
            return "4";
          }
          case Level.L4_1: {
            return "4.1";
          }
          case Level.L4_2: {
            return "4.2";
          }
          case Level.L5: {
            return "5";
          }
          case Level.L5_1: {
            return "5.1";
          }
          case Level.L5_2: {
            return "5.2";
          }
          default: {
            logger.warn(`levelToString() | unrecognized level ${level}`);
            return void 0;
          }
        }
      }
      __name(levelToString, "levelToString");
      exports.levelToString = levelToString;
      function parseSdpProfileLevelId(params = {}) {
        const profile_level_id = params["profile-level-id"];
        return profile_level_id ? parseProfileLevelId(profile_level_id) : DefaultProfileLevelId;
      }
      __name(parseSdpProfileLevelId, "parseSdpProfileLevelId");
      exports.parseSdpProfileLevelId = parseSdpProfileLevelId;
      function isSameProfile(params1 = {}, params2 = {}) {
        const profile_level_id_1 = parseSdpProfileLevelId(params1);
        const profile_level_id_2 = parseSdpProfileLevelId(params2);
        return Boolean(profile_level_id_1 && profile_level_id_2 && profile_level_id_1.profile === profile_level_id_2.profile);
      }
      __name(isSameProfile, "isSameProfile");
      exports.isSameProfile = isSameProfile;
      function generateProfileLevelIdStringForAnswer(local_supported_params = {}, remote_offered_params = {}) {
        if (!local_supported_params["profile-level-id"] && !remote_offered_params["profile-level-id"]) {
          logger.warn("generateProfileLevelIdStringForAnswer() | profile-level-id missing in local and remote params");
          return void 0;
        }
        const local_profile_level_id = parseSdpProfileLevelId(local_supported_params);
        const remote_profile_level_id = parseSdpProfileLevelId(remote_offered_params);
        if (!local_profile_level_id) {
          throw new TypeError("invalid local_profile_level_id");
        }
        if (!remote_profile_level_id) {
          throw new TypeError("invalid remote_profile_level_id");
        }
        if (local_profile_level_id.profile !== remote_profile_level_id.profile) {
          throw new TypeError("H264 Profile mismatch");
        }
        const level_asymmetry_allowed = isLevelAsymmetryAllowed(local_supported_params) && isLevelAsymmetryAllowed(remote_offered_params);
        const local_level = local_profile_level_id.level;
        const remote_level = remote_profile_level_id.level;
        const min_level = minLevel(local_level, remote_level);
        const answer_level = level_asymmetry_allowed ? local_level : min_level;
        logger.debug(`generateProfileLevelIdStringForAnswer() | result [profile:${local_profile_level_id.profile}, level:${answer_level}]`);
        return profileLevelIdToString(new ProfileLevelId(local_profile_level_id.profile, answer_level));
      }
      __name(generateProfileLevelIdStringForAnswer, "generateProfileLevelIdStringForAnswer");
      exports.generateProfileLevelIdStringForAnswer = generateProfileLevelIdStringForAnswer;
      function byteMaskString(c, str) {
        return Number(str[0] === c) << 7 | Number(str[1] === c) << 6 | Number(str[2] === c) << 5 | Number(str[3] === c) << 4 | Number(str[4] === c) << 3 | Number(str[5] === c) << 2 | Number(str[6] === c) << 1 | Number(str[7] === c) << 0;
      }
      __name(byteMaskString, "byteMaskString");
      function isLessLevel(a, b) {
        if (a === Level.L1_b) {
          return b !== Level.L1 && b !== Level.L1_b;
        }
        if (b === Level.L1_b) {
          return a !== Level.L1;
        }
        return a < b;
      }
      __name(isLessLevel, "isLessLevel");
      function minLevel(a, b) {
        return isLessLevel(a, b) ? a : b;
      }
      __name(minLevel, "minLevel");
      function isLevelAsymmetryAllowed(params = {}) {
        const level_asymmetry_allowed = params["level-asymmetry-allowed"];
        return level_asymmetry_allowed === true || level_asymmetry_allowed === 1 || level_asymmetry_allowed === "1";
      }
      __name(isLevelAsymmetryAllowed, "isLevelAsymmetryAllowed");
    }
  });

  // node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/ortc.js
  var require_ortc = __commonJS({
    "node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/ortc.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: /* @__PURE__ */ __name(function() {
              return m[k];
            }, "get")
          };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", {
          enumerable: true,
          value: v
        });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.validateRtpCapabilities = validateRtpCapabilities;
      exports.validateRtpParameters = validateRtpParameters;
      exports.validateSctpStreamParameters = validateSctpStreamParameters;
      exports.validateSctpCapabilities = validateSctpCapabilities;
      exports.getExtendedRtpCapabilities = getExtendedRtpCapabilities;
      exports.getRecvRtpCapabilities = getRecvRtpCapabilities;
      exports.getSendingRtpParameters = getSendingRtpParameters;
      exports.getSendingRemoteRtpParameters = getSendingRemoteRtpParameters;
      exports.reduceCodecs = reduceCodecs;
      exports.generateProbatorRtpParameters = generateProbatorRtpParameters;
      exports.canSend = canSend;
      exports.canReceive = canReceive;
      var h264 = __importStar(require_lib());
      var utils = __importStar(require_utils());
      var RTP_PROBATOR_MID = "probator";
      var RTP_PROBATOR_SSRC = 1234;
      var RTP_PROBATOR_CODEC_PAYLOAD_TYPE = 127;
      function validateRtpCapabilities(caps) {
        if (typeof caps !== "object") {
          throw new TypeError("caps is not an object");
        }
        if (caps.codecs && !Array.isArray(caps.codecs)) {
          throw new TypeError("caps.codecs is not an array");
        } else if (!caps.codecs) {
          caps.codecs = [];
        }
        for (const codec of caps.codecs) {
          validateRtpCodecCapability(codec);
        }
        if (caps.headerExtensions && !Array.isArray(caps.headerExtensions)) {
          throw new TypeError("caps.headerExtensions is not an array");
        } else if (!caps.headerExtensions) {
          caps.headerExtensions = [];
        }
        for (const ext of caps.headerExtensions) {
          validateRtpHeaderExtension(ext);
        }
      }
      __name(validateRtpCapabilities, "validateRtpCapabilities");
      function validateRtpParameters(params) {
        if (typeof params !== "object") {
          throw new TypeError("params is not an object");
        }
        if (params.mid && typeof params.mid !== "string") {
          throw new TypeError("params.mid is not a string");
        }
        if (!Array.isArray(params.codecs)) {
          throw new TypeError("missing params.codecs");
        }
        for (const codec of params.codecs) {
          validateRtpCodecParameters(codec);
        }
        if (params.headerExtensions && !Array.isArray(params.headerExtensions)) {
          throw new TypeError("params.headerExtensions is not an array");
        } else if (!params.headerExtensions) {
          params.headerExtensions = [];
        }
        for (const ext of params.headerExtensions) {
          validateRtpHeaderExtensionParameters(ext);
        }
        if (params.encodings && !Array.isArray(params.encodings)) {
          throw new TypeError("params.encodings is not an array");
        } else if (!params.encodings) {
          params.encodings = [];
        }
        for (const encoding of params.encodings) {
          validateRtpEncodingParameters(encoding);
        }
        if (params.rtcp && typeof params.rtcp !== "object") {
          throw new TypeError("params.rtcp is not an object");
        } else if (!params.rtcp) {
          params.rtcp = {};
        }
        validateRtcpParameters(params.rtcp);
      }
      __name(validateRtpParameters, "validateRtpParameters");
      function validateSctpStreamParameters(params) {
        if (typeof params !== "object") {
          throw new TypeError("params is not an object");
        }
        if (typeof params.streamId !== "number") {
          throw new TypeError("missing params.streamId");
        }
        let orderedGiven = false;
        if (typeof params.ordered === "boolean") {
          orderedGiven = true;
        } else {
          params.ordered = true;
        }
        if (params.maxPacketLifeTime && typeof params.maxPacketLifeTime !== "number") {
          throw new TypeError("invalid params.maxPacketLifeTime");
        }
        if (params.maxRetransmits && typeof params.maxRetransmits !== "number") {
          throw new TypeError("invalid params.maxRetransmits");
        }
        if (params.maxPacketLifeTime && params.maxRetransmits) {
          throw new TypeError("cannot provide both maxPacketLifeTime and maxRetransmits");
        }
        if (orderedGiven && params.ordered && (params.maxPacketLifeTime || params.maxRetransmits)) {
          throw new TypeError("cannot be ordered with maxPacketLifeTime or maxRetransmits");
        } else if (!orderedGiven && (params.maxPacketLifeTime || params.maxRetransmits)) {
          params.ordered = false;
        }
        if (params.label && typeof params.label !== "string") {
          throw new TypeError("invalid params.label");
        }
        if (params.protocol && typeof params.protocol !== "string") {
          throw new TypeError("invalid params.protocol");
        }
      }
      __name(validateSctpStreamParameters, "validateSctpStreamParameters");
      function validateSctpCapabilities(caps) {
        if (typeof caps !== "object") {
          throw new TypeError("caps is not an object");
        }
        if (!caps.numStreams || typeof caps.numStreams !== "object") {
          throw new TypeError("missing caps.numStreams");
        }
        validateNumSctpStreams(caps.numStreams);
      }
      __name(validateSctpCapabilities, "validateSctpCapabilities");
      function getExtendedRtpCapabilities(localCaps, remoteCaps) {
        const extendedRtpCapabilities = {
          codecs: [],
          headerExtensions: []
        };
        for (const remoteCodec of remoteCaps.codecs ?? []) {
          if (isRtxCodec(remoteCodec)) {
            continue;
          }
          const matchingLocalCodec = (localCaps.codecs ?? []).find((localCodec) => matchCodecs(localCodec, remoteCodec, {
            strict: true,
            modify: true
          }));
          if (!matchingLocalCodec) {
            continue;
          }
          const extendedCodec = {
            mimeType: matchingLocalCodec.mimeType,
            kind: matchingLocalCodec.kind,
            clockRate: matchingLocalCodec.clockRate,
            channels: matchingLocalCodec.channels,
            localPayloadType: matchingLocalCodec.preferredPayloadType,
            localRtxPayloadType: void 0,
            remotePayloadType: remoteCodec.preferredPayloadType,
            remoteRtxPayloadType: void 0,
            localParameters: matchingLocalCodec.parameters,
            remoteParameters: remoteCodec.parameters,
            rtcpFeedback: reduceRtcpFeedback(matchingLocalCodec, remoteCodec)
          };
          extendedRtpCapabilities.codecs.push(extendedCodec);
        }
        for (const extendedCodec of extendedRtpCapabilities.codecs) {
          const matchingLocalRtxCodec = localCaps.codecs.find((localCodec) => isRtxCodec(localCodec) && localCodec.parameters.apt === extendedCodec.localPayloadType);
          const matchingRemoteRtxCodec = remoteCaps.codecs.find((remoteCodec) => isRtxCodec(remoteCodec) && remoteCodec.parameters.apt === extendedCodec.remotePayloadType);
          if (matchingLocalRtxCodec && matchingRemoteRtxCodec) {
            extendedCodec.localRtxPayloadType = matchingLocalRtxCodec.preferredPayloadType;
            extendedCodec.remoteRtxPayloadType = matchingRemoteRtxCodec.preferredPayloadType;
          }
        }
        for (const remoteExt of remoteCaps.headerExtensions) {
          const matchingLocalExt = localCaps.headerExtensions.find((localExt) => matchHeaderExtensions(localExt, remoteExt));
          if (!matchingLocalExt) {
            continue;
          }
          const extendedExt = {
            kind: remoteExt.kind,
            uri: remoteExt.uri,
            sendId: matchingLocalExt.preferredId,
            recvId: remoteExt.preferredId,
            encrypt: matchingLocalExt.preferredEncrypt,
            direction: "sendrecv"
          };
          switch (remoteExt.direction) {
            case "sendrecv": {
              extendedExt.direction = "sendrecv";
              break;
            }
            case "recvonly": {
              extendedExt.direction = "sendonly";
              break;
            }
            case "sendonly": {
              extendedExt.direction = "recvonly";
              break;
            }
            case "inactive": {
              extendedExt.direction = "inactive";
              break;
            }
          }
          extendedRtpCapabilities.headerExtensions.push(extendedExt);
        }
        return extendedRtpCapabilities;
      }
      __name(getExtendedRtpCapabilities, "getExtendedRtpCapabilities");
      function getRecvRtpCapabilities(extendedRtpCapabilities) {
        const rtpCapabilities = {
          codecs: [],
          headerExtensions: []
        };
        for (const extendedCodec of extendedRtpCapabilities.codecs) {
          const codec = {
            mimeType: extendedCodec.mimeType,
            kind: extendedCodec.kind,
            preferredPayloadType: extendedCodec.remotePayloadType,
            clockRate: extendedCodec.clockRate,
            channels: extendedCodec.channels,
            parameters: extendedCodec.localParameters,
            rtcpFeedback: extendedCodec.rtcpFeedback
          };
          rtpCapabilities.codecs.push(codec);
          if (!extendedCodec.remoteRtxPayloadType) {
            continue;
          }
          const rtxCodec = {
            mimeType: `${extendedCodec.kind}/rtx`,
            kind: extendedCodec.kind,
            preferredPayloadType: extendedCodec.remoteRtxPayloadType,
            clockRate: extendedCodec.clockRate,
            parameters: {
              apt: extendedCodec.remotePayloadType
            },
            rtcpFeedback: []
          };
          rtpCapabilities.codecs.push(rtxCodec);
        }
        for (const extendedExtension of extendedRtpCapabilities.headerExtensions) {
          if (extendedExtension.direction !== "sendrecv" && extendedExtension.direction !== "recvonly") {
            continue;
          }
          const ext = {
            kind: extendedExtension.kind,
            uri: extendedExtension.uri,
            preferredId: extendedExtension.recvId,
            preferredEncrypt: extendedExtension.encrypt,
            direction: extendedExtension.direction
          };
          rtpCapabilities.headerExtensions.push(ext);
        }
        return rtpCapabilities;
      }
      __name(getRecvRtpCapabilities, "getRecvRtpCapabilities");
      function getSendingRtpParameters(kind, extendedRtpCapabilities) {
        const rtpParameters = {
          mid: void 0,
          codecs: [],
          headerExtensions: [],
          encodings: [],
          rtcp: {}
        };
        for (const extendedCodec of extendedRtpCapabilities.codecs) {
          if (extendedCodec.kind !== kind) {
            continue;
          }
          const codec = {
            mimeType: extendedCodec.mimeType,
            payloadType: extendedCodec.localPayloadType,
            clockRate: extendedCodec.clockRate,
            channels: extendedCodec.channels,
            parameters: extendedCodec.localParameters,
            rtcpFeedback: extendedCodec.rtcpFeedback
          };
          rtpParameters.codecs.push(codec);
          if (extendedCodec.localRtxPayloadType) {
            const rtxCodec = {
              mimeType: `${extendedCodec.kind}/rtx`,
              payloadType: extendedCodec.localRtxPayloadType,
              clockRate: extendedCodec.clockRate,
              parameters: {
                apt: extendedCodec.localPayloadType
              },
              rtcpFeedback: []
            };
            rtpParameters.codecs.push(rtxCodec);
          }
        }
        for (const extendedExtension of extendedRtpCapabilities.headerExtensions) {
          if (extendedExtension.kind && extendedExtension.kind !== kind || extendedExtension.direction !== "sendrecv" && extendedExtension.direction !== "sendonly") {
            continue;
          }
          const ext = {
            uri: extendedExtension.uri,
            id: extendedExtension.sendId,
            encrypt: extendedExtension.encrypt,
            parameters: {}
          };
          rtpParameters.headerExtensions.push(ext);
        }
        return rtpParameters;
      }
      __name(getSendingRtpParameters, "getSendingRtpParameters");
      function getSendingRemoteRtpParameters(kind, extendedRtpCapabilities) {
        const rtpParameters = {
          mid: void 0,
          codecs: [],
          headerExtensions: [],
          encodings: [],
          rtcp: {}
        };
        for (const extendedCodec of extendedRtpCapabilities.codecs) {
          if (extendedCodec.kind !== kind) {
            continue;
          }
          const codec = {
            mimeType: extendedCodec.mimeType,
            payloadType: extendedCodec.localPayloadType,
            clockRate: extendedCodec.clockRate,
            channels: extendedCodec.channels,
            parameters: extendedCodec.remoteParameters,
            rtcpFeedback: extendedCodec.rtcpFeedback
          };
          rtpParameters.codecs.push(codec);
          if (extendedCodec.localRtxPayloadType) {
            const rtxCodec = {
              mimeType: `${extendedCodec.kind}/rtx`,
              payloadType: extendedCodec.localRtxPayloadType,
              clockRate: extendedCodec.clockRate,
              parameters: {
                apt: extendedCodec.localPayloadType
              },
              rtcpFeedback: []
            };
            rtpParameters.codecs.push(rtxCodec);
          }
        }
        for (const extendedExtension of extendedRtpCapabilities.headerExtensions) {
          if (extendedExtension.kind && extendedExtension.kind !== kind || extendedExtension.direction !== "sendrecv" && extendedExtension.direction !== "sendonly") {
            continue;
          }
          const ext = {
            uri: extendedExtension.uri,
            id: extendedExtension.sendId,
            encrypt: extendedExtension.encrypt,
            parameters: {}
          };
          rtpParameters.headerExtensions.push(ext);
        }
        if (rtpParameters.headerExtensions.some((ext) => ext.uri === "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01")) {
          for (const codec of rtpParameters.codecs) {
            codec.rtcpFeedback = (codec.rtcpFeedback ?? []).filter((fb) => fb.type !== "goog-remb");
          }
        } else if (rtpParameters.headerExtensions.some((ext) => ext.uri === "http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time")) {
          for (const codec of rtpParameters.codecs) {
            codec.rtcpFeedback = (codec.rtcpFeedback ?? []).filter((fb) => fb.type !== "transport-cc");
          }
        } else {
          for (const codec of rtpParameters.codecs) {
            codec.rtcpFeedback = (codec.rtcpFeedback ?? []).filter((fb) => fb.type !== "transport-cc" && fb.type !== "goog-remb");
          }
        }
        return rtpParameters;
      }
      __name(getSendingRemoteRtpParameters, "getSendingRemoteRtpParameters");
      function reduceCodecs(codecs, capCodec) {
        const filteredCodecs = [];
        if (!capCodec) {
          filteredCodecs.push(codecs[0]);
          if (isRtxCodec(codecs[1])) {
            filteredCodecs.push(codecs[1]);
          }
        } else {
          for (let idx = 0; idx < codecs.length; ++idx) {
            if (matchCodecs(codecs[idx], capCodec, {
              strict: true
            })) {
              filteredCodecs.push(codecs[idx]);
              if (isRtxCodec(codecs[idx + 1])) {
                filteredCodecs.push(codecs[idx + 1]);
              }
              break;
            }
          }
          if (filteredCodecs.length === 0) {
            throw new TypeError("no matching codec found");
          }
        }
        return filteredCodecs;
      }
      __name(reduceCodecs, "reduceCodecs");
      function generateProbatorRtpParameters(videoRtpParameters) {
        videoRtpParameters = utils.clone(videoRtpParameters);
        validateRtpParameters(videoRtpParameters);
        const rtpParameters = {
          mid: RTP_PROBATOR_MID,
          codecs: [],
          headerExtensions: [],
          encodings: [
            {
              ssrc: RTP_PROBATOR_SSRC
            }
          ],
          rtcp: {
            cname: "probator"
          }
        };
        rtpParameters.codecs.push(videoRtpParameters.codecs[0]);
        rtpParameters.codecs[0].payloadType = RTP_PROBATOR_CODEC_PAYLOAD_TYPE;
        rtpParameters.headerExtensions = videoRtpParameters.headerExtensions;
        return rtpParameters;
      }
      __name(generateProbatorRtpParameters, "generateProbatorRtpParameters");
      function canSend(kind, extendedRtpCapabilities) {
        return extendedRtpCapabilities.codecs.some((codec) => codec.kind === kind);
      }
      __name(canSend, "canSend");
      function canReceive(rtpParameters, extendedRtpCapabilities) {
        validateRtpParameters(rtpParameters);
        if (rtpParameters.codecs.length === 0) {
          return false;
        }
        const firstMediaCodec = rtpParameters.codecs[0];
        return extendedRtpCapabilities.codecs.some((codec) => codec.remotePayloadType === firstMediaCodec.payloadType);
      }
      __name(canReceive, "canReceive");
      function validateRtpCodecCapability(codec) {
        const MimeTypeRegex = new RegExp("^(audio|video)/(.+)", "i");
        if (typeof codec !== "object") {
          throw new TypeError("codec is not an object");
        }
        if (!codec.mimeType || typeof codec.mimeType !== "string") {
          throw new TypeError("missing codec.mimeType");
        }
        const mimeTypeMatch = MimeTypeRegex.exec(codec.mimeType);
        if (!mimeTypeMatch) {
          throw new TypeError("invalid codec.mimeType");
        }
        codec.kind = mimeTypeMatch[1].toLowerCase();
        if (codec.preferredPayloadType && typeof codec.preferredPayloadType !== "number") {
          throw new TypeError("invalid codec.preferredPayloadType");
        }
        if (typeof codec.clockRate !== "number") {
          throw new TypeError("missing codec.clockRate");
        }
        if (codec.kind === "audio") {
          if (typeof codec.channels !== "number") {
            codec.channels = 1;
          }
        } else {
          delete codec.channels;
        }
        if (!codec.parameters || typeof codec.parameters !== "object") {
          codec.parameters = {};
        }
        for (const key of Object.keys(codec.parameters)) {
          let value2 = codec.parameters[key];
          if (value2 === void 0) {
            codec.parameters[key] = "";
            value2 = "";
          }
          if (typeof value2 !== "string" && typeof value2 !== "number") {
            throw new TypeError(`invalid codec parameter [key:${key}s, value:${value2}]`);
          }
          if (key === "apt") {
            if (typeof value2 !== "number") {
              throw new TypeError("invalid codec apt parameter");
            }
          }
        }
        if (!codec.rtcpFeedback || !Array.isArray(codec.rtcpFeedback)) {
          codec.rtcpFeedback = [];
        }
        for (const fb of codec.rtcpFeedback) {
          validateRtcpFeedback(fb);
        }
      }
      __name(validateRtpCodecCapability, "validateRtpCodecCapability");
      function validateRtcpFeedback(fb) {
        if (typeof fb !== "object") {
          throw new TypeError("fb is not an object");
        }
        if (!fb.type || typeof fb.type !== "string") {
          throw new TypeError("missing fb.type");
        }
        if (!fb.parameter || typeof fb.parameter !== "string") {
          fb.parameter = "";
        }
      }
      __name(validateRtcpFeedback, "validateRtcpFeedback");
      function validateRtpHeaderExtension(ext) {
        if (typeof ext !== "object") {
          throw new TypeError("ext is not an object");
        }
        if (ext.kind !== "audio" && ext.kind !== "video") {
          throw new TypeError("invalid ext.kind");
        }
        if (!ext.uri || typeof ext.uri !== "string") {
          throw new TypeError("missing ext.uri");
        }
        if (typeof ext.preferredId !== "number") {
          throw new TypeError("missing ext.preferredId");
        }
        if (ext.preferredEncrypt && typeof ext.preferredEncrypt !== "boolean") {
          throw new TypeError("invalid ext.preferredEncrypt");
        } else if (!ext.preferredEncrypt) {
          ext.preferredEncrypt = false;
        }
        if (ext.direction && typeof ext.direction !== "string") {
          throw new TypeError("invalid ext.direction");
        } else if (!ext.direction) {
          ext.direction = "sendrecv";
        }
      }
      __name(validateRtpHeaderExtension, "validateRtpHeaderExtension");
      function validateRtpCodecParameters(codec) {
        const MimeTypeRegex = new RegExp("^(audio|video)/(.+)", "i");
        if (typeof codec !== "object") {
          throw new TypeError("codec is not an object");
        }
        if (!codec.mimeType || typeof codec.mimeType !== "string") {
          throw new TypeError("missing codec.mimeType");
        }
        const mimeTypeMatch = MimeTypeRegex.exec(codec.mimeType);
        if (!mimeTypeMatch) {
          throw new TypeError("invalid codec.mimeType");
        }
        if (typeof codec.payloadType !== "number") {
          throw new TypeError("missing codec.payloadType");
        }
        if (typeof codec.clockRate !== "number") {
          throw new TypeError("missing codec.clockRate");
        }
        const kind = mimeTypeMatch[1].toLowerCase();
        if (kind === "audio") {
          if (typeof codec.channels !== "number") {
            codec.channels = 1;
          }
        } else {
          delete codec.channels;
        }
        if (!codec.parameters || typeof codec.parameters !== "object") {
          codec.parameters = {};
        }
        for (const key of Object.keys(codec.parameters)) {
          let value2 = codec.parameters[key];
          if (value2 === void 0) {
            codec.parameters[key] = "";
            value2 = "";
          }
          if (typeof value2 !== "string" && typeof value2 !== "number") {
            throw new TypeError(`invalid codec parameter [key:${key}s, value:${value2}]`);
          }
          if (key === "apt") {
            if (typeof value2 !== "number") {
              throw new TypeError("invalid codec apt parameter");
            }
          }
        }
        if (!codec.rtcpFeedback || !Array.isArray(codec.rtcpFeedback)) {
          codec.rtcpFeedback = [];
        }
        for (const fb of codec.rtcpFeedback) {
          validateRtcpFeedback(fb);
        }
      }
      __name(validateRtpCodecParameters, "validateRtpCodecParameters");
      function validateRtpHeaderExtensionParameters(ext) {
        if (typeof ext !== "object") {
          throw new TypeError("ext is not an object");
        }
        if (!ext.uri || typeof ext.uri !== "string") {
          throw new TypeError("missing ext.uri");
        }
        if (typeof ext.id !== "number") {
          throw new TypeError("missing ext.id");
        }
        if (ext.encrypt && typeof ext.encrypt !== "boolean") {
          throw new TypeError("invalid ext.encrypt");
        } else if (!ext.encrypt) {
          ext.encrypt = false;
        }
        if (!ext.parameters || typeof ext.parameters !== "object") {
          ext.parameters = {};
        }
        for (const key of Object.keys(ext.parameters)) {
          let value2 = ext.parameters[key];
          if (value2 === void 0) {
            ext.parameters[key] = "";
            value2 = "";
          }
          if (typeof value2 !== "string" && typeof value2 !== "number") {
            throw new TypeError("invalid header extension parameter");
          }
        }
      }
      __name(validateRtpHeaderExtensionParameters, "validateRtpHeaderExtensionParameters");
      function validateRtpEncodingParameters(encoding) {
        if (typeof encoding !== "object") {
          throw new TypeError("encoding is not an object");
        }
        if (encoding.ssrc && typeof encoding.ssrc !== "number") {
          throw new TypeError("invalid encoding.ssrc");
        }
        if (encoding.rid && typeof encoding.rid !== "string") {
          throw new TypeError("invalid encoding.rid");
        }
        if (encoding.rtx && typeof encoding.rtx !== "object") {
          throw new TypeError("invalid encoding.rtx");
        } else if (encoding.rtx) {
          if (typeof encoding.rtx.ssrc !== "number") {
            throw new TypeError("missing encoding.rtx.ssrc");
          }
        }
        if (!encoding.dtx || typeof encoding.dtx !== "boolean") {
          encoding.dtx = false;
        }
        if (encoding.scalabilityMode && typeof encoding.scalabilityMode !== "string") {
          throw new TypeError("invalid encoding.scalabilityMode");
        }
      }
      __name(validateRtpEncodingParameters, "validateRtpEncodingParameters");
      function validateRtcpParameters(rtcp) {
        if (typeof rtcp !== "object") {
          throw new TypeError("rtcp is not an object");
        }
        if (rtcp.cname && typeof rtcp.cname !== "string") {
          throw new TypeError("invalid rtcp.cname");
        }
        if (!rtcp.reducedSize || typeof rtcp.reducedSize !== "boolean") {
          rtcp.reducedSize = true;
        }
      }
      __name(validateRtcpParameters, "validateRtcpParameters");
      function validateNumSctpStreams(numStreams) {
        if (typeof numStreams !== "object") {
          throw new TypeError("numStreams is not an object");
        }
        if (typeof numStreams.OS !== "number") {
          throw new TypeError("missing numStreams.OS");
        }
        if (typeof numStreams.MIS !== "number") {
          throw new TypeError("missing numStreams.MIS");
        }
      }
      __name(validateNumSctpStreams, "validateNumSctpStreams");
      function isRtxCodec(codec) {
        if (!codec) {
          return false;
        }
        return /.+\/rtx$/i.test(codec.mimeType);
      }
      __name(isRtxCodec, "isRtxCodec");
      function matchCodecs(aCodec, bCodec, { strict = false, modify = false } = {}) {
        const aMimeType = aCodec.mimeType.toLowerCase();
        const bMimeType = bCodec.mimeType.toLowerCase();
        if (aMimeType !== bMimeType) {
          return false;
        }
        if (aCodec.clockRate !== bCodec.clockRate) {
          return false;
        }
        if (aCodec.channels !== bCodec.channels) {
          return false;
        }
        switch (aMimeType) {
          case "video/h264": {
            if (strict) {
              const aPacketizationMode = aCodec.parameters["packetization-mode"] || 0;
              const bPacketizationMode = bCodec.parameters["packetization-mode"] || 0;
              if (aPacketizationMode !== bPacketizationMode) {
                return false;
              }
              if (!h264.isSameProfile(aCodec.parameters, bCodec.parameters)) {
                return false;
              }
              let selectedProfileLevelId;
              try {
                selectedProfileLevelId = h264.generateProfileLevelIdStringForAnswer(aCodec.parameters, bCodec.parameters);
              } catch (error) {
                return false;
              }
              if (modify) {
                if (selectedProfileLevelId) {
                  aCodec.parameters["profile-level-id"] = selectedProfileLevelId;
                  bCodec.parameters["profile-level-id"] = selectedProfileLevelId;
                } else {
                  delete aCodec.parameters["profile-level-id"];
                  delete bCodec.parameters["profile-level-id"];
                }
              }
            }
            break;
          }
          case "video/vp9": {
            if (strict) {
              const aProfileId = aCodec.parameters["profile-id"] || 0;
              const bProfileId = bCodec.parameters["profile-id"] || 0;
              if (aProfileId !== bProfileId) {
                return false;
              }
            }
            break;
          }
        }
        return true;
      }
      __name(matchCodecs, "matchCodecs");
      function matchHeaderExtensions(aExt, bExt) {
        if (aExt.kind && bExt.kind && aExt.kind !== bExt.kind) {
          return false;
        }
        if (aExt.uri !== bExt.uri) {
          return false;
        }
        return true;
      }
      __name(matchHeaderExtensions, "matchHeaderExtensions");
      function reduceRtcpFeedback(codecA, codecB) {
        const reducedRtcpFeedback = [];
        for (const aFb of codecA.rtcpFeedback ?? []) {
          const matchingBFb = (codecB.rtcpFeedback ?? []).find((bFb) => bFb.type === aFb.type && (bFb.parameter === aFb.parameter || !bFb.parameter && !aFb.parameter));
          if (matchingBFb) {
            reducedRtcpFeedback.push(matchingBFb);
          }
        }
        return reducedRtcpFeedback;
      }
      __name(reduceRtcpFeedback, "reduceRtcpFeedback");
    }
  });

  // node_modules/.pnpm/awaitqueue@3.0.2_supports-color@9.4.0/node_modules/awaitqueue/lib/Logger.js
  var require_Logger3 = __commonJS({
    "node_modules/.pnpm/awaitqueue@3.0.2_supports-color@9.4.0/node_modules/awaitqueue/lib/Logger.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Logger = void 0;
      var debug_1 = require_browser2();
      var LIB_NAME = "awaitqueue";
      var _a2;
      var Logger = (_a2 = class {
        constructor(prefix) {
          if (prefix) {
            this._debug = (0, debug_1.default)(`${LIB_NAME}:${prefix}`);
            this._warn = (0, debug_1.default)(`${LIB_NAME}:WARN:${prefix}`);
            this._error = (0, debug_1.default)(`${LIB_NAME}:ERROR:${prefix}`);
          } else {
            this._debug = (0, debug_1.default)(LIB_NAME);
            this._warn = (0, debug_1.default)(`${LIB_NAME}:WARN`);
            this._error = (0, debug_1.default)(`${LIB_NAME}:ERROR`);
          }
          this._debug.log = console.info.bind(console);
          this._warn.log = console.warn.bind(console);
          this._error.log = console.error.bind(console);
        }
        get debug() {
          return this._debug;
        }
        get warn() {
          return this._warn;
        }
        get error() {
          return this._error;
        }
      }, __name(_a2, "Logger"), _a2);
      exports.Logger = Logger;
    }
  });

  // node_modules/.pnpm/awaitqueue@3.0.2_supports-color@9.4.0/node_modules/awaitqueue/lib/index.js
  var require_lib2 = __commonJS({
    "node_modules/.pnpm/awaitqueue@3.0.2_supports-color@9.4.0/node_modules/awaitqueue/lib/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.AwaitQueue = exports.AwaitQueueRemovedTaskError = exports.AwaitQueueStoppedError = void 0;
      var Logger_1 = require_Logger3();
      var logger = new Logger_1.Logger();
      var _a2;
      var AwaitQueueStoppedError = (_a2 = class extends Error {
        constructor(message) {
          super(message ?? "AwaitQueue stopped");
          this.name = "AwaitQueueStoppedError";
          if (typeof Error.captureStackTrace === "function") {
            Error.captureStackTrace(this, _a2);
          }
        }
      }, __name(_a2, "AwaitQueueStoppedError"), _a2);
      exports.AwaitQueueStoppedError = AwaitQueueStoppedError;
      var _a3;
      var AwaitQueueRemovedTaskError = (_a3 = class extends Error {
        constructor(message) {
          super(message ?? "AwaitQueue task removed");
          this.name = "AwaitQueueRemovedTaskError";
          if (typeof Error.captureStackTrace === "function") {
            Error.captureStackTrace(this, _a3);
          }
        }
      }, __name(_a3, "AwaitQueueRemovedTaskError"), _a3);
      exports.AwaitQueueRemovedTaskError = AwaitQueueRemovedTaskError;
      var _a4;
      var AwaitQueue = (_a4 = class {
        constructor() {
          this.pendingTasks = /* @__PURE__ */ new Map();
          this.nextTaskId = 0;
          this.stopping = false;
        }
        get size() {
          return this.pendingTasks.size;
        }
        async push(task, name) {
          name = name ?? task.name;
          logger.debug(`push() [name:${name}]`);
          if (typeof task !== "function") {
            throw new TypeError("given task is not a function");
          }
          if (name) {
            try {
              Object.defineProperty(task, "name", {
                value: name
              });
            } catch (error) {
            }
          }
          return new Promise((resolve, reject) => {
            const pendingTask = {
              id: this.nextTaskId++,
              task,
              name,
              enqueuedAt: Date.now(),
              executedAt: void 0,
              completed: false,
              resolve: /* @__PURE__ */ __name((result) => {
                if (pendingTask.completed) {
                  return;
                }
                pendingTask.completed = true;
                this.pendingTasks.delete(pendingTask.id);
                logger.debug(`resolving task [name:${pendingTask.name}]`);
                resolve(result);
                const [nextPendingTask] = this.pendingTasks.values();
                if (nextPendingTask && !nextPendingTask.executedAt) {
                  void this.execute(nextPendingTask);
                }
              }, "resolve"),
              reject: /* @__PURE__ */ __name((error) => {
                if (pendingTask.completed) {
                  return;
                }
                pendingTask.completed = true;
                this.pendingTasks.delete(pendingTask.id);
                logger.debug(`rejecting task [name:${pendingTask.name}]: %s`, String(error));
                reject(error);
                if (!this.stopping) {
                  const [nextPendingTask] = this.pendingTasks.values();
                  if (nextPendingTask && !nextPendingTask.executedAt) {
                    void this.execute(nextPendingTask);
                  }
                }
              }, "reject")
            };
            this.pendingTasks.set(pendingTask.id, pendingTask);
            if (this.pendingTasks.size === 1) {
              void this.execute(pendingTask);
            }
          });
        }
        stop() {
          logger.debug("stop()");
          this.stopping = true;
          for (const pendingTask of this.pendingTasks.values()) {
            logger.debug(`stop() | stopping task [name:${pendingTask.name}]`);
            pendingTask.reject(new AwaitQueueStoppedError());
          }
          this.stopping = false;
        }
        remove(taskIdx) {
          logger.debug(`remove() [taskIdx:${taskIdx}]`);
          const pendingTask = Array.from(this.pendingTasks.values())[taskIdx];
          if (!pendingTask) {
            logger.debug(`stop() | no task with given idx [taskIdx:${taskIdx}]`);
            return;
          }
          pendingTask.reject(new AwaitQueueRemovedTaskError());
        }
        dump() {
          const now = Date.now();
          let idx = 0;
          return Array.from(this.pendingTasks.values()).map((pendingTask) => ({
            idx: idx++,
            task: pendingTask.task,
            name: pendingTask.name,
            enqueuedTime: pendingTask.executedAt ? pendingTask.executedAt - pendingTask.enqueuedAt : now - pendingTask.enqueuedAt,
            executionTime: pendingTask.executedAt ? now - pendingTask.executedAt : 0
          }));
        }
        async execute(pendingTask) {
          logger.debug(`execute() [name:${pendingTask.name}]`);
          if (pendingTask.executedAt) {
            throw new Error("task already being executed");
          }
          pendingTask.executedAt = Date.now();
          try {
            const result = await pendingTask.task();
            pendingTask.resolve(result);
          } catch (error) {
            pendingTask.reject(error);
          }
        }
      }, __name(_a4, "AwaitQueue"), _a4);
      exports.AwaitQueue = AwaitQueue;
    }
  });

  // node_modules/.pnpm/queue-microtask@1.2.3/node_modules/queue-microtask/index.js
  var require_queue_microtask = __commonJS({
    "node_modules/.pnpm/queue-microtask@1.2.3/node_modules/queue-microtask/index.js"(exports, module) {
      var promise;
      module.exports = typeof queueMicrotask === "function" ? queueMicrotask.bind(typeof window !== "undefined" ? window : global) : (cb) => (promise || (promise = Promise.resolve())).then(cb).catch((err) => setTimeout(() => {
        throw err;
      }, 0));
    }
  });

  // node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/Producer.js
  var require_Producer = __commonJS({
    "node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/Producer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Producer = void 0;
      var Logger_1 = require_Logger();
      var enhancedEvents_1 = require_enhancedEvents();
      var errors_1 = require_errors();
      var logger = new Logger_1.Logger("Producer");
      var _a2;
      var Producer = (_a2 = class extends enhancedEvents_1.EnhancedEventEmitter {
        constructor({ id, localId, rtpSender, track, rtpParameters, stopTracks, disableTrackOnPause, zeroRtpOnPause, appData }) {
          super();
          this._closed = false;
          this._observer = new enhancedEvents_1.EnhancedEventEmitter();
          logger.debug("constructor()");
          this._id = id;
          this._localId = localId;
          this._rtpSender = rtpSender;
          this._track = track;
          this._kind = track.kind;
          this._rtpParameters = rtpParameters;
          this._paused = disableTrackOnPause ? !track.enabled : false;
          this._maxSpatialLayer = void 0;
          this._stopTracks = stopTracks;
          this._disableTrackOnPause = disableTrackOnPause;
          this._zeroRtpOnPause = zeroRtpOnPause;
          this._appData = appData ?? {};
          this.onTrackEnded = this.onTrackEnded.bind(this);
          this.handleTrack();
        }
        /**
         * Producer id.
         */
        get id() {
          return this._id;
        }
        /**
         * Local id.
         */
        get localId() {
          return this._localId;
        }
        /**
         * Whether the Producer is closed.
         */
        get closed() {
          return this._closed;
        }
        /**
         * Media kind.
         */
        get kind() {
          return this._kind;
        }
        /**
         * Associated RTCRtpSender.
         */
        get rtpSender() {
          return this._rtpSender;
        }
        /**
         * The associated track.
         */
        get track() {
          return this._track;
        }
        /**
         * RTP parameters.
         */
        get rtpParameters() {
          return this._rtpParameters;
        }
        /**
         * Whether the Producer is paused.
         */
        get paused() {
          return this._paused;
        }
        /**
         * Max spatial layer.
         *
         * @type {Number | undefined}
         */
        get maxSpatialLayer() {
          return this._maxSpatialLayer;
        }
        /**
         * App custom data.
         */
        get appData() {
          return this._appData;
        }
        /**
         * App custom data setter.
         */
        set appData(appData) {
          this._appData = appData;
        }
        get observer() {
          return this._observer;
        }
        /**
         * Closes the Producer.
         */
        close() {
          if (this._closed) {
            return;
          }
          logger.debug("close()");
          this._closed = true;
          this.destroyTrack();
          this.emit("@close");
          this._observer.safeEmit("close");
        }
        /**
         * Transport was closed.
         */
        transportClosed() {
          if (this._closed) {
            return;
          }
          logger.debug("transportClosed()");
          this._closed = true;
          this.destroyTrack();
          this.safeEmit("transportclose");
          this._observer.safeEmit("close");
        }
        /**
         * Get associated RTCRtpSender stats.
         */
        async getStats() {
          if (this._closed) {
            throw new errors_1.InvalidStateError("closed");
          }
          return new Promise((resolve, reject) => {
            this.safeEmit("@getstats", resolve, reject);
          });
        }
        /**
         * Pauses sending media.
         */
        pause() {
          logger.debug("pause()");
          if (this._closed) {
            logger.error("pause() | Producer closed");
            return;
          }
          this._paused = true;
          if (this._track && this._disableTrackOnPause) {
            this._track.enabled = false;
          }
          if (this._zeroRtpOnPause) {
            new Promise((resolve, reject) => {
              this.safeEmit("@pause", resolve, reject);
            }).catch(() => {
            });
          }
          this._observer.safeEmit("pause");
        }
        /**
         * Resumes sending media.
         */
        resume() {
          logger.debug("resume()");
          if (this._closed) {
            logger.error("resume() | Producer closed");
            return;
          }
          this._paused = false;
          if (this._track && this._disableTrackOnPause) {
            this._track.enabled = true;
          }
          if (this._zeroRtpOnPause) {
            new Promise((resolve, reject) => {
              this.safeEmit("@resume", resolve, reject);
            }).catch(() => {
            });
          }
          this._observer.safeEmit("resume");
        }
        /**
         * Replaces the current track with a new one or null.
         */
        async replaceTrack({ track }) {
          logger.debug("replaceTrack() [track:%o]", track);
          if (this._closed) {
            if (track && this._stopTracks) {
              try {
                track.stop();
              } catch (error) {
              }
            }
            throw new errors_1.InvalidStateError("closed");
          } else if (track && track.readyState === "ended") {
            throw new errors_1.InvalidStateError("track ended");
          }
          if (track === this._track) {
            logger.debug("replaceTrack() | same track, ignored");
            return;
          }
          await new Promise((resolve, reject) => {
            this.safeEmit("@replacetrack", track, resolve, reject);
          });
          this.destroyTrack();
          this._track = track;
          if (this._track && this._disableTrackOnPause) {
            if (!this._paused) {
              this._track.enabled = true;
            } else if (this._paused) {
              this._track.enabled = false;
            }
          }
          this.handleTrack();
        }
        /**
         * Sets the video max spatial layer to be sent.
         */
        async setMaxSpatialLayer(spatialLayer) {
          if (this._closed) {
            throw new errors_1.InvalidStateError("closed");
          } else if (this._kind !== "video") {
            throw new errors_1.UnsupportedError("not a video Producer");
          } else if (typeof spatialLayer !== "number") {
            throw new TypeError("invalid spatialLayer");
          }
          if (spatialLayer === this._maxSpatialLayer) {
            return;
          }
          await new Promise((resolve, reject) => {
            this.safeEmit("@setmaxspatiallayer", spatialLayer, resolve, reject);
          }).catch(() => {
          });
          this._maxSpatialLayer = spatialLayer;
        }
        async setRtpEncodingParameters(params) {
          if (this._closed) {
            throw new errors_1.InvalidStateError("closed");
          } else if (typeof params !== "object") {
            throw new TypeError("invalid params");
          }
          await new Promise((resolve, reject) => {
            this.safeEmit("@setrtpencodingparameters", params, resolve, reject);
          });
        }
        onTrackEnded() {
          logger.debug('track "ended" event');
          this.safeEmit("trackended");
          this._observer.safeEmit("trackended");
        }
        handleTrack() {
          if (!this._track) {
            return;
          }
          this._track.addEventListener("ended", this.onTrackEnded);
        }
        destroyTrack() {
          if (!this._track) {
            return;
          }
          try {
            this._track.removeEventListener("ended", this.onTrackEnded);
            if (this._stopTracks) {
              this._track.stop();
            }
          } catch (error) {
          }
        }
      }, __name(_a2, "Producer"), _a2);
      exports.Producer = Producer;
    }
  });

  // node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/Consumer.js
  var require_Consumer = __commonJS({
    "node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/Consumer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Consumer = void 0;
      var Logger_1 = require_Logger();
      var enhancedEvents_1 = require_enhancedEvents();
      var errors_1 = require_errors();
      var logger = new Logger_1.Logger("Consumer");
      var _a2;
      var Consumer = (_a2 = class extends enhancedEvents_1.EnhancedEventEmitter {
        constructor({ id, localId, producerId, rtpReceiver, track, rtpParameters, appData }) {
          super();
          this._closed = false;
          this._observer = new enhancedEvents_1.EnhancedEventEmitter();
          logger.debug("constructor()");
          this._id = id;
          this._localId = localId;
          this._producerId = producerId;
          this._rtpReceiver = rtpReceiver;
          this._track = track;
          this._rtpParameters = rtpParameters;
          this._paused = !track.enabled;
          this._appData = appData ?? {};
          this.onTrackEnded = this.onTrackEnded.bind(this);
          this.handleTrack();
        }
        /**
         * Consumer id.
         */
        get id() {
          return this._id;
        }
        /**
         * Local id.
         */
        get localId() {
          return this._localId;
        }
        /**
         * Associated Producer id.
         */
        get producerId() {
          return this._producerId;
        }
        /**
         * Whether the Consumer is closed.
         */
        get closed() {
          return this._closed;
        }
        /**
         * Media kind.
         */
        get kind() {
          return this._track.kind;
        }
        /**
         * Associated RTCRtpReceiver.
         */
        get rtpReceiver() {
          return this._rtpReceiver;
        }
        /**
         * The associated track.
         */
        get track() {
          return this._track;
        }
        /**
         * RTP parameters.
         */
        get rtpParameters() {
          return this._rtpParameters;
        }
        /**
         * Whether the Consumer is paused.
         */
        get paused() {
          return this._paused;
        }
        /**
         * App custom data.
         */
        get appData() {
          return this._appData;
        }
        /**
         * App custom data setter.
         */
        set appData(appData) {
          this._appData = appData;
        }
        get observer() {
          return this._observer;
        }
        /**
         * Closes the Consumer.
         */
        close() {
          if (this._closed) {
            return;
          }
          logger.debug("close()");
          this._closed = true;
          this.destroyTrack();
          this.emit("@close");
          this._observer.safeEmit("close");
        }
        /**
         * Transport was closed.
         */
        transportClosed() {
          if (this._closed) {
            return;
          }
          logger.debug("transportClosed()");
          this._closed = true;
          this.destroyTrack();
          this.safeEmit("transportclose");
          this._observer.safeEmit("close");
        }
        /**
         * Get associated RTCRtpReceiver stats.
         */
        async getStats() {
          if (this._closed) {
            throw new errors_1.InvalidStateError("closed");
          }
          return new Promise((resolve, reject) => {
            this.safeEmit("@getstats", resolve, reject);
          });
        }
        /**
         * Pauses receiving media.
         */
        pause() {
          logger.debug("pause()");
          if (this._closed) {
            logger.error("pause() | Consumer closed");
            return;
          }
          if (this._paused) {
            logger.debug("pause() | Consumer is already paused");
            return;
          }
          this._paused = true;
          this._track.enabled = false;
          this.emit("@pause");
          this._observer.safeEmit("pause");
        }
        /**
         * Resumes receiving media.
         */
        resume() {
          logger.debug("resume()");
          if (this._closed) {
            logger.error("resume() | Consumer closed");
            return;
          }
          if (!this._paused) {
            logger.debug("resume() | Consumer is already resumed");
            return;
          }
          this._paused = false;
          this._track.enabled = true;
          this.emit("@resume");
          this._observer.safeEmit("resume");
        }
        onTrackEnded() {
          logger.debug('track "ended" event');
          this.safeEmit("trackended");
          this._observer.safeEmit("trackended");
        }
        handleTrack() {
          this._track.addEventListener("ended", this.onTrackEnded);
        }
        destroyTrack() {
          try {
            this._track.removeEventListener("ended", this.onTrackEnded);
            this._track.stop();
          } catch (error) {
          }
        }
      }, __name(_a2, "Consumer"), _a2);
      exports.Consumer = Consumer;
    }
  });

  // node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/DataProducer.js
  var require_DataProducer = __commonJS({
    "node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/DataProducer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DataProducer = void 0;
      var Logger_1 = require_Logger();
      var enhancedEvents_1 = require_enhancedEvents();
      var errors_1 = require_errors();
      var logger = new Logger_1.Logger("DataProducer");
      var _a2;
      var DataProducer = (_a2 = class extends enhancedEvents_1.EnhancedEventEmitter {
        constructor({ id, dataChannel, sctpStreamParameters, appData }) {
          super();
          this._closed = false;
          this._observer = new enhancedEvents_1.EnhancedEventEmitter();
          logger.debug("constructor()");
          this._id = id;
          this._dataChannel = dataChannel;
          this._sctpStreamParameters = sctpStreamParameters;
          this._appData = appData ?? {};
          this.handleDataChannel();
        }
        /**
         * DataProducer id.
         */
        get id() {
          return this._id;
        }
        /**
         * Whether the DataProducer is closed.
         */
        get closed() {
          return this._closed;
        }
        /**
         * SCTP stream parameters.
         */
        get sctpStreamParameters() {
          return this._sctpStreamParameters;
        }
        /**
         * DataChannel readyState.
         */
        get readyState() {
          return this._dataChannel.readyState;
        }
        /**
         * DataChannel label.
         */
        get label() {
          return this._dataChannel.label;
        }
        /**
         * DataChannel protocol.
         */
        get protocol() {
          return this._dataChannel.protocol;
        }
        /**
         * DataChannel bufferedAmount.
         */
        get bufferedAmount() {
          return this._dataChannel.bufferedAmount;
        }
        /**
         * DataChannel bufferedAmountLowThreshold.
         */
        get bufferedAmountLowThreshold() {
          return this._dataChannel.bufferedAmountLowThreshold;
        }
        /**
         * Set DataChannel bufferedAmountLowThreshold.
         */
        set bufferedAmountLowThreshold(bufferedAmountLowThreshold) {
          this._dataChannel.bufferedAmountLowThreshold = bufferedAmountLowThreshold;
        }
        /**
         * App custom data.
         */
        get appData() {
          return this._appData;
        }
        /**
         * App custom data setter.
         */
        set appData(appData) {
          this._appData = appData;
        }
        get observer() {
          return this._observer;
        }
        /**
         * Closes the DataProducer.
         */
        close() {
          if (this._closed) {
            return;
          }
          logger.debug("close()");
          this._closed = true;
          this._dataChannel.close();
          this.emit("@close");
          this._observer.safeEmit("close");
        }
        /**
         * Transport was closed.
         */
        transportClosed() {
          if (this._closed) {
            return;
          }
          logger.debug("transportClosed()");
          this._closed = true;
          this._dataChannel.close();
          this.safeEmit("transportclose");
          this._observer.safeEmit("close");
        }
        /**
         * Send a message.
         *
         * @param {String|Blob|ArrayBuffer|ArrayBufferView} data.
         */
        send(data) {
          logger.debug("send()");
          if (this._closed) {
            throw new errors_1.InvalidStateError("closed");
          }
          this._dataChannel.send(data);
        }
        handleDataChannel() {
          this._dataChannel.addEventListener("open", () => {
            if (this._closed) {
              return;
            }
            logger.debug('DataChannel "open" event');
            this.safeEmit("open");
          });
          this._dataChannel.addEventListener("error", (event) => {
            if (this._closed) {
              return;
            }
            let { error } = event;
            if (!error) {
              error = new Error("unknown DataChannel error");
            }
            if (error.errorDetail === "sctp-failure") {
              logger.error("DataChannel SCTP error [sctpCauseCode:%s]: %s", error.sctpCauseCode, error.message);
            } else {
              logger.error('DataChannel "error" event: %o', error);
            }
            this.safeEmit("error", error);
          });
          this._dataChannel.addEventListener("close", () => {
            if (this._closed) {
              return;
            }
            logger.warn('DataChannel "close" event');
            this._closed = true;
            this.emit("@close");
            this.safeEmit("close");
            this._observer.safeEmit("close");
          });
          this._dataChannel.addEventListener("message", () => {
            if (this._closed) {
              return;
            }
            logger.warn('DataChannel "message" event in a DataProducer, message discarded');
          });
          this._dataChannel.addEventListener("bufferedamountlow", () => {
            if (this._closed) {
              return;
            }
            this.safeEmit("bufferedamountlow");
          });
        }
      }, __name(_a2, "DataProducer"), _a2);
      exports.DataProducer = DataProducer;
    }
  });

  // node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/DataConsumer.js
  var require_DataConsumer = __commonJS({
    "node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/DataConsumer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DataConsumer = void 0;
      var Logger_1 = require_Logger();
      var enhancedEvents_1 = require_enhancedEvents();
      var logger = new Logger_1.Logger("DataConsumer");
      var _a2;
      var DataConsumer = (_a2 = class extends enhancedEvents_1.EnhancedEventEmitter {
        constructor({ id, dataProducerId, dataChannel, sctpStreamParameters, appData }) {
          super();
          this._closed = false;
          this._observer = new enhancedEvents_1.EnhancedEventEmitter();
          logger.debug("constructor()");
          this._id = id;
          this._dataProducerId = dataProducerId;
          this._dataChannel = dataChannel;
          this._sctpStreamParameters = sctpStreamParameters;
          this._appData = appData ?? {};
          this.handleDataChannel();
        }
        /**
         * DataConsumer id.
         */
        get id() {
          return this._id;
        }
        /**
         * Associated DataProducer id.
         */
        get dataProducerId() {
          return this._dataProducerId;
        }
        /**
         * Whether the DataConsumer is closed.
         */
        get closed() {
          return this._closed;
        }
        /**
         * SCTP stream parameters.
         */
        get sctpStreamParameters() {
          return this._sctpStreamParameters;
        }
        /**
         * DataChannel readyState.
         */
        get readyState() {
          return this._dataChannel.readyState;
        }
        /**
         * DataChannel label.
         */
        get label() {
          return this._dataChannel.label;
        }
        /**
         * DataChannel protocol.
         */
        get protocol() {
          return this._dataChannel.protocol;
        }
        /**
         * DataChannel binaryType.
         */
        get binaryType() {
          return this._dataChannel.binaryType;
        }
        /**
         * Set DataChannel binaryType.
         */
        set binaryType(binaryType) {
          this._dataChannel.binaryType = binaryType;
        }
        /**
         * App custom data.
         */
        get appData() {
          return this._appData;
        }
        /**
         * App custom data setter.
         */
        set appData(appData) {
          this._appData = appData;
        }
        get observer() {
          return this._observer;
        }
        /**
         * Closes the DataConsumer.
         */
        close() {
          if (this._closed) {
            return;
          }
          logger.debug("close()");
          this._closed = true;
          this._dataChannel.close();
          this.emit("@close");
          this._observer.safeEmit("close");
        }
        /**
         * Transport was closed.
         */
        transportClosed() {
          if (this._closed) {
            return;
          }
          logger.debug("transportClosed()");
          this._closed = true;
          this._dataChannel.close();
          this.safeEmit("transportclose");
          this._observer.safeEmit("close");
        }
        handleDataChannel() {
          this._dataChannel.addEventListener("open", () => {
            if (this._closed) {
              return;
            }
            logger.debug('DataChannel "open" event');
            this.safeEmit("open");
          });
          this._dataChannel.addEventListener("error", (event) => {
            if (this._closed) {
              return;
            }
            let { error } = event;
            if (!error) {
              error = new Error("unknown DataChannel error");
            }
            if (error.errorDetail === "sctp-failure") {
              logger.error("DataChannel SCTP error [sctpCauseCode:%s]: %s", error.sctpCauseCode, error.message);
            } else {
              logger.error('DataChannel "error" event: %o', error);
            }
            this.safeEmit("error", error);
          });
          this._dataChannel.addEventListener("close", () => {
            if (this._closed) {
              return;
            }
            logger.warn('DataChannel "close" event');
            this._closed = true;
            this.emit("@close");
            this.safeEmit("close");
            this._observer.safeEmit("close");
          });
          this._dataChannel.addEventListener("message", (event) => {
            if (this._closed) {
              return;
            }
            this.safeEmit("message", event.data);
          });
        }
      }, __name(_a2, "DataConsumer"), _a2);
      exports.DataConsumer = DataConsumer;
    }
  });

  // node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/Transport.js
  var require_Transport = __commonJS({
    "node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/Transport.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: /* @__PURE__ */ __name(function() {
              return m[k];
            }, "get")
          };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", {
          enumerable: true,
          value: v
        });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Transport = void 0;
      var awaitqueue_1 = require_lib2();
      var queue_microtask_1 = __importDefault(require_queue_microtask());
      var Logger_1 = require_Logger();
      var enhancedEvents_1 = require_enhancedEvents();
      var errors_1 = require_errors();
      var utils = __importStar(require_utils());
      var ortc = __importStar(require_ortc());
      var Producer_1 = require_Producer();
      var Consumer_1 = require_Consumer();
      var DataProducer_1 = require_DataProducer();
      var DataConsumer_1 = require_DataConsumer();
      var logger = new Logger_1.Logger("Transport");
      var _a2;
      var ConsumerCreationTask = (_a2 = class {
        constructor(consumerOptions) {
          this.consumerOptions = consumerOptions;
          this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
          });
        }
      }, __name(_a2, "ConsumerCreationTask"), _a2);
      var _a3;
      var Transport2 = (_a3 = class extends enhancedEvents_1.EnhancedEventEmitter {
        constructor({ direction, id, iceParameters, iceCandidates, dtlsParameters, sctpParameters, iceServers, iceTransportPolicy, additionalSettings, proprietaryConstraints, appData, handlerFactory, extendedRtpCapabilities, canProduceByKind }) {
          super();
          this._closed = false;
          this._iceGatheringState = "new";
          this._connectionState = "new";
          this._producers = /* @__PURE__ */ new Map();
          this._consumers = /* @__PURE__ */ new Map();
          this._dataProducers = /* @__PURE__ */ new Map();
          this._dataConsumers = /* @__PURE__ */ new Map();
          this._probatorConsumerCreated = false;
          this._awaitQueue = new awaitqueue_1.AwaitQueue();
          this._pendingConsumerTasks = [];
          this._consumerCreationInProgress = false;
          this._pendingPauseConsumers = /* @__PURE__ */ new Map();
          this._consumerPauseInProgress = false;
          this._pendingResumeConsumers = /* @__PURE__ */ new Map();
          this._consumerResumeInProgress = false;
          this._pendingCloseConsumers = /* @__PURE__ */ new Map();
          this._consumerCloseInProgress = false;
          this._observer = new enhancedEvents_1.EnhancedEventEmitter();
          logger.debug("constructor() [id:%s, direction:%s]", id, direction);
          this._id = id;
          this._direction = direction;
          this._extendedRtpCapabilities = extendedRtpCapabilities;
          this._canProduceByKind = canProduceByKind;
          this._maxSctpMessageSize = sctpParameters ? sctpParameters.maxMessageSize : null;
          const clonedAdditionalSettings = utils.clone(additionalSettings) ?? {};
          delete clonedAdditionalSettings.iceServers;
          delete clonedAdditionalSettings.iceTransportPolicy;
          delete clonedAdditionalSettings.bundlePolicy;
          delete clonedAdditionalSettings.rtcpMuxPolicy;
          delete clonedAdditionalSettings.sdpSemantics;
          this._handler = handlerFactory();
          this._handler.run({
            direction,
            iceParameters,
            iceCandidates,
            dtlsParameters,
            sctpParameters,
            iceServers,
            iceTransportPolicy,
            additionalSettings: clonedAdditionalSettings,
            proprietaryConstraints,
            extendedRtpCapabilities
          });
          this._appData = appData ?? {};
          this.handleHandler();
        }
        /**
         * Transport id.
         */
        get id() {
          return this._id;
        }
        /**
         * Whether the Transport is closed.
         */
        get closed() {
          return this._closed;
        }
        /**
         * Transport direction.
         */
        get direction() {
          return this._direction;
        }
        /**
         * RTC handler instance.
         */
        get handler() {
          return this._handler;
        }
        /**
         * ICE gathering state.
         */
        get iceGatheringState() {
          return this._iceGatheringState;
        }
        /**
         * Connection state.
         */
        get connectionState() {
          return this._connectionState;
        }
        /**
         * App custom data.
         */
        get appData() {
          return this._appData;
        }
        /**
         * App custom data setter.
         */
        set appData(appData) {
          this._appData = appData;
        }
        get observer() {
          return this._observer;
        }
        /**
         * Close the Transport.
         */
        close() {
          if (this._closed) {
            return;
          }
          logger.debug("close()");
          this._closed = true;
          this._awaitQueue.stop();
          this._handler.close();
          this._connectionState = "closed";
          for (const producer of this._producers.values()) {
            producer.transportClosed();
          }
          this._producers.clear();
          for (const consumer of this._consumers.values()) {
            consumer.transportClosed();
          }
          this._consumers.clear();
          for (const dataProducer of this._dataProducers.values()) {
            dataProducer.transportClosed();
          }
          this._dataProducers.clear();
          for (const dataConsumer of this._dataConsumers.values()) {
            dataConsumer.transportClosed();
          }
          this._dataConsumers.clear();
          this._observer.safeEmit("close");
        }
        /**
         * Get associated Transport (RTCPeerConnection) stats.
         *
         * @returns {RTCStatsReport}
         */
        async getStats() {
          if (this._closed) {
            throw new errors_1.InvalidStateError("closed");
          }
          return this._handler.getTransportStats();
        }
        /**
         * Restart ICE connection.
         */
        async restartIce({ iceParameters }) {
          logger.debug("restartIce()");
          if (this._closed) {
            throw new errors_1.InvalidStateError("closed");
          } else if (!iceParameters) {
            throw new TypeError("missing iceParameters");
          }
          return this._awaitQueue.push(async () => await this._handler.restartIce(iceParameters), "transport.restartIce()");
        }
        /**
         * Update ICE servers.
         */
        async updateIceServers({ iceServers } = {}) {
          logger.debug("updateIceServers()");
          if (this._closed) {
            throw new errors_1.InvalidStateError("closed");
          } else if (!Array.isArray(iceServers)) {
            throw new TypeError("missing iceServers");
          }
          return this._awaitQueue.push(async () => this._handler.updateIceServers(iceServers), "transport.updateIceServers()");
        }
        /**
         * Create a Producer.
         */
        async produce({ track, encodings, codecOptions, codec, stopTracks = true, disableTrackOnPause = true, zeroRtpOnPause = false, onRtpSender, appData = {} } = {}) {
          logger.debug("produce() [track:%o]", track);
          if (this._closed) {
            throw new errors_1.InvalidStateError("closed");
          } else if (!track) {
            throw new TypeError("missing track");
          } else if (this._direction !== "send") {
            throw new errors_1.UnsupportedError("not a sending Transport");
          } else if (!this._canProduceByKind[track.kind]) {
            throw new errors_1.UnsupportedError(`cannot produce ${track.kind}`);
          } else if (track.readyState === "ended") {
            throw new errors_1.InvalidStateError("track ended");
          } else if (this.listenerCount("connect") === 0 && this._connectionState === "new") {
            throw new TypeError('no "connect" listener set into this transport');
          } else if (this.listenerCount("produce") === 0) {
            throw new TypeError('no "produce" listener set into this transport');
          } else if (appData && typeof appData !== "object") {
            throw new TypeError("if given, appData must be an object");
          }
          return this._awaitQueue.push(async () => {
            let normalizedEncodings;
            if (encodings && !Array.isArray(encodings)) {
              throw TypeError("encodings must be an array");
            } else if (encodings && encodings.length === 0) {
              normalizedEncodings = void 0;
            } else if (encodings) {
              normalizedEncodings = encodings.map((encoding) => {
                const normalizedEncoding = {
                  active: true
                };
                if (encoding.active === false) {
                  normalizedEncoding.active = false;
                }
                if (typeof encoding.dtx === "boolean") {
                  normalizedEncoding.dtx = encoding.dtx;
                }
                if (typeof encoding.scalabilityMode === "string") {
                  normalizedEncoding.scalabilityMode = encoding.scalabilityMode;
                }
                if (typeof encoding.scaleResolutionDownBy === "number") {
                  normalizedEncoding.scaleResolutionDownBy = encoding.scaleResolutionDownBy;
                }
                if (typeof encoding.maxBitrate === "number") {
                  normalizedEncoding.maxBitrate = encoding.maxBitrate;
                }
                if (typeof encoding.maxFramerate === "number") {
                  normalizedEncoding.maxFramerate = encoding.maxFramerate;
                }
                if (typeof encoding.adaptivePtime === "boolean") {
                  normalizedEncoding.adaptivePtime = encoding.adaptivePtime;
                }
                if (typeof encoding.priority === "string") {
                  normalizedEncoding.priority = encoding.priority;
                }
                if (typeof encoding.networkPriority === "string") {
                  normalizedEncoding.networkPriority = encoding.networkPriority;
                }
                return normalizedEncoding;
              });
            }
            const { localId, rtpParameters, rtpSender } = await this._handler.send({
              track,
              encodings: normalizedEncodings,
              codecOptions,
              codec,
              onRtpSender
            });
            try {
              ortc.validateRtpParameters(rtpParameters);
              const { id } = await new Promise((resolve, reject) => {
                this.safeEmit("produce", {
                  kind: track.kind,
                  rtpParameters,
                  appData
                }, resolve, reject);
              });
              const producer = new Producer_1.Producer({
                id,
                localId,
                rtpSender,
                track,
                rtpParameters,
                stopTracks,
                disableTrackOnPause,
                zeroRtpOnPause,
                appData
              });
              this._producers.set(producer.id, producer);
              this.handleProducer(producer);
              this._observer.safeEmit("newproducer", producer);
              return producer;
            } catch (error) {
              this._handler.stopSending(localId).catch(() => {
              });
              throw error;
            }
          }, "transport.produce()").catch((error) => {
            if (stopTracks) {
              try {
                track.stop();
              } catch (error2) {
              }
            }
            throw error;
          });
        }
        /**
         * Create a Consumer to consume a remote Producer.
         */
        async consume({ id, producerId, kind, rtpParameters, streamId, onRtpReceiver, appData = {} }) {
          logger.debug("consume()");
          if (this._closed) {
            throw new errors_1.InvalidStateError("closed");
          } else if (this._direction !== "recv") {
            throw new errors_1.UnsupportedError("not a receiving Transport");
          } else if (typeof id !== "string") {
            throw new TypeError("missing id");
          } else if (typeof producerId !== "string") {
            throw new TypeError("missing producerId");
          } else if (kind !== "audio" && kind !== "video") {
            throw new TypeError(`invalid kind '${kind}'`);
          } else if (this.listenerCount("connect") === 0 && this._connectionState === "new") {
            throw new TypeError('no "connect" listener set into this transport');
          } else if (appData && typeof appData !== "object") {
            throw new TypeError("if given, appData must be an object");
          }
          const clonedRtpParameters = utils.clone(rtpParameters);
          const canConsume = ortc.canReceive(clonedRtpParameters, this._extendedRtpCapabilities);
          if (!canConsume) {
            throw new errors_1.UnsupportedError("cannot consume this Producer");
          }
          const consumerCreationTask = new ConsumerCreationTask({
            id,
            producerId,
            kind,
            rtpParameters: clonedRtpParameters,
            streamId,
            onRtpReceiver,
            appData
          });
          this._pendingConsumerTasks.push(consumerCreationTask);
          (0, queue_microtask_1.default)(() => {
            if (this._closed) {
              return;
            }
            if (this._consumerCreationInProgress === false) {
              void this.createPendingConsumers();
            }
          });
          return consumerCreationTask.promise;
        }
        /**
         * Create a DataProducer
         */
        async produceData({ ordered = true, maxPacketLifeTime, maxRetransmits, label = "", protocol: protocol4 = "", appData = {} } = {}) {
          logger.debug("produceData()");
          if (this._closed) {
            throw new errors_1.InvalidStateError("closed");
          } else if (this._direction !== "send") {
            throw new errors_1.UnsupportedError("not a sending Transport");
          } else if (!this._maxSctpMessageSize) {
            throw new errors_1.UnsupportedError("SCTP not enabled by remote Transport");
          } else if (this.listenerCount("connect") === 0 && this._connectionState === "new") {
            throw new TypeError('no "connect" listener set into this transport');
          } else if (this.listenerCount("producedata") === 0) {
            throw new TypeError('no "producedata" listener set into this transport');
          } else if (appData && typeof appData !== "object") {
            throw new TypeError("if given, appData must be an object");
          }
          if (maxPacketLifeTime || maxRetransmits) {
            ordered = false;
          }
          return this._awaitQueue.push(async () => {
            const { dataChannel, sctpStreamParameters } = await this._handler.sendDataChannel({
              ordered,
              maxPacketLifeTime,
              maxRetransmits,
              label,
              protocol: protocol4
            });
            ortc.validateSctpStreamParameters(sctpStreamParameters);
            const { id } = await new Promise((resolve, reject) => {
              this.safeEmit("producedata", {
                sctpStreamParameters,
                label,
                protocol: protocol4,
                appData
              }, resolve, reject);
            });
            const dataProducer = new DataProducer_1.DataProducer({
              id,
              dataChannel,
              sctpStreamParameters,
              appData
            });
            this._dataProducers.set(dataProducer.id, dataProducer);
            this.handleDataProducer(dataProducer);
            this._observer.safeEmit("newdataproducer", dataProducer);
            return dataProducer;
          }, "transport.produceData()");
        }
        /**
         * Create a DataConsumer
         */
        async consumeData({ id, dataProducerId, sctpStreamParameters, label = "", protocol: protocol4 = "", appData = {} }) {
          logger.debug("consumeData()");
          if (this._closed) {
            throw new errors_1.InvalidStateError("closed");
          } else if (this._direction !== "recv") {
            throw new errors_1.UnsupportedError("not a receiving Transport");
          } else if (!this._maxSctpMessageSize) {
            throw new errors_1.UnsupportedError("SCTP not enabled by remote Transport");
          } else if (typeof id !== "string") {
            throw new TypeError("missing id");
          } else if (typeof dataProducerId !== "string") {
            throw new TypeError("missing dataProducerId");
          } else if (this.listenerCount("connect") === 0 && this._connectionState === "new") {
            throw new TypeError('no "connect" listener set into this transport');
          } else if (appData && typeof appData !== "object") {
            throw new TypeError("if given, appData must be an object");
          }
          const clonedSctpStreamParameters = utils.clone(sctpStreamParameters);
          ortc.validateSctpStreamParameters(clonedSctpStreamParameters);
          return this._awaitQueue.push(async () => {
            const { dataChannel } = await this._handler.receiveDataChannel({
              sctpStreamParameters: clonedSctpStreamParameters,
              label,
              protocol: protocol4
            });
            const dataConsumer = new DataConsumer_1.DataConsumer({
              id,
              dataProducerId,
              dataChannel,
              sctpStreamParameters: clonedSctpStreamParameters,
              appData
            });
            this._dataConsumers.set(dataConsumer.id, dataConsumer);
            this.handleDataConsumer(dataConsumer);
            this._observer.safeEmit("newdataconsumer", dataConsumer);
            return dataConsumer;
          }, "transport.consumeData()");
        }
        // This method is guaranteed to never throw.
        async createPendingConsumers() {
          this._consumerCreationInProgress = true;
          this._awaitQueue.push(async () => {
            if (this._pendingConsumerTasks.length === 0) {
              logger.debug("createPendingConsumers() | there is no Consumer to be created");
              return;
            }
            const pendingConsumerTasks = [
              ...this._pendingConsumerTasks
            ];
            this._pendingConsumerTasks = [];
            let videoConsumerForProbator = void 0;
            const optionsList = [];
            for (const task of pendingConsumerTasks) {
              const { id, kind, rtpParameters, streamId, onRtpReceiver } = task.consumerOptions;
              optionsList.push({
                trackId: id,
                kind,
                rtpParameters,
                streamId,
                onRtpReceiver
              });
            }
            try {
              const results = await this._handler.receive(optionsList);
              for (let idx = 0; idx < results.length; ++idx) {
                const task = pendingConsumerTasks[idx];
                const result = results[idx];
                const { id, producerId, kind, rtpParameters, appData } = task.consumerOptions;
                const { localId, rtpReceiver, track } = result;
                const consumer = new Consumer_1.Consumer({
                  id,
                  localId,
                  producerId,
                  rtpReceiver,
                  track,
                  rtpParameters,
                  appData
                });
                this._consumers.set(consumer.id, consumer);
                this.handleConsumer(consumer);
                if (!this._probatorConsumerCreated && !videoConsumerForProbator && kind === "video") {
                  videoConsumerForProbator = consumer;
                }
                this._observer.safeEmit("newconsumer", consumer);
                task.resolve(consumer);
              }
            } catch (error) {
              for (const task of pendingConsumerTasks) {
                task.reject(error);
              }
            }
            if (videoConsumerForProbator) {
              try {
                const probatorRtpParameters = ortc.generateProbatorRtpParameters(videoConsumerForProbator.rtpParameters);
                await this._handler.receive([
                  {
                    trackId: "probator",
                    kind: "video",
                    rtpParameters: probatorRtpParameters
                  }
                ]);
                logger.debug("createPendingConsumers() | Consumer for RTP probation created");
                this._probatorConsumerCreated = true;
              } catch (error) {
                logger.error("createPendingConsumers() | failed to create Consumer for RTP probation:%o", error);
              }
            }
          }, "transport.createPendingConsumers()").then(() => {
            this._consumerCreationInProgress = false;
            if (this._pendingConsumerTasks.length > 0) {
              void this.createPendingConsumers();
            }
          }).catch(() => {
          });
        }
        pausePendingConsumers() {
          this._consumerPauseInProgress = true;
          this._awaitQueue.push(async () => {
            if (this._pendingPauseConsumers.size === 0) {
              logger.debug("pausePendingConsumers() | there is no Consumer to be paused");
              return;
            }
            const pendingPauseConsumers = Array.from(this._pendingPauseConsumers.values());
            this._pendingPauseConsumers.clear();
            try {
              const localIds = pendingPauseConsumers.map((consumer) => consumer.localId);
              await this._handler.pauseReceiving(localIds);
            } catch (error) {
              logger.error("pausePendingConsumers() | failed to pause Consumers:", error);
            }
          }, "transport.pausePendingConsumers").then(() => {
            this._consumerPauseInProgress = false;
            if (this._pendingPauseConsumers.size > 0) {
              this.pausePendingConsumers();
            }
          }).catch(() => {
          });
        }
        resumePendingConsumers() {
          this._consumerResumeInProgress = true;
          this._awaitQueue.push(async () => {
            if (this._pendingResumeConsumers.size === 0) {
              logger.debug("resumePendingConsumers() | there is no Consumer to be resumed");
              return;
            }
            const pendingResumeConsumers = Array.from(this._pendingResumeConsumers.values());
            this._pendingResumeConsumers.clear();
            try {
              const localIds = pendingResumeConsumers.map((consumer) => consumer.localId);
              await this._handler.resumeReceiving(localIds);
            } catch (error) {
              logger.error("resumePendingConsumers() | failed to resume Consumers:", error);
            }
          }, "transport.resumePendingConsumers").then(() => {
            this._consumerResumeInProgress = false;
            if (this._pendingResumeConsumers.size > 0) {
              this.resumePendingConsumers();
            }
          }).catch(() => {
          });
        }
        closePendingConsumers() {
          this._consumerCloseInProgress = true;
          this._awaitQueue.push(async () => {
            if (this._pendingCloseConsumers.size === 0) {
              logger.debug("closePendingConsumers() | there is no Consumer to be closed");
              return;
            }
            const pendingCloseConsumers = Array.from(this._pendingCloseConsumers.values());
            this._pendingCloseConsumers.clear();
            try {
              await this._handler.stopReceiving(pendingCloseConsumers.map((consumer) => consumer.localId));
            } catch (error) {
              logger.error("closePendingConsumers() | failed to close Consumers:", error);
            }
          }, "transport.closePendingConsumers").then(() => {
            this._consumerCloseInProgress = false;
            if (this._pendingCloseConsumers.size > 0) {
              this.closePendingConsumers();
            }
          }).catch(() => {
          });
        }
        handleHandler() {
          const handler = this._handler;
          handler.on("@connect", ({ dtlsParameters }, callback, errback) => {
            if (this._closed) {
              errback(new errors_1.InvalidStateError("closed"));
              return;
            }
            this.safeEmit("connect", {
              dtlsParameters
            }, callback, errback);
          });
          handler.on("@icegatheringstatechange", (iceGatheringState) => {
            if (iceGatheringState === this._iceGatheringState) {
              return;
            }
            logger.debug("ICE gathering state changed to %s", iceGatheringState);
            this._iceGatheringState = iceGatheringState;
            if (!this._closed) {
              this.safeEmit("icegatheringstatechange", iceGatheringState);
            }
          });
          handler.on("@connectionstatechange", (connectionState) => {
            if (connectionState === this._connectionState) {
              return;
            }
            logger.debug("connection state changed to %s", connectionState);
            this._connectionState = connectionState;
            if (!this._closed) {
              this.safeEmit("connectionstatechange", connectionState);
            }
          });
        }
        handleProducer(producer) {
          producer.on("@close", () => {
            this._producers.delete(producer.id);
            if (this._closed) {
              return;
            }
            this._awaitQueue.push(async () => await this._handler.stopSending(producer.localId), "producer @close event").catch((error) => logger.warn("producer.close() failed:%o", error));
          });
          producer.on("@pause", (callback, errback) => {
            this._awaitQueue.push(async () => await this._handler.pauseSending(producer.localId), "producer @pause event").then(callback).catch(errback);
          });
          producer.on("@resume", (callback, errback) => {
            this._awaitQueue.push(async () => await this._handler.resumeSending(producer.localId), "producer @resume event").then(callback).catch(errback);
          });
          producer.on("@replacetrack", (track, callback, errback) => {
            this._awaitQueue.push(async () => await this._handler.replaceTrack(producer.localId, track), "producer @replacetrack event").then(callback).catch(errback);
          });
          producer.on("@setmaxspatiallayer", (spatialLayer, callback, errback) => {
            this._awaitQueue.push(async () => await this._handler.setMaxSpatialLayer(producer.localId, spatialLayer), "producer @setmaxspatiallayer event").then(callback).catch(errback);
          });
          producer.on("@setrtpencodingparameters", (params, callback, errback) => {
            this._awaitQueue.push(async () => await this._handler.setRtpEncodingParameters(producer.localId, params), "producer @setrtpencodingparameters event").then(callback).catch(errback);
          });
          producer.on("@getstats", (callback, errback) => {
            if (this._closed) {
              return errback(new errors_1.InvalidStateError("closed"));
            }
            this._handler.getSenderStats(producer.localId).then(callback).catch(errback);
          });
        }
        handleConsumer(consumer) {
          consumer.on("@close", () => {
            this._consumers.delete(consumer.id);
            this._pendingPauseConsumers.delete(consumer.id);
            this._pendingResumeConsumers.delete(consumer.id);
            if (this._closed) {
              return;
            }
            this._pendingCloseConsumers.set(consumer.id, consumer);
            if (this._consumerCloseInProgress === false) {
              this.closePendingConsumers();
            }
          });
          consumer.on("@pause", () => {
            if (this._pendingResumeConsumers.has(consumer.id)) {
              this._pendingResumeConsumers.delete(consumer.id);
            }
            this._pendingPauseConsumers.set(consumer.id, consumer);
            (0, queue_microtask_1.default)(() => {
              if (this._closed) {
                return;
              }
              if (this._consumerPauseInProgress === false) {
                this.pausePendingConsumers();
              }
            });
          });
          consumer.on("@resume", () => {
            if (this._pendingPauseConsumers.has(consumer.id)) {
              this._pendingPauseConsumers.delete(consumer.id);
            }
            this._pendingResumeConsumers.set(consumer.id, consumer);
            (0, queue_microtask_1.default)(() => {
              if (this._closed) {
                return;
              }
              if (this._consumerResumeInProgress === false) {
                this.resumePendingConsumers();
              }
            });
          });
          consumer.on("@getstats", (callback, errback) => {
            if (this._closed) {
              return errback(new errors_1.InvalidStateError("closed"));
            }
            this._handler.getReceiverStats(consumer.localId).then(callback).catch(errback);
          });
        }
        handleDataProducer(dataProducer) {
          dataProducer.on("@close", () => {
            this._dataProducers.delete(dataProducer.id);
          });
        }
        handleDataConsumer(dataConsumer) {
          dataConsumer.on("@close", () => {
            this._dataConsumers.delete(dataConsumer.id);
          });
        }
      }, __name(_a3, "Transport"), _a3);
      exports.Transport = Transport2;
    }
  });

  // node_modules/.pnpm/sdp-transform@2.14.2/node_modules/sdp-transform/lib/grammar.js
  var require_grammar = __commonJS({
    "node_modules/.pnpm/sdp-transform@2.14.2/node_modules/sdp-transform/lib/grammar.js"(exports, module) {
      var grammar = module.exports = {
        v: [
          {
            name: "version",
            reg: /^(\d*)$/
          }
        ],
        o: [
          {
            // o=- 20518 0 IN IP4 203.0.113.1
            // NB: sessionId will be a String in most cases because it is huge
            name: "origin",
            reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/,
            names: [
              "username",
              "sessionId",
              "sessionVersion",
              "netType",
              "ipVer",
              "address"
            ],
            format: "%s %s %d %s IP%d %s"
          }
        ],
        // default parsing of these only (though some of these feel outdated)
        s: [
          {
            name: "name"
          }
        ],
        i: [
          {
            name: "description"
          }
        ],
        u: [
          {
            name: "uri"
          }
        ],
        e: [
          {
            name: "email"
          }
        ],
        p: [
          {
            name: "phone"
          }
        ],
        z: [
          {
            name: "timezones"
          }
        ],
        r: [
          {
            name: "repeats"
          }
        ],
        // k: [{}], // outdated thing ignored
        t: [
          {
            // t=0 0
            name: "timing",
            reg: /^(\d*) (\d*)/,
            names: [
              "start",
              "stop"
            ],
            format: "%d %d"
          }
        ],
        c: [
          {
            // c=IN IP4 10.47.197.26
            name: "connection",
            reg: /^IN IP(\d) (\S*)/,
            names: [
              "version",
              "ip"
            ],
            format: "IN IP%d %s"
          }
        ],
        b: [
          {
            // b=AS:4000
            push: "bandwidth",
            reg: /^(TIAS|AS|CT|RR|RS):(\d*)/,
            names: [
              "type",
              "limit"
            ],
            format: "%s:%s"
          }
        ],
        m: [
          {
            // m=video 51744 RTP/AVP 126 97 98 34 31
            // NB: special - pushes to session
            // TODO: rtp/fmtp should be filtered by the payloads found here?
            reg: /^(\w*) (\d*) ([\w/]*)(?: (.*))?/,
            names: [
              "type",
              "port",
              "protocol",
              "payloads"
            ],
            format: "%s %d %s %s"
          }
        ],
        a: [
          {
            // a=rtpmap:110 opus/48000/2
            push: "rtp",
            reg: /^rtpmap:(\d*) ([\w\-.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/,
            names: [
              "payload",
              "codec",
              "rate",
              "encoding"
            ],
            format: /* @__PURE__ */ __name(function(o) {
              return o.encoding ? "rtpmap:%d %s/%s/%s" : o.rate ? "rtpmap:%d %s/%s" : "rtpmap:%d %s";
            }, "format")
          },
          {
            // a=fmtp:108 profile-level-id=24;object=23;bitrate=64000
            // a=fmtp:111 minptime=10; useinbandfec=1
            push: "fmtp",
            reg: /^fmtp:(\d*) ([\S| ]*)/,
            names: [
              "payload",
              "config"
            ],
            format: "fmtp:%d %s"
          },
          {
            // a=control:streamid=0
            name: "control",
            reg: /^control:(.*)/,
            format: "control:%s"
          },
          {
            // a=rtcp:65179 IN IP4 193.84.77.194
            name: "rtcp",
            reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/,
            names: [
              "port",
              "netType",
              "ipVer",
              "address"
            ],
            format: /* @__PURE__ */ __name(function(o) {
              return o.address != null ? "rtcp:%d %s IP%d %s" : "rtcp:%d";
            }, "format")
          },
          {
            // a=rtcp-fb:98 trr-int 100
            push: "rtcpFbTrrInt",
            reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/,
            names: [
              "payload",
              "value"
            ],
            format: "rtcp-fb:%s trr-int %d"
          },
          {
            // a=rtcp-fb:98 nack rpsi
            push: "rtcpFb",
            reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/,
            names: [
              "payload",
              "type",
              "subtype"
            ],
            format: /* @__PURE__ */ __name(function(o) {
              return o.subtype != null ? "rtcp-fb:%s %s %s" : "rtcp-fb:%s %s";
            }, "format")
          },
          {
            // a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
            // a=extmap:1/recvonly URI-gps-string
            // a=extmap:3 urn:ietf:params:rtp-hdrext:encrypt urn:ietf:params:rtp-hdrext:smpte-tc 25@600/24
            push: "ext",
            reg: /^extmap:(\d+)(?:\/(\w+))?(?: (urn:ietf:params:rtp-hdrext:encrypt))? (\S*)(?: (\S*))?/,
            names: [
              "value",
              "direction",
              "encrypt-uri",
              "uri",
              "config"
            ],
            format: /* @__PURE__ */ __name(function(o) {
              return "extmap:%d" + (o.direction ? "/%s" : "%v") + (o["encrypt-uri"] ? " %s" : "%v") + " %s" + (o.config ? " %s" : "");
            }, "format")
          },
          {
            // a=extmap-allow-mixed
            name: "extmapAllowMixed",
            reg: /^(extmap-allow-mixed)/
          },
          {
            // a=crypto:1 AES_CM_128_HMAC_SHA1_80 inline:PS1uQCVeeCFCanVmcjkpPywjNWhcYD0mXXtxaVBR|2^20|1:32
            push: "crypto",
            reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/,
            names: [
              "id",
              "suite",
              "config",
              "sessionConfig"
            ],
            format: /* @__PURE__ */ __name(function(o) {
              return o.sessionConfig != null ? "crypto:%d %s %s %s" : "crypto:%d %s %s";
            }, "format")
          },
          {
            // a=setup:actpass
            name: "setup",
            reg: /^setup:(\w*)/,
            format: "setup:%s"
          },
          {
            // a=connection:new
            name: "connectionType",
            reg: /^connection:(new|existing)/,
            format: "connection:%s"
          },
          {
            // a=mid:1
            name: "mid",
            reg: /^mid:([^\s]*)/,
            format: "mid:%s"
          },
          {
            // a=msid:0c8b064d-d807-43b4-b434-f92a889d8587 98178685-d409-46e0-8e16-7ef0db0db64a
            name: "msid",
            reg: /^msid:(.*)/,
            format: "msid:%s"
          },
          {
            // a=ptime:20
            name: "ptime",
            reg: /^ptime:(\d*(?:\.\d*)*)/,
            format: "ptime:%d"
          },
          {
            // a=maxptime:60
            name: "maxptime",
            reg: /^maxptime:(\d*(?:\.\d*)*)/,
            format: "maxptime:%d"
          },
          {
            // a=sendrecv
            name: "direction",
            reg: /^(sendrecv|recvonly|sendonly|inactive)/
          },
          {
            // a=ice-lite
            name: "icelite",
            reg: /^(ice-lite)/
          },
          {
            // a=ice-ufrag:F7gI
            name: "iceUfrag",
            reg: /^ice-ufrag:(\S*)/,
            format: "ice-ufrag:%s"
          },
          {
            // a=ice-pwd:x9cml/YzichV2+XlhiMu8g
            name: "icePwd",
            reg: /^ice-pwd:(\S*)/,
            format: "ice-pwd:%s"
          },
          {
            // a=fingerprint:SHA-1 00:11:22:33:44:55:66:77:88:99:AA:BB:CC:DD:EE:FF:00:11:22:33
            name: "fingerprint",
            reg: /^fingerprint:(\S*) (\S*)/,
            names: [
              "type",
              "hash"
            ],
            format: "fingerprint:%s %s"
          },
          {
            // a=candidate:0 1 UDP 2113667327 203.0.113.1 54400 typ host
            // a=candidate:1162875081 1 udp 2113937151 192.168.34.75 60017 typ host generation 0 network-id 3 network-cost 10
            // a=candidate:3289912957 2 udp 1845501695 193.84.77.194 60017 typ srflx raddr 192.168.34.75 rport 60017 generation 0 network-id 3 network-cost 10
            // a=candidate:229815620 1 tcp 1518280447 192.168.150.19 60017 typ host tcptype active generation 0 network-id 3 network-cost 10
            // a=candidate:3289912957 2 tcp 1845501695 193.84.77.194 60017 typ srflx raddr 192.168.34.75 rport 60017 tcptype passive generation 0 network-id 3 network-cost 10
            push: "candidates",
            reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?(?: network-id (\d*))?(?: network-cost (\d*))?/,
            names: [
              "foundation",
              "component",
              "transport",
              "priority",
              "ip",
              "port",
              "type",
              "raddr",
              "rport",
              "tcptype",
              "generation",
              "network-id",
              "network-cost"
            ],
            format: /* @__PURE__ */ __name(function(o) {
              var str = "candidate:%s %d %s %d %s %d typ %s";
              str += o.raddr != null ? " raddr %s rport %d" : "%v%v";
              str += o.tcptype != null ? " tcptype %s" : "%v";
              if (o.generation != null) {
                str += " generation %d";
              }
              str += o["network-id"] != null ? " network-id %d" : "%v";
              str += o["network-cost"] != null ? " network-cost %d" : "%v";
              return str;
            }, "format")
          },
          {
            // a=end-of-candidates (keep after the candidates line for readability)
            name: "endOfCandidates",
            reg: /^(end-of-candidates)/
          },
          {
            // a=remote-candidates:1 203.0.113.1 54400 2 203.0.113.1 54401 ...
            name: "remoteCandidates",
            reg: /^remote-candidates:(.*)/,
            format: "remote-candidates:%s"
          },
          {
            // a=ice-options:google-ice
            name: "iceOptions",
            reg: /^ice-options:(\S*)/,
            format: "ice-options:%s"
          },
          {
            // a=ssrc:2566107569 cname:t9YU8M1UxTF8Y1A1
            push: "ssrcs",
            reg: /^ssrc:(\d*) ([\w_-]*)(?::(.*))?/,
            names: [
              "id",
              "attribute",
              "value"
            ],
            format: /* @__PURE__ */ __name(function(o) {
              var str = "ssrc:%d";
              if (o.attribute != null) {
                str += " %s";
                if (o.value != null) {
                  str += ":%s";
                }
              }
              return str;
            }, "format")
          },
          {
            // a=ssrc-group:FEC 1 2
            // a=ssrc-group:FEC-FR 3004364195 1080772241
            push: "ssrcGroups",
            // token-char = %x21 / %x23-27 / %x2A-2B / %x2D-2E / %x30-39 / %x41-5A / %x5E-7E
            reg: /^ssrc-group:([\x21\x23\x24\x25\x26\x27\x2A\x2B\x2D\x2E\w]*) (.*)/,
            names: [
              "semantics",
              "ssrcs"
            ],
            format: "ssrc-group:%s %s"
          },
          {
            // a=msid-semantic: WMS Jvlam5X3SX1OP6pn20zWogvaKJz5Hjf9OnlV
            name: "msidSemantic",
            reg: /^msid-semantic:\s?(\w*) (\S*)/,
            names: [
              "semantic",
              "token"
            ],
            format: "msid-semantic: %s %s"
            // space after ':' is not accidental
          },
          {
            // a=group:BUNDLE audio video
            push: "groups",
            reg: /^group:(\w*) (.*)/,
            names: [
              "type",
              "mids"
            ],
            format: "group:%s %s"
          },
          {
            // a=rtcp-mux
            name: "rtcpMux",
            reg: /^(rtcp-mux)/
          },
          {
            // a=rtcp-rsize
            name: "rtcpRsize",
            reg: /^(rtcp-rsize)/
          },
          {
            // a=sctpmap:5000 webrtc-datachannel 1024
            name: "sctpmap",
            reg: /^sctpmap:([\w_/]*) (\S*)(?: (\S*))?/,
            names: [
              "sctpmapNumber",
              "app",
              "maxMessageSize"
            ],
            format: /* @__PURE__ */ __name(function(o) {
              return o.maxMessageSize != null ? "sctpmap:%s %s %s" : "sctpmap:%s %s";
            }, "format")
          },
          {
            // a=x-google-flag:conference
            name: "xGoogleFlag",
            reg: /^x-google-flag:([^\s]*)/,
            format: "x-google-flag:%s"
          },
          {
            // a=rid:1 send max-width=1280;max-height=720;max-fps=30;depend=0
            push: "rids",
            reg: /^rid:([\d\w]+) (\w+)(?: ([\S| ]*))?/,
            names: [
              "id",
              "direction",
              "params"
            ],
            format: /* @__PURE__ */ __name(function(o) {
              return o.params ? "rid:%s %s %s" : "rid:%s %s";
            }, "format")
          },
          {
            // a=imageattr:97 send [x=800,y=640,sar=1.1,q=0.6] [x=480,y=320] recv [x=330,y=250]
            // a=imageattr:* send [x=800,y=640] recv *
            // a=imageattr:100 recv [x=320,y=240]
            push: "imageattrs",
            reg: new RegExp(
              // a=imageattr:97
              "^imageattr:(\\d+|\\*)[\\s\\t]+(send|recv)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*)(?:[\\s\\t]+(recv|send)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*))?"
            ),
            names: [
              "pt",
              "dir1",
              "attrs1",
              "dir2",
              "attrs2"
            ],
            format: /* @__PURE__ */ __name(function(o) {
              return "imageattr:%s %s %s" + (o.dir2 ? " %s %s" : "");
            }, "format")
          },
          {
            // a=simulcast:send 1,2,3;~4,~5 recv 6;~7,~8
            // a=simulcast:recv 1;4,5 send 6;7
            name: "simulcast",
            reg: new RegExp(
              // a=simulcast:
              "^simulcast:(send|recv) ([a-zA-Z0-9\\-_~;,]+)(?:\\s?(send|recv) ([a-zA-Z0-9\\-_~;,]+))?$"
            ),
            names: [
              "dir1",
              "list1",
              "dir2",
              "list2"
            ],
            format: /* @__PURE__ */ __name(function(o) {
              return "simulcast:%s %s" + (o.dir2 ? " %s %s" : "");
            }, "format")
          },
          {
            // old simulcast draft 03 (implemented by Firefox)
            //   https://tools.ietf.org/html/draft-ietf-mmusic-sdp-simulcast-03
            // a=simulcast: recv pt=97;98 send pt=97
            // a=simulcast: send rid=5;6;7 paused=6,7
            name: "simulcast_03",
            reg: /^simulcast:[\s\t]+([\S+\s\t]+)$/,
            names: [
              "value"
            ],
            format: "simulcast: %s"
          },
          {
            // a=framerate:25
            // a=framerate:29.97
            name: "framerate",
            reg: /^framerate:(\d+(?:$|\.\d+))/,
            format: "framerate:%s"
          },
          {
            // RFC4570
            // a=source-filter: incl IN IP4 239.5.2.31 10.1.15.5
            name: "sourceFilter",
            reg: /^source-filter: *(excl|incl) (\S*) (IP4|IP6|\*) (\S*) (.*)/,
            names: [
              "filterMode",
              "netType",
              "addressTypes",
              "destAddress",
              "srcList"
            ],
            format: "source-filter: %s %s %s %s %s"
          },
          {
            // a=bundle-only
            name: "bundleOnly",
            reg: /^(bundle-only)/
          },
          {
            // a=label:1
            name: "label",
            reg: /^label:(.+)/,
            format: "label:%s"
          },
          {
            // RFC version 26 for SCTP over DTLS
            // https://tools.ietf.org/html/draft-ietf-mmusic-sctp-sdp-26#section-5
            name: "sctpPort",
            reg: /^sctp-port:(\d+)$/,
            format: "sctp-port:%s"
          },
          {
            // RFC version 26 for SCTP over DTLS
            // https://tools.ietf.org/html/draft-ietf-mmusic-sctp-sdp-26#section-6
            name: "maxMessageSize",
            reg: /^max-message-size:(\d+)$/,
            format: "max-message-size:%s"
          },
          {
            // RFC7273
            // a=ts-refclk:ptp=IEEE1588-2008:39-A7-94-FF-FE-07-CB-D0:37
            push: "tsRefClocks",
            reg: /^ts-refclk:([^\s=]*)(?:=(\S*))?/,
            names: [
              "clksrc",
              "clksrcExt"
            ],
            format: /* @__PURE__ */ __name(function(o) {
              return "ts-refclk:%s" + (o.clksrcExt != null ? "=%s" : "");
            }, "format")
          },
          {
            // RFC7273
            // a=mediaclk:direct=963214424
            name: "mediaClk",
            reg: /^mediaclk:(?:id=(\S*))? *([^\s=]*)(?:=(\S*))?(?: *rate=(\d+)\/(\d+))?/,
            names: [
              "id",
              "mediaClockName",
              "mediaClockValue",
              "rateNumerator",
              "rateDenominator"
            ],
            format: /* @__PURE__ */ __name(function(o) {
              var str = "mediaclk:";
              str += o.id != null ? "id=%s %s" : "%v%s";
              str += o.mediaClockValue != null ? "=%s" : "";
              str += o.rateNumerator != null ? " rate=%s" : "";
              str += o.rateDenominator != null ? "/%s" : "";
              return str;
            }, "format")
          },
          {
            // a=keywds:keywords
            name: "keywords",
            reg: /^keywds:(.+)$/,
            format: "keywds:%s"
          },
          {
            // a=content:main
            name: "content",
            reg: /^content:(.+)/,
            format: "content:%s"
          },
          // BFCP https://tools.ietf.org/html/rfc4583
          {
            // a=floorctrl:c-s
            name: "bfcpFloorCtrl",
            reg: /^floorctrl:(c-only|s-only|c-s)/,
            format: "floorctrl:%s"
          },
          {
            // a=confid:1
            name: "bfcpConfId",
            reg: /^confid:(\d+)/,
            format: "confid:%s"
          },
          {
            // a=userid:1
            name: "bfcpUserId",
            reg: /^userid:(\d+)/,
            format: "userid:%s"
          },
          {
            // a=floorid:1
            name: "bfcpFloorId",
            reg: /^floorid:(.+) (?:m-stream|mstrm):(.+)/,
            names: [
              "id",
              "mStream"
            ],
            format: "floorid:%s mstrm:%s"
          },
          {
            // any a= that we don't understand is kept verbatim on media.invalid
            push: "invalid",
            names: [
              "value"
            ]
          }
        ]
      };
      Object.keys(grammar).forEach(function(key) {
        var objs = grammar[key];
        objs.forEach(function(obj) {
          if (!obj.reg) {
            obj.reg = /(.*)/;
          }
          if (!obj.format) {
            obj.format = "%s";
          }
        });
      });
    }
  });

  // node_modules/.pnpm/sdp-transform@2.14.2/node_modules/sdp-transform/lib/parser.js
  var require_parser = __commonJS({
    "node_modules/.pnpm/sdp-transform@2.14.2/node_modules/sdp-transform/lib/parser.js"(exports) {
      var toIntIfInt = /* @__PURE__ */ __name(function(v) {
        return String(Number(v)) === v ? Number(v) : v;
      }, "toIntIfInt");
      var attachProperties = /* @__PURE__ */ __name(function(match, location2, names, rawName) {
        if (rawName && !names) {
          location2[rawName] = toIntIfInt(match[1]);
        } else {
          for (var i = 0; i < names.length; i += 1) {
            if (match[i + 1] != null) {
              location2[names[i]] = toIntIfInt(match[i + 1]);
            }
          }
        }
      }, "attachProperties");
      var parseReg = /* @__PURE__ */ __name(function(obj, location2, content) {
        var needsBlank = obj.name && obj.names;
        if (obj.push && !location2[obj.push]) {
          location2[obj.push] = [];
        } else if (needsBlank && !location2[obj.name]) {
          location2[obj.name] = {};
        }
        var keyLocation = obj.push ? {} : needsBlank ? location2[obj.name] : location2;
        attachProperties(content.match(obj.reg), keyLocation, obj.names, obj.name);
        if (obj.push) {
          location2[obj.push].push(keyLocation);
        }
      }, "parseReg");
      var grammar = require_grammar();
      var validLine = RegExp.prototype.test.bind(/^([a-z])=(.*)/);
      exports.parse = function(sdp) {
        var session = {}, media = [], location2 = session;
        sdp.split(/(\r\n|\r|\n)/).filter(validLine).forEach(function(l) {
          var type = l[0];
          var content = l.slice(2);
          if (type === "m") {
            media.push({
              rtp: [],
              fmtp: []
            });
            location2 = media[media.length - 1];
          }
          for (var j = 0; j < (grammar[type] || []).length; j += 1) {
            var obj = grammar[type][j];
            if (obj.reg.test(content)) {
              return parseReg(obj, location2, content);
            }
          }
        });
        session.media = media;
        return session;
      };
      var paramReducer = /* @__PURE__ */ __name(function(acc, expr) {
        var s = expr.split(/=(.+)/, 2);
        if (s.length === 2) {
          acc[s[0]] = toIntIfInt(s[1]);
        } else if (s.length === 1 && expr.length > 1) {
          acc[s[0]] = void 0;
        }
        return acc;
      }, "paramReducer");
      exports.parseParams = function(str) {
        return str.split(/;\s?/).reduce(paramReducer, {});
      };
      exports.parseFmtpConfig = exports.parseParams;
      exports.parsePayloads = function(str) {
        return str.toString().split(" ").map(Number);
      };
      exports.parseRemoteCandidates = function(str) {
        var candidates = [];
        var parts2 = str.split(" ").map(toIntIfInt);
        for (var i = 0; i < parts2.length; i += 3) {
          candidates.push({
            component: parts2[i],
            ip: parts2[i + 1],
            port: parts2[i + 2]
          });
        }
        return candidates;
      };
      exports.parseImageAttributes = function(str) {
        return str.split(" ").map(function(item) {
          return item.substring(1, item.length - 1).split(",").reduce(paramReducer, {});
        });
      };
      exports.parseSimulcastStreamList = function(str) {
        return str.split(";").map(function(stream) {
          return stream.split(",").map(function(format) {
            var scid, paused = false;
            if (format[0] !== "~") {
              scid = toIntIfInt(format);
            } else {
              scid = toIntIfInt(format.substring(1, format.length));
              paused = true;
            }
            return {
              scid,
              paused
            };
          });
        });
      };
    }
  });

  // node_modules/.pnpm/sdp-transform@2.14.2/node_modules/sdp-transform/lib/writer.js
  var require_writer = __commonJS({
    "node_modules/.pnpm/sdp-transform@2.14.2/node_modules/sdp-transform/lib/writer.js"(exports, module) {
      var grammar = require_grammar();
      var formatRegExp = /%[sdv%]/g;
      var format = /* @__PURE__ */ __name(function(formatStr) {
        var i = 1;
        var args = arguments;
        var len = args.length;
        return formatStr.replace(formatRegExp, function(x) {
          if (i >= len) {
            return x;
          }
          var arg = args[i];
          i += 1;
          switch (x) {
            case "%%":
              return "%";
            case "%s":
              return String(arg);
            case "%d":
              return Number(arg);
            case "%v":
              return "";
          }
        });
      }, "format");
      var makeLine = /* @__PURE__ */ __name(function(type, obj, location2) {
        var str = obj.format instanceof Function ? obj.format(obj.push ? location2 : location2[obj.name]) : obj.format;
        var args = [
          type + "=" + str
        ];
        if (obj.names) {
          for (var i = 0; i < obj.names.length; i += 1) {
            var n = obj.names[i];
            if (obj.name) {
              args.push(location2[obj.name][n]);
            } else {
              args.push(location2[obj.names[i]]);
            }
          }
        } else {
          args.push(location2[obj.name]);
        }
        return format.apply(null, args);
      }, "makeLine");
      var defaultOuterOrder = [
        "v",
        "o",
        "s",
        "i",
        "u",
        "e",
        "p",
        "c",
        "b",
        "t",
        "r",
        "z",
        "a"
      ];
      var defaultInnerOrder = [
        "i",
        "c",
        "b",
        "a"
      ];
      module.exports = function(session, opts) {
        opts = opts || {};
        if (session.version == null) {
          session.version = 0;
        }
        if (session.name == null) {
          session.name = " ";
        }
        session.media.forEach(function(mLine) {
          if (mLine.payloads == null) {
            mLine.payloads = "";
          }
        });
        var outerOrder = opts.outerOrder || defaultOuterOrder;
        var innerOrder = opts.innerOrder || defaultInnerOrder;
        var sdp = [];
        outerOrder.forEach(function(type) {
          grammar[type].forEach(function(obj) {
            if (obj.name in session && session[obj.name] != null) {
              sdp.push(makeLine(type, obj, session));
            } else if (obj.push in session && session[obj.push] != null) {
              session[obj.push].forEach(function(el) {
                sdp.push(makeLine(type, obj, el));
              });
            }
          });
        });
        session.media.forEach(function(mLine) {
          sdp.push(makeLine("m", grammar.m[0], mLine));
          innerOrder.forEach(function(type) {
            grammar[type].forEach(function(obj) {
              if (obj.name in mLine && mLine[obj.name] != null) {
                sdp.push(makeLine(type, obj, mLine));
              } else if (obj.push in mLine && mLine[obj.push] != null) {
                mLine[obj.push].forEach(function(el) {
                  sdp.push(makeLine(type, obj, el));
                });
              }
            });
          });
        });
        return sdp.join("\r\n") + "\r\n";
      };
    }
  });

  // node_modules/.pnpm/sdp-transform@2.14.2/node_modules/sdp-transform/lib/index.js
  var require_lib3 = __commonJS({
    "node_modules/.pnpm/sdp-transform@2.14.2/node_modules/sdp-transform/lib/index.js"(exports) {
      var parser = require_parser();
      var writer = require_writer();
      exports.write = writer;
      exports.parse = parser.parse;
      exports.parseParams = parser.parseParams;
      exports.parseFmtpConfig = parser.parseFmtpConfig;
      exports.parsePayloads = parser.parsePayloads;
      exports.parseRemoteCandidates = parser.parseRemoteCandidates;
      exports.parseImageAttributes = parser.parseImageAttributes;
      exports.parseSimulcastStreamList = parser.parseSimulcastStreamList;
    }
  });

  // node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/handlers/sdp/commonUtils.js
  var require_commonUtils = __commonJS({
    "node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/handlers/sdp/commonUtils.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: /* @__PURE__ */ __name(function() {
              return m[k];
            }, "get")
          };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", {
          enumerable: true,
          value: v
        });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.extractRtpCapabilities = extractRtpCapabilities;
      exports.extractDtlsParameters = extractDtlsParameters;
      exports.getCname = getCname;
      exports.applyCodecParameters = applyCodecParameters;
      var sdpTransform = __importStar(require_lib3());
      function extractRtpCapabilities({ sdpObject }) {
        const codecsMap = /* @__PURE__ */ new Map();
        const headerExtensions = [];
        let gotAudio = false;
        let gotVideo = false;
        for (const m of sdpObject.media) {
          const kind = m.type;
          switch (kind) {
            case "audio": {
              if (gotAudio) {
                continue;
              }
              gotAudio = true;
              break;
            }
            case "video": {
              if (gotVideo) {
                continue;
              }
              gotVideo = true;
              break;
            }
            default: {
              continue;
            }
          }
          for (const rtp of m.rtp) {
            const codec = {
              kind,
              mimeType: `${kind}/${rtp.codec}`,
              preferredPayloadType: rtp.payload,
              clockRate: rtp.rate,
              channels: rtp.encoding,
              parameters: {},
              rtcpFeedback: []
            };
            codecsMap.set(codec.preferredPayloadType, codec);
          }
          for (const fmtp of m.fmtp || []) {
            const parameters = sdpTransform.parseParams(fmtp.config);
            const codec = codecsMap.get(fmtp.payload);
            if (!codec) {
              continue;
            }
            if (parameters?.hasOwnProperty("profile-level-id")) {
              parameters["profile-level-id"] = String(parameters["profile-level-id"]);
            }
            codec.parameters = parameters;
          }
          for (const fb of m.rtcpFb || []) {
            const feedback = {
              type: fb.type,
              parameter: fb.subtype
            };
            if (!feedback.parameter) {
              delete feedback.parameter;
            }
            if (fb.payload !== "*") {
              const codec = codecsMap.get(fb.payload);
              if (!codec) {
                continue;
              }
              codec.rtcpFeedback.push(feedback);
            } else {
              for (const codec of codecsMap.values()) {
                if (codec.kind === kind && !/.+\/rtx$/i.test(codec.mimeType)) {
                  codec.rtcpFeedback.push(feedback);
                }
              }
            }
          }
          for (const ext of m.ext || []) {
            if (ext["encrypt-uri"]) {
              continue;
            }
            const headerExtension = {
              kind,
              uri: ext.uri,
              preferredId: ext.value
            };
            headerExtensions.push(headerExtension);
          }
        }
        const rtpCapabilities = {
          codecs: Array.from(codecsMap.values()),
          headerExtensions
        };
        return rtpCapabilities;
      }
      __name(extractRtpCapabilities, "extractRtpCapabilities");
      function extractDtlsParameters({ sdpObject }) {
        let setup = sdpObject.setup;
        let fingerprint = sdpObject.fingerprint;
        if (!setup || !fingerprint) {
          const mediaObject = (sdpObject.media || []).find((m) => m.port !== 0);
          if (mediaObject) {
            setup ?? (setup = mediaObject.setup);
            fingerprint ?? (fingerprint = mediaObject.fingerprint);
          }
        }
        if (!setup) {
          throw new Error("no a=setup found at SDP session or media level");
        } else if (!fingerprint) {
          throw new Error("no a=fingerprint found at SDP session or media level");
        }
        let role;
        switch (setup) {
          case "active": {
            role = "client";
            break;
          }
          case "passive": {
            role = "server";
            break;
          }
          case "actpass": {
            role = "auto";
            break;
          }
        }
        const dtlsParameters = {
          role,
          fingerprints: [
            {
              algorithm: fingerprint.type,
              value: fingerprint.hash
            }
          ]
        };
        return dtlsParameters;
      }
      __name(extractDtlsParameters, "extractDtlsParameters");
      function getCname({ offerMediaObject }) {
        const ssrcCnameLine = (offerMediaObject.ssrcs || []).find((line) => line.attribute === "cname");
        if (!ssrcCnameLine) {
          return "";
        }
        return ssrcCnameLine.value;
      }
      __name(getCname, "getCname");
      function applyCodecParameters({ offerRtpParameters, answerMediaObject }) {
        for (const codec of offerRtpParameters.codecs) {
          const mimeType = codec.mimeType.toLowerCase();
          if (mimeType !== "audio/opus") {
            continue;
          }
          const rtp = (answerMediaObject.rtp || []).find((r) => r.payload === codec.payloadType);
          if (!rtp) {
            continue;
          }
          answerMediaObject.fmtp = answerMediaObject.fmtp || [];
          let fmtp = answerMediaObject.fmtp.find((f) => f.payload === codec.payloadType);
          if (!fmtp) {
            fmtp = {
              payload: codec.payloadType,
              config: ""
            };
            answerMediaObject.fmtp.push(fmtp);
          }
          const parameters = sdpTransform.parseParams(fmtp.config);
          switch (mimeType) {
            case "audio/opus": {
              const spropStereo = codec.parameters["sprop-stereo"];
              if (spropStereo !== void 0) {
                parameters.stereo = spropStereo ? 1 : 0;
              }
              break;
            }
          }
          fmtp.config = "";
          for (const key of Object.keys(parameters)) {
            if (fmtp.config) {
              fmtp.config += ";";
            }
            fmtp.config += `${key}=${parameters[key]}`;
          }
        }
      }
      __name(applyCodecParameters, "applyCodecParameters");
    }
  });

  // node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/handlers/sdp/unifiedPlanUtils.js
  var require_unifiedPlanUtils = __commonJS({
    "node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/handlers/sdp/unifiedPlanUtils.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getRtpEncodings = getRtpEncodings;
      exports.addLegacySimulcast = addLegacySimulcast;
      function getRtpEncodings({ offerMediaObject }) {
        const ssrcs = /* @__PURE__ */ new Set();
        for (const line of offerMediaObject.ssrcs || []) {
          const ssrc = line.id;
          ssrcs.add(ssrc);
        }
        if (ssrcs.size === 0) {
          throw new Error("no a=ssrc lines found");
        }
        const ssrcToRtxSsrc = /* @__PURE__ */ new Map();
        for (const line of offerMediaObject.ssrcGroups || []) {
          if (line.semantics !== "FID") {
            continue;
          }
          let [ssrc, rtxSsrc] = line.ssrcs.split(/\s+/);
          ssrc = Number(ssrc);
          rtxSsrc = Number(rtxSsrc);
          if (ssrcs.has(ssrc)) {
            ssrcs.delete(ssrc);
            ssrcs.delete(rtxSsrc);
            ssrcToRtxSsrc.set(ssrc, rtxSsrc);
          }
        }
        for (const ssrc of ssrcs) {
          ssrcToRtxSsrc.set(ssrc, null);
        }
        const encodings = [];
        for (const [ssrc, rtxSsrc] of ssrcToRtxSsrc) {
          const encoding = {
            ssrc
          };
          if (rtxSsrc) {
            encoding.rtx = {
              ssrc: rtxSsrc
            };
          }
          encodings.push(encoding);
        }
        return encodings;
      }
      __name(getRtpEncodings, "getRtpEncodings");
      function addLegacySimulcast({ offerMediaObject, numStreams }) {
        if (numStreams <= 1) {
          throw new TypeError("numStreams must be greater than 1");
        }
        const ssrcMsidLine = (offerMediaObject.ssrcs || []).find((line) => line.attribute === "msid");
        if (!ssrcMsidLine) {
          throw new Error("a=ssrc line with msid information not found");
        }
        const [streamId, trackId] = ssrcMsidLine.value.split(" ");
        const firstSsrc = Number(ssrcMsidLine.id);
        let firstRtxSsrc;
        (offerMediaObject.ssrcGroups || []).some((line) => {
          if (line.semantics !== "FID") {
            return false;
          }
          const ssrcs2 = line.ssrcs.split(/\s+/);
          if (Number(ssrcs2[0]) === firstSsrc) {
            firstRtxSsrc = Number(ssrcs2[1]);
            return true;
          } else {
            return false;
          }
        });
        const ssrcCnameLine = offerMediaObject.ssrcs.find((line) => line.attribute === "cname");
        if (!ssrcCnameLine) {
          throw new Error("a=ssrc line with cname information not found");
        }
        const cname = ssrcCnameLine.value;
        const ssrcs = [];
        const rtxSsrcs = [];
        for (let i = 0; i < numStreams; ++i) {
          ssrcs.push(firstSsrc + i);
          if (firstRtxSsrc) {
            rtxSsrcs.push(firstRtxSsrc + i);
          }
        }
        offerMediaObject.ssrcGroups = [];
        offerMediaObject.ssrcs = [];
        offerMediaObject.ssrcGroups.push({
          semantics: "SIM",
          ssrcs: ssrcs.join(" ")
        });
        for (const ssrc of ssrcs) {
          offerMediaObject.ssrcs.push({
            id: ssrc,
            attribute: "cname",
            value: cname
          });
          offerMediaObject.ssrcs.push({
            id: ssrc,
            attribute: "msid",
            value: `${streamId} ${trackId}`
          });
        }
        for (let i = 0; i < rtxSsrcs.length; ++i) {
          const ssrc = ssrcs[i];
          const rtxSsrc = rtxSsrcs[i];
          offerMediaObject.ssrcs.push({
            id: rtxSsrc,
            attribute: "cname",
            value: cname
          });
          offerMediaObject.ssrcs.push({
            id: rtxSsrc,
            attribute: "msid",
            value: `${streamId} ${trackId}`
          });
          offerMediaObject.ssrcGroups.push({
            semantics: "FID",
            ssrcs: `${ssrc} ${rtxSsrc}`
          });
        }
      }
      __name(addLegacySimulcast, "addLegacySimulcast");
    }
  });

  // node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/handlers/ortc/utils.js
  var require_utils2 = __commonJS({
    "node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/handlers/ortc/utils.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.addNackSuppportForOpus = addNackSuppportForOpus;
      function addNackSuppportForOpus(rtpCapabilities) {
        for (const codec of rtpCapabilities.codecs ?? []) {
          if ((codec.mimeType.toLowerCase() === "audio/opus" || codec.mimeType.toLowerCase() === "audio/multiopus") && !codec.rtcpFeedback?.some((fb) => fb.type === "nack" && !fb.parameter)) {
            if (!codec.rtcpFeedback) {
              codec.rtcpFeedback = [];
            }
            codec.rtcpFeedback.push({
              type: "nack"
            });
          }
        }
      }
      __name(addNackSuppportForOpus, "addNackSuppportForOpus");
    }
  });

  // node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/handlers/HandlerInterface.js
  var require_HandlerInterface = __commonJS({
    "node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/handlers/HandlerInterface.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.HandlerInterface = void 0;
      var enhancedEvents_1 = require_enhancedEvents();
      var _a2;
      var HandlerInterface = (_a2 = class extends enhancedEvents_1.EnhancedEventEmitter {
        constructor() {
          super();
        }
      }, __name(_a2, "HandlerInterface"), _a2);
      exports.HandlerInterface = HandlerInterface;
    }
  });

  // node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/handlers/sdp/MediaSection.js
  var require_MediaSection = __commonJS({
    "node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/handlers/sdp/MediaSection.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: /* @__PURE__ */ __name(function() {
              return m[k];
            }, "get")
          };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", {
          enumerable: true,
          value: v
        });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.OfferMediaSection = exports.AnswerMediaSection = exports.MediaSection = void 0;
      var sdpTransform = __importStar(require_lib3());
      var utils = __importStar(require_utils());
      var _a2;
      var MediaSection = (_a2 = class {
        constructor({ iceParameters, iceCandidates, dtlsParameters, planB = false }) {
          this._mediaObject = {};
          this._planB = planB;
          if (iceParameters) {
            this.setIceParameters(iceParameters);
          }
          if (iceCandidates) {
            this._mediaObject.candidates = [];
            for (const candidate of iceCandidates) {
              const candidateObject = {};
              candidateObject.component = 1;
              candidateObject.foundation = candidate.foundation;
              candidateObject.ip = candidate.address ?? candidate.ip;
              candidateObject.port = candidate.port;
              candidateObject.priority = candidate.priority;
              candidateObject.transport = candidate.protocol;
              candidateObject.type = candidate.type;
              if (candidate.tcpType) {
                candidateObject.tcptype = candidate.tcpType;
              }
              this._mediaObject.candidates.push(candidateObject);
            }
            this._mediaObject.endOfCandidates = "end-of-candidates";
            this._mediaObject.iceOptions = "renomination";
          }
          if (dtlsParameters) {
            this.setDtlsRole(dtlsParameters.role);
          }
        }
        get mid() {
          return String(this._mediaObject.mid);
        }
        get closed() {
          return this._mediaObject.port === 0;
        }
        getObject() {
          return this._mediaObject;
        }
        setIceParameters(iceParameters) {
          this._mediaObject.iceUfrag = iceParameters.usernameFragment;
          this._mediaObject.icePwd = iceParameters.password;
        }
        pause() {
          this._mediaObject.direction = "inactive";
        }
        disable() {
          this.pause();
          delete this._mediaObject.ext;
          delete this._mediaObject.ssrcs;
          delete this._mediaObject.ssrcGroups;
          delete this._mediaObject.simulcast;
          delete this._mediaObject.simulcast_03;
          delete this._mediaObject.rids;
          delete this._mediaObject.extmapAllowMixed;
        }
        close() {
          this.disable();
          this._mediaObject.port = 0;
        }
      }, __name(_a2, "MediaSection"), _a2);
      exports.MediaSection = MediaSection;
      var _a3;
      var AnswerMediaSection = (_a3 = class extends MediaSection {
        constructor({ iceParameters, iceCandidates, dtlsParameters, sctpParameters, plainRtpParameters, planB = false, offerMediaObject, offerRtpParameters, answerRtpParameters, codecOptions, extmapAllowMixed = false }) {
          super({
            iceParameters,
            iceCandidates,
            dtlsParameters,
            planB
          });
          this._mediaObject.mid = String(offerMediaObject.mid);
          this._mediaObject.type = offerMediaObject.type;
          this._mediaObject.protocol = offerMediaObject.protocol;
          if (!plainRtpParameters) {
            this._mediaObject.connection = {
              ip: "127.0.0.1",
              version: 4
            };
            this._mediaObject.port = 7;
          } else {
            this._mediaObject.connection = {
              ip: plainRtpParameters.ip,
              version: plainRtpParameters.ipVersion
            };
            this._mediaObject.port = plainRtpParameters.port;
          }
          switch (offerMediaObject.type) {
            case "audio":
            case "video": {
              this._mediaObject.direction = "recvonly";
              this._mediaObject.rtp = [];
              this._mediaObject.rtcpFb = [];
              this._mediaObject.fmtp = [];
              for (const codec of answerRtpParameters.codecs) {
                const rtp = {
                  payload: codec.payloadType,
                  codec: getCodecName(codec),
                  rate: codec.clockRate
                };
                if (codec.channels > 1) {
                  rtp.encoding = codec.channels;
                }
                this._mediaObject.rtp.push(rtp);
                const codecParameters = utils.clone(codec.parameters) ?? {};
                let codecRtcpFeedback = utils.clone(codec.rtcpFeedback) ?? [];
                if (codecOptions) {
                  const { opusStereo, opusFec, opusDtx, opusMaxPlaybackRate, opusMaxAverageBitrate, opusPtime, opusNack, videoGoogleStartBitrate, videoGoogleMaxBitrate, videoGoogleMinBitrate } = codecOptions;
                  const offerCodec = offerRtpParameters.codecs.find((c) => c.payloadType === codec.payloadType);
                  switch (codec.mimeType.toLowerCase()) {
                    case "audio/opus":
                    case "audio/multiopus": {
                      if (opusStereo !== void 0) {
                        offerCodec.parameters["sprop-stereo"] = opusStereo ? 1 : 0;
                        codecParameters.stereo = opusStereo ? 1 : 0;
                      }
                      if (opusFec !== void 0) {
                        offerCodec.parameters.useinbandfec = opusFec ? 1 : 0;
                        codecParameters.useinbandfec = opusFec ? 1 : 0;
                      }
                      if (opusDtx !== void 0) {
                        offerCodec.parameters.usedtx = opusDtx ? 1 : 0;
                        codecParameters.usedtx = opusDtx ? 1 : 0;
                      }
                      if (opusMaxPlaybackRate !== void 0) {
                        codecParameters.maxplaybackrate = opusMaxPlaybackRate;
                      }
                      if (opusMaxAverageBitrate !== void 0) {
                        codecParameters.maxaveragebitrate = opusMaxAverageBitrate;
                      }
                      if (opusPtime !== void 0) {
                        offerCodec.parameters.ptime = opusPtime;
                        codecParameters.ptime = opusPtime;
                      }
                      if (!opusNack) {
                        offerCodec.rtcpFeedback = offerCodec.rtcpFeedback.filter((fb) => fb.type !== "nack" || fb.parameter);
                        codecRtcpFeedback = codecRtcpFeedback.filter((fb) => fb.type !== "nack" || fb.parameter);
                      }
                      break;
                    }
                    case "video/vp8":
                    case "video/vp9":
                    case "video/h264":
                    case "video/h265": {
                      if (videoGoogleStartBitrate !== void 0) {
                        codecParameters["x-google-start-bitrate"] = videoGoogleStartBitrate;
                      }
                      if (videoGoogleMaxBitrate !== void 0) {
                        codecParameters["x-google-max-bitrate"] = videoGoogleMaxBitrate;
                      }
                      if (videoGoogleMinBitrate !== void 0) {
                        codecParameters["x-google-min-bitrate"] = videoGoogleMinBitrate;
                      }
                      break;
                    }
                  }
                }
                const fmtp = {
                  payload: codec.payloadType,
                  config: ""
                };
                for (const key of Object.keys(codecParameters)) {
                  if (fmtp.config) {
                    fmtp.config += ";";
                  }
                  fmtp.config += `${key}=${codecParameters[key]}`;
                }
                if (fmtp.config) {
                  this._mediaObject.fmtp.push(fmtp);
                }
                for (const fb of codecRtcpFeedback) {
                  this._mediaObject.rtcpFb.push({
                    payload: codec.payloadType,
                    type: fb.type,
                    subtype: fb.parameter
                  });
                }
              }
              this._mediaObject.payloads = answerRtpParameters.codecs.map((codec) => codec.payloadType).join(" ");
              this._mediaObject.ext = [];
              for (const ext of answerRtpParameters.headerExtensions) {
                const found = (offerMediaObject.ext ?? []).some((localExt) => localExt.uri === ext.uri);
                if (!found) {
                  continue;
                }
                this._mediaObject.ext.push({
                  uri: ext.uri,
                  value: ext.id
                });
              }
              if (extmapAllowMixed && offerMediaObject.extmapAllowMixed === "extmap-allow-mixed") {
                this._mediaObject.extmapAllowMixed = "extmap-allow-mixed";
              }
              if (offerMediaObject.simulcast) {
                this._mediaObject.simulcast = {
                  dir1: "recv",
                  list1: offerMediaObject.simulcast.list1
                };
                this._mediaObject.rids = [];
                for (const rid of offerMediaObject.rids ?? []) {
                  if (rid.direction !== "send") {
                    continue;
                  }
                  this._mediaObject.rids.push({
                    id: rid.id,
                    direction: "recv"
                  });
                }
              } else if (offerMediaObject.simulcast_03) {
                this._mediaObject.simulcast_03 = {
                  value: offerMediaObject.simulcast_03.value.replace(/send/g, "recv")
                };
                this._mediaObject.rids = [];
                for (const rid of offerMediaObject.rids ?? []) {
                  if (rid.direction !== "send") {
                    continue;
                  }
                  this._mediaObject.rids.push({
                    id: rid.id,
                    direction: "recv"
                  });
                }
              }
              this._mediaObject.rtcpMux = "rtcp-mux";
              this._mediaObject.rtcpRsize = "rtcp-rsize";
              if (this._planB && this._mediaObject.type === "video") {
                this._mediaObject.xGoogleFlag = "conference";
              }
              break;
            }
            case "application": {
              if (typeof offerMediaObject.sctpPort === "number") {
                this._mediaObject.payloads = "webrtc-datachannel";
                this._mediaObject.sctpPort = sctpParameters.port;
                this._mediaObject.maxMessageSize = sctpParameters.maxMessageSize;
              } else if (offerMediaObject.sctpmap) {
                this._mediaObject.payloads = sctpParameters.port;
                this._mediaObject.sctpmap = {
                  app: "webrtc-datachannel",
                  sctpmapNumber: sctpParameters.port,
                  maxMessageSize: sctpParameters.maxMessageSize
                };
              }
              break;
            }
          }
        }
        setDtlsRole(role) {
          switch (role) {
            case "client": {
              this._mediaObject.setup = "active";
              break;
            }
            case "server": {
              this._mediaObject.setup = "passive";
              break;
            }
            case "auto": {
              this._mediaObject.setup = "actpass";
              break;
            }
          }
        }
        resume() {
          this._mediaObject.direction = "recvonly";
        }
        muxSimulcastStreams(encodings) {
          if (!this._mediaObject.simulcast?.list1) {
            return;
          }
          const layers = {};
          for (const encoding of encodings) {
            if (encoding.rid) {
              layers[encoding.rid] = encoding;
            }
          }
          const raw = this._mediaObject.simulcast.list1;
          const simulcastStreams = sdpTransform.parseSimulcastStreamList(raw);
          for (const simulcastStream of simulcastStreams) {
            for (const simulcastFormat of simulcastStream) {
              simulcastFormat.paused = !layers[simulcastFormat.scid]?.active;
            }
          }
          this._mediaObject.simulcast.list1 = simulcastStreams.map((simulcastFormats) => simulcastFormats.map((f) => `${f.paused ? "~" : ""}${f.scid}`).join(",")).join(";");
        }
      }, __name(_a3, "AnswerMediaSection"), _a3);
      exports.AnswerMediaSection = AnswerMediaSection;
      var _a4;
      var OfferMediaSection = (_a4 = class extends MediaSection {
        constructor({ iceParameters, iceCandidates, dtlsParameters, sctpParameters, plainRtpParameters, planB = false, mid, kind, offerRtpParameters, streamId, trackId, oldDataChannelSpec = false }) {
          super({
            iceParameters,
            iceCandidates,
            dtlsParameters,
            planB
          });
          this._mediaObject.mid = String(mid);
          this._mediaObject.type = kind;
          if (!plainRtpParameters) {
            this._mediaObject.connection = {
              ip: "127.0.0.1",
              version: 4
            };
            if (!sctpParameters) {
              this._mediaObject.protocol = "UDP/TLS/RTP/SAVPF";
            } else {
              this._mediaObject.protocol = "UDP/DTLS/SCTP";
            }
            this._mediaObject.port = 7;
          } else {
            this._mediaObject.connection = {
              ip: plainRtpParameters.ip,
              version: plainRtpParameters.ipVersion
            };
            this._mediaObject.protocol = "RTP/AVP";
            this._mediaObject.port = plainRtpParameters.port;
          }
          switch (kind) {
            case "audio":
            case "video": {
              this._mediaObject.direction = "sendonly";
              this._mediaObject.rtp = [];
              this._mediaObject.rtcpFb = [];
              this._mediaObject.fmtp = [];
              if (!this._planB) {
                this._mediaObject.msid = `${streamId ?? "-"} ${trackId}`;
              }
              for (const codec of offerRtpParameters.codecs) {
                const rtp = {
                  payload: codec.payloadType,
                  codec: getCodecName(codec),
                  rate: codec.clockRate
                };
                if (codec.channels > 1) {
                  rtp.encoding = codec.channels;
                }
                this._mediaObject.rtp.push(rtp);
                const fmtp = {
                  payload: codec.payloadType,
                  config: ""
                };
                for (const key of Object.keys(codec.parameters)) {
                  if (fmtp.config) {
                    fmtp.config += ";";
                  }
                  fmtp.config += `${key}=${codec.parameters[key]}`;
                }
                if (fmtp.config) {
                  this._mediaObject.fmtp.push(fmtp);
                }
                for (const fb of codec.rtcpFeedback) {
                  this._mediaObject.rtcpFb.push({
                    payload: codec.payloadType,
                    type: fb.type,
                    subtype: fb.parameter
                  });
                }
              }
              this._mediaObject.payloads = offerRtpParameters.codecs.map((codec) => codec.payloadType).join(" ");
              this._mediaObject.ext = [];
              for (const ext of offerRtpParameters.headerExtensions) {
                this._mediaObject.ext.push({
                  uri: ext.uri,
                  value: ext.id
                });
              }
              this._mediaObject.rtcpMux = "rtcp-mux";
              this._mediaObject.rtcpRsize = "rtcp-rsize";
              const encoding = offerRtpParameters.encodings[0];
              const ssrc = encoding.ssrc;
              const rtxSsrc = encoding.rtx?.ssrc;
              this._mediaObject.ssrcs = [];
              this._mediaObject.ssrcGroups = [];
              if (offerRtpParameters.rtcp.cname) {
                this._mediaObject.ssrcs.push({
                  id: ssrc,
                  attribute: "cname",
                  value: offerRtpParameters.rtcp.cname
                });
              }
              if (this._planB) {
                this._mediaObject.ssrcs.push({
                  id: ssrc,
                  attribute: "msid",
                  value: `${streamId ?? "-"} ${trackId}`
                });
              }
              if (rtxSsrc) {
                if (offerRtpParameters.rtcp.cname) {
                  this._mediaObject.ssrcs.push({
                    id: rtxSsrc,
                    attribute: "cname",
                    value: offerRtpParameters.rtcp.cname
                  });
                }
                if (this._planB) {
                  this._mediaObject.ssrcs.push({
                    id: rtxSsrc,
                    attribute: "msid",
                    value: `${streamId ?? "-"} ${trackId}`
                  });
                }
                this._mediaObject.ssrcGroups.push({
                  semantics: "FID",
                  ssrcs: `${ssrc} ${rtxSsrc}`
                });
              }
              break;
            }
            case "application": {
              if (!oldDataChannelSpec) {
                this._mediaObject.payloads = "webrtc-datachannel";
                this._mediaObject.sctpPort = sctpParameters.port;
                this._mediaObject.maxMessageSize = sctpParameters.maxMessageSize;
              } else {
                this._mediaObject.payloads = sctpParameters.port;
                this._mediaObject.sctpmap = {
                  app: "webrtc-datachannel",
                  sctpmapNumber: sctpParameters.port,
                  maxMessageSize: sctpParameters.maxMessageSize
                };
              }
              break;
            }
          }
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        setDtlsRole(role) {
          this._mediaObject.setup = "actpass";
        }
        resume() {
          this._mediaObject.direction = "sendonly";
        }
        planBReceive({ offerRtpParameters, streamId, trackId }) {
          const encoding = offerRtpParameters.encodings[0];
          const ssrc = encoding.ssrc;
          const rtxSsrc = encoding.rtx?.ssrc;
          const payloads = this._mediaObject.payloads.split(" ");
          for (const codec of offerRtpParameters.codecs) {
            if (payloads.includes(String(codec.payloadType))) {
              continue;
            }
            const rtp = {
              payload: codec.payloadType,
              codec: getCodecName(codec),
              rate: codec.clockRate
            };
            if (codec.channels > 1) {
              rtp.encoding = codec.channels;
            }
            this._mediaObject.rtp.push(rtp);
            const fmtp = {
              payload: codec.payloadType,
              config: ""
            };
            for (const key of Object.keys(codec.parameters)) {
              if (fmtp.config) {
                fmtp.config += ";";
              }
              fmtp.config += `${key}=${codec.parameters[key]}`;
            }
            if (fmtp.config) {
              this._mediaObject.fmtp.push(fmtp);
            }
            for (const fb of codec.rtcpFeedback) {
              this._mediaObject.rtcpFb.push({
                payload: codec.payloadType,
                type: fb.type,
                subtype: fb.parameter
              });
            }
          }
          this._mediaObject.payloads += ` ${offerRtpParameters.codecs.filter((codec) => !this._mediaObject.payloads.includes(codec.payloadType)).map((codec) => codec.payloadType).join(" ")}`;
          this._mediaObject.payloads = this._mediaObject.payloads.trim();
          if (offerRtpParameters.rtcp.cname) {
            this._mediaObject.ssrcs.push({
              id: ssrc,
              attribute: "cname",
              value: offerRtpParameters.rtcp.cname
            });
          }
          this._mediaObject.ssrcs.push({
            id: ssrc,
            attribute: "msid",
            value: `${streamId ?? "-"} ${trackId}`
          });
          if (rtxSsrc) {
            if (offerRtpParameters.rtcp.cname) {
              this._mediaObject.ssrcs.push({
                id: rtxSsrc,
                attribute: "cname",
                value: offerRtpParameters.rtcp.cname
              });
            }
            this._mediaObject.ssrcs.push({
              id: rtxSsrc,
              attribute: "msid",
              value: `${streamId ?? "-"} ${trackId}`
            });
            this._mediaObject.ssrcGroups.push({
              semantics: "FID",
              ssrcs: `${ssrc} ${rtxSsrc}`
            });
          }
        }
        planBStopReceiving({ offerRtpParameters }) {
          const encoding = offerRtpParameters.encodings[0];
          const ssrc = encoding.ssrc;
          const rtxSsrc = encoding.rtx?.ssrc;
          this._mediaObject.ssrcs = this._mediaObject.ssrcs.filter((s) => s.id !== ssrc && s.id !== rtxSsrc);
          if (rtxSsrc) {
            this._mediaObject.ssrcGroups = this._mediaObject.ssrcGroups.filter((group) => group.ssrcs !== `${ssrc} ${rtxSsrc}`);
          }
        }
      }, __name(_a4, "OfferMediaSection"), _a4);
      exports.OfferMediaSection = OfferMediaSection;
      function getCodecName(codec) {
        const MimeTypeRegex = new RegExp("^(audio|video)/(.+)", "i");
        const mimeTypeMatch = MimeTypeRegex.exec(codec.mimeType);
        if (!mimeTypeMatch) {
          throw new TypeError("invalid codec.mimeType");
        }
        return mimeTypeMatch[2];
      }
      __name(getCodecName, "getCodecName");
    }
  });

  // node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/handlers/sdp/RemoteSdp.js
  var require_RemoteSdp = __commonJS({
    "node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/handlers/sdp/RemoteSdp.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: /* @__PURE__ */ __name(function() {
              return m[k];
            }, "get")
          };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", {
          enumerable: true,
          value: v
        });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.RemoteSdp = void 0;
      var sdpTransform = __importStar(require_lib3());
      var Logger_1 = require_Logger();
      var MediaSection_1 = require_MediaSection();
      var logger = new Logger_1.Logger("RemoteSdp");
      var _a2;
      var RemoteSdp = (_a2 = class {
        constructor({ iceParameters, iceCandidates, dtlsParameters, sctpParameters, plainRtpParameters, planB = false }) {
          this._mediaSections = [];
          this._midToIndex = /* @__PURE__ */ new Map();
          this._iceParameters = iceParameters;
          this._iceCandidates = iceCandidates;
          this._dtlsParameters = dtlsParameters;
          this._sctpParameters = sctpParameters;
          this._plainRtpParameters = plainRtpParameters;
          this._planB = planB;
          this._sdpObject = {
            version: 0,
            origin: {
              address: "0.0.0.0",
              ipVer: 4,
              netType: "IN",
              sessionId: 1e4,
              sessionVersion: 0,
              username: "mediasoup-client"
            },
            name: "-",
            timing: {
              start: 0,
              stop: 0
            },
            media: []
          };
          if (iceParameters?.iceLite) {
            this._sdpObject.icelite = "ice-lite";
          }
          if (dtlsParameters) {
            this._sdpObject.msidSemantic = {
              semantic: "WMS",
              token: "*"
            };
            const numFingerprints = this._dtlsParameters.fingerprints.length;
            this._sdpObject.fingerprint = {
              type: dtlsParameters.fingerprints[numFingerprints - 1].algorithm,
              hash: dtlsParameters.fingerprints[numFingerprints - 1].value
            };
            this._sdpObject.groups = [
              {
                type: "BUNDLE",
                mids: ""
              }
            ];
          }
          if (plainRtpParameters) {
            this._sdpObject.origin.address = plainRtpParameters.ip;
            this._sdpObject.origin.ipVer = plainRtpParameters.ipVersion;
          }
        }
        updateIceParameters(iceParameters) {
          logger.debug("updateIceParameters() [iceParameters:%o]", iceParameters);
          this._iceParameters = iceParameters;
          this._sdpObject.icelite = iceParameters.iceLite ? "ice-lite" : void 0;
          for (const mediaSection of this._mediaSections) {
            mediaSection.setIceParameters(iceParameters);
          }
        }
        updateDtlsRole(role) {
          logger.debug("updateDtlsRole() [role:%s]", role);
          this._dtlsParameters.role = role;
          for (const mediaSection of this._mediaSections) {
            mediaSection.setDtlsRole(role);
          }
        }
        getNextMediaSectionIdx() {
          for (let idx = 0; idx < this._mediaSections.length; ++idx) {
            const mediaSection = this._mediaSections[idx];
            if (mediaSection.closed) {
              return {
                idx,
                reuseMid: mediaSection.mid
              };
            }
          }
          return {
            idx: this._mediaSections.length
          };
        }
        send({ offerMediaObject, reuseMid, offerRtpParameters, answerRtpParameters, codecOptions, extmapAllowMixed = false }) {
          const mediaSection = new MediaSection_1.AnswerMediaSection({
            iceParameters: this._iceParameters,
            iceCandidates: this._iceCandidates,
            dtlsParameters: this._dtlsParameters,
            plainRtpParameters: this._plainRtpParameters,
            planB: this._planB,
            offerMediaObject,
            offerRtpParameters,
            answerRtpParameters,
            codecOptions,
            extmapAllowMixed
          });
          if (reuseMid) {
            this._replaceMediaSection(mediaSection, reuseMid);
          } else if (!this._midToIndex.has(mediaSection.mid)) {
            this._addMediaSection(mediaSection);
          } else {
            this._replaceMediaSection(mediaSection);
          }
        }
        receive({ mid, kind, offerRtpParameters, streamId, trackId }) {
          const idx = this._midToIndex.get(mid);
          let mediaSection;
          if (idx !== void 0) {
            mediaSection = this._mediaSections[idx];
          }
          if (!mediaSection) {
            mediaSection = new MediaSection_1.OfferMediaSection({
              iceParameters: this._iceParameters,
              iceCandidates: this._iceCandidates,
              dtlsParameters: this._dtlsParameters,
              plainRtpParameters: this._plainRtpParameters,
              planB: this._planB,
              mid,
              kind,
              offerRtpParameters,
              streamId,
              trackId
            });
            const oldMediaSection = this._mediaSections.find((m) => m.closed);
            if (oldMediaSection) {
              this._replaceMediaSection(mediaSection, oldMediaSection.mid);
            } else {
              this._addMediaSection(mediaSection);
            }
          } else {
            mediaSection.planBReceive({
              offerRtpParameters,
              streamId,
              trackId
            });
            this._replaceMediaSection(mediaSection);
          }
        }
        pauseMediaSection(mid) {
          const mediaSection = this._findMediaSection(mid);
          mediaSection.pause();
        }
        resumeSendingMediaSection(mid) {
          const mediaSection = this._findMediaSection(mid);
          mediaSection.resume();
        }
        resumeReceivingMediaSection(mid) {
          const mediaSection = this._findMediaSection(mid);
          mediaSection.resume();
        }
        disableMediaSection(mid) {
          const mediaSection = this._findMediaSection(mid);
          mediaSection.disable();
        }
        /**
         * Closes media section. Returns true if the given MID corresponds to a m
         * section that has been indeed closed. False otherwise.
         *
         * NOTE: Closing the first m section is a pain since it invalidates the bundled
         * transport, so instead closing it we just disable it.
         */
        closeMediaSection(mid) {
          const mediaSection = this._findMediaSection(mid);
          if (mid === this._firstMid) {
            logger.debug("closeMediaSection() | cannot close first media section, disabling it instead [mid:%s]", mid);
            this.disableMediaSection(mid);
            return false;
          }
          mediaSection.close();
          this._regenerateBundleMids();
          return true;
        }
        muxMediaSectionSimulcast(mid, encodings) {
          const mediaSection = this._findMediaSection(mid);
          mediaSection.muxSimulcastStreams(encodings);
          this._replaceMediaSection(mediaSection);
        }
        planBStopReceiving({ mid, offerRtpParameters }) {
          const mediaSection = this._findMediaSection(mid);
          mediaSection.planBStopReceiving({
            offerRtpParameters
          });
          this._replaceMediaSection(mediaSection);
        }
        sendSctpAssociation({ offerMediaObject }) {
          const mediaSection = new MediaSection_1.AnswerMediaSection({
            iceParameters: this._iceParameters,
            iceCandidates: this._iceCandidates,
            dtlsParameters: this._dtlsParameters,
            sctpParameters: this._sctpParameters,
            plainRtpParameters: this._plainRtpParameters,
            offerMediaObject
          });
          this._addMediaSection(mediaSection);
        }
        receiveSctpAssociation({ oldDataChannelSpec = false } = {}) {
          const mediaSection = new MediaSection_1.OfferMediaSection({
            iceParameters: this._iceParameters,
            iceCandidates: this._iceCandidates,
            dtlsParameters: this._dtlsParameters,
            sctpParameters: this._sctpParameters,
            plainRtpParameters: this._plainRtpParameters,
            mid: "datachannel",
            kind: "application",
            oldDataChannelSpec
          });
          this._addMediaSection(mediaSection);
        }
        getSdp() {
          this._sdpObject.origin.sessionVersion++;
          return sdpTransform.write(this._sdpObject);
        }
        _addMediaSection(newMediaSection) {
          if (!this._firstMid) {
            this._firstMid = newMediaSection.mid;
          }
          this._mediaSections.push(newMediaSection);
          this._midToIndex.set(newMediaSection.mid, this._mediaSections.length - 1);
          this._sdpObject.media.push(newMediaSection.getObject());
          this._regenerateBundleMids();
        }
        _replaceMediaSection(newMediaSection, reuseMid) {
          if (typeof reuseMid === "string") {
            const idx = this._midToIndex.get(reuseMid);
            if (idx === void 0) {
              throw new Error(`no media section found for reuseMid '${reuseMid}'`);
            }
            const oldMediaSection = this._mediaSections[idx];
            this._mediaSections[idx] = newMediaSection;
            this._midToIndex.delete(oldMediaSection.mid);
            this._midToIndex.set(newMediaSection.mid, idx);
            this._sdpObject.media[idx] = newMediaSection.getObject();
            this._regenerateBundleMids();
          } else {
            const idx = this._midToIndex.get(newMediaSection.mid);
            if (idx === void 0) {
              throw new Error(`no media section found with mid '${newMediaSection.mid}'`);
            }
            this._mediaSections[idx] = newMediaSection;
            this._sdpObject.media[idx] = newMediaSection.getObject();
          }
        }
        _findMediaSection(mid) {
          const idx = this._midToIndex.get(mid);
          if (idx === void 0) {
            throw new Error(`no media section found with mid '${mid}'`);
          }
          return this._mediaSections[idx];
        }
        _regenerateBundleMids() {
          if (!this._dtlsParameters) {
            return;
          }
          this._sdpObject.groups[0].mids = this._mediaSections.filter((mediaSection) => !mediaSection.closed).map((mediaSection) => mediaSection.mid).join(" ");
        }
      }, __name(_a2, "RemoteSdp"), _a2);
      exports.RemoteSdp = RemoteSdp;
    }
  });

  // node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/scalabilityModes.js
  var require_scalabilityModes = __commonJS({
    "node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/scalabilityModes.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.parse = parse2;
      var ScalabilityModeRegex = new RegExp("^[LS]([1-9]\\d{0,1})T([1-9]\\d{0,1})");
      function parse2(scalabilityMode) {
        const match = ScalabilityModeRegex.exec(scalabilityMode ?? "");
        if (match) {
          return {
            spatialLayers: Number(match[1]),
            temporalLayers: Number(match[2])
          };
        } else {
          return {
            spatialLayers: 1,
            temporalLayers: 1
          };
        }
      }
      __name(parse2, "parse");
    }
  });

  // node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/handlers/Chrome111.js
  var require_Chrome111 = __commonJS({
    "node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/handlers/Chrome111.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: /* @__PURE__ */ __name(function() {
              return m[k];
            }, "get")
          };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", {
          enumerable: true,
          value: v
        });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Chrome111 = void 0;
      var sdpTransform = __importStar(require_lib3());
      var Logger_1 = require_Logger();
      var utils = __importStar(require_utils());
      var ortc = __importStar(require_ortc());
      var sdpCommonUtils = __importStar(require_commonUtils());
      var sdpUnifiedPlanUtils = __importStar(require_unifiedPlanUtils());
      var ortcUtils = __importStar(require_utils2());
      var errors_1 = require_errors();
      var HandlerInterface_1 = require_HandlerInterface();
      var RemoteSdp_1 = require_RemoteSdp();
      var scalabilityModes_1 = require_scalabilityModes();
      var logger = new Logger_1.Logger("Chrome111");
      var NAME = "Chrome111";
      var SCTP_NUM_STREAMS = {
        OS: 1024,
        MIS: 1024
      };
      var _a2;
      var Chrome111 = (_a2 = class extends HandlerInterface_1.HandlerInterface {
        /**
         * Creates a factory function.
         */
        static createFactory() {
          return () => new _a2();
        }
        constructor() {
          super();
          this._closed = false;
          this._mapMidTransceiver = /* @__PURE__ */ new Map();
          this._sendStream = new MediaStream();
          this._hasDataChannelMediaSection = false;
          this._nextSendSctpStreamId = 0;
          this._transportReady = false;
        }
        get name() {
          return NAME;
        }
        close() {
          logger.debug("close()");
          if (this._closed) {
            return;
          }
          this._closed = true;
          if (this._pc) {
            try {
              this._pc.close();
            } catch (error) {
            }
          }
          this.emit("@close");
        }
        async getNativeRtpCapabilities() {
          logger.debug("getNativeRtpCapabilities()");
          const pc = new RTCPeerConnection({
            iceServers: [],
            iceTransportPolicy: "all",
            bundlePolicy: "max-bundle",
            rtcpMuxPolicy: "require",
            sdpSemantics: "unified-plan"
          });
          try {
            pc.addTransceiver("audio");
            pc.addTransceiver("video");
            const offer = await pc.createOffer();
            try {
              pc.close();
            } catch (error) {
            }
            const sdpObject = sdpTransform.parse(offer.sdp);
            const nativeRtpCapabilities = sdpCommonUtils.extractRtpCapabilities({
              sdpObject
            });
            ortcUtils.addNackSuppportForOpus(nativeRtpCapabilities);
            return nativeRtpCapabilities;
          } catch (error) {
            try {
              pc.close();
            } catch (error2) {
            }
            throw error;
          }
        }
        async getNativeSctpCapabilities() {
          logger.debug("getNativeSctpCapabilities()");
          return {
            numStreams: SCTP_NUM_STREAMS
          };
        }
        run({ direction, iceParameters, iceCandidates, dtlsParameters, sctpParameters, iceServers, iceTransportPolicy, additionalSettings, proprietaryConstraints, extendedRtpCapabilities }) {
          this.assertNotClosed();
          logger.debug("run()");
          this._direction = direction;
          this._remoteSdp = new RemoteSdp_1.RemoteSdp({
            iceParameters,
            iceCandidates,
            dtlsParameters,
            sctpParameters
          });
          this._sendingRtpParametersByKind = {
            audio: ortc.getSendingRtpParameters("audio", extendedRtpCapabilities),
            video: ortc.getSendingRtpParameters("video", extendedRtpCapabilities)
          };
          this._sendingRemoteRtpParametersByKind = {
            audio: ortc.getSendingRemoteRtpParameters("audio", extendedRtpCapabilities),
            video: ortc.getSendingRemoteRtpParameters("video", extendedRtpCapabilities)
          };
          if (dtlsParameters.role && dtlsParameters.role !== "auto") {
            this._forcedLocalDtlsRole = dtlsParameters.role === "server" ? "client" : "server";
          }
          this._pc = new RTCPeerConnection({
            iceServers: iceServers ?? [],
            iceTransportPolicy: iceTransportPolicy ?? "all",
            bundlePolicy: "max-bundle",
            rtcpMuxPolicy: "require",
            sdpSemantics: "unified-plan",
            ...additionalSettings
          }, proprietaryConstraints);
          this._pc.addEventListener("icegatheringstatechange", () => {
            this.emit("@icegatheringstatechange", this._pc.iceGatheringState);
          });
          if (this._pc.connectionState) {
            this._pc.addEventListener("connectionstatechange", () => {
              this.emit("@connectionstatechange", this._pc.connectionState);
            });
          } else {
            logger.warn("run() | pc.connectionState not supported, using pc.iceConnectionState");
            this._pc.addEventListener("iceconnectionstatechange", () => {
              switch (this._pc.iceConnectionState) {
                case "checking": {
                  this.emit("@connectionstatechange", "connecting");
                  break;
                }
                case "connected":
                case "completed": {
                  this.emit("@connectionstatechange", "connected");
                  break;
                }
                case "failed": {
                  this.emit("@connectionstatechange", "failed");
                  break;
                }
                case "disconnected": {
                  this.emit("@connectionstatechange", "disconnected");
                  break;
                }
                case "closed": {
                  this.emit("@connectionstatechange", "closed");
                  break;
                }
              }
            });
          }
        }
        async updateIceServers(iceServers) {
          this.assertNotClosed();
          logger.debug("updateIceServers()");
          const configuration = this._pc.getConfiguration();
          configuration.iceServers = iceServers;
          this._pc.setConfiguration(configuration);
        }
        async restartIce(iceParameters) {
          this.assertNotClosed();
          logger.debug("restartIce()");
          this._remoteSdp.updateIceParameters(iceParameters);
          if (!this._transportReady) {
            return;
          }
          if (this._direction === "send") {
            const offer = await this._pc.createOffer({
              iceRestart: true
            });
            logger.debug("restartIce() | calling pc.setLocalDescription() [offer:%o]", offer);
            await this._pc.setLocalDescription(offer);
            const answer = {
              type: "answer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("restartIce() | calling pc.setRemoteDescription() [answer:%o]", answer);
            await this._pc.setRemoteDescription(answer);
          } else {
            const offer = {
              type: "offer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("restartIce() | calling pc.setRemoteDescription() [offer:%o]", offer);
            await this._pc.setRemoteDescription(offer);
            const answer = await this._pc.createAnswer();
            logger.debug("restartIce() | calling pc.setLocalDescription() [answer:%o]", answer);
            await this._pc.setLocalDescription(answer);
          }
        }
        async getTransportStats() {
          this.assertNotClosed();
          return this._pc.getStats();
        }
        async send({ track, encodings, codecOptions, codec, onRtpSender }) {
          this.assertNotClosed();
          this.assertSendDirection();
          logger.debug("send() [kind:%s, track.id:%s]", track.kind, track.id);
          if (encodings && encodings.length > 1) {
            let maxTemporalLayers = 1;
            for (const encoding of encodings) {
              const temporalLayers = encoding.scalabilityMode ? (0, scalabilityModes_1.parse)(encoding.scalabilityMode).temporalLayers : 3;
              if (temporalLayers > maxTemporalLayers) {
                maxTemporalLayers = temporalLayers;
              }
            }
            encodings.forEach((encoding, idx) => {
              encoding.rid = `r${idx}`;
              encoding.scalabilityMode = `L1T${maxTemporalLayers}`;
            });
          }
          const sendingRtpParameters = utils.clone(this._sendingRtpParametersByKind[track.kind]);
          sendingRtpParameters.codecs = ortc.reduceCodecs(sendingRtpParameters.codecs, codec);
          const sendingRemoteRtpParameters = utils.clone(this._sendingRemoteRtpParametersByKind[track.kind]);
          sendingRemoteRtpParameters.codecs = ortc.reduceCodecs(sendingRemoteRtpParameters.codecs, codec);
          const mediaSectionIdx = this._remoteSdp.getNextMediaSectionIdx();
          const transceiver = this._pc.addTransceiver(track, {
            direction: "sendonly",
            streams: [
              this._sendStream
            ],
            sendEncodings: encodings
          });
          if (onRtpSender) {
            onRtpSender(transceiver.sender);
          }
          const offer = await this._pc.createOffer();
          let localSdpObject = sdpTransform.parse(offer.sdp);
          if (!this._transportReady) {
            await this.setupTransport({
              localDtlsRole: this._forcedLocalDtlsRole ?? "client",
              localSdpObject
            });
          }
          logger.debug("send() | calling pc.setLocalDescription() [offer:%o]", offer);
          await this._pc.setLocalDescription(offer);
          const localId = transceiver.mid;
          sendingRtpParameters.mid = localId;
          localSdpObject = sdpTransform.parse(this._pc.localDescription.sdp);
          const offerMediaObject = localSdpObject.media[mediaSectionIdx.idx];
          sendingRtpParameters.rtcp.cname = sdpCommonUtils.getCname({
            offerMediaObject
          });
          if (!encodings) {
            sendingRtpParameters.encodings = sdpUnifiedPlanUtils.getRtpEncodings({
              offerMediaObject
            });
          } else if (encodings.length === 1) {
            const newEncodings = sdpUnifiedPlanUtils.getRtpEncodings({
              offerMediaObject
            });
            Object.assign(newEncodings[0], encodings[0]);
            sendingRtpParameters.encodings = newEncodings;
          } else {
            sendingRtpParameters.encodings = encodings;
          }
          this._remoteSdp.send({
            offerMediaObject,
            reuseMid: mediaSectionIdx.reuseMid,
            offerRtpParameters: sendingRtpParameters,
            answerRtpParameters: sendingRemoteRtpParameters,
            codecOptions,
            extmapAllowMixed: true
          });
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("send() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
          this._mapMidTransceiver.set(localId, transceiver);
          return {
            localId,
            rtpParameters: sendingRtpParameters,
            rtpSender: transceiver.sender
          };
        }
        async stopSending(localId) {
          this.assertSendDirection();
          logger.debug("stopSending() [localId:%s]", localId);
          if (this._closed) {
            return;
          }
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          void transceiver.sender.replaceTrack(null);
          this._pc.removeTrack(transceiver.sender);
          const mediaSectionClosed = this._remoteSdp.closeMediaSection(transceiver.mid);
          if (mediaSectionClosed) {
            try {
              transceiver.stop();
            } catch (error) {
            }
          }
          const offer = await this._pc.createOffer();
          logger.debug("stopSending() | calling pc.setLocalDescription() [offer:%o]", offer);
          await this._pc.setLocalDescription(offer);
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("stopSending() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
          this._mapMidTransceiver.delete(localId);
        }
        async pauseSending(localId) {
          this.assertNotClosed();
          this.assertSendDirection();
          logger.debug("pauseSending() [localId:%s]", localId);
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          transceiver.direction = "inactive";
          this._remoteSdp.pauseMediaSection(localId);
          const offer = await this._pc.createOffer();
          logger.debug("pauseSending() | calling pc.setLocalDescription() [offer:%o]", offer);
          await this._pc.setLocalDescription(offer);
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("pauseSending() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
        }
        async resumeSending(localId) {
          this.assertNotClosed();
          this.assertSendDirection();
          logger.debug("resumeSending() [localId:%s]", localId);
          const transceiver = this._mapMidTransceiver.get(localId);
          this._remoteSdp.resumeSendingMediaSection(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          transceiver.direction = "sendonly";
          const offer = await this._pc.createOffer();
          logger.debug("resumeSending() | calling pc.setLocalDescription() [offer:%o]", offer);
          await this._pc.setLocalDescription(offer);
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("resumeSending() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
        }
        async replaceTrack(localId, track) {
          this.assertNotClosed();
          this.assertSendDirection();
          if (track) {
            logger.debug("replaceTrack() [localId:%s, track.id:%s]", localId, track.id);
          } else {
            logger.debug("replaceTrack() [localId:%s, no track]", localId);
          }
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          await transceiver.sender.replaceTrack(track);
        }
        async setMaxSpatialLayer(localId, spatialLayer) {
          this.assertNotClosed();
          this.assertSendDirection();
          logger.debug("setMaxSpatialLayer() [localId:%s, spatialLayer:%s]", localId, spatialLayer);
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          const parameters = transceiver.sender.getParameters();
          parameters.encodings.forEach((encoding, idx) => {
            if (idx <= spatialLayer) {
              encoding.active = true;
            } else {
              encoding.active = false;
            }
          });
          await transceiver.sender.setParameters(parameters);
          this._remoteSdp.muxMediaSectionSimulcast(localId, parameters.encodings);
          const offer = await this._pc.createOffer();
          logger.debug("setMaxSpatialLayer() | calling pc.setLocalDescription() [offer:%o]", offer);
          await this._pc.setLocalDescription(offer);
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("setMaxSpatialLayer() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
        }
        async setRtpEncodingParameters(localId, params) {
          this.assertNotClosed();
          this.assertSendDirection();
          logger.debug("setRtpEncodingParameters() [localId:%s, params:%o]", localId, params);
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          const parameters = transceiver.sender.getParameters();
          parameters.encodings.forEach((encoding, idx) => {
            parameters.encodings[idx] = {
              ...encoding,
              ...params
            };
          });
          await transceiver.sender.setParameters(parameters);
          this._remoteSdp.muxMediaSectionSimulcast(localId, parameters.encodings);
          const offer = await this._pc.createOffer();
          logger.debug("setRtpEncodingParameters() | calling pc.setLocalDescription() [offer:%o]", offer);
          await this._pc.setLocalDescription(offer);
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("setRtpEncodingParameters() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
        }
        async getSenderStats(localId) {
          this.assertNotClosed();
          this.assertSendDirection();
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          return transceiver.sender.getStats();
        }
        async sendDataChannel({ ordered, maxPacketLifeTime, maxRetransmits, label, protocol: protocol4 }) {
          this.assertNotClosed();
          this.assertSendDirection();
          const options = {
            negotiated: true,
            id: this._nextSendSctpStreamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmits,
            protocol: protocol4
          };
          logger.debug("sendDataChannel() [options:%o]", options);
          const dataChannel = this._pc.createDataChannel(label, options);
          this._nextSendSctpStreamId = ++this._nextSendSctpStreamId % SCTP_NUM_STREAMS.MIS;
          if (!this._hasDataChannelMediaSection) {
            const offer = await this._pc.createOffer();
            const localSdpObject = sdpTransform.parse(offer.sdp);
            const offerMediaObject = localSdpObject.media.find((m) => m.type === "application");
            if (!this._transportReady) {
              await this.setupTransport({
                localDtlsRole: this._forcedLocalDtlsRole ?? "client",
                localSdpObject
              });
            }
            logger.debug("sendDataChannel() | calling pc.setLocalDescription() [offer:%o]", offer);
            await this._pc.setLocalDescription(offer);
            this._remoteSdp.sendSctpAssociation({
              offerMediaObject
            });
            const answer = {
              type: "answer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("sendDataChannel() | calling pc.setRemoteDescription() [answer:%o]", answer);
            await this._pc.setRemoteDescription(answer);
            this._hasDataChannelMediaSection = true;
          }
          const sctpStreamParameters = {
            streamId: options.id,
            ordered: options.ordered,
            maxPacketLifeTime: options.maxPacketLifeTime,
            maxRetransmits: options.maxRetransmits
          };
          return {
            dataChannel,
            sctpStreamParameters
          };
        }
        async receive(optionsList) {
          this.assertNotClosed();
          this.assertRecvDirection();
          const results = [];
          const mapLocalId = /* @__PURE__ */ new Map();
          for (const options of optionsList) {
            const { trackId, kind, rtpParameters, streamId } = options;
            logger.debug("receive() [trackId:%s, kind:%s]", trackId, kind);
            const localId = rtpParameters.mid ?? String(this._mapMidTransceiver.size);
            mapLocalId.set(trackId, localId);
            this._remoteSdp.receive({
              mid: localId,
              kind,
              offerRtpParameters: rtpParameters,
              streamId: streamId ?? rtpParameters.rtcp.cname,
              trackId
            });
          }
          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("receive() | calling pc.setRemoteDescription() [offer:%o]", offer);
          await this._pc.setRemoteDescription(offer);
          for (const options of optionsList) {
            const { trackId, onRtpReceiver } = options;
            if (onRtpReceiver) {
              const localId = mapLocalId.get(trackId);
              const transceiver = this._pc.getTransceivers().find((t) => t.mid === localId);
              if (!transceiver) {
                throw new Error("transceiver not found");
              }
              onRtpReceiver(transceiver.receiver);
            }
          }
          let answer = await this._pc.createAnswer();
          const localSdpObject = sdpTransform.parse(answer.sdp);
          for (const options of optionsList) {
            const { trackId, rtpParameters } = options;
            const localId = mapLocalId.get(trackId);
            const answerMediaObject = localSdpObject.media.find((m) => String(m.mid) === localId);
            sdpCommonUtils.applyCodecParameters({
              offerRtpParameters: rtpParameters,
              answerMediaObject
            });
          }
          answer = {
            type: "answer",
            sdp: sdpTransform.write(localSdpObject)
          };
          if (!this._transportReady) {
            await this.setupTransport({
              localDtlsRole: this._forcedLocalDtlsRole ?? "client",
              localSdpObject
            });
          }
          logger.debug("receive() | calling pc.setLocalDescription() [answer:%o]", answer);
          await this._pc.setLocalDescription(answer);
          for (const options of optionsList) {
            const { trackId } = options;
            const localId = mapLocalId.get(trackId);
            const transceiver = this._pc.getTransceivers().find((t) => t.mid === localId);
            if (!transceiver) {
              throw new Error("new RTCRtpTransceiver not found");
            } else {
              this._mapMidTransceiver.set(localId, transceiver);
              results.push({
                localId,
                track: transceiver.receiver.track,
                rtpReceiver: transceiver.receiver
              });
            }
          }
          return results;
        }
        async stopReceiving(localIds) {
          this.assertRecvDirection();
          if (this._closed) {
            return;
          }
          for (const localId of localIds) {
            logger.debug("stopReceiving() [localId:%s]", localId);
            const transceiver = this._mapMidTransceiver.get(localId);
            if (!transceiver) {
              throw new Error("associated RTCRtpTransceiver not found");
            }
            this._remoteSdp.closeMediaSection(transceiver.mid);
          }
          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("stopReceiving() | calling pc.setRemoteDescription() [offer:%o]", offer);
          await this._pc.setRemoteDescription(offer);
          const answer = await this._pc.createAnswer();
          logger.debug("stopReceiving() | calling pc.setLocalDescription() [answer:%o]", answer);
          await this._pc.setLocalDescription(answer);
          for (const localId of localIds) {
            this._mapMidTransceiver.delete(localId);
          }
        }
        async pauseReceiving(localIds) {
          this.assertNotClosed();
          this.assertRecvDirection();
          for (const localId of localIds) {
            logger.debug("pauseReceiving() [localId:%s]", localId);
            const transceiver = this._mapMidTransceiver.get(localId);
            if (!transceiver) {
              throw new Error("associated RTCRtpTransceiver not found");
            }
            transceiver.direction = "inactive";
            this._remoteSdp.pauseMediaSection(localId);
          }
          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("pauseReceiving() | calling pc.setRemoteDescription() [offer:%o]", offer);
          await this._pc.setRemoteDescription(offer);
          const answer = await this._pc.createAnswer();
          logger.debug("pauseReceiving() | calling pc.setLocalDescription() [answer:%o]", answer);
          await this._pc.setLocalDescription(answer);
        }
        async resumeReceiving(localIds) {
          this.assertNotClosed();
          this.assertRecvDirection();
          for (const localId of localIds) {
            logger.debug("resumeReceiving() [localId:%s]", localId);
            const transceiver = this._mapMidTransceiver.get(localId);
            if (!transceiver) {
              throw new Error("associated RTCRtpTransceiver not found");
            }
            transceiver.direction = "recvonly";
            this._remoteSdp.resumeReceivingMediaSection(localId);
          }
          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("resumeReceiving() | calling pc.setRemoteDescription() [offer:%o]", offer);
          await this._pc.setRemoteDescription(offer);
          const answer = await this._pc.createAnswer();
          logger.debug("resumeReceiving() | calling pc.setLocalDescription() [answer:%o]", answer);
          await this._pc.setLocalDescription(answer);
        }
        async getReceiverStats(localId) {
          this.assertNotClosed();
          this.assertRecvDirection();
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          return transceiver.receiver.getStats();
        }
        async receiveDataChannel({ sctpStreamParameters, label, protocol: protocol4 }) {
          this.assertNotClosed();
          this.assertRecvDirection();
          const { streamId, ordered, maxPacketLifeTime, maxRetransmits } = sctpStreamParameters;
          const options = {
            negotiated: true,
            id: streamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmits,
            protocol: protocol4
          };
          logger.debug("receiveDataChannel() [options:%o]", options);
          const dataChannel = this._pc.createDataChannel(label, options);
          if (!this._hasDataChannelMediaSection) {
            this._remoteSdp.receiveSctpAssociation();
            const offer = {
              type: "offer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("receiveDataChannel() | calling pc.setRemoteDescription() [offer:%o]", offer);
            await this._pc.setRemoteDescription(offer);
            const answer = await this._pc.createAnswer();
            if (!this._transportReady) {
              const localSdpObject = sdpTransform.parse(answer.sdp);
              await this.setupTransport({
                localDtlsRole: this._forcedLocalDtlsRole ?? "client",
                localSdpObject
              });
            }
            logger.debug("receiveDataChannel() | calling pc.setRemoteDescription() [answer:%o]", answer);
            await this._pc.setLocalDescription(answer);
            this._hasDataChannelMediaSection = true;
          }
          return {
            dataChannel
          };
        }
        async setupTransport({ localDtlsRole, localSdpObject }) {
          if (!localSdpObject) {
            localSdpObject = sdpTransform.parse(this._pc.localDescription.sdp);
          }
          const dtlsParameters = sdpCommonUtils.extractDtlsParameters({
            sdpObject: localSdpObject
          });
          dtlsParameters.role = localDtlsRole;
          this._remoteSdp.updateDtlsRole(localDtlsRole === "client" ? "server" : "client");
          await new Promise((resolve, reject) => {
            this.safeEmit("@connect", {
              dtlsParameters
            }, resolve, reject);
          });
          this._transportReady = true;
        }
        assertNotClosed() {
          if (this._closed) {
            throw new errors_1.InvalidStateError("method called in a closed handler");
          }
        }
        assertSendDirection() {
          if (this._direction !== "send") {
            throw new Error('method can just be called for handlers with "send" direction');
          }
        }
        assertRecvDirection() {
          if (this._direction !== "recv") {
            throw new Error('method can just be called for handlers with "recv" direction');
          }
        }
      }, __name(_a2, "Chrome111"), _a2);
      exports.Chrome111 = Chrome111;
    }
  });

  // node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/handlers/Chrome74.js
  var require_Chrome74 = __commonJS({
    "node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/handlers/Chrome74.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: /* @__PURE__ */ __name(function() {
              return m[k];
            }, "get")
          };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", {
          enumerable: true,
          value: v
        });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Chrome74 = void 0;
      var sdpTransform = __importStar(require_lib3());
      var Logger_1 = require_Logger();
      var utils = __importStar(require_utils());
      var ortc = __importStar(require_ortc());
      var sdpCommonUtils = __importStar(require_commonUtils());
      var sdpUnifiedPlanUtils = __importStar(require_unifiedPlanUtils());
      var ortcUtils = __importStar(require_utils2());
      var errors_1 = require_errors();
      var HandlerInterface_1 = require_HandlerInterface();
      var RemoteSdp_1 = require_RemoteSdp();
      var scalabilityModes_1 = require_scalabilityModes();
      var logger = new Logger_1.Logger("Chrome74");
      var NAME = "Chrome74";
      var SCTP_NUM_STREAMS = {
        OS: 1024,
        MIS: 1024
      };
      var _a2;
      var Chrome74 = (_a2 = class extends HandlerInterface_1.HandlerInterface {
        /**
         * Creates a factory function.
         */
        static createFactory() {
          return () => new _a2();
        }
        constructor() {
          super();
          this._closed = false;
          this._mapMidTransceiver = /* @__PURE__ */ new Map();
          this._sendStream = new MediaStream();
          this._hasDataChannelMediaSection = false;
          this._nextSendSctpStreamId = 0;
          this._transportReady = false;
        }
        get name() {
          return NAME;
        }
        close() {
          logger.debug("close()");
          if (this._closed) {
            return;
          }
          this._closed = true;
          if (this._pc) {
            try {
              this._pc.close();
            } catch (error) {
            }
          }
          this.emit("@close");
        }
        async getNativeRtpCapabilities() {
          logger.debug("getNativeRtpCapabilities()");
          const pc = new RTCPeerConnection({
            iceServers: [],
            iceTransportPolicy: "all",
            bundlePolicy: "max-bundle",
            rtcpMuxPolicy: "require",
            sdpSemantics: "unified-plan"
          });
          try {
            pc.addTransceiver("audio");
            pc.addTransceiver("video");
            const offer = await pc.createOffer();
            try {
              pc.close();
            } catch (error) {
            }
            const sdpObject = sdpTransform.parse(offer.sdp);
            const nativeRtpCapabilities = sdpCommonUtils.extractRtpCapabilities({
              sdpObject
            });
            ortcUtils.addNackSuppportForOpus(nativeRtpCapabilities);
            return nativeRtpCapabilities;
          } catch (error) {
            try {
              pc.close();
            } catch (error2) {
            }
            throw error;
          }
        }
        async getNativeSctpCapabilities() {
          logger.debug("getNativeSctpCapabilities()");
          return {
            numStreams: SCTP_NUM_STREAMS
          };
        }
        run({ direction, iceParameters, iceCandidates, dtlsParameters, sctpParameters, iceServers, iceTransportPolicy, additionalSettings, proprietaryConstraints, extendedRtpCapabilities }) {
          logger.debug("run()");
          this._direction = direction;
          this._remoteSdp = new RemoteSdp_1.RemoteSdp({
            iceParameters,
            iceCandidates,
            dtlsParameters,
            sctpParameters
          });
          this._sendingRtpParametersByKind = {
            audio: ortc.getSendingRtpParameters("audio", extendedRtpCapabilities),
            video: ortc.getSendingRtpParameters("video", extendedRtpCapabilities)
          };
          this._sendingRemoteRtpParametersByKind = {
            audio: ortc.getSendingRemoteRtpParameters("audio", extendedRtpCapabilities),
            video: ortc.getSendingRemoteRtpParameters("video", extendedRtpCapabilities)
          };
          if (dtlsParameters.role && dtlsParameters.role !== "auto") {
            this._forcedLocalDtlsRole = dtlsParameters.role === "server" ? "client" : "server";
          }
          this._pc = new RTCPeerConnection({
            iceServers: iceServers ?? [],
            iceTransportPolicy: iceTransportPolicy ?? "all",
            bundlePolicy: "max-bundle",
            rtcpMuxPolicy: "require",
            sdpSemantics: "unified-plan",
            ...additionalSettings
          }, proprietaryConstraints);
          this._pc.addEventListener("icegatheringstatechange", () => {
            this.emit("@icegatheringstatechange", this._pc.iceGatheringState);
          });
          if (this._pc.connectionState) {
            this._pc.addEventListener("connectionstatechange", () => {
              this.emit("@connectionstatechange", this._pc.connectionState);
            });
          } else {
            logger.warn("run() | pc.connectionState not supported, using pc.iceConnectionState");
            this._pc.addEventListener("iceconnectionstatechange", () => {
              switch (this._pc.iceConnectionState) {
                case "checking": {
                  this.emit("@connectionstatechange", "connecting");
                  break;
                }
                case "connected":
                case "completed": {
                  this.emit("@connectionstatechange", "connected");
                  break;
                }
                case "failed": {
                  this.emit("@connectionstatechange", "failed");
                  break;
                }
                case "disconnected": {
                  this.emit("@connectionstatechange", "disconnected");
                  break;
                }
                case "closed": {
                  this.emit("@connectionstatechange", "closed");
                  break;
                }
              }
            });
          }
        }
        async updateIceServers(iceServers) {
          this.assertNotClosed();
          logger.debug("updateIceServers()");
          const configuration = this._pc.getConfiguration();
          configuration.iceServers = iceServers;
          this._pc.setConfiguration(configuration);
        }
        async restartIce(iceParameters) {
          this.assertNotClosed();
          logger.debug("restartIce()");
          this._remoteSdp.updateIceParameters(iceParameters);
          if (!this._transportReady) {
            return;
          }
          if (this._direction === "send") {
            const offer = await this._pc.createOffer({
              iceRestart: true
            });
            logger.debug("restartIce() | calling pc.setLocalDescription() [offer:%o]", offer);
            await this._pc.setLocalDescription(offer);
            const answer = {
              type: "answer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("restartIce() | calling pc.setRemoteDescription() [answer:%o]", answer);
            await this._pc.setRemoteDescription(answer);
          } else {
            const offer = {
              type: "offer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("restartIce() | calling pc.setRemoteDescription() [offer:%o]", offer);
            await this._pc.setRemoteDescription(offer);
            const answer = await this._pc.createAnswer();
            logger.debug("restartIce() | calling pc.setLocalDescription() [answer:%o]", answer);
            await this._pc.setLocalDescription(answer);
          }
        }
        async getTransportStats() {
          this.assertNotClosed();
          return this._pc.getStats();
        }
        async send({ track, encodings, codecOptions, codec }) {
          this.assertNotClosed();
          this.assertSendDirection();
          logger.debug("send() [kind:%s, track.id:%s]", track.kind, track.id);
          if (encodings && encodings.length > 1) {
            encodings.forEach((encoding, idx) => {
              encoding.rid = `r${idx}`;
            });
          }
          const sendingRtpParameters = utils.clone(this._sendingRtpParametersByKind[track.kind]);
          sendingRtpParameters.codecs = ortc.reduceCodecs(sendingRtpParameters.codecs, codec);
          const sendingRemoteRtpParameters = utils.clone(this._sendingRemoteRtpParametersByKind[track.kind]);
          sendingRemoteRtpParameters.codecs = ortc.reduceCodecs(sendingRemoteRtpParameters.codecs, codec);
          const mediaSectionIdx = this._remoteSdp.getNextMediaSectionIdx();
          const transceiver = this._pc.addTransceiver(track, {
            direction: "sendonly",
            streams: [
              this._sendStream
            ],
            sendEncodings: encodings
          });
          let offer = await this._pc.createOffer();
          let localSdpObject = sdpTransform.parse(offer.sdp);
          let offerMediaObject;
          if (!this._transportReady) {
            await this.setupTransport({
              localDtlsRole: this._forcedLocalDtlsRole ?? "client",
              localSdpObject
            });
          }
          let hackVp9Svc = false;
          const layers = (0, scalabilityModes_1.parse)((encodings ?? [
            {}
          ])[0].scalabilityMode);
          if (encodings && encodings.length === 1 && layers.spatialLayers > 1 && sendingRtpParameters.codecs[0].mimeType.toLowerCase() === "video/vp9") {
            logger.debug("send() | enabling legacy simulcast for VP9 SVC");
            hackVp9Svc = true;
            localSdpObject = sdpTransform.parse(offer.sdp);
            offerMediaObject = localSdpObject.media[mediaSectionIdx.idx];
            sdpUnifiedPlanUtils.addLegacySimulcast({
              offerMediaObject,
              numStreams: layers.spatialLayers
            });
            offer = {
              type: "offer",
              sdp: sdpTransform.write(localSdpObject)
            };
          }
          logger.debug("send() | calling pc.setLocalDescription() [offer:%o]", offer);
          await this._pc.setLocalDescription(offer);
          const localId = transceiver.mid;
          sendingRtpParameters.mid = localId;
          localSdpObject = sdpTransform.parse(this._pc.localDescription.sdp);
          offerMediaObject = localSdpObject.media[mediaSectionIdx.idx];
          sendingRtpParameters.rtcp.cname = sdpCommonUtils.getCname({
            offerMediaObject
          });
          if (!encodings) {
            sendingRtpParameters.encodings = sdpUnifiedPlanUtils.getRtpEncodings({
              offerMediaObject
            });
          } else if (encodings.length === 1) {
            let newEncodings = sdpUnifiedPlanUtils.getRtpEncodings({
              offerMediaObject
            });
            Object.assign(newEncodings[0], encodings[0]);
            if (hackVp9Svc) {
              newEncodings = [
                newEncodings[0]
              ];
            }
            sendingRtpParameters.encodings = newEncodings;
          } else {
            sendingRtpParameters.encodings = encodings;
          }
          if (sendingRtpParameters.encodings.length > 1 && (sendingRtpParameters.codecs[0].mimeType.toLowerCase() === "video/vp8" || sendingRtpParameters.codecs[0].mimeType.toLowerCase() === "video/h264")) {
            for (const encoding of sendingRtpParameters.encodings) {
              if (encoding.scalabilityMode) {
                encoding.scalabilityMode = `L1T${layers.temporalLayers}`;
              } else {
                encoding.scalabilityMode = "L1T3";
              }
            }
          }
          this._remoteSdp.send({
            offerMediaObject,
            reuseMid: mediaSectionIdx.reuseMid,
            offerRtpParameters: sendingRtpParameters,
            answerRtpParameters: sendingRemoteRtpParameters,
            codecOptions,
            extmapAllowMixed: true
          });
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("send() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
          this._mapMidTransceiver.set(localId, transceiver);
          return {
            localId,
            rtpParameters: sendingRtpParameters,
            rtpSender: transceiver.sender
          };
        }
        async stopSending(localId) {
          this.assertSendDirection();
          logger.debug("stopSending() [localId:%s]", localId);
          if (this._closed) {
            return;
          }
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          void transceiver.sender.replaceTrack(null);
          this._pc.removeTrack(transceiver.sender);
          const mediaSectionClosed = this._remoteSdp.closeMediaSection(transceiver.mid);
          if (mediaSectionClosed) {
            try {
              transceiver.stop();
            } catch (error) {
            }
          }
          const offer = await this._pc.createOffer();
          logger.debug("stopSending() | calling pc.setLocalDescription() [offer:%o]", offer);
          await this._pc.setLocalDescription(offer);
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("stopSending() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
          this._mapMidTransceiver.delete(localId);
        }
        async pauseSending(localId) {
          this.assertNotClosed();
          this.assertSendDirection();
          logger.debug("pauseSending() [localId:%s]", localId);
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          transceiver.direction = "inactive";
          this._remoteSdp.pauseMediaSection(localId);
          const offer = await this._pc.createOffer();
          logger.debug("pauseSending() | calling pc.setLocalDescription() [offer:%o]", offer);
          await this._pc.setLocalDescription(offer);
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("pauseSending() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
        }
        async resumeSending(localId) {
          this.assertNotClosed();
          this.assertSendDirection();
          logger.debug("resumeSending() [localId:%s]", localId);
          const transceiver = this._mapMidTransceiver.get(localId);
          this._remoteSdp.resumeSendingMediaSection(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          transceiver.direction = "sendonly";
          const offer = await this._pc.createOffer();
          logger.debug("resumeSending() | calling pc.setLocalDescription() [offer:%o]", offer);
          await this._pc.setLocalDescription(offer);
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("resumeSending() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
        }
        async replaceTrack(localId, track) {
          this.assertNotClosed();
          this.assertSendDirection();
          if (track) {
            logger.debug("replaceTrack() [localId:%s, track.id:%s]", localId, track.id);
          } else {
            logger.debug("replaceTrack() [localId:%s, no track]", localId);
          }
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          await transceiver.sender.replaceTrack(track);
        }
        async setMaxSpatialLayer(localId, spatialLayer) {
          this.assertNotClosed();
          this.assertSendDirection();
          logger.debug("setMaxSpatialLayer() [localId:%s, spatialLayer:%s]", localId, spatialLayer);
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          const parameters = transceiver.sender.getParameters();
          parameters.encodings.forEach((encoding, idx) => {
            if (idx <= spatialLayer) {
              encoding.active = true;
            } else {
              encoding.active = false;
            }
          });
          await transceiver.sender.setParameters(parameters);
          this._remoteSdp.muxMediaSectionSimulcast(localId, parameters.encodings);
          const offer = await this._pc.createOffer();
          logger.debug("setMaxSpatialLayer() | calling pc.setLocalDescription() [offer:%o]", offer);
          await this._pc.setLocalDescription(offer);
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("setMaxSpatialLayer() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
        }
        async setRtpEncodingParameters(localId, params) {
          this.assertNotClosed();
          this.assertSendDirection();
          logger.debug("setRtpEncodingParameters() [localId:%s, params:%o]", localId, params);
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          const parameters = transceiver.sender.getParameters();
          parameters.encodings.forEach((encoding, idx) => {
            parameters.encodings[idx] = {
              ...encoding,
              ...params
            };
          });
          await transceiver.sender.setParameters(parameters);
          this._remoteSdp.muxMediaSectionSimulcast(localId, parameters.encodings);
          const offer = await this._pc.createOffer();
          logger.debug("setRtpEncodingParameters() | calling pc.setLocalDescription() [offer:%o]", offer);
          await this._pc.setLocalDescription(offer);
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("setRtpEncodingParameters() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
        }
        async getSenderStats(localId) {
          this.assertNotClosed();
          this.assertSendDirection();
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          return transceiver.sender.getStats();
        }
        async sendDataChannel({ ordered, maxPacketLifeTime, maxRetransmits, label, protocol: protocol4 }) {
          this.assertNotClosed();
          this.assertSendDirection();
          const options = {
            negotiated: true,
            id: this._nextSendSctpStreamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmits,
            protocol: protocol4
          };
          logger.debug("sendDataChannel() [options:%o]", options);
          const dataChannel = this._pc.createDataChannel(label, options);
          this._nextSendSctpStreamId = ++this._nextSendSctpStreamId % SCTP_NUM_STREAMS.MIS;
          if (!this._hasDataChannelMediaSection) {
            const offer = await this._pc.createOffer();
            const localSdpObject = sdpTransform.parse(offer.sdp);
            const offerMediaObject = localSdpObject.media.find((m) => m.type === "application");
            if (!this._transportReady) {
              await this.setupTransport({
                localDtlsRole: this._forcedLocalDtlsRole ?? "client",
                localSdpObject
              });
            }
            logger.debug("sendDataChannel() | calling pc.setLocalDescription() [offer:%o]", offer);
            await this._pc.setLocalDescription(offer);
            this._remoteSdp.sendSctpAssociation({
              offerMediaObject
            });
            const answer = {
              type: "answer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("sendDataChannel() | calling pc.setRemoteDescription() [answer:%o]", answer);
            await this._pc.setRemoteDescription(answer);
            this._hasDataChannelMediaSection = true;
          }
          const sctpStreamParameters = {
            streamId: options.id,
            ordered: options.ordered,
            maxPacketLifeTime: options.maxPacketLifeTime,
            maxRetransmits: options.maxRetransmits
          };
          return {
            dataChannel,
            sctpStreamParameters
          };
        }
        async receive(optionsList) {
          this.assertNotClosed();
          this.assertRecvDirection();
          const results = [];
          const mapLocalId = /* @__PURE__ */ new Map();
          for (const options of optionsList) {
            const { trackId, kind, rtpParameters, streamId } = options;
            logger.debug("receive() [trackId:%s, kind:%s]", trackId, kind);
            const localId = rtpParameters.mid ?? String(this._mapMidTransceiver.size);
            mapLocalId.set(trackId, localId);
            this._remoteSdp.receive({
              mid: localId,
              kind,
              offerRtpParameters: rtpParameters,
              streamId: streamId ?? rtpParameters.rtcp.cname,
              trackId
            });
          }
          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("receive() | calling pc.setRemoteDescription() [offer:%o]", offer);
          await this._pc.setRemoteDescription(offer);
          let answer = await this._pc.createAnswer();
          const localSdpObject = sdpTransform.parse(answer.sdp);
          for (const options of optionsList) {
            const { trackId, rtpParameters } = options;
            const localId = mapLocalId.get(trackId);
            const answerMediaObject = localSdpObject.media.find((m) => String(m.mid) === localId);
            sdpCommonUtils.applyCodecParameters({
              offerRtpParameters: rtpParameters,
              answerMediaObject
            });
          }
          answer = {
            type: "answer",
            sdp: sdpTransform.write(localSdpObject)
          };
          if (!this._transportReady) {
            await this.setupTransport({
              localDtlsRole: this._forcedLocalDtlsRole ?? "client",
              localSdpObject
            });
          }
          logger.debug("receive() | calling pc.setLocalDescription() [answer:%o]", answer);
          await this._pc.setLocalDescription(answer);
          for (const options of optionsList) {
            const { trackId } = options;
            const localId = mapLocalId.get(trackId);
            const transceiver = this._pc.getTransceivers().find((t) => t.mid === localId);
            if (!transceiver) {
              throw new Error("new RTCRtpTransceiver not found");
            } else {
              this._mapMidTransceiver.set(localId, transceiver);
              results.push({
                localId,
                track: transceiver.receiver.track,
                rtpReceiver: transceiver.receiver
              });
            }
          }
          return results;
        }
        async stopReceiving(localIds) {
          this.assertRecvDirection();
          if (this._closed) {
            return;
          }
          for (const localId of localIds) {
            logger.debug("stopReceiving() [localId:%s]", localId);
            const transceiver = this._mapMidTransceiver.get(localId);
            if (!transceiver) {
              throw new Error("associated RTCRtpTransceiver not found");
            }
            this._remoteSdp.closeMediaSection(transceiver.mid);
          }
          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("stopReceiving() | calling pc.setRemoteDescription() [offer:%o]", offer);
          await this._pc.setRemoteDescription(offer);
          const answer = await this._pc.createAnswer();
          logger.debug("stopReceiving() | calling pc.setLocalDescription() [answer:%o]", answer);
          await this._pc.setLocalDescription(answer);
          for (const localId of localIds) {
            this._mapMidTransceiver.delete(localId);
          }
        }
        async pauseReceiving(localIds) {
          this.assertNotClosed();
          this.assertRecvDirection();
          for (const localId of localIds) {
            logger.debug("pauseReceiving() [localId:%s]", localId);
            const transceiver = this._mapMidTransceiver.get(localId);
            if (!transceiver) {
              throw new Error("associated RTCRtpTransceiver not found");
            }
            transceiver.direction = "inactive";
            this._remoteSdp.pauseMediaSection(localId);
          }
          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("pauseReceiving() | calling pc.setRemoteDescription() [offer:%o]", offer);
          await this._pc.setRemoteDescription(offer);
          const answer = await this._pc.createAnswer();
          logger.debug("pauseReceiving() | calling pc.setLocalDescription() [answer:%o]", answer);
          await this._pc.setLocalDescription(answer);
        }
        async resumeReceiving(localIds) {
          this.assertNotClosed();
          this.assertRecvDirection();
          for (const localId of localIds) {
            logger.debug("resumeReceiving() [localId:%s]", localId);
            const transceiver = this._mapMidTransceiver.get(localId);
            if (!transceiver) {
              throw new Error("associated RTCRtpTransceiver not found");
            }
            transceiver.direction = "recvonly";
            this._remoteSdp.resumeReceivingMediaSection(localId);
          }
          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("resumeReceiving() | calling pc.setRemoteDescription() [offer:%o]", offer);
          await this._pc.setRemoteDescription(offer);
          const answer = await this._pc.createAnswer();
          logger.debug("resumeReceiving() | calling pc.setLocalDescription() [answer:%o]", answer);
          await this._pc.setLocalDescription(answer);
        }
        async getReceiverStats(localId) {
          this.assertNotClosed();
          this.assertRecvDirection();
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          return transceiver.receiver.getStats();
        }
        async receiveDataChannel({ sctpStreamParameters, label, protocol: protocol4 }) {
          this.assertNotClosed();
          this.assertRecvDirection();
          const { streamId, ordered, maxPacketLifeTime, maxRetransmits } = sctpStreamParameters;
          const options = {
            negotiated: true,
            id: streamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmits,
            protocol: protocol4
          };
          logger.debug("receiveDataChannel() [options:%o]", options);
          const dataChannel = this._pc.createDataChannel(label, options);
          if (!this._hasDataChannelMediaSection) {
            this._remoteSdp.receiveSctpAssociation();
            const offer = {
              type: "offer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("receiveDataChannel() | calling pc.setRemoteDescription() [offer:%o]", offer);
            await this._pc.setRemoteDescription(offer);
            const answer = await this._pc.createAnswer();
            if (!this._transportReady) {
              const localSdpObject = sdpTransform.parse(answer.sdp);
              await this.setupTransport({
                localDtlsRole: this._forcedLocalDtlsRole ?? "client",
                localSdpObject
              });
            }
            logger.debug("receiveDataChannel() | calling pc.setRemoteDescription() [answer:%o]", answer);
            await this._pc.setLocalDescription(answer);
            this._hasDataChannelMediaSection = true;
          }
          return {
            dataChannel
          };
        }
        async setupTransport({ localDtlsRole, localSdpObject }) {
          if (!localSdpObject) {
            localSdpObject = sdpTransform.parse(this._pc.localDescription.sdp);
          }
          const dtlsParameters = sdpCommonUtils.extractDtlsParameters({
            sdpObject: localSdpObject
          });
          dtlsParameters.role = localDtlsRole;
          this._remoteSdp.updateDtlsRole(localDtlsRole === "client" ? "server" : "client");
          await new Promise((resolve, reject) => {
            this.safeEmit("@connect", {
              dtlsParameters
            }, resolve, reject);
          });
          this._transportReady = true;
        }
        assertNotClosed() {
          if (this._closed) {
            throw new errors_1.InvalidStateError("method called in a closed handler");
          }
        }
        assertSendDirection() {
          if (this._direction !== "send") {
            throw new Error('method can just be called for handlers with "send" direction');
          }
        }
        assertRecvDirection() {
          if (this._direction !== "recv") {
            throw new Error('method can just be called for handlers with "recv" direction');
          }
        }
      }, __name(_a2, "Chrome74"), _a2);
      exports.Chrome74 = Chrome74;
    }
  });

  // node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/handlers/Chrome70.js
  var require_Chrome70 = __commonJS({
    "node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/handlers/Chrome70.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: /* @__PURE__ */ __name(function() {
              return m[k];
            }, "get")
          };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", {
          enumerable: true,
          value: v
        });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Chrome70 = void 0;
      var sdpTransform = __importStar(require_lib3());
      var Logger_1 = require_Logger();
      var utils = __importStar(require_utils());
      var ortc = __importStar(require_ortc());
      var sdpCommonUtils = __importStar(require_commonUtils());
      var sdpUnifiedPlanUtils = __importStar(require_unifiedPlanUtils());
      var HandlerInterface_1 = require_HandlerInterface();
      var RemoteSdp_1 = require_RemoteSdp();
      var scalabilityModes_1 = require_scalabilityModes();
      var logger = new Logger_1.Logger("Chrome70");
      var NAME = "Chrome70";
      var SCTP_NUM_STREAMS = {
        OS: 1024,
        MIS: 1024
      };
      var _a2;
      var Chrome70 = (_a2 = class extends HandlerInterface_1.HandlerInterface {
        /**
         * Creates a factory function.
         */
        static createFactory() {
          return () => new _a2();
        }
        constructor() {
          super();
          this._mapMidTransceiver = /* @__PURE__ */ new Map();
          this._sendStream = new MediaStream();
          this._hasDataChannelMediaSection = false;
          this._nextSendSctpStreamId = 0;
          this._transportReady = false;
        }
        get name() {
          return NAME;
        }
        close() {
          logger.debug("close()");
          if (this._pc) {
            try {
              this._pc.close();
            } catch (error) {
            }
          }
          this.emit("@close");
        }
        async getNativeRtpCapabilities() {
          logger.debug("getNativeRtpCapabilities()");
          const pc = new RTCPeerConnection({
            iceServers: [],
            iceTransportPolicy: "all",
            bundlePolicy: "max-bundle",
            rtcpMuxPolicy: "require",
            sdpSemantics: "unified-plan"
          });
          try {
            pc.addTransceiver("audio");
            pc.addTransceiver("video");
            const offer = await pc.createOffer();
            try {
              pc.close();
            } catch (error) {
            }
            const sdpObject = sdpTransform.parse(offer.sdp);
            const nativeRtpCapabilities = sdpCommonUtils.extractRtpCapabilities({
              sdpObject
            });
            return nativeRtpCapabilities;
          } catch (error) {
            try {
              pc.close();
            } catch (error2) {
            }
            throw error;
          }
        }
        async getNativeSctpCapabilities() {
          logger.debug("getNativeSctpCapabilities()");
          return {
            numStreams: SCTP_NUM_STREAMS
          };
        }
        run({ direction, iceParameters, iceCandidates, dtlsParameters, sctpParameters, iceServers, iceTransportPolicy, additionalSettings, proprietaryConstraints, extendedRtpCapabilities }) {
          logger.debug("run()");
          this._direction = direction;
          this._remoteSdp = new RemoteSdp_1.RemoteSdp({
            iceParameters,
            iceCandidates,
            dtlsParameters,
            sctpParameters
          });
          this._sendingRtpParametersByKind = {
            audio: ortc.getSendingRtpParameters("audio", extendedRtpCapabilities),
            video: ortc.getSendingRtpParameters("video", extendedRtpCapabilities)
          };
          this._sendingRemoteRtpParametersByKind = {
            audio: ortc.getSendingRemoteRtpParameters("audio", extendedRtpCapabilities),
            video: ortc.getSendingRemoteRtpParameters("video", extendedRtpCapabilities)
          };
          if (dtlsParameters.role && dtlsParameters.role !== "auto") {
            this._forcedLocalDtlsRole = dtlsParameters.role === "server" ? "client" : "server";
          }
          this._pc = new RTCPeerConnection({
            iceServers: iceServers ?? [],
            iceTransportPolicy: iceTransportPolicy ?? "all",
            bundlePolicy: "max-bundle",
            rtcpMuxPolicy: "require",
            sdpSemantics: "unified-plan",
            ...additionalSettings
          }, proprietaryConstraints);
          this._pc.addEventListener("icegatheringstatechange", () => {
            this.emit("@icegatheringstatechange", this._pc.iceGatheringState);
          });
          if (this._pc.connectionState) {
            this._pc.addEventListener("connectionstatechange", () => {
              this.emit("@connectionstatechange", this._pc.connectionState);
            });
          } else {
            this._pc.addEventListener("iceconnectionstatechange", () => {
              logger.warn("run() | pc.connectionState not supported, using pc.iceConnectionState");
              switch (this._pc.iceConnectionState) {
                case "checking": {
                  this.emit("@connectionstatechange", "connecting");
                  break;
                }
                case "connected":
                case "completed": {
                  this.emit("@connectionstatechange", "connected");
                  break;
                }
                case "failed": {
                  this.emit("@connectionstatechange", "failed");
                  break;
                }
                case "disconnected": {
                  this.emit("@connectionstatechange", "disconnected");
                  break;
                }
                case "closed": {
                  this.emit("@connectionstatechange", "closed");
                  break;
                }
              }
            });
          }
        }
        async updateIceServers(iceServers) {
          logger.debug("updateIceServers()");
          const configuration = this._pc.getConfiguration();
          configuration.iceServers = iceServers;
          this._pc.setConfiguration(configuration);
        }
        async restartIce(iceParameters) {
          logger.debug("restartIce()");
          this._remoteSdp.updateIceParameters(iceParameters);
          if (!this._transportReady) {
            return;
          }
          if (this._direction === "send") {
            const offer = await this._pc.createOffer({
              iceRestart: true
            });
            logger.debug("restartIce() | calling pc.setLocalDescription() [offer:%o]", offer);
            await this._pc.setLocalDescription(offer);
            const answer = {
              type: "answer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("restartIce() | calling pc.setRemoteDescription() [answer:%o]", answer);
            await this._pc.setRemoteDescription(answer);
          } else {
            const offer = {
              type: "offer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("restartIce() | calling pc.setRemoteDescription() [offer:%o]", offer);
            await this._pc.setRemoteDescription(offer);
            const answer = await this._pc.createAnswer();
            logger.debug("restartIce() | calling pc.setLocalDescription() [answer:%o]", answer);
            await this._pc.setLocalDescription(answer);
          }
        }
        async getTransportStats() {
          return this._pc.getStats();
        }
        async send({ track, encodings, codecOptions, codec }) {
          this.assertSendDirection();
          logger.debug("send() [kind:%s, track.id:%s]", track.kind, track.id);
          const sendingRtpParameters = utils.clone(this._sendingRtpParametersByKind[track.kind]);
          sendingRtpParameters.codecs = ortc.reduceCodecs(sendingRtpParameters.codecs, codec);
          const sendingRemoteRtpParameters = utils.clone(this._sendingRemoteRtpParametersByKind[track.kind]);
          sendingRemoteRtpParameters.codecs = ortc.reduceCodecs(sendingRemoteRtpParameters.codecs, codec);
          const mediaSectionIdx = this._remoteSdp.getNextMediaSectionIdx();
          const transceiver = this._pc.addTransceiver(track, {
            direction: "sendonly",
            streams: [
              this._sendStream
            ]
          });
          let offer = await this._pc.createOffer();
          let localSdpObject = sdpTransform.parse(offer.sdp);
          let offerMediaObject;
          if (!this._transportReady) {
            await this.setupTransport({
              localDtlsRole: this._forcedLocalDtlsRole ?? "client",
              localSdpObject
            });
          }
          if (encodings && encodings.length > 1) {
            logger.debug("send() | enabling legacy simulcast");
            localSdpObject = sdpTransform.parse(offer.sdp);
            offerMediaObject = localSdpObject.media[mediaSectionIdx.idx];
            sdpUnifiedPlanUtils.addLegacySimulcast({
              offerMediaObject,
              numStreams: encodings.length
            });
            offer = {
              type: "offer",
              sdp: sdpTransform.write(localSdpObject)
            };
          }
          let hackVp9Svc = false;
          const layers = (0, scalabilityModes_1.parse)((encodings ?? [
            {}
          ])[0].scalabilityMode);
          if (encodings && encodings.length === 1 && layers.spatialLayers > 1 && sendingRtpParameters.codecs[0].mimeType.toLowerCase() === "video/vp9") {
            logger.debug("send() | enabling legacy simulcast for VP9 SVC");
            hackVp9Svc = true;
            localSdpObject = sdpTransform.parse(offer.sdp);
            offerMediaObject = localSdpObject.media[mediaSectionIdx.idx];
            sdpUnifiedPlanUtils.addLegacySimulcast({
              offerMediaObject,
              numStreams: layers.spatialLayers
            });
            offer = {
              type: "offer",
              sdp: sdpTransform.write(localSdpObject)
            };
          }
          logger.debug("send() | calling pc.setLocalDescription() [offer:%o]", offer);
          await this._pc.setLocalDescription(offer);
          if (encodings) {
            logger.debug("send() | applying given encodings");
            const parameters = transceiver.sender.getParameters();
            for (let idx = 0; idx < (parameters.encodings ?? []).length; ++idx) {
              const encoding = parameters.encodings[idx];
              const desiredEncoding = encodings[idx];
              if (!desiredEncoding) {
                break;
              }
              parameters.encodings[idx] = Object.assign(encoding, desiredEncoding);
            }
            await transceiver.sender.setParameters(parameters);
          }
          const localId = transceiver.mid;
          sendingRtpParameters.mid = localId;
          localSdpObject = sdpTransform.parse(this._pc.localDescription.sdp);
          offerMediaObject = localSdpObject.media[mediaSectionIdx.idx];
          sendingRtpParameters.rtcp.cname = sdpCommonUtils.getCname({
            offerMediaObject
          });
          sendingRtpParameters.encodings = sdpUnifiedPlanUtils.getRtpEncodings({
            offerMediaObject
          });
          if (encodings) {
            for (let idx = 0; idx < sendingRtpParameters.encodings.length; ++idx) {
              if (encodings[idx]) {
                Object.assign(sendingRtpParameters.encodings[idx], encodings[idx]);
              }
            }
          }
          if (hackVp9Svc) {
            sendingRtpParameters.encodings = [
              sendingRtpParameters.encodings[0]
            ];
          }
          if (sendingRtpParameters.encodings.length > 1 && (sendingRtpParameters.codecs[0].mimeType.toLowerCase() === "video/vp8" || sendingRtpParameters.codecs[0].mimeType.toLowerCase() === "video/h264")) {
            for (const encoding of sendingRtpParameters.encodings) {
              encoding.scalabilityMode = "L1T3";
            }
          }
          this._remoteSdp.send({
            offerMediaObject,
            reuseMid: mediaSectionIdx.reuseMid,
            offerRtpParameters: sendingRtpParameters,
            answerRtpParameters: sendingRemoteRtpParameters,
            codecOptions
          });
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("send() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
          this._mapMidTransceiver.set(localId, transceiver);
          return {
            localId,
            rtpParameters: sendingRtpParameters,
            rtpSender: transceiver.sender
          };
        }
        async stopSending(localId) {
          this.assertSendDirection();
          logger.debug("stopSending() [localId:%s]", localId);
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          void transceiver.sender.replaceTrack(null);
          this._pc.removeTrack(transceiver.sender);
          const mediaSectionClosed = this._remoteSdp.closeMediaSection(transceiver.mid);
          if (mediaSectionClosed) {
            try {
              transceiver.stop();
            } catch (error) {
            }
          }
          const offer = await this._pc.createOffer();
          logger.debug("stopSending() | calling pc.setLocalDescription() [offer:%o]", offer);
          await this._pc.setLocalDescription(offer);
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("stopSending() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
          this._mapMidTransceiver.delete(localId);
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        async pauseSending(localId) {
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        async resumeSending(localId) {
        }
        async replaceTrack(localId, track) {
          this.assertSendDirection();
          if (track) {
            logger.debug("replaceTrack() [localId:%s, track.id:%s]", localId, track.id);
          } else {
            logger.debug("replaceTrack() [localId:%s, no track]", localId);
          }
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          await transceiver.sender.replaceTrack(track);
        }
        async setMaxSpatialLayer(localId, spatialLayer) {
          this.assertSendDirection();
          logger.debug("setMaxSpatialLayer() [localId:%s, spatialLayer:%s]", localId, spatialLayer);
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          const parameters = transceiver.sender.getParameters();
          parameters.encodings.forEach((encoding, idx) => {
            if (idx <= spatialLayer) {
              encoding.active = true;
            } else {
              encoding.active = false;
            }
          });
          await transceiver.sender.setParameters(parameters);
          this._remoteSdp.muxMediaSectionSimulcast(localId, parameters.encodings);
          const offer = await this._pc.createOffer();
          logger.debug("setMaxSpatialLayer() | calling pc.setLocalDescription() [offer:%o]", offer);
          await this._pc.setLocalDescription(offer);
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("setMaxSpatialLayer() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
        }
        async setRtpEncodingParameters(localId, params) {
          this.assertSendDirection();
          logger.debug("setRtpEncodingParameters() [localId:%s, params:%o]", localId, params);
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          const parameters = transceiver.sender.getParameters();
          parameters.encodings.forEach((encoding, idx) => {
            parameters.encodings[idx] = {
              ...encoding,
              ...params
            };
          });
          await transceiver.sender.setParameters(parameters);
          this._remoteSdp.muxMediaSectionSimulcast(localId, parameters.encodings);
          const offer = await this._pc.createOffer();
          logger.debug("setRtpEncodingParameters() | calling pc.setLocalDescription() [offer:%o]", offer);
          await this._pc.setLocalDescription(offer);
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("setRtpEncodingParameters() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
        }
        async getSenderStats(localId) {
          this.assertSendDirection();
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          return transceiver.sender.getStats();
        }
        async sendDataChannel({ ordered, maxPacketLifeTime, maxRetransmits, label, protocol: protocol4 }) {
          this.assertSendDirection();
          const options = {
            negotiated: true,
            id: this._nextSendSctpStreamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmitTime: maxPacketLifeTime,
            maxRetransmits,
            protocol: protocol4
          };
          logger.debug("sendDataChannel() [options:%o]", options);
          const dataChannel = this._pc.createDataChannel(label, options);
          this._nextSendSctpStreamId = ++this._nextSendSctpStreamId % SCTP_NUM_STREAMS.MIS;
          if (!this._hasDataChannelMediaSection) {
            const offer = await this._pc.createOffer();
            const localSdpObject = sdpTransform.parse(offer.sdp);
            const offerMediaObject = localSdpObject.media.find((m) => m.type === "application");
            if (!this._transportReady) {
              await this.setupTransport({
                localDtlsRole: this._forcedLocalDtlsRole ?? "client",
                localSdpObject
              });
            }
            logger.debug("sendDataChannel() | calling pc.setLocalDescription() [offer:%o]", offer);
            await this._pc.setLocalDescription(offer);
            this._remoteSdp.sendSctpAssociation({
              offerMediaObject
            });
            const answer = {
              type: "answer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("sendDataChannel() | calling pc.setRemoteDescription() [answer:%o]", answer);
            await this._pc.setRemoteDescription(answer);
            this._hasDataChannelMediaSection = true;
          }
          const sctpStreamParameters = {
            streamId: options.id,
            ordered: options.ordered,
            maxPacketLifeTime: options.maxPacketLifeTime,
            maxRetransmits: options.maxRetransmits
          };
          return {
            dataChannel,
            sctpStreamParameters
          };
        }
        async receive(optionsList) {
          this.assertRecvDirection();
          const results = [];
          const mapLocalId = /* @__PURE__ */ new Map();
          for (const options of optionsList) {
            const { trackId, kind, rtpParameters, streamId } = options;
            logger.debug("receive() [trackId:%s, kind:%s]", trackId, kind);
            const localId = rtpParameters.mid ?? String(this._mapMidTransceiver.size);
            mapLocalId.set(trackId, localId);
            this._remoteSdp.receive({
              mid: localId,
              kind,
              offerRtpParameters: rtpParameters,
              streamId: streamId ?? rtpParameters.rtcp.cname,
              trackId
            });
          }
          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("receive() | calling pc.setRemoteDescription() [offer:%o]", offer);
          await this._pc.setRemoteDescription(offer);
          let answer = await this._pc.createAnswer();
          const localSdpObject = sdpTransform.parse(answer.sdp);
          for (const options of optionsList) {
            const { trackId, rtpParameters } = options;
            const localId = mapLocalId.get(trackId);
            const answerMediaObject = localSdpObject.media.find((m) => String(m.mid) === localId);
            sdpCommonUtils.applyCodecParameters({
              offerRtpParameters: rtpParameters,
              answerMediaObject
            });
          }
          answer = {
            type: "answer",
            sdp: sdpTransform.write(localSdpObject)
          };
          if (!this._transportReady) {
            await this.setupTransport({
              localDtlsRole: this._forcedLocalDtlsRole ?? "client",
              localSdpObject
            });
          }
          logger.debug("receive() | calling pc.setLocalDescription() [answer:%o]", answer);
          await this._pc.setLocalDescription(answer);
          for (const options of optionsList) {
            const { trackId } = options;
            const localId = mapLocalId.get(trackId);
            const transceiver = this._pc.getTransceivers().find((t) => t.mid === localId);
            if (!transceiver) {
              throw new Error("new RTCRtpTransceiver not found");
            }
            this._mapMidTransceiver.set(localId, transceiver);
            results.push({
              localId,
              track: transceiver.receiver.track,
              rtpReceiver: transceiver.receiver
            });
          }
          return results;
        }
        async stopReceiving(localIds) {
          this.assertRecvDirection();
          for (const localId of localIds) {
            logger.debug("stopReceiving() [localId:%s]", localId);
            const transceiver = this._mapMidTransceiver.get(localId);
            if (!transceiver) {
              throw new Error("associated RTCRtpTransceiver not found");
            }
            this._remoteSdp.closeMediaSection(transceiver.mid);
          }
          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("stopReceiving() | calling pc.setRemoteDescription() [offer:%o]", offer);
          await this._pc.setRemoteDescription(offer);
          const answer = await this._pc.createAnswer();
          logger.debug("stopReceiving() | calling pc.setLocalDescription() [answer:%o]", answer);
          await this._pc.setLocalDescription(answer);
          for (const localId of localIds) {
            this._mapMidTransceiver.delete(localId);
          }
        }
        async pauseReceiving(localIds) {
        }
        async resumeReceiving(localIds) {
        }
        async getReceiverStats(localId) {
          this.assertRecvDirection();
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          return transceiver.receiver.getStats();
        }
        async receiveDataChannel({ sctpStreamParameters, label, protocol: protocol4 }) {
          this.assertRecvDirection();
          const { streamId, ordered, maxPacketLifeTime, maxRetransmits } = sctpStreamParameters;
          const options = {
            negotiated: true,
            id: streamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmitTime: maxPacketLifeTime,
            maxRetransmits,
            protocol: protocol4
          };
          logger.debug("receiveDataChannel() [options:%o]", options);
          const dataChannel = this._pc.createDataChannel(label, options);
          if (!this._hasDataChannelMediaSection) {
            this._remoteSdp.receiveSctpAssociation();
            const offer = {
              type: "offer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("receiveDataChannel() | calling pc.setRemoteDescription() [offer:%o]", offer);
            await this._pc.setRemoteDescription(offer);
            const answer = await this._pc.createAnswer();
            if (!this._transportReady) {
              const localSdpObject = sdpTransform.parse(answer.sdp);
              await this.setupTransport({
                localDtlsRole: this._forcedLocalDtlsRole ?? "client",
                localSdpObject
              });
            }
            logger.debug("receiveDataChannel() | calling pc.setRemoteDescription() [answer:%o]", answer);
            await this._pc.setLocalDescription(answer);
            this._hasDataChannelMediaSection = true;
          }
          return {
            dataChannel
          };
        }
        async setupTransport({ localDtlsRole, localSdpObject }) {
          if (!localSdpObject) {
            localSdpObject = sdpTransform.parse(this._pc.localDescription.sdp);
          }
          const dtlsParameters = sdpCommonUtils.extractDtlsParameters({
            sdpObject: localSdpObject
          });
          dtlsParameters.role = localDtlsRole;
          this._remoteSdp.updateDtlsRole(localDtlsRole === "client" ? "server" : "client");
          await new Promise((resolve, reject) => {
            this.safeEmit("@connect", {
              dtlsParameters
            }, resolve, reject);
          });
          this._transportReady = true;
        }
        assertSendDirection() {
          if (this._direction !== "send") {
            throw new Error('method can just be called for handlers with "send" direction');
          }
        }
        assertRecvDirection() {
          if (this._direction !== "recv") {
            throw new Error('method can just be called for handlers with "recv" direction');
          }
        }
      }, __name(_a2, "Chrome70"), _a2);
      exports.Chrome70 = Chrome70;
    }
  });

  // node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/handlers/sdp/planBUtils.js
  var require_planBUtils = __commonJS({
    "node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/handlers/sdp/planBUtils.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getRtpEncodings = getRtpEncodings;
      exports.addLegacySimulcast = addLegacySimulcast;
      function getRtpEncodings({ offerMediaObject, track }) {
        let firstSsrc;
        const ssrcs = /* @__PURE__ */ new Set();
        for (const line of offerMediaObject.ssrcs || []) {
          if (line.attribute !== "msid") {
            continue;
          }
          const trackId = line.value.split(" ")[1];
          if (trackId === track.id) {
            const ssrc = line.id;
            ssrcs.add(ssrc);
            if (!firstSsrc) {
              firstSsrc = ssrc;
            }
          }
        }
        if (ssrcs.size === 0) {
          throw new Error(`a=ssrc line with msid information not found [track.id:${track.id}]`);
        }
        const ssrcToRtxSsrc = /* @__PURE__ */ new Map();
        for (const line of offerMediaObject.ssrcGroups || []) {
          if (line.semantics !== "FID") {
            continue;
          }
          let [ssrc, rtxSsrc] = line.ssrcs.split(/\s+/);
          ssrc = Number(ssrc);
          rtxSsrc = Number(rtxSsrc);
          if (ssrcs.has(ssrc)) {
            ssrcs.delete(ssrc);
            ssrcs.delete(rtxSsrc);
            ssrcToRtxSsrc.set(ssrc, rtxSsrc);
          }
        }
        for (const ssrc of ssrcs) {
          ssrcToRtxSsrc.set(ssrc, null);
        }
        const encodings = [];
        for (const [ssrc, rtxSsrc] of ssrcToRtxSsrc) {
          const encoding = {
            ssrc
          };
          if (rtxSsrc) {
            encoding.rtx = {
              ssrc: rtxSsrc
            };
          }
          encodings.push(encoding);
        }
        return encodings;
      }
      __name(getRtpEncodings, "getRtpEncodings");
      function addLegacySimulcast({ offerMediaObject, track, numStreams }) {
        if (numStreams <= 1) {
          throw new TypeError("numStreams must be greater than 1");
        }
        let firstSsrc;
        let firstRtxSsrc;
        let streamId;
        const ssrcMsidLine = (offerMediaObject.ssrcs || []).find((line) => {
          if (line.attribute !== "msid") {
            return false;
          }
          const trackId = line.value.split(" ")[1];
          if (trackId === track.id) {
            firstSsrc = line.id;
            streamId = line.value.split(" ")[0];
            return true;
          } else {
            return false;
          }
        });
        if (!ssrcMsidLine) {
          throw new Error(`a=ssrc line with msid information not found [track.id:${track.id}]`);
        }
        (offerMediaObject.ssrcGroups || []).some((line) => {
          if (line.semantics !== "FID") {
            return false;
          }
          const ssrcs2 = line.ssrcs.split(/\s+/);
          if (Number(ssrcs2[0]) === firstSsrc) {
            firstRtxSsrc = Number(ssrcs2[1]);
            return true;
          } else {
            return false;
          }
        });
        const ssrcCnameLine = offerMediaObject.ssrcs.find((line) => line.attribute === "cname" && line.id === firstSsrc);
        if (!ssrcCnameLine) {
          throw new Error(`a=ssrc line with cname information not found [track.id:${track.id}]`);
        }
        const cname = ssrcCnameLine.value;
        const ssrcs = [];
        const rtxSsrcs = [];
        for (let i = 0; i < numStreams; ++i) {
          ssrcs.push(firstSsrc + i);
          if (firstRtxSsrc) {
            rtxSsrcs.push(firstRtxSsrc + i);
          }
        }
        offerMediaObject.ssrcGroups = offerMediaObject.ssrcGroups || [];
        offerMediaObject.ssrcs = offerMediaObject.ssrcs || [];
        offerMediaObject.ssrcGroups.push({
          semantics: "SIM",
          ssrcs: ssrcs.join(" ")
        });
        for (const ssrc of ssrcs) {
          offerMediaObject.ssrcs.push({
            id: ssrc,
            attribute: "cname",
            value: cname
          });
          offerMediaObject.ssrcs.push({
            id: ssrc,
            attribute: "msid",
            value: `${streamId} ${track.id}`
          });
        }
        for (let i = 0; i < rtxSsrcs.length; ++i) {
          const ssrc = ssrcs[i];
          const rtxSsrc = rtxSsrcs[i];
          offerMediaObject.ssrcs.push({
            id: rtxSsrc,
            attribute: "cname",
            value: cname
          });
          offerMediaObject.ssrcs.push({
            id: rtxSsrc,
            attribute: "msid",
            value: `${streamId} ${track.id}`
          });
          offerMediaObject.ssrcGroups.push({
            semantics: "FID",
            ssrcs: `${ssrc} ${rtxSsrc}`
          });
        }
      }
      __name(addLegacySimulcast, "addLegacySimulcast");
    }
  });

  // node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/handlers/Chrome67.js
  var require_Chrome67 = __commonJS({
    "node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/handlers/Chrome67.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: /* @__PURE__ */ __name(function() {
              return m[k];
            }, "get")
          };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", {
          enumerable: true,
          value: v
        });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Chrome67 = void 0;
      var sdpTransform = __importStar(require_lib3());
      var Logger_1 = require_Logger();
      var utils = __importStar(require_utils());
      var ortc = __importStar(require_ortc());
      var sdpCommonUtils = __importStar(require_commonUtils());
      var sdpPlanBUtils = __importStar(require_planBUtils());
      var HandlerInterface_1 = require_HandlerInterface();
      var RemoteSdp_1 = require_RemoteSdp();
      var logger = new Logger_1.Logger("Chrome67");
      var NAME = "Chrome67";
      var SCTP_NUM_STREAMS = {
        OS: 1024,
        MIS: 1024
      };
      var _a2;
      var Chrome67 = (_a2 = class extends HandlerInterface_1.HandlerInterface {
        /**
         * Creates a factory function.
         */
        static createFactory() {
          return () => new _a2();
        }
        constructor() {
          super();
          this._sendStream = new MediaStream();
          this._mapSendLocalIdRtpSender = /* @__PURE__ */ new Map();
          this._nextSendLocalId = 0;
          this._mapRecvLocalIdInfo = /* @__PURE__ */ new Map();
          this._hasDataChannelMediaSection = false;
          this._nextSendSctpStreamId = 0;
          this._transportReady = false;
        }
        get name() {
          return NAME;
        }
        close() {
          logger.debug("close()");
          if (this._pc) {
            try {
              this._pc.close();
            } catch (error) {
            }
          }
          this.emit("@close");
        }
        async getNativeRtpCapabilities() {
          logger.debug("getNativeRtpCapabilities()");
          const pc = new RTCPeerConnection({
            iceServers: [],
            iceTransportPolicy: "all",
            bundlePolicy: "max-bundle",
            rtcpMuxPolicy: "require",
            sdpSemantics: "plan-b"
          });
          try {
            const offer = await pc.createOffer({
              offerToReceiveAudio: true,
              offerToReceiveVideo: true
            });
            try {
              pc.close();
            } catch (error) {
            }
            const sdpObject = sdpTransform.parse(offer.sdp);
            const nativeRtpCapabilities = sdpCommonUtils.extractRtpCapabilities({
              sdpObject
            });
            return nativeRtpCapabilities;
          } catch (error) {
            try {
              pc.close();
            } catch (error2) {
            }
            throw error;
          }
        }
        async getNativeSctpCapabilities() {
          logger.debug("getNativeSctpCapabilities()");
          return {
            numStreams: SCTP_NUM_STREAMS
          };
        }
        run({ direction, iceParameters, iceCandidates, dtlsParameters, sctpParameters, iceServers, iceTransportPolicy, additionalSettings, proprietaryConstraints, extendedRtpCapabilities }) {
          logger.debug("run()");
          this._direction = direction;
          this._remoteSdp = new RemoteSdp_1.RemoteSdp({
            iceParameters,
            iceCandidates,
            dtlsParameters,
            sctpParameters,
            planB: true
          });
          this._sendingRtpParametersByKind = {
            audio: ortc.getSendingRtpParameters("audio", extendedRtpCapabilities),
            video: ortc.getSendingRtpParameters("video", extendedRtpCapabilities)
          };
          this._sendingRemoteRtpParametersByKind = {
            audio: ortc.getSendingRemoteRtpParameters("audio", extendedRtpCapabilities),
            video: ortc.getSendingRemoteRtpParameters("video", extendedRtpCapabilities)
          };
          if (dtlsParameters.role && dtlsParameters.role !== "auto") {
            this._forcedLocalDtlsRole = dtlsParameters.role === "server" ? "client" : "server";
          }
          this._pc = new RTCPeerConnection({
            iceServers: iceServers ?? [],
            iceTransportPolicy: iceTransportPolicy ?? "all",
            bundlePolicy: "max-bundle",
            rtcpMuxPolicy: "require",
            sdpSemantics: "plan-b",
            ...additionalSettings
          }, proprietaryConstraints);
          this._pc.addEventListener("icegatheringstatechange", () => {
            this.emit("@icegatheringstatechange", this._pc.iceGatheringState);
          });
          if (this._pc.connectionState) {
            this._pc.addEventListener("connectionstatechange", () => {
              this.emit("@connectionstatechange", this._pc.connectionState);
            });
          } else {
            this._pc.addEventListener("iceconnectionstatechange", () => {
              logger.warn("run() | pc.connectionState not supported, using pc.iceConnectionState");
              switch (this._pc.iceConnectionState) {
                case "checking": {
                  this.emit("@connectionstatechange", "connecting");
                  break;
                }
                case "connected":
                case "completed": {
                  this.emit("@connectionstatechange", "connected");
                  break;
                }
                case "failed": {
                  this.emit("@connectionstatechange", "failed");
                  break;
                }
                case "disconnected": {
                  this.emit("@connectionstatechange", "disconnected");
                  break;
                }
                case "closed": {
                  this.emit("@connectionstatechange", "closed");
                  break;
                }
              }
            });
          }
        }
        async updateIceServers(iceServers) {
          logger.debug("updateIceServers()");
          const configuration = this._pc.getConfiguration();
          configuration.iceServers = iceServers;
          this._pc.setConfiguration(configuration);
        }
        async restartIce(iceParameters) {
          logger.debug("restartIce()");
          this._remoteSdp.updateIceParameters(iceParameters);
          if (!this._transportReady) {
            return;
          }
          if (this._direction === "send") {
            const offer = await this._pc.createOffer({
              iceRestart: true
            });
            logger.debug("restartIce() | calling pc.setLocalDescription() [offer:%o]", offer);
            await this._pc.setLocalDescription(offer);
            const answer = {
              type: "answer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("restartIce() | calling pc.setRemoteDescription() [answer:%o]", answer);
            await this._pc.setRemoteDescription(answer);
          } else {
            const offer = {
              type: "offer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("restartIce() | calling pc.setRemoteDescription() [offer:%o]", offer);
            await this._pc.setRemoteDescription(offer);
            const answer = await this._pc.createAnswer();
            logger.debug("restartIce() | calling pc.setLocalDescription() [answer:%o]", answer);
            await this._pc.setLocalDescription(answer);
          }
        }
        async getTransportStats() {
          return this._pc.getStats();
        }
        async send({ track, encodings, codecOptions, codec }) {
          this.assertSendDirection();
          logger.debug("send() [kind:%s, track.id:%s]", track.kind, track.id);
          if (codec) {
            logger.warn("send() | codec selection is not available in %s handler", this.name);
          }
          this._sendStream.addTrack(track);
          this._pc.addTrack(track, this._sendStream);
          let offer = await this._pc.createOffer();
          let localSdpObject = sdpTransform.parse(offer.sdp);
          let offerMediaObject;
          const sendingRtpParameters = utils.clone(this._sendingRtpParametersByKind[track.kind]);
          sendingRtpParameters.codecs = ortc.reduceCodecs(sendingRtpParameters.codecs);
          const sendingRemoteRtpParameters = utils.clone(this._sendingRemoteRtpParametersByKind[track.kind]);
          sendingRemoteRtpParameters.codecs = ortc.reduceCodecs(sendingRemoteRtpParameters.codecs);
          if (!this._transportReady) {
            await this.setupTransport({
              localDtlsRole: this._forcedLocalDtlsRole ?? "client",
              localSdpObject
            });
          }
          if (track.kind === "video" && encodings && encodings.length > 1) {
            logger.debug("send() | enabling simulcast");
            localSdpObject = sdpTransform.parse(offer.sdp);
            offerMediaObject = localSdpObject.media.find((m) => m.type === "video");
            sdpPlanBUtils.addLegacySimulcast({
              offerMediaObject,
              track,
              numStreams: encodings.length
            });
            offer = {
              type: "offer",
              sdp: sdpTransform.write(localSdpObject)
            };
          }
          logger.debug("send() | calling pc.setLocalDescription() [offer:%o]", offer);
          await this._pc.setLocalDescription(offer);
          localSdpObject = sdpTransform.parse(this._pc.localDescription.sdp);
          offerMediaObject = localSdpObject.media.find((m) => m.type === track.kind);
          sendingRtpParameters.rtcp.cname = sdpCommonUtils.getCname({
            offerMediaObject
          });
          sendingRtpParameters.encodings = sdpPlanBUtils.getRtpEncodings({
            offerMediaObject,
            track
          });
          if (encodings) {
            for (let idx = 0; idx < sendingRtpParameters.encodings.length; ++idx) {
              if (encodings[idx]) {
                Object.assign(sendingRtpParameters.encodings[idx], encodings[idx]);
              }
            }
          }
          if (sendingRtpParameters.encodings.length > 1 && sendingRtpParameters.codecs[0].mimeType.toLowerCase() === "video/vp8") {
            for (const encoding of sendingRtpParameters.encodings) {
              encoding.scalabilityMode = "L1T3";
            }
          }
          this._remoteSdp.send({
            offerMediaObject,
            offerRtpParameters: sendingRtpParameters,
            answerRtpParameters: sendingRemoteRtpParameters,
            codecOptions
          });
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("send() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
          const localId = String(this._nextSendLocalId);
          this._nextSendLocalId++;
          const rtpSender = this._pc.getSenders().find((s) => s.track === track);
          this._mapSendLocalIdRtpSender.set(localId, rtpSender);
          return {
            localId,
            rtpParameters: sendingRtpParameters,
            rtpSender
          };
        }
        async stopSending(localId) {
          this.assertSendDirection();
          logger.debug("stopSending() [localId:%s]", localId);
          const rtpSender = this._mapSendLocalIdRtpSender.get(localId);
          if (!rtpSender) {
            throw new Error("associated RTCRtpSender not found");
          }
          this._pc.removeTrack(rtpSender);
          if (rtpSender.track) {
            this._sendStream.removeTrack(rtpSender.track);
          }
          this._mapSendLocalIdRtpSender.delete(localId);
          const offer = await this._pc.createOffer();
          logger.debug("stopSending() | calling pc.setLocalDescription() [offer:%o]", offer);
          try {
            await this._pc.setLocalDescription(offer);
          } catch (error) {
            if (this._sendStream.getTracks().length === 0) {
              logger.warn("stopSending() | ignoring expected error due no sending tracks: %s", error.toString());
              return;
            }
            throw error;
          }
          if (this._pc.signalingState === "stable") {
            return;
          }
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("stopSending() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        async pauseSending(localId) {
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        async resumeSending(localId) {
        }
        async replaceTrack(localId, track) {
          this.assertSendDirection();
          if (track) {
            logger.debug("replaceTrack() [localId:%s, track.id:%s]", localId, track.id);
          } else {
            logger.debug("replaceTrack() [localId:%s, no track]", localId);
          }
          const rtpSender = this._mapSendLocalIdRtpSender.get(localId);
          if (!rtpSender) {
            throw new Error("associated RTCRtpSender not found");
          }
          const oldTrack = rtpSender.track;
          await rtpSender.replaceTrack(track);
          if (oldTrack) {
            this._sendStream.removeTrack(oldTrack);
          }
          if (track) {
            this._sendStream.addTrack(track);
          }
        }
        async setMaxSpatialLayer(localId, spatialLayer) {
          this.assertSendDirection();
          logger.debug("setMaxSpatialLayer() [localId:%s, spatialLayer:%s]", localId, spatialLayer);
          const rtpSender = this._mapSendLocalIdRtpSender.get(localId);
          if (!rtpSender) {
            throw new Error("associated RTCRtpSender not found");
          }
          const parameters = rtpSender.getParameters();
          parameters.encodings.forEach((encoding, idx) => {
            if (idx <= spatialLayer) {
              encoding.active = true;
            } else {
              encoding.active = false;
            }
          });
          await rtpSender.setParameters(parameters);
        }
        async setRtpEncodingParameters(localId, params) {
          this.assertSendDirection();
          logger.debug("setRtpEncodingParameters() [localId:%s, params:%o]", localId, params);
          const rtpSender = this._mapSendLocalIdRtpSender.get(localId);
          if (!rtpSender) {
            throw new Error("associated RTCRtpSender not found");
          }
          const parameters = rtpSender.getParameters();
          parameters.encodings.forEach((encoding, idx) => {
            parameters.encodings[idx] = {
              ...encoding,
              ...params
            };
          });
          await rtpSender.setParameters(parameters);
        }
        async getSenderStats(localId) {
          this.assertSendDirection();
          const rtpSender = this._mapSendLocalIdRtpSender.get(localId);
          if (!rtpSender) {
            throw new Error("associated RTCRtpSender not found");
          }
          return rtpSender.getStats();
        }
        async sendDataChannel({ ordered, maxPacketLifeTime, maxRetransmits, label, protocol: protocol4 }) {
          this.assertSendDirection();
          const options = {
            negotiated: true,
            id: this._nextSendSctpStreamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmitTime: maxPacketLifeTime,
            maxRetransmits,
            protocol: protocol4
          };
          logger.debug("sendDataChannel() [options:%o]", options);
          const dataChannel = this._pc.createDataChannel(label, options);
          this._nextSendSctpStreamId = ++this._nextSendSctpStreamId % SCTP_NUM_STREAMS.MIS;
          if (!this._hasDataChannelMediaSection) {
            const offer = await this._pc.createOffer();
            const localSdpObject = sdpTransform.parse(offer.sdp);
            const offerMediaObject = localSdpObject.media.find((m) => m.type === "application");
            if (!this._transportReady) {
              await this.setupTransport({
                localDtlsRole: this._forcedLocalDtlsRole ?? "client",
                localSdpObject
              });
            }
            logger.debug("sendDataChannel() | calling pc.setLocalDescription() [offer:%o]", offer);
            await this._pc.setLocalDescription(offer);
            this._remoteSdp.sendSctpAssociation({
              offerMediaObject
            });
            const answer = {
              type: "answer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("sendDataChannel() | calling pc.setRemoteDescription() [answer:%o]", answer);
            await this._pc.setRemoteDescription(answer);
            this._hasDataChannelMediaSection = true;
          }
          const sctpStreamParameters = {
            streamId: options.id,
            ordered: options.ordered,
            maxPacketLifeTime: options.maxPacketLifeTime,
            maxRetransmits: options.maxRetransmits
          };
          return {
            dataChannel,
            sctpStreamParameters
          };
        }
        async receive(optionsList) {
          this.assertRecvDirection();
          const results = [];
          for (const options of optionsList) {
            const { trackId, kind, rtpParameters, streamId } = options;
            logger.debug("receive() [trackId:%s, kind:%s]", trackId, kind);
            const mid = kind;
            this._remoteSdp.receive({
              mid,
              kind,
              offerRtpParameters: rtpParameters,
              streamId: streamId ?? rtpParameters.rtcp.cname,
              trackId
            });
          }
          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("receive() | calling pc.setRemoteDescription() [offer:%o]", offer);
          await this._pc.setRemoteDescription(offer);
          let answer = await this._pc.createAnswer();
          const localSdpObject = sdpTransform.parse(answer.sdp);
          for (const options of optionsList) {
            const { kind, rtpParameters } = options;
            const mid = kind;
            const answerMediaObject = localSdpObject.media.find((m) => String(m.mid) === mid);
            sdpCommonUtils.applyCodecParameters({
              offerRtpParameters: rtpParameters,
              answerMediaObject
            });
          }
          answer = {
            type: "answer",
            sdp: sdpTransform.write(localSdpObject)
          };
          if (!this._transportReady) {
            await this.setupTransport({
              localDtlsRole: this._forcedLocalDtlsRole ?? "client",
              localSdpObject
            });
          }
          logger.debug("receive() | calling pc.setLocalDescription() [answer:%o]", answer);
          await this._pc.setLocalDescription(answer);
          for (const options of optionsList) {
            const { kind, trackId, rtpParameters } = options;
            const localId = trackId;
            const mid = kind;
            const rtpReceiver = this._pc.getReceivers().find((r) => r.track && r.track.id === localId);
            if (!rtpReceiver) {
              throw new Error("new RTCRtpReceiver not");
            }
            this._mapRecvLocalIdInfo.set(localId, {
              mid,
              rtpParameters,
              rtpReceiver
            });
            results.push({
              localId,
              track: rtpReceiver.track,
              rtpReceiver
            });
          }
          return results;
        }
        async stopReceiving(localIds) {
          this.assertRecvDirection();
          for (const localId of localIds) {
            logger.debug("stopReceiving() [localId:%s]", localId);
            const { mid, rtpParameters } = this._mapRecvLocalIdInfo.get(localId) ?? {};
            this._mapRecvLocalIdInfo.delete(localId);
            this._remoteSdp.planBStopReceiving({
              mid,
              offerRtpParameters: rtpParameters
            });
          }
          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("stopReceiving() | calling pc.setRemoteDescription() [offer:%o]", offer);
          await this._pc.setRemoteDescription(offer);
          const answer = await this._pc.createAnswer();
          logger.debug("stopReceiving() | calling pc.setLocalDescription() [answer:%o]", answer);
          await this._pc.setLocalDescription(answer);
        }
        async pauseReceiving(localIds) {
        }
        async resumeReceiving(localIds) {
        }
        async getReceiverStats(localId) {
          this.assertRecvDirection();
          const { rtpReceiver } = this._mapRecvLocalIdInfo.get(localId) ?? {};
          if (!rtpReceiver) {
            throw new Error("associated RTCRtpReceiver not found");
          }
          return rtpReceiver.getStats();
        }
        async receiveDataChannel({ sctpStreamParameters, label, protocol: protocol4 }) {
          this.assertRecvDirection();
          const { streamId, ordered, maxPacketLifeTime, maxRetransmits } = sctpStreamParameters;
          const options = {
            negotiated: true,
            id: streamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmitTime: maxPacketLifeTime,
            maxRetransmits,
            protocol: protocol4
          };
          logger.debug("receiveDataChannel() [options:%o]", options);
          const dataChannel = this._pc.createDataChannel(label, options);
          if (!this._hasDataChannelMediaSection) {
            this._remoteSdp.receiveSctpAssociation({
              oldDataChannelSpec: true
            });
            const offer = {
              type: "offer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("receiveDataChannel() | calling pc.setRemoteDescription() [offer:%o]", offer);
            await this._pc.setRemoteDescription(offer);
            const answer = await this._pc.createAnswer();
            if (!this._transportReady) {
              const localSdpObject = sdpTransform.parse(answer.sdp);
              await this.setupTransport({
                localDtlsRole: this._forcedLocalDtlsRole ?? "client",
                localSdpObject
              });
            }
            logger.debug("receiveDataChannel() | calling pc.setRemoteDescription() [answer:%o]", answer);
            await this._pc.setLocalDescription(answer);
            this._hasDataChannelMediaSection = true;
          }
          return {
            dataChannel
          };
        }
        async setupTransport({ localDtlsRole, localSdpObject }) {
          if (!localSdpObject) {
            localSdpObject = sdpTransform.parse(this._pc.localDescription.sdp);
          }
          const dtlsParameters = sdpCommonUtils.extractDtlsParameters({
            sdpObject: localSdpObject
          });
          dtlsParameters.role = localDtlsRole;
          this._remoteSdp.updateDtlsRole(localDtlsRole === "client" ? "server" : "client");
          await new Promise((resolve, reject) => {
            this.safeEmit("@connect", {
              dtlsParameters
            }, resolve, reject);
          });
          this._transportReady = true;
        }
        assertSendDirection() {
          if (this._direction !== "send") {
            throw new Error('method can just be called for handlers with "send" direction');
          }
        }
        assertRecvDirection() {
          if (this._direction !== "recv") {
            throw new Error('method can just be called for handlers with "recv" direction');
          }
        }
      }, __name(_a2, "Chrome67"), _a2);
      exports.Chrome67 = Chrome67;
    }
  });

  // node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/handlers/Chrome55.js
  var require_Chrome55 = __commonJS({
    "node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/handlers/Chrome55.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: /* @__PURE__ */ __name(function() {
              return m[k];
            }, "get")
          };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", {
          enumerable: true,
          value: v
        });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Chrome55 = void 0;
      var sdpTransform = __importStar(require_lib3());
      var Logger_1 = require_Logger();
      var errors_1 = require_errors();
      var utils = __importStar(require_utils());
      var ortc = __importStar(require_ortc());
      var sdpCommonUtils = __importStar(require_commonUtils());
      var sdpPlanBUtils = __importStar(require_planBUtils());
      var HandlerInterface_1 = require_HandlerInterface();
      var RemoteSdp_1 = require_RemoteSdp();
      var logger = new Logger_1.Logger("Chrome55");
      var NAME = "Chrome55";
      var SCTP_NUM_STREAMS = {
        OS: 1024,
        MIS: 1024
      };
      var _a2;
      var Chrome55 = (_a2 = class extends HandlerInterface_1.HandlerInterface {
        /**
         * Creates a factory function.
         */
        static createFactory() {
          return () => new _a2();
        }
        constructor() {
          super();
          this._sendStream = new MediaStream();
          this._mapSendLocalIdTrack = /* @__PURE__ */ new Map();
          this._nextSendLocalId = 0;
          this._mapRecvLocalIdInfo = /* @__PURE__ */ new Map();
          this._hasDataChannelMediaSection = false;
          this._nextSendSctpStreamId = 0;
          this._transportReady = false;
        }
        get name() {
          return NAME;
        }
        close() {
          logger.debug("close()");
          if (this._pc) {
            try {
              this._pc.close();
            } catch (error) {
            }
          }
          this.emit("@close");
        }
        async getNativeRtpCapabilities() {
          logger.debug("getNativeRtpCapabilities()");
          const pc = new RTCPeerConnection({
            iceServers: [],
            iceTransportPolicy: "all",
            bundlePolicy: "max-bundle",
            rtcpMuxPolicy: "require",
            sdpSemantics: "plan-b"
          });
          try {
            const offer = await pc.createOffer({
              offerToReceiveAudio: true,
              offerToReceiveVideo: true
            });
            try {
              pc.close();
            } catch (error) {
            }
            const sdpObject = sdpTransform.parse(offer.sdp);
            const nativeRtpCapabilities = sdpCommonUtils.extractRtpCapabilities({
              sdpObject
            });
            return nativeRtpCapabilities;
          } catch (error) {
            try {
              pc.close();
            } catch (error2) {
            }
            throw error;
          }
        }
        async getNativeSctpCapabilities() {
          logger.debug("getNativeSctpCapabilities()");
          return {
            numStreams: SCTP_NUM_STREAMS
          };
        }
        run({ direction, iceParameters, iceCandidates, dtlsParameters, sctpParameters, iceServers, iceTransportPolicy, additionalSettings, proprietaryConstraints, extendedRtpCapabilities }) {
          logger.debug("run()");
          this._direction = direction;
          this._remoteSdp = new RemoteSdp_1.RemoteSdp({
            iceParameters,
            iceCandidates,
            dtlsParameters,
            sctpParameters,
            planB: true
          });
          this._sendingRtpParametersByKind = {
            audio: ortc.getSendingRtpParameters("audio", extendedRtpCapabilities),
            video: ortc.getSendingRtpParameters("video", extendedRtpCapabilities)
          };
          this._sendingRemoteRtpParametersByKind = {
            audio: ortc.getSendingRemoteRtpParameters("audio", extendedRtpCapabilities),
            video: ortc.getSendingRemoteRtpParameters("video", extendedRtpCapabilities)
          };
          if (dtlsParameters.role && dtlsParameters.role !== "auto") {
            this._forcedLocalDtlsRole = dtlsParameters.role === "server" ? "client" : "server";
          }
          this._pc = new RTCPeerConnection({
            iceServers: iceServers ?? [],
            iceTransportPolicy: iceTransportPolicy ?? "all",
            bundlePolicy: "max-bundle",
            rtcpMuxPolicy: "require",
            sdpSemantics: "plan-b",
            ...additionalSettings
          }, proprietaryConstraints);
          this._pc.addEventListener("icegatheringstatechange", () => {
            this.emit("@icegatheringstatechange", this._pc.iceGatheringState);
          });
          if (this._pc.connectionState) {
            this._pc.addEventListener("connectionstatechange", () => {
              this.emit("@connectionstatechange", this._pc.connectionState);
            });
          } else {
            this._pc.addEventListener("iceconnectionstatechange", () => {
              logger.warn("run() | pc.connectionState not supported, using pc.iceConnectionState");
              switch (this._pc.iceConnectionState) {
                case "checking": {
                  this.emit("@connectionstatechange", "connecting");
                  break;
                }
                case "connected":
                case "completed": {
                  this.emit("@connectionstatechange", "connected");
                  break;
                }
                case "failed": {
                  this.emit("@connectionstatechange", "failed");
                  break;
                }
                case "disconnected": {
                  this.emit("@connectionstatechange", "disconnected");
                  break;
                }
                case "closed": {
                  this.emit("@connectionstatechange", "closed");
                  break;
                }
              }
            });
          }
        }
        async updateIceServers(iceServers) {
          logger.debug("updateIceServers()");
          const configuration = this._pc.getConfiguration();
          configuration.iceServers = iceServers;
          this._pc.setConfiguration(configuration);
        }
        async restartIce(iceParameters) {
          logger.debug("restartIce()");
          this._remoteSdp.updateIceParameters(iceParameters);
          if (!this._transportReady) {
            return;
          }
          if (this._direction === "send") {
            const offer = await this._pc.createOffer({
              iceRestart: true
            });
            logger.debug("restartIce() | calling pc.setLocalDescription() [offer:%o]", offer);
            await this._pc.setLocalDescription(offer);
            const answer = {
              type: "answer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("restartIce() | calling pc.setRemoteDescription() [answer:%o]", answer);
            await this._pc.setRemoteDescription(answer);
          } else {
            const offer = {
              type: "offer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("restartIce() | calling pc.setRemoteDescription() [offer:%o]", offer);
            await this._pc.setRemoteDescription(offer);
            const answer = await this._pc.createAnswer();
            logger.debug("restartIce() | calling pc.setLocalDescription() [answer:%o]", answer);
            await this._pc.setLocalDescription(answer);
          }
        }
        async getTransportStats() {
          return this._pc.getStats();
        }
        async send({ track, encodings, codecOptions, codec }) {
          this.assertSendDirection();
          logger.debug("send() [kind:%s, track.id:%s]", track.kind, track.id);
          if (codec) {
            logger.warn("send() | codec selection is not available in %s handler", this.name);
          }
          this._sendStream.addTrack(track);
          this._pc.addStream(this._sendStream);
          let offer = await this._pc.createOffer();
          let localSdpObject = sdpTransform.parse(offer.sdp);
          let offerMediaObject;
          const sendingRtpParameters = utils.clone(this._sendingRtpParametersByKind[track.kind]);
          sendingRtpParameters.codecs = ortc.reduceCodecs(sendingRtpParameters.codecs);
          const sendingRemoteRtpParameters = utils.clone(this._sendingRemoteRtpParametersByKind[track.kind]);
          sendingRemoteRtpParameters.codecs = ortc.reduceCodecs(sendingRemoteRtpParameters.codecs);
          if (!this._transportReady) {
            await this.setupTransport({
              localDtlsRole: this._forcedLocalDtlsRole ?? "client",
              localSdpObject
            });
          }
          if (track.kind === "video" && encodings && encodings.length > 1) {
            logger.debug("send() | enabling simulcast");
            localSdpObject = sdpTransform.parse(offer.sdp);
            offerMediaObject = localSdpObject.media.find((m) => m.type === "video");
            sdpPlanBUtils.addLegacySimulcast({
              offerMediaObject,
              track,
              numStreams: encodings.length
            });
            offer = {
              type: "offer",
              sdp: sdpTransform.write(localSdpObject)
            };
          }
          logger.debug("send() | calling pc.setLocalDescription() [offer:%o]", offer);
          await this._pc.setLocalDescription(offer);
          localSdpObject = sdpTransform.parse(this._pc.localDescription.sdp);
          offerMediaObject = localSdpObject.media.find((m) => m.type === track.kind);
          sendingRtpParameters.rtcp.cname = sdpCommonUtils.getCname({
            offerMediaObject
          });
          sendingRtpParameters.encodings = sdpPlanBUtils.getRtpEncodings({
            offerMediaObject,
            track
          });
          if (encodings) {
            for (let idx = 0; idx < sendingRtpParameters.encodings.length; ++idx) {
              if (encodings[idx]) {
                Object.assign(sendingRtpParameters.encodings[idx], encodings[idx]);
              }
            }
          }
          if (sendingRtpParameters.encodings.length > 1 && sendingRtpParameters.codecs[0].mimeType.toLowerCase() === "video/vp8") {
            for (const encoding of sendingRtpParameters.encodings) {
              encoding.scalabilityMode = "L1T3";
            }
          }
          this._remoteSdp.send({
            offerMediaObject,
            offerRtpParameters: sendingRtpParameters,
            answerRtpParameters: sendingRemoteRtpParameters,
            codecOptions
          });
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("send() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
          const localId = String(this._nextSendLocalId);
          this._nextSendLocalId++;
          this._mapSendLocalIdTrack.set(localId, track);
          return {
            localId,
            rtpParameters: sendingRtpParameters
          };
        }
        async stopSending(localId) {
          this.assertSendDirection();
          logger.debug("stopSending() [localId:%s]", localId);
          const track = this._mapSendLocalIdTrack.get(localId);
          if (!track) {
            throw new Error("track not found");
          }
          this._mapSendLocalIdTrack.delete(localId);
          this._sendStream.removeTrack(track);
          this._pc.addStream(this._sendStream);
          const offer = await this._pc.createOffer();
          logger.debug("stopSending() | calling pc.setLocalDescription() [offer:%o]", offer);
          try {
            await this._pc.setLocalDescription(offer);
          } catch (error) {
            if (this._sendStream.getTracks().length === 0) {
              logger.warn("stopSending() | ignoring expected error due no sending tracks: %s", error.toString());
              return;
            }
            throw error;
          }
          if (this._pc.signalingState === "stable") {
            return;
          }
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("stopSending() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        async pauseSending(localId) {
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        async resumeSending(localId) {
        }
        async replaceTrack(localId, track) {
          throw new errors_1.UnsupportedError("not implemented");
        }
        async setMaxSpatialLayer(localId, spatialLayer) {
          throw new errors_1.UnsupportedError(" not implemented");
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        async setRtpEncodingParameters(localId, params) {
          throw new errors_1.UnsupportedError("not supported");
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        async getSenderStats(localId) {
          throw new errors_1.UnsupportedError("not implemented");
        }
        async sendDataChannel({ ordered, maxPacketLifeTime, maxRetransmits, label, protocol: protocol4 }) {
          this.assertSendDirection();
          const options = {
            negotiated: true,
            id: this._nextSendSctpStreamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmitTime: maxPacketLifeTime,
            maxRetransmits,
            protocol: protocol4
          };
          logger.debug("sendDataChannel() [options:%o]", options);
          const dataChannel = this._pc.createDataChannel(label, options);
          this._nextSendSctpStreamId = ++this._nextSendSctpStreamId % SCTP_NUM_STREAMS.MIS;
          if (!this._hasDataChannelMediaSection) {
            const offer = await this._pc.createOffer();
            const localSdpObject = sdpTransform.parse(offer.sdp);
            const offerMediaObject = localSdpObject.media.find((m) => m.type === "application");
            if (!this._transportReady) {
              await this.setupTransport({
                localDtlsRole: this._forcedLocalDtlsRole ?? "client",
                localSdpObject
              });
            }
            logger.debug("sendDataChannel() | calling pc.setLocalDescription() [offer:%o]", offer);
            await this._pc.setLocalDescription(offer);
            this._remoteSdp.sendSctpAssociation({
              offerMediaObject
            });
            const answer = {
              type: "answer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("sendDataChannel() | calling pc.setRemoteDescription() [answer:%o]", answer);
            await this._pc.setRemoteDescription(answer);
            this._hasDataChannelMediaSection = true;
          }
          const sctpStreamParameters = {
            streamId: options.id,
            ordered: options.ordered,
            maxPacketLifeTime: options.maxPacketLifeTime,
            maxRetransmits: options.maxRetransmits
          };
          return {
            dataChannel,
            sctpStreamParameters
          };
        }
        async receive(optionsList) {
          this.assertRecvDirection();
          const results = [];
          for (const options of optionsList) {
            const { trackId, kind, rtpParameters, streamId } = options;
            logger.debug("receive() [trackId:%s, kind:%s]", trackId, kind);
            const mid = kind;
            this._remoteSdp.receive({
              mid,
              kind,
              offerRtpParameters: rtpParameters,
              streamId: streamId ?? rtpParameters.rtcp.cname,
              trackId
            });
          }
          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("receive() | calling pc.setRemoteDescription() [offer:%o]", offer);
          await this._pc.setRemoteDescription(offer);
          let answer = await this._pc.createAnswer();
          const localSdpObject = sdpTransform.parse(answer.sdp);
          for (const options of optionsList) {
            const { kind, rtpParameters } = options;
            const mid = kind;
            const answerMediaObject = localSdpObject.media.find((m) => String(m.mid) === mid);
            sdpCommonUtils.applyCodecParameters({
              offerRtpParameters: rtpParameters,
              answerMediaObject
            });
          }
          answer = {
            type: "answer",
            sdp: sdpTransform.write(localSdpObject)
          };
          if (!this._transportReady) {
            await this.setupTransport({
              localDtlsRole: this._forcedLocalDtlsRole ?? "client",
              localSdpObject
            });
          }
          logger.debug("receive() | calling pc.setLocalDescription() [answer:%o]", answer);
          await this._pc.setLocalDescription(answer);
          for (const options of optionsList) {
            const { kind, trackId, rtpParameters } = options;
            const mid = kind;
            const localId = trackId;
            const streamId = options.streamId ?? rtpParameters.rtcp.cname;
            const stream = this._pc.getRemoteStreams().find((s) => s.id === streamId);
            const track = stream.getTrackById(localId);
            if (!track) {
              throw new Error("remote track not found");
            }
            this._mapRecvLocalIdInfo.set(localId, {
              mid,
              rtpParameters
            });
            results.push({
              localId,
              track
            });
          }
          return results;
        }
        async stopReceiving(localIds) {
          this.assertRecvDirection();
          for (const localId of localIds) {
            logger.debug("stopReceiving() [localId:%s]", localId);
            const { mid, rtpParameters } = this._mapRecvLocalIdInfo.get(localId) ?? {};
            this._mapRecvLocalIdInfo.delete(localId);
            this._remoteSdp.planBStopReceiving({
              mid,
              offerRtpParameters: rtpParameters
            });
          }
          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("stopReceiving() | calling pc.setRemoteDescription() [offer:%o]", offer);
          await this._pc.setRemoteDescription(offer);
          const answer = await this._pc.createAnswer();
          logger.debug("stopReceiving() | calling pc.setLocalDescription() [answer:%o]", answer);
          await this._pc.setLocalDescription(answer);
        }
        async pauseReceiving(localIds) {
        }
        async resumeReceiving(localIds) {
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        async getReceiverStats(localId) {
          throw new errors_1.UnsupportedError("not implemented");
        }
        async receiveDataChannel({ sctpStreamParameters, label, protocol: protocol4 }) {
          this.assertRecvDirection();
          const { streamId, ordered, maxPacketLifeTime, maxRetransmits } = sctpStreamParameters;
          const options = {
            negotiated: true,
            id: streamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmitTime: maxPacketLifeTime,
            maxRetransmits,
            protocol: protocol4
          };
          logger.debug("receiveDataChannel() [options:%o]", options);
          const dataChannel = this._pc.createDataChannel(label, options);
          if (!this._hasDataChannelMediaSection) {
            this._remoteSdp.receiveSctpAssociation({
              oldDataChannelSpec: true
            });
            const offer = {
              type: "offer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("receiveDataChannel() | calling pc.setRemoteDescription() [offer:%o]", offer);
            await this._pc.setRemoteDescription(offer);
            const answer = await this._pc.createAnswer();
            if (!this._transportReady) {
              const localSdpObject = sdpTransform.parse(answer.sdp);
              await this.setupTransport({
                localDtlsRole: this._forcedLocalDtlsRole ?? "client",
                localSdpObject
              });
            }
            logger.debug("receiveDataChannel() | calling pc.setRemoteDescription() [answer:%o]", answer);
            await this._pc.setLocalDescription(answer);
            this._hasDataChannelMediaSection = true;
          }
          return {
            dataChannel
          };
        }
        async setupTransport({ localDtlsRole, localSdpObject }) {
          if (!localSdpObject) {
            localSdpObject = sdpTransform.parse(this._pc.localDescription.sdp);
          }
          const dtlsParameters = sdpCommonUtils.extractDtlsParameters({
            sdpObject: localSdpObject
          });
          dtlsParameters.role = localDtlsRole;
          this._remoteSdp.updateDtlsRole(localDtlsRole === "client" ? "server" : "client");
          await new Promise((resolve, reject) => {
            this.safeEmit("@connect", {
              dtlsParameters
            }, resolve, reject);
          });
          this._transportReady = true;
        }
        assertSendDirection() {
          if (this._direction !== "send") {
            throw new Error('method can just be called for handlers with "send" direction');
          }
        }
        assertRecvDirection() {
          if (this._direction !== "recv") {
            throw new Error('method can just be called for handlers with "recv" direction');
          }
        }
      }, __name(_a2, "Chrome55"), _a2);
      exports.Chrome55 = Chrome55;
    }
  });

  // node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/handlers/Firefox120.js
  var require_Firefox120 = __commonJS({
    "node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/handlers/Firefox120.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: /* @__PURE__ */ __name(function() {
              return m[k];
            }, "get")
          };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", {
          enumerable: true,
          value: v
        });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Firefox120 = void 0;
      var sdpTransform = __importStar(require_lib3());
      var Logger_1 = require_Logger();
      var errors_1 = require_errors();
      var utils = __importStar(require_utils());
      var ortc = __importStar(require_ortc());
      var sdpCommonUtils = __importStar(require_commonUtils());
      var sdpUnifiedPlanUtils = __importStar(require_unifiedPlanUtils());
      var HandlerInterface_1 = require_HandlerInterface();
      var RemoteSdp_1 = require_RemoteSdp();
      var scalabilityModes_1 = require_scalabilityModes();
      var logger = new Logger_1.Logger("Firefox120");
      var NAME = "Firefox120";
      var SCTP_NUM_STREAMS = {
        OS: 16,
        MIS: 2048
      };
      var _a2;
      var Firefox120 = (_a2 = class extends HandlerInterface_1.HandlerInterface {
        /**
         * Creates a factory function.
         */
        static createFactory() {
          return () => new _a2();
        }
        constructor() {
          super();
          this._closed = false;
          this._mapMidTransceiver = /* @__PURE__ */ new Map();
          this._sendStream = new MediaStream();
          this._hasDataChannelMediaSection = false;
          this._nextSendSctpStreamId = 0;
          this._transportReady = false;
        }
        get name() {
          return NAME;
        }
        close() {
          logger.debug("close()");
          if (this._closed) {
            return;
          }
          this._closed = true;
          if (this._pc) {
            try {
              this._pc.close();
            } catch (error) {
            }
          }
          this.emit("@close");
        }
        async getNativeRtpCapabilities() {
          logger.debug("getNativeRtpCapabilities()");
          const pc = new RTCPeerConnection({
            iceServers: [],
            iceTransportPolicy: "all",
            bundlePolicy: "max-bundle",
            rtcpMuxPolicy: "require"
          });
          const canvas = document.createElement("canvas");
          canvas.getContext("2d");
          const fakeStream = canvas.captureStream();
          const fakeVideoTrack = fakeStream.getVideoTracks()[0];
          try {
            pc.addTransceiver("audio", {
              direction: "sendrecv"
            });
            pc.addTransceiver(fakeVideoTrack, {
              direction: "sendrecv",
              sendEncodings: [
                {
                  rid: "r0",
                  maxBitrate: 1e5
                },
                {
                  rid: "r1",
                  maxBitrate: 5e5
                }
              ]
            });
            const offer = await pc.createOffer();
            try {
              canvas.remove();
            } catch (error) {
            }
            try {
              fakeVideoTrack.stop();
            } catch (error) {
            }
            try {
              pc.close();
            } catch (error) {
            }
            const sdpObject = sdpTransform.parse(offer.sdp);
            const nativeRtpCapabilities = sdpCommonUtils.extractRtpCapabilities({
              sdpObject
            });
            return nativeRtpCapabilities;
          } catch (error) {
            try {
              canvas.remove();
            } catch (error2) {
            }
            try {
              fakeVideoTrack.stop();
            } catch (error2) {
            }
            try {
              pc.close();
            } catch (error2) {
            }
            throw error;
          }
        }
        async getNativeSctpCapabilities() {
          logger.debug("getNativeSctpCapabilities()");
          return {
            numStreams: SCTP_NUM_STREAMS
          };
        }
        run({ direction, iceParameters, iceCandidates, dtlsParameters, sctpParameters, iceServers, iceTransportPolicy, additionalSettings, proprietaryConstraints, extendedRtpCapabilities }) {
          this.assertNotClosed();
          logger.debug("run()");
          this._direction = direction;
          this._remoteSdp = new RemoteSdp_1.RemoteSdp({
            iceParameters,
            iceCandidates,
            dtlsParameters,
            sctpParameters
          });
          this._sendingRtpParametersByKind = {
            audio: ortc.getSendingRtpParameters("audio", extendedRtpCapabilities),
            video: ortc.getSendingRtpParameters("video", extendedRtpCapabilities)
          };
          this._sendingRemoteRtpParametersByKind = {
            audio: ortc.getSendingRemoteRtpParameters("audio", extendedRtpCapabilities),
            video: ortc.getSendingRemoteRtpParameters("video", extendedRtpCapabilities)
          };
          this._pc = new RTCPeerConnection({
            iceServers: iceServers ?? [],
            iceTransportPolicy: iceTransportPolicy ?? "all",
            bundlePolicy: "max-bundle",
            rtcpMuxPolicy: "require",
            ...additionalSettings
          }, proprietaryConstraints);
          this._pc.addEventListener("icegatheringstatechange", () => {
            this.emit("@icegatheringstatechange", this._pc.iceGatheringState);
          });
          if (this._pc.connectionState) {
            this._pc.addEventListener("connectionstatechange", () => {
              this.emit("@connectionstatechange", this._pc.connectionState);
            });
          } else {
            this._pc.addEventListener("iceconnectionstatechange", () => {
              logger.warn("run() | pc.connectionState not supported, using pc.iceConnectionState");
              switch (this._pc.iceConnectionState) {
                case "checking": {
                  this.emit("@connectionstatechange", "connecting");
                  break;
                }
                case "connected":
                case "completed": {
                  this.emit("@connectionstatechange", "connected");
                  break;
                }
                case "failed": {
                  this.emit("@connectionstatechange", "failed");
                  break;
                }
                case "disconnected": {
                  this.emit("@connectionstatechange", "disconnected");
                  break;
                }
                case "closed": {
                  this.emit("@connectionstatechange", "closed");
                  break;
                }
              }
            });
          }
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        async updateIceServers(iceServers) {
          this.assertNotClosed();
          throw new errors_1.UnsupportedError("not supported");
        }
        async restartIce(iceParameters) {
          this.assertNotClosed();
          logger.debug("restartIce()");
          this._remoteSdp.updateIceParameters(iceParameters);
          if (!this._transportReady) {
            return;
          }
          if (this._direction === "send") {
            const offer = await this._pc.createOffer({
              iceRestart: true
            });
            logger.debug("restartIce() | calling pc.setLocalDescription() [offer:%o]", offer);
            await this._pc.setLocalDescription(offer);
            const answer = {
              type: "answer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("restartIce() | calling pc.setRemoteDescription() [answer:%o]", answer);
            await this._pc.setRemoteDescription(answer);
          } else {
            const offer = {
              type: "offer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("restartIce() | calling pc.setRemoteDescription() [offer:%o]", offer);
            await this._pc.setRemoteDescription(offer);
            const answer = await this._pc.createAnswer();
            logger.debug("restartIce() | calling pc.setLocalDescription() [answer:%o]", answer);
            await this._pc.setLocalDescription(answer);
          }
        }
        async getTransportStats() {
          this.assertNotClosed();
          return this._pc.getStats();
        }
        async send({ track, encodings, codecOptions, codec, onRtpSender }) {
          this.assertNotClosed();
          this.assertSendDirection();
          logger.debug("send() [kind:%s, track.id:%s]", track.kind, track.id);
          if (encodings && encodings.length > 1) {
            encodings.forEach((encoding, idx) => {
              encoding.rid = `r${idx}`;
            });
          }
          const sendingRtpParameters = utils.clone(this._sendingRtpParametersByKind[track.kind]);
          sendingRtpParameters.codecs = ortc.reduceCodecs(sendingRtpParameters.codecs, codec);
          const sendingRemoteRtpParameters = utils.clone(this._sendingRemoteRtpParametersByKind[track.kind]);
          sendingRemoteRtpParameters.codecs = ortc.reduceCodecs(sendingRemoteRtpParameters.codecs, codec);
          const transceiver = this._pc.addTransceiver(track, {
            direction: "sendonly",
            streams: [
              this._sendStream
            ],
            sendEncodings: encodings
          });
          if (onRtpSender) {
            onRtpSender(transceiver.sender);
          }
          const offer = await this._pc.createOffer();
          let localSdpObject = sdpTransform.parse(offer.sdp);
          if (!this._transportReady) {
            await this.setupTransport({
              localDtlsRole: "client",
              localSdpObject
            });
          }
          const layers = (0, scalabilityModes_1.parse)((encodings ?? [
            {}
          ])[0].scalabilityMode);
          logger.debug("send() | calling pc.setLocalDescription() [offer:%o]", offer);
          await this._pc.setLocalDescription(offer);
          const localId = transceiver.mid;
          sendingRtpParameters.mid = localId;
          localSdpObject = sdpTransform.parse(this._pc.localDescription.sdp);
          const offerMediaObject = localSdpObject.media[localSdpObject.media.length - 1];
          sendingRtpParameters.rtcp.cname = sdpCommonUtils.getCname({
            offerMediaObject
          });
          if (!encodings) {
            sendingRtpParameters.encodings = sdpUnifiedPlanUtils.getRtpEncodings({
              offerMediaObject
            });
          } else if (encodings.length === 1) {
            const newEncodings = sdpUnifiedPlanUtils.getRtpEncodings({
              offerMediaObject
            });
            Object.assign(newEncodings[0], encodings[0]);
            sendingRtpParameters.encodings = newEncodings;
          } else {
            sendingRtpParameters.encodings = encodings;
          }
          if (sendingRtpParameters.encodings.length > 1 && (sendingRtpParameters.codecs[0].mimeType.toLowerCase() === "video/vp8" || sendingRtpParameters.codecs[0].mimeType.toLowerCase() === "video/h264")) {
            for (const encoding of sendingRtpParameters.encodings) {
              if (encoding.scalabilityMode) {
                encoding.scalabilityMode = `L1T${layers.temporalLayers}`;
              } else {
                encoding.scalabilityMode = "L1T3";
              }
            }
          }
          this._remoteSdp.send({
            offerMediaObject,
            offerRtpParameters: sendingRtpParameters,
            answerRtpParameters: sendingRemoteRtpParameters,
            codecOptions,
            extmapAllowMixed: true
          });
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("send() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
          this._mapMidTransceiver.set(localId, transceiver);
          return {
            localId,
            rtpParameters: sendingRtpParameters,
            rtpSender: transceiver.sender
          };
        }
        async stopSending(localId) {
          this.assertSendDirection();
          logger.debug("stopSending() [localId:%s]", localId);
          if (this._closed) {
            return;
          }
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated transceiver not found");
          }
          void transceiver.sender.replaceTrack(null);
          this._pc.removeTrack(transceiver.sender);
          this._remoteSdp.disableMediaSection(transceiver.mid);
          const offer = await this._pc.createOffer();
          logger.debug("stopSending() | calling pc.setLocalDescription() [offer:%o]", offer);
          await this._pc.setLocalDescription(offer);
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("stopSending() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
          this._mapMidTransceiver.delete(localId);
        }
        async pauseSending(localId) {
          this.assertNotClosed();
          this.assertSendDirection();
          logger.debug("pauseSending() [localId:%s]", localId);
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          transceiver.direction = "inactive";
          this._remoteSdp.pauseMediaSection(localId);
          const offer = await this._pc.createOffer();
          logger.debug("pauseSending() | calling pc.setLocalDescription() [offer:%o]", offer);
          await this._pc.setLocalDescription(offer);
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("pauseSending() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
        }
        async resumeSending(localId) {
          this.assertNotClosed();
          this.assertSendDirection();
          logger.debug("resumeSending() [localId:%s]", localId);
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          transceiver.direction = "sendonly";
          this._remoteSdp.resumeSendingMediaSection(localId);
          const offer = await this._pc.createOffer();
          logger.debug("resumeSending() | calling pc.setLocalDescription() [offer:%o]", offer);
          await this._pc.setLocalDescription(offer);
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("resumeSending() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
        }
        async replaceTrack(localId, track) {
          this.assertNotClosed();
          this.assertSendDirection();
          if (track) {
            logger.debug("replaceTrack() [localId:%s, track.id:%s]", localId, track.id);
          } else {
            logger.debug("replaceTrack() [localId:%s, no track]", localId);
          }
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          await transceiver.sender.replaceTrack(track);
        }
        async setMaxSpatialLayer(localId, spatialLayer) {
          this.assertNotClosed();
          this.assertSendDirection();
          logger.debug("setMaxSpatialLayer() [localId:%s, spatialLayer:%s]", localId, spatialLayer);
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated transceiver not found");
          }
          const parameters = transceiver.sender.getParameters();
          parameters.encodings.forEach((encoding, idx) => {
            if (idx <= spatialLayer) {
              encoding.active = true;
            } else {
              encoding.active = false;
            }
          });
          await transceiver.sender.setParameters(parameters);
          this._remoteSdp.muxMediaSectionSimulcast(localId, parameters.encodings);
          const offer = await this._pc.createOffer();
          logger.debug("setMaxSpatialLayer() | calling pc.setLocalDescription() [offer:%o]", offer);
          await this._pc.setLocalDescription(offer);
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("setMaxSpatialLayer() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
        }
        async setRtpEncodingParameters(localId, params) {
          this.assertNotClosed();
          this.assertSendDirection();
          logger.debug("setRtpEncodingParameters() [localId:%s, params:%o]", localId, params);
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          const parameters = transceiver.sender.getParameters();
          parameters.encodings.forEach((encoding, idx) => {
            parameters.encodings[idx] = {
              ...encoding,
              ...params
            };
          });
          await transceiver.sender.setParameters(parameters);
          this._remoteSdp.muxMediaSectionSimulcast(localId, parameters.encodings);
          const offer = await this._pc.createOffer();
          logger.debug("setRtpEncodingParameters() | calling pc.setLocalDescription() [offer:%o]", offer);
          await this._pc.setLocalDescription(offer);
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("setRtpEncodingParameters() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
        }
        async getSenderStats(localId) {
          this.assertNotClosed();
          this.assertSendDirection();
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          return transceiver.sender.getStats();
        }
        async sendDataChannel({ ordered, maxPacketLifeTime, maxRetransmits, label, protocol: protocol4 }) {
          this.assertNotClosed();
          this.assertSendDirection();
          const options = {
            negotiated: true,
            id: this._nextSendSctpStreamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmits,
            protocol: protocol4
          };
          logger.debug("sendDataChannel() [options:%o]", options);
          const dataChannel = this._pc.createDataChannel(label, options);
          this._nextSendSctpStreamId = ++this._nextSendSctpStreamId % SCTP_NUM_STREAMS.MIS;
          if (!this._hasDataChannelMediaSection) {
            const offer = await this._pc.createOffer();
            const localSdpObject = sdpTransform.parse(offer.sdp);
            const offerMediaObject = localSdpObject.media.find((m) => m.type === "application");
            if (!this._transportReady) {
              await this.setupTransport({
                localDtlsRole: "client",
                localSdpObject
              });
            }
            logger.debug("sendDataChannel() | calling pc.setLocalDescription() [offer:%o]", offer);
            await this._pc.setLocalDescription(offer);
            this._remoteSdp.sendSctpAssociation({
              offerMediaObject
            });
            const answer = {
              type: "answer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("sendDataChannel() | calling pc.setRemoteDescription() [answer:%o]", answer);
            await this._pc.setRemoteDescription(answer);
            this._hasDataChannelMediaSection = true;
          }
          const sctpStreamParameters = {
            streamId: options.id,
            ordered: options.ordered,
            maxPacketLifeTime: options.maxPacketLifeTime,
            maxRetransmits: options.maxRetransmits
          };
          return {
            dataChannel,
            sctpStreamParameters
          };
        }
        async receive(optionsList) {
          this.assertNotClosed();
          this.assertRecvDirection();
          const results = [];
          const mapLocalId = /* @__PURE__ */ new Map();
          for (const options of optionsList) {
            const { trackId, kind, rtpParameters, streamId } = options;
            logger.debug("receive() [trackId:%s, kind:%s]", trackId, kind);
            const localId = rtpParameters.mid ?? String(this._mapMidTransceiver.size);
            mapLocalId.set(trackId, localId);
            this._remoteSdp.receive({
              mid: localId,
              kind,
              offerRtpParameters: rtpParameters,
              streamId: streamId ?? rtpParameters.rtcp.cname,
              trackId
            });
          }
          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("receive() | calling pc.setRemoteDescription() [offer:%o]", offer);
          await this._pc.setRemoteDescription(offer);
          for (const options of optionsList) {
            const { trackId, onRtpReceiver } = options;
            if (onRtpReceiver) {
              const localId = mapLocalId.get(trackId);
              const transceiver = this._pc.getTransceivers().find((t) => t.mid === localId);
              if (!transceiver) {
                throw new Error("transceiver not found");
              }
              onRtpReceiver(transceiver.receiver);
            }
          }
          let answer = await this._pc.createAnswer();
          const localSdpObject = sdpTransform.parse(answer.sdp);
          for (const options of optionsList) {
            const { trackId, rtpParameters } = options;
            const localId = mapLocalId.get(trackId);
            const answerMediaObject = localSdpObject.media.find((m) => String(m.mid) === localId);
            sdpCommonUtils.applyCodecParameters({
              offerRtpParameters: rtpParameters,
              answerMediaObject
            });
            answer = {
              type: "answer",
              sdp: sdpTransform.write(localSdpObject)
            };
          }
          if (!this._transportReady) {
            await this.setupTransport({
              localDtlsRole: "client",
              localSdpObject
            });
          }
          logger.debug("receive() | calling pc.setLocalDescription() [answer:%o]", answer);
          await this._pc.setLocalDescription(answer);
          for (const options of optionsList) {
            const { trackId } = options;
            const localId = mapLocalId.get(trackId);
            const transceiver = this._pc.getTransceivers().find((t) => t.mid === localId);
            if (!transceiver) {
              throw new Error("new RTCRtpTransceiver not found");
            }
            this._mapMidTransceiver.set(localId, transceiver);
            results.push({
              localId,
              track: transceiver.receiver.track,
              rtpReceiver: transceiver.receiver
            });
          }
          return results;
        }
        async stopReceiving(localIds) {
          this.assertRecvDirection();
          if (this._closed) {
            return;
          }
          for (const localId of localIds) {
            logger.debug("stopReceiving() [localId:%s]", localId);
            const transceiver = this._mapMidTransceiver.get(localId);
            if (!transceiver) {
              throw new Error("associated RTCRtpTransceiver not found");
            }
            this._remoteSdp.closeMediaSection(transceiver.mid);
          }
          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("stopReceiving() | calling pc.setRemoteDescription() [offer:%o]", offer);
          await this._pc.setRemoteDescription(offer);
          const answer = await this._pc.createAnswer();
          logger.debug("stopReceiving() | calling pc.setLocalDescription() [answer:%o]", answer);
          await this._pc.setLocalDescription(answer);
          for (const localId of localIds) {
            this._mapMidTransceiver.delete(localId);
          }
        }
        async pauseReceiving(localIds) {
          this.assertNotClosed();
          this.assertRecvDirection();
          for (const localId of localIds) {
            logger.debug("pauseReceiving() [localId:%s]", localId);
            const transceiver = this._mapMidTransceiver.get(localId);
            if (!transceiver) {
              throw new Error("associated RTCRtpTransceiver not found");
            }
            transceiver.direction = "inactive";
            this._remoteSdp.pauseMediaSection(localId);
          }
          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("pauseReceiving() | calling pc.setRemoteDescription() [offer:%o]", offer);
          await this._pc.setRemoteDescription(offer);
          const answer = await this._pc.createAnswer();
          logger.debug("pauseReceiving() | calling pc.setLocalDescription() [answer:%o]", answer);
          await this._pc.setLocalDescription(answer);
        }
        async resumeReceiving(localIds) {
          this.assertNotClosed();
          this.assertRecvDirection();
          for (const localId of localIds) {
            logger.debug("resumeReceiving() [localId:%s]", localId);
            const transceiver = this._mapMidTransceiver.get(localId);
            if (!transceiver) {
              throw new Error("associated RTCRtpTransceiver not found");
            }
            transceiver.direction = "recvonly";
            this._remoteSdp.resumeReceivingMediaSection(localId);
          }
          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("resumeReceiving() | calling pc.setRemoteDescription() [offer:%o]", offer);
          await this._pc.setRemoteDescription(offer);
          const answer = await this._pc.createAnswer();
          logger.debug("resumeReceiving() | calling pc.setLocalDescription() [answer:%o]", answer);
          await this._pc.setLocalDescription(answer);
        }
        async getReceiverStats(localId) {
          this.assertRecvDirection();
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          return transceiver.receiver.getStats();
        }
        async receiveDataChannel({ sctpStreamParameters, label, protocol: protocol4 }) {
          this.assertNotClosed();
          this.assertRecvDirection();
          const { streamId, ordered, maxPacketLifeTime, maxRetransmits } = sctpStreamParameters;
          const options = {
            negotiated: true,
            id: streamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmits,
            protocol: protocol4
          };
          logger.debug("receiveDataChannel() [options:%o]", options);
          const dataChannel = this._pc.createDataChannel(label, options);
          if (!this._hasDataChannelMediaSection) {
            this._remoteSdp.receiveSctpAssociation();
            const offer = {
              type: "offer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("receiveDataChannel() | calling pc.setRemoteDescription() [offer:%o]", offer);
            await this._pc.setRemoteDescription(offer);
            const answer = await this._pc.createAnswer();
            if (!this._transportReady) {
              const localSdpObject = sdpTransform.parse(answer.sdp);
              await this.setupTransport({
                localDtlsRole: "client",
                localSdpObject
              });
            }
            logger.debug("receiveDataChannel() | calling pc.setRemoteDescription() [answer:%o]", answer);
            await this._pc.setLocalDescription(answer);
            this._hasDataChannelMediaSection = true;
          }
          return {
            dataChannel
          };
        }
        async setupTransport({ localDtlsRole, localSdpObject }) {
          if (!localSdpObject) {
            localSdpObject = sdpTransform.parse(this._pc.localDescription.sdp);
          }
          const dtlsParameters = sdpCommonUtils.extractDtlsParameters({
            sdpObject: localSdpObject
          });
          dtlsParameters.role = localDtlsRole;
          this._remoteSdp.updateDtlsRole(localDtlsRole === "client" ? "server" : "client");
          await new Promise((resolve, reject) => {
            this.safeEmit("@connect", {
              dtlsParameters
            }, resolve, reject);
          });
          this._transportReady = true;
        }
        assertNotClosed() {
          if (this._closed) {
            throw new errors_1.InvalidStateError("method called in a closed handler");
          }
        }
        assertSendDirection() {
          if (this._direction !== "send") {
            throw new Error('method can just be called for handlers with "send" direction');
          }
        }
        assertRecvDirection() {
          if (this._direction !== "recv") {
            throw new Error('method can just be called for handlers with "recv" direction');
          }
        }
      }, __name(_a2, "Firefox120"), _a2);
      exports.Firefox120 = Firefox120;
    }
  });

  // node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/handlers/Firefox60.js
  var require_Firefox60 = __commonJS({
    "node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/handlers/Firefox60.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: /* @__PURE__ */ __name(function() {
              return m[k];
            }, "get")
          };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", {
          enumerable: true,
          value: v
        });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Firefox60 = void 0;
      var sdpTransform = __importStar(require_lib3());
      var Logger_1 = require_Logger();
      var errors_1 = require_errors();
      var utils = __importStar(require_utils());
      var ortc = __importStar(require_ortc());
      var sdpCommonUtils = __importStar(require_commonUtils());
      var sdpUnifiedPlanUtils = __importStar(require_unifiedPlanUtils());
      var HandlerInterface_1 = require_HandlerInterface();
      var RemoteSdp_1 = require_RemoteSdp();
      var scalabilityModes_1 = require_scalabilityModes();
      var logger = new Logger_1.Logger("Firefox60");
      var NAME = "Firefox60";
      var SCTP_NUM_STREAMS = {
        OS: 16,
        MIS: 2048
      };
      var _a2;
      var Firefox60 = (_a2 = class extends HandlerInterface_1.HandlerInterface {
        /**
         * Creates a factory function.
         */
        static createFactory() {
          return () => new _a2();
        }
        constructor() {
          super();
          this._closed = false;
          this._mapMidTransceiver = /* @__PURE__ */ new Map();
          this._sendStream = new MediaStream();
          this._hasDataChannelMediaSection = false;
          this._nextSendSctpStreamId = 0;
          this._transportReady = false;
        }
        get name() {
          return NAME;
        }
        close() {
          logger.debug("close()");
          if (this._closed) {
            return;
          }
          this._closed = true;
          if (this._pc) {
            try {
              this._pc.close();
            } catch (error) {
            }
          }
          this.emit("@close");
        }
        async getNativeRtpCapabilities() {
          logger.debug("getNativeRtpCapabilities()");
          const pc = new RTCPeerConnection({
            iceServers: [],
            iceTransportPolicy: "all",
            bundlePolicy: "max-bundle",
            rtcpMuxPolicy: "require"
          });
          const canvas = document.createElement("canvas");
          canvas.getContext("2d");
          const fakeStream = canvas.captureStream();
          const fakeVideoTrack = fakeStream.getVideoTracks()[0];
          try {
            pc.addTransceiver("audio", {
              direction: "sendrecv"
            });
            const videoTransceiver = pc.addTransceiver(fakeVideoTrack, {
              direction: "sendrecv"
            });
            const parameters = videoTransceiver.sender.getParameters();
            const encodings = [
              {
                rid: "r0",
                maxBitrate: 1e5
              },
              {
                rid: "r1",
                maxBitrate: 5e5
              }
            ];
            parameters.encodings = encodings;
            await videoTransceiver.sender.setParameters(parameters);
            const offer = await pc.createOffer();
            try {
              canvas.remove();
            } catch (error) {
            }
            try {
              fakeVideoTrack.stop();
            } catch (error) {
            }
            try {
              pc.close();
            } catch (error) {
            }
            const sdpObject = sdpTransform.parse(offer.sdp);
            const nativeRtpCapabilities = sdpCommonUtils.extractRtpCapabilities({
              sdpObject
            });
            return nativeRtpCapabilities;
          } catch (error) {
            try {
              canvas.remove();
            } catch (error2) {
            }
            try {
              fakeVideoTrack.stop();
            } catch (error2) {
            }
            try {
              pc.close();
            } catch (error2) {
            }
            throw error;
          }
        }
        async getNativeSctpCapabilities() {
          logger.debug("getNativeSctpCapabilities()");
          return {
            numStreams: SCTP_NUM_STREAMS
          };
        }
        run({ direction, iceParameters, iceCandidates, dtlsParameters, sctpParameters, iceServers, iceTransportPolicy, additionalSettings, proprietaryConstraints, extendedRtpCapabilities }) {
          this.assertNotClosed();
          logger.debug("run()");
          this._direction = direction;
          this._remoteSdp = new RemoteSdp_1.RemoteSdp({
            iceParameters,
            iceCandidates,
            dtlsParameters,
            sctpParameters
          });
          this._sendingRtpParametersByKind = {
            audio: ortc.getSendingRtpParameters("audio", extendedRtpCapabilities),
            video: ortc.getSendingRtpParameters("video", extendedRtpCapabilities)
          };
          this._sendingRemoteRtpParametersByKind = {
            audio: ortc.getSendingRemoteRtpParameters("audio", extendedRtpCapabilities),
            video: ortc.getSendingRemoteRtpParameters("video", extendedRtpCapabilities)
          };
          this._pc = new RTCPeerConnection({
            iceServers: iceServers ?? [],
            iceTransportPolicy: iceTransportPolicy ?? "all",
            bundlePolicy: "max-bundle",
            rtcpMuxPolicy: "require",
            ...additionalSettings
          }, proprietaryConstraints);
          this._pc.addEventListener("icegatheringstatechange", () => {
            this.emit("@icegatheringstatechange", this._pc.iceGatheringState);
          });
          if (this._pc.connectionState) {
            this._pc.addEventListener("connectionstatechange", () => {
              this.emit("@connectionstatechange", this._pc.connectionState);
            });
          } else {
            this._pc.addEventListener("iceconnectionstatechange", () => {
              logger.warn("run() | pc.connectionState not supported, using pc.iceConnectionState");
              switch (this._pc.iceConnectionState) {
                case "checking": {
                  this.emit("@connectionstatechange", "connecting");
                  break;
                }
                case "connected":
                case "completed": {
                  this.emit("@connectionstatechange", "connected");
                  break;
                }
                case "failed": {
                  this.emit("@connectionstatechange", "failed");
                  break;
                }
                case "disconnected": {
                  this.emit("@connectionstatechange", "disconnected");
                  break;
                }
                case "closed": {
                  this.emit("@connectionstatechange", "closed");
                  break;
                }
              }
            });
          }
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        async updateIceServers(iceServers) {
          this.assertNotClosed();
          throw new errors_1.UnsupportedError("not supported");
        }
        async restartIce(iceParameters) {
          this.assertNotClosed();
          logger.debug("restartIce()");
          this._remoteSdp.updateIceParameters(iceParameters);
          if (!this._transportReady) {
            return;
          }
          if (this._direction === "send") {
            const offer = await this._pc.createOffer({
              iceRestart: true
            });
            logger.debug("restartIce() | calling pc.setLocalDescription() [offer:%o]", offer);
            await this._pc.setLocalDescription(offer);
            const answer = {
              type: "answer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("restartIce() | calling pc.setRemoteDescription() [answer:%o]", answer);
            await this._pc.setRemoteDescription(answer);
          } else {
            const offer = {
              type: "offer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("restartIce() | calling pc.setRemoteDescription() [offer:%o]", offer);
            await this._pc.setRemoteDescription(offer);
            const answer = await this._pc.createAnswer();
            logger.debug("restartIce() | calling pc.setLocalDescription() [answer:%o]", answer);
            await this._pc.setLocalDescription(answer);
          }
        }
        async getTransportStats() {
          this.assertNotClosed();
          return this._pc.getStats();
        }
        async send({ track, encodings, codecOptions, codec }) {
          this.assertNotClosed();
          this.assertSendDirection();
          logger.debug("send() [kind:%s, track.id:%s]", track.kind, track.id);
          if (encodings) {
            encodings = utils.clone(encodings);
            encodings.forEach((encoding, idx) => {
              encoding.rid = `r${idx}`;
            });
            encodings.reverse();
          }
          const sendingRtpParameters = utils.clone(this._sendingRtpParametersByKind[track.kind]);
          sendingRtpParameters.codecs = ortc.reduceCodecs(sendingRtpParameters.codecs, codec);
          const sendingRemoteRtpParameters = utils.clone(this._sendingRemoteRtpParametersByKind[track.kind]);
          sendingRemoteRtpParameters.codecs = ortc.reduceCodecs(sendingRemoteRtpParameters.codecs, codec);
          const transceiver = this._pc.addTransceiver(track, {
            direction: "sendonly",
            streams: [
              this._sendStream
            ]
          });
          if (encodings) {
            const parameters = transceiver.sender.getParameters();
            parameters.encodings = encodings;
            await transceiver.sender.setParameters(parameters);
          }
          const offer = await this._pc.createOffer();
          let localSdpObject = sdpTransform.parse(offer.sdp);
          if (!this._transportReady) {
            await this.setupTransport({
              localDtlsRole: "client",
              localSdpObject
            });
          }
          const layers = (0, scalabilityModes_1.parse)((encodings ?? [
            {}
          ])[0].scalabilityMode);
          logger.debug("send() | calling pc.setLocalDescription() [offer:%o]", offer);
          await this._pc.setLocalDescription(offer);
          const localId = transceiver.mid;
          sendingRtpParameters.mid = localId;
          localSdpObject = sdpTransform.parse(this._pc.localDescription.sdp);
          const offerMediaObject = localSdpObject.media[localSdpObject.media.length - 1];
          sendingRtpParameters.rtcp.cname = sdpCommonUtils.getCname({
            offerMediaObject
          });
          if (!encodings) {
            sendingRtpParameters.encodings = sdpUnifiedPlanUtils.getRtpEncodings({
              offerMediaObject
            });
          } else if (encodings.length === 1) {
            const newEncodings = sdpUnifiedPlanUtils.getRtpEncodings({
              offerMediaObject
            });
            Object.assign(newEncodings[0], encodings[0]);
            sendingRtpParameters.encodings = newEncodings;
          } else {
            sendingRtpParameters.encodings = encodings.reverse();
          }
          if (sendingRtpParameters.encodings.length > 1 && (sendingRtpParameters.codecs[0].mimeType.toLowerCase() === "video/vp8" || sendingRtpParameters.codecs[0].mimeType.toLowerCase() === "video/h264")) {
            for (const encoding of sendingRtpParameters.encodings) {
              if (encoding.scalabilityMode) {
                encoding.scalabilityMode = `L1T${layers.temporalLayers}`;
              } else {
                encoding.scalabilityMode = "L1T3";
              }
            }
          }
          this._remoteSdp.send({
            offerMediaObject,
            offerRtpParameters: sendingRtpParameters,
            answerRtpParameters: sendingRemoteRtpParameters,
            codecOptions,
            extmapAllowMixed: true
          });
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("send() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
          this._mapMidTransceiver.set(localId, transceiver);
          return {
            localId,
            rtpParameters: sendingRtpParameters,
            rtpSender: transceiver.sender
          };
        }
        async stopSending(localId) {
          this.assertSendDirection();
          logger.debug("stopSending() [localId:%s]", localId);
          if (this._closed) {
            return;
          }
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated transceiver not found");
          }
          void transceiver.sender.replaceTrack(null);
          this._pc.removeTrack(transceiver.sender);
          this._remoteSdp.disableMediaSection(transceiver.mid);
          const offer = await this._pc.createOffer();
          logger.debug("stopSending() | calling pc.setLocalDescription() [offer:%o]", offer);
          await this._pc.setLocalDescription(offer);
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("stopSending() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
          this._mapMidTransceiver.delete(localId);
        }
        async pauseSending(localId) {
          this.assertNotClosed();
          this.assertSendDirection();
          logger.debug("pauseSending() [localId:%s]", localId);
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          transceiver.direction = "inactive";
          this._remoteSdp.pauseMediaSection(localId);
          const offer = await this._pc.createOffer();
          logger.debug("pauseSending() | calling pc.setLocalDescription() [offer:%o]", offer);
          await this._pc.setLocalDescription(offer);
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("pauseSending() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
        }
        async resumeSending(localId) {
          this.assertNotClosed();
          this.assertSendDirection();
          logger.debug("resumeSending() [localId:%s]", localId);
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          transceiver.direction = "sendonly";
          this._remoteSdp.resumeSendingMediaSection(localId);
          const offer = await this._pc.createOffer();
          logger.debug("resumeSending() | calling pc.setLocalDescription() [offer:%o]", offer);
          await this._pc.setLocalDescription(offer);
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("resumeSending() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
        }
        async replaceTrack(localId, track) {
          this.assertNotClosed();
          this.assertSendDirection();
          if (track) {
            logger.debug("replaceTrack() [localId:%s, track.id:%s]", localId, track.id);
          } else {
            logger.debug("replaceTrack() [localId:%s, no track]", localId);
          }
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          await transceiver.sender.replaceTrack(track);
        }
        async setMaxSpatialLayer(localId, spatialLayer) {
          this.assertNotClosed();
          this.assertSendDirection();
          logger.debug("setMaxSpatialLayer() [localId:%s, spatialLayer:%s]", localId, spatialLayer);
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated transceiver not found");
          }
          const parameters = transceiver.sender.getParameters();
          spatialLayer = parameters.encodings.length - 1 - spatialLayer;
          parameters.encodings.forEach((encoding, idx) => {
            if (idx >= spatialLayer) {
              encoding.active = true;
            } else {
              encoding.active = false;
            }
          });
          await transceiver.sender.setParameters(parameters);
          this._remoteSdp.muxMediaSectionSimulcast(localId, parameters.encodings);
          const offer = await this._pc.createOffer();
          logger.debug("setMaxSpatialLayer() | calling pc.setLocalDescription() [offer:%o]", offer);
          await this._pc.setLocalDescription(offer);
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("setMaxSpatialLayer() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
        }
        async setRtpEncodingParameters(localId, params) {
          this.assertNotClosed();
          this.assertSendDirection();
          logger.debug("setRtpEncodingParameters() [localId:%s, params:%o]", localId, params);
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          const parameters = transceiver.sender.getParameters();
          parameters.encodings.forEach((encoding, idx) => {
            parameters.encodings[idx] = {
              ...encoding,
              ...params
            };
          });
          await transceiver.sender.setParameters(parameters);
          this._remoteSdp.muxMediaSectionSimulcast(localId, parameters.encodings);
          const offer = await this._pc.createOffer();
          logger.debug("setRtpEncodingParameters() | calling pc.setLocalDescription() [offer:%o]", offer);
          await this._pc.setLocalDescription(offer);
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("setRtpEncodingParameters() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
        }
        async getSenderStats(localId) {
          this.assertNotClosed();
          this.assertSendDirection();
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          return transceiver.sender.getStats();
        }
        async sendDataChannel({ ordered, maxPacketLifeTime, maxRetransmits, label, protocol: protocol4 }) {
          this.assertNotClosed();
          this.assertSendDirection();
          const options = {
            negotiated: true,
            id: this._nextSendSctpStreamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmits,
            protocol: protocol4
          };
          logger.debug("sendDataChannel() [options:%o]", options);
          const dataChannel = this._pc.createDataChannel(label, options);
          this._nextSendSctpStreamId = ++this._nextSendSctpStreamId % SCTP_NUM_STREAMS.MIS;
          if (!this._hasDataChannelMediaSection) {
            const offer = await this._pc.createOffer();
            const localSdpObject = sdpTransform.parse(offer.sdp);
            const offerMediaObject = localSdpObject.media.find((m) => m.type === "application");
            if (!this._transportReady) {
              await this.setupTransport({
                localDtlsRole: "client",
                localSdpObject
              });
            }
            logger.debug("sendDataChannel() | calling pc.setLocalDescription() [offer:%o]", offer);
            await this._pc.setLocalDescription(offer);
            this._remoteSdp.sendSctpAssociation({
              offerMediaObject
            });
            const answer = {
              type: "answer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("sendDataChannel() | calling pc.setRemoteDescription() [answer:%o]", answer);
            await this._pc.setRemoteDescription(answer);
            this._hasDataChannelMediaSection = true;
          }
          const sctpStreamParameters = {
            streamId: options.id,
            ordered: options.ordered,
            maxPacketLifeTime: options.maxPacketLifeTime,
            maxRetransmits: options.maxRetransmits
          };
          return {
            dataChannel,
            sctpStreamParameters
          };
        }
        async receive(optionsList) {
          this.assertNotClosed();
          this.assertRecvDirection();
          const results = [];
          const mapLocalId = /* @__PURE__ */ new Map();
          for (const options of optionsList) {
            const { trackId, kind, rtpParameters, streamId } = options;
            logger.debug("receive() [trackId:%s, kind:%s]", trackId, kind);
            const localId = rtpParameters.mid ?? String(this._mapMidTransceiver.size);
            mapLocalId.set(trackId, localId);
            this._remoteSdp.receive({
              mid: localId,
              kind,
              offerRtpParameters: rtpParameters,
              streamId: streamId ?? rtpParameters.rtcp.cname,
              trackId
            });
          }
          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("receive() | calling pc.setRemoteDescription() [offer:%o]", offer);
          await this._pc.setRemoteDescription(offer);
          let answer = await this._pc.createAnswer();
          const localSdpObject = sdpTransform.parse(answer.sdp);
          for (const options of optionsList) {
            const { trackId, rtpParameters } = options;
            const localId = mapLocalId.get(trackId);
            const answerMediaObject = localSdpObject.media.find((m) => String(m.mid) === localId);
            sdpCommonUtils.applyCodecParameters({
              offerRtpParameters: rtpParameters,
              answerMediaObject
            });
            answer = {
              type: "answer",
              sdp: sdpTransform.write(localSdpObject)
            };
          }
          if (!this._transportReady) {
            await this.setupTransport({
              localDtlsRole: "client",
              localSdpObject
            });
          }
          logger.debug("receive() | calling pc.setLocalDescription() [answer:%o]", answer);
          await this._pc.setLocalDescription(answer);
          for (const options of optionsList) {
            const { trackId } = options;
            const localId = mapLocalId.get(trackId);
            const transceiver = this._pc.getTransceivers().find((t) => t.mid === localId);
            if (!transceiver) {
              throw new Error("new RTCRtpTransceiver not found");
            }
            this._mapMidTransceiver.set(localId, transceiver);
            results.push({
              localId,
              track: transceiver.receiver.track,
              rtpReceiver: transceiver.receiver
            });
          }
          return results;
        }
        async stopReceiving(localIds) {
          this.assertRecvDirection();
          if (this._closed) {
            return;
          }
          for (const localId of localIds) {
            logger.debug("stopReceiving() [localId:%s]", localId);
            const transceiver = this._mapMidTransceiver.get(localId);
            if (!transceiver) {
              throw new Error("associated RTCRtpTransceiver not found");
            }
            this._remoteSdp.closeMediaSection(transceiver.mid);
          }
          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("stopReceiving() | calling pc.setRemoteDescription() [offer:%o]", offer);
          await this._pc.setRemoteDescription(offer);
          const answer = await this._pc.createAnswer();
          logger.debug("stopReceiving() | calling pc.setLocalDescription() [answer:%o]", answer);
          await this._pc.setLocalDescription(answer);
          for (const localId of localIds) {
            this._mapMidTransceiver.delete(localId);
          }
        }
        async pauseReceiving(localIds) {
          this.assertNotClosed();
          this.assertRecvDirection();
          for (const localId of localIds) {
            logger.debug("pauseReceiving() [localId:%s]", localId);
            const transceiver = this._mapMidTransceiver.get(localId);
            if (!transceiver) {
              throw new Error("associated RTCRtpTransceiver not found");
            }
            transceiver.direction = "inactive";
            this._remoteSdp.pauseMediaSection(localId);
          }
          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("pauseReceiving() | calling pc.setRemoteDescription() [offer:%o]", offer);
          await this._pc.setRemoteDescription(offer);
          const answer = await this._pc.createAnswer();
          logger.debug("pauseReceiving() | calling pc.setLocalDescription() [answer:%o]", answer);
          await this._pc.setLocalDescription(answer);
        }
        async resumeReceiving(localIds) {
          this.assertNotClosed();
          this.assertRecvDirection();
          for (const localId of localIds) {
            logger.debug("resumeReceiving() [localId:%s]", localId);
            const transceiver = this._mapMidTransceiver.get(localId);
            if (!transceiver) {
              throw new Error("associated RTCRtpTransceiver not found");
            }
            transceiver.direction = "recvonly";
            this._remoteSdp.resumeReceivingMediaSection(localId);
          }
          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("resumeReceiving() | calling pc.setRemoteDescription() [offer:%o]", offer);
          await this._pc.setRemoteDescription(offer);
          const answer = await this._pc.createAnswer();
          logger.debug("resumeReceiving() | calling pc.setLocalDescription() [answer:%o]", answer);
          await this._pc.setLocalDescription(answer);
        }
        async getReceiverStats(localId) {
          this.assertRecvDirection();
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          return transceiver.receiver.getStats();
        }
        async receiveDataChannel({ sctpStreamParameters, label, protocol: protocol4 }) {
          this.assertNotClosed();
          this.assertRecvDirection();
          const { streamId, ordered, maxPacketLifeTime, maxRetransmits } = sctpStreamParameters;
          const options = {
            negotiated: true,
            id: streamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmits,
            protocol: protocol4
          };
          logger.debug("receiveDataChannel() [options:%o]", options);
          const dataChannel = this._pc.createDataChannel(label, options);
          if (!this._hasDataChannelMediaSection) {
            this._remoteSdp.receiveSctpAssociation();
            const offer = {
              type: "offer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("receiveDataChannel() | calling pc.setRemoteDescription() [offer:%o]", offer);
            await this._pc.setRemoteDescription(offer);
            const answer = await this._pc.createAnswer();
            if (!this._transportReady) {
              const localSdpObject = sdpTransform.parse(answer.sdp);
              await this.setupTransport({
                localDtlsRole: "client",
                localSdpObject
              });
            }
            logger.debug("receiveDataChannel() | calling pc.setRemoteDescription() [answer:%o]", answer);
            await this._pc.setLocalDescription(answer);
            this._hasDataChannelMediaSection = true;
          }
          return {
            dataChannel
          };
        }
        async setupTransport({ localDtlsRole, localSdpObject }) {
          if (!localSdpObject) {
            localSdpObject = sdpTransform.parse(this._pc.localDescription.sdp);
          }
          const dtlsParameters = sdpCommonUtils.extractDtlsParameters({
            sdpObject: localSdpObject
          });
          dtlsParameters.role = localDtlsRole;
          this._remoteSdp.updateDtlsRole(localDtlsRole === "client" ? "server" : "client");
          await new Promise((resolve, reject) => {
            this.safeEmit("@connect", {
              dtlsParameters
            }, resolve, reject);
          });
          this._transportReady = true;
        }
        assertNotClosed() {
          if (this._closed) {
            throw new errors_1.InvalidStateError("method called in a closed handler");
          }
        }
        assertSendDirection() {
          if (this._direction !== "send") {
            throw new Error('method can just be called for handlers with "send" direction');
          }
        }
        assertRecvDirection() {
          if (this._direction !== "recv") {
            throw new Error('method can just be called for handlers with "recv" direction');
          }
        }
      }, __name(_a2, "Firefox60"), _a2);
      exports.Firefox60 = Firefox60;
    }
  });

  // node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/handlers/Safari12.js
  var require_Safari12 = __commonJS({
    "node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/handlers/Safari12.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: /* @__PURE__ */ __name(function() {
              return m[k];
            }, "get")
          };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", {
          enumerable: true,
          value: v
        });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Safari12 = void 0;
      var sdpTransform = __importStar(require_lib3());
      var Logger_1 = require_Logger();
      var utils = __importStar(require_utils());
      var ortc = __importStar(require_ortc());
      var sdpCommonUtils = __importStar(require_commonUtils());
      var sdpUnifiedPlanUtils = __importStar(require_unifiedPlanUtils());
      var ortcUtils = __importStar(require_utils2());
      var errors_1 = require_errors();
      var HandlerInterface_1 = require_HandlerInterface();
      var RemoteSdp_1 = require_RemoteSdp();
      var scalabilityModes_1 = require_scalabilityModes();
      var logger = new Logger_1.Logger("Safari12");
      var NAME = "Safari12";
      var SCTP_NUM_STREAMS = {
        OS: 1024,
        MIS: 1024
      };
      var _a2;
      var Safari12 = (_a2 = class extends HandlerInterface_1.HandlerInterface {
        /**
         * Creates a factory function.
         */
        static createFactory() {
          return () => new _a2();
        }
        constructor() {
          super();
          this._closed = false;
          this._mapMidTransceiver = /* @__PURE__ */ new Map();
          this._sendStream = new MediaStream();
          this._hasDataChannelMediaSection = false;
          this._nextSendSctpStreamId = 0;
          this._transportReady = false;
        }
        get name() {
          return NAME;
        }
        close() {
          logger.debug("close()");
          if (this._closed) {
            return;
          }
          this._closed = true;
          if (this._pc) {
            try {
              this._pc.close();
            } catch (error) {
            }
          }
          this.emit("@close");
        }
        async getNativeRtpCapabilities() {
          logger.debug("getNativeRtpCapabilities()");
          const pc = new RTCPeerConnection({
            iceServers: [],
            iceTransportPolicy: "all",
            bundlePolicy: "max-bundle",
            rtcpMuxPolicy: "require"
          });
          try {
            pc.addTransceiver("audio");
            pc.addTransceiver("video");
            const offer = await pc.createOffer();
            try {
              pc.close();
            } catch (error) {
            }
            const sdpObject = sdpTransform.parse(offer.sdp);
            const nativeRtpCapabilities = sdpCommonUtils.extractRtpCapabilities({
              sdpObject
            });
            ortcUtils.addNackSuppportForOpus(nativeRtpCapabilities);
            return nativeRtpCapabilities;
          } catch (error) {
            try {
              pc.close();
            } catch (error2) {
            }
            throw error;
          }
        }
        async getNativeSctpCapabilities() {
          logger.debug("getNativeSctpCapabilities()");
          return {
            numStreams: SCTP_NUM_STREAMS
          };
        }
        run({ direction, iceParameters, iceCandidates, dtlsParameters, sctpParameters, iceServers, iceTransportPolicy, additionalSettings, proprietaryConstraints, extendedRtpCapabilities }) {
          this.assertNotClosed();
          logger.debug("run()");
          this._direction = direction;
          this._remoteSdp = new RemoteSdp_1.RemoteSdp({
            iceParameters,
            iceCandidates,
            dtlsParameters,
            sctpParameters
          });
          this._sendingRtpParametersByKind = {
            audio: ortc.getSendingRtpParameters("audio", extendedRtpCapabilities),
            video: ortc.getSendingRtpParameters("video", extendedRtpCapabilities)
          };
          this._sendingRemoteRtpParametersByKind = {
            audio: ortc.getSendingRemoteRtpParameters("audio", extendedRtpCapabilities),
            video: ortc.getSendingRemoteRtpParameters("video", extendedRtpCapabilities)
          };
          if (dtlsParameters.role && dtlsParameters.role !== "auto") {
            this._forcedLocalDtlsRole = dtlsParameters.role === "server" ? "client" : "server";
          }
          this._pc = new RTCPeerConnection({
            iceServers: iceServers ?? [],
            iceTransportPolicy: iceTransportPolicy ?? "all",
            bundlePolicy: "max-bundle",
            rtcpMuxPolicy: "require",
            ...additionalSettings
          }, proprietaryConstraints);
          this._pc.addEventListener("icegatheringstatechange", () => {
            this.emit("@icegatheringstatechange", this._pc.iceGatheringState);
          });
          if (this._pc.connectionState) {
            this._pc.addEventListener("connectionstatechange", () => {
              this.emit("@connectionstatechange", this._pc.connectionState);
            });
          } else {
            this._pc.addEventListener("iceconnectionstatechange", () => {
              logger.warn("run() | pc.connectionState not supported, using pc.iceConnectionState");
              switch (this._pc.iceConnectionState) {
                case "checking": {
                  this.emit("@connectionstatechange", "connecting");
                  break;
                }
                case "connected":
                case "completed": {
                  this.emit("@connectionstatechange", "connected");
                  break;
                }
                case "failed": {
                  this.emit("@connectionstatechange", "failed");
                  break;
                }
                case "disconnected": {
                  this.emit("@connectionstatechange", "disconnected");
                  break;
                }
                case "closed": {
                  this.emit("@connectionstatechange", "closed");
                  break;
                }
              }
            });
          }
        }
        async updateIceServers(iceServers) {
          this.assertNotClosed();
          logger.debug("updateIceServers()");
          const configuration = this._pc.getConfiguration();
          configuration.iceServers = iceServers;
          this._pc.setConfiguration(configuration);
        }
        async restartIce(iceParameters) {
          this.assertNotClosed();
          logger.debug("restartIce()");
          this._remoteSdp.updateIceParameters(iceParameters);
          if (!this._transportReady) {
            return;
          }
          if (this._direction === "send") {
            const offer = await this._pc.createOffer({
              iceRestart: true
            });
            logger.debug("restartIce() | calling pc.setLocalDescription() [offer:%o]", offer);
            await this._pc.setLocalDescription(offer);
            const answer = {
              type: "answer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("restartIce() | calling pc.setRemoteDescription() [answer:%o]", answer);
            await this._pc.setRemoteDescription(answer);
          } else {
            const offer = {
              type: "offer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("restartIce() | calling pc.setRemoteDescription() [offer:%o]", offer);
            await this._pc.setRemoteDescription(offer);
            const answer = await this._pc.createAnswer();
            logger.debug("restartIce() | calling pc.setLocalDescription() [answer:%o]", answer);
            await this._pc.setLocalDescription(answer);
          }
        }
        async getTransportStats() {
          this.assertNotClosed();
          return this._pc.getStats();
        }
        async send({ track, encodings, codecOptions, codec, onRtpSender }) {
          this.assertNotClosed();
          this.assertSendDirection();
          logger.debug("send() [kind:%s, track.id:%s]", track.kind, track.id);
          const sendingRtpParameters = utils.clone(this._sendingRtpParametersByKind[track.kind]);
          sendingRtpParameters.codecs = ortc.reduceCodecs(sendingRtpParameters.codecs, codec);
          const sendingRemoteRtpParameters = utils.clone(this._sendingRemoteRtpParametersByKind[track.kind]);
          sendingRemoteRtpParameters.codecs = ortc.reduceCodecs(sendingRemoteRtpParameters.codecs, codec);
          const mediaSectionIdx = this._remoteSdp.getNextMediaSectionIdx();
          const transceiver = this._pc.addTransceiver(track, {
            direction: "sendonly",
            streams: [
              this._sendStream
            ]
          });
          if (onRtpSender) {
            onRtpSender(transceiver.sender);
          }
          let offer = await this._pc.createOffer();
          let localSdpObject = sdpTransform.parse(offer.sdp);
          let offerMediaObject;
          if (!this._transportReady) {
            await this.setupTransport({
              localDtlsRole: this._forcedLocalDtlsRole ?? "client",
              localSdpObject
            });
          }
          const layers = (0, scalabilityModes_1.parse)((encodings ?? [
            {}
          ])[0].scalabilityMode);
          if (encodings && encodings.length > 1) {
            logger.debug("send() | enabling legacy simulcast");
            localSdpObject = sdpTransform.parse(offer.sdp);
            offerMediaObject = localSdpObject.media[mediaSectionIdx.idx];
            sdpUnifiedPlanUtils.addLegacySimulcast({
              offerMediaObject,
              numStreams: encodings.length
            });
            offer = {
              type: "offer",
              sdp: sdpTransform.write(localSdpObject)
            };
          }
          logger.debug("send() | calling pc.setLocalDescription() [offer:%o]", offer);
          await this._pc.setLocalDescription(offer);
          const localId = transceiver.mid;
          sendingRtpParameters.mid = localId;
          localSdpObject = sdpTransform.parse(this._pc.localDescription.sdp);
          offerMediaObject = localSdpObject.media[mediaSectionIdx.idx];
          sendingRtpParameters.rtcp.cname = sdpCommonUtils.getCname({
            offerMediaObject
          });
          sendingRtpParameters.encodings = sdpUnifiedPlanUtils.getRtpEncodings({
            offerMediaObject
          });
          if (encodings) {
            for (let idx = 0; idx < sendingRtpParameters.encodings.length; ++idx) {
              if (encodings[idx]) {
                Object.assign(sendingRtpParameters.encodings[idx], encodings[idx]);
              }
            }
          }
          if (sendingRtpParameters.encodings.length > 1 && (sendingRtpParameters.codecs[0].mimeType.toLowerCase() === "video/vp8" || sendingRtpParameters.codecs[0].mimeType.toLowerCase() === "video/h264")) {
            for (const encoding of sendingRtpParameters.encodings) {
              if (encoding.scalabilityMode) {
                encoding.scalabilityMode = `L1T${layers.temporalLayers}`;
              } else {
                encoding.scalabilityMode = "L1T3";
              }
            }
          }
          this._remoteSdp.send({
            offerMediaObject,
            reuseMid: mediaSectionIdx.reuseMid,
            offerRtpParameters: sendingRtpParameters,
            answerRtpParameters: sendingRemoteRtpParameters,
            codecOptions
          });
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("send() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
          this._mapMidTransceiver.set(localId, transceiver);
          return {
            localId,
            rtpParameters: sendingRtpParameters,
            rtpSender: transceiver.sender
          };
        }
        async stopSending(localId) {
          this.assertSendDirection();
          if (this._closed) {
            return;
          }
          logger.debug("stopSending() [localId:%s]", localId);
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          void transceiver.sender.replaceTrack(null);
          this._pc.removeTrack(transceiver.sender);
          const mediaSectionClosed = this._remoteSdp.closeMediaSection(transceiver.mid);
          if (mediaSectionClosed) {
            try {
              transceiver.stop();
            } catch (error) {
            }
          }
          const offer = await this._pc.createOffer();
          logger.debug("stopSending() | calling pc.setLocalDescription() [offer:%o]", offer);
          await this._pc.setLocalDescription(offer);
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("stopSending() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
          this._mapMidTransceiver.delete(localId);
        }
        async pauseSending(localId) {
          this.assertNotClosed();
          this.assertSendDirection();
          logger.debug("pauseSending() [localId:%s]", localId);
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          transceiver.direction = "inactive";
          this._remoteSdp.pauseMediaSection(localId);
          const offer = await this._pc.createOffer();
          logger.debug("pauseSending() | calling pc.setLocalDescription() [offer:%o]", offer);
          await this._pc.setLocalDescription(offer);
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("pauseSending() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
        }
        async resumeSending(localId) {
          this.assertNotClosed();
          this.assertSendDirection();
          logger.debug("resumeSending() [localId:%s]", localId);
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          transceiver.direction = "sendonly";
          this._remoteSdp.resumeSendingMediaSection(localId);
          const offer = await this._pc.createOffer();
          logger.debug("resumeSending() | calling pc.setLocalDescription() [offer:%o]", offer);
          await this._pc.setLocalDescription(offer);
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("resumeSending() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
        }
        async replaceTrack(localId, track) {
          this.assertNotClosed();
          this.assertSendDirection();
          if (track) {
            logger.debug("replaceTrack() [localId:%s, track.id:%s]", localId, track.id);
          } else {
            logger.debug("replaceTrack() [localId:%s, no track]", localId);
          }
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          await transceiver.sender.replaceTrack(track);
        }
        async setMaxSpatialLayer(localId, spatialLayer) {
          this.assertNotClosed();
          this.assertSendDirection();
          logger.debug("setMaxSpatialLayer() [localId:%s, spatialLayer:%s]", localId, spatialLayer);
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          const parameters = transceiver.sender.getParameters();
          parameters.encodings.forEach((encoding, idx) => {
            if (idx <= spatialLayer) {
              encoding.active = true;
            } else {
              encoding.active = false;
            }
          });
          await transceiver.sender.setParameters(parameters);
          this._remoteSdp.muxMediaSectionSimulcast(localId, parameters.encodings);
          const offer = await this._pc.createOffer();
          logger.debug("setMaxSpatialLayer() | calling pc.setLocalDescription() [offer:%o]", offer);
          await this._pc.setLocalDescription(offer);
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("setMaxSpatialLayer() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
        }
        async setRtpEncodingParameters(localId, params) {
          this.assertNotClosed();
          this.assertSendDirection();
          logger.debug("setRtpEncodingParameters() [localId:%s, params:%o]", localId, params);
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          const parameters = transceiver.sender.getParameters();
          parameters.encodings.forEach((encoding, idx) => {
            parameters.encodings[idx] = {
              ...encoding,
              ...params
            };
          });
          await transceiver.sender.setParameters(parameters);
          this._remoteSdp.muxMediaSectionSimulcast(localId, parameters.encodings);
          const offer = await this._pc.createOffer();
          logger.debug("setRtpEncodingParameters() | calling pc.setLocalDescription() [offer:%o]", offer);
          await this._pc.setLocalDescription(offer);
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("setRtpEncodingParameters() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
        }
        async getSenderStats(localId) {
          this.assertNotClosed();
          this.assertSendDirection();
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          return transceiver.sender.getStats();
        }
        async sendDataChannel({ ordered, maxPacketLifeTime, maxRetransmits, label, protocol: protocol4 }) {
          this.assertNotClosed();
          this.assertSendDirection();
          const options = {
            negotiated: true,
            id: this._nextSendSctpStreamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmits,
            protocol: protocol4
          };
          logger.debug("sendDataChannel() [options:%o]", options);
          const dataChannel = this._pc.createDataChannel(label, options);
          this._nextSendSctpStreamId = ++this._nextSendSctpStreamId % SCTP_NUM_STREAMS.MIS;
          if (!this._hasDataChannelMediaSection) {
            const offer = await this._pc.createOffer();
            const localSdpObject = sdpTransform.parse(offer.sdp);
            const offerMediaObject = localSdpObject.media.find((m) => m.type === "application");
            if (!this._transportReady) {
              await this.setupTransport({
                localDtlsRole: this._forcedLocalDtlsRole ?? "client",
                localSdpObject
              });
            }
            logger.debug("sendDataChannel() | calling pc.setLocalDescription() [offer:%o]", offer);
            await this._pc.setLocalDescription(offer);
            this._remoteSdp.sendSctpAssociation({
              offerMediaObject
            });
            const answer = {
              type: "answer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("sendDataChannel() | calling pc.setRemoteDescription() [answer:%o]", answer);
            await this._pc.setRemoteDescription(answer);
            this._hasDataChannelMediaSection = true;
          }
          const sctpStreamParameters = {
            streamId: options.id,
            ordered: options.ordered,
            maxPacketLifeTime: options.maxPacketLifeTime,
            maxRetransmits: options.maxRetransmits
          };
          return {
            dataChannel,
            sctpStreamParameters
          };
        }
        async receive(optionsList) {
          this.assertNotClosed();
          this.assertRecvDirection();
          const results = [];
          const mapLocalId = /* @__PURE__ */ new Map();
          for (const options of optionsList) {
            const { trackId, kind, rtpParameters, streamId } = options;
            logger.debug("receive() [trackId:%s, kind:%s]", trackId, kind);
            const localId = rtpParameters.mid ?? String(this._mapMidTransceiver.size);
            mapLocalId.set(trackId, localId);
            this._remoteSdp.receive({
              mid: localId,
              kind,
              offerRtpParameters: rtpParameters,
              streamId: streamId ?? rtpParameters.rtcp.cname,
              trackId
            });
          }
          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("receive() | calling pc.setRemoteDescription() [offer:%o]", offer);
          await this._pc.setRemoteDescription(offer);
          for (const options of optionsList) {
            const { trackId, onRtpReceiver } = options;
            if (onRtpReceiver) {
              const localId = mapLocalId.get(trackId);
              const transceiver = this._pc.getTransceivers().find((t) => t.mid === localId);
              if (!transceiver) {
                throw new Error("transceiver not found");
              }
              onRtpReceiver(transceiver.receiver);
            }
          }
          let answer = await this._pc.createAnswer();
          const localSdpObject = sdpTransform.parse(answer.sdp);
          for (const options of optionsList) {
            const { trackId, rtpParameters } = options;
            const localId = mapLocalId.get(trackId);
            const answerMediaObject = localSdpObject.media.find((m) => String(m.mid) === localId);
            sdpCommonUtils.applyCodecParameters({
              offerRtpParameters: rtpParameters,
              answerMediaObject
            });
          }
          answer = {
            type: "answer",
            sdp: sdpTransform.write(localSdpObject)
          };
          if (!this._transportReady) {
            await this.setupTransport({
              localDtlsRole: this._forcedLocalDtlsRole ?? "client",
              localSdpObject
            });
          }
          logger.debug("receive() | calling pc.setLocalDescription() [answer:%o]", answer);
          await this._pc.setLocalDescription(answer);
          for (const options of optionsList) {
            const { trackId } = options;
            const localId = mapLocalId.get(trackId);
            const transceiver = this._pc.getTransceivers().find((t) => t.mid === localId);
            if (!transceiver) {
              throw new Error("new RTCRtpTransceiver not found");
            }
            this._mapMidTransceiver.set(localId, transceiver);
            results.push({
              localId,
              track: transceiver.receiver.track,
              rtpReceiver: transceiver.receiver
            });
          }
          return results;
        }
        async stopReceiving(localIds) {
          this.assertRecvDirection();
          if (this._closed) {
            return;
          }
          for (const localId of localIds) {
            logger.debug("stopReceiving() [localId:%s]", localId);
            const transceiver = this._mapMidTransceiver.get(localId);
            if (!transceiver) {
              throw new Error("associated RTCRtpTransceiver not found");
            }
            this._remoteSdp.closeMediaSection(transceiver.mid);
          }
          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("stopReceiving() | calling pc.setRemoteDescription() [offer:%o]", offer);
          await this._pc.setRemoteDescription(offer);
          const answer = await this._pc.createAnswer();
          logger.debug("stopReceiving() | calling pc.setLocalDescription() [answer:%o]", answer);
          await this._pc.setLocalDescription(answer);
          for (const localId of localIds) {
            this._mapMidTransceiver.delete(localId);
          }
        }
        async pauseReceiving(localIds) {
          this.assertNotClosed();
          this.assertRecvDirection();
          for (const localId of localIds) {
            logger.debug("pauseReceiving() [localId:%s]", localId);
            const transceiver = this._mapMidTransceiver.get(localId);
            if (!transceiver) {
              throw new Error("associated RTCRtpTransceiver not found");
            }
            transceiver.direction = "inactive";
            this._remoteSdp.pauseMediaSection(localId);
          }
          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("pauseReceiving() | calling pc.setRemoteDescription() [offer:%o]", offer);
          await this._pc.setRemoteDescription(offer);
          const answer = await this._pc.createAnswer();
          logger.debug("pauseReceiving() | calling pc.setLocalDescription() [answer:%o]", answer);
          await this._pc.setLocalDescription(answer);
        }
        async resumeReceiving(localIds) {
          this.assertNotClosed();
          this.assertRecvDirection();
          for (const localId of localIds) {
            logger.debug("resumeReceiving() [localId:%s]", localId);
            const transceiver = this._mapMidTransceiver.get(localId);
            if (!transceiver) {
              throw new Error("associated RTCRtpTransceiver not found");
            }
            transceiver.direction = "recvonly";
            this._remoteSdp.resumeReceivingMediaSection(localId);
          }
          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("resumeReceiving() | calling pc.setRemoteDescription() [offer:%o]", offer);
          await this._pc.setRemoteDescription(offer);
          const answer = await this._pc.createAnswer();
          logger.debug("resumeReceiving() | calling pc.setLocalDescription() [answer:%o]", answer);
          await this._pc.setLocalDescription(answer);
        }
        async getReceiverStats(localId) {
          this.assertNotClosed();
          this.assertRecvDirection();
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          return transceiver.receiver.getStats();
        }
        async receiveDataChannel({ sctpStreamParameters, label, protocol: protocol4 }) {
          this.assertNotClosed();
          this.assertRecvDirection();
          const { streamId, ordered, maxPacketLifeTime, maxRetransmits } = sctpStreamParameters;
          const options = {
            negotiated: true,
            id: streamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmits,
            protocol: protocol4
          };
          logger.debug("receiveDataChannel() [options:%o]", options);
          const dataChannel = this._pc.createDataChannel(label, options);
          if (!this._hasDataChannelMediaSection) {
            this._remoteSdp.receiveSctpAssociation();
            const offer = {
              type: "offer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("receiveDataChannel() | calling pc.setRemoteDescription() [offer:%o]", offer);
            await this._pc.setRemoteDescription(offer);
            const answer = await this._pc.createAnswer();
            if (!this._transportReady) {
              const localSdpObject = sdpTransform.parse(answer.sdp);
              await this.setupTransport({
                localDtlsRole: this._forcedLocalDtlsRole ?? "client",
                localSdpObject
              });
            }
            logger.debug("receiveDataChannel() | calling pc.setRemoteDescription() [answer:%o]", answer);
            await this._pc.setLocalDescription(answer);
            this._hasDataChannelMediaSection = true;
          }
          return {
            dataChannel
          };
        }
        async setupTransport({ localDtlsRole, localSdpObject }) {
          if (!localSdpObject) {
            localSdpObject = sdpTransform.parse(this._pc.localDescription.sdp);
          }
          const dtlsParameters = sdpCommonUtils.extractDtlsParameters({
            sdpObject: localSdpObject
          });
          dtlsParameters.role = localDtlsRole;
          this._remoteSdp.updateDtlsRole(localDtlsRole === "client" ? "server" : "client");
          await new Promise((resolve, reject) => {
            this.safeEmit("@connect", {
              dtlsParameters
            }, resolve, reject);
          });
          this._transportReady = true;
        }
        assertNotClosed() {
          if (this._closed) {
            throw new errors_1.InvalidStateError("method called in a closed handler");
          }
        }
        assertSendDirection() {
          if (this._direction !== "send") {
            throw new Error('method can just be called for handlers with "send" direction');
          }
        }
        assertRecvDirection() {
          if (this._direction !== "recv") {
            throw new Error('method can just be called for handlers with "recv" direction');
          }
        }
      }, __name(_a2, "Safari12"), _a2);
      exports.Safari12 = Safari12;
    }
  });

  // node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/handlers/Safari11.js
  var require_Safari11 = __commonJS({
    "node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/handlers/Safari11.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: /* @__PURE__ */ __name(function() {
              return m[k];
            }, "get")
          };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", {
          enumerable: true,
          value: v
        });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Safari11 = void 0;
      var sdpTransform = __importStar(require_lib3());
      var Logger_1 = require_Logger();
      var utils = __importStar(require_utils());
      var ortc = __importStar(require_ortc());
      var sdpCommonUtils = __importStar(require_commonUtils());
      var sdpPlanBUtils = __importStar(require_planBUtils());
      var HandlerInterface_1 = require_HandlerInterface();
      var RemoteSdp_1 = require_RemoteSdp();
      var logger = new Logger_1.Logger("Safari11");
      var NAME = "Safari11";
      var SCTP_NUM_STREAMS = {
        OS: 1024,
        MIS: 1024
      };
      var _a2;
      var Safari11 = (_a2 = class extends HandlerInterface_1.HandlerInterface {
        /**
         * Creates a factory function.
         */
        static createFactory() {
          return () => new _a2();
        }
        constructor() {
          super();
          this._sendStream = new MediaStream();
          this._mapSendLocalIdRtpSender = /* @__PURE__ */ new Map();
          this._nextSendLocalId = 0;
          this._mapRecvLocalIdInfo = /* @__PURE__ */ new Map();
          this._hasDataChannelMediaSection = false;
          this._nextSendSctpStreamId = 0;
          this._transportReady = false;
        }
        get name() {
          return NAME;
        }
        close() {
          logger.debug("close()");
          if (this._pc) {
            try {
              this._pc.close();
            } catch (error) {
            }
          }
          this.emit("@close");
        }
        async getNativeRtpCapabilities() {
          logger.debug("getNativeRtpCapabilities()");
          const pc = new RTCPeerConnection({
            iceServers: [],
            iceTransportPolicy: "all",
            bundlePolicy: "max-bundle",
            rtcpMuxPolicy: "require",
            sdpSemantics: "plan-b"
          });
          try {
            const offer = await pc.createOffer({
              offerToReceiveAudio: true,
              offerToReceiveVideo: true
            });
            try {
              pc.close();
            } catch (error) {
            }
            const sdpObject = sdpTransform.parse(offer.sdp);
            const nativeRtpCapabilities = sdpCommonUtils.extractRtpCapabilities({
              sdpObject
            });
            return nativeRtpCapabilities;
          } catch (error) {
            try {
              pc.close();
            } catch (error2) {
            }
            throw error;
          }
        }
        async getNativeSctpCapabilities() {
          logger.debug("getNativeSctpCapabilities()");
          return {
            numStreams: SCTP_NUM_STREAMS
          };
        }
        run({ direction, iceParameters, iceCandidates, dtlsParameters, sctpParameters, iceServers, iceTransportPolicy, additionalSettings, proprietaryConstraints, extendedRtpCapabilities }) {
          logger.debug("run()");
          this._direction = direction;
          this._remoteSdp = new RemoteSdp_1.RemoteSdp({
            iceParameters,
            iceCandidates,
            dtlsParameters,
            sctpParameters,
            planB: true
          });
          this._sendingRtpParametersByKind = {
            audio: ortc.getSendingRtpParameters("audio", extendedRtpCapabilities),
            video: ortc.getSendingRtpParameters("video", extendedRtpCapabilities)
          };
          this._sendingRemoteRtpParametersByKind = {
            audio: ortc.getSendingRemoteRtpParameters("audio", extendedRtpCapabilities),
            video: ortc.getSendingRemoteRtpParameters("video", extendedRtpCapabilities)
          };
          if (dtlsParameters.role && dtlsParameters.role !== "auto") {
            this._forcedLocalDtlsRole = dtlsParameters.role === "server" ? "client" : "server";
          }
          this._pc = new RTCPeerConnection({
            iceServers: iceServers ?? [],
            iceTransportPolicy: iceTransportPolicy ?? "all",
            bundlePolicy: "max-bundle",
            rtcpMuxPolicy: "require",
            ...additionalSettings
          }, proprietaryConstraints);
          this._pc.addEventListener("icegatheringstatechange", () => {
            this.emit("@icegatheringstatechange", this._pc.iceGatheringState);
          });
          if (this._pc.connectionState) {
            this._pc.addEventListener("connectionstatechange", () => {
              this.emit("@connectionstatechange", this._pc.connectionState);
            });
          } else {
            this._pc.addEventListener("iceconnectionstatechange", () => {
              logger.warn("run() | pc.connectionState not supported, using pc.iceConnectionState");
              switch (this._pc.iceConnectionState) {
                case "checking": {
                  this.emit("@connectionstatechange", "connecting");
                  break;
                }
                case "connected":
                case "completed": {
                  this.emit("@connectionstatechange", "connected");
                  break;
                }
                case "failed": {
                  this.emit("@connectionstatechange", "failed");
                  break;
                }
                case "disconnected": {
                  this.emit("@connectionstatechange", "disconnected");
                  break;
                }
                case "closed": {
                  this.emit("@connectionstatechange", "closed");
                  break;
                }
              }
            });
          }
        }
        async updateIceServers(iceServers) {
          logger.debug("updateIceServers()");
          const configuration = this._pc.getConfiguration();
          configuration.iceServers = iceServers;
          this._pc.setConfiguration(configuration);
        }
        async restartIce(iceParameters) {
          logger.debug("restartIce()");
          this._remoteSdp.updateIceParameters(iceParameters);
          if (!this._transportReady) {
            return;
          }
          if (this._direction === "send") {
            const offer = await this._pc.createOffer({
              iceRestart: true
            });
            logger.debug("restartIce() | calling pc.setLocalDescription() [offer:%o]", offer);
            await this._pc.setLocalDescription(offer);
            const answer = {
              type: "answer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("restartIce() | calling pc.setRemoteDescription() [answer:%o]", answer);
            await this._pc.setRemoteDescription(answer);
          } else {
            const offer = {
              type: "offer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("restartIce() | calling pc.setRemoteDescription() [offer:%o]", offer);
            await this._pc.setRemoteDescription(offer);
            const answer = await this._pc.createAnswer();
            logger.debug("restartIce() | calling pc.setLocalDescription() [answer:%o]", answer);
            await this._pc.setLocalDescription(answer);
          }
        }
        async getTransportStats() {
          return this._pc.getStats();
        }
        async send({ track, encodings, codecOptions, codec }) {
          this.assertSendDirection();
          logger.debug("send() [kind:%s, track.id:%s]", track.kind, track.id);
          if (codec) {
            logger.warn("send() | codec selection is not available in %s handler", this.name);
          }
          this._sendStream.addTrack(track);
          this._pc.addTrack(track, this._sendStream);
          let offer = await this._pc.createOffer();
          let localSdpObject = sdpTransform.parse(offer.sdp);
          let offerMediaObject;
          const sendingRtpParameters = utils.clone(this._sendingRtpParametersByKind[track.kind]);
          sendingRtpParameters.codecs = ortc.reduceCodecs(sendingRtpParameters.codecs);
          const sendingRemoteRtpParameters = utils.clone(this._sendingRemoteRtpParametersByKind[track.kind]);
          sendingRemoteRtpParameters.codecs = ortc.reduceCodecs(sendingRemoteRtpParameters.codecs);
          if (!this._transportReady) {
            await this.setupTransport({
              localDtlsRole: this._forcedLocalDtlsRole ?? "client",
              localSdpObject
            });
          }
          if (track.kind === "video" && encodings && encodings.length > 1) {
            logger.debug("send() | enabling simulcast");
            localSdpObject = sdpTransform.parse(offer.sdp);
            offerMediaObject = localSdpObject.media.find((m) => m.type === "video");
            sdpPlanBUtils.addLegacySimulcast({
              offerMediaObject,
              track,
              numStreams: encodings.length
            });
            offer = {
              type: "offer",
              sdp: sdpTransform.write(localSdpObject)
            };
          }
          logger.debug("send() | calling pc.setLocalDescription() [offer:%o]", offer);
          await this._pc.setLocalDescription(offer);
          localSdpObject = sdpTransform.parse(this._pc.localDescription.sdp);
          offerMediaObject = localSdpObject.media.find((m) => m.type === track.kind);
          sendingRtpParameters.rtcp.cname = sdpCommonUtils.getCname({
            offerMediaObject
          });
          sendingRtpParameters.encodings = sdpPlanBUtils.getRtpEncodings({
            offerMediaObject,
            track
          });
          if (encodings) {
            for (let idx = 0; idx < sendingRtpParameters.encodings.length; ++idx) {
              if (encodings[idx]) {
                Object.assign(sendingRtpParameters.encodings[idx], encodings[idx]);
              }
            }
          }
          if (sendingRtpParameters.encodings.length > 1 && sendingRtpParameters.codecs[0].mimeType.toLowerCase() === "video/vp8") {
            for (const encoding of sendingRtpParameters.encodings) {
              encoding.scalabilityMode = "L1T3";
            }
          }
          this._remoteSdp.send({
            offerMediaObject,
            offerRtpParameters: sendingRtpParameters,
            answerRtpParameters: sendingRemoteRtpParameters,
            codecOptions
          });
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("send() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
          const localId = String(this._nextSendLocalId);
          this._nextSendLocalId++;
          const rtpSender = this._pc.getSenders().find((s) => s.track === track);
          this._mapSendLocalIdRtpSender.set(localId, rtpSender);
          return {
            localId,
            rtpParameters: sendingRtpParameters,
            rtpSender
          };
        }
        async stopSending(localId) {
          this.assertSendDirection();
          const rtpSender = this._mapSendLocalIdRtpSender.get(localId);
          if (!rtpSender) {
            throw new Error("associated RTCRtpSender not found");
          }
          if (rtpSender.track) {
            this._sendStream.removeTrack(rtpSender.track);
          }
          this._mapSendLocalIdRtpSender.delete(localId);
          const offer = await this._pc.createOffer();
          logger.debug("stopSending() | calling pc.setLocalDescription() [offer:%o]", offer);
          try {
            await this._pc.setLocalDescription(offer);
          } catch (error) {
            if (this._sendStream.getTracks().length === 0) {
              logger.warn("stopSending() | ignoring expected error due no sending tracks: %s", error.toString());
              return;
            }
            throw error;
          }
          if (this._pc.signalingState === "stable") {
            return;
          }
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("stopSending() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        async pauseSending(localId) {
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        async resumeSending(localId) {
        }
        async replaceTrack(localId, track) {
          this.assertSendDirection();
          if (track) {
            logger.debug("replaceTrack() [localId:%s, track.id:%s]", localId, track.id);
          } else {
            logger.debug("replaceTrack() [localId:%s, no track]", localId);
          }
          const rtpSender = this._mapSendLocalIdRtpSender.get(localId);
          if (!rtpSender) {
            throw new Error("associated RTCRtpSender not found");
          }
          const oldTrack = rtpSender.track;
          await rtpSender.replaceTrack(track);
          if (oldTrack) {
            this._sendStream.removeTrack(oldTrack);
          }
          if (track) {
            this._sendStream.addTrack(track);
          }
        }
        async setMaxSpatialLayer(localId, spatialLayer) {
          this.assertSendDirection();
          logger.debug("setMaxSpatialLayer() [localId:%s, spatialLayer:%s]", localId, spatialLayer);
          const rtpSender = this._mapSendLocalIdRtpSender.get(localId);
          if (!rtpSender) {
            throw new Error("associated RTCRtpSender not found");
          }
          const parameters = rtpSender.getParameters();
          parameters.encodings.forEach((encoding, idx) => {
            if (idx <= spatialLayer) {
              encoding.active = true;
            } else {
              encoding.active = false;
            }
          });
          await rtpSender.setParameters(parameters);
        }
        async setRtpEncodingParameters(localId, params) {
          this.assertSendDirection();
          logger.debug("setRtpEncodingParameters() [localId:%s, params:%o]", localId, params);
          const rtpSender = this._mapSendLocalIdRtpSender.get(localId);
          if (!rtpSender) {
            throw new Error("associated RTCRtpSender not found");
          }
          const parameters = rtpSender.getParameters();
          parameters.encodings.forEach((encoding, idx) => {
            parameters.encodings[idx] = {
              ...encoding,
              ...params
            };
          });
          await rtpSender.setParameters(parameters);
        }
        async getSenderStats(localId) {
          this.assertSendDirection();
          const rtpSender = this._mapSendLocalIdRtpSender.get(localId);
          if (!rtpSender) {
            throw new Error("associated RTCRtpSender not found");
          }
          return rtpSender.getStats();
        }
        async sendDataChannel({ ordered, maxPacketLifeTime, maxRetransmits, label, protocol: protocol4 }) {
          this.assertSendDirection();
          const options = {
            negotiated: true,
            id: this._nextSendSctpStreamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmits,
            protocol: protocol4
          };
          logger.debug("sendDataChannel() [options:%o]", options);
          const dataChannel = this._pc.createDataChannel(label, options);
          this._nextSendSctpStreamId = ++this._nextSendSctpStreamId % SCTP_NUM_STREAMS.MIS;
          if (!this._hasDataChannelMediaSection) {
            const offer = await this._pc.createOffer();
            const localSdpObject = sdpTransform.parse(offer.sdp);
            const offerMediaObject = localSdpObject.media.find((m) => m.type === "application");
            if (!this._transportReady) {
              await this.setupTransport({
                localDtlsRole: this._forcedLocalDtlsRole ?? "client",
                localSdpObject
              });
            }
            logger.debug("sendDataChannel() | calling pc.setLocalDescription() [offer:%o]", offer);
            await this._pc.setLocalDescription(offer);
            this._remoteSdp.sendSctpAssociation({
              offerMediaObject
            });
            const answer = {
              type: "answer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("sendDataChannel() | calling pc.setRemoteDescription() [answer:%o]", answer);
            await this._pc.setRemoteDescription(answer);
            this._hasDataChannelMediaSection = true;
          }
          const sctpStreamParameters = {
            streamId: options.id,
            ordered: options.ordered,
            maxPacketLifeTime: options.maxPacketLifeTime,
            maxRetransmits: options.maxRetransmits
          };
          return {
            dataChannel,
            sctpStreamParameters
          };
        }
        async receive(optionsList) {
          this.assertRecvDirection();
          const results = [];
          for (const options of optionsList) {
            const { trackId, kind, rtpParameters, streamId } = options;
            logger.debug("receive() [trackId:%s, kind:%s]", trackId, kind);
            const mid = kind;
            this._remoteSdp.receive({
              mid,
              kind,
              offerRtpParameters: rtpParameters,
              streamId: streamId ?? rtpParameters.rtcp.cname,
              trackId
            });
          }
          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("receive() | calling pc.setRemoteDescription() [offer:%o]", offer);
          await this._pc.setRemoteDescription(offer);
          let answer = await this._pc.createAnswer();
          const localSdpObject = sdpTransform.parse(answer.sdp);
          for (const options of optionsList) {
            const { kind, rtpParameters } = options;
            const mid = kind;
            const answerMediaObject = localSdpObject.media.find((m) => String(m.mid) === mid);
            sdpCommonUtils.applyCodecParameters({
              offerRtpParameters: rtpParameters,
              answerMediaObject
            });
          }
          answer = {
            type: "answer",
            sdp: sdpTransform.write(localSdpObject)
          };
          if (!this._transportReady) {
            await this.setupTransport({
              localDtlsRole: this._forcedLocalDtlsRole ?? "client",
              localSdpObject
            });
          }
          logger.debug("receive() | calling pc.setLocalDescription() [answer:%o]", answer);
          await this._pc.setLocalDescription(answer);
          for (const options of optionsList) {
            const { kind, trackId, rtpParameters } = options;
            const mid = kind;
            const localId = trackId;
            const rtpReceiver = this._pc.getReceivers().find((r) => r.track && r.track.id === localId);
            if (!rtpReceiver) {
              throw new Error("new RTCRtpReceiver not");
            }
            this._mapRecvLocalIdInfo.set(localId, {
              mid,
              rtpParameters,
              rtpReceiver
            });
            results.push({
              localId,
              track: rtpReceiver.track,
              rtpReceiver
            });
          }
          return results;
        }
        async stopReceiving(localIds) {
          this.assertRecvDirection();
          for (const localId of localIds) {
            logger.debug("stopReceiving() [localId:%s]", localId);
            const { mid, rtpParameters } = this._mapRecvLocalIdInfo.get(localId) ?? {};
            this._mapRecvLocalIdInfo.delete(localId);
            this._remoteSdp.planBStopReceiving({
              mid,
              offerRtpParameters: rtpParameters
            });
          }
          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("stopReceiving() | calling pc.setRemoteDescription() [offer:%o]", offer);
          await this._pc.setRemoteDescription(offer);
          const answer = await this._pc.createAnswer();
          logger.debug("stopReceiving() | calling pc.setLocalDescription() [answer:%o]", answer);
          await this._pc.setLocalDescription(answer);
        }
        async getReceiverStats(localId) {
          this.assertRecvDirection();
          const { rtpReceiver } = this._mapRecvLocalIdInfo.get(localId) ?? {};
          if (!rtpReceiver) {
            throw new Error("associated RTCRtpReceiver not found");
          }
          return rtpReceiver.getStats();
        }
        async pauseReceiving(localIds) {
        }
        async resumeReceiving(localIds) {
        }
        async receiveDataChannel({ sctpStreamParameters, label, protocol: protocol4 }) {
          this.assertRecvDirection();
          const { streamId, ordered, maxPacketLifeTime, maxRetransmits } = sctpStreamParameters;
          const options = {
            negotiated: true,
            id: streamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmits,
            protocol: protocol4
          };
          logger.debug("receiveDataChannel() [options:%o]", options);
          const dataChannel = this._pc.createDataChannel(label, options);
          if (!this._hasDataChannelMediaSection) {
            this._remoteSdp.receiveSctpAssociation({
              oldDataChannelSpec: true
            });
            const offer = {
              type: "offer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("receiveDataChannel() | calling pc.setRemoteDescription() [offer:%o]", offer);
            await this._pc.setRemoteDescription(offer);
            const answer = await this._pc.createAnswer();
            if (!this._transportReady) {
              const localSdpObject = sdpTransform.parse(answer.sdp);
              await this.setupTransport({
                localDtlsRole: this._forcedLocalDtlsRole ?? "client",
                localSdpObject
              });
            }
            logger.debug("receiveDataChannel() | calling pc.setRemoteDescription() [answer:%o]", answer);
            await this._pc.setLocalDescription(answer);
            this._hasDataChannelMediaSection = true;
          }
          return {
            dataChannel
          };
        }
        async setupTransport({ localDtlsRole, localSdpObject }) {
          if (!localSdpObject) {
            localSdpObject = sdpTransform.parse(this._pc.localDescription.sdp);
          }
          const dtlsParameters = sdpCommonUtils.extractDtlsParameters({
            sdpObject: localSdpObject
          });
          dtlsParameters.role = localDtlsRole;
          this._remoteSdp.updateDtlsRole(localDtlsRole === "client" ? "server" : "client");
          await new Promise((resolve, reject) => {
            this.safeEmit("@connect", {
              dtlsParameters
            }, resolve, reject);
          });
          this._transportReady = true;
        }
        assertSendDirection() {
          if (this._direction !== "send") {
            throw new Error('method can just be called for handlers with "send" direction');
          }
        }
        assertRecvDirection() {
          if (this._direction !== "recv") {
            throw new Error('method can just be called for handlers with "recv" direction');
          }
        }
      }, __name(_a2, "Safari11"), _a2);
      exports.Safari11 = Safari11;
    }
  });

  // node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/handlers/ortc/edgeUtils.js
  var require_edgeUtils = __commonJS({
    "node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/handlers/ortc/edgeUtils.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: /* @__PURE__ */ __name(function() {
              return m[k];
            }, "get")
          };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", {
          enumerable: true,
          value: v
        });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getCapabilities = getCapabilities;
      exports.mangleRtpParameters = mangleRtpParameters;
      var utils = __importStar(require_utils());
      function getCapabilities() {
        const nativeCaps = RTCRtpReceiver.getCapabilities();
        const caps = utils.clone(nativeCaps);
        for (const codec of caps.codecs ?? []) {
          codec.channels = codec.numChannels;
          delete codec.numChannels;
          codec.mimeType = codec.mimeType ?? `${codec.kind}/${codec.name}`;
          if (codec.parameters) {
            const parameters = codec.parameters;
            if (parameters.apt) {
              parameters.apt = Number(parameters.apt);
            }
            if (parameters["packetization-mode"]) {
              parameters["packetization-mode"] = Number(parameters["packetization-mode"]);
            }
          }
          for (const feedback of codec.rtcpFeedback ?? []) {
            if (!feedback.parameter) {
              feedback.parameter = "";
            }
          }
        }
        return caps;
      }
      __name(getCapabilities, "getCapabilities");
      function mangleRtpParameters(rtpParameters) {
        const params = utils.clone(rtpParameters);
        if (params.mid) {
          params.muxId = params.mid;
          delete params.mid;
        }
        for (const codec of params.codecs) {
          if (codec.channels) {
            codec.numChannels = codec.channels;
            delete codec.channels;
          }
          if (codec.mimeType && !codec.name) {
            codec.name = codec.mimeType.split("/")[1];
          }
          delete codec.mimeType;
        }
        return params;
      }
      __name(mangleRtpParameters, "mangleRtpParameters");
    }
  });

  // node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/handlers/Edge11.js
  var require_Edge11 = __commonJS({
    "node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/handlers/Edge11.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: /* @__PURE__ */ __name(function() {
              return m[k];
            }, "get")
          };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", {
          enumerable: true,
          value: v
        });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Edge11 = void 0;
      var Logger_1 = require_Logger();
      var errors_1 = require_errors();
      var utils = __importStar(require_utils());
      var ortc = __importStar(require_ortc());
      var edgeUtils = __importStar(require_edgeUtils());
      var HandlerInterface_1 = require_HandlerInterface();
      var logger = new Logger_1.Logger("Edge11");
      var NAME = "Edge11";
      var _a2;
      var Edge11 = (_a2 = class extends HandlerInterface_1.HandlerInterface {
        /**
         * Creates a factory function.
         */
        static createFactory() {
          return () => new _a2();
        }
        constructor() {
          super();
          this._rtpSenders = /* @__PURE__ */ new Map();
          this._rtpReceivers = /* @__PURE__ */ new Map();
          this._nextSendLocalId = 0;
          this._transportReady = false;
        }
        get name() {
          return NAME;
        }
        close() {
          logger.debug("close()");
          try {
            this._iceGatherer.close();
          } catch (error) {
          }
          try {
            this._iceTransport.stop();
          } catch (error) {
          }
          try {
            this._dtlsTransport.stop();
          } catch (error) {
          }
          for (const rtpSender of this._rtpSenders.values()) {
            try {
              rtpSender.stop();
            } catch (error) {
            }
          }
          for (const rtpReceiver of this._rtpReceivers.values()) {
            try {
              rtpReceiver.stop();
            } catch (error) {
            }
          }
          this.emit("@close");
        }
        async getNativeRtpCapabilities() {
          logger.debug("getNativeRtpCapabilities()");
          return edgeUtils.getCapabilities();
        }
        async getNativeSctpCapabilities() {
          logger.debug("getNativeSctpCapabilities()");
          return {
            numStreams: {
              OS: 0,
              MIS: 0
            }
          };
        }
        run({ direction, iceParameters, iceCandidates, dtlsParameters, sctpParameters, iceServers, iceTransportPolicy, additionalSettings, proprietaryConstraints, extendedRtpCapabilities }) {
          logger.debug("run()");
          this._sendingRtpParametersByKind = {
            audio: ortc.getSendingRtpParameters("audio", extendedRtpCapabilities),
            video: ortc.getSendingRtpParameters("video", extendedRtpCapabilities)
          };
          this._remoteIceParameters = iceParameters;
          this._remoteIceCandidates = iceCandidates;
          this._remoteDtlsParameters = dtlsParameters;
          this._cname = `CNAME-${utils.generateRandomNumber()}`;
          this.setIceGatherer({
            iceServers,
            iceTransportPolicy
          });
          this.setIceTransport();
          this.setDtlsTransport();
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        async updateIceServers(iceServers) {
          throw new errors_1.UnsupportedError("not supported");
        }
        async restartIce(iceParameters) {
          logger.debug("restartIce()");
          this._remoteIceParameters = iceParameters;
          if (!this._transportReady) {
            return;
          }
          logger.debug("restartIce() | calling iceTransport.start()");
          this._iceTransport.start(this._iceGatherer, iceParameters, "controlling");
          for (const candidate of this._remoteIceCandidates) {
            this._iceTransport.addRemoteCandidate(candidate);
          }
          this._iceTransport.addRemoteCandidate({});
        }
        async getTransportStats() {
          return this._iceTransport.getStats();
        }
        async send({ track, encodings, codecOptions, codec }) {
          logger.debug("send() [kind:%s, track.id:%s]", track.kind, track.id);
          if (!this._transportReady) {
            await this.setupTransport({
              localDtlsRole: "server"
            });
          }
          logger.debug("send() | calling new RTCRtpSender()");
          const rtpSender = new RTCRtpSender(track, this._dtlsTransport);
          const rtpParameters = utils.clone(this._sendingRtpParametersByKind[track.kind]);
          rtpParameters.codecs = ortc.reduceCodecs(rtpParameters.codecs, codec);
          const useRtx = rtpParameters.codecs.some((_codec) => /.+\/rtx$/i.test(_codec.mimeType));
          if (!encodings) {
            encodings = [
              {}
            ];
          }
          for (const encoding of encodings) {
            encoding.ssrc = utils.generateRandomNumber();
            if (useRtx) {
              encoding.rtx = {
                ssrc: utils.generateRandomNumber()
              };
            }
          }
          rtpParameters.encodings = encodings;
          rtpParameters.rtcp = {
            cname: this._cname,
            reducedSize: true,
            mux: true
          };
          const edgeRtpParameters = edgeUtils.mangleRtpParameters(rtpParameters);
          logger.debug("send() | calling rtpSender.send() [params:%o]", edgeRtpParameters);
          await rtpSender.send(edgeRtpParameters);
          const localId = String(this._nextSendLocalId);
          this._nextSendLocalId++;
          this._rtpSenders.set(localId, rtpSender);
          return {
            localId,
            rtpParameters,
            rtpSender
          };
        }
        async stopSending(localId) {
          logger.debug("stopSending() [localId:%s]", localId);
          const rtpSender = this._rtpSenders.get(localId);
          if (!rtpSender) {
            throw new Error("RTCRtpSender not found");
          }
          this._rtpSenders.delete(localId);
          try {
            logger.debug("stopSending() | calling rtpSender.stop()");
            rtpSender.stop();
          } catch (error) {
            logger.warn("stopSending() | rtpSender.stop() failed:%o", error);
            throw error;
          }
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        async pauseSending(localId) {
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        async resumeSending(localId) {
        }
        async replaceTrack(localId, track) {
          if (track) {
            logger.debug("replaceTrack() [localId:%s, track.id:%s]", localId, track.id);
          } else {
            logger.debug("replaceTrack() [localId:%s, no track]", localId);
          }
          const rtpSender = this._rtpSenders.get(localId);
          if (!rtpSender) {
            throw new Error("RTCRtpSender not found");
          }
          rtpSender.setTrack(track);
        }
        async setMaxSpatialLayer(localId, spatialLayer) {
          logger.debug("setMaxSpatialLayer() [localId:%s, spatialLayer:%s]", localId, spatialLayer);
          const rtpSender = this._rtpSenders.get(localId);
          if (!rtpSender) {
            throw new Error("RTCRtpSender not found");
          }
          const parameters = rtpSender.getParameters();
          parameters.encodings.forEach((encoding, idx) => {
            if (idx <= spatialLayer) {
              encoding.active = true;
            } else {
              encoding.active = false;
            }
          });
          await rtpSender.setParameters(parameters);
        }
        async setRtpEncodingParameters(localId, params) {
          logger.debug("setRtpEncodingParameters() [localId:%s, params:%o]", localId, params);
          const rtpSender = this._rtpSenders.get(localId);
          if (!rtpSender) {
            throw new Error("RTCRtpSender not found");
          }
          const parameters = rtpSender.getParameters();
          parameters.encodings.forEach((encoding, idx) => {
            parameters.encodings[idx] = {
              ...encoding,
              ...params
            };
          });
          await rtpSender.setParameters(parameters);
        }
        async getSenderStats(localId) {
          const rtpSender = this._rtpSenders.get(localId);
          if (!rtpSender) {
            throw new Error("RTCRtpSender not found");
          }
          return rtpSender.getStats();
        }
        async sendDataChannel(options) {
          throw new errors_1.UnsupportedError("not implemented");
        }
        async receive(optionsList) {
          const results = [];
          for (const options of optionsList) {
            const { trackId, kind } = options;
            logger.debug("receive() [trackId:%s, kind:%s]", trackId, kind);
          }
          if (!this._transportReady) {
            await this.setupTransport({
              localDtlsRole: "server"
            });
          }
          for (const options of optionsList) {
            const { trackId, kind, rtpParameters } = options;
            logger.debug("receive() | calling new RTCRtpReceiver()");
            const rtpReceiver = new RTCRtpReceiver(this._dtlsTransport, kind);
            rtpReceiver.addEventListener("error", (event) => {
              logger.error('rtpReceiver "error" event [event:%o]', event);
            });
            const edgeRtpParameters = edgeUtils.mangleRtpParameters(rtpParameters);
            logger.debug("receive() | calling rtpReceiver.receive() [params:%o]", edgeRtpParameters);
            await rtpReceiver.receive(edgeRtpParameters);
            const localId = trackId;
            this._rtpReceivers.set(localId, rtpReceiver);
            results.push({
              localId,
              track: rtpReceiver.track,
              rtpReceiver
            });
          }
          return results;
        }
        async stopReceiving(localIds) {
          for (const localId of localIds) {
            logger.debug("stopReceiving() [localId:%s]", localId);
            const rtpReceiver = this._rtpReceivers.get(localId);
            if (!rtpReceiver) {
              throw new Error("RTCRtpReceiver not found");
            }
            this._rtpReceivers.delete(localId);
            try {
              logger.debug("stopReceiving() | calling rtpReceiver.stop()");
              rtpReceiver.stop();
            } catch (error) {
              logger.warn("stopReceiving() | rtpReceiver.stop() failed:%o", error);
            }
          }
        }
        async pauseReceiving(localIds) {
        }
        async resumeReceiving(localIds) {
        }
        async getReceiverStats(localId) {
          const rtpReceiver = this._rtpReceivers.get(localId);
          if (!rtpReceiver) {
            throw new Error("RTCRtpReceiver not found");
          }
          return rtpReceiver.getStats();
        }
        async receiveDataChannel(options) {
          throw new errors_1.UnsupportedError("not implemented");
        }
        setIceGatherer({ iceServers, iceTransportPolicy }) {
          const iceGatherer = new RTCIceGatherer({
            iceServers: iceServers ?? [],
            gatherPolicy: iceTransportPolicy ?? "all"
          });
          iceGatherer.addEventListener("error", (event) => {
            logger.error('iceGatherer "error" event [event:%o]', event);
          });
          try {
            iceGatherer.gather();
          } catch (error) {
            logger.debug("setIceGatherer() | iceGatherer.gather() failed: %s", error.toString());
          }
          this._iceGatherer = iceGatherer;
        }
        setIceTransport() {
          const iceTransport = new RTCIceTransport(this._iceGatherer);
          iceTransport.addEventListener("statechange", () => {
            switch (iceTransport.state) {
              case "checking": {
                this.emit("@connectionstatechange", "connecting");
                break;
              }
              case "connected":
              case "completed": {
                this.emit("@connectionstatechange", "connected");
                break;
              }
              case "failed": {
                this.emit("@connectionstatechange", "failed");
                break;
              }
              case "disconnected": {
                this.emit("@connectionstatechange", "disconnected");
                break;
              }
              case "closed": {
                this.emit("@connectionstatechange", "closed");
                break;
              }
            }
          });
          iceTransport.addEventListener("icestatechange", () => {
            switch (iceTransport.state) {
              case "checking": {
                this.emit("@connectionstatechange", "connecting");
                break;
              }
              case "connected":
              case "completed": {
                this.emit("@connectionstatechange", "connected");
                break;
              }
              case "failed": {
                this.emit("@connectionstatechange", "failed");
                break;
              }
              case "disconnected": {
                this.emit("@connectionstatechange", "disconnected");
                break;
              }
              case "closed": {
                this.emit("@connectionstatechange", "closed");
                break;
              }
            }
          });
          iceTransport.addEventListener("candidatepairchange", (event) => {
            logger.debug('iceTransport "candidatepairchange" event [pair:%o]', event.pair);
          });
          this._iceTransport = iceTransport;
        }
        setDtlsTransport() {
          const dtlsTransport = new RTCDtlsTransport(this._iceTransport);
          dtlsTransport.addEventListener("statechange", () => {
            logger.debug('dtlsTransport "statechange" event [state:%s]', dtlsTransport.state);
          });
          dtlsTransport.addEventListener("dtlsstatechange", () => {
            logger.debug('dtlsTransport "dtlsstatechange" event [state:%s]', dtlsTransport.state);
            if (dtlsTransport.state === "closed") {
              this.emit("@connectionstatechange", "closed");
            }
          });
          dtlsTransport.addEventListener("error", (event) => {
            logger.error('dtlsTransport "error" event [event:%o]', event);
          });
          this._dtlsTransport = dtlsTransport;
        }
        async setupTransport({ localDtlsRole }) {
          logger.debug("setupTransport()");
          const dtlsParameters = this._dtlsTransport.getLocalParameters();
          dtlsParameters.role = localDtlsRole;
          await new Promise((resolve, reject) => {
            this.safeEmit("@connect", {
              dtlsParameters
            }, resolve, reject);
          });
          this._iceTransport.start(this._iceGatherer, this._remoteIceParameters, "controlling");
          for (const candidate of this._remoteIceCandidates) {
            this._iceTransport.addRemoteCandidate(candidate);
          }
          this._iceTransport.addRemoteCandidate({});
          this._remoteDtlsParameters.fingerprints = this._remoteDtlsParameters.fingerprints.filter((fingerprint) => {
            return fingerprint.algorithm === "sha-256" || fingerprint.algorithm === "sha-384" || fingerprint.algorithm === "sha-512";
          });
          this._dtlsTransport.start(this._remoteDtlsParameters);
          this._transportReady = true;
        }
      }, __name(_a2, "Edge11"), _a2);
      exports.Edge11 = Edge11;
    }
  });

  // node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/handlers/ReactNativeUnifiedPlan.js
  var require_ReactNativeUnifiedPlan = __commonJS({
    "node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/handlers/ReactNativeUnifiedPlan.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: /* @__PURE__ */ __name(function() {
              return m[k];
            }, "get")
          };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", {
          enumerable: true,
          value: v
        });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ReactNativeUnifiedPlan = void 0;
      var sdpTransform = __importStar(require_lib3());
      var Logger_1 = require_Logger();
      var utils = __importStar(require_utils());
      var ortc = __importStar(require_ortc());
      var sdpCommonUtils = __importStar(require_commonUtils());
      var sdpUnifiedPlanUtils = __importStar(require_unifiedPlanUtils());
      var ortcUtils = __importStar(require_utils2());
      var errors_1 = require_errors();
      var HandlerInterface_1 = require_HandlerInterface();
      var RemoteSdp_1 = require_RemoteSdp();
      var scalabilityModes_1 = require_scalabilityModes();
      var logger = new Logger_1.Logger("ReactNativeUnifiedPlan");
      var NAME = "ReactNativeUnifiedPlan";
      var SCTP_NUM_STREAMS = {
        OS: 1024,
        MIS: 1024
      };
      var _a2;
      var ReactNativeUnifiedPlan = (_a2 = class extends HandlerInterface_1.HandlerInterface {
        /**
         * Creates a factory function.
         */
        static createFactory() {
          return () => new _a2();
        }
        constructor() {
          super();
          this._closed = false;
          this._mapMidTransceiver = /* @__PURE__ */ new Map();
          this._sendStream = new MediaStream();
          this._hasDataChannelMediaSection = false;
          this._nextSendSctpStreamId = 0;
          this._transportReady = false;
        }
        get name() {
          return NAME;
        }
        close() {
          logger.debug("close()");
          if (this._closed) {
            return;
          }
          this._closed = true;
          this._sendStream.release(
            /* releaseTracks */
            false
          );
          if (this._pc) {
            try {
              this._pc.close();
            } catch (error) {
            }
          }
          this.emit("@close");
        }
        async getNativeRtpCapabilities() {
          logger.debug("getNativeRtpCapabilities()");
          const pc = new RTCPeerConnection({
            iceServers: [],
            iceTransportPolicy: "all",
            bundlePolicy: "max-bundle",
            rtcpMuxPolicy: "require",
            sdpSemantics: "unified-plan"
          });
          try {
            pc.addTransceiver("audio");
            pc.addTransceiver("video");
            const offer = await pc.createOffer();
            try {
              pc.close();
            } catch (error) {
            }
            const sdpObject = sdpTransform.parse(offer.sdp);
            const nativeRtpCapabilities = sdpCommonUtils.extractRtpCapabilities({
              sdpObject
            });
            ortcUtils.addNackSuppportForOpus(nativeRtpCapabilities);
            return nativeRtpCapabilities;
          } catch (error) {
            try {
              pc.close();
            } catch (error2) {
            }
            throw error;
          }
        }
        async getNativeSctpCapabilities() {
          logger.debug("getNativeSctpCapabilities()");
          return {
            numStreams: SCTP_NUM_STREAMS
          };
        }
        run({ direction, iceParameters, iceCandidates, dtlsParameters, sctpParameters, iceServers, iceTransportPolicy, additionalSettings, proprietaryConstraints, extendedRtpCapabilities }) {
          this.assertNotClosed();
          logger.debug("run()");
          this._direction = direction;
          this._remoteSdp = new RemoteSdp_1.RemoteSdp({
            iceParameters,
            iceCandidates,
            dtlsParameters,
            sctpParameters
          });
          this._sendingRtpParametersByKind = {
            audio: ortc.getSendingRtpParameters("audio", extendedRtpCapabilities),
            video: ortc.getSendingRtpParameters("video", extendedRtpCapabilities)
          };
          this._sendingRemoteRtpParametersByKind = {
            audio: ortc.getSendingRemoteRtpParameters("audio", extendedRtpCapabilities),
            video: ortc.getSendingRemoteRtpParameters("video", extendedRtpCapabilities)
          };
          if (dtlsParameters.role && dtlsParameters.role !== "auto") {
            this._forcedLocalDtlsRole = dtlsParameters.role === "server" ? "client" : "server";
          }
          this._pc = new RTCPeerConnection({
            iceServers: iceServers ?? [],
            iceTransportPolicy: iceTransportPolicy ?? "all",
            bundlePolicy: "max-bundle",
            rtcpMuxPolicy: "require",
            sdpSemantics: "unified-plan",
            ...additionalSettings
          }, proprietaryConstraints);
          this._pc.addEventListener("icegatheringstatechange", () => {
            this.emit("@icegatheringstatechange", this._pc.iceGatheringState);
          });
          if (this._pc.connectionState) {
            this._pc.addEventListener("connectionstatechange", () => {
              this.emit("@connectionstatechange", this._pc.connectionState);
            });
          } else {
            this._pc.addEventListener("iceconnectionstatechange", () => {
              logger.warn("run() | pc.connectionState not supported, using pc.iceConnectionState");
              switch (this._pc.iceConnectionState) {
                case "checking": {
                  this.emit("@connectionstatechange", "connecting");
                  break;
                }
                case "connected":
                case "completed": {
                  this.emit("@connectionstatechange", "connected");
                  break;
                }
                case "failed": {
                  this.emit("@connectionstatechange", "failed");
                  break;
                }
                case "disconnected": {
                  this.emit("@connectionstatechange", "disconnected");
                  break;
                }
                case "closed": {
                  this.emit("@connectionstatechange", "closed");
                  break;
                }
              }
            });
          }
        }
        async updateIceServers(iceServers) {
          this.assertNotClosed();
          logger.debug("updateIceServers()");
          const configuration = this._pc.getConfiguration();
          configuration.iceServers = iceServers;
          this._pc.setConfiguration(configuration);
        }
        async restartIce(iceParameters) {
          this.assertNotClosed();
          logger.debug("restartIce()");
          this._remoteSdp.updateIceParameters(iceParameters);
          if (!this._transportReady) {
            return;
          }
          if (this._direction === "send") {
            const offer = await this._pc.createOffer({
              iceRestart: true
            });
            logger.debug("restartIce() | calling pc.setLocalDescription() [offer:%o]", offer);
            await this._pc.setLocalDescription(offer);
            const answer = {
              type: "answer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("restartIce() | calling pc.setRemoteDescription() [answer:%o]", answer);
            await this._pc.setRemoteDescription(answer);
          } else {
            const offer = {
              type: "offer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("restartIce() | calling pc.setRemoteDescription() [offer:%o]", offer);
            await this._pc.setRemoteDescription(offer);
            const answer = await this._pc.createAnswer();
            logger.debug("restartIce() | calling pc.setLocalDescription() [answer:%o]", answer);
            await this._pc.setLocalDescription(answer);
          }
        }
        async getTransportStats() {
          this.assertNotClosed();
          return this._pc.getStats();
        }
        async send({ track, encodings, codecOptions, codec, onRtpSender }) {
          this.assertNotClosed();
          this.assertSendDirection();
          logger.debug("send() [kind:%s, track.id:%s]", track.kind, track.id);
          if (encodings && encodings.length > 1) {
            encodings.forEach((encoding, idx) => {
              encoding.rid = `r${idx}`;
            });
          }
          const sendingRtpParameters = utils.clone(this._sendingRtpParametersByKind[track.kind]);
          sendingRtpParameters.codecs = ortc.reduceCodecs(sendingRtpParameters.codecs, codec);
          const sendingRemoteRtpParameters = utils.clone(this._sendingRemoteRtpParametersByKind[track.kind]);
          sendingRemoteRtpParameters.codecs = ortc.reduceCodecs(sendingRemoteRtpParameters.codecs, codec);
          const mediaSectionIdx = this._remoteSdp.getNextMediaSectionIdx();
          const transceiver = this._pc.addTransceiver(track, {
            direction: "sendonly",
            streams: [
              this._sendStream
            ],
            sendEncodings: encodings
          });
          if (onRtpSender) {
            onRtpSender(transceiver.sender);
          }
          let offer = await this._pc.createOffer();
          let localSdpObject = sdpTransform.parse(offer.sdp);
          let offerMediaObject;
          if (!this._transportReady) {
            await this.setupTransport({
              localDtlsRole: this._forcedLocalDtlsRole ?? "client",
              localSdpObject
            });
          }
          let hackVp9Svc = false;
          const layers = (0, scalabilityModes_1.parse)((encodings ?? [
            {}
          ])[0].scalabilityMode);
          if (encodings && encodings.length === 1 && layers.spatialLayers > 1 && sendingRtpParameters.codecs[0].mimeType.toLowerCase() === "video/vp9") {
            logger.debug("send() | enabling legacy simulcast for VP9 SVC");
            hackVp9Svc = true;
            localSdpObject = sdpTransform.parse(offer.sdp);
            offerMediaObject = localSdpObject.media[mediaSectionIdx.idx];
            sdpUnifiedPlanUtils.addLegacySimulcast({
              offerMediaObject,
              numStreams: layers.spatialLayers
            });
            offer = {
              type: "offer",
              sdp: sdpTransform.write(localSdpObject)
            };
          }
          logger.debug("send() | calling pc.setLocalDescription() [offer:%o]", offer);
          await this._pc.setLocalDescription(offer);
          let localId = transceiver.mid ?? void 0;
          if (!localId) {
            logger.warn("send() | missing transceiver.mid (bug in react-native-webrtc, using a workaround");
          }
          sendingRtpParameters.mid = localId;
          localSdpObject = sdpTransform.parse(this._pc.localDescription.sdp);
          offerMediaObject = localSdpObject.media[mediaSectionIdx.idx];
          sendingRtpParameters.rtcp.cname = sdpCommonUtils.getCname({
            offerMediaObject
          });
          if (!encodings) {
            sendingRtpParameters.encodings = sdpUnifiedPlanUtils.getRtpEncodings({
              offerMediaObject
            });
          } else if (encodings.length === 1) {
            let newEncodings = sdpUnifiedPlanUtils.getRtpEncodings({
              offerMediaObject
            });
            Object.assign(newEncodings[0], encodings[0]);
            if (hackVp9Svc) {
              newEncodings = [
                newEncodings[0]
              ];
            }
            sendingRtpParameters.encodings = newEncodings;
          } else {
            sendingRtpParameters.encodings = encodings;
          }
          if (sendingRtpParameters.encodings.length > 1 && (sendingRtpParameters.codecs[0].mimeType.toLowerCase() === "video/vp8" || sendingRtpParameters.codecs[0].mimeType.toLowerCase() === "video/h264")) {
            for (const encoding of sendingRtpParameters.encodings) {
              if (encoding.scalabilityMode) {
                encoding.scalabilityMode = `L1T${layers.temporalLayers}`;
              } else {
                encoding.scalabilityMode = "L1T3";
              }
            }
          }
          this._remoteSdp.send({
            offerMediaObject,
            reuseMid: mediaSectionIdx.reuseMid,
            offerRtpParameters: sendingRtpParameters,
            answerRtpParameters: sendingRemoteRtpParameters,
            codecOptions,
            extmapAllowMixed: true
          });
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("send() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
          if (!localId) {
            localId = transceiver.mid;
            sendingRtpParameters.mid = localId;
          }
          this._mapMidTransceiver.set(localId, transceiver);
          return {
            localId,
            rtpParameters: sendingRtpParameters,
            rtpSender: transceiver.sender
          };
        }
        async stopSending(localId) {
          this.assertSendDirection();
          if (this._closed) {
            return;
          }
          logger.debug("stopSending() [localId:%s]", localId);
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          void transceiver.sender.replaceTrack(null);
          this._pc.removeTrack(transceiver.sender);
          const mediaSectionClosed = this._remoteSdp.closeMediaSection(transceiver.mid);
          if (mediaSectionClosed) {
            try {
              transceiver.stop();
            } catch (error) {
            }
          }
          const offer = await this._pc.createOffer();
          logger.debug("stopSending() | calling pc.setLocalDescription() [offer:%o]", offer);
          await this._pc.setLocalDescription(offer);
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("stopSending() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
          this._mapMidTransceiver.delete(localId);
        }
        async pauseSending(localId) {
          this.assertNotClosed();
          this.assertSendDirection();
          logger.debug("pauseSending() [localId:%s]", localId);
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          transceiver.direction = "inactive";
          this._remoteSdp.pauseMediaSection(localId);
          const offer = await this._pc.createOffer();
          logger.debug("pauseSending() | calling pc.setLocalDescription() [offer:%o]", offer);
          await this._pc.setLocalDescription(offer);
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("pauseSending() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
        }
        async resumeSending(localId) {
          this.assertNotClosed();
          this.assertSendDirection();
          logger.debug("resumeSending() [localId:%s]", localId);
          const transceiver = this._mapMidTransceiver.get(localId);
          this._remoteSdp.resumeSendingMediaSection(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          transceiver.direction = "sendonly";
          const offer = await this._pc.createOffer();
          logger.debug("resumeSending() | calling pc.setLocalDescription() [offer:%o]", offer);
          await this._pc.setLocalDescription(offer);
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("resumeSending() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
        }
        async replaceTrack(localId, track) {
          this.assertNotClosed();
          this.assertSendDirection();
          if (track) {
            logger.debug("replaceTrack() [localId:%s, track.id:%s]", localId, track.id);
          } else {
            logger.debug("replaceTrack() [localId:%s, no track]", localId);
          }
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          await transceiver.sender.replaceTrack(track);
        }
        async setMaxSpatialLayer(localId, spatialLayer) {
          this.assertNotClosed();
          this.assertSendDirection();
          logger.debug("setMaxSpatialLayer() [localId:%s, spatialLayer:%s]", localId, spatialLayer);
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          const parameters = transceiver.sender.getParameters();
          parameters.encodings.forEach((encoding, idx) => {
            if (idx <= spatialLayer) {
              encoding.active = true;
            } else {
              encoding.active = false;
            }
          });
          await transceiver.sender.setParameters(parameters);
          this._remoteSdp.muxMediaSectionSimulcast(localId, parameters.encodings);
          const offer = await this._pc.createOffer();
          logger.debug("setMaxSpatialLayer() | calling pc.setLocalDescription() [offer:%o]", offer);
          await this._pc.setLocalDescription(offer);
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("setMaxSpatialLayer() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
        }
        async setRtpEncodingParameters(localId, params) {
          this.assertNotClosed();
          this.assertSendDirection();
          logger.debug("setRtpEncodingParameters() [localId:%s, params:%o]", localId, params);
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          const parameters = transceiver.sender.getParameters();
          parameters.encodings.forEach((encoding, idx) => {
            parameters.encodings[idx] = {
              ...encoding,
              ...params
            };
          });
          await transceiver.sender.setParameters(parameters);
          this._remoteSdp.muxMediaSectionSimulcast(localId, parameters.encodings);
          const offer = await this._pc.createOffer();
          logger.debug("setRtpEncodingParameters() | calling pc.setLocalDescription() [offer:%o]", offer);
          await this._pc.setLocalDescription(offer);
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("setRtpEncodingParameters() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
        }
        async getSenderStats(localId) {
          this.assertNotClosed();
          this.assertSendDirection();
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          return transceiver.sender.getStats();
        }
        async sendDataChannel({ ordered, maxPacketLifeTime, maxRetransmits, label, protocol: protocol4 }) {
          this.assertNotClosed();
          this.assertSendDirection();
          const options = {
            negotiated: true,
            id: this._nextSendSctpStreamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmits,
            protocol: protocol4
          };
          logger.debug("sendDataChannel() [options:%o]", options);
          const dataChannel = this._pc.createDataChannel(label, options);
          this._nextSendSctpStreamId = ++this._nextSendSctpStreamId % SCTP_NUM_STREAMS.MIS;
          if (!this._hasDataChannelMediaSection) {
            const offer = await this._pc.createOffer();
            const localSdpObject = sdpTransform.parse(offer.sdp);
            const offerMediaObject = localSdpObject.media.find((m) => m.type === "application");
            if (!this._transportReady) {
              await this.setupTransport({
                localDtlsRole: this._forcedLocalDtlsRole ?? "client",
                localSdpObject
              });
            }
            logger.debug("sendDataChannel() | calling pc.setLocalDescription() [offer:%o]", offer);
            await this._pc.setLocalDescription(offer);
            this._remoteSdp.sendSctpAssociation({
              offerMediaObject
            });
            const answer = {
              type: "answer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("sendDataChannel() | calling pc.setRemoteDescription() [answer:%o]", answer);
            await this._pc.setRemoteDescription(answer);
            this._hasDataChannelMediaSection = true;
          }
          const sctpStreamParameters = {
            streamId: options.id,
            ordered: options.ordered,
            maxPacketLifeTime: options.maxPacketLifeTime,
            maxRetransmits: options.maxRetransmits
          };
          return {
            dataChannel,
            sctpStreamParameters
          };
        }
        async receive(optionsList) {
          this.assertNotClosed();
          this.assertRecvDirection();
          const results = [];
          const mapLocalId = /* @__PURE__ */ new Map();
          for (const options of optionsList) {
            const { trackId, kind, rtpParameters, streamId } = options;
            logger.debug("receive() [trackId:%s, kind:%s]", trackId, kind);
            const localId = rtpParameters.mid ?? String(this._mapMidTransceiver.size);
            mapLocalId.set(trackId, localId);
            this._remoteSdp.receive({
              mid: localId,
              kind,
              offerRtpParameters: rtpParameters,
              streamId: streamId ?? rtpParameters.rtcp.cname,
              trackId
            });
          }
          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("receive() | calling pc.setRemoteDescription() [offer:%o]", offer);
          await this._pc.setRemoteDescription(offer);
          for (const options of optionsList) {
            const { trackId, onRtpReceiver } = options;
            if (onRtpReceiver) {
              const localId = mapLocalId.get(trackId);
              const transceiver = this._pc.getTransceivers().find((t) => t.mid === localId);
              if (!transceiver) {
                throw new Error("transceiver not found");
              }
              onRtpReceiver(transceiver.receiver);
            }
          }
          let answer = await this._pc.createAnswer();
          const localSdpObject = sdpTransform.parse(answer.sdp);
          for (const options of optionsList) {
            const { trackId, rtpParameters } = options;
            const localId = mapLocalId.get(trackId);
            const answerMediaObject = localSdpObject.media.find((m) => String(m.mid) === localId);
            sdpCommonUtils.applyCodecParameters({
              offerRtpParameters: rtpParameters,
              answerMediaObject
            });
          }
          answer = {
            type: "answer",
            sdp: sdpTransform.write(localSdpObject)
          };
          if (!this._transportReady) {
            await this.setupTransport({
              localDtlsRole: this._forcedLocalDtlsRole ?? "client",
              localSdpObject
            });
          }
          logger.debug("receive() | calling pc.setLocalDescription() [answer:%o]", answer);
          await this._pc.setLocalDescription(answer);
          for (const options of optionsList) {
            const { trackId } = options;
            const localId = mapLocalId.get(trackId);
            const transceiver = this._pc.getTransceivers().find((t) => t.mid === localId);
            if (!transceiver) {
              throw new Error("new RTCRtpTransceiver not found");
            } else {
              this._mapMidTransceiver.set(localId, transceiver);
              results.push({
                localId,
                track: transceiver.receiver.track,
                rtpReceiver: transceiver.receiver
              });
            }
          }
          return results;
        }
        async stopReceiving(localIds) {
          this.assertRecvDirection();
          if (this._closed) {
            return;
          }
          for (const localId of localIds) {
            logger.debug("stopReceiving() [localId:%s]", localId);
            const transceiver = this._mapMidTransceiver.get(localId);
            if (!transceiver) {
              throw new Error("associated RTCRtpTransceiver not found");
            }
            this._remoteSdp.closeMediaSection(transceiver.mid);
          }
          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("stopReceiving() | calling pc.setRemoteDescription() [offer:%o]", offer);
          await this._pc.setRemoteDescription(offer);
          const answer = await this._pc.createAnswer();
          logger.debug("stopReceiving() | calling pc.setLocalDescription() [answer:%o]", answer);
          await this._pc.setLocalDescription(answer);
          for (const localId of localIds) {
            this._mapMidTransceiver.delete(localId);
          }
        }
        async pauseReceiving(localIds) {
          this.assertNotClosed();
          this.assertRecvDirection();
          for (const localId of localIds) {
            logger.debug("pauseReceiving() [localId:%s]", localId);
            const transceiver = this._mapMidTransceiver.get(localId);
            if (!transceiver) {
              throw new Error("associated RTCRtpTransceiver not found");
            }
            transceiver.direction = "inactive";
            this._remoteSdp.pauseMediaSection(localId);
          }
          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("pauseReceiving() | calling pc.setRemoteDescription() [offer:%o]", offer);
          await this._pc.setRemoteDescription(offer);
          const answer = await this._pc.createAnswer();
          logger.debug("pauseReceiving() | calling pc.setLocalDescription() [answer:%o]", answer);
          await this._pc.setLocalDescription(answer);
        }
        async resumeReceiving(localIds) {
          this.assertNotClosed();
          this.assertRecvDirection();
          for (const localId of localIds) {
            logger.debug("resumeReceiving() [localId:%s]", localId);
            const transceiver = this._mapMidTransceiver.get(localId);
            if (!transceiver) {
              throw new Error("associated RTCRtpTransceiver not found");
            }
            transceiver.direction = "recvonly";
            this._remoteSdp.resumeReceivingMediaSection(localId);
          }
          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("resumeReceiving() | calling pc.setRemoteDescription() [offer:%o]", offer);
          await this._pc.setRemoteDescription(offer);
          const answer = await this._pc.createAnswer();
          logger.debug("resumeReceiving() | calling pc.setLocalDescription() [answer:%o]", answer);
          await this._pc.setLocalDescription(answer);
        }
        async getReceiverStats(localId) {
          this.assertNotClosed();
          this.assertRecvDirection();
          const transceiver = this._mapMidTransceiver.get(localId);
          if (!transceiver) {
            throw new Error("associated RTCRtpTransceiver not found");
          }
          return transceiver.receiver.getStats();
        }
        async receiveDataChannel({ sctpStreamParameters, label, protocol: protocol4 }) {
          this.assertNotClosed();
          this.assertRecvDirection();
          const { streamId, ordered, maxPacketLifeTime, maxRetransmits } = sctpStreamParameters;
          const options = {
            negotiated: true,
            id: streamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmits,
            protocol: protocol4
          };
          logger.debug("receiveDataChannel() [options:%o]", options);
          const dataChannel = this._pc.createDataChannel(label, options);
          if (!this._hasDataChannelMediaSection) {
            this._remoteSdp.receiveSctpAssociation();
            const offer = {
              type: "offer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("receiveDataChannel() | calling pc.setRemoteDescription() [offer:%o]", offer);
            await this._pc.setRemoteDescription(offer);
            const answer = await this._pc.createAnswer();
            if (!this._transportReady) {
              const localSdpObject = sdpTransform.parse(answer.sdp);
              await this.setupTransport({
                localDtlsRole: this._forcedLocalDtlsRole ?? "client",
                localSdpObject
              });
            }
            logger.debug("receiveDataChannel() | calling pc.setRemoteDescription() [answer:%o]", answer);
            await this._pc.setLocalDescription(answer);
            this._hasDataChannelMediaSection = true;
          }
          return {
            dataChannel
          };
        }
        async setupTransport({ localDtlsRole, localSdpObject }) {
          if (!localSdpObject) {
            localSdpObject = sdpTransform.parse(this._pc.localDescription.sdp);
          }
          const dtlsParameters = sdpCommonUtils.extractDtlsParameters({
            sdpObject: localSdpObject
          });
          dtlsParameters.role = localDtlsRole;
          this._remoteSdp.updateDtlsRole(localDtlsRole === "client" ? "server" : "client");
          await new Promise((resolve, reject) => {
            this.safeEmit("@connect", {
              dtlsParameters
            }, resolve, reject);
          });
          this._transportReady = true;
        }
        assertNotClosed() {
          if (this._closed) {
            throw new errors_1.InvalidStateError("method called in a closed handler");
          }
        }
        assertSendDirection() {
          if (this._direction !== "send") {
            throw new Error('method can just be called for handlers with "send" direction');
          }
        }
        assertRecvDirection() {
          if (this._direction !== "recv") {
            throw new Error('method can just be called for handlers with "recv" direction');
          }
        }
      }, __name(_a2, "ReactNativeUnifiedPlan"), _a2);
      exports.ReactNativeUnifiedPlan = ReactNativeUnifiedPlan;
    }
  });

  // node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/handlers/ReactNative.js
  var require_ReactNative = __commonJS({
    "node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/handlers/ReactNative.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: /* @__PURE__ */ __name(function() {
              return m[k];
            }, "get")
          };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", {
          enumerable: true,
          value: v
        });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ReactNative = void 0;
      var sdpTransform = __importStar(require_lib3());
      var Logger_1 = require_Logger();
      var errors_1 = require_errors();
      var utils = __importStar(require_utils());
      var ortc = __importStar(require_ortc());
      var sdpCommonUtils = __importStar(require_commonUtils());
      var sdpPlanBUtils = __importStar(require_planBUtils());
      var HandlerInterface_1 = require_HandlerInterface();
      var RemoteSdp_1 = require_RemoteSdp();
      var logger = new Logger_1.Logger("ReactNative");
      var NAME = "ReactNative";
      var SCTP_NUM_STREAMS = {
        OS: 1024,
        MIS: 1024
      };
      var _a2;
      var ReactNative = (_a2 = class extends HandlerInterface_1.HandlerInterface {
        /**
         * Creates a factory function.
         */
        static createFactory() {
          return () => new _a2();
        }
        constructor() {
          super();
          this._sendStream = new MediaStream();
          this._mapSendLocalIdTrack = /* @__PURE__ */ new Map();
          this._nextSendLocalId = 0;
          this._mapRecvLocalIdInfo = /* @__PURE__ */ new Map();
          this._hasDataChannelMediaSection = false;
          this._nextSendSctpStreamId = 0;
          this._transportReady = false;
        }
        get name() {
          return NAME;
        }
        close() {
          logger.debug("close()");
          this._sendStream.release(
            /* releaseTracks */
            false
          );
          if (this._pc) {
            try {
              this._pc.close();
            } catch (error) {
            }
          }
          this.emit("@close");
        }
        async getNativeRtpCapabilities() {
          logger.debug("getNativeRtpCapabilities()");
          const pc = new RTCPeerConnection({
            iceServers: [],
            iceTransportPolicy: "all",
            bundlePolicy: "max-bundle",
            rtcpMuxPolicy: "require",
            sdpSemantics: "plan-b"
          });
          try {
            const offer = await pc.createOffer({
              offerToReceiveAudio: true,
              offerToReceiveVideo: true
            });
            try {
              pc.close();
            } catch (error) {
            }
            const sdpObject = sdpTransform.parse(offer.sdp);
            const nativeRtpCapabilities = sdpCommonUtils.extractRtpCapabilities({
              sdpObject
            });
            return nativeRtpCapabilities;
          } catch (error) {
            try {
              pc.close();
            } catch (error2) {
            }
            throw error;
          }
        }
        async getNativeSctpCapabilities() {
          logger.debug("getNativeSctpCapabilities()");
          return {
            numStreams: SCTP_NUM_STREAMS
          };
        }
        run({ direction, iceParameters, iceCandidates, dtlsParameters, sctpParameters, iceServers, iceTransportPolicy, additionalSettings, proprietaryConstraints, extendedRtpCapabilities }) {
          logger.debug("run()");
          this._direction = direction;
          this._remoteSdp = new RemoteSdp_1.RemoteSdp({
            iceParameters,
            iceCandidates,
            dtlsParameters,
            sctpParameters,
            planB: true
          });
          this._sendingRtpParametersByKind = {
            audio: ortc.getSendingRtpParameters("audio", extendedRtpCapabilities),
            video: ortc.getSendingRtpParameters("video", extendedRtpCapabilities)
          };
          this._sendingRemoteRtpParametersByKind = {
            audio: ortc.getSendingRemoteRtpParameters("audio", extendedRtpCapabilities),
            video: ortc.getSendingRemoteRtpParameters("video", extendedRtpCapabilities)
          };
          if (dtlsParameters.role && dtlsParameters.role !== "auto") {
            this._forcedLocalDtlsRole = dtlsParameters.role === "server" ? "client" : "server";
          }
          this._pc = new RTCPeerConnection({
            iceServers: iceServers ?? [],
            iceTransportPolicy: iceTransportPolicy ?? "all",
            bundlePolicy: "max-bundle",
            rtcpMuxPolicy: "require",
            sdpSemantics: "plan-b",
            ...additionalSettings
          }, proprietaryConstraints);
          this._pc.addEventListener("icegatheringstatechange", () => {
            this.emit("@icegatheringstatechange", this._pc.iceGatheringState);
          });
          if (this._pc.connectionState) {
            this._pc.addEventListener("connectionstatechange", () => {
              this.emit("@connectionstatechange", this._pc.connectionState);
            });
          } else {
            this._pc.addEventListener("iceconnectionstatechange", () => {
              logger.warn("run() | pc.connectionState not supported, using pc.iceConnectionState");
              switch (this._pc.iceConnectionState) {
                case "checking": {
                  this.emit("@connectionstatechange", "connecting");
                  break;
                }
                case "connected":
                case "completed": {
                  this.emit("@connectionstatechange", "connected");
                  break;
                }
                case "failed": {
                  this.emit("@connectionstatechange", "failed");
                  break;
                }
                case "disconnected": {
                  this.emit("@connectionstatechange", "disconnected");
                  break;
                }
                case "closed": {
                  this.emit("@connectionstatechange", "closed");
                  break;
                }
              }
            });
          }
        }
        async updateIceServers(iceServers) {
          logger.debug("updateIceServers()");
          const configuration = this._pc.getConfiguration();
          configuration.iceServers = iceServers;
          this._pc.setConfiguration(configuration);
        }
        async restartIce(iceParameters) {
          logger.debug("restartIce()");
          this._remoteSdp.updateIceParameters(iceParameters);
          if (!this._transportReady) {
            return;
          }
          if (this._direction === "send") {
            const offer = await this._pc.createOffer({
              iceRestart: true
            });
            logger.debug("restartIce() | calling pc.setLocalDescription() [offer:%o]", offer);
            await this._pc.setLocalDescription(offer);
            const answer = {
              type: "answer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("restartIce() | calling pc.setRemoteDescription() [answer:%o]", answer);
            await this._pc.setRemoteDescription(answer);
          } else {
            const offer = {
              type: "offer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("restartIce() | calling pc.setRemoteDescription() [offer:%o]", offer);
            await this._pc.setRemoteDescription(offer);
            const answer = await this._pc.createAnswer();
            logger.debug("restartIce() | calling pc.setLocalDescription() [answer:%o]", answer);
            await this._pc.setLocalDescription(answer);
          }
        }
        async getTransportStats() {
          return this._pc.getStats();
        }
        async send({ track, encodings, codecOptions, codec }) {
          this.assertSendDirection();
          logger.debug("send() [kind:%s, track.id:%s]", track.kind, track.id);
          if (codec) {
            logger.warn("send() | codec selection is not available in %s handler", this.name);
          }
          this._sendStream.addTrack(track);
          this._pc.addStream(this._sendStream);
          let offer = await this._pc.createOffer();
          let localSdpObject = sdpTransform.parse(offer.sdp);
          let offerMediaObject;
          const sendingRtpParameters = utils.clone(this._sendingRtpParametersByKind[track.kind]);
          sendingRtpParameters.codecs = ortc.reduceCodecs(sendingRtpParameters.codecs);
          const sendingRemoteRtpParameters = utils.clone(this._sendingRemoteRtpParametersByKind[track.kind]);
          sendingRemoteRtpParameters.codecs = ortc.reduceCodecs(sendingRemoteRtpParameters.codecs);
          if (!this._transportReady) {
            await this.setupTransport({
              localDtlsRole: this._forcedLocalDtlsRole ?? "client",
              localSdpObject
            });
          }
          if (track.kind === "video" && encodings && encodings.length > 1) {
            logger.debug("send() | enabling simulcast");
            localSdpObject = sdpTransform.parse(offer.sdp);
            offerMediaObject = localSdpObject.media.find((m) => m.type === "video");
            sdpPlanBUtils.addLegacySimulcast({
              offerMediaObject,
              track,
              numStreams: encodings.length
            });
            offer = {
              type: "offer",
              sdp: sdpTransform.write(localSdpObject)
            };
          }
          logger.debug("send() | calling pc.setLocalDescription() [offer:%o]", offer);
          await this._pc.setLocalDescription(offer);
          localSdpObject = sdpTransform.parse(this._pc.localDescription.sdp);
          offerMediaObject = localSdpObject.media.find((m) => m.type === track.kind);
          sendingRtpParameters.rtcp.cname = sdpCommonUtils.getCname({
            offerMediaObject
          });
          sendingRtpParameters.encodings = sdpPlanBUtils.getRtpEncodings({
            offerMediaObject,
            track
          });
          if (encodings) {
            for (let idx = 0; idx < sendingRtpParameters.encodings.length; ++idx) {
              if (encodings[idx]) {
                Object.assign(sendingRtpParameters.encodings[idx], encodings[idx]);
              }
            }
          }
          if (sendingRtpParameters.encodings.length > 1 && (sendingRtpParameters.codecs[0].mimeType.toLowerCase() === "video/vp8" || sendingRtpParameters.codecs[0].mimeType.toLowerCase() === "video/h264")) {
            for (const encoding of sendingRtpParameters.encodings) {
              encoding.scalabilityMode = "L1T3";
            }
          }
          this._remoteSdp.send({
            offerMediaObject,
            offerRtpParameters: sendingRtpParameters,
            answerRtpParameters: sendingRemoteRtpParameters,
            codecOptions
          });
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("send() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
          const localId = String(this._nextSendLocalId);
          this._nextSendLocalId++;
          this._mapSendLocalIdTrack.set(localId, track);
          return {
            localId,
            rtpParameters: sendingRtpParameters
          };
        }
        async stopSending(localId) {
          this.assertSendDirection();
          logger.debug("stopSending() [localId:%s]", localId);
          const track = this._mapSendLocalIdTrack.get(localId);
          if (!track) {
            throw new Error("track not found");
          }
          this._mapSendLocalIdTrack.delete(localId);
          this._sendStream.removeTrack(track);
          this._pc.addStream(this._sendStream);
          const offer = await this._pc.createOffer();
          logger.debug("stopSending() | calling pc.setLocalDescription() [offer:%o]", offer);
          try {
            await this._pc.setLocalDescription(offer);
          } catch (error) {
            if (this._sendStream.getTracks().length === 0) {
              logger.warn("stopSending() | ignoring expected error due no sending tracks: %s", error.toString());
              return;
            }
            throw error;
          }
          if (this._pc.signalingState === "stable") {
            return;
          }
          const answer = {
            type: "answer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("stopSending() | calling pc.setRemoteDescription() [answer:%o]", answer);
          await this._pc.setRemoteDescription(answer);
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        async pauseSending(localId) {
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        async resumeSending(localId) {
        }
        async replaceTrack(localId, track) {
          throw new errors_1.UnsupportedError("not implemented");
        }
        async setMaxSpatialLayer(localId, spatialLayer) {
          throw new errors_1.UnsupportedError("not implemented");
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        async setRtpEncodingParameters(localId, params) {
          throw new errors_1.UnsupportedError("not implemented");
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        async getSenderStats(localId) {
          throw new errors_1.UnsupportedError("not implemented");
        }
        async sendDataChannel({ ordered, maxPacketLifeTime, maxRetransmits, label, protocol: protocol4 }) {
          this.assertSendDirection();
          const options = {
            negotiated: true,
            id: this._nextSendSctpStreamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmitTime: maxPacketLifeTime,
            maxRetransmits,
            protocol: protocol4
          };
          logger.debug("sendDataChannel() [options:%o]", options);
          const dataChannel = this._pc.createDataChannel(label, options);
          this._nextSendSctpStreamId = ++this._nextSendSctpStreamId % SCTP_NUM_STREAMS.MIS;
          if (!this._hasDataChannelMediaSection) {
            const offer = await this._pc.createOffer();
            const localSdpObject = sdpTransform.parse(offer.sdp);
            const offerMediaObject = localSdpObject.media.find((m) => m.type === "application");
            if (!this._transportReady) {
              await this.setupTransport({
                localDtlsRole: this._forcedLocalDtlsRole ?? "client",
                localSdpObject
              });
            }
            logger.debug("sendDataChannel() | calling pc.setLocalDescription() [offer:%o]", offer);
            await this._pc.setLocalDescription(offer);
            this._remoteSdp.sendSctpAssociation({
              offerMediaObject
            });
            const answer = {
              type: "answer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("sendDataChannel() | calling pc.setRemoteDescription() [answer:%o]", answer);
            await this._pc.setRemoteDescription(answer);
            this._hasDataChannelMediaSection = true;
          }
          const sctpStreamParameters = {
            streamId: options.id,
            ordered: options.ordered,
            maxPacketLifeTime: options.maxPacketLifeTime,
            maxRetransmits: options.maxRetransmits
          };
          return {
            dataChannel,
            sctpStreamParameters
          };
        }
        async receive(optionsList) {
          this.assertRecvDirection();
          const results = [];
          const mapStreamId = /* @__PURE__ */ new Map();
          for (const options of optionsList) {
            const { trackId, kind, rtpParameters } = options;
            logger.debug("receive() [trackId:%s, kind:%s]", trackId, kind);
            const mid = kind;
            let streamId = options.streamId ?? rtpParameters.rtcp.cname;
            logger.debug("receive() | forcing a random remote streamId to avoid well known bug in react-native-webrtc");
            streamId += `-hack-${utils.generateRandomNumber()}`;
            mapStreamId.set(trackId, streamId);
            this._remoteSdp.receive({
              mid,
              kind,
              offerRtpParameters: rtpParameters,
              streamId,
              trackId
            });
          }
          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("receive() | calling pc.setRemoteDescription() [offer:%o]", offer);
          await this._pc.setRemoteDescription(offer);
          let answer = await this._pc.createAnswer();
          const localSdpObject = sdpTransform.parse(answer.sdp);
          for (const options of optionsList) {
            const { kind, rtpParameters } = options;
            const mid = kind;
            const answerMediaObject = localSdpObject.media.find((m) => String(m.mid) === mid);
            sdpCommonUtils.applyCodecParameters({
              offerRtpParameters: rtpParameters,
              answerMediaObject
            });
          }
          answer = {
            type: "answer",
            sdp: sdpTransform.write(localSdpObject)
          };
          if (!this._transportReady) {
            await this.setupTransport({
              localDtlsRole: this._forcedLocalDtlsRole ?? "client",
              localSdpObject
            });
          }
          logger.debug("receive() | calling pc.setLocalDescription() [answer:%o]", answer);
          await this._pc.setLocalDescription(answer);
          for (const options of optionsList) {
            const { kind, trackId, rtpParameters } = options;
            const localId = trackId;
            const mid = kind;
            const streamId = mapStreamId.get(trackId);
            const stream = this._pc.getRemoteStreams().find((s) => s.id === streamId);
            const track = stream.getTrackById(localId);
            if (!track) {
              throw new Error("remote track not found");
            }
            this._mapRecvLocalIdInfo.set(localId, {
              mid,
              rtpParameters
            });
            results.push({
              localId,
              track
            });
          }
          return results;
        }
        async stopReceiving(localIds) {
          this.assertRecvDirection();
          for (const localId of localIds) {
            logger.debug("stopReceiving() [localId:%s]", localId);
            const { mid, rtpParameters } = this._mapRecvLocalIdInfo.get(localId) ?? {};
            this._mapRecvLocalIdInfo.delete(localId);
            this._remoteSdp.planBStopReceiving({
              mid,
              offerRtpParameters: rtpParameters
            });
          }
          const offer = {
            type: "offer",
            sdp: this._remoteSdp.getSdp()
          };
          logger.debug("stopReceiving() | calling pc.setRemoteDescription() [offer:%o]", offer);
          await this._pc.setRemoteDescription(offer);
          const answer = await this._pc.createAnswer();
          logger.debug("stopReceiving() | calling pc.setLocalDescription() [answer:%o]", answer);
          await this._pc.setLocalDescription(answer);
        }
        async pauseReceiving(localIds) {
        }
        async resumeReceiving(localIds) {
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        async getReceiverStats(localId) {
          throw new errors_1.UnsupportedError("not implemented");
        }
        async receiveDataChannel({ sctpStreamParameters, label, protocol: protocol4 }) {
          this.assertRecvDirection();
          const { streamId, ordered, maxPacketLifeTime, maxRetransmits } = sctpStreamParameters;
          const options = {
            negotiated: true,
            id: streamId,
            ordered,
            maxPacketLifeTime,
            maxRetransmitTime: maxPacketLifeTime,
            maxRetransmits,
            protocol: protocol4
          };
          logger.debug("receiveDataChannel() [options:%o]", options);
          const dataChannel = this._pc.createDataChannel(label, options);
          if (!this._hasDataChannelMediaSection) {
            this._remoteSdp.receiveSctpAssociation({
              oldDataChannelSpec: true
            });
            const offer = {
              type: "offer",
              sdp: this._remoteSdp.getSdp()
            };
            logger.debug("receiveDataChannel() | calling pc.setRemoteDescription() [offer:%o]", offer);
            await this._pc.setRemoteDescription(offer);
            const answer = await this._pc.createAnswer();
            if (!this._transportReady) {
              const localSdpObject = sdpTransform.parse(answer.sdp);
              await this.setupTransport({
                localDtlsRole: this._forcedLocalDtlsRole ?? "client",
                localSdpObject
              });
            }
            logger.debug("receiveDataChannel() | calling pc.setRemoteDescription() [answer:%o]", answer);
            await this._pc.setLocalDescription(answer);
            this._hasDataChannelMediaSection = true;
          }
          return {
            dataChannel
          };
        }
        async setupTransport({ localDtlsRole, localSdpObject }) {
          if (!localSdpObject) {
            localSdpObject = sdpTransform.parse(this._pc.localDescription.sdp);
          }
          const dtlsParameters = sdpCommonUtils.extractDtlsParameters({
            sdpObject: localSdpObject
          });
          dtlsParameters.role = localDtlsRole;
          this._remoteSdp.updateDtlsRole(localDtlsRole === "client" ? "server" : "client");
          await new Promise((resolve, reject) => {
            this.safeEmit("@connect", {
              dtlsParameters
            }, resolve, reject);
          });
          this._transportReady = true;
        }
        assertSendDirection() {
          if (this._direction !== "send") {
            throw new Error('method can just be called for handlers with "send" direction');
          }
        }
        assertRecvDirection() {
          if (this._direction !== "recv") {
            throw new Error('method can just be called for handlers with "recv" direction');
          }
        }
      }, __name(_a2, "ReactNative"), _a2);
      exports.ReactNative = ReactNative;
    }
  });

  // node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/Device.js
  var require_Device = __commonJS({
    "node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/Device.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: /* @__PURE__ */ __name(function() {
              return m[k];
            }, "get")
          };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", {
          enumerable: true,
          value: v
        });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Device = void 0;
      exports.detectDevice = detectDevice;
      var ua_parser_js_1 = require_ua_parser();
      var Logger_1 = require_Logger();
      var enhancedEvents_1 = require_enhancedEvents();
      var errors_1 = require_errors();
      var utils = __importStar(require_utils());
      var ortc = __importStar(require_ortc());
      var Transport_1 = require_Transport();
      var Chrome111_1 = require_Chrome111();
      var Chrome74_1 = require_Chrome74();
      var Chrome70_1 = require_Chrome70();
      var Chrome67_1 = require_Chrome67();
      var Chrome55_1 = require_Chrome55();
      var Firefox120_1 = require_Firefox120();
      var Firefox60_1 = require_Firefox60();
      var Safari12_1 = require_Safari12();
      var Safari11_1 = require_Safari11();
      var Edge11_1 = require_Edge11();
      var ReactNativeUnifiedPlan_1 = require_ReactNativeUnifiedPlan();
      var ReactNative_1 = require_ReactNative();
      var logger = new Logger_1.Logger("Device");
      function detectDevice() {
        if (typeof navigator === "object" && navigator.product === "ReactNative") {
          logger.debug("detectDevice() | React-Native detected");
          if (typeof RTCPeerConnection === "undefined") {
            logger.warn("detectDevice() | unsupported react-native-webrtc without RTCPeerConnection, forgot to call registerGlobals()?");
            return void 0;
          }
          if (typeof RTCRtpTransceiver !== "undefined") {
            logger.debug("detectDevice() | ReactNative UnifiedPlan handler chosen");
            return "ReactNativeUnifiedPlan";
          } else {
            logger.debug("detectDevice() | ReactNative PlanB handler chosen");
            return "ReactNative";
          }
        } else if (typeof navigator === "object" && typeof navigator.userAgent === "string") {
          const ua = navigator.userAgent;
          const uaParser = new ua_parser_js_1.UAParser(ua);
          logger.debug("detectDevice() | browser detected [ua:%s, parsed:%o]", ua, uaParser.getResult());
          const browser = uaParser.getBrowser();
          const browserName = browser.name?.toLowerCase();
          const browserVersion = parseInt(browser.major ?? "0");
          const engine = uaParser.getEngine();
          const engineName = engine.name?.toLowerCase();
          const os = uaParser.getOS();
          const osName = os.name?.toLowerCase();
          const osVersion = parseFloat(os.version ?? "0");
          const device = uaParser.getDevice();
          const deviceModel = device.model?.toLowerCase();
          const isIOS = osName === "ios" || deviceModel === "ipad";
          const isChrome = browserName && [
            "chrome",
            "chromium",
            "mobile chrome",
            "chrome webview",
            "chrome headless"
          ].includes(browserName);
          const isFirefox = browserName && [
            "firefox",
            "mobile firefox",
            "mobile focus"
          ].includes(browserName);
          const isSafari = browserName && [
            "safari",
            "mobile safari"
          ].includes(browserName);
          const isEdge = browserName && [
            "edge"
          ].includes(browserName);
          if ((isChrome || isEdge) && !isIOS && browserVersion >= 111) {
            return "Chrome111";
          } else if (isChrome && !isIOS && browserVersion >= 74 || isEdge && !isIOS && browserVersion >= 88) {
            return "Chrome74";
          } else if (isChrome && !isIOS && browserVersion >= 70) {
            return "Chrome70";
          } else if (isChrome && !isIOS && browserVersion >= 67) {
            return "Chrome67";
          } else if (isChrome && !isIOS && browserVersion >= 55) {
            return "Chrome55";
          } else if (isFirefox && !isIOS && browserVersion >= 120) {
            return "Firefox120";
          } else if (isFirefox && !isIOS && browserVersion >= 60) {
            return "Firefox60";
          } else if (isFirefox && isIOS && osVersion >= 14.3) {
            return "Safari12";
          } else if (isSafari && browserVersion >= 12 && typeof RTCRtpTransceiver !== "undefined" && RTCRtpTransceiver.prototype.hasOwnProperty("currentDirection")) {
            return "Safari12";
          } else if (isSafari && browserVersion >= 11) {
            return "Safari11";
          } else if (isEdge && !isIOS && browserVersion >= 11 && browserVersion <= 18) {
            return "Edge11";
          } else if (engineName === "webkit" && isIOS && typeof RTCRtpTransceiver !== "undefined" && RTCRtpTransceiver.prototype.hasOwnProperty("currentDirection")) {
            return "Safari12";
          } else if (engineName === "blink") {
            const match = ua.match(/(?:(?:Chrome|Chromium))[ /](\w+)/i);
            if (match) {
              const version = Number(match[1]);
              if (version >= 111) {
                return "Chrome111";
              } else if (version >= 74) {
                return "Chrome74";
              } else if (version >= 70) {
                return "Chrome70";
              } else if (version >= 67) {
                return "Chrome67";
              } else {
                return "Chrome55";
              }
            } else {
              return "Chrome111";
            }
          } else {
            logger.warn("detectDevice() | browser not supported [name:%s, version:%s]", browserName, browserVersion);
            return void 0;
          }
        } else {
          logger.warn("detectDevice() | unknown device");
          return void 0;
        }
      }
      __name(detectDevice, "detectDevice");
      var _a2;
      var Device2 = (_a2 = class {
        /**
         * Create a new Device to connect to mediasoup server.
         *
         * @throws {UnsupportedError} if device is not supported.
         */
        constructor({ handlerName, handlerFactory, Handler } = {}) {
          this._loaded = false;
          this._observer = new enhancedEvents_1.EnhancedEventEmitter();
          logger.debug("constructor()");
          if (Handler) {
            logger.warn("constructor() | Handler option is DEPRECATED, use handlerName or handlerFactory instead");
            if (typeof Handler === "string") {
              handlerName = Handler;
            } else {
              throw new TypeError("non string Handler option no longer supported, use handlerFactory instead");
            }
          }
          if (handlerName && handlerFactory) {
            throw new TypeError("just one of handlerName or handlerInterface can be given");
          }
          if (handlerFactory) {
            this._handlerFactory = handlerFactory;
          } else {
            if (handlerName) {
              logger.debug("constructor() | handler given: %s", handlerName);
            } else {
              handlerName = detectDevice();
              if (handlerName) {
                logger.debug("constructor() | detected handler: %s", handlerName);
              } else {
                throw new errors_1.UnsupportedError("device not supported");
              }
            }
            switch (handlerName) {
              case "Chrome111": {
                this._handlerFactory = Chrome111_1.Chrome111.createFactory();
                break;
              }
              case "Chrome74": {
                this._handlerFactory = Chrome74_1.Chrome74.createFactory();
                break;
              }
              case "Chrome70": {
                this._handlerFactory = Chrome70_1.Chrome70.createFactory();
                break;
              }
              case "Chrome67": {
                this._handlerFactory = Chrome67_1.Chrome67.createFactory();
                break;
              }
              case "Chrome55": {
                this._handlerFactory = Chrome55_1.Chrome55.createFactory();
                break;
              }
              case "Firefox120": {
                this._handlerFactory = Firefox120_1.Firefox120.createFactory();
                break;
              }
              case "Firefox60": {
                this._handlerFactory = Firefox60_1.Firefox60.createFactory();
                break;
              }
              case "Safari12": {
                this._handlerFactory = Safari12_1.Safari12.createFactory();
                break;
              }
              case "Safari11": {
                this._handlerFactory = Safari11_1.Safari11.createFactory();
                break;
              }
              case "Edge11": {
                this._handlerFactory = Edge11_1.Edge11.createFactory();
                break;
              }
              case "ReactNativeUnifiedPlan": {
                this._handlerFactory = ReactNativeUnifiedPlan_1.ReactNativeUnifiedPlan.createFactory();
                break;
              }
              case "ReactNative": {
                this._handlerFactory = ReactNative_1.ReactNative.createFactory();
                break;
              }
              default: {
                throw new TypeError(`unknown handlerName "${handlerName}"`);
              }
            }
          }
          const handler = this._handlerFactory();
          this._handlerName = handler.name;
          handler.close();
          this._extendedRtpCapabilities = void 0;
          this._recvRtpCapabilities = void 0;
          this._canProduceByKind = {
            audio: false,
            video: false
          };
          this._sctpCapabilities = void 0;
        }
        /**
         * The RTC handler name.
         */
        get handlerName() {
          return this._handlerName;
        }
        /**
         * Whether the Device is loaded.
         */
        get loaded() {
          return this._loaded;
        }
        /**
         * RTP capabilities of the Device for receiving media.
         *
         * @throws {InvalidStateError} if not loaded.
         */
        get rtpCapabilities() {
          if (!this._loaded) {
            throw new errors_1.InvalidStateError("not loaded");
          }
          return this._recvRtpCapabilities;
        }
        /**
         * SCTP capabilities of the Device.
         *
         * @throws {InvalidStateError} if not loaded.
         */
        get sctpCapabilities() {
          if (!this._loaded) {
            throw new errors_1.InvalidStateError("not loaded");
          }
          return this._sctpCapabilities;
        }
        get observer() {
          return this._observer;
        }
        /**
         * Initialize the Device.
         */
        async load({ routerRtpCapabilities }) {
          logger.debug("load() [routerRtpCapabilities:%o]", routerRtpCapabilities);
          let handler;
          try {
            if (this._loaded) {
              throw new errors_1.InvalidStateError("already loaded");
            }
            const clonedRouterRtpCapabilities = utils.clone(routerRtpCapabilities);
            ortc.validateRtpCapabilities(clonedRouterRtpCapabilities);
            handler = this._handlerFactory();
            const nativeRtpCapabilities = await handler.getNativeRtpCapabilities();
            logger.debug("load() | got native RTP capabilities:%o", nativeRtpCapabilities);
            const clonedNativeRtpCapabilities = utils.clone(nativeRtpCapabilities);
            ortc.validateRtpCapabilities(clonedNativeRtpCapabilities);
            this._extendedRtpCapabilities = ortc.getExtendedRtpCapabilities(clonedNativeRtpCapabilities, clonedRouterRtpCapabilities);
            logger.debug("load() | got extended RTP capabilities:%o", this._extendedRtpCapabilities);
            this._canProduceByKind.audio = ortc.canSend("audio", this._extendedRtpCapabilities);
            this._canProduceByKind.video = ortc.canSend("video", this._extendedRtpCapabilities);
            this._recvRtpCapabilities = ortc.getRecvRtpCapabilities(this._extendedRtpCapabilities);
            ortc.validateRtpCapabilities(this._recvRtpCapabilities);
            logger.debug("load() | got receiving RTP capabilities:%o", this._recvRtpCapabilities);
            this._sctpCapabilities = await handler.getNativeSctpCapabilities();
            logger.debug("load() | got native SCTP capabilities:%o", this._sctpCapabilities);
            ortc.validateSctpCapabilities(this._sctpCapabilities);
            logger.debug("load() succeeded");
            this._loaded = true;
            handler.close();
          } catch (error) {
            if (handler) {
              handler.close();
            }
            throw error;
          }
        }
        /**
         * Whether we can produce audio/video.
         *
         * @throws {InvalidStateError} if not loaded.
         * @throws {TypeError} if wrong arguments.
         */
        canProduce(kind) {
          if (!this._loaded) {
            throw new errors_1.InvalidStateError("not loaded");
          } else if (kind !== "audio" && kind !== "video") {
            throw new TypeError(`invalid kind "${kind}"`);
          }
          return this._canProduceByKind[kind];
        }
        /**
         * Creates a Transport for sending media.
         *
         * @throws {InvalidStateError} if not loaded.
         * @throws {TypeError} if wrong arguments.
         */
        createSendTransport({ id, iceParameters, iceCandidates, dtlsParameters, sctpParameters, iceServers, iceTransportPolicy, additionalSettings, proprietaryConstraints, appData }) {
          logger.debug("createSendTransport()");
          return this.createTransport({
            direction: "send",
            id,
            iceParameters,
            iceCandidates,
            dtlsParameters,
            sctpParameters,
            iceServers,
            iceTransportPolicy,
            additionalSettings,
            proprietaryConstraints,
            appData
          });
        }
        /**
         * Creates a Transport for receiving media.
         *
         * @throws {InvalidStateError} if not loaded.
         * @throws {TypeError} if wrong arguments.
         */
        createRecvTransport({ id, iceParameters, iceCandidates, dtlsParameters, sctpParameters, iceServers, iceTransportPolicy, additionalSettings, proprietaryConstraints, appData }) {
          logger.debug("createRecvTransport()");
          return this.createTransport({
            direction: "recv",
            id,
            iceParameters,
            iceCandidates,
            dtlsParameters,
            sctpParameters,
            iceServers,
            iceTransportPolicy,
            additionalSettings,
            proprietaryConstraints,
            appData
          });
        }
        createTransport({ direction, id, iceParameters, iceCandidates, dtlsParameters, sctpParameters, iceServers, iceTransportPolicy, additionalSettings, proprietaryConstraints, appData }) {
          if (!this._loaded) {
            throw new errors_1.InvalidStateError("not loaded");
          } else if (typeof id !== "string") {
            throw new TypeError("missing id");
          } else if (typeof iceParameters !== "object") {
            throw new TypeError("missing iceParameters");
          } else if (!Array.isArray(iceCandidates)) {
            throw new TypeError("missing iceCandidates");
          } else if (typeof dtlsParameters !== "object") {
            throw new TypeError("missing dtlsParameters");
          } else if (sctpParameters && typeof sctpParameters !== "object") {
            throw new TypeError("wrong sctpParameters");
          } else if (appData && typeof appData !== "object") {
            throw new TypeError("if given, appData must be an object");
          }
          const transport = new Transport_1.Transport({
            direction,
            id,
            iceParameters,
            iceCandidates,
            dtlsParameters,
            sctpParameters,
            iceServers,
            iceTransportPolicy,
            additionalSettings,
            proprietaryConstraints,
            appData,
            handlerFactory: this._handlerFactory,
            extendedRtpCapabilities: this._extendedRtpCapabilities,
            canProduceByKind: this._canProduceByKind
          });
          this._observer.safeEmit("newtransport", transport);
          return transport;
        }
      }, __name(_a2, "Device"), _a2);
      exports.Device = Device2;
    }
  });

  // node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/RtpParameters.js
  var require_RtpParameters = __commonJS({
    "node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/RtpParameters.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
    }
  });

  // node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/SctpParameters.js
  var require_SctpParameters = __commonJS({
    "node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/SctpParameters.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
    }
  });

  // node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/types.js
  var require_types = __commonJS({
    "node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/types.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: /* @__PURE__ */ __name(function() {
              return m[k];
            }, "get")
          };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports1) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      __exportStar(require_Device(), exports);
      __exportStar(require_Transport(), exports);
      __exportStar(require_Producer(), exports);
      __exportStar(require_Consumer(), exports);
      __exportStar(require_DataProducer(), exports);
      __exportStar(require_DataConsumer(), exports);
      __exportStar(require_RtpParameters(), exports);
      __exportStar(require_SctpParameters(), exports);
      __exportStar(require_HandlerInterface(), exports);
      __exportStar(require_errors(), exports);
    }
  });

  // node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/index.js
  var require_lib4 = __commonJS({
    "node_modules/.pnpm/mediasoup-client@3.7.16/node_modules/mediasoup-client/lib/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: /* @__PURE__ */ __name(function() {
              return m[k];
            }, "get")
          };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", {
          enumerable: true,
          value: v
        });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.debug = exports.parseScalabilityMode = exports.detectDevice = exports.Device = exports.version = exports.types = void 0;
      var debug_1 = __importDefault(require_browser());
      exports.debug = debug_1.default;
      var Device_1 = require_Device();
      Object.defineProperty(exports, "Device", {
        enumerable: true,
        get: /* @__PURE__ */ __name(function() {
          return Device_1.Device;
        }, "get")
      });
      Object.defineProperty(exports, "detectDevice", {
        enumerable: true,
        get: /* @__PURE__ */ __name(function() {
          return Device_1.detectDevice;
        }, "get")
      });
      var types = __importStar(require_types());
      exports.types = types;
      exports.version = "3.7.16";
      var scalabilityModes_1 = require_scalabilityModes();
      Object.defineProperty(exports, "parseScalabilityMode", {
        enumerable: true,
        get: /* @__PURE__ */ __name(function() {
          return scalabilityModes_1.parse;
        }, "get")
      });
    }
  });

  // client/mediasoup.ts
  var import_mediasoup_client = __toESM(require_lib4());

  // node_modules/.pnpm/engine.io-parser@5.2.3/node_modules/engine.io-parser/build/esm/commons.js
  var PACKET_TYPES = /* @__PURE__ */ Object.create(null);
  PACKET_TYPES["open"] = "0";
  PACKET_TYPES["close"] = "1";
  PACKET_TYPES["ping"] = "2";
  PACKET_TYPES["pong"] = "3";
  PACKET_TYPES["message"] = "4";
  PACKET_TYPES["upgrade"] = "5";
  PACKET_TYPES["noop"] = "6";
  var PACKET_TYPES_REVERSE = /* @__PURE__ */ Object.create(null);
  Object.keys(PACKET_TYPES).forEach((key) => {
    PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
  });
  var ERROR_PACKET = {
    type: "error",
    data: "parser error"
  };

  // node_modules/.pnpm/engine.io-parser@5.2.3/node_modules/engine.io-parser/build/esm/encodePacket.browser.js
  var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
  var withNativeArrayBuffer = typeof ArrayBuffer === "function";
  var isView = /* @__PURE__ */ __name((obj) => {
    return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
  }, "isView");
  var encodePacket = /* @__PURE__ */ __name(({ type, data }, supportsBinary, callback) => {
    if (withNativeBlob && data instanceof Blob) {
      if (supportsBinary) {
        return callback(data);
      } else {
        return encodeBlobAsBase64(data, callback);
      }
    } else if (withNativeArrayBuffer && (data instanceof ArrayBuffer || isView(data))) {
      if (supportsBinary) {
        return callback(data);
      } else {
        return encodeBlobAsBase64(new Blob([
          data
        ]), callback);
      }
    }
    return callback(PACKET_TYPES[type] + (data || ""));
  }, "encodePacket");
  var encodeBlobAsBase64 = /* @__PURE__ */ __name((data, callback) => {
    const fileReader = new FileReader();
    fileReader.onload = function() {
      const content = fileReader.result.split(",")[1];
      callback("b" + (content || ""));
    };
    return fileReader.readAsDataURL(data);
  }, "encodeBlobAsBase64");
  function toArray(data) {
    if (data instanceof Uint8Array) {
      return data;
    } else if (data instanceof ArrayBuffer) {
      return new Uint8Array(data);
    } else {
      return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
    }
  }
  __name(toArray, "toArray");
  var TEXT_ENCODER;
  function encodePacketToBinary(packet, callback) {
    if (withNativeBlob && packet.data instanceof Blob) {
      return packet.data.arrayBuffer().then(toArray).then(callback);
    } else if (withNativeArrayBuffer && (packet.data instanceof ArrayBuffer || isView(packet.data))) {
      return callback(toArray(packet.data));
    }
    encodePacket(packet, false, (encoded) => {
      if (!TEXT_ENCODER) {
        TEXT_ENCODER = new TextEncoder();
      }
      callback(TEXT_ENCODER.encode(encoded));
    });
  }
  __name(encodePacketToBinary, "encodePacketToBinary");

  // node_modules/.pnpm/engine.io-parser@5.2.3/node_modules/engine.io-parser/build/esm/contrib/base64-arraybuffer.js
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
  for (let i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
  }
  var decode = /* @__PURE__ */ __name((base64) => {
    let bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
    if (base64[base64.length - 1] === "=") {
      bufferLength--;
      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }
    const arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
    for (i = 0; i < len; i += 4) {
      encoded1 = lookup[base64.charCodeAt(i)];
      encoded2 = lookup[base64.charCodeAt(i + 1)];
      encoded3 = lookup[base64.charCodeAt(i + 2)];
      encoded4 = lookup[base64.charCodeAt(i + 3)];
      bytes[p++] = encoded1 << 2 | encoded2 >> 4;
      bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
      bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }
    return arraybuffer;
  }, "decode");

  // node_modules/.pnpm/engine.io-parser@5.2.3/node_modules/engine.io-parser/build/esm/decodePacket.browser.js
  var withNativeArrayBuffer2 = typeof ArrayBuffer === "function";
  var decodePacket = /* @__PURE__ */ __name((encodedPacket, binaryType) => {
    if (typeof encodedPacket !== "string") {
      return {
        type: "message",
        data: mapBinary(encodedPacket, binaryType)
      };
    }
    const type = encodedPacket.charAt(0);
    if (type === "b") {
      return {
        type: "message",
        data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
      };
    }
    const packetType = PACKET_TYPES_REVERSE[type];
    if (!packetType) {
      return ERROR_PACKET;
    }
    return encodedPacket.length > 1 ? {
      type: PACKET_TYPES_REVERSE[type],
      data: encodedPacket.substring(1)
    } : {
      type: PACKET_TYPES_REVERSE[type]
    };
  }, "decodePacket");
  var decodeBase64Packet = /* @__PURE__ */ __name((data, binaryType) => {
    if (withNativeArrayBuffer2) {
      const decoded = decode(data);
      return mapBinary(decoded, binaryType);
    } else {
      return {
        base64: true,
        data
      };
    }
  }, "decodeBase64Packet");
  var mapBinary = /* @__PURE__ */ __name((data, binaryType) => {
    switch (binaryType) {
      case "blob":
        if (data instanceof Blob) {
          return data;
        } else {
          return new Blob([
            data
          ]);
        }
      case "arraybuffer":
      default:
        if (data instanceof ArrayBuffer) {
          return data;
        } else {
          return data.buffer;
        }
    }
  }, "mapBinary");

  // node_modules/.pnpm/engine.io-parser@5.2.3/node_modules/engine.io-parser/build/esm/index.js
  var SEPARATOR = String.fromCharCode(30);
  var encodePayload = /* @__PURE__ */ __name((packets, callback) => {
    const length = packets.length;
    const encodedPackets = new Array(length);
    let count = 0;
    packets.forEach((packet, i) => {
      encodePacket(packet, false, (encodedPacket) => {
        encodedPackets[i] = encodedPacket;
        if (++count === length) {
          callback(encodedPackets.join(SEPARATOR));
        }
      });
    });
  }, "encodePayload");
  var decodePayload = /* @__PURE__ */ __name((encodedPayload, binaryType) => {
    const encodedPackets = encodedPayload.split(SEPARATOR);
    const packets = [];
    for (let i = 0; i < encodedPackets.length; i++) {
      const decodedPacket = decodePacket(encodedPackets[i], binaryType);
      packets.push(decodedPacket);
      if (decodedPacket.type === "error") {
        break;
      }
    }
    return packets;
  }, "decodePayload");
  function createPacketEncoderStream() {
    return new TransformStream({
      transform(packet, controller) {
        encodePacketToBinary(packet, (encodedPacket) => {
          const payloadLength = encodedPacket.length;
          let header;
          if (payloadLength < 126) {
            header = new Uint8Array(1);
            new DataView(header.buffer).setUint8(0, payloadLength);
          } else if (payloadLength < 65536) {
            header = new Uint8Array(3);
            const view = new DataView(header.buffer);
            view.setUint8(0, 126);
            view.setUint16(1, payloadLength);
          } else {
            header = new Uint8Array(9);
            const view = new DataView(header.buffer);
            view.setUint8(0, 127);
            view.setBigUint64(1, BigInt(payloadLength));
          }
          if (packet.data && typeof packet.data !== "string") {
            header[0] |= 128;
          }
          controller.enqueue(header);
          controller.enqueue(encodedPacket);
        });
      }
    });
  }
  __name(createPacketEncoderStream, "createPacketEncoderStream");
  var TEXT_DECODER;
  function totalLength(chunks) {
    return chunks.reduce((acc, chunk) => acc + chunk.length, 0);
  }
  __name(totalLength, "totalLength");
  function concatChunks(chunks, size) {
    if (chunks[0].length === size) {
      return chunks.shift();
    }
    const buffer = new Uint8Array(size);
    let j = 0;
    for (let i = 0; i < size; i++) {
      buffer[i] = chunks[0][j++];
      if (j === chunks[0].length) {
        chunks.shift();
        j = 0;
      }
    }
    if (chunks.length && j < chunks[0].length) {
      chunks[0] = chunks[0].slice(j);
    }
    return buffer;
  }
  __name(concatChunks, "concatChunks");
  function createPacketDecoderStream(maxPayload, binaryType) {
    if (!TEXT_DECODER) {
      TEXT_DECODER = new TextDecoder();
    }
    const chunks = [];
    let state = 0;
    let expectedLength = -1;
    let isBinary2 = false;
    return new TransformStream({
      transform(chunk, controller) {
        chunks.push(chunk);
        while (true) {
          if (state === 0) {
            if (totalLength(chunks) < 1) {
              break;
            }
            const header = concatChunks(chunks, 1);
            isBinary2 = (header[0] & 128) === 128;
            expectedLength = header[0] & 127;
            if (expectedLength < 126) {
              state = 3;
            } else if (expectedLength === 126) {
              state = 1;
            } else {
              state = 2;
            }
          } else if (state === 1) {
            if (totalLength(chunks) < 2) {
              break;
            }
            const headerArray = concatChunks(chunks, 2);
            expectedLength = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length).getUint16(0);
            state = 3;
          } else if (state === 2) {
            if (totalLength(chunks) < 8) {
              break;
            }
            const headerArray = concatChunks(chunks, 8);
            const view = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length);
            const n = view.getUint32(0);
            if (n > Math.pow(2, 53 - 32) - 1) {
              controller.enqueue(ERROR_PACKET);
              break;
            }
            expectedLength = n * Math.pow(2, 32) + view.getUint32(4);
            state = 3;
          } else {
            if (totalLength(chunks) < expectedLength) {
              break;
            }
            const data = concatChunks(chunks, expectedLength);
            controller.enqueue(decodePacket(isBinary2 ? data : TEXT_DECODER.decode(data), binaryType));
            state = 0;
          }
          if (expectedLength === 0 || expectedLength > maxPayload) {
            controller.enqueue(ERROR_PACKET);
            break;
          }
        }
      }
    });
  }
  __name(createPacketDecoderStream, "createPacketDecoderStream");
  var protocol = 4;

  // node_modules/.pnpm/@socket.io+component-emitter@3.1.2/node_modules/@socket.io/component-emitter/lib/esm/index.js
  function Emitter(obj) {
    if (obj) return mixin(obj);
  }
  __name(Emitter, "Emitter");
  function mixin(obj) {
    for (var key in Emitter.prototype) {
      obj[key] = Emitter.prototype[key];
    }
    return obj;
  }
  __name(mixin, "mixin");
  Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
    this._callbacks = this._callbacks || {};
    (this._callbacks["$" + event] = this._callbacks["$" + event] || []).push(fn);
    return this;
  };
  Emitter.prototype.once = function(event, fn) {
    function on2() {
      this.off(event, on2);
      fn.apply(this, arguments);
    }
    __name(on2, "on");
    on2.fn = fn;
    this.on(event, on2);
    return this;
  };
  Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
    this._callbacks = this._callbacks || {};
    if (0 == arguments.length) {
      this._callbacks = {};
      return this;
    }
    var callbacks = this._callbacks["$" + event];
    if (!callbacks) return this;
    if (1 == arguments.length) {
      delete this._callbacks["$" + event];
      return this;
    }
    var cb;
    for (var i = 0; i < callbacks.length; i++) {
      cb = callbacks[i];
      if (cb === fn || cb.fn === fn) {
        callbacks.splice(i, 1);
        break;
      }
    }
    if (callbacks.length === 0) {
      delete this._callbacks["$" + event];
    }
    return this;
  };
  Emitter.prototype.emit = function(event) {
    this._callbacks = this._callbacks || {};
    var args = new Array(arguments.length - 1), callbacks = this._callbacks["$" + event];
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
    if (callbacks) {
      callbacks = callbacks.slice(0);
      for (var i = 0, len = callbacks.length; i < len; ++i) {
        callbacks[i].apply(this, args);
      }
    }
    return this;
  };
  Emitter.prototype.emitReserved = Emitter.prototype.emit;
  Emitter.prototype.listeners = function(event) {
    this._callbacks = this._callbacks || {};
    return this._callbacks["$" + event] || [];
  };
  Emitter.prototype.hasListeners = function(event) {
    return !!this.listeners(event).length;
  };

  // node_modules/.pnpm/engine.io-client@6.6.1/node_modules/engine.io-client/build/esm/globals.js
  var nextTick = (() => {
    const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
    if (isPromiseAvailable) {
      return (cb) => Promise.resolve().then(cb);
    } else {
      return (cb, setTimeoutFn) => setTimeoutFn(cb, 0);
    }
  })();
  var globalThisShim = (() => {
    if (typeof self !== "undefined") {
      return self;
    } else if (typeof window !== "undefined") {
      return window;
    } else {
      return Function("return this")();
    }
  })();
  var defaultBinaryType = "arraybuffer";
  function createCookieJar() {
  }
  __name(createCookieJar, "createCookieJar");

  // node_modules/.pnpm/engine.io-client@6.6.1/node_modules/engine.io-client/build/esm/util.js
  function pick(obj, ...attr) {
    return attr.reduce((acc, k) => {
      if (obj.hasOwnProperty(k)) {
        acc[k] = obj[k];
      }
      return acc;
    }, {});
  }
  __name(pick, "pick");
  var NATIVE_SET_TIMEOUT = globalThisShim.setTimeout;
  var NATIVE_CLEAR_TIMEOUT = globalThisShim.clearTimeout;
  function installTimerFunctions(obj, opts) {
    if (opts.useNativeTimers) {
      obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThisShim);
      obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThisShim);
    } else {
      obj.setTimeoutFn = globalThisShim.setTimeout.bind(globalThisShim);
      obj.clearTimeoutFn = globalThisShim.clearTimeout.bind(globalThisShim);
    }
  }
  __name(installTimerFunctions, "installTimerFunctions");
  var BASE64_OVERHEAD = 1.33;
  function byteLength(obj) {
    if (typeof obj === "string") {
      return utf8Length(obj);
    }
    return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
  }
  __name(byteLength, "byteLength");
  function utf8Length(str) {
    let c = 0, length = 0;
    for (let i = 0, l = str.length; i < l; i++) {
      c = str.charCodeAt(i);
      if (c < 128) {
        length += 1;
      } else if (c < 2048) {
        length += 2;
      } else if (c < 55296 || c >= 57344) {
        length += 3;
      } else {
        i++;
        length += 4;
      }
    }
    return length;
  }
  __name(utf8Length, "utf8Length");
  function randomString() {
    return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
  }
  __name(randomString, "randomString");

  // node_modules/.pnpm/engine.io-client@6.6.1/node_modules/engine.io-client/build/esm/contrib/parseqs.js
  function encode(obj) {
    let str = "";
    for (let i in obj) {
      if (obj.hasOwnProperty(i)) {
        if (str.length) str += "&";
        str += encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]);
      }
    }
    return str;
  }
  __name(encode, "encode");
  function decode2(qs) {
    let qry = {};
    let pairs = qs.split("&");
    for (let i = 0, l = pairs.length; i < l; i++) {
      let pair = pairs[i].split("=");
      qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return qry;
  }
  __name(decode2, "decode");

  // node_modules/.pnpm/engine.io-client@6.6.1/node_modules/engine.io-client/build/esm/transport.js
  var _TransportError = class _TransportError extends Error {
    constructor(reason, description, context) {
      super(reason);
      this.description = description;
      this.context = context;
      this.type = "TransportError";
    }
  };
  __name(_TransportError, "TransportError");
  var TransportError = _TransportError;
  var _Transport = class _Transport extends Emitter {
    /**
     * Transport abstract constructor.
     *
     * @param {Object} opts - options
     * @protected
     */
    constructor(opts) {
      super();
      this.writable = false;
      installTimerFunctions(this, opts);
      this.opts = opts;
      this.query = opts.query;
      this.socket = opts.socket;
      this.supportsBinary = !opts.forceBase64;
    }
    /**
     * Emits an error.
     *
     * @param {String} reason
     * @param description
     * @param context - the error context
     * @return {Transport} for chaining
     * @protected
     */
    onError(reason, description, context) {
      super.emitReserved("error", new TransportError(reason, description, context));
      return this;
    }
    /**
     * Opens the transport.
     */
    open() {
      this.readyState = "opening";
      this.doOpen();
      return this;
    }
    /**
     * Closes the transport.
     */
    close() {
      if (this.readyState === "opening" || this.readyState === "open") {
        this.doClose();
        this.onClose();
      }
      return this;
    }
    /**
     * Sends multiple packets.
     *
     * @param {Array} packets
     */
    send(packets) {
      if (this.readyState === "open") {
        this.write(packets);
      } else {
      }
    }
    /**
     * Called upon open
     *
     * @protected
     */
    onOpen() {
      this.readyState = "open";
      this.writable = true;
      super.emitReserved("open");
    }
    /**
     * Called with data.
     *
     * @param {String} data
     * @protected
     */
    onData(data) {
      const packet = decodePacket(data, this.socket.binaryType);
      this.onPacket(packet);
    }
    /**
     * Called with a decoded packet.
     *
     * @protected
     */
    onPacket(packet) {
      super.emitReserved("packet", packet);
    }
    /**
     * Called upon close.
     *
     * @protected
     */
    onClose(details) {
      this.readyState = "closed";
      super.emitReserved("close", details);
    }
    /**
     * Pauses the transport, in order not to lose packets during an upgrade.
     *
     * @param onPause
     */
    pause(onPause) {
    }
    createUri(schema, query = {}) {
      return schema + "://" + this._hostname() + this._port() + this.opts.path + this._query(query);
    }
    _hostname() {
      const hostname = this.opts.hostname;
      return hostname.indexOf(":") === -1 ? hostname : "[" + hostname + "]";
    }
    _port() {
      if (this.opts.port && (this.opts.secure && Number(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80)) {
        return ":" + this.opts.port;
      } else {
        return "";
      }
    }
    _query(query) {
      const encodedQuery = encode(query);
      return encodedQuery.length ? "?" + encodedQuery : "";
    }
  };
  __name(_Transport, "Transport");
  var Transport = _Transport;

  // node_modules/.pnpm/engine.io-client@6.6.1/node_modules/engine.io-client/build/esm/transports/polling.js
  var _Polling = class _Polling extends Transport {
    constructor() {
      super(...arguments);
      this._polling = false;
    }
    get name() {
      return "polling";
    }
    /**
     * Opens the socket (triggers polling). We write a PING message to determine
     * when the transport is open.
     *
     * @protected
     */
    doOpen() {
      this._poll();
    }
    /**
     * Pauses polling.
     *
     * @param {Function} onPause - callback upon buffers are flushed and transport is paused
     * @package
     */
    pause(onPause) {
      this.readyState = "pausing";
      const pause = /* @__PURE__ */ __name(() => {
        this.readyState = "paused";
        onPause();
      }, "pause");
      if (this._polling || !this.writable) {
        let total = 0;
        if (this._polling) {
          total++;
          this.once("pollComplete", function() {
            --total || pause();
          });
        }
        if (!this.writable) {
          total++;
          this.once("drain", function() {
            --total || pause();
          });
        }
      } else {
        pause();
      }
    }
    /**
     * Starts polling cycle.
     *
     * @private
     */
    _poll() {
      this._polling = true;
      this.doPoll();
      this.emitReserved("poll");
    }
    /**
     * Overloads onData to detect payloads.
     *
     * @protected
     */
    onData(data) {
      const callback = /* @__PURE__ */ __name((packet) => {
        if ("opening" === this.readyState && packet.type === "open") {
          this.onOpen();
        }
        if ("close" === packet.type) {
          this.onClose({
            description: "transport closed by the server"
          });
          return false;
        }
        this.onPacket(packet);
      }, "callback");
      decodePayload(data, this.socket.binaryType).forEach(callback);
      if ("closed" !== this.readyState) {
        this._polling = false;
        this.emitReserved("pollComplete");
        if ("open" === this.readyState) {
          this._poll();
        } else {
        }
      }
    }
    /**
     * For polling, send a close packet.
     *
     * @protected
     */
    doClose() {
      const close = /* @__PURE__ */ __name(() => {
        this.write([
          {
            type: "close"
          }
        ]);
      }, "close");
      if ("open" === this.readyState) {
        close();
      } else {
        this.once("open", close);
      }
    }
    /**
     * Writes a packets payload.
     *
     * @param {Array} packets - data packets
     * @protected
     */
    write(packets) {
      this.writable = false;
      encodePayload(packets, (data) => {
        this.doWrite(data, () => {
          this.writable = true;
          this.emitReserved("drain");
        });
      });
    }
    /**
     * Generates uri for connection.
     *
     * @private
     */
    uri() {
      const schema = this.opts.secure ? "https" : "http";
      const query = this.query || {};
      if (false !== this.opts.timestampRequests) {
        query[this.opts.timestampParam] = randomString();
      }
      if (!this.supportsBinary && !query.sid) {
        query.b64 = 1;
      }
      return this.createUri(schema, query);
    }
  };
  __name(_Polling, "Polling");
  var Polling = _Polling;

  // node_modules/.pnpm/engine.io-client@6.6.1/node_modules/engine.io-client/build/esm/contrib/has-cors.js
  var value = false;
  try {
    value = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest();
  } catch (err) {
  }
  var hasCORS = value;

  // node_modules/.pnpm/engine.io-client@6.6.1/node_modules/engine.io-client/build/esm/transports/polling-xhr.js
  function empty() {
  }
  __name(empty, "empty");
  var _BaseXHR = class _BaseXHR extends Polling {
    /**
     * XHR Polling constructor.
     *
     * @param {Object} opts
     * @package
     */
    constructor(opts) {
      super(opts);
      if (typeof location !== "undefined") {
        const isSSL = "https:" === location.protocol;
        let port = location.port;
        if (!port) {
          port = isSSL ? "443" : "80";
        }
        this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
      }
    }
    /**
     * Sends data.
     *
     * @param {String} data to send.
     * @param {Function} called upon flush.
     * @private
     */
    doWrite(data, fn) {
      const req = this.request({
        method: "POST",
        data
      });
      req.on("success", fn);
      req.on("error", (xhrStatus, context) => {
        this.onError("xhr post error", xhrStatus, context);
      });
    }
    /**
     * Starts a poll cycle.
     *
     * @private
     */
    doPoll() {
      const req = this.request();
      req.on("data", this.onData.bind(this));
      req.on("error", (xhrStatus, context) => {
        this.onError("xhr poll error", xhrStatus, context);
      });
      this.pollXhr = req;
    }
  };
  __name(_BaseXHR, "BaseXHR");
  var BaseXHR = _BaseXHR;
  var _Request = class _Request extends Emitter {
    /**
     * Request constructor
     *
     * @param {Object} options
     * @package
     */
    constructor(createRequest, uri, opts) {
      super();
      this.createRequest = createRequest;
      installTimerFunctions(this, opts);
      this._opts = opts;
      this._method = opts.method || "GET";
      this._uri = uri;
      this._data = void 0 !== opts.data ? opts.data : null;
      this._create();
    }
    /**
     * Creates the XHR object and sends the request.
     *
     * @private
     */
    _create() {
      var _a2;
      const opts = pick(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
      opts.xdomain = !!this._opts.xd;
      const xhr = this._xhr = this.createRequest(opts);
      try {
        xhr.open(this._method, this._uri, true);
        try {
          if (this._opts.extraHeaders) {
            xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
            for (let i in this._opts.extraHeaders) {
              if (this._opts.extraHeaders.hasOwnProperty(i)) {
                xhr.setRequestHeader(i, this._opts.extraHeaders[i]);
              }
            }
          }
        } catch (e) {
        }
        if ("POST" === this._method) {
          try {
            xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
          } catch (e) {
          }
        }
        try {
          xhr.setRequestHeader("Accept", "*/*");
        } catch (e) {
        }
        (_a2 = this._opts.cookieJar) === null || _a2 === void 0 ? void 0 : _a2.addCookies(xhr);
        if ("withCredentials" in xhr) {
          xhr.withCredentials = this._opts.withCredentials;
        }
        if (this._opts.requestTimeout) {
          xhr.timeout = this._opts.requestTimeout;
        }
        xhr.onreadystatechange = () => {
          var _a3;
          if (xhr.readyState === 3) {
            (_a3 = this._opts.cookieJar) === null || _a3 === void 0 ? void 0 : _a3.parseCookies(
              // @ts-ignore
              xhr.getResponseHeader("set-cookie")
            );
          }
          if (4 !== xhr.readyState) return;
          if (200 === xhr.status || 1223 === xhr.status) {
            this._onLoad();
          } else {
            this.setTimeoutFn(() => {
              this._onError(typeof xhr.status === "number" ? xhr.status : 0);
            }, 0);
          }
        };
        xhr.send(this._data);
      } catch (e) {
        this.setTimeoutFn(() => {
          this._onError(e);
        }, 0);
        return;
      }
      if (typeof document !== "undefined") {
        this._index = _Request.requestsCount++;
        _Request.requests[this._index] = this;
      }
    }
    /**
     * Called upon error.
     *
     * @private
     */
    _onError(err) {
      this.emitReserved("error", err, this._xhr);
      this._cleanup(true);
    }
    /**
     * Cleans up house.
     *
     * @private
     */
    _cleanup(fromError) {
      if ("undefined" === typeof this._xhr || null === this._xhr) {
        return;
      }
      this._xhr.onreadystatechange = empty;
      if (fromError) {
        try {
          this._xhr.abort();
        } catch (e) {
        }
      }
      if (typeof document !== "undefined") {
        delete _Request.requests[this._index];
      }
      this._xhr = null;
    }
    /**
     * Called upon load.
     *
     * @private
     */
    _onLoad() {
      const data = this._xhr.responseText;
      if (data !== null) {
        this.emitReserved("data", data);
        this.emitReserved("success");
        this._cleanup();
      }
    }
    /**
     * Aborts the request.
     *
     * @package
     */
    abort() {
      this._cleanup();
    }
  };
  __name(_Request, "Request");
  var Request = _Request;
  Request.requestsCount = 0;
  Request.requests = {};
  if (typeof document !== "undefined") {
    if (typeof attachEvent === "function") {
      attachEvent("onunload", unloadHandler);
    } else if (typeof addEventListener === "function") {
      const terminationEvent = "onpagehide" in globalThisShim ? "pagehide" : "unload";
      addEventListener(terminationEvent, unloadHandler, false);
    }
  }
  function unloadHandler() {
    for (let i in Request.requests) {
      if (Request.requests.hasOwnProperty(i)) {
        Request.requests[i].abort();
      }
    }
  }
  __name(unloadHandler, "unloadHandler");
  var hasXHR2 = function() {
    const xhr = newRequest({
      xdomain: false
    });
    return xhr && xhr.responseType !== null;
  }();
  var _XHR = class _XHR extends BaseXHR {
    constructor(opts) {
      super(opts);
      const forceBase64 = opts && opts.forceBase64;
      this.supportsBinary = hasXHR2 && !forceBase64;
    }
    request(opts = {}) {
      Object.assign(opts, {
        xd: this.xd
      }, this.opts);
      return new Request(newRequest, this.uri(), opts);
    }
  };
  __name(_XHR, "XHR");
  var XHR = _XHR;
  function newRequest(opts) {
    const xdomain = opts.xdomain;
    try {
      if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
        return new XMLHttpRequest();
      }
    } catch (e) {
    }
    if (!xdomain) {
      try {
        return new globalThisShim[[
          "Active"
        ].concat("Object").join("X")]("Microsoft.XMLHTTP");
      } catch (e) {
      }
    }
  }
  __name(newRequest, "newRequest");

  // node_modules/.pnpm/engine.io-client@6.6.1/node_modules/engine.io-client/build/esm/transports/websocket.js
  var isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
  var _BaseWS = class _BaseWS extends Transport {
    get name() {
      return "websocket";
    }
    doOpen() {
      const uri = this.uri();
      const protocols = this.opts.protocols;
      const opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
      if (this.opts.extraHeaders) {
        opts.headers = this.opts.extraHeaders;
      }
      try {
        this.ws = this.createSocket(uri, protocols, opts);
      } catch (err) {
        return this.emitReserved("error", err);
      }
      this.ws.binaryType = this.socket.binaryType;
      this.addEventListeners();
    }
    /**
     * Adds event listeners to the socket
     *
     * @private
     */
    addEventListeners() {
      this.ws.onopen = () => {
        if (this.opts.autoUnref) {
          this.ws._socket.unref();
        }
        this.onOpen();
      };
      this.ws.onclose = (closeEvent) => this.onClose({
        description: "websocket connection closed",
        context: closeEvent
      });
      this.ws.onmessage = (ev) => this.onData(ev.data);
      this.ws.onerror = (e) => this.onError("websocket error", e);
    }
    write(packets) {
      this.writable = false;
      for (let i = 0; i < packets.length; i++) {
        const packet = packets[i];
        const lastPacket = i === packets.length - 1;
        encodePacket(packet, this.supportsBinary, (data) => {
          try {
            this.doWrite(packet, data);
          } catch (e) {
          }
          if (lastPacket) {
            nextTick(() => {
              this.writable = true;
              this.emitReserved("drain");
            }, this.setTimeoutFn);
          }
        });
      }
    }
    doClose() {
      if (typeof this.ws !== "undefined") {
        this.ws.close();
        this.ws = null;
      }
    }
    /**
     * Generates uri for connection.
     *
     * @private
     */
    uri() {
      const schema = this.opts.secure ? "wss" : "ws";
      const query = this.query || {};
      if (this.opts.timestampRequests) {
        query[this.opts.timestampParam] = randomString();
      }
      if (!this.supportsBinary) {
        query.b64 = 1;
      }
      return this.createUri(schema, query);
    }
  };
  __name(_BaseWS, "BaseWS");
  var BaseWS = _BaseWS;
  var WebSocketCtor = globalThisShim.WebSocket || globalThisShim.MozWebSocket;
  var _WS = class _WS extends BaseWS {
    createSocket(uri, protocols, opts) {
      return !isReactNative ? protocols ? new WebSocketCtor(uri, protocols) : new WebSocketCtor(uri) : new WebSocketCtor(uri, protocols, opts);
    }
    doWrite(_packet, data) {
      this.ws.send(data);
    }
  };
  __name(_WS, "WS");
  var WS = _WS;

  // node_modules/.pnpm/engine.io-client@6.6.1/node_modules/engine.io-client/build/esm/transports/webtransport.js
  var _WT = class _WT extends Transport {
    get name() {
      return "webtransport";
    }
    doOpen() {
      try {
        this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
      } catch (err) {
        return this.emitReserved("error", err);
      }
      this._transport.closed.then(() => {
        this.onClose();
      }).catch((err) => {
        this.onError("webtransport error", err);
      });
      this._transport.ready.then(() => {
        this._transport.createBidirectionalStream().then((stream) => {
          const decoderStream = createPacketDecoderStream(Number.MAX_SAFE_INTEGER, this.socket.binaryType);
          const reader = stream.readable.pipeThrough(decoderStream).getReader();
          const encoderStream = createPacketEncoderStream();
          encoderStream.readable.pipeTo(stream.writable);
          this._writer = encoderStream.writable.getWriter();
          const read = /* @__PURE__ */ __name(() => {
            reader.read().then(({ done, value: value2 }) => {
              if (done) {
                return;
              }
              this.onPacket(value2);
              read();
            }).catch((err) => {
            });
          }, "read");
          read();
          const packet = {
            type: "open"
          };
          if (this.query.sid) {
            packet.data = `{"sid":"${this.query.sid}"}`;
          }
          this._writer.write(packet).then(() => this.onOpen());
        });
      });
    }
    write(packets) {
      this.writable = false;
      for (let i = 0; i < packets.length; i++) {
        const packet = packets[i];
        const lastPacket = i === packets.length - 1;
        this._writer.write(packet).then(() => {
          if (lastPacket) {
            nextTick(() => {
              this.writable = true;
              this.emitReserved("drain");
            }, this.setTimeoutFn);
          }
        });
      }
    }
    doClose() {
      var _a2;
      (_a2 = this._transport) === null || _a2 === void 0 ? void 0 : _a2.close();
    }
  };
  __name(_WT, "WT");
  var WT = _WT;

  // node_modules/.pnpm/engine.io-client@6.6.1/node_modules/engine.io-client/build/esm/transports/index.js
  var transports = {
    websocket: WS,
    webtransport: WT,
    polling: XHR
  };

  // node_modules/.pnpm/engine.io-client@6.6.1/node_modules/engine.io-client/build/esm/contrib/parseuri.js
  var re = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
  var parts = [
    "source",
    "protocol",
    "authority",
    "userInfo",
    "user",
    "password",
    "host",
    "port",
    "relative",
    "path",
    "directory",
    "file",
    "query",
    "anchor"
  ];
  function parse(str) {
    if (str.length > 8e3) {
      throw "URI too long";
    }
    const src = str, b = str.indexOf("["), e = str.indexOf("]");
    if (b != -1 && e != -1) {
      str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ";") + str.substring(e, str.length);
    }
    let m = re.exec(str || ""), uri = {}, i = 14;
    while (i--) {
      uri[parts[i]] = m[i] || "";
    }
    if (b != -1 && e != -1) {
      uri.source = src;
      uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ":");
      uri.authority = uri.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
      uri.ipv6uri = true;
    }
    uri.pathNames = pathNames(uri, uri["path"]);
    uri.queryKey = queryKey(uri, uri["query"]);
    return uri;
  }
  __name(parse, "parse");
  function pathNames(obj, path) {
    const regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
    if (path.slice(0, 1) == "/" || path.length === 0) {
      names.splice(0, 1);
    }
    if (path.slice(-1) == "/") {
      names.splice(names.length - 1, 1);
    }
    return names;
  }
  __name(pathNames, "pathNames");
  function queryKey(uri, query) {
    const data = {};
    query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function($0, $1, $2) {
      if ($1) {
        data[$1] = $2;
      }
    });
    return data;
  }
  __name(queryKey, "queryKey");

  // node_modules/.pnpm/engine.io-client@6.6.1/node_modules/engine.io-client/build/esm/socket.js
  var withEventListeners = typeof addEventListener === "function" && typeof removeEventListener === "function";
  var OFFLINE_EVENT_LISTENERS = [];
  if (withEventListeners) {
    addEventListener("offline", () => {
      OFFLINE_EVENT_LISTENERS.forEach((listener) => listener());
    }, false);
  }
  var _SocketWithoutUpgrade = class _SocketWithoutUpgrade extends Emitter {
    /**
     * Socket constructor.
     *
     * @param {String|Object} uri - uri or options
     * @param {Object} opts - options
     */
    constructor(uri, opts) {
      super();
      this.binaryType = defaultBinaryType;
      this.writeBuffer = [];
      this._prevBufferLen = 0;
      this._pingInterval = -1;
      this._pingTimeout = -1;
      this._maxPayload = -1;
      this._pingTimeoutTime = Infinity;
      if (uri && "object" === typeof uri) {
        opts = uri;
        uri = null;
      }
      if (uri) {
        const parsedUri = parse(uri);
        opts.hostname = parsedUri.host;
        opts.secure = parsedUri.protocol === "https" || parsedUri.protocol === "wss";
        opts.port = parsedUri.port;
        if (parsedUri.query) opts.query = parsedUri.query;
      } else if (opts.host) {
        opts.hostname = parse(opts.host).host;
      }
      installTimerFunctions(this, opts);
      this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
      if (opts.hostname && !opts.port) {
        opts.port = this.secure ? "443" : "80";
      }
      this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
      this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
      this.transports = [];
      this._transportsByName = {};
      opts.transports.forEach((t) => {
        const transportName = t.prototype.name;
        this.transports.push(transportName);
        this._transportsByName[transportName] = t;
      });
      this.opts = Object.assign({
        path: "/engine.io",
        agent: false,
        withCredentials: false,
        upgrade: true,
        timestampParam: "t",
        rememberUpgrade: false,
        addTrailingSlash: true,
        rejectUnauthorized: true,
        perMessageDeflate: {
          threshold: 1024
        },
        transportOptions: {},
        closeOnBeforeunload: false
      }, opts);
      this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : "");
      if (typeof this.opts.query === "string") {
        this.opts.query = decode2(this.opts.query);
      }
      if (withEventListeners) {
        if (this.opts.closeOnBeforeunload) {
          this._beforeunloadEventListener = () => {
            if (this.transport) {
              this.transport.removeAllListeners();
              this.transport.close();
            }
          };
          addEventListener("beforeunload", this._beforeunloadEventListener, false);
        }
        if (this.hostname !== "localhost") {
          this._offlineEventListener = () => {
            this._onClose("transport close", {
              description: "network connection lost"
            });
          };
          OFFLINE_EVENT_LISTENERS.push(this._offlineEventListener);
        }
      }
      if (this.opts.withCredentials) {
        this._cookieJar = createCookieJar();
      }
      this._open();
    }
    /**
     * Creates transport of the given type.
     *
     * @param {String} name - transport name
     * @return {Transport}
     * @private
     */
    createTransport(name) {
      const query = Object.assign({}, this.opts.query);
      query.EIO = protocol;
      query.transport = name;
      if (this.id) query.sid = this.id;
      const opts = Object.assign({}, this.opts, {
        query,
        socket: this,
        hostname: this.hostname,
        secure: this.secure,
        port: this.port
      }, this.opts.transportOptions[name]);
      return new this._transportsByName[name](opts);
    }
    /**
     * Initializes transport to use and starts probe.
     *
     * @private
     */
    _open() {
      if (this.transports.length === 0) {
        this.setTimeoutFn(() => {
          this.emitReserved("error", "No transports available");
        }, 0);
        return;
      }
      const transportName = this.opts.rememberUpgrade && _SocketWithoutUpgrade.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
      this.readyState = "opening";
      const transport = this.createTransport(transportName);
      transport.open();
      this.setTransport(transport);
    }
    /**
     * Sets the current transport. Disables the existing one (if any).
     *
     * @private
     */
    setTransport(transport) {
      if (this.transport) {
        this.transport.removeAllListeners();
      }
      this.transport = transport;
      transport.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (reason) => this._onClose("transport close", reason));
    }
    /**
     * Called when connection is deemed open.
     *
     * @private
     */
    onOpen() {
      this.readyState = "open";
      _SocketWithoutUpgrade.priorWebsocketSuccess = "websocket" === this.transport.name;
      this.emitReserved("open");
      this.flush();
    }
    /**
     * Handles a packet.
     *
     * @private
     */
    _onPacket(packet) {
      if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
        this.emitReserved("packet", packet);
        this.emitReserved("heartbeat");
        switch (packet.type) {
          case "open":
            this.onHandshake(JSON.parse(packet.data));
            break;
          case "ping":
            this._sendPacket("pong");
            this.emitReserved("ping");
            this.emitReserved("pong");
            this._resetPingTimeout();
            break;
          case "error":
            const err = new Error("server error");
            err.code = packet.data;
            this._onError(err);
            break;
          case "message":
            this.emitReserved("data", packet.data);
            this.emitReserved("message", packet.data);
            break;
        }
      } else {
      }
    }
    /**
     * Called upon handshake completion.
     *
     * @param {Object} data - handshake obj
     * @private
     */
    onHandshake(data) {
      this.emitReserved("handshake", data);
      this.id = data.sid;
      this.transport.query.sid = data.sid;
      this._pingInterval = data.pingInterval;
      this._pingTimeout = data.pingTimeout;
      this._maxPayload = data.maxPayload;
      this.onOpen();
      if ("closed" === this.readyState) return;
      this._resetPingTimeout();
    }
    /**
     * Sets and resets ping timeout timer based on server pings.
     *
     * @private
     */
    _resetPingTimeout() {
      this.clearTimeoutFn(this._pingTimeoutTimer);
      const delay = this._pingInterval + this._pingTimeout;
      this._pingTimeoutTime = Date.now() + delay;
      this._pingTimeoutTimer = this.setTimeoutFn(() => {
        this._onClose("ping timeout");
      }, delay);
      if (this.opts.autoUnref) {
        this._pingTimeoutTimer.unref();
      }
    }
    /**
     * Called on `drain` event
     *
     * @private
     */
    _onDrain() {
      this.writeBuffer.splice(0, this._prevBufferLen);
      this._prevBufferLen = 0;
      if (0 === this.writeBuffer.length) {
        this.emitReserved("drain");
      } else {
        this.flush();
      }
    }
    /**
     * Flush write buffers.
     *
     * @private
     */
    flush() {
      if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
        const packets = this._getWritablePackets();
        this.transport.send(packets);
        this._prevBufferLen = packets.length;
        this.emitReserved("flush");
      }
    }
    /**
     * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
     * long-polling)
     *
     * @private
     */
    _getWritablePackets() {
      const shouldCheckPayloadSize = this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
      if (!shouldCheckPayloadSize) {
        return this.writeBuffer;
      }
      let payloadSize = 1;
      for (let i = 0; i < this.writeBuffer.length; i++) {
        const data = this.writeBuffer[i].data;
        if (data) {
          payloadSize += byteLength(data);
        }
        if (i > 0 && payloadSize > this._maxPayload) {
          return this.writeBuffer.slice(0, i);
        }
        payloadSize += 2;
      }
      return this.writeBuffer;
    }
    /**
     * Checks whether the heartbeat timer has expired but the socket has not yet been notified.
     *
     * Note: this method is private for now because it does not really fit the WebSocket API, but if we put it in the
     * `write()` method then the message would not be buffered by the Socket.IO client.
     *
     * @return {boolean}
     * @private
     */
    /* private */
    _hasPingExpired() {
      if (!this._pingTimeoutTime) return true;
      const hasExpired = Date.now() > this._pingTimeoutTime;
      if (hasExpired) {
        this._pingTimeoutTime = 0;
        nextTick(() => {
          this._onClose("ping timeout");
        }, this.setTimeoutFn);
      }
      return hasExpired;
    }
    /**
     * Sends a message.
     *
     * @param {String} msg - message.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @return {Socket} for chaining.
     */
    write(msg, options, fn) {
      this._sendPacket("message", msg, options, fn);
      return this;
    }
    /**
     * Sends a message. Alias of {@link Socket#write}.
     *
     * @param {String} msg - message.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @return {Socket} for chaining.
     */
    send(msg, options, fn) {
      this._sendPacket("message", msg, options, fn);
      return this;
    }
    /**
     * Sends a packet.
     *
     * @param {String} type: packet type.
     * @param {String} data.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @private
     */
    _sendPacket(type, data, options, fn) {
      if ("function" === typeof data) {
        fn = data;
        data = void 0;
      }
      if ("function" === typeof options) {
        fn = options;
        options = null;
      }
      if ("closing" === this.readyState || "closed" === this.readyState) {
        return;
      }
      options = options || {};
      options.compress = false !== options.compress;
      const packet = {
        type,
        data,
        options
      };
      this.emitReserved("packetCreate", packet);
      this.writeBuffer.push(packet);
      if (fn) this.once("flush", fn);
      this.flush();
    }
    /**
     * Closes the connection.
     */
    close() {
      const close = /* @__PURE__ */ __name(() => {
        this._onClose("forced close");
        this.transport.close();
      }, "close");
      const cleanupAndClose = /* @__PURE__ */ __name(() => {
        this.off("upgrade", cleanupAndClose);
        this.off("upgradeError", cleanupAndClose);
        close();
      }, "cleanupAndClose");
      const waitForUpgrade = /* @__PURE__ */ __name(() => {
        this.once("upgrade", cleanupAndClose);
        this.once("upgradeError", cleanupAndClose);
      }, "waitForUpgrade");
      if ("opening" === this.readyState || "open" === this.readyState) {
        this.readyState = "closing";
        if (this.writeBuffer.length) {
          this.once("drain", () => {
            if (this.upgrading) {
              waitForUpgrade();
            } else {
              close();
            }
          });
        } else if (this.upgrading) {
          waitForUpgrade();
        } else {
          close();
        }
      }
      return this;
    }
    /**
     * Called upon transport error
     *
     * @private
     */
    _onError(err) {
      _SocketWithoutUpgrade.priorWebsocketSuccess = false;
      if (this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening") {
        this.transports.shift();
        return this._open();
      }
      this.emitReserved("error", err);
      this._onClose("transport error", err);
    }
    /**
     * Called upon transport close.
     *
     * @private
     */
    _onClose(reason, description) {
      if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
        this.clearTimeoutFn(this._pingTimeoutTimer);
        this.transport.removeAllListeners("close");
        this.transport.close();
        this.transport.removeAllListeners();
        if (withEventListeners) {
          if (this._beforeunloadEventListener) {
            removeEventListener("beforeunload", this._beforeunloadEventListener, false);
          }
          if (this._offlineEventListener) {
            const i = OFFLINE_EVENT_LISTENERS.indexOf(this._offlineEventListener);
            if (i !== -1) {
              OFFLINE_EVENT_LISTENERS.splice(i, 1);
            }
          }
        }
        this.readyState = "closed";
        this.id = null;
        this.emitReserved("close", reason, description);
        this.writeBuffer = [];
        this._prevBufferLen = 0;
      }
    }
  };
  __name(_SocketWithoutUpgrade, "SocketWithoutUpgrade");
  var SocketWithoutUpgrade = _SocketWithoutUpgrade;
  SocketWithoutUpgrade.protocol = protocol;
  var _SocketWithUpgrade = class _SocketWithUpgrade extends SocketWithoutUpgrade {
    constructor() {
      super(...arguments);
      this._upgrades = [];
    }
    onOpen() {
      super.onOpen();
      if ("open" === this.readyState && this.opts.upgrade) {
        for (let i = 0; i < this._upgrades.length; i++) {
          this._probe(this._upgrades[i]);
        }
      }
    }
    /**
     * Probes a transport.
     *
     * @param {String} name - transport name
     * @private
     */
    _probe(name) {
      let transport = this.createTransport(name);
      let failed = false;
      SocketWithoutUpgrade.priorWebsocketSuccess = false;
      const onTransportOpen = /* @__PURE__ */ __name(() => {
        if (failed) return;
        transport.send([
          {
            type: "ping",
            data: "probe"
          }
        ]);
        transport.once("packet", (msg) => {
          if (failed) return;
          if ("pong" === msg.type && "probe" === msg.data) {
            this.upgrading = true;
            this.emitReserved("upgrading", transport);
            if (!transport) return;
            SocketWithoutUpgrade.priorWebsocketSuccess = "websocket" === transport.name;
            this.transport.pause(() => {
              if (failed) return;
              if ("closed" === this.readyState) return;
              cleanup();
              this.setTransport(transport);
              transport.send([
                {
                  type: "upgrade"
                }
              ]);
              this.emitReserved("upgrade", transport);
              transport = null;
              this.upgrading = false;
              this.flush();
            });
          } else {
            const err = new Error("probe error");
            err.transport = transport.name;
            this.emitReserved("upgradeError", err);
          }
        });
      }, "onTransportOpen");
      function freezeTransport() {
        if (failed) return;
        failed = true;
        cleanup();
        transport.close();
        transport = null;
      }
      __name(freezeTransport, "freezeTransport");
      const onerror = /* @__PURE__ */ __name((err) => {
        const error = new Error("probe error: " + err);
        error.transport = transport.name;
        freezeTransport();
        this.emitReserved("upgradeError", error);
      }, "onerror");
      function onTransportClose() {
        onerror("transport closed");
      }
      __name(onTransportClose, "onTransportClose");
      function onclose() {
        onerror("socket closed");
      }
      __name(onclose, "onclose");
      function onupgrade(to) {
        if (transport && to.name !== transport.name) {
          freezeTransport();
        }
      }
      __name(onupgrade, "onupgrade");
      const cleanup = /* @__PURE__ */ __name(() => {
        transport.removeListener("open", onTransportOpen);
        transport.removeListener("error", onerror);
        transport.removeListener("close", onTransportClose);
        this.off("close", onclose);
        this.off("upgrading", onupgrade);
      }, "cleanup");
      transport.once("open", onTransportOpen);
      transport.once("error", onerror);
      transport.once("close", onTransportClose);
      this.once("close", onclose);
      this.once("upgrading", onupgrade);
      if (this._upgrades.indexOf("webtransport") !== -1 && name !== "webtransport") {
        this.setTimeoutFn(() => {
          if (!failed) {
            transport.open();
          }
        }, 200);
      } else {
        transport.open();
      }
    }
    onHandshake(data) {
      this._upgrades = this._filterUpgrades(data.upgrades);
      super.onHandshake(data);
    }
    /**
     * Filters upgrades, returning only those matching client transports.
     *
     * @param {Array} upgrades - server upgrades
     * @private
     */
    _filterUpgrades(upgrades) {
      const filteredUpgrades = [];
      for (let i = 0; i < upgrades.length; i++) {
        if (~this.transports.indexOf(upgrades[i])) filteredUpgrades.push(upgrades[i]);
      }
      return filteredUpgrades;
    }
  };
  __name(_SocketWithUpgrade, "SocketWithUpgrade");
  var SocketWithUpgrade = _SocketWithUpgrade;
  var _Socket = class _Socket extends SocketWithUpgrade {
    constructor(uri, opts = {}) {
      const o = typeof uri === "object" ? uri : opts;
      if (!o.transports || o.transports && typeof o.transports[0] === "string") {
        o.transports = (o.transports || [
          "polling",
          "websocket",
          "webtransport"
        ]).map((transportName) => transports[transportName]).filter((t) => !!t);
      }
      super(uri, o);
    }
  };
  __name(_Socket, "Socket");
  var Socket = _Socket;

  // node_modules/.pnpm/engine.io-client@6.6.1/node_modules/engine.io-client/build/esm/index.js
  var protocol2 = Socket.protocol;

  // node_modules/.pnpm/socket.io-client@4.8.0/node_modules/socket.io-client/build/esm/url.js
  function url(uri, path = "", loc) {
    let obj = uri;
    loc = loc || typeof location !== "undefined" && location;
    if (null == uri) uri = loc.protocol + "//" + loc.host;
    if (typeof uri === "string") {
      if ("/" === uri.charAt(0)) {
        if ("/" === uri.charAt(1)) {
          uri = loc.protocol + uri;
        } else {
          uri = loc.host + uri;
        }
      }
      if (!/^(https?|wss?):\/\//.test(uri)) {
        if ("undefined" !== typeof loc) {
          uri = loc.protocol + "//" + uri;
        } else {
          uri = "https://" + uri;
        }
      }
      obj = parse(uri);
    }
    if (!obj.port) {
      if (/^(http|ws)$/.test(obj.protocol)) {
        obj.port = "80";
      } else if (/^(http|ws)s$/.test(obj.protocol)) {
        obj.port = "443";
      }
    }
    obj.path = obj.path || "/";
    const ipv6 = obj.host.indexOf(":") !== -1;
    const host = ipv6 ? "[" + obj.host + "]" : obj.host;
    obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
    obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
    return obj;
  }
  __name(url, "url");

  // node_modules/.pnpm/socket.io-parser@4.2.4/node_modules/socket.io-parser/build/esm/index.js
  var esm_exports = {};
  __export(esm_exports, {
    Decoder: () => Decoder,
    Encoder: () => Encoder,
    PacketType: () => PacketType,
    protocol: () => protocol3
  });

  // node_modules/.pnpm/socket.io-parser@4.2.4/node_modules/socket.io-parser/build/esm/is-binary.js
  var withNativeArrayBuffer3 = typeof ArrayBuffer === "function";
  var isView2 = /* @__PURE__ */ __name((obj) => {
    return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
  }, "isView");
  var toString = Object.prototype.toString;
  var withNativeBlob2 = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
  var withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
  function isBinary(obj) {
    return withNativeArrayBuffer3 && (obj instanceof ArrayBuffer || isView2(obj)) || withNativeBlob2 && obj instanceof Blob || withNativeFile && obj instanceof File;
  }
  __name(isBinary, "isBinary");
  function hasBinary(obj, toJSON) {
    if (!obj || typeof obj !== "object") {
      return false;
    }
    if (Array.isArray(obj)) {
      for (let i = 0, l = obj.length; i < l; i++) {
        if (hasBinary(obj[i])) {
          return true;
        }
      }
      return false;
    }
    if (isBinary(obj)) {
      return true;
    }
    if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
      return hasBinary(obj.toJSON(), true);
    }
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
        return true;
      }
    }
    return false;
  }
  __name(hasBinary, "hasBinary");

  // node_modules/.pnpm/socket.io-parser@4.2.4/node_modules/socket.io-parser/build/esm/binary.js
  function deconstructPacket(packet) {
    const buffers = [];
    const packetData = packet.data;
    const pack = packet;
    pack.data = _deconstructPacket(packetData, buffers);
    pack.attachments = buffers.length;
    return {
      packet: pack,
      buffers
    };
  }
  __name(deconstructPacket, "deconstructPacket");
  function _deconstructPacket(data, buffers) {
    if (!data) return data;
    if (isBinary(data)) {
      const placeholder = {
        _placeholder: true,
        num: buffers.length
      };
      buffers.push(data);
      return placeholder;
    } else if (Array.isArray(data)) {
      const newData = new Array(data.length);
      for (let i = 0; i < data.length; i++) {
        newData[i] = _deconstructPacket(data[i], buffers);
      }
      return newData;
    } else if (typeof data === "object" && !(data instanceof Date)) {
      const newData = {};
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          newData[key] = _deconstructPacket(data[key], buffers);
        }
      }
      return newData;
    }
    return data;
  }
  __name(_deconstructPacket, "_deconstructPacket");
  function reconstructPacket(packet, buffers) {
    packet.data = _reconstructPacket(packet.data, buffers);
    delete packet.attachments;
    return packet;
  }
  __name(reconstructPacket, "reconstructPacket");
  function _reconstructPacket(data, buffers) {
    if (!data) return data;
    if (data && data._placeholder === true) {
      const isIndexValid = typeof data.num === "number" && data.num >= 0 && data.num < buffers.length;
      if (isIndexValid) {
        return buffers[data.num];
      } else {
        throw new Error("illegal attachments");
      }
    } else if (Array.isArray(data)) {
      for (let i = 0; i < data.length; i++) {
        data[i] = _reconstructPacket(data[i], buffers);
      }
    } else if (typeof data === "object") {
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          data[key] = _reconstructPacket(data[key], buffers);
        }
      }
    }
    return data;
  }
  __name(_reconstructPacket, "_reconstructPacket");

  // node_modules/.pnpm/socket.io-parser@4.2.4/node_modules/socket.io-parser/build/esm/index.js
  var RESERVED_EVENTS = [
    "connect",
    "connect_error",
    "disconnect",
    "disconnecting",
    "newListener",
    "removeListener"
  ];
  var protocol3 = 5;
  var PacketType;
  (function(PacketType2) {
    PacketType2[PacketType2["CONNECT"] = 0] = "CONNECT";
    PacketType2[PacketType2["DISCONNECT"] = 1] = "DISCONNECT";
    PacketType2[PacketType2["EVENT"] = 2] = "EVENT";
    PacketType2[PacketType2["ACK"] = 3] = "ACK";
    PacketType2[PacketType2["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
    PacketType2[PacketType2["BINARY_EVENT"] = 5] = "BINARY_EVENT";
    PacketType2[PacketType2["BINARY_ACK"] = 6] = "BINARY_ACK";
  })(PacketType || (PacketType = {}));
  var _Encoder = class _Encoder {
    /**
     * Encoder constructor
     *
     * @param {function} replacer - custom replacer to pass down to JSON.parse
     */
    constructor(replacer) {
      this.replacer = replacer;
    }
    /**
     * Encode a packet as a single string if non-binary, or as a
     * buffer sequence, depending on packet type.
     *
     * @param {Object} obj - packet object
     */
    encode(obj) {
      if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
        if (hasBinary(obj)) {
          return this.encodeAsBinary({
            type: obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK,
            nsp: obj.nsp,
            data: obj.data,
            id: obj.id
          });
        }
      }
      return [
        this.encodeAsString(obj)
      ];
    }
    /**
     * Encode packet as string.
     */
    encodeAsString(obj) {
      let str = "" + obj.type;
      if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
        str += obj.attachments + "-";
      }
      if (obj.nsp && "/" !== obj.nsp) {
        str += obj.nsp + ",";
      }
      if (null != obj.id) {
        str += obj.id;
      }
      if (null != obj.data) {
        str += JSON.stringify(obj.data, this.replacer);
      }
      return str;
    }
    /**
     * Encode packet as 'buffer sequence' by removing blobs, and
     * deconstructing packet into object with placeholders and
     * a list of buffers.
     */
    encodeAsBinary(obj) {
      const deconstruction = deconstructPacket(obj);
      const pack = this.encodeAsString(deconstruction.packet);
      const buffers = deconstruction.buffers;
      buffers.unshift(pack);
      return buffers;
    }
  };
  __name(_Encoder, "Encoder");
  var Encoder = _Encoder;
  function isObject(value2) {
    return Object.prototype.toString.call(value2) === "[object Object]";
  }
  __name(isObject, "isObject");
  var _Decoder = class _Decoder extends Emitter {
    /**
     * Decoder constructor
     *
     * @param {function} reviver - custom reviver to pass down to JSON.stringify
     */
    constructor(reviver) {
      super();
      this.reviver = reviver;
    }
    /**
     * Decodes an encoded packet string into packet JSON.
     *
     * @param {String} obj - encoded packet
     */
    add(obj) {
      let packet;
      if (typeof obj === "string") {
        if (this.reconstructor) {
          throw new Error("got plaintext data when reconstructing a packet");
        }
        packet = this.decodeString(obj);
        const isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
        if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
          packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
          this.reconstructor = new BinaryReconstructor(packet);
          if (packet.attachments === 0) {
            super.emitReserved("decoded", packet);
          }
        } else {
          super.emitReserved("decoded", packet);
        }
      } else if (isBinary(obj) || obj.base64) {
        if (!this.reconstructor) {
          throw new Error("got binary data when not reconstructing a packet");
        } else {
          packet = this.reconstructor.takeBinaryData(obj);
          if (packet) {
            this.reconstructor = null;
            super.emitReserved("decoded", packet);
          }
        }
      } else {
        throw new Error("Unknown type: " + obj);
      }
    }
    /**
     * Decode a packet String (JSON data)
     *
     * @param {String} str
     * @return {Object} packet
     */
    decodeString(str) {
      let i = 0;
      const p = {
        type: Number(str.charAt(0))
      };
      if (PacketType[p.type] === void 0) {
        throw new Error("unknown packet type " + p.type);
      }
      if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
        const start = i + 1;
        while (str.charAt(++i) !== "-" && i != str.length) {
        }
        const buf = str.substring(start, i);
        if (buf != Number(buf) || str.charAt(i) !== "-") {
          throw new Error("Illegal attachments");
        }
        p.attachments = Number(buf);
      }
      if ("/" === str.charAt(i + 1)) {
        const start = i + 1;
        while (++i) {
          const c = str.charAt(i);
          if ("," === c) break;
          if (i === str.length) break;
        }
        p.nsp = str.substring(start, i);
      } else {
        p.nsp = "/";
      }
      const next = str.charAt(i + 1);
      if ("" !== next && Number(next) == next) {
        const start = i + 1;
        while (++i) {
          const c = str.charAt(i);
          if (null == c || Number(c) != c) {
            --i;
            break;
          }
          if (i === str.length) break;
        }
        p.id = Number(str.substring(start, i + 1));
      }
      if (str.charAt(++i)) {
        const payload = this.tryParse(str.substr(i));
        if (_Decoder.isPayloadValid(p.type, payload)) {
          p.data = payload;
        } else {
          throw new Error("invalid payload");
        }
      }
      return p;
    }
    tryParse(str) {
      try {
        return JSON.parse(str, this.reviver);
      } catch (e) {
        return false;
      }
    }
    static isPayloadValid(type, payload) {
      switch (type) {
        case PacketType.CONNECT:
          return isObject(payload);
        case PacketType.DISCONNECT:
          return payload === void 0;
        case PacketType.CONNECT_ERROR:
          return typeof payload === "string" || isObject(payload);
        case PacketType.EVENT:
        case PacketType.BINARY_EVENT:
          return Array.isArray(payload) && (typeof payload[0] === "number" || typeof payload[0] === "string" && RESERVED_EVENTS.indexOf(payload[0]) === -1);
        case PacketType.ACK:
        case PacketType.BINARY_ACK:
          return Array.isArray(payload);
      }
    }
    /**
     * Deallocates a parser's resources
     */
    destroy() {
      if (this.reconstructor) {
        this.reconstructor.finishedReconstruction();
        this.reconstructor = null;
      }
    }
  };
  __name(_Decoder, "Decoder");
  var Decoder = _Decoder;
  var _a;
  var BinaryReconstructor = (_a = class {
    constructor(packet) {
      this.packet = packet;
      this.buffers = [];
      this.reconPack = packet;
    }
    /**
     * Method to be called when binary data received from connection
     * after a BINARY_EVENT packet.
     *
     * @param {Buffer | ArrayBuffer} binData - the raw binary data received
     * @return {null | Object} returns null if more binary data is expected or
     *   a reconstructed packet object if all buffers have been received.
     */
    takeBinaryData(binData) {
      this.buffers.push(binData);
      if (this.buffers.length === this.reconPack.attachments) {
        const packet = reconstructPacket(this.reconPack, this.buffers);
        this.finishedReconstruction();
        return packet;
      }
      return null;
    }
    /**
     * Cleans up binary packet reconstruction variables.
     */
    finishedReconstruction() {
      this.reconPack = null;
      this.buffers = [];
    }
  }, __name(_a, "BinaryReconstructor"), _a);

  // node_modules/.pnpm/socket.io-client@4.8.0/node_modules/socket.io-client/build/esm/on.js
  function on(obj, ev, fn) {
    obj.on(ev, fn);
    return /* @__PURE__ */ __name(function subDestroy() {
      obj.off(ev, fn);
    }, "subDestroy");
  }
  __name(on, "on");

  // node_modules/.pnpm/socket.io-client@4.8.0/node_modules/socket.io-client/build/esm/socket.js
  var RESERVED_EVENTS2 = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
    newListener: 1,
    removeListener: 1
  });
  var _Socket2 = class _Socket2 extends Emitter {
    /**
     * `Socket` constructor.
     */
    constructor(io, nsp, opts) {
      super();
      this.connected = false;
      this.recovered = false;
      this.receiveBuffer = [];
      this.sendBuffer = [];
      this._queue = [];
      this._queueSeq = 0;
      this.ids = 0;
      this.acks = {};
      this.flags = {};
      this.io = io;
      this.nsp = nsp;
      if (opts && opts.auth) {
        this.auth = opts.auth;
      }
      this._opts = Object.assign({}, opts);
      if (this.io._autoConnect) this.open();
    }
    /**
     * Whether the socket is currently disconnected
     *
     * @example
     * const socket = io();
     *
     * socket.on("connect", () => {
     *   console.log(socket.disconnected); // false
     * });
     *
     * socket.on("disconnect", () => {
     *   console.log(socket.disconnected); // true
     * });
     */
    get disconnected() {
      return !this.connected;
    }
    /**
     * Subscribe to open, close and packet events
     *
     * @private
     */
    subEvents() {
      if (this.subs) return;
      const io = this.io;
      this.subs = [
        on(io, "open", this.onopen.bind(this)),
        on(io, "packet", this.onpacket.bind(this)),
        on(io, "error", this.onerror.bind(this)),
        on(io, "close", this.onclose.bind(this))
      ];
    }
    /**
     * Whether the Socket will try to reconnect when its Manager connects or reconnects.
     *
     * @example
     * const socket = io();
     *
     * console.log(socket.active); // true
     *
     * socket.on("disconnect", (reason) => {
     *   if (reason === "io server disconnect") {
     *     // the disconnection was initiated by the server, you need to manually reconnect
     *     console.log(socket.active); // false
     *   }
     *   // else the socket will automatically try to reconnect
     *   console.log(socket.active); // true
     * });
     */
    get active() {
      return !!this.subs;
    }
    /**
     * "Opens" the socket.
     *
     * @example
     * const socket = io({
     *   autoConnect: false
     * });
     *
     * socket.connect();
     */
    connect() {
      if (this.connected) return this;
      this.subEvents();
      if (!this.io["_reconnecting"]) this.io.open();
      if ("open" === this.io._readyState) this.onopen();
      return this;
    }
    /**
     * Alias for {@link connect()}.
     */
    open() {
      return this.connect();
    }
    /**
     * Sends a `message` event.
     *
     * This method mimics the WebSocket.send() method.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
     *
     * @example
     * socket.send("hello");
     *
     * // this is equivalent to
     * socket.emit("message", "hello");
     *
     * @return self
     */
    send(...args) {
      args.unshift("message");
      this.emit.apply(this, args);
      return this;
    }
    /**
     * Override `emit`.
     * If the event is in `events`, it's emitted normally.
     *
     * @example
     * socket.emit("hello", "world");
     *
     * // all serializable datastructures are supported (no need to call JSON.stringify)
     * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
     *
     * // with an acknowledgement from the server
     * socket.emit("hello", "world", (val) => {
     *   // ...
     * });
     *
     * @return self
     */
    emit(ev, ...args) {
      var _a2, _b, _c;
      if (RESERVED_EVENTS2.hasOwnProperty(ev)) {
        throw new Error('"' + ev.toString() + '" is a reserved event name');
      }
      args.unshift(ev);
      if (this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) {
        this._addToQueue(args);
        return this;
      }
      const packet = {
        type: PacketType.EVENT,
        data: args
      };
      packet.options = {};
      packet.options.compress = this.flags.compress !== false;
      if ("function" === typeof args[args.length - 1]) {
        const id = this.ids++;
        const ack = args.pop();
        this._registerAckCallback(id, ack);
        packet.id = id;
      }
      const isTransportWritable = (_b = (_a2 = this.io.engine) === null || _a2 === void 0 ? void 0 : _a2.transport) === null || _b === void 0 ? void 0 : _b.writable;
      const isConnected = this.connected && !((_c = this.io.engine) === null || _c === void 0 ? void 0 : _c._hasPingExpired());
      const discardPacket = this.flags.volatile && !isTransportWritable;
      if (discardPacket) {
      } else if (isConnected) {
        this.notifyOutgoingListeners(packet);
        this.packet(packet);
      } else {
        this.sendBuffer.push(packet);
      }
      this.flags = {};
      return this;
    }
    /**
     * @private
     */
    _registerAckCallback(id, ack) {
      var _a2;
      const timeout = (_a2 = this.flags.timeout) !== null && _a2 !== void 0 ? _a2 : this._opts.ackTimeout;
      if (timeout === void 0) {
        this.acks[id] = ack;
        return;
      }
      const timer = this.io.setTimeoutFn(() => {
        delete this.acks[id];
        for (let i = 0; i < this.sendBuffer.length; i++) {
          if (this.sendBuffer[i].id === id) {
            this.sendBuffer.splice(i, 1);
          }
        }
        ack.call(this, new Error("operation has timed out"));
      }, timeout);
      const fn = /* @__PURE__ */ __name((...args) => {
        this.io.clearTimeoutFn(timer);
        ack.apply(this, args);
      }, "fn");
      fn.withError = true;
      this.acks[id] = fn;
    }
    /**
     * Emits an event and waits for an acknowledgement
     *
     * @example
     * // without timeout
     * const response = await socket.emitWithAck("hello", "world");
     *
     * // with a specific timeout
     * try {
     *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
     * } catch (err) {
     *   // the server did not acknowledge the event in the given delay
     * }
     *
     * @return a Promise that will be fulfilled when the server acknowledges the event
     */
    emitWithAck(ev, ...args) {
      return new Promise((resolve, reject) => {
        const fn = /* @__PURE__ */ __name((arg1, arg2) => {
          return arg1 ? reject(arg1) : resolve(arg2);
        }, "fn");
        fn.withError = true;
        args.push(fn);
        this.emit(ev, ...args);
      });
    }
    /**
     * Add the packet to the queue.
     * @param args
     * @private
     */
    _addToQueue(args) {
      let ack;
      if (typeof args[args.length - 1] === "function") {
        ack = args.pop();
      }
      const packet = {
        id: this._queueSeq++,
        tryCount: 0,
        pending: false,
        args,
        flags: Object.assign({
          fromQueue: true
        }, this.flags)
      };
      args.push((err, ...responseArgs) => {
        if (packet !== this._queue[0]) {
          return;
        }
        const hasError = err !== null;
        if (hasError) {
          if (packet.tryCount > this._opts.retries) {
            this._queue.shift();
            if (ack) {
              ack(err);
            }
          }
        } else {
          this._queue.shift();
          if (ack) {
            ack(null, ...responseArgs);
          }
        }
        packet.pending = false;
        return this._drainQueue();
      });
      this._queue.push(packet);
      this._drainQueue();
    }
    /**
     * Send the first packet of the queue, and wait for an acknowledgement from the server.
     * @param force - whether to resend a packet that has not been acknowledged yet
     *
     * @private
     */
    _drainQueue(force = false) {
      if (!this.connected || this._queue.length === 0) {
        return;
      }
      const packet = this._queue[0];
      if (packet.pending && !force) {
        return;
      }
      packet.pending = true;
      packet.tryCount++;
      this.flags = packet.flags;
      this.emit.apply(this, packet.args);
    }
    /**
     * Sends a packet.
     *
     * @param packet
     * @private
     */
    packet(packet) {
      packet.nsp = this.nsp;
      this.io._packet(packet);
    }
    /**
     * Called upon engine `open`.
     *
     * @private
     */
    onopen() {
      if (typeof this.auth == "function") {
        this.auth((data) => {
          this._sendConnectPacket(data);
        });
      } else {
        this._sendConnectPacket(this.auth);
      }
    }
    /**
     * Sends a CONNECT packet to initiate the Socket.IO session.
     *
     * @param data
     * @private
     */
    _sendConnectPacket(data) {
      this.packet({
        type: PacketType.CONNECT,
        data: this._pid ? Object.assign({
          pid: this._pid,
          offset: this._lastOffset
        }, data) : data
      });
    }
    /**
     * Called upon engine or manager `error`.
     *
     * @param err
     * @private
     */
    onerror(err) {
      if (!this.connected) {
        this.emitReserved("connect_error", err);
      }
    }
    /**
     * Called upon engine `close`.
     *
     * @param reason
     * @param description
     * @private
     */
    onclose(reason, description) {
      this.connected = false;
      delete this.id;
      this.emitReserved("disconnect", reason, description);
      this._clearAcks();
    }
    /**
     * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
     * the server.
     *
     * @private
     */
    _clearAcks() {
      Object.keys(this.acks).forEach((id) => {
        const isBuffered = this.sendBuffer.some((packet) => String(packet.id) === id);
        if (!isBuffered) {
          const ack = this.acks[id];
          delete this.acks[id];
          if (ack.withError) {
            ack.call(this, new Error("socket has been disconnected"));
          }
        }
      });
    }
    /**
     * Called with socket packet.
     *
     * @param packet
     * @private
     */
    onpacket(packet) {
      const sameNamespace = packet.nsp === this.nsp;
      if (!sameNamespace) return;
      switch (packet.type) {
        case PacketType.CONNECT:
          if (packet.data && packet.data.sid) {
            this.onconnect(packet.data.sid, packet.data.pid);
          } else {
            this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          }
          break;
        case PacketType.EVENT:
        case PacketType.BINARY_EVENT:
          this.onevent(packet);
          break;
        case PacketType.ACK:
        case PacketType.BINARY_ACK:
          this.onack(packet);
          break;
        case PacketType.DISCONNECT:
          this.ondisconnect();
          break;
        case PacketType.CONNECT_ERROR:
          this.destroy();
          const err = new Error(packet.data.message);
          err.data = packet.data.data;
          this.emitReserved("connect_error", err);
          break;
      }
    }
    /**
     * Called upon a server event.
     *
     * @param packet
     * @private
     */
    onevent(packet) {
      const args = packet.data || [];
      if (null != packet.id) {
        args.push(this.ack(packet.id));
      }
      if (this.connected) {
        this.emitEvent(args);
      } else {
        this.receiveBuffer.push(Object.freeze(args));
      }
    }
    emitEvent(args) {
      if (this._anyListeners && this._anyListeners.length) {
        const listeners = this._anyListeners.slice();
        for (const listener of listeners) {
          listener.apply(this, args);
        }
      }
      super.emit.apply(this, args);
      if (this._pid && args.length && typeof args[args.length - 1] === "string") {
        this._lastOffset = args[args.length - 1];
      }
    }
    /**
     * Produces an ack callback to emit with an event.
     *
     * @private
     */
    ack(id) {
      const self2 = this;
      let sent = false;
      return function(...args) {
        if (sent) return;
        sent = true;
        self2.packet({
          type: PacketType.ACK,
          id,
          data: args
        });
      };
    }
    /**
     * Called upon a server acknowledgement.
     *
     * @param packet
     * @private
     */
    onack(packet) {
      const ack = this.acks[packet.id];
      if (typeof ack !== "function") {
        return;
      }
      delete this.acks[packet.id];
      if (ack.withError) {
        packet.data.unshift(null);
      }
      ack.apply(this, packet.data);
    }
    /**
     * Called upon server connect.
     *
     * @private
     */
    onconnect(id, pid) {
      this.id = id;
      this.recovered = pid && this._pid === pid;
      this._pid = pid;
      this.connected = true;
      this.emitBuffered();
      this.emitReserved("connect");
      this._drainQueue(true);
    }
    /**
     * Emit buffered events (received and emitted).
     *
     * @private
     */
    emitBuffered() {
      this.receiveBuffer.forEach((args) => this.emitEvent(args));
      this.receiveBuffer = [];
      this.sendBuffer.forEach((packet) => {
        this.notifyOutgoingListeners(packet);
        this.packet(packet);
      });
      this.sendBuffer = [];
    }
    /**
     * Called upon server disconnect.
     *
     * @private
     */
    ondisconnect() {
      this.destroy();
      this.onclose("io server disconnect");
    }
    /**
     * Called upon forced client/server side disconnections,
     * this method ensures the manager stops tracking us and
     * that reconnections don't get triggered for this.
     *
     * @private
     */
    destroy() {
      if (this.subs) {
        this.subs.forEach((subDestroy) => subDestroy());
        this.subs = void 0;
      }
      this.io["_destroy"](this);
    }
    /**
     * Disconnects the socket manually. In that case, the socket will not try to reconnect.
     *
     * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
     *
     * @example
     * const socket = io();
     *
     * socket.on("disconnect", (reason) => {
     *   // console.log(reason); prints "io client disconnect"
     * });
     *
     * socket.disconnect();
     *
     * @return self
     */
    disconnect() {
      if (this.connected) {
        this.packet({
          type: PacketType.DISCONNECT
        });
      }
      this.destroy();
      if (this.connected) {
        this.onclose("io client disconnect");
      }
      return this;
    }
    /**
     * Alias for {@link disconnect()}.
     *
     * @return self
     */
    close() {
      return this.disconnect();
    }
    /**
     * Sets the compress flag.
     *
     * @example
     * socket.compress(false).emit("hello");
     *
     * @param compress - if `true`, compresses the sending data
     * @return self
     */
    compress(compress) {
      this.flags.compress = compress;
      return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
     * ready to send messages.
     *
     * @example
     * socket.volatile.emit("hello"); // the server may or may not receive it
     *
     * @returns self
     */
    get volatile() {
      this.flags.volatile = true;
      return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
     * given number of milliseconds have elapsed without an acknowledgement from the server:
     *
     * @example
     * socket.timeout(5000).emit("my-event", (err) => {
     *   if (err) {
     *     // the server did not acknowledge the event in the given delay
     *   }
     * });
     *
     * @returns self
     */
    timeout(timeout) {
      this.flags.timeout = timeout;
      return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * @example
     * socket.onAny((event, ...args) => {
     *   console.log(`got ${event}`);
     * });
     *
     * @param listener
     */
    onAny(listener) {
      this._anyListeners = this._anyListeners || [];
      this._anyListeners.push(listener);
      return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * @example
     * socket.prependAny((event, ...args) => {
     *   console.log(`got event ${event}`);
     * });
     *
     * @param listener
     */
    prependAny(listener) {
      this._anyListeners = this._anyListeners || [];
      this._anyListeners.unshift(listener);
      return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @example
     * const catchAllListener = (event, ...args) => {
     *   console.log(`got event ${event}`);
     * }
     *
     * socket.onAny(catchAllListener);
     *
     * // remove a specific listener
     * socket.offAny(catchAllListener);
     *
     * // or remove all listeners
     * socket.offAny();
     *
     * @param listener
     */
    offAny(listener) {
      if (!this._anyListeners) {
        return this;
      }
      if (listener) {
        const listeners = this._anyListeners;
        for (let i = 0; i < listeners.length; i++) {
          if (listener === listeners[i]) {
            listeners.splice(i, 1);
            return this;
          }
        }
      } else {
        this._anyListeners = [];
      }
      return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */
    listenersAny() {
      return this._anyListeners || [];
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * Note: acknowledgements sent to the server are not included.
     *
     * @example
     * socket.onAnyOutgoing((event, ...args) => {
     *   console.log(`sent event ${event}`);
     * });
     *
     * @param listener
     */
    onAnyOutgoing(listener) {
      this._anyOutgoingListeners = this._anyOutgoingListeners || [];
      this._anyOutgoingListeners.push(listener);
      return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * Note: acknowledgements sent to the server are not included.
     *
     * @example
     * socket.prependAnyOutgoing((event, ...args) => {
     *   console.log(`sent event ${event}`);
     * });
     *
     * @param listener
     */
    prependAnyOutgoing(listener) {
      this._anyOutgoingListeners = this._anyOutgoingListeners || [];
      this._anyOutgoingListeners.unshift(listener);
      return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @example
     * const catchAllListener = (event, ...args) => {
     *   console.log(`sent event ${event}`);
     * }
     *
     * socket.onAnyOutgoing(catchAllListener);
     *
     * // remove a specific listener
     * socket.offAnyOutgoing(catchAllListener);
     *
     * // or remove all listeners
     * socket.offAnyOutgoing();
     *
     * @param [listener] - the catch-all listener (optional)
     */
    offAnyOutgoing(listener) {
      if (!this._anyOutgoingListeners) {
        return this;
      }
      if (listener) {
        const listeners = this._anyOutgoingListeners;
        for (let i = 0; i < listeners.length; i++) {
          if (listener === listeners[i]) {
            listeners.splice(i, 1);
            return this;
          }
        }
      } else {
        this._anyOutgoingListeners = [];
      }
      return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */
    listenersAnyOutgoing() {
      return this._anyOutgoingListeners || [];
    }
    /**
     * Notify the listeners for each packet sent
     *
     * @param packet
     *
     * @private
     */
    notifyOutgoingListeners(packet) {
      if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
        const listeners = this._anyOutgoingListeners.slice();
        for (const listener of listeners) {
          listener.apply(this, packet.data);
        }
      }
    }
  };
  __name(_Socket2, "Socket");
  var Socket2 = _Socket2;

  // node_modules/.pnpm/socket.io-client@4.8.0/node_modules/socket.io-client/build/esm/contrib/backo2.js
  function Backoff(opts) {
    opts = opts || {};
    this.ms = opts.min || 100;
    this.max = opts.max || 1e4;
    this.factor = opts.factor || 2;
    this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
    this.attempts = 0;
  }
  __name(Backoff, "Backoff");
  Backoff.prototype.duration = function() {
    var ms = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
      var rand = Math.random();
      var deviation = Math.floor(rand * this.jitter * ms);
      ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
    }
    return Math.min(ms, this.max) | 0;
  };
  Backoff.prototype.reset = function() {
    this.attempts = 0;
  };
  Backoff.prototype.setMin = function(min) {
    this.ms = min;
  };
  Backoff.prototype.setMax = function(max) {
    this.max = max;
  };
  Backoff.prototype.setJitter = function(jitter) {
    this.jitter = jitter;
  };

  // node_modules/.pnpm/socket.io-client@4.8.0/node_modules/socket.io-client/build/esm/manager.js
  var _Manager = class _Manager extends Emitter {
    constructor(uri, opts) {
      var _a2;
      super();
      this.nsps = {};
      this.subs = [];
      if (uri && "object" === typeof uri) {
        opts = uri;
        uri = void 0;
      }
      opts = opts || {};
      opts.path = opts.path || "/socket.io";
      this.opts = opts;
      installTimerFunctions(this, opts);
      this.reconnection(opts.reconnection !== false);
      this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
      this.reconnectionDelay(opts.reconnectionDelay || 1e3);
      this.reconnectionDelayMax(opts.reconnectionDelayMax || 5e3);
      this.randomizationFactor((_a2 = opts.randomizationFactor) !== null && _a2 !== void 0 ? _a2 : 0.5);
      this.backoff = new Backoff({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor()
      });
      this.timeout(null == opts.timeout ? 2e4 : opts.timeout);
      this._readyState = "closed";
      this.uri = uri;
      const _parser = opts.parser || esm_exports;
      this.encoder = new _parser.Encoder();
      this.decoder = new _parser.Decoder();
      this._autoConnect = opts.autoConnect !== false;
      if (this._autoConnect) this.open();
    }
    reconnection(v) {
      if (!arguments.length) return this._reconnection;
      this._reconnection = !!v;
      if (!v) {
        this.skipReconnect = true;
      }
      return this;
    }
    reconnectionAttempts(v) {
      if (v === void 0) return this._reconnectionAttempts;
      this._reconnectionAttempts = v;
      return this;
    }
    reconnectionDelay(v) {
      var _a2;
      if (v === void 0) return this._reconnectionDelay;
      this._reconnectionDelay = v;
      (_a2 = this.backoff) === null || _a2 === void 0 ? void 0 : _a2.setMin(v);
      return this;
    }
    randomizationFactor(v) {
      var _a2;
      if (v === void 0) return this._randomizationFactor;
      this._randomizationFactor = v;
      (_a2 = this.backoff) === null || _a2 === void 0 ? void 0 : _a2.setJitter(v);
      return this;
    }
    reconnectionDelayMax(v) {
      var _a2;
      if (v === void 0) return this._reconnectionDelayMax;
      this._reconnectionDelayMax = v;
      (_a2 = this.backoff) === null || _a2 === void 0 ? void 0 : _a2.setMax(v);
      return this;
    }
    timeout(v) {
      if (!arguments.length) return this._timeout;
      this._timeout = v;
      return this;
    }
    /**
     * Starts trying to reconnect if reconnection is enabled and we have not
     * started reconnecting yet
     *
     * @private
     */
    maybeReconnectOnOpen() {
      if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
        this.reconnect();
      }
    }
    /**
     * Sets the current transport `socket`.
     *
     * @param {Function} fn - optional, callback
     * @return self
     * @public
     */
    open(fn) {
      if (~this._readyState.indexOf("open")) return this;
      this.engine = new Socket(this.uri, this.opts);
      const socket = this.engine;
      const self2 = this;
      this._readyState = "opening";
      this.skipReconnect = false;
      const openSubDestroy = on(socket, "open", function() {
        self2.onopen();
        fn && fn();
      });
      const onError = /* @__PURE__ */ __name((err) => {
        this.cleanup();
        this._readyState = "closed";
        this.emitReserved("error", err);
        if (fn) {
          fn(err);
        } else {
          this.maybeReconnectOnOpen();
        }
      }, "onError");
      const errorSub = on(socket, "error", onError);
      if (false !== this._timeout) {
        const timeout = this._timeout;
        const timer = this.setTimeoutFn(() => {
          openSubDestroy();
          onError(new Error("timeout"));
          socket.close();
        }, timeout);
        if (this.opts.autoUnref) {
          timer.unref();
        }
        this.subs.push(() => {
          this.clearTimeoutFn(timer);
        });
      }
      this.subs.push(openSubDestroy);
      this.subs.push(errorSub);
      return this;
    }
    /**
     * Alias for open()
     *
     * @return self
     * @public
     */
    connect(fn) {
      return this.open(fn);
    }
    /**
     * Called upon transport open.
     *
     * @private
     */
    onopen() {
      this.cleanup();
      this._readyState = "open";
      this.emitReserved("open");
      const socket = this.engine;
      this.subs.push(
        on(socket, "ping", this.onping.bind(this)),
        on(socket, "data", this.ondata.bind(this)),
        on(socket, "error", this.onerror.bind(this)),
        on(socket, "close", this.onclose.bind(this)),
        // @ts-ignore
        on(this.decoder, "decoded", this.ondecoded.bind(this))
      );
    }
    /**
     * Called upon a ping.
     *
     * @private
     */
    onping() {
      this.emitReserved("ping");
    }
    /**
     * Called with data.
     *
     * @private
     */
    ondata(data) {
      try {
        this.decoder.add(data);
      } catch (e) {
        this.onclose("parse error", e);
      }
    }
    /**
     * Called when parser fully decodes a packet.
     *
     * @private
     */
    ondecoded(packet) {
      nextTick(() => {
        this.emitReserved("packet", packet);
      }, this.setTimeoutFn);
    }
    /**
     * Called upon socket error.
     *
     * @private
     */
    onerror(err) {
      this.emitReserved("error", err);
    }
    /**
     * Creates a new socket for the given `nsp`.
     *
     * @return {Socket}
     * @public
     */
    socket(nsp, opts) {
      let socket = this.nsps[nsp];
      if (!socket) {
        socket = new Socket2(this, nsp, opts);
        this.nsps[nsp] = socket;
      } else if (this._autoConnect && !socket.active) {
        socket.connect();
      }
      return socket;
    }
    /**
     * Called upon a socket close.
     *
     * @param socket
     * @private
     */
    _destroy(socket) {
      const nsps = Object.keys(this.nsps);
      for (const nsp of nsps) {
        const socket2 = this.nsps[nsp];
        if (socket2.active) {
          return;
        }
      }
      this._close();
    }
    /**
     * Writes a packet.
     *
     * @param packet
     * @private
     */
    _packet(packet) {
      const encodedPackets = this.encoder.encode(packet);
      for (let i = 0; i < encodedPackets.length; i++) {
        this.engine.write(encodedPackets[i], packet.options);
      }
    }
    /**
     * Clean up transport subscriptions and packet buffer.
     *
     * @private
     */
    cleanup() {
      this.subs.forEach((subDestroy) => subDestroy());
      this.subs.length = 0;
      this.decoder.destroy();
    }
    /**
     * Close the current socket.
     *
     * @private
     */
    _close() {
      this.skipReconnect = true;
      this._reconnecting = false;
      this.onclose("forced close");
    }
    /**
     * Alias for close()
     *
     * @private
     */
    disconnect() {
      return this._close();
    }
    /**
     * Called when:
     *
     * - the low-level engine is closed
     * - the parser encountered a badly formatted packet
     * - all sockets are disconnected
     *
     * @private
     */
    onclose(reason, description) {
      var _a2;
      this.cleanup();
      (_a2 = this.engine) === null || _a2 === void 0 ? void 0 : _a2.close();
      this.backoff.reset();
      this._readyState = "closed";
      this.emitReserved("close", reason, description);
      if (this._reconnection && !this.skipReconnect) {
        this.reconnect();
      }
    }
    /**
     * Attempt a reconnection.
     *
     * @private
     */
    reconnect() {
      if (this._reconnecting || this.skipReconnect) return this;
      const self2 = this;
      if (this.backoff.attempts >= this._reconnectionAttempts) {
        this.backoff.reset();
        this.emitReserved("reconnect_failed");
        this._reconnecting = false;
      } else {
        const delay = this.backoff.duration();
        this._reconnecting = true;
        const timer = this.setTimeoutFn(() => {
          if (self2.skipReconnect) return;
          this.emitReserved("reconnect_attempt", self2.backoff.attempts);
          if (self2.skipReconnect) return;
          self2.open((err) => {
            if (err) {
              self2._reconnecting = false;
              self2.reconnect();
              this.emitReserved("reconnect_error", err);
            } else {
              self2.onreconnect();
            }
          });
        }, delay);
        if (this.opts.autoUnref) {
          timer.unref();
        }
        this.subs.push(() => {
          this.clearTimeoutFn(timer);
        });
      }
    }
    /**
     * Called upon successful reconnect.
     *
     * @private
     */
    onreconnect() {
      const attempt = this.backoff.attempts;
      this._reconnecting = false;
      this.backoff.reset();
      this.emitReserved("reconnect", attempt);
    }
  };
  __name(_Manager, "Manager");
  var Manager = _Manager;

  // node_modules/.pnpm/socket.io-client@4.8.0/node_modules/socket.io-client/build/esm/index.js
  var cache = {};
  function lookup2(uri, opts) {
    if (typeof uri === "object") {
      opts = uri;
      uri = void 0;
    }
    opts = opts || {};
    const parsed = url(uri, opts.path || "/socket.io");
    const source = parsed.source;
    const id = parsed.id;
    const path = parsed.path;
    const sameNamespace = cache[id] && path in cache[id]["nsps"];
    const newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
    let io;
    if (newConnection) {
      io = new Manager(source, opts);
    } else {
      if (!cache[id]) {
        cache[id] = new Manager(source, opts);
      }
      io = cache[id];
    }
    if (parsed.query && !opts.query) {
      opts.query = parsed.queryKey;
    }
    return io.socket(parsed.path, opts);
  }
  __name(lookup2, "lookup");
  Object.assign(lookup2, {
    Manager,
    Socket: Socket2,
    io: lookup2,
    connect: lookup2
  });

  // client/mediasoup.ts
  var _Mediasoup = class _Mediasoup {
    constructor(params) {
      __publicField(this, "socket");
      __publicField(this, "onEvent", {});
      __publicField(this, "device", new import_mediasoup_client.Device());
      __publicField(this, "transport");
      this.initSocket(params);
    }
    on(event, callback) {
      if (!this.onEvent[event]) {
        this.onEvent[event] = [
          callback
        ];
      } else {
        this.onEvent[event].push(callback);
      }
    }
    initSocket(params) {
      this.socket = lookup2("/", {
        auth: {
          room: params.room
        },
        reconnection: false
      });
      this.socket.on("CreateRoomed", async () => {
        this.getRtp(params.getRtpName || "getRouterRtpCapabilities");
        const consume = await this.getConsume(params.getConsumeName || "getConsume");
      });
    }
    getConsume(eventName) {
      return new Promise((resolve, reject) => {
        this.socket.emit(eventName, async (data) => {
          const transport = this.device.createRecvTransport(data);
          this.transport = transport;
          transport.on("connect", ({ dtlsParameters }, callback, errback) => {
            this.socket.emit("connectConsumerTransport", {
              transportId: transport.id,
              dtlsParameters
            }, () => {
              this.EmitEvnet("Finish");
              callback();
              resolve(transport);
            });
          });
          const { stream, consumer } = await this.getStream(transport);
          const audio = document.querySelector("#audio");
          transport.on("connectionstatechange", (state) => {
            if (state == "connected" && consumer.track.readyState == "live") {
              consumer.getStats().then((stats) => {
                stats.forEach((report) => {
                  console.log(report);
                  if (report.type === "inbound-rtp" && report.kind === "audio") {
                    console.log("Audio bytes received:", report.bytesReceived);
                    console.log("Packets lost:", report.packetsLost);
                  }
                });
              });
              audio.srcObject = stream;
              audio.play();
            }
          });
        });
      });
    }
    getRtp(eventName) {
      this.socket.emit(eventName, async (routerRtpCapabilities) => {
        await this.device.load({
          routerRtpCapabilities
        });
        this.EmitEvnet("getRtp", routerRtpCapabilities);
      });
    }
    /**
    *  触发监听的事件
    *  @param eventName 事件名
    *  @param arg 回调参数
    * */
    EmitEvnet(eventName, arg) {
      const fnArr = this.onEvent[eventName];
      if (fnArr) {
        fnArr.forEach((item) => item(arg));
      }
    }
    getStream(transport) {
      const { rtpCapabilities } = this.device;
      return new Promise((resolve, reject) => {
        this.socket.emit("consume", {
          rtpCapabilities
        }, async (data) => {
          const { producerId, id, kind, rtpParameters } = data;
          const consumer = await transport.consume({
            producerId,
            id,
            kind,
            rtpParameters
          });
          const stream = new MediaStream();
          stream.addTrack(consumer.track);
          console.log(stream.getAudioTracks());
          resolve({
            stream,
            consumer
          });
        });
      });
    }
  };
  __name(_Mediasoup, "Mediasoup");
  var Mediasoup = _Mediasoup;

  // client/index.ts
  var button = document.querySelector("#start");
  button.onclick = () => {
    const med = new Mediasoup({
      room: {
        name: "\u5927\u5385",
        _id: "66fd364cd6b5d5833c0cc50b",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEwNTI1MDgxMzhAcXEuY29tIiwiaWF0IjoxNzI2ODAxNzY5LCJleHAiOjE3MjkzOTM3Njl9.V6Zt6-30_U6CFds2FQinF-41YSMm_Qhik3dw3MWjN_w"
      }
    });
    med.on("Finish", () => {
      console.log("\u6240\u6709\u8FDE\u63A5\u5B8C\u6210");
    });
  };
})();
/*! Bundled license information:

queue-microtask/index.js:
  (*! queue-microtask. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)
*/
