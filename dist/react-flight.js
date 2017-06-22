(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "jquery"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("jquery")) : factory(root["react"], root["jquery"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_37__, __WEBPACK_EXTERNAL_MODULE_275__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Rect = exports.Oval = undefined;

	var _flight = __webpack_require__(114);

	var _flight2 = _interopRequireDefault(_flight);

	var _ui = __webpack_require__(117);

	var _controls = __webpack_require__(116);

	var _controls2 = _interopRequireDefault(_controls);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Flight = (0, _flight2.default)(_ui.Rect, _controls2.default);

	exports.default = Flight;
	exports.Oval = _ui.Oval;
	exports.Rect = _ui.Rect;

/***/ },
/* 1 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(50)('wks')
	  , uid        = __webpack_require__(29)
	  , Symbol     = __webpack_require__(7).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(102);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(7)
	  , core      = __webpack_require__(1)
	  , ctx       = __webpack_require__(42)
	  , hide      = __webpack_require__(16)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 7 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(14)
	  , IE8_DOM_DEFINE = __webpack_require__(74)
	  , toPrimitive    = __webpack_require__(52)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(9) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(15)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 10 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(75)
	  , defined = __webpack_require__(43);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(188),
	    getValue = __webpack_require__(218);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ },
/* 13 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(22);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(8)
	  , createDesc = __webpack_require__(24);
	module.exports = __webpack_require__(9) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(80)
	  , enumBugKeys = __webpack_require__(44);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(26),
	    getRawTag = __webpack_require__(216),
	    objectToString = __webpack_require__(245);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  value = Object(value);
	  return (symToStringTag && symToStringTag in value)
	    ? getRawTag(value)
	    : objectToString(value);
	}

	module.exports = baseGetTag;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(36),
	    isLength = __webpack_require__(64);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	module.exports = isArrayLike;


/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(70);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(43);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(4);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },
/* 27 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ },
/* 28 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 29 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(230),
	    listCacheDelete = __webpack_require__(231),
	    listCacheGet = __webpack_require__(232),
	    listCacheHas = __webpack_require__(233),
	    listCacheSet = __webpack_require__(234);

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	module.exports = ListCache;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(27);

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(228);

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	module.exports = getMapData;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(12);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(65);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = toKey;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsArguments = __webpack_require__(185),
	    isObjectLike = __webpack_require__(13);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};

	module.exports = isArguments;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(18),
	    isObject = __webpack_require__(5);

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	module.exports = isFunction;


/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_37__;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(130), __esModule: true };

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(121);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(119);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(72);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(72);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(135);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(14)
	  , dPs         = __webpack_require__(151)
	  , enumBugKeys = __webpack_require__(44)
	  , IE_PROTO    = __webpack_require__(49)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(73)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(141).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 47 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(8).f
	  , has = __webpack_require__(10)
	  , TAG = __webpack_require__(3)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(50)('keys')
	  , uid    = __webpack_require__(29);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(7)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 51 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(22);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(7)
	  , core           = __webpack_require__(1)
	  , LIBRARY        = __webpack_require__(45)
	  , wksExt         = __webpack_require__(54)
	  , defineProperty = __webpack_require__(8).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(3);

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(12),
	    root = __webpack_require__(4);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(235),
	    mapCacheDelete = __webpack_require__(236),
	    mapCacheGet = __webpack_require__(237),
	    mapCacheHas = __webpack_require__(238),
	    mapCacheSet = __webpack_require__(239);

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	module.exports = MapCache;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(30),
	    stackClear = __webpack_require__(252),
	    stackDelete = __webpack_require__(253),
	    stackGet = __webpack_require__(254),
	    stackHas = __webpack_require__(255),
	    stackSet = __webpack_require__(256);

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	module.exports = Stack;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var defineProperty = __webpack_require__(100);

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	module.exports = baseAssignValue;


/***/ },
/* 59 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	module.exports = isIndex;


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(2),
	    isSymbol = __webpack_require__(65);

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}

	module.exports = isKey;


/***/ },
/* 61 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;


/***/ },
/* 62 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(4),
	    stubFalse = __webpack_require__(268);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	module.exports = isBuffer;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(68)(module)))

/***/ },
/* 64 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(18),
	    isObjectLike = __webpack_require__(13);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && baseGetTag(value) == symbolTag);
	}

	module.exports = isSymbol;


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(189),
	    baseUnary = __webpack_require__(203),
	    nodeUtil = __webpack_require__(244);

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	module.exports = isTypedArray;


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(89),
	    baseKeys = __webpack_require__(190),
	    isArrayLike = __webpack_require__(19);

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	module.exports = keys;


/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(127), __esModule: true };

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(129), __esModule: true };

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(69);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(123);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(122);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(22)
	  , document = __webpack_require__(7).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(9) && !__webpack_require__(15)(function(){
	  return Object.defineProperty(__webpack_require__(73)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(41);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(45)
	  , $export        = __webpack_require__(6)
	  , redefine       = __webpack_require__(82)
	  , hide           = __webpack_require__(16)
	  , has            = __webpack_require__(10)
	  , Iterators      = __webpack_require__(23)
	  , $iterCreate    = __webpack_require__(145)
	  , setToStringTag = __webpack_require__(48)
	  , getPrototypeOf = __webpack_require__(79)
	  , ITERATOR       = __webpack_require__(3)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(28)
	  , createDesc     = __webpack_require__(24)
	  , toIObject      = __webpack_require__(11)
	  , toPrimitive    = __webpack_require__(52)
	  , has            = __webpack_require__(10)
	  , IE8_DOM_DEFINE = __webpack_require__(74)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(9) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(80)
	  , hiddenKeys = __webpack_require__(44).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(10)
	  , toObject    = __webpack_require__(25)
	  , IE_PROTO    = __webpack_require__(49)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(10)
	  , toIObject    = __webpack_require__(11)
	  , arrayIndexOf = __webpack_require__(137)(false)
	  , IE_PROTO     = __webpack_require__(49)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(6)
	  , core    = __webpack_require__(1)
	  , fails   = __webpack_require__(15);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(16);

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(51)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(154)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(76)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 85 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (true) {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(85);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (true) {
	  (function () {
	    var printWarning = function printWarning(format) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    };

	    warning = function warning(condition, format) {
	      if (format === undefined) {
	        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	      }

	      if (format.indexOf('Failed Composite propType: ') === 0) {
	        return; // Ignore CompositeComponent proptype check.
	      }

	      if (!condition) {
	        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	          args[_key2 - 2] = arguments[_key2];
	        }

	        printWarning.apply(undefined, [format].concat(args));
	      }
	    };
	  })();
	}

	module.exports = warning;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(4);

	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;

	module.exports = Uint8Array;


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(201),
	    isArguments = __webpack_require__(35),
	    isArray = __webpack_require__(2),
	    isBuffer = __webpack_require__(63),
	    isIndex = __webpack_require__(59),
	    isTypedArray = __webpack_require__(66);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = arrayLikeKeys;


/***/ },
/* 90 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(58),
	    eq = __webpack_require__(27);

	/**
	 * This function is like `assignValue` except that it doesn't assign
	 * `undefined` values.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignMergeValue(object, key, value) {
	  if ((value !== undefined && !eq(object[key], value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}

	module.exports = assignMergeValue;


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(183),
	    createBaseEach = __webpack_require__(211);

	/**
	 * The base implementation of `_.forEach` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);

	module.exports = baseEach;


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(212);

	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	module.exports = baseFor;


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(98),
	    toKey = __webpack_require__(34);

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = castPath(path, object);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}

	module.exports = baseGet;


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(186),
	    isObject = __webpack_require__(5),
	    isObjectLike = __webpack_require__(13);

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Unordered comparison
	 *  2 - Partial comparison
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, bitmask, customizer, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}

	module.exports = baseIsEqual;


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(193),
	    baseMatchesProperty = __webpack_require__(194),
	    identity = __webpack_require__(62),
	    isArray = __webpack_require__(2),
	    property = __webpack_require__(267);

	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (typeof value == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}

	module.exports = baseIteratee;


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(57),
	    assignMergeValue = __webpack_require__(91),
	    baseFor = __webpack_require__(93),
	    baseMergeDeep = __webpack_require__(195),
	    isObject = __webpack_require__(5),
	    keysIn = __webpack_require__(108);

	/**
	 * The base implementation of `_.merge` without support for multiple sources.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMerge(object, source, srcIndex, customizer, stack) {
	  if (object === source) {
	    return;
	  }
	  baseFor(source, function(srcValue, key) {
	    if (isObject(srcValue)) {
	      stack || (stack = new Stack);
	      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
	    }
	    else {
	      var newValue = customizer
	        ? customizer(object[key], srcValue, (key + ''), object, source, stack)
	        : undefined;

	      if (newValue === undefined) {
	        newValue = srcValue;
	      }
	      assignMergeValue(object, key, newValue);
	    }
	  }, keysIn);
	}

	module.exports = baseMerge;


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(2),
	    isKey = __webpack_require__(60),
	    stringToPath = __webpack_require__(257),
	    toString = __webpack_require__(270);

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value, object) {
	  if (isArray(value)) {
	    return value;
	  }
	  return isKey(value, object) ? [value] : stringToPath(toString(value));
	}

	module.exports = castPath;


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(199),
	    isIterateeCall = __webpack_require__(227);

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;

	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	module.exports = createAssigner;


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(12);

	var defineProperty = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	module.exports = defineProperty;


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(174),
	    arraySome = __webpack_require__(179),
	    cacheHas = __webpack_require__(204);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!cacheHas(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, bitmask, customizer, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalArrays;


/***/ },
/* 102 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(106);

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(5);

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}

	module.exports = isStrictComparable;


/***/ },
/* 105 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}

	module.exports = matchesStrictComparable;


/***/ },
/* 106 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ },
/* 107 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	module.exports = toSource;


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(89),
	    baseKeysIn = __webpack_require__(191),
	    isArrayLike = __webpack_require__(19);

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}

	module.exports = keysIn;


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(90),
	    baseIteratee = __webpack_require__(96),
	    baseMap = __webpack_require__(192),
	    isArray = __webpack_require__(2);

	/**
	 * Creates an array of values by running each element in `collection` thru
	 * `iteratee`. The iteratee is invoked with three arguments:
	 * (value, index|key, collection).
	 *
	 * Many lodash methods are guarded to work as iteratees for methods like
	 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
	 *
	 * The guarded methods are:
	 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
	 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
	 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
	 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 * @example
	 *
	 * function square(n) {
	 *   return n * n;
	 * }
	 *
	 * _.map([4, 8], square);
	 * // => [16, 64]
	 *
	 * _.map({ 'a': 4, 'b': 8 }, square);
	 * // => [16, 64] (iteration order is not guaranteed)
	 *
	 * var users = [
	 *   { 'user': 'barney' },
	 *   { 'user': 'fred' }
	 * ];
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.map(users, 'user');
	 * // => ['barney', 'fred']
	 */
	function map(collection, iteratee) {
	  var func = isArray(collection) ? arrayMap : baseMap;
	  return func(collection, baseIteratee(iteratee, 3));
	}

	module.exports = map;


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var arrayReduce = __webpack_require__(178),
	    baseEach = __webpack_require__(92),
	    baseIteratee = __webpack_require__(96),
	    baseReduce = __webpack_require__(198),
	    isArray = __webpack_require__(2);

	/**
	 * Reduces `collection` to a value which is the accumulated result of running
	 * each element in `collection` thru `iteratee`, where each successive
	 * invocation is supplied the return value of the previous. If `accumulator`
	 * is not given, the first element of `collection` is used as the initial
	 * value. The iteratee is invoked with four arguments:
	 * (accumulator, value, index|key, collection).
	 *
	 * Many lodash methods are guarded to work as iteratees for methods like
	 * `_.reduce`, `_.reduceRight`, and `_.transform`.
	 *
	 * The guarded methods are:
	 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
	 * and `sortBy`
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @returns {*} Returns the accumulated value.
	 * @see _.reduceRight
	 * @example
	 *
	 * _.reduce([1, 2], function(sum, n) {
	 *   return sum + n;
	 * }, 0);
	 * // => 3
	 *
	 * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
	 *   (result[value] || (result[value] = [])).push(key);
	 *   return result;
	 * }, {});
	 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
	 */
	function reduce(collection, iteratee, accumulator) {
	  var func = isArray(collection) ? arrayReduce : baseReduce,
	      initAccum = arguments.length < 3;

	  return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
	}

	module.exports = reduce;


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	if (true) {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(272)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = require('./factoryWithThrowingShims')();
	}


/***/ },
/* 112 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _keys = __webpack_require__(120);

	var _keys2 = _interopRequireDefault(_keys);

	var _classCallCheck2 = __webpack_require__(20);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(21);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _defineProperty2 = __webpack_require__(124);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _toConsumableArray2 = __webpack_require__(125);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _extends2 = __webpack_require__(71);

	var _extends3 = _interopRequireDefault(_extends2);

	var _react = __webpack_require__(37);

	var _react2 = _interopRequireDefault(_react);

	var _flattenDeep = __webpack_require__(259);

	var _flattenDeep2 = _interopRequireDefault(_flattenDeep);

	var _merge = __webpack_require__(265);

	var _merge2 = _interopRequireDefault(_merge);

	var _mergeWith = __webpack_require__(266);

	var _mergeWith2 = _interopRequireDefault(_mergeWith);

	var _map = __webpack_require__(109);

	var _map2 = _interopRequireDefault(_map);

	var _isFunction = __webpack_require__(36);

	var _isFunction2 = _interopRequireDefault(_isFunction);

	var _reduce = __webpack_require__(110);

	var _reduce2 = _interopRequireDefault(_reduce);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var walk = function walk(root, c) {
	  if (!c.props) {
	    return [];
	  }

	  return _react.Children.toArray(c.props.children).map(function (child) {
	    if (!child) {
	      return [];
	    }

	    //TODO use a better classifier than className. maybe anim prop?
	    if (!child.props) {
	      console.log('warn: no props', child);
	    }

	    // try extracting style and class from React component,
	    // if not - go through a forced render (and set resolvedchild)
	    var resolvedChild = child;
	    if (!(child.props && child.props.className && child.props.style)) {
	      //if we're both type and has name we're probably a react comp.
	      if ((0, _isFunction2.default)(child.type)) {
	        var renderable = new child.type(
	        // source is a context field - synthesize it instead of
	        // manufacturing a real context. It's OK because this
	        // render goes to trash after we're done, and not the DOM.
	        (0, _extends3.default)({ source: true }, child.props), root.context);
	        if ((0, _isFunction2.default)(renderable.render)) {
	          resolvedChild = renderable.render();
	        }
	      }
	    }

	    // all this className circus is just to pick a name we can treat
	    // as a grouping key when later locating pairs (or more) of connected
	    // components.
	    if (resolvedChild.props && resolvedChild.props.className && resolvedChild.props.style) {
	      var _styles = resolvedChild.props.style;
	      var name = resolvedChild.props.className || resolvedChild.props.name;
	      return [(0, _defineProperty3.default)({}, name, { styles: [_styles], ref: resolvedChild, name: name })].concat((0, _toConsumableArray3.default)(walk(root, resolvedChild)));
	    } else {
	      return walk(root, child);
	    }
	  });
	};
	var styles = function styles(root) {
	  var extract = function extract(comp) {
	    return _merge2.default.apply(undefined, (0, _toConsumableArray3.default)((0, _flattenDeep2.default)(walk(root, comp))));
	  };

	  var extracts = _react.Children.toArray(root.props.children).map(extract);
	  return _mergeWith2.default.apply(undefined, (0, _toConsumableArray3.default)(extracts).concat([function (objValue, srcValue) {
	    return {
	      styles: objValue.styles.concat(srcValue.styles),
	      ref: objValue.ref,
	      name: objValue.name
	    };
	  }]));
	};

	var Director = function () {
	  function Director(comp, composer) {
	    (0, _classCallCheck3.default)(this, Director);

	    this.root = comp;
	    var stylemap = styles(comp);
	    var frames = (0, _map2.default)(_react.Children.toArray(comp.props.children), function (c) {
	      return {
	        duration: c.props.duration || 500
	      };
	    });

	    var movements = (0, _reduce2.default)((0, _keys2.default)(stylemap), function (acc, k) {
	      var movement = (0, _map2.default)(frames, function (f, i) {
	        var to = stylemap[k].styles[i + 1];
	        var _stylemap$k = stylemap[k],
	            ref = _stylemap$k.ref,
	            name = _stylemap$k.name;

	        if (to) {
	          return {
	            root: { namespace: comp.namespace },
	            target: { style: to, ref: ref, name: name },
	            duration: f.duration
	          };
	        }
	        return {}; // one extra null movement
	      });

	      return [].concat((0, _toConsumableArray3.default)(acc), [movement]);
	    }, []);

	    this.frames = frames;
	    this.movements = movements;
	    this.composer = composer(movements);
	  }

	  (0, _createClass3.default)(Director, [{
	    key: 'pause',
	    value: function pause() {
	      this.composer.pause();
	    }
	  }, {
	    key: 'loop',
	    value: function loop() {
	      this.composer.loop();
	    }
	  }, {
	    key: 'play',
	    value: function play() {
	      this.composer.play();
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      this.composer.reset();
	    }
	  }]);
	  return Director;
	}();

	exports.default = Director;

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(71);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(38);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(20);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(21);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(40);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(39);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(37);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(111);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _velocityComposer = __webpack_require__(115);

	var _velocityComposer2 = _interopRequireDefault(_velocityComposer);

	var _director = __webpack_require__(113);

	var _director2 = _interopRequireDefault(_director);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var flight = function flight(Container, Controls) {
	  var connector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (_) {
	    return _;
	  };

	  var Flight = function (_Component) {
	    (0, _inherits3.default)(Flight, _Component);

	    function Flight(props) {
	      (0, _classCallCheck3.default)(this, Flight);

	      var _this = (0, _possibleConstructorReturn3.default)(this, (Flight.__proto__ || (0, _getPrototypeOf2.default)(Flight)).call(this, props));

	      _this.play = function () {
	        var director = _this.state.director;
	        if (director) {
	          director.play();
	          _this.setState((0, _extends3.default)({}, _this.state, { action: 'play' }));
	        }
	      };

	      _this.reset = function () {
	        var director = _this.state.director;
	        if (director) {
	          director.reset();
	          _this.setState((0, _extends3.default)({}, _this.state, { action: 'reset' }));
	        }
	      };

	      _this.nothing = function () {};

	      _this.namespace = 'flt__id__' + parseInt(Math.random() * Math.pow(2, 32), 10);
	      _this.state = {};
	      return _this;
	    }

	    (0, _createClass3.default)(Flight, [{
	      key: 'getChildContext',
	      value: function getChildContext() {
	        return (0, _extends3.default)({}, this.context, { director: this.state.director });
	      }
	    }, {
	      key: 'componentDidMount',
	      value: function componentDidMount() {
	        var _this2 = this;

	        requestAnimationFrame(function () {
	          var director = new _director2.default(_this2, function (_) {
	            return new _velocityComposer2.default(_);
	          });
	          _this2.setState({
	            director: director
	          }); // force context refetch
	        });
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        var interactive = this.props.interactive;

	        var action = interactive ? this.state.action === 'play' ? this.reset : this.play : this.nothing;
	        return _react2.default.createElement(
	          Container,
	          {
	            id: this.namespace,
	            style: this.props.style,
	            onPress: action
	          },
	          this.props.controls && _react2.default.createElement(Controls, { onPlay: this.play, onReset: this.reset }),
	          this.props.showFrames ? this.props.children : _react.Children.toArray(this.props.children)[0]
	        );
	      }
	    }]);
	    return Flight;
	  }(_react.Component);

	  Flight.childContextTypes = {
	    director: _propTypes2.default.object
	  };

	  var Frame = function (_Component2) {
	    (0, _inherits3.default)(Frame, _Component2);

	    function Frame() {
	      (0, _classCallCheck3.default)(this, Frame);
	      return (0, _possibleConstructorReturn3.default)(this, (Frame.__proto__ || (0, _getPrototypeOf2.default)(Frame)).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Frame, [{
	      key: 'getChildContext',
	      value: function getChildContext() {
	        return {
	          source: this.props.source
	        };
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        return _react.Children.only(this.props.children);
	      }
	    }]);
	    return Frame;
	  }(_react.Component);

	  Frame.childContextTypes = {
	    source: _propTypes2.default.bool
	  };
	  Flight.Frame = connector(Frame);
	  return connector(Flight);
	};

	exports.default = flight;

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(20);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(21);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _reduce = __webpack_require__(110);

	var _reduce2 = _interopRequireDefault(_reduce);

	var _map = __webpack_require__(109);

	var _map2 = _interopRequireDefault(_map);

	var _velocity = __webpack_require__(273);

	var _velocity2 = _interopRequireDefault(_velocity);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_velocity2.default.defaultDriver = 'velocity';

	var VelocityComposer = function () {
	  function VelocityComposer(movements) {
	    (0, _classCallCheck3.default)(this, VelocityComposer);

	    this.timelines = this._build(movements);
	  }

	  (0, _createClass3.default)(VelocityComposer, [{
	    key: '_build',
	    value: function _build(movements) {
	      var timelines = (0, _map2.default)(movements, function (movement) {
	        return (0, _reduce2.default)(movement, function (timeline, step) {
	          if (step.target) {
	            timeline.add(_velocity2.default.to('#' + step.root.namespace + ' #' + step.target.name, step.target.style, {
	              duration: step.duration,
	              paused: true
	            }));
	          }
	          return timeline;
	        }, _velocity2.default.line());
	      });
	      return timelines;
	    }
	  }, {
	    key: '__timelines',
	    value: function __timelines(cmd) {
	      this.timelines.forEach(function (t) {
	        return t[cmd]();
	      });
	    }
	  }, {
	    key: 'resume',
	    value: function resume() {
	      this.__timelines('resume');
	    }
	  }, {
	    key: 'pause',
	    value: function pause() {
	      this.__timelines('pause');
	    }
	  }, {
	    key: 'loop',
	    value: function loop() {
	      this.__timelines('loop');
	    }
	  }, {
	    key: 'play',
	    value: function play() {
	      this.__timelines('play');
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      this.__timelines('reverse');
	    }
	  }]);
	  return VelocityComposer;
	}();

	exports.default = VelocityComposer;

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(38);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(20);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(21);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(40);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(39);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(37);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Controls = function (_Component) {
	  (0, _inherits3.default)(Controls, _Component);

	  function Controls() {
	    (0, _classCallCheck3.default)(this, Controls);
	    return (0, _possibleConstructorReturn3.default)(this, (Controls.__proto__ || (0, _getPrototypeOf2.default)(Controls)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Controls, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'button',
	          { onClick: this.props.onPlay },
	          'play'
	        ),
	        _react2.default.createElement(
	          'button',
	          { onClick: this.props.onReset },
	          'reset'
	        )
	      );
	    }
	  }]);
	  return Controls;
	}(_react.Component);

	exports.default = Controls;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Rect = exports.Oval = undefined;

	var _assign = __webpack_require__(69);

	var _assign2 = _interopRequireDefault(_assign);

	var _getPrototypeOf = __webpack_require__(38);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(20);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(21);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(40);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(39);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(37);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(111);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Rect = function (_Component) {
	  (0, _inherits3.default)(Rect, _Component);

	  function Rect() {
	    (0, _classCallCheck3.default)(this, Rect);
	    return (0, _possibleConstructorReturn3.default)(this, (Rect.__proto__ || (0, _getPrototypeOf2.default)(Rect)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Rect, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          id = _props.id,
	          source = _props.source,
	          name = _props.name,
	          radius = _props.radius,
	          onPress = _props.onPress,
	          children = _props.children,
	          style = _props.style;

	      return _react2.default.createElement(
	        'div',
	        {
	          id: id || (this.context && this.context.source || source) && name,
	          className: name,
	          onClick: onPress,
	          style: (0, _assign2.default)({ borderRadius: radius }, style)
	        },
	        children
	      );
	    }
	  }]);
	  return Rect;
	}(_react.Component);

	Rect.contextTypes = {
	  director: _propTypes2.default.object,
	  source: _propTypes2.default.bool
	};

	//XXX todo

	var Image = function () {
	  function Image() {
	    (0, _classCallCheck3.default)(this, Image);
	  }

	  (0, _createClass3.default)(Image, [{
	    key: 'render',
	    value: function render() {}
	  }]);
	  return Image;
	}();

	// Yea, not really an oval, more of a circle, but can be an oval
	// if you give me another radius..


	var Oval = function (_Component2) {
	  (0, _inherits3.default)(Oval, _Component2);

	  function Oval() {
	    (0, _classCallCheck3.default)(this, Oval);
	    return (0, _possibleConstructorReturn3.default)(this, (Oval.__proto__ || (0, _getPrototypeOf2.default)(Oval)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Oval, [{
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          source = _props2.source,
	          name = _props2.name,
	          size = _props2.size,
	          children = _props2.children,
	          style = _props2.style;

	      return _react2.default.createElement(
	        'div',
	        {
	          id: (this.context && this.context.source || source) && name,
	          className: name,
	          onClick: this.triggerStart,
	          style: (0, _assign2.default)({ borderRadius: size / 2, width: size, height: size }, style)
	        },
	        children
	      );
	    }
	  }]);
	  return Oval;
	}(_react.Component);

	Oval.contextTypes = {
	  director: _propTypes2.default.object,
	  source: _propTypes2.default.bool
	};

	exports.Oval = Oval;
	exports.Rect = Rect;

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(126), __esModule: true };

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(128), __esModule: true };

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(131), __esModule: true };

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(132), __esModule: true };

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(133), __esModule: true };

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(134), __esModule: true };

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(70);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _from = __webpack_require__(118);

	var _from2 = _interopRequireDefault(_from);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(84);
	__webpack_require__(157);
	module.exports = __webpack_require__(1).Array.from;

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(159);
	module.exports = __webpack_require__(1).Object.assign;

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(160);
	var $Object = __webpack_require__(1).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(161);
	var $Object = __webpack_require__(1).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(162);
	module.exports = __webpack_require__(1).Object.getPrototypeOf;

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(163);
	module.exports = __webpack_require__(1).Object.keys;

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(164);
	module.exports = __webpack_require__(1).Object.setPrototypeOf;

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(166);
	__webpack_require__(165);
	__webpack_require__(167);
	__webpack_require__(168);
	module.exports = __webpack_require__(1).Symbol;

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(84);
	__webpack_require__(169);
	module.exports = __webpack_require__(54).f('iterator');

/***/ },
/* 135 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 136 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(11)
	  , toLength  = __webpack_require__(83)
	  , toIndex   = __webpack_require__(155);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(41)
	  , TAG = __webpack_require__(3)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(8)
	  , createDesc      = __webpack_require__(24);

	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(17)
	  , gOPS    = __webpack_require__(47)
	  , pIE     = __webpack_require__(28);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(7).document && document.documentElement;

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(23)
	  , ITERATOR   = __webpack_require__(3)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(41);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(14);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(46)
	  , descriptor     = __webpack_require__(24)
	  , setToStringTag = __webpack_require__(48)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(16)(IteratorPrototype, __webpack_require__(3)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(3)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 147 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(17)
	  , toIObject = __webpack_require__(11);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(29)('meta')
	  , isObject = __webpack_require__(22)
	  , has      = __webpack_require__(10)
	  , setDesc  = __webpack_require__(8).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(15)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(17)
	  , gOPS     = __webpack_require__(47)
	  , pIE      = __webpack_require__(28)
	  , toObject = __webpack_require__(25)
	  , IObject  = __webpack_require__(75)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(15)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(8)
	  , anObject = __webpack_require__(14)
	  , getKeys  = __webpack_require__(17);

	module.exports = __webpack_require__(9) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(11)
	  , gOPN      = __webpack_require__(78).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(22)
	  , anObject = __webpack_require__(14);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(42)(Function.call, __webpack_require__(77).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(51)
	  , defined   = __webpack_require__(43);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(51)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(138)
	  , ITERATOR  = __webpack_require__(3)('iterator')
	  , Iterators = __webpack_require__(23);
	module.exports = __webpack_require__(1).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(42)
	  , $export        = __webpack_require__(6)
	  , toObject       = __webpack_require__(25)
	  , call           = __webpack_require__(144)
	  , isArrayIter    = __webpack_require__(142)
	  , toLength       = __webpack_require__(83)
	  , createProperty = __webpack_require__(139)
	  , getIterFn      = __webpack_require__(156);

	$export($export.S + $export.F * !__webpack_require__(146)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(136)
	  , step             = __webpack_require__(147)
	  , Iterators        = __webpack_require__(23)
	  , toIObject        = __webpack_require__(11);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(76)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(6);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(150)});

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(6)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(46)});

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(6);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(9), 'Object', {defineProperty: __webpack_require__(8).f});

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(25)
	  , $getPrototypeOf = __webpack_require__(79);

	__webpack_require__(81)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(25)
	  , $keys    = __webpack_require__(17);

	__webpack_require__(81)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(6);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(153).set});

/***/ },
/* 165 */
/***/ function(module, exports) {

	

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(7)
	  , has            = __webpack_require__(10)
	  , DESCRIPTORS    = __webpack_require__(9)
	  , $export        = __webpack_require__(6)
	  , redefine       = __webpack_require__(82)
	  , META           = __webpack_require__(149).KEY
	  , $fails         = __webpack_require__(15)
	  , shared         = __webpack_require__(50)
	  , setToStringTag = __webpack_require__(48)
	  , uid            = __webpack_require__(29)
	  , wks            = __webpack_require__(3)
	  , wksExt         = __webpack_require__(54)
	  , wksDefine      = __webpack_require__(53)
	  , keyOf          = __webpack_require__(148)
	  , enumKeys       = __webpack_require__(140)
	  , isArray        = __webpack_require__(143)
	  , anObject       = __webpack_require__(14)
	  , toIObject      = __webpack_require__(11)
	  , toPrimitive    = __webpack_require__(52)
	  , createDesc     = __webpack_require__(24)
	  , _create        = __webpack_require__(46)
	  , gOPNExt        = __webpack_require__(152)
	  , $GOPD          = __webpack_require__(77)
	  , $DP            = __webpack_require__(8)
	  , $keys          = __webpack_require__(17)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(78).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(28).f  = $propertyIsEnumerable;
	  __webpack_require__(47).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(45)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(16)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(53)('asyncIterator');

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(53)('observable');

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(158);
	var global        = __webpack_require__(7)
	  , hide          = __webpack_require__(16)
	  , Iterators     = __webpack_require__(23)
	  , TO_STRING_TAG = __webpack_require__(3)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(12),
	    root = __webpack_require__(4);

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');

	module.exports = DataView;


/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(220),
	    hashDelete = __webpack_require__(221),
	    hashGet = __webpack_require__(222),
	    hashHas = __webpack_require__(223),
	    hashSet = __webpack_require__(224);

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	module.exports = Hash;


/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(12),
	    root = __webpack_require__(4);

	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');

	module.exports = Promise;


/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(12),
	    root = __webpack_require__(4);

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	module.exports = Set;


/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(56),
	    setCacheAdd = __webpack_require__(247),
	    setCacheHas = __webpack_require__(248);

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	module.exports = SetCache;


/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(12),
	    root = __webpack_require__(4);

	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');

	module.exports = WeakMap;


/***/ },
/* 176 */
/***/ function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	module.exports = apply;


/***/ },
/* 177 */
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	module.exports = arrayPush;


/***/ },
/* 178 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}

	module.exports = arrayReduce;


/***/ },
/* 179 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arraySome;


/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(58),
	    eq = __webpack_require__(27);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}

	module.exports = assignValue;


/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(5);

	/** Built-in value references. */
	var objectCreate = Object.create;

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} proto The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	var baseCreate = (function() {
	  function object() {}
	  return function(proto) {
	    if (!isObject(proto)) {
	      return {};
	    }
	    if (objectCreate) {
	      return objectCreate(proto);
	    }
	    object.prototype = proto;
	    var result = new object;
	    object.prototype = undefined;
	    return result;
	  };
	}());

	module.exports = baseCreate;


/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(177),
	    isFlattenable = __webpack_require__(226);

	/**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, depth, predicate, isStrict, result) {
	  var index = -1,
	      length = array.length;

	  predicate || (predicate = isFlattenable);
	  result || (result = []);

	  while (++index < length) {
	    var value = array[index];
	    if (depth > 0 && predicate(value)) {
	      if (depth > 1) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, depth - 1, predicate, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}

	module.exports = baseFlatten;


/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(93),
	    keys = __webpack_require__(67);

	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}

	module.exports = baseForOwn;


/***/ },
/* 184 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}

	module.exports = baseHasIn;


/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(18),
	    isObjectLike = __webpack_require__(13);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}

	module.exports = baseIsArguments;


/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(57),
	    equalArrays = __webpack_require__(101),
	    equalByTag = __webpack_require__(213),
	    equalObjects = __webpack_require__(214),
	    getTag = __webpack_require__(217),
	    isArray = __webpack_require__(2),
	    isBuffer = __webpack_require__(63),
	    isTypedArray = __webpack_require__(66);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;

	  if (!objIsArr) {
	    objTag = getTag(object);
	    objTag = objTag == argsTag ? objectTag : objTag;
	  }
	  if (!othIsArr) {
	    othTag = getTag(other);
	    othTag = othTag == argsTag ? objectTag : othTag;
	  }
	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;

	  if (isSameTag && isBuffer(object)) {
	    if (!isBuffer(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
	      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	  }
	  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}

	module.exports = baseIsEqualDeep;


/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(57),
	    baseIsEqual = __webpack_require__(95);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	module.exports = baseIsMatch;


/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(36),
	    isMasked = __webpack_require__(229),
	    isObject = __webpack_require__(5),
	    toSource = __webpack_require__(107);

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = baseIsNative;


/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(18),
	    isLength = __webpack_require__(64),
	    isObjectLike = __webpack_require__(13);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}

	module.exports = baseIsTypedArray;


/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(61),
	    nativeKeys = __webpack_require__(242);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = baseKeys;


/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(5),
	    isPrototype = __webpack_require__(61),
	    nativeKeysIn = __webpack_require__(243);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject(object)) {
	    return nativeKeysIn(object);
	  }
	  var isProto = isPrototype(object),
	      result = [];

	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = baseKeysIn;


/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	var baseEach = __webpack_require__(92),
	    isArrayLike = __webpack_require__(19);

	/**
	 * The base implementation of `_.map` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function baseMap(collection, iteratee) {
	  var index = -1,
	      result = isArrayLike(collection) ? Array(collection.length) : [];

	  baseEach(collection, function(value, key, collection) {
	    result[++index] = iteratee(value, key, collection);
	  });
	  return result;
	}

	module.exports = baseMap;


/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(187),
	    getMatchData = __webpack_require__(215),
	    matchesStrictComparable = __webpack_require__(105);

	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}

	module.exports = baseMatches;


/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(95),
	    get = __webpack_require__(260),
	    hasIn = __webpack_require__(261),
	    isKey = __webpack_require__(60),
	    isStrictComparable = __webpack_require__(104),
	    matchesStrictComparable = __webpack_require__(105),
	    toKey = __webpack_require__(34);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
	  };
	}

	module.exports = baseMatchesProperty;


/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	var assignMergeValue = __webpack_require__(91),
	    cloneBuffer = __webpack_require__(206),
	    cloneTypedArray = __webpack_require__(207),
	    copyArray = __webpack_require__(208),
	    initCloneObject = __webpack_require__(225),
	    isArguments = __webpack_require__(35),
	    isArray = __webpack_require__(2),
	    isArrayLikeObject = __webpack_require__(262),
	    isBuffer = __webpack_require__(63),
	    isFunction = __webpack_require__(36),
	    isObject = __webpack_require__(5),
	    isPlainObject = __webpack_require__(263),
	    isTypedArray = __webpack_require__(66),
	    toPlainObject = __webpack_require__(269);

	/**
	 * A specialized version of `baseMerge` for arrays and objects which performs
	 * deep merges and tracks traversed objects enabling objects with circular
	 * references to be merged.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {string} key The key of the value to merge.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} mergeFunc The function to merge values.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
	  var objValue = object[key],
	      srcValue = source[key],
	      stacked = stack.get(srcValue);

	  if (stacked) {
	    assignMergeValue(object, key, stacked);
	    return;
	  }
	  var newValue = customizer
	    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
	    : undefined;

	  var isCommon = newValue === undefined;

	  if (isCommon) {
	    var isArr = isArray(srcValue),
	        isBuff = !isArr && isBuffer(srcValue),
	        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

	    newValue = srcValue;
	    if (isArr || isBuff || isTyped) {
	      if (isArray(objValue)) {
	        newValue = objValue;
	      }
	      else if (isArrayLikeObject(objValue)) {
	        newValue = copyArray(objValue);
	      }
	      else if (isBuff) {
	        isCommon = false;
	        newValue = cloneBuffer(srcValue, true);
	      }
	      else if (isTyped) {
	        isCommon = false;
	        newValue = cloneTypedArray(srcValue, true);
	      }
	      else {
	        newValue = [];
	      }
	    }
	    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	      newValue = objValue;
	      if (isArguments(objValue)) {
	        newValue = toPlainObject(objValue);
	      }
	      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
	        newValue = initCloneObject(srcValue);
	      }
	    }
	    else {
	      isCommon = false;
	    }
	  }
	  if (isCommon) {
	    // Recursively merge objects and arrays (susceptible to call stack limits).
	    stack.set(srcValue, newValue);
	    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
	    stack['delete'](srcValue);
	  }
	  assignMergeValue(object, key, newValue);
	}

	module.exports = baseMergeDeep;


/***/ },
/* 196 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	module.exports = baseProperty;


/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(94);

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}

	module.exports = basePropertyDeep;


/***/ },
/* 198 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.reduce` and `_.reduceRight`, without support
	 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} accumulator The initial value.
	 * @param {boolean} initAccum Specify using the first or last element of
	 *  `collection` as the initial value.
	 * @param {Function} eachFunc The function to iterate over `collection`.
	 * @returns {*} Returns the accumulated value.
	 */
	function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
	  eachFunc(collection, function(value, index, collection) {
	    accumulator = initAccum
	      ? (initAccum = false, value)
	      : iteratee(accumulator, value, index, collection);
	  });
	  return accumulator;
	}

	module.exports = baseReduce;


/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(62),
	    overRest = __webpack_require__(246),
	    setToString = __webpack_require__(250);

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  return setToString(overRest(func, start, identity), func + '');
	}

	module.exports = baseRest;


/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	var constant = __webpack_require__(258),
	    defineProperty = __webpack_require__(100),
	    identity = __webpack_require__(62);

	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !defineProperty ? identity : function(func, string) {
	  return defineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant(string),
	    'writable': true
	  });
	};

	module.exports = baseSetToString;


/***/ },
/* 201 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;


/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(26),
	    arrayMap = __webpack_require__(90),
	    isArray = __webpack_require__(2),
	    isSymbol = __webpack_require__(65);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = baseToString;


/***/ },
/* 203 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	module.exports = baseUnary;


/***/ },
/* 204 */
/***/ function(module, exports) {

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	module.exports = cacheHas;


/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	var Uint8Array = __webpack_require__(88);

	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	  return result;
	}

	module.exports = cloneArrayBuffer;


/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(4);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined,
	    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var length = buffer.length,
	      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

	  buffer.copy(result);
	  return result;
	}

	module.exports = cloneBuffer;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(68)(module)))

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(205);

	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	module.exports = cloneTypedArray;


/***/ },
/* 208 */
/***/ function(module, exports) {

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	module.exports = copyArray;


/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(180),
	    baseAssignValue = __webpack_require__(58);

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      baseAssignValue(object, key, newValue);
	    } else {
	      assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}

	module.exports = copyObject;


/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(4);

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	module.exports = coreJsData;


/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(19);

	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    if (collection == null) {
	      return collection;
	    }
	    if (!isArrayLike(collection)) {
	      return eachFunc(collection, iteratee);
	    }
	    var length = collection.length,
	        index = fromRight ? length : -1,
	        iterable = Object(collection);

	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}

	module.exports = createBaseEach;


/***/ },
/* 212 */
/***/ function(module, exports) {

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	module.exports = createBaseFor;


/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(26),
	    Uint8Array = __webpack_require__(88),
	    eq = __webpack_require__(27),
	    equalArrays = __webpack_require__(101),
	    mapToArray = __webpack_require__(240),
	    setToArray = __webpack_require__(249);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag:
	      var convert = mapToArray;

	    case setTag:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
	      convert || (convert = setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= COMPARE_UNORDERED_FLAG;

	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	module.exports = equalByTag;


/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(67);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalObjects;


/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(104),
	    keys = __webpack_require__(67);

	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = keys(object),
	      length = result.length;

	  while (length--) {
	    var key = result[length],
	        value = object[key];

	    result[length] = [key, value, isStrictComparable(value)];
	  }
	  return result;
	}

	module.exports = getMatchData;


/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(26);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;


/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(170),
	    Map = __webpack_require__(55),
	    Promise = __webpack_require__(172),
	    Set = __webpack_require__(173),
	    WeakMap = __webpack_require__(175),
	    baseGetTag = __webpack_require__(18),
	    toSource = __webpack_require__(107);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';

	var dataViewTag = '[object DataView]';

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = baseGetTag(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : '';

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	module.exports = getTag;


/***/ },
/* 218 */
/***/ function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	module.exports = getValue;


/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(98),
	    isArguments = __webpack_require__(35),
	    isArray = __webpack_require__(2),
	    isIndex = __webpack_require__(59),
	    isLength = __webpack_require__(64),
	    toKey = __webpack_require__(34);

	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = castPath(path, object);

	  var index = -1,
	      length = path.length,
	      result = false;

	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result || ++index != length) {
	    return result;
	  }
	  length = object == null ? 0 : object.length;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isArguments(object));
	}

	module.exports = hasPath;


/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(33);

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}

	module.exports = hashClear;


/***/ },
/* 221 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = hashDelete;


/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(33);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	module.exports = hashGet;


/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(33);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}

	module.exports = hashHas;


/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(33);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	module.exports = hashSet;


/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(181),
	    getPrototype = __webpack_require__(103),
	    isPrototype = __webpack_require__(61);

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
	    ? baseCreate(getPrototype(object))
	    : {};
	}

	module.exports = initCloneObject;


/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(26),
	    isArguments = __webpack_require__(35),
	    isArray = __webpack_require__(2);

	/** Built-in value references. */
	var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

	/**
	 * Checks if `value` is a flattenable `arguments` object or array.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	 */
	function isFlattenable(value) {
	  return isArray(value) || isArguments(value) ||
	    !!(spreadableSymbol && value && value[spreadableSymbol]);
	}

	module.exports = isFlattenable;


/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(27),
	    isArrayLike = __webpack_require__(19),
	    isIndex = __webpack_require__(59),
	    isObject = __webpack_require__(5);

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	module.exports = isIterateeCall;


/***/ },
/* 228 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	module.exports = isKeyable;


/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(210);

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	module.exports = isMasked;


/***/ },
/* 230 */
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	module.exports = listCacheClear;


/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(31);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	module.exports = listCacheDelete;


/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(31);

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	module.exports = listCacheGet;


/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(31);

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	module.exports = listCacheHas;


/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(31);

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	module.exports = listCacheSet;


/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(171),
	    ListCache = __webpack_require__(30),
	    Map = __webpack_require__(55);

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	module.exports = mapCacheClear;


/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(32);

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = mapCacheDelete;


/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(32);

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	module.exports = mapCacheGet;


/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(32);

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	module.exports = mapCacheHas;


/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(32);

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	module.exports = mapCacheSet;


/***/ },
/* 240 */
/***/ function(module, exports) {

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	module.exports = mapToArray;


/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(264);

	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;

	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped(func) {
	  var result = memoize(func, function(key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });

	  var cache = result.cache;
	  return result;
	}

	module.exports = memoizeCapped;


/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(106);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);

	module.exports = nativeKeys;


/***/ },
/* 243 */
/***/ function(module, exports) {

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = nativeKeysIn;


/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(102);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(68)(module)))

/***/ },
/* 245 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;


/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(176);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return apply(func, this, otherArgs);
	  };
	}

	module.exports = overRest;


/***/ },
/* 247 */
/***/ function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	module.exports = setCacheAdd;


/***/ },
/* 248 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	module.exports = setCacheHas;


/***/ },
/* 249 */
/***/ function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	module.exports = setToArray;


/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	var baseSetToString = __webpack_require__(200),
	    shortOut = __webpack_require__(251);

	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = shortOut(baseSetToString);

	module.exports = setToString;


/***/ },
/* 251 */
/***/ function(module, exports) {

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 800,
	    HOT_SPAN = 16;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeNow = Date.now;

	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;

	  return function() {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);

	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}

	module.exports = shortOut;


/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(30);

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	  this.size = 0;
	}

	module.exports = stackClear;


/***/ },
/* 253 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	module.exports = stackDelete;


/***/ },
/* 254 */
/***/ function(module, exports) {

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	module.exports = stackGet;


/***/ },
/* 255 */
/***/ function(module, exports) {

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	module.exports = stackHas;


/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(30),
	    Map = __webpack_require__(55),
	    MapCache = __webpack_require__(56);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	module.exports = stackSet;


/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	var memoizeCapped = __webpack_require__(241);

	/** Used to match property names within property paths. */
	var reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoizeCapped(function(string) {
	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	module.exports = stringToPath;


/***/ },
/* 258 */
/***/ function(module, exports) {

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}

	module.exports = constant;


/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	var baseFlatten = __webpack_require__(182);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/**
	 * Recursively flattens `array`.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Array
	 * @param {Array} array The array to flatten.
	 * @returns {Array} Returns the new flattened array.
	 * @example
	 *
	 * _.flattenDeep([1, [2, [3, [4]], 5]]);
	 * // => [1, 2, 3, 4, 5]
	 */
	function flattenDeep(array) {
	  var length = array == null ? 0 : array.length;
	  return length ? baseFlatten(array, INFINITY) : [];
	}

	module.exports = flattenDeep;


/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(94);

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	module.exports = get;


/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	var baseHasIn = __webpack_require__(184),
	    hasPath = __webpack_require__(219);

	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}

	module.exports = hasIn;


/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(19),
	    isObjectLike = __webpack_require__(13);

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	module.exports = isArrayLikeObject;


/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(18),
	    getPrototype = __webpack_require__(103),
	    isObjectLike = __webpack_require__(13);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}

	module.exports = isPlainObject;


/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(56);

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}

	// Expose `MapCache`.
	memoize.Cache = MapCache;

	module.exports = memoize;


/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	var baseMerge = __webpack_require__(97),
	    createAssigner = __webpack_require__(99);

	/**
	 * This method is like `_.assign` except that it recursively merges own and
	 * inherited enumerable string keyed properties of source objects into the
	 * destination object. Source properties that resolve to `undefined` are
	 * skipped if a destination value exists. Array and plain object properties
	 * are merged recursively. Other objects and value types are overridden by
	 * assignment. Source objects are applied from left to right. Subsequent
	 * sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.5.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var object = {
	 *   'a': [{ 'b': 2 }, { 'd': 4 }]
	 * };
	 *
	 * var other = {
	 *   'a': [{ 'c': 3 }, { 'e': 5 }]
	 * };
	 *
	 * _.merge(object, other);
	 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
	 */
	var merge = createAssigner(function(object, source, srcIndex) {
	  baseMerge(object, source, srcIndex);
	});

	module.exports = merge;


/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	var baseMerge = __webpack_require__(97),
	    createAssigner = __webpack_require__(99);

	/**
	 * This method is like `_.merge` except that it accepts `customizer` which
	 * is invoked to produce the merged values of the destination and source
	 * properties. If `customizer` returns `undefined`, merging is handled by the
	 * method instead. The `customizer` is invoked with six arguments:
	 * (objValue, srcValue, key, object, source, stack).
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} sources The source objects.
	 * @param {Function} customizer The function to customize assigned values.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * function customizer(objValue, srcValue) {
	 *   if (_.isArray(objValue)) {
	 *     return objValue.concat(srcValue);
	 *   }
	 * }
	 *
	 * var object = { 'a': [1], 'b': [2] };
	 * var other = { 'a': [3], 'b': [4] };
	 *
	 * _.mergeWith(object, other, customizer);
	 * // => { 'a': [1, 3], 'b': [2, 4] }
	 */
	var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
	  baseMerge(object, source, srcIndex, customizer);
	});

	module.exports = mergeWith;


/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(196),
	    basePropertyDeep = __webpack_require__(197),
	    isKey = __webpack_require__(60),
	    toKey = __webpack_require__(34);

	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}

	module.exports = property;


/***/ },
/* 268 */
/***/ function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = stubFalse;


/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(209),
	    keysIn = __webpack_require__(108);

	/**
	 * Converts `value` to a plain object flattening inherited enumerable string
	 * keyed properties of `value` to own properties of the plain object.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {Object} Returns the converted plain object.
	 * @example
	 *
	 * function Foo() {
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.assign({ 'a': 1 }, new Foo);
	 * // => { 'a': 1, 'b': 2 }
	 *
	 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	 * // => { 'a': 1, 'b': 2, 'c': 3 }
	 */
	function toPlainObject(value) {
	  return copyObject(value, keysIn(value));
	}

	module.exports = toPlainObject;


/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(202);

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	module.exports = toString;


/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	if (true) {
	  var invariant = __webpack_require__(86);
	  var warning = __webpack_require__(87);
	  var ReactPropTypesSecret = __webpack_require__(112);
	  var loggedTypeFailures = {};
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (true) {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}

	module.exports = checkPropTypes;


/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(85);
	var invariant = __webpack_require__(86);
	var warning = __webpack_require__(87);

	var ReactPropTypesSecret = __webpack_require__(112);
	var checkPropTypes = __webpack_require__(271);

	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (true) {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if (("development") !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	       true ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	       true ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning(
	          false,
	          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction.thatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {;(function (window) {
	'use strict'; 
	var func = function(window, undef) {
	'use strict'; 

	/**
	 * Tweene - JavaScript Animation Proxy
	 * @version 0.5.11
	 * @link http://tweene.com
	 *
	 * Copyright (c) 2014, Federico Orru'   <federico@buzzler.com>
	 *
	 * @license Artistic License 2.0
	 * See LICENSE.txt for details
	 *
	 */

	/* jshint -W008 */

	/**
	 * Common data and utility functions used internally.
	 * None of them is exported.
	 */

	if(jQuery && window)
	{
	    var $ = jQuery;
	}

	// used for recognize transform properties
	var transformProperties = 'scale|scale3d|translate|translate3d|rotate|rotate3d|rotation|skew|scaleX|scaleY|scaleZ|translateX|translateY|translateZ|x|y|z|rotateX|rotateY|rotateZ|skewX|skewY'.split('|');

	// compound transforms are on the begin of the transformProperties array
	var compoundTransforms = transformProperties.slice(0, 8);

	// compound properties we parse to obtain a list of key - value couples
	var compoundNames = 'margin|padding|borderColor|borderWidth|borderRadius'.split('|');
	var compoundDirections = ['Top', 'Right', 'Bottom', 'Left'];
	var radiusDirections = ['TopLeft', 'TopRight', 'BottomRight', 'BottomLeft'];

	// base name and aliases for event names. Those with an empty string as value are the names used internally
	var handlersMap = {
	    begin: '',
	    end: '',
	    progress: '',
	    loop: '',
	    reverse: '',
	    onBegin: 'begin',
	    start: 'begin',
	    onStart: 'begin',
	    onEnd: 'end',
	    complete: 'end',
	    onComplete: 'end',
	    finish: 'end',
	    onFinish: 'end',
	    done: 'end',
	    onProgress: 'progress',
	    update: 'progress',
	    onUpdate: 'progress',
	    onLoop: 'loop',
	    onRepeat: 'loop',
	    onReverse: 'reverse',
	    onReverseComplete: 'reverse'
	};


	// base name and aliases for option names. Those with an empty string as value are the names used internally
	var optionsMap = {
	    delay: '',
	    loops: '',
	    loopsDelay: '',
	    yoyo: '',
	    target: '',
	    speed: '',
	    sleep: 'delay',
	    repeat: 'loops',
	    repeatDelay: 'loopsDelay',
	    timeScale: 'speed'
	};


	// base name and aliases for tween option names
	var tweenOptionsMap = {
	    easing: '',
	    duration: '',
	    paused: '',
	    to: '',
	    from: '',
	    then: '',
	    ease: 'easing'
	};


	// predefined easing shortcuts
	var easings = {
	    linear: [.25, .25, .75, .75],
	    ease: [.25, 0.1, 0.25, 1],
	    'ease-in': [.42, 0, 1, 1],
	    'ease-out': [0, 0, .58, 1],
	    'ease-in-out': [.42, 0, .58, 1],
	    'in': [.42, 0, 1, 1],
	    out: [0, 0, .58, 1],
	    'in-out': [.42, 0, .58, 1],
	    snap: [0, 1, .5, 1],
	    easeInCubic: [.550,.055,.675,.190],
	    easeOutCubic: [.215,.61,.355,1],
	    easeInOutCubic: [.645,.045,.355,1],
	    easeInCirc: [.6,.04,.98,.335],
	    easeOutCirc: [.075,.82,.165,1],
	    easeInOutCirc: [.785,.135,.15,.86],
	    easeInExpo: [.95,.05,.795,.035],
	    easeOutExpo: [.19,1,.22,1],
	    easeInOutExpo: [1,0,0,1],
	    easeInQuad: [.55,.085,.68,.53],
	    easeOutQuad: [.25,.46,.45,.94],
	    easeInOutQuad: [.455,.03,.515,.955],
	    easeInQuart: [.895,.03,.685,.22],
	    easeOutQuart: [.165,.84,.44,1],
	    easeInOutQuart: [.77,0,.175,1],
	    easeInQuint: [.755,.05,.855,.06],
	    easeOutQuint: [.23,1,.32,1],
	    easeInOutQuint: [.86,0,.07,1],
	    easeInSine: [.47,0,.745,.715],
	    easeOutSine: [.39,.575,.565,1],
	    easeInOutSine: [.445,.05,.55,.95],
	    easeInBack: [.6,-.28,.735,.045],
	    easeOutBack: [.175, .885,.32,1.275],
	    easeInOutBack: [.68,-.55,.265,1.55]
	};


	// predefined duration shortcuts
	var durations = {
	    fast: '200ms',
	    slow: '600ms'
	};


	// predefined speed shortcuts
	var speeds = {
	    half: 0.5,
	    'double': 2
	};



	function isFunction(value)
	{
	    return typeof value == 'function';
	}



	function isNumber(value)
	{
	    return typeof value == 'number' || (value && typeof value == 'object' && Object.prototype.toString.call(value) == '[object Number]') || false;
	}



	function isString(value)
	{
	    return typeof value == 'string' || (value && typeof value == 'object' && Object.prototype.toString.call(value) == '[object String]') || false;
	}



	var isArray = Array.isArray || function(value)
	{
	    return value && typeof value == 'object' && typeof value.length == 'number' && Object.prototype.toString.call(value) == '[object Array]';
	};



	function isObject(value)
	{
	    var type = typeof value;
	    return type === 'function' || type === 'object' && !!value;
	}


	/*
	 * @link http://stackoverflow.com/questions/18082/validate-decimal-numbers-in-javascript-isnumeric
	 */
	function isNumeric(value)
	{
	    return !isArray(value) && (value - parseFloat(value) + 1) >= 0;
	}


	function isEmpty(obj)
	{
	    for(var name in obj)
	    {
	        if(obj.hasOwnProperty(name))
	        {
	            return false;
	        }
	    }
	    return true;
	}



	function seemsPlainObject(value)
	{
	    return  isObject(value) && !(value instanceof Function) && value.constructor == Object;
	}



	function extendObject(obj)
	{
	    if (!isObject(obj))
	    {
	        return obj;
	    }

	    var source, name, i, length;
	    for (i = 1, length = arguments.length; i < length; i++)
	    {
	        source = arguments[i];
	        for (name in source)
	        {
	            obj[name] = source[name];
	        }
	    }
	    return obj;
	}


	function cloneObject(obj, deep)
	{
	    if (isFunction(obj) || !isObject(obj))
	    {
	        return obj;
	    }
	    if(isArray(obj))
	    {
	        obj = obj.slice();
	        if(deep)
	        {
	            for(var i = 0, end = obj.length; i < end; i++)
	            {
	                obj[i] = cloneObject(obj[i], deep);
	            }
	        }
	    }
	    else
	    {
	        obj = extendObject({}, obj);
	        if(deep)
	        {
	            for(var name in obj)
	            {
	                if(obj.hasOwnProperty(name))
	                {
	                    obj[name] = cloneObject(obj[name], deep);
	                }
	            }
	        }
	    }

	    return obj;
	}



	function keys(obj)
	{
	    if(Object.keys)
	    {
	        return Object.keys(obj);
	    }
	    var ks = [];
	    for (var key in obj)
	    {
	        if(obj.hasOwnProperty(key))
	        {
	            ks.push(key);
	        }
	    }
	    return ks;
	}


	// simplified version of Array.indexOf polyfill
	function inArray(array, search)
	{
	    if(!isArray(array))
	    {
	        throw 'expected an array as first param';
	    }

	    if(array.indexOf)
	    {
	        return array.indexOf(search);
	    }

	    for(var i = 0, end = array.length; i < end; i++)
	    {
	        if(array[i] === search)
	        {
	            return i;
	        }
	    }
	    return -1;
	}


	// used to convert arguments to real array
	function toArray(args, pos)
	{
	    if(pos === void 0)
	    {
	        pos = 0;
	    }
	    return Array.prototype.slice.call(args, pos);
	}


	/**
	 * convert time from seconds to milliseconds and vice versa
	 *
	 * @param {number} value
	 * @param {string} fromUnit - 's' | 'ms'
	 * @param {string} toUnit - 's' | 'ms'
	 * @returns {Number}
	 */
	function convertTime(value, fromUnit, toUnit)
	{
	    if(fromUnit != toUnit && value !== 0)
	    {
	        return value * (toUnit == 's'? 0.001 : 1000);
	    }
	    return value;
	}



	/*
	 *  Based on Bez http://github.com/rdallasgray/bez
	 *
	 * Copyright Robert Dallas Gray. All rights reserved.
	 * Provided under the FreeBSD license: https://github.com/rdallasgray/bez/blob/master/LICENSE.txt
	*/
	function bezier(x1, y1, x2, y2)
	{
	    var p1 = [x1, y1], p2 = [x2, y2],
	        A = [null, null], B = [null, null], C = [null, null],

	        bezCoOrd = function(time, ax)
	        {
	            C[ax] = 3 * p1[ax]; B[ax] = 3 * (p2[ax] - p1[ax]) - C[ax]; A[ax] = 1 - C[ax] - B[ax];
	            return time * (C[ax] + time * (B[ax] + time * A[ax]));
	        },

	        xDeriv = function(time)
	        {
	            return C[0] + time * (2 * B[0] + 3 * A[0] * time);
	        },

	        xForT = function(time)
	        {
	            var x = time, i = 0, z;
	            while (++i < 14)
	            {
	                z = bezCoOrd(x, 0) - time;
	                if (Math.abs(z) < 1e-3) break;
	                x -= z / xDeriv(x);
	            }
	            return x;
	        };

	    return function(time) {
	        return bezCoOrd(xForT(time), 1);
	    };
	}


	/**
	 * take as input compound properties defined as a space separated string of values and return the list of single value properties
	 *
	 *   padding: 5 => paddingTop: 5, paddingRight: 5, paddingBottom: 5, paddingLeft: 5
	 *   border-width: 2px 1px => borderTopWidth: 2px, borderRightWidth: 1px, borderBottomWidth: 2px, borderLeftWidth: 1px
	 *
	 * @param {string} name
	 * @param {string} value
	 * @returns {object}
	 */
	function compoundMapping(name, value)
	{
	    var parts, nameParts, prefix, suffix, dirs, values = {}, easing, i;
	    if(isArray(value))
	    {
	        value = value[0];
	        easing = value[1];
	    }
	    else
	    {
	        easing = null;
	    }

	    parts = String(value).split(/\s+/);

	    switch(parts.length)
	    {
	        case 1: parts = [parts[0], parts[0], parts[0], parts[0]]; break;
	        case 2: parts = [parts[0], parts[1], parts[0], parts[1]]; break;
	        case 3: parts = [parts[0], parts[1], parts[2], parts[1]]; break;
	    }

	    nameParts = decamelize(name).split('-');
	    prefix = nameParts[0];
	    suffix = nameParts.length > 1? nameParts[1].substr(0, 1).toUpperCase() + nameParts[1].substr(1) : '';

	    dirs = name == 'borderRadius'? radiusDirections : compoundDirections;

	    for(i = 0; i < 4; i++)
	    {
	        values[prefix + dirs[i] + suffix] = easing? [parts[i], easing] : parts[i];
	    }
	    return values;
	}


	/**
	 *  split commpound transform values
	 *
	 *   scale: 1.2 => scaleX: 1.2, scaleY: 1.2
	 *   rotate3d: 30, 60, 40 => rotateX: 30, rotateY: 60, rotateZ: 40
	 *
	 * @param {string} name
	 * @param {string} value
	 * @returns {object}
	 */
	function transformMapping(name, value)
	{
	    var easing, dirs = ['X', 'Y', 'Z'], values = {}, parts, baseName;
	    if(isArray(value))
	    {
	        value = value[0];
	        easing = value[1];
	    }
	    else
	    {
	        easing = null;
	    }

	    parts = String(value).split(/\s*,\s*/);
	    baseName = name.indexOf('3') !== -1? name.substr(0, name.length - 2) : name;

	    if(name == 'rotate3d')
	    {
	        if(parts.length == 4)
	        {
	            dirs = [parts[0] == '1'? 'X' : (parts[1] == '1'? 'Y' : 'Z')];
	            parts[0] = parts[3];
	        }
	        else
	        {
	            throw 'invalid rotate 3d value';
	        }
	    }
	    else
	    {
	        switch(parts.length)
	        {
	            // for rotations, a single value is passed as Z-value, while for other transforms it is applied to X and Y
	            case 1:
	                parts = baseName == 'rotate' || baseName == 'rotation'? [null, null, parts[0]] : [parts[0], parts[0], null];
	            break;

	            case 2:
	                parts = [parts[0], parts[1], null];
	            break;
	        }

	    }

	    for(var i = 0; i < dirs.length; i++)
	    {
	        if(parts[i] !== null)
	        {
	            values[baseName + dirs[i]] = easing? [parts[i], easing] : parts[i];
	        }
	    }
	    return values;
	}



	function isTransformProperty(name)
	{
	    return (inArray(transformProperties, name) != -1);
	}


	// border-bottom-width -> borderBottomWidth
	function camelize(name)
	{
	    return name.replace(/(\-[a-z])/g, function(value) {
	        return value.substr(1).toUpperCase();
	    });
	}


	// borderBottomWidth -> border-bottom-width
	function decamelize(name)
	{
	    return name.replace(/([A-Z])/g, '-$1').toLowerCase();
	}


	/**
	 * accept a speed name shortcuts or a number and give back an acceptable positive value.
	 * Fallback to 1 if value is out of valid range
	 *
	 * @param {string|number} value
	 * @returns {number}
	 */
	function parseSpeed(value)
	{
	    if(value in speeds)
	    {
	        value = speeds[value];
	    }

	    value = parseFloat(value);
	    if(isNaN(value) || !value || value <= 0)
	    {
	        value = 1;
	    }
	    return value;
	}




	/**
	 * Tweene global class, is the unique identifier exported
	 *
	 * You will never need to instantiate a Tweene object. You have to use Tweene static methods
	 * in order to obtain instances of tween and timeline objects of the different drivers
	 *
	 * @class
	 *
	 */
	var Tweene = function()
	{
	    var _self = this;

	    // used for generate unique identifier for any tweene object (tweens, timelines, callbacks and labels)
	    this._idCounter = 0;

	    // internally, all time values use this unit
	    this._coreTimeUnit = 'ms';

	    // time unit used when pure numbers are passed as delay or duration values. Users can change this value any time
	    // when the user requires only GSAP driver, it defaults to 's' in order to mimic the library native API
	    this.defaultTimeUnit = 'ms';

	    this._macros = {};

	    this.easings = easings;

	    this.durations = durations;

	    this.speeds = speeds;

	    this.defaultDriver = 'jquery';

	    this.defaultEasing = 'easeOutQuad';

	    this.defaultDuration = '400ms';

	    // container for registered drivers
	    var _drivers = {
	            tween: {},
	            timeline: {}
	        },


	        /**
	         * Create a tween or timeline object of the specified driver. If driverName is not given, it fallbacks to default driver
	         *
	         * @param {string} 'tween' or 'timeline'
	         * @param {string} [driverName] - one of the registered driver's name
	         * @returns {object} tween or timeline object
	         */
	        _getInstance = function(type, driverName)
	        {
	            var d, i;
	            driverName = (driverName? driverName : _self.defaultDriver).toLowerCase();

	            if(driverName in _drivers[type])
	            {
	                d = _drivers[type][driverName];
	                i = new d();
	                i.driverName = driverName;
	                return i;
	            }
	            throw 'Driver ' + name + ' not found';
	        },


	        /**
	         * Common method used inside from(), to() and fromTo() to create a tween and pass arguments to it
	         *
	         * @param {arguments} args - list of arguments passed to original public method
	         * @param {string} method - 'from' | 'to' | 'fromTo'
	         * @returns {object} - return a tween object
	         */
	        _tweenNow = function(args, method)
	        {
	            var tw = _getInstance('tween');
	            if(args.length)
	            {
	                args = toArray(args, 0);
	                tw.target(args.shift())[method].apply(tw, args);
	            }

	            return tw._immediateStart? tw.play() : tw;
	        };


	    /**
	     * Register an animation driver
	     *
	     * @param {string} name - name of the driver
	     * @param {string} type - 'tween' | 'timeline'
	     * @param {function} construct - constructor function that defines the driver class
	     * @returns {Tweene}
	     */
	    this.registerDriver = function(name, type, construct)
	    {
	        type = type.toLowerCase();
	        if(type != 'tween')
	        {
	            type = 'timeline';
	        }
	        _drivers[type][name.toLowerCase()] = construct;
	        return this;
	    };


	    /**
	     * Define a macro for tween objects
	     * @link http://tweene.com/docs/#macro
	     *
	     * @param {string} name
	     * @param {function} macro - inside the function, 'this' refers to the tween object
	     * @returns {Tweene}
	     */
	    this.registerMacro = function(name, macro)
	    {
	        this._macros[name] = macro;
	        return this;
	    };


	    /**
	     * Return an instance of a tween object
	     * @link http://tweene.com/docs/#createTween
	     *
	     * @param {object|string} [target] jquery object or string selector of the dom element(s) to be animated
	     * @param {string} [driver]
	     * @returns {object}
	     */
	    this.get = function(target, driver)
	    {
	        var t = _getInstance('tween', driver);
	        return target? t.target(target) : t;
	    };


	    /**
	     * Apply instantly the properties values to the target
	     *
	     * @param {object|string} target
	     * @param {object} values - CSS property - value map
	     * @returns {unresolved}
	     */
	    this.set = function(target, values)
	    {
	        return _getInstance('tween').target(target).set(values);
	    };


	    /**
	     * Create a tween object for a 'to' animation and pass the arguments to it. First argument is always the target.
	     * If you don't set paused: true in the options passed, the tween will start immediately.
	     * @link http://tweene.com/docs/#tweenTo
	     *
	     * @returns {object} - return the tween object
	     */
	    this.to = function()
	    {
	        return _tweenNow(arguments, 'to');
	    };


	    /**
	     * Create a tween object for a 'from' animation and pass the arguments to it. First argument is always the target.
	     * If you don't set paused: true in the options passed, the tween will start immediately.
	     * @link http://tweene.com/docs/#tweenFrom
	     *
	     * @returns {object} - return the tween object
	     */
	    this.from = function()
	    {
	        return _tweenNow(arguments, 'from');
	    };


	    /**
	     * Create a tween object for a 'fromTo' animation and pass the arguments to it. First argument is always the target.
	     * If you don't set paused: true in the options passed, the tween will start immediately.
	     * @link http://tweene.com/docs/#tweenFromTo
	     *
	     * @returns {object} - return the tween object
	     */
	    this.fromTo = function()
	    {
	        return _tweenNow(arguments, 'fromTo');
	    };


	    /**
	     * Create a timeline object
	     * @link http://tweene.com/docs/#createTimeline
	     *
	     * @param {object|string} [target] - it checks if the object passed as first param is a plain object (options) or not (target)
	     * @param {object} [options]
	     * @param {string} driver - name of the driver
	     * @returns {object} - a timeline object
	     */
	    this.line = function(target, options, driver)
	    {
	        // we assume that targets cannot be plain objects
	        var lineTarget = (isObject(target) && !seemsPlainObject(target))  || isString(target)? target : null;
	        // if no target is passed, unshift arguments by one position
	        if(!lineTarget)
	        {
	            options = arguments[0];
	            driver = arguments[1];
	        }
	        options = seemsPlainObject(options)? options : {};
	        // driver can be specified also with a 'driver' property inside options object
	        driver = (driver !== void 0)? driver : 'driver' in options? options.driver : null;
	        return _getInstance('timeline', driver)
	            .options(options)
	            .target(lineTarget);
	    };

	};

	var Tw = new Tweene();

	if(window)
	{
	    window.Tweene = Tw;
	}

	/**
	 * Tweene - JavaScript Animation Proxy
	 *
	 * @link http://tweene.com
	 *
	 * Copyright (c) 2014, Federico Orru'   <federico@buzzler.com>
	 *
	 * @license Artistic License 2.0
	 * See LICENSE.txt for details
	 *
	 */



	/**
	 * Vars and methods common to every tween and timeline, whatever is the driver used
	 * @mixin
	 *
	 */
	var Common = function()
	{
	    // unique identifier
	    this._id = ++ Tw._idCounter;
	    this._coreTimeUnit = Tw._coreTimeUnit;
	    this._timeUnit = Tw.defaultTimeUnit;

	    this._parent = null;

	    this._target = null;

	    this._duration = 0;

	    this._speed = 1;

	    this._delay = 0;

	    this._loops = 0;

	    this._loopsDelay = 0;

	    this._loopsCount = 0;

	    this._yoyo = false;

	    this._fwd = true;

	    this._localFwd = true;

	    this._ready = false;

	    this._running = false;

	    // event handlers set by user
	    this._handlers = {
	        begin: null,
	        end: null,
	        reverse: null,
	        progress: null,
	        loop: null
	    };

	    // event handlers set internally
	    this._coreHandlers = {
	        _begin: [],
	        _end: [],
	        begin: [],
	        end: [],
	        reverse: [],
	        progress: [],
	        loop : []
	    };


	    /**
	     * Play the animation in forward direction
	     * @link http://tweene.com/docs/#play
	     *
	     * @returns {this}
	     */
	    this.play = function()
	    {
	        this._fwd = true;
	        this._playTween();
	        return this;
	    };


	    /**
	     * Play the animation in backward direction from its current position
	     * @link http://tweene.com/docs/#reverse
	     *
	     * @returns {this}
	     */
	    this.reverse = function()
	    {
	        this._fwd = false;
	        this._reverseTween();
	        return this;
	    };


	    /**
	     * Pause the animation on its current state.
	     * @link http://tweene.com/docs/#pause
	     *
	     * @returns {this}
	     */
	    this.pause = function()
	    {
	        if(this._ready)
	        {
	            this._pauseTween();
	        }
	        return this;
	    };


	    /**
	     * Resume a previously paused animation without affecting the current direction
	     * @link http://tweene.com/docs/#resume
	     *
	     * @returns {this}
	     */
	    this.resume = function()
	    {
	        this._resumeTween();
	        return this;
	    };


	    /**
	     * Restart animation in forward direction.
	     * Reset also loops counter.
	     * Initial delay is performed only on the very first start, not on restart.
	     * @link http://tweene.com/docs/#restart
	     *
	     * @returns {this}
	     */
	    this.restart = function()
	    {
	        this._restartTween();
	        return this;
	    };


	    /**
	     * Go back to initial or final position accordingly to the value of direction. Intended to be used internally, you don't have to call this directly.
	     *
	     * @returns {this}
	     */
	    this.back = function()
	    {
	        this._backTween(this._localFwd? 'begin' : 'end');
	        return this;
	    };


	    /**
	     * Get or set the speed of the current tween/timeline. Normal speed is 1, so 2 is double speed and 0.5 is half speed.
	     * It's usable both before and during the animation.
	     * It Accepts also string shortcut defined in Tweene.speeds
	     * @link http://tweene.com/docs/#speedControl
	     *
	     * @param {number} [value]
	     * @returns {number|this}
	     */
	    this.speed = function(value)
	    {
	        if(value === void 0)
	        {
	            return this._speed;
	        }

	        value = parseSpeed(value);
	        if(value != this._speed)
	        {
	            this._speed = value;
	            this._speedTween();
	        }
	        return this;
	    };


	    /**
	     * Alias for speed()
	     * @see speed
	     *
	     */
	    this.timeScale = function()
	    {
	        return this.speed.apply(this, arguments);
	    };


	    /**
	     * Return the current playhead time (a value between 0 and duration) in time unit set in Tweene.defaultTimeUnit
	     *
	     * @returns {number}
	     */
	    this.time = function()
	    {
	        return Math.round(convertTime(this._getPosition(), this._coreTimeUnit, this._timeUnit) * 1000) / 1000;
	    };


	    /**
	     * Return the current playhead position in percent (a value between 0 and 1)
	     *
	     * @returns {number}
	     */
	    this.progress = function()
	    {
	        return Math.round(this._getProgress() * 1000) / 1000;
	    };


	    /**
	     * Return true if the animation is currently paused
	     * Tt's true also when the animation is finished or not yet started
	     *
	     * @returns {boolean}
	     */
	    this.paused = function()
	    {
	        return this._getPaused();
	    };


	    /**
	     * Return true if the animation direction is currently reversed
	     *
	     * @returns {boolean}
	     */
	    this.reversed = function()
	    {
	        return !this._fwd;
	    };


	    /**
	     * Get/Set the tween duration (only get available for timeline)
	     * Accept numeric values interpreted as Tweene.defaultTimeUnit
	     * or string with unit suffix, so '500ms' or '0.5s'
	     *
	     * @param {string|number} [value]
	     * @returns {this|number}
	     *
	     */
	    this.duration = function(value)
	    {
	        if(value !== void 0)
	        {
	            if(this._type != 'timeline')
	            {
	                this._duration = this._parseTime(value);
	                this.invalidate();
	            }
	            return this;
	        }

	        // timeline needs to process its children in order to calculate the overall duration
	        if(this.type == 'timeline')
	        {
	            this.prepare();
	        }
	        return Math.round(convertTime(this._duration, this._coreTimeUnit, this._timeUnit) * 1000) / 1000;
	    };


	    /**
	     * Get the tween/timeline total duration including loops and loopsDelay, in the timeUnit set in Tweene.defaultTimeUnit
	     * In case of infinite loop, it returns Infinity
	     *
	     * @returns {number}
	     */
	    this.totalDuration = function()
	    {
	        if(this.type == 'timeline')
	        {
	            this.prepare();
	        }
	        return Math.round(convertTime(this._getTotalDuration() * this._speed, this._coreTimeUnit, this._timeUnit) * 1000) / 1000;
	    };


	    /**
	     * Set the animation target (jquery or dom objects commonly, accordingly to the specific animation library in use)
	     * @link http://tweene.com/docs/#target
	     *
	     * @param {string|object} [value]
	     * @returns {string|object|this}
	     */
	    this.target = function(value)
	    {
	        if(value === void 0)
	        {
	            return this._target;
	        }
	        this._setTarget(value);
	        return this;
	    };


	    /**
	     * Get/Set the tween initial delay
	     * Accept numeric values interpreted as Tweene.defaultTimeUnit
	     * or string with unit suffix, so '500ms' or '0.5s'
	     * @link http://tweene.com/docs/#delay
	     *
	     * @param {string|number} [value]
	     * @returns {number|this}
	     */
	    this.delay = function(value)
	    {
	        if(value === void 0)
	        {
	            return convertTime(this._delay, this._coreTimeUnit, this._timeUnit);
	        }
	        this._delay = this._parseTime(value);
	        this.invalidate();
	        return this;
	    };



	    /**
	     * Set the number of animation repeats. Default is 0, so loops(1) will execute the tween/timeline twice.
	     * A value of -1 means 'Infinite loop'.
	     * @link http://tweene.com/docs/#loops
	     *
	     * @param {number} value
	     * @returns {this}
	     */
	    this.loops = function(value)
	    {
	        if(value === void 0)
	        {
	            return this._loops;
	        }
	        value = parseInt(value);
	        if(isNaN(value))
	        {
	            value = 0;
	        }
	        else if(!isFinite(value))
	        {
	            value = -1;
	        }
	        this._loops = value;
	        this.invalidate();
	        return this;
	    };


	    /**
	     * Enable/disable yoyo behavior or retrieve its status.
	     * Yoyo makes sense only when used with looops.
	     * @link http://tweene.com/docs/#yoyoEffect
	     *
	     * @param {boolean} [value]
	     * @returns {boolean|this}
	     */
	    this.yoyo = function(value)
	    {
	        if(value === void 0)
	        {
	            return this._yoyo;
	        }
	        this._yoyo = !!value;
	        return this;
	    };


	    /**
	     * Get/Set the value of delay before each loop iteration
	     * Accept numeric values interpreted as Tweene.defaultTimeUnit
	     * or string with unit suffix, so '500ms' or '0.5s'
	     * @link http://tweene.com/docs/#loopsDelay
	     *
	     * @param {string|number} [value]
	     * @returns {number|this}
	     */
	    this.loopsDelay = function(value)
	    {
	        if(value === void 0)
	        {
	            return convertTime(this._loopsDelay, this._coreTimeUnit, this._timeUnit);
	        }
	        this._loopsDelay = this._parseTime(value);
	        this.invalidate();
	        return this;
	    };


	    /**
	     * Add event handler.
	     * First param is the event name,
	     * second param is the callback function,
	     * third (optional) array of params to pass to the callback
	     * fourth (optional) scope for the callback (the default is the tween / timeline object that will raise the event)
	     *
	     * Available events:
	     *  begin | onBegin | start | onStart:
	     *      raised on the animation start
	     *
	     *  end | onEnd | complete | onComplete | finish | onFinish | done:
	     *      raised on the animation end, after all loops (a tween with infinite loops will never fire this event)
	     *
	     *  reverse | onReverse | onReverseComplete:
	     *      raised when the animation ends in backward direction, so at the start position.
	     *
	     *  progress | onProgress | update | onUpdate:
	     *      fires periodically during the tween. The frequency of the call
	     *      could be different for any animation library used.
	     *      When the library does not offer native progress event, it is emulated
	     *      via RequestAnimationFrame
	     *
	     *  loop | onLoop | onRepeat:
	     *      raised on each loop iteration
	     *
	     *
	     * @link http://tweene.com/docs/#events
	     *
	     * @param {string} name
	     * @param {function|null} callback - pass null to remove a previously set event handler
	     * @param {array} [params]
	     * @param {object} [scope]
	     * @returns {this}
	     */
	    this.on = function(name, callback)
	    {
	        if(name in handlersMap)
	        {
	            name = handlersMap[name].length? handlersMap[name] : name;
	            if(callback === null)
	            {
	                this._handlers[name] = null;
	            }
	            else
	            {
	                this._handlers[name] = {
	                    callback: callback,
	                    params: arguments.length > 2? (isArray(arguments[2])? arguments[2] : [arguments[2]]) : [],
	                    scope: arguments.length > 3 && arguments[3] !== null? arguments[3] : this
	                };
	            }
	        }
	        return this;
	    };


	    /**
	     * Used internally for register core event handlers
	     *
	     * @param {string} name
	     * @param {string} id
	     * @param {function} callback
	     * @param {object} [scope]
	     * @param {array} [params]
	     * @param {boolean} [priority]
	     * @returns {this}
	     */
	    this.setCoreHandler = function(name, id, callback, scope, params, priority)
	    {
	        this.unsetCoreHandler(name, id);
	        var entry = {id: id, callback: callback, scope: scope || this, params: params || []};

	        if(priority)
	        {
	            this._coreHandlers[name].unshift(entry);
	        }
	        else
	        {
	            this._coreHandlers[name].push(entry);
	        }

	        return this;
	    };


	    /**
	     * Used internally for unregister core event handlers
	     *
	     * @param {string} name
	     * @param {string} id
	     * @returns {this}
	     */
	    this.unsetCoreHandler = function(name, id)
	    {
	        for(var i = 0, end = this._coreHandlers[name].length; i < end; i++)
	        {
	            if(this._coreHandlers[name][i].id == id)
	            {
	                this._coreHandlers[name].splice(i, 1);
	                break;
	            }
	        }
	        return this;
	    };


	    /**
	     * Reset _ready flag every time that one of the internal properties that need to be processed before running is changed
	     *
	     * @returns {this}
	     */
	    this.invalidate = function()
	    {
	        if(!this._running)
	        {
	            if(this._parent)
	            {
	                this._parent.invalidate();
	            }
	            this._ready = false;
	        }
	        return this;
	    };


	    /**
	     * Get/Set the parent object. The parent could be a timeline or a tween if the child is a DummyTween used for emulate delay
	     *
	     * @param {object} [value]
	     * @returns {this|object}
	     */
	    this.parent = function(value)
	    {
	        if(value === void 0)
	        {
	            return this._parent;
	        }
	        this._parent = value;
	        this.invalidate();
	        return this;
	    };


	    /**
	     * Get the internal unique identifier
	     *
	     * @returns {number}
	     */
	    this.id = function()
	    {
	        return this._id;
	    };


	    /**
	     * Set options for tween or timeline
	     *
	     * @param {object} options
	     * @returns {this}
	     */
	    this.options = function(options)
	    {
	        // the object will be modified, we need to clone it in order to keep the original safe, allowing its reuse
	        options = cloneObject(options, true);
	        var opts = this._parseOptions(options);
	        opts.events = this._parseEvents(options);
	        this._applyArguments(opts);
	        return this;
	    };


	    /**
	     * Return the resulting speed of the object
	     *
	     * @returns {number}
	     */
	    this.getRealSpeed = function()
	    {
	        return this._parent? this._parent.getRealSpeed() * this._speed : this._speed;
	    };


	    /**
	     * Get the tween/timeline total duration including loops and loopsDelay
	     * In case of infinite loop, it returns Infinity
	     *
	     * @returns {number}
	     */
	    this._getTotalDuration = function()
	    {
	        if(this._loops == -1 && (this._duration || this._loopsDelay))
	        {
	            return Infinity;
	        }
	        return (this._duration + ((this._loopsDelay + this._duration) * this._loops)) / this._speed;
	    };


	    /**
	     * Assign otpions and event handlers previously parsed
	     *
	     * @param {object} args
	     */
	    this._applyArguments = function(args)
	    {
	        var name;
	        for(name in args.events)
	        {
	            this.on.apply(this, args.events[name]);
	        }
	        delete args.events;

	        for(name in args)
	        {
	            // these properties are available only for tween objects
	            if(this.type != 'timeline' && inArray(['from', 'to', 'then', 'immediateStart'], name) != -1)
	            {
	                this['_' + name] = args[name];
	            }
	            else if(name in this && this[name] instanceof Function)
	            {
	                this[name](args[name]);
	            }
	        }
	    };


	    /**
	     * Check if there are public or internal event handlers set for that name
	     *
	     * @param {string} name
	     * @returns {boolean}
	     */
	    this._hasHandlers = function(name)
	    {
	        return (name in this._handlers && this._handlers[name] !== null) || this._coreHandlers[name].length;
	    };


	    /**
	     * execute event handlers bound to the given name
	     *
	     * @param {string} name
	     */
	    this._runHandlers = function(name)
	    {
	        var i, end, entry;

	        // run external events first to guarantee correct events order inside timelines
	        if(name in this._handlers && this._handlers[name] !== null)
	        {
	            entry = this._handlers[name];
	            entry.callback.apply(entry.scope, entry.params);
	        }

	        // internal handlers
	        if(this._coreHandlers[name].length)
	        {
	            for(i = 0, end = this._coreHandlers[name].length; i < end; i++)
	            {

	                entry = this._coreHandlers[name][i];
	                entry.callback.apply(entry.scope, entry.params);
	            }
	        }

	    };




	    /**
	     * find and return allowed options in a generic object
	     *
	     * @param {Object} options
	     * @param {Boolean} remove - if true, it removes found options from original object
	     * @returns {Object}
	     */
	    this._parseOptions = function(options, remove)
	    {
	        var opts = this.type == 'tween'? extendObject({}, optionsMap, tweenOptionsMap) : optionsMap,
	            values = {}, name, realName, value;

	        for(name in options)
	        {
	            if(options.hasOwnProperty(name) && name in opts)
	            {
	                value = options[name];
	                // paused property is used internally for another purpose, so we have to handle this option separately
	                if(name == 'paused')
	                {
	                    this._immediateStart = !value;
	                    delete options[name];
	                    continue;
	                }

	                realName = opts[name].length? opts[name] : name;
	                values[realName] = value;
	                if(remove)
	                {
	                    delete options[name];
	                }

	            }
	        }
	        return values;
	    };



	    /**
	     * Find and return allowed event in a generic object
	     *
	     * @param {object} options
	     * @param {boolean} remove - if true, it removes found handlers and related values (scope and params) from original object
	     * @returns {object}
	     */
	    this._parseEvents = function (options, remove)
	    {
	        var values = {}, value, args, name, realName, params;
	        for(name in options)
	        {
	            if(options.hasOwnProperty(name) && name in handlersMap)
	            {
	                value = options[name];
	                realName = handlersMap[name].length? handlersMap[name] : name;
	                args = [realName, value];
	                if(remove)
	                {
	                    delete options[name];
	                }
	                if((name + 'Params') in options)
	                {
	                    params = options[name + 'Params'];
	                    args.push(isArray(params) ? params : [params]);
	                    if(remove)
	                    {
	                        delete options[name + 'Params'];
	                    }
	                }
	                if((name + 'Scope') in options)
	                {
	                    args.push(options[name + 'Scope']);
	                    if(remove)
	                    {
	                        delete options[name + 'Scope'];
	                    }
	                }
	                else
	                {
	                    args.push(this);
	                }
	                values[realName] = args;
	            }
	        }
	        return values;
	    };


	    /**
	     * Parse time value used for delay and duration settings, return a number that is the time expressed in coreTimeUnit.
	     * Fallback to 0 if the given value is not valid
	     *
	     * @param {string|number} value
	     * @returns {number}
	     */
	    this._parseTime = function(value)
	    {
	        if(!value)
	        {
	            return 0;
	        }
	        var unit = this._timeUnit, parts;
	        if(isString(value))
	        {
	            // check for duration shortcuts like 'slow', 'fast', and so on
	            if(value in durations)
	            {
	                value = durations[value];
	            }

	            // accept 's' or 'ms' as suffix after the number
	            parts = value.match(/^[\+\-]?\s*([0-9\.]+)\s*(m?s)?$/i);
	            if(parts === null || parts[1] === void 0)
	            {
	                return 0;
	            }
	            if(parts[2] !== void 0)
	            {
	                unit = parts[2].toLowerCase();
	            }
	            value = parts[1];
	        }
	        value = Number(value);

	        if(isNaN(value))
	        {
	            value = 0;
	        }

	        value = convertTime(value, unit, this._coreTimeUnit);

	        return Math.max(0, value);
	    };


	    /**
	     * Set the target for tween or timeline. It accept both an object or a selector string
	     *
	     * @param {string|object} value
	     * @returns {this}
	     */
	    this._setTarget = function(value)
	    {
	        if(isString(value) && '$' in window)
	        {
	            value = $(value);
	        }
	        this._target = value;
	        return this;
	    };


	};

	/**
	 * Tweene - JavaScript Animation Proxy
	 *
	 * @link http://tweene.com
	 *
	 * Copyright (c) 2014, Federico Orru'   <federico@buzzler.com>
	 *
	 * @license Artistic License 2.0
	 * See LICENSE.txt for details
	 *
	 */


	/**
	 * Create a Label object, used internally by timelines when you add a label
	 * @class
	 *
	 * @param {string} name
	 */
	var Label = function(name)
	{
	    this.type = 'label';
	    this._id = name;
	    this._name = name;
	    this._position = null;


	    /**
	     * Return the unique identifier
	     *
	     * @returns {number}
	     */
	    this.id = function()
	    {
	        return this._id;
	    };


	    /**
	     * Get/Set the time position inside the parent timeline
	     *
	     * @param {number} [value]
	     * @returns {this}
	     */
	    this.position = function(value)
	    {
	        if(value === void 0)
	        {
	            return this._position;
	        }
	        this._position = value;
	        return this;
	    };

	};

	/**
	 * Tweene - JavaScript Animation Proxy 
	 * 
	 * @link http://tweene.com
	 *   
	 * Copyright (c) 2014, Federico Orru'   <federico@buzzler.com>
	 * 
	 * @license Artistic License 2.0 
	 * See LICENSE.txt for details
	 * 
	 */


	/**
	 * Create a Callback object, used internally by timelines when you add callbacks calls
	 * @class
	 * 
	 * @param {function} callback
	 * @param {object} scope
	 * @param {array} params
	 * @param {number} dir - values: 1 | -1 | 0
	 */
	var Callback = function(callback, scope, params, dir, isPause)
	{
	    this.type = 'callback';    
	    // unique id
	    this._id = ++ Tw._idCounter;
	    
	    this.isPause = !!isPause;
	    
	    dir = dir === 1? true : (dir === -1? false : null);
	    var parent = null;
	            
	    /**
	     * Get or set the parent timeline object
	     * 
	     * @param {object} [value] - parent object
	     * @returns {object|this}
	     */
	    this.parent = function(value)
	    {
	        if(!value)
	        {
	            return parent;
	        }
	        parent = value;
	        return this;                
	    };
	    
	    
	    /**
	     * Return the unique identifier
	     * 
	     * @returns {number} 
	     */
	    this.id = function()
	    {
	        return this._id;
	    };
	    
	    
	    /**
	     * Duration of a callback inside a timeline is always 0, this is needed because internally they are handled as tweens
	     * 
	     * @returns {number}
	     */
	    this.totalDuration = function()
	    {
	        return 0;
	    };
	    
	        
	    /**
	     * Execute the callback if the parent's direction is coherent with the callback's dir value
	     * 
	     * @returns {this}
	     */
	    this.resume = function()
	    {
	        if(callback && (dir === null || dir != parent.reversed()))
	        {
	            callback.apply(scope || parent, params);
	        }
	        return this;
	    };
	    
	    
	    
	};


	/**
	 * Tweene - JavaScript Animation Proxy 
	 * 
	 * @link http://tweene.com
	 *   
	 * Copyright (c) 2014, Federico Orru'   <federico@buzzler.com>
	 * 
	 * @license Artistic License 2.0 
	 * See LICENSE.txt for details
	 * 
	 */


	/**
	 * Vars and methods common to every tween, whatever is the driver used
	 * @mixin
	 * 
	 */
	var TweenCommon = function()
	{    
	    this.type = 'tween';

	    this._from = null;

	    this._to = null;

	    this._then = null;

	    this._easing = Tw.defaultEasing;

	    this._duration = this._parseTime(Tw.defaultDuration);

	    // could be overriden inside each driver
	    this._propertyMap = {};

	    this._hasMultipleEasing = false;
	    this._allowMultipleEasing = false;
	    this._allowTransform = false;        

	    this._immediateStart = true;                

	    this._data = null;    

	    this._offset = 0;



	    /**
	     * Used by parent timeline to set the time offset of the tween
	     * 
	     * @param {number} value
	     * @returns {this}
	     */
	    this.offset = function(value)
	    {
	        this._offset = value;
	        return this;
	    };


	    /**
	     * Create and return a timeline using target and driver of the current object
	     * 
	     * @param {object} params
	     * @returns {object}
	     */
	    this.line = function(params)
	    {
	        return Tw.line(this._target, params, this.driverName);
	    };


	    /**
	     * Execute a previously registered macro using this as macro scope
	     * 
	     * @param {string} name - the name of the macro
	     * @returns {this}
	     */
	    this.exec = function(name)
	    {
	        // all arguments but the first will be passed to the macro
	        var args = toArray(arguments, 1);
	        if(name && name in Tw._macros)
	        {
	            Tw._macros[name].apply(this, args);
	        }

	        return this;
	    };


	    /**
	     * Get/Set an easing function for the tween
	     * 
	     * @param {string|array} [value] You could pass a string shortcut for easing registered in Tweene.easings or a 4-length array that represents 
	     * a cubic bezier curve
	     * @returns {string|array|this}
	     */
	    this.easing = function(value)
	    {
	        if(value === void 0)
	        {
	            return this._easing;
	        }            
	        this._easing = value;
	        return this;
	    };


	    /**
	     * Parse arguments and set internal properties, expecting an object considered as "from" style properties
	     * 
	     * @returns {this}
	     */
	    this.from = function()
	    {
	        this.parseArguments(arguments, true, false);        
	        this.invalidate();
	        return this;
	    };


	    /**
	     * Parse arguments and set internal properties, expecting an object considered as "from" style properties and another one considered as "to" style properties
	     * 
	     * @returns {this}
	     */
	    this.fromTo = function()
	    {
	        this.parseArguments(arguments, true, true);        
	        this.invalidate();
	        return this; 
	    };


	    /**
	     * Parse arguments and set internal properties, expecting an object considered as "to" style properties
	     * 
	     * @returns {this}
	     */
	    this.to = function()
	    {
	        this.parseArguments(arguments, false, true);        
	        this.invalidate();
	        return this;
	    };


	    /**
	     * Set then style properties
	     * @link http://tweene.com/docs/#then
	     * 
	     * @param {object} values
	     * @returns {this}
	     */
	    this.then = function(values)
	    {
	        this._then = values;
	        this.invalidate();
	        return this;
	    };


	    /**
	     * Change style properties instantly, like $('#target').css()
	     * @link http://tweene.com/docs/#tweenSet
	     * 
	     * @param {object} values
	     * @returns {this}
	     */
	    this.set = function(values)
	    {
	        // it runs as a 'to' tween with 0 duration, this allow to schedule it inside a timeline too
	        if(values)
	        {
	            this._to = values;        
	        }
	        this
	            .duration(0)
	            .play();
	        return this;
	    };


	    /**
	     * Perform internal tasks needed before starting the tween
	     * 
	     * @returns {number} - Returns the tween total duration
	     */
	    this.prepare = function()
	    {
	        this._prepare();
	        return this._getTotalDuration();
	    };


	    /**
	     * Parse all the supported variants for argument syntax in Tweene.to, Tweene.from and Tweene.fromTo. Check docs:
	     * @link http://tweene.com/docs/#tweenTo
	     * @link http://tweene.com/docs/#tweenFrom
	     * @link http://tweene.com/docs/#tweenFromTo
	     * 
	     * @param {arguments|array} args
	     * @param {boolean} needFrom
	     * @param {boolean} needTo
	     * @param {boolean} needPos - using timeline shortcuts .to() .from() and .fromTo() also position inside the timeline need to be parsed from arguments
	     * @returns {string|number|this} - if needPos = true, returns parsed position
	     */
	    this.parseArguments = function(args, needFrom, needTo, needPos)
	    {
	        if(!isArray(args))
	        {
	            args = toArray(args);
	        }
	        var values = {events: {}}, pos = null;        
	        if(args.length)
	        {
	            // duration passed before properties, like in GSAP
	            if(isString(args[0]) || isNumber(args[0]))
	            {
	                values.duration = args.shift();
	            }

	            if(args.length)
	            {
	                if(needFrom)
	                {
	                    values = this._parseDataArg(args.shift(), 'from', values);
	                }

	                if(args.length)
	                {      
	                    if(needTo)
	                    {
	                        values = this._parseDataArg(args.shift(), 'to', values);
	                    }

	                    if(args.length)
	                    {
	                        // if not yet passed, check for duration param after the style properties 
	                        if(!('duration' in values) && (isString(args[0]) || isNumber(args[0])))
	                        {
	                            values.duration = args.shift();
	                        }

	                        if(args.length)
	                        {
	                            // timeline position, when needed, is expected here after duration
	                            if(needPos && (isString(args[0]) || isNumber(args[0])))
	                            {
	                                pos = args.shift();
	                            }

	                            if(args.length)
	                            {                            
	                                if(isString(args[0]) || isArray(args[0]))
	                                {
	                                    values.easing = args.shift();
	                                }
	                                else if(!isFunction(args[0]))
	                                {           
	                                    values = this._parseDataArg(args.shift(), 'then', values);
	                                }
	                            }
	                        }

	                        // complete callback 
	                        if(args.length && isFunction(args[0]))
	                        {
	                            var evt = ['end', args.shift()];
	                            if(args.length)
	                            {
	                                evt.push(isArray(args[0])? args[0] : [args[0]]);
	                                if(args.length)
	                                {
	                                    evt.push(args.shift());
	                                }
	                            }
	                            values.events.end = evt;
	                        }
	                    }
	                }
	            }
	        }

	        this._applyArguments(values);
	        if(needPos)
	        {
	            return pos;
	        }
	        return this;        
	    };


	    /**
	     * Clear the internal _data cache 
	     * 
	     */
	    this._reset = function()
	    {
	        this._data = null;
	    };

	    
	    /**
	     * Perform internal tasks needed before starting the tween
	     * 
	     * @returns {this}
	     */
	    this._prepare = function()
	    {
	        if(!this._ready)
	        {   
	            this._reset();

	            if(this._emulatedProgress)
	            {
	                // stop the progress ticker on both ends of the tween
	                this
	                    .setCoreHandler('end', '_progress', this._stopProgress, this, [])
	                    .setCoreHandler('reverse', '_progress', this._stopProgress, this, []);                
	            }

	            // fill data with all time values converted to the unit used by the current driver
	            this._data = {
	                delay: convertTime(this._delay, this._coreTimeUnit, this._driverTimeUnit),
	                loopsDelay: convertTime(this._loopsDelay, this._coreTimeUnit, this._driverTimeUnit),
	                duration: convertTime(this._duration, this._coreTimeUnit, this._driverTimeUnit),
	                speed: this._speed,
	                easing: this._easing
	            };        

	            this._data.realDuration = this._data.duration / this.getRealSpeed();

	            // flags needed for further actions
	            this._hasBegin = false;
	            this._hasEnd = false;
	            this._hasThen = false;
	            this._hasTween = false;
	            this._hasPre = false;
	            this._hasMultipleEasing = false;
	            
	            // init data structures for handling display and visibility special properties 
	            this._hasStaticProps = false;
	            this._staticProps = [];
	            this._display = {pre: null, begin: null, end: null, then: null, mask: 0};
	            this._visibility = {pre: null, begin: null, end: null, then: null, mask: 0};

	            this._data.tween = this._prepareProperties(this._from, this._to, this._then);                        

	            this._ready = true;
	        }
	        return this;        
	    };    


	    /**
	     * Return the number of dom elements selected as target for this tween. If the specific library used does not support target objects
	     * with a length property, this method should be overriden in the driver class
	     * 
	     * @returns {number}
	     */
	    this._getTargetLength = function()
	    {
	        return this._target.length;
	    };


	    /**
	     * Create a common data structure after processing data hold in from, to and then objects, if set
	     * 
	     * @param {object|null} from
	     * @param {object|null} to
	     * @param {object|null} then
	     * @returns {object|array}
	     */
	    this._prepareProperties = function(from, to, then)
	    {        
	        var tween = {};
	        this._prepareSingle(tween, to, 'end');
	        this._prepareSingle(tween, from, 'begin');
	        this._prepareSingle(tween, then, 'then');
	        
	        // if the used animation library does not have native support for play / pause / reverse / resume, it creates a clone of tween structure 
	        // for each single dom target involved
	        if(this._emulatedPlayhead)
	        {
	            var i, end, 
	                sortedTween = {}, 
	                tweens = [],
	                name,
	                transformOrder = [
	                    'x', 'translateX', 'y', 'translateY', 'z', 'translateZ', 
	                    'rotateZ', 'rotate', 'rotation', 'rotationZ', 'rotateX', 'rotationX', 'rotateY', 'rotationY', 
	                    'scale', 'scaleX', 'scaleY', 'scaleZ' 
	                ]
	            ;
	            
	            for(i = 0, end = transformOrder.length; i < end; i++)
	            {
	                name = transformOrder[i];
	                if(name in tween)
	                {
	                    sortedTween[name] = tween[name];
	                    delete tween[name];
	                }
	            }
	            
	            tween = extendObject(sortedTween, tween);
	                                                            
	            for(i = 0, end = this._getTargetLength(); i < end; i++)
	            {
	                tweens[i] = cloneObject(tween, true);
	            }
	            return tweens;
	        }
	        return tween;                
	    };    


	    


	    /**
	     * Process one block of properties
	     * 
	     * @param {object} tween
	     * @param {object} block - one of from, to, then
	     * @param {string} type - 'begin' | 'end' | 'then'
	     */
	    this._prepareSingle = function(tween, block, type)
	    {
	        if(block)
	        {
	            block = this._parsePropertiesNames(block);
	            var data;
	            // bit mask used for display and visibility properties
	            // 1 = then, 2 = 'end', 4 = 'begin'. In case of 'end', value is copied in then too, so 3 is used instead of 2
	            var maskValue = type == 'then'? 1 : (type == 'end'? 3 : 4);
	            // _hasBegin | _hasEnd | _hasThen
	            var hasField = '_has' + type.substr(0, 1).toUpperCase() + type.substr(1);
	            for(var name in block)
	            {
	                if(block.hasOwnProperty(name))
	                {
	                    var easing = null, value = block[name], found;

	                    // per-property easing 
	                    if(isArray(value))
	                    {
	                        easing = this._allowMultipleEasing? value[1] : null;
	                        value = value[0];

	                        // per-property easing passed with then object is ignored
	                        this._hasMultipleEasing = (easing && type != 'then');
	                    }

	                    if(name == 'display' || name == 'visibility')
	                    {
	                        this['_' + name][type] = value;
	                        this._hasStaticProps = true;
	                        this['_' + name].mask |= maskValue;            
	                        // 'then' object is processed after 'end', so if there is a static property there too, it will overwrite correctly the one set by 'end' call
	                        if(type == 'end')
	                        {
	                            this['_' + name].then = value;                            
	                        }
	                        continue;
	                    }

	                    this[hasField] = true;
	                    if(type != 'then')
	                    {
	                        this._hasTween = true;
	                    }

	                    if(type == 'end' || !(name in tween))
	                    {
	                        found = false;
	                        data = {
	                            pre: null,
	                            begin: null, 
	                            end: null, 
	                            then: null,
	                            easing: null, 
	                            isTransform: false
	                        };                        
	                    }
	                    else
	                    {
	                        found = true;
	                        data = tween[name];
	                    }

	                    data[type] = value;

	                    if(type != 'then')
	                    {
	                        if(!found)
	                        {
	                            data.easing = easing;
	                        }
	                    }                    

	                    if(!data.isTransform)
	                    {
	                        data.isTransform = isTransformProperty(name);
	                    }                        

	                    tween[name] = data;
	                }
	            }
	        }                
	    };


	    /**
	     * utility function for splitting tween style values when per-property easing is specified
	     * currently used only by GSAP driver, so for simplicity it assumes that this._emulatePlayhead is false and tween data is not cloned 
	     * for each dom target
	     * 
	     * @param {objet} tween
	     * @returns {array}
	     */
	    this._splitEasing = function(tween)
	    {
	        var map = {},
	            tweens = [],
	            name, easing, easingName, entry;

	        for(name in tween)
	        {
	            entry = tween[name];
	            easing = entry.easing? entry.easing : this._easing; 
	            // easing could be a string or an array, so we normalize array values to a string in order to have a proper value for the easing map
	            easingName = (isString(easing))? easing : easing.join('_').replace(/\./g, 'p');
	            if(!(easingName in map))
	            {
	                map[easingName] = tweens.length;
	                tweens.push({tween: {}, easing: easing});
	            }
	            tweens[map[easingName]].tween[name] = entry;            
	        }
	        return tweens;                        
	    };


	    /**
	     * Perform several actions on style properties passed
	     * 
	     * @param {object} values
	     * @returns {object}
	     */
	    this._parsePropertiesNames = function(values)
	    {
	        var newValues = {}, newName, subValues;
	        for(var name in values)
	        {
	            if(values.hasOwnProperty(name))
	            {
	                // convert dashed names to camelCase version
	                newName = camelize(name);                                            
	                
	                // split compund properties like padding: 10px 20px to a list of single-valued properties
	                if(inArray(compoundNames, newName) !== -1)
	                {
	                    subValues = compoundMapping(newName, values[name]);
	                }
	                // split compound transform properties like translate: 10 20 to a list of single-valued transform properties
	                else if(this._allowTransform && inArray(compoundTransforms, newName) !== -1)
	                {
	                    subValues = transformMapping(newName, values[name]);
	                }
	                else
	                {
	                    subValues = {};
	                    subValues[newName] = values[name];
	                }
	                                    
	                for(name in subValues)
	                {
	                    // if found, replace the given name with the alias accepted by the specific animation library
	                    newName = name in this._propertyMap? this._propertyMap[name] : name;
	                    // if transformation are not supported (using jQuery as animation library, for example) any transform property is dropped
	                    if(this._allowTransform || !isTransformProperty(newName))
	                    {
	                        newValues[newName] = subValues[name];                    
	                    }
	                }
	            }
	        }
	        return newValues;
	    };


	    /**
	     * Transform the given easing value in the form accepted by the specific animation library. In most of the case, the driver has to override 
	     * _getBezierEasing() method 
	     * 
	     * @param {string|array} value
	     * @returns {string|array|function}
	     */    
	    this._getRealEasing = function(value)
	    {
	        // check for shortcut set in Tweene.easings
	        if(isString(value) && value in easings)
	        {
	            value = easings[value];
	        }

	        // cubic bezier curve array
	        if(isArray(value) && value.length == 4)
	        {
	            value = this._getBezierEasing(value);
	        }

	        return value;
	    };


	    /**
	     * Duplicate style properties object and check for any options and event handlers passed together
	     * 
	     * @param {object} data - only plain object accepted, else it throws an exception 
	     * @param {string} name - 'from' | 'to' | 'then'
	     * @param {object} values - destination container
	     * @returns {object}
	     */
	    this._parseDataArg = function(data, name, values)
	    {        
	        if(!seemsPlainObject(data))
	        {
	            throw 'Expected plain object as argument';
	        }
	        data = cloneObject(data, true);    
	        var options = this._parseOptions(data, true);
	        var events = this._parseEvents(data, true);
	        if(keys(data).length)
	        {
	            values[name] = data;
	        }
	        values = extendObject(values, options);
	        values.events = extendObject(values.events, events);
	        return values;
	    };                   

	};
	/**
	 * Tweene - JavaScript Animation Proxy
	 *
	 * @link http://tweene.com
	 *
	 * Copyright (c) 2014, Federico Orru'   <federico@buzzler.com>
	 *
	 * @license Artistic License 2.0
	 * See LICENSE.txt for details
	 *
	 */



	/**
	 * Vars and methods common to every timeline object, whatever is the driver used
	 * @mixin
	 *
	 */
	var TimelineCommon = function()
	{
	    this.type = 'timeline';

	    this._offset = 0;

	    this._children = [];

	    this._cursor = null;

	    this._labels = {};


	    /**
	     * Add tweens, timelines, callbacks and labels to current timeline object
	     * @link http://tweene.com/docs/#timelineAdd
	     * @link http://tweene.com/docs/#nestedTimelines
	     * @link http://tweene.com/docs/#directionalCallbacks
	     * @link http://tweene.com/docs/#labels
	     *
	     * @param {string|object|number} child - number is accepted only when adding directional callback
	     * @param {string|number} [startPosition]
	     * @returns {this}
	     */
	    this.add = function(child, startPosition)
	    {
	        // adding a label
	        if(isString(child))
	        {
	            // label needs to start with an alphabetic character and cannot contains arithmetic symbols specified in the regexp here
	            if(child.search(/^[a-z][^\+\-=]*$/) != -1)
	            {
	                child = new Label(child);
	                this._labels[child.id()] = child;
	            }
	            else
	            {
	                throw 'The label "' + child +'" contains invalid symbols';
	            }
	        }
	        else
	        {
	            // adding a callback or directional callback
	            if(isFunction(child) || (isNumber(child) && isFunction(startPosition)))
	            {
	                var dir = 0, i = 0;
	                // when a number is passed as first arg, it is a directional callback and we need to shift left the other params
	                if(isNumber(child))
	                {
	                    dir = child;
	                    child = startPosition;
	                    startPosition = arguments[2] || null;
	                    i = 1;
	                }
	                i = i + 2;
	                // params expected after the callback
	                var params = arguments.length > i? (isArray(arguments[i])? arguments[i] : [arguments[i]]) : [];
	                i ++;
	                // callback scope object expected after callback params
	                var scope = arguments.length > i? arguments[i] : null;
	                child = new Callback(child, scope, params, dir, false);
	            }

	            child.parent(this);
	        }

	        if(startPosition === void 0)
	        {
	            startPosition = null;
	        }

	        this._children.push({id: child.id(), child: child, start: startPosition});
	        this.invalidate();
	        return this;
	    };


	    /**
	     * Add pause, with an optional callback
	     * @link http://tweene.com/docs/#addPause
	     *
	     * @param {string|number} [startPosition]
	     * @param {string|number} [callbackDirection]
	     * @param {function} [callback] - callback
	     * @param {array} [params] - callback params
	     * @param {object} [scope] - callback scope
	     * @returns {this}
	     */
	    this.addPause = function()
	    {
	        var args = toArray(arguments),
	            startPosition = null,
	            dir = 0,
	            callback = null,
	            params = [],
	            scope = null,
	            arg,
	            child;

	        if(args.length)
	        {
	            arg = args.shift();
	            if(isFunction(arg))
	            {
	                callback = arg;
	            }
	            else
	            {
	                startPosition = arg;
	            }

	            if(args.length)
	            {
	                arg = args.shift();
	                if(!callback)
	                {
	                    if(isNumber(arg))
	                    {
	                        dir = arg;
	                        if(args.length)
	                        {
	                            callback = args.shift();
	                        }
	                    }
	                    else
	                    {
	                        callback = arg;
	                    }
	                }

	                if(callback && args.length)
	                {
	                    params = args.shift();
	                    if(!isArray(params))
	                    {
	                        params = [params];
	                    }

	                    if(args.length)
	                    {
	                        scope = args.shift();
	                    }
	                }
	            }
	        }

	        child = new Callback(callback, scope, params, dir, true);
	        child.parent(this);
	        this._children.push({id: child.id(), child: child, start: startPosition});
	        this.invalidate();
	        return this;
	    };



	    /**
	     * Create a tween and execute a previously registered macro on it
	     * If the timeline has not a target specified, it expects a target as first param.
	     * It expects a position as second (or first) param, all other params are passed to the tween exec() method
	     *
	     * @returns {this}
	     */
	    this.exec = function()
	    {
	        var args = toArray(arguments);
	        if(args.length)
	        {
	            var target = this._target? this._target : args.shift();
	            var tween = Tw.get(target, this.driverName);
	            var pos = args.length > 1?  args.splice(1, 1)[0] : null;
	            this.add(tween, pos);
	            tween.exec.apply(tween, args);
	        }
	        return this;
	    };

	    /**
	     * Schedule a tween with duration = 0
	     * @link http://tweene.com/docs/#timelineSet
	     *
	     * @returns {this}
	     */
	    this.set = function()
	    {
	        var args = toArray(arguments);
	        if(args.length)
	        {
	            var target = this._target? this._target : args.shift();
	            var tween = Tw.get(target, this.driverName);
	            if(args.length)
	            {
	                var values = args.shift();
	                var pos = args.length? args.shift() : null;
	                tween._to = values;
	                tween.duration(0);
	                this.add(tween, pos);
	            }
	        }
	        return this;
	    };


	    /**
	     * Shortcut for .add(Tweene.get().to())
	     * @link http://tweene.com/docs/#timelineTo
	     *
	     * @returns {this}
	     */
	    this.to = function()
	    {
	        return this._tweenMethod(arguments, false, true);
	    };


	    /**
	     * Shortcut for .add(Tweene.get().fromTo())
	     * @link http://tweene.com/docs/#timelineFromTo
	     *
	     * @returns {this}
	     */
	    this.fromTo = function()
	    {
	        return this._tweenMethod(arguments, true, true);
	    };


	    /**
	     * Shortcut for .add(Tweene.get().from())
	     * @link http://tweene.com/docs/#timelineFrom
	     *
	     * @returns {this}
	     */
	    this.from = function()
	    {
	        return this._tweenMethod(arguments, true, false);
	    };


	    /**
	     * used internally for setting child timeline time position inside the parent
	     *
	     * @param {number} value
	     * @returns {this}
	     */
	    this.offset = function(value)
	    {
	        this._offset = value;
	        return this;
	    };


	    /**
	     * Timeline need to process its children just before starting or when you ask for duration. See implementation in TimelinePro or
	     * in specific drivers
	     *
	     * @returns {this}
	     */
	    this.prepare = function()
	    {
	        if(this._ready)
	        {
	            return this;
	        }

	        this._reset();
	        this._mergeChildren();
	        this.ready = true;
	        return this;
	    };


	    /**
	     * Perform all the common actions needed by .to(), .from() and .fromTo()
	     *
	     * @param {arguments} args
	     * @param {boolean} from
	     * @param {boolean} to
	     * @returns {this}
	     */
	    this._tweenMethod = function(args, from, to)
	    {
	        args = toArray(args);
	        if(args.length)
	        {
	            // use first argument as target if the timeline does not have a global target set
	            var target = this._target? this._target : args.shift();
	            var tween = Tw.get(target, this.driverName);
	            var pos = tween.parseArguments(args, from, to, true);
	            this.add(tween, pos);
	        }
	        return this;
	    };


	    /**
	     * Process all the children added evaluating their actual time position inside the timeline
	     *
	     * @returns {this}
	     */
	    this._mergeChildren = function()
	    {
	        if(this._ready)
	        {
	            return this;
	        }

	        // cursor will contains the end of the last processed child, while duration holds the overall end of the timeline
	        this._cursor = this._duration = 0;

	        var child, begin, end, start, childDelay, tweenable;
	        for(var i = 0, len = this._children.length; i < len; i++)
	        {
	            child = this._children[i].child;
	            start = this._children[i].start;

	            tweenable = child.type == 'timeline' || child.type == 'tween';

	            if(tweenable)
	            {
	                // if the child has a delay, remove it from the child and use it as a start offset inside the timeline
	                childDelay = this._parseTime(child.delay());
	                if(childDelay)
	                {
	                    this._cursor += childDelay;
	                    this._duration += childDelay;
	                    child.delay(0);
	                }
	            }

	            // evaluate actual start position
	            begin = this._getStartPosition(this._duration, this._cursor, start);

	            if(child.type == 'label')
	            {
	                child.position(begin);
	                this._mergeLabel(child, begin);
	                continue;
	            }

	            if(tweenable)
	            {
	                if(child.type == 'timeline')
	                {
	                    child.offset(this._offset + begin);
	                }
	                // prepare() returns totalDuration
	                end = begin + child.prepare();
	                this._mergeTweenable(child, begin, end);
	            }
	            else
	            {
	                // callbacks have duration = 0
	                end = begin;
	                this._mergeCallback(child, begin, end);
	            }

	            // an infinite loop in a child tween or timeline results in its duration = Infinity
	            if(end != Infinity)
	            {
	                this._cursor = end;
	                if(this._cursor > this._duration)
	                {
	                    this._duration = this._cursor;
	                }
	            }
	            else
	            {
	                this._cursor = this._duration = Infinity;
	            }
	        }
	        return this;
	    };


	    /**
	     * Evaluate actual time position of a child inside a timeline
	     *
	     * @param {number} currentDuration
	     * @param {number} currentCursor - end of the previously processed child
	     * @param {string|number} startPosition
	     *
	     * @returns {number}
	     */
	    this._getStartPosition = function(currentDuration, currentCursor, startPosition)
	    {
	        // by default, add to the end of the timeline, obtaining a queue of not-overlapping tweens
	        if(startPosition === null)
	        {
	            return currentDuration;
	        }
	        var start = currentDuration, pos, sign = 0, toCursor = false;
	        if(isString(startPosition))
	        {
	            // parts:
	            //  1 - label
	            //  2 - relative operator, +=, ++=, -=, --=
	            //  3 - time value, number or string with 's' or 'ms' suffix
	            var parts = startPosition.match(/^([a-z][^\+\-=]*)?(?:(\+{1,2}|\-{1,2})=)?([^\+\-=]+)?$/i);
	            if(parts === null)
	            {
	                return currentDuration;
	            }

	            pos = parts[3] !== void 0? this._parseTime(parts[3]) : 0;

	            if(parts[2] !== void 0)
	            {
	                toCursor = parts[2].length == 2;
	                sign = parts[2].substr(0, 1) == '-'? -1 : 1;
	            }

	            if(parts[1] !== void 0 && parts[1] in this._labels)
	            {
	                start = this._labels[parts[1]].position();
	                if(!sign)
	                {
	                    pos = 0;
	                    sign = 1;
	                }
	            }
	            else
	            {
	                if(sign)
	                {
	                    start = toCursor? currentCursor: currentDuration;
	                }
	                else
	                {
	                    start = 0;
	                    sign = 1;
	                }
	            }
	        }
	        else
	        {
	            start = 0;
	            sign = 1;
	            pos = this._parseTime(startPosition);
	        }

	        if(start == Infinity)
	        {
	            return Infinity;
	        }

	        // cannot add child in negative positions, fallback to 0
	        return Math.max(0, start + (pos * sign));
	    };

	};

	/**
	 * Tweene - JavaScript Animation Proxy 
	 * 
	 * @link http://tweene.com
	 *   
	 * Copyright (c) 2014, Federico Orru'   <federico@buzzler.com>
	 * 
	 * @license Artistic License 2.0 
	 * See LICENSE.txt for details
	 * 
	 */


	/**
	 * Ticker object used to emulate delay, progress callbacks, async calls.
	 * It uses RequestAnimationFrame when available, with fallback to setTimeout.
	 * We instantiate a single Ticker in Tweene.ticker
	 * @class
	 * 
	 */      
	var Ticker = function()
	{
	    var _lastTime = 0;    
	    var _callbacks = [];
	    
	    this.now = Date.now || function() 
	    {
	        return new Date().getTime();
	    };
	    
	    var _now = this.now;
	    
	    /*
	     *  Polyfill taken here: https://gist.github.com/paulirish/1579671
	     *  
	     * requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
	     * MIT license    
	     *  
	     */
	    var _requestAnimationFrame = 
	        window.requestAnimationFrame || 
	        window.webkitRequestAnimationFrame || 
	        window.mozRequestAnimationFrame || 
	        window.msRequestAnimationFrame ||
	        window.oRequestAnimationFrame || 
	        
	        function(callback) 
	        {
	            var currTime = _now();
	            var timeToCall = Math.max(0, 16 - (currTime - _lastTime));
	            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
	            _lastTime = currTime + timeToCall;
	            return id;
	        };
	        


	    var _tick = function()
	    {
	        var now = _now();
	        var i = 0;
	        while(i < _callbacks.length)
	        {
	            var entry = _callbacks[i];
	            var call = (!entry.time || now - entry.now - entry.time >= 0);
	            if(call && entry.time)
	            {
	                // remove expired callback
	                _callbacks.splice(i, 1);
	            }
	            else
	            {
	                i++;
	            }
	            if(call)
	            {
	                entry.callback.apply(entry.scope, entry.params);
	            }
	        }
	        // ticker is turned off when the callbacks list is empty
	        if(_callbacks.length)
	        {
	            _requestAnimationFrame(_tick);
	        }
	    };


	    /**
	     * Register a callback 
	     * 
	     * @param {number} time - Timeout in ms. When = 0, the function will be called on each tick and need to be unregistered manually
	     * @param {string} id - unique identifier of the registered callback
	     * @param {function} callback
	     * @param {object} [scope] scope used as 'this' inside the callback
	     * @param {array} [params] params to be passed to the callback on execution
	     * @returns {this}
	     */
	    this.addCallback = function(time, id, callback, scope, params)
	    {
	        this.removeCallback(id);        
	        _callbacks.push({now: _now(), time: time, id: id, callback: callback, scope: scope || this, params: params || []});
	        
	        // turn on ticker if it is the first callback in queue 
	        if(_callbacks.length == 1)
	        {
	            _requestAnimationFrame(_tick);
	        }
	        return this;
	    };        


	    /**
	     * Unregister a callback. Callbacks registered with a positive timeout, commonly do not need to be unregistered manually, 
	     * the ticker unregister them after automatically after their execution.
	     * 
	     * @param {string} id - unique identifier of the registered callback
	     * @returns {this}
	     */
	    this.removeCallback = function(id)
	    {
	        for(var i = 0, end = _callbacks.length; i < end; i++)
	        {
	            if(_callbacks[i].id == id)
	            {
	                _callbacks.splice(i, 1);            
	                break;
	            }
	        }
	        return this;
	    };        
	    
	};
	  
	  
	Tw.ticker = new Ticker();  

	/**
	 * Tweene - JavaScript Animation Proxy
	 *
	 * @link http://tweene.com
	 *
	 * Copyright (c) 2014, Federico Orru'   <federico@buzzler.com>
	 *
	 * @license Artistic License 2.0
	 * See LICENSE.txt for details
	 *
	 */



	/**
	 * Vars and methods common to tween and timeline, for animation library that does not have native support
	 * for playhead control (play / pause / reverse and so on)
	 * @mixin
	 *
	 */
	var ControlsPro = function()
	{
	    this._time = null;

	    this._startTime = 0;

	    this._pauseTime = 0;

	    this._position = 0;

	    this._paused = true;

	    this._running = false;

	    this._delayDummy = null;

	    this._emulatedProgress = false;

	    this._emulatedBegin = false;

	    this._playAllowed = true;

	    this._reverseAllowed = false;


	    /**
	     * play() and reverse() acts on both global and local direction (_fwd and _localFwd properties), while the change
	     * in direction performed during a yoyo loop changes only local direction
	     *
	     * @param {boolean} value
	     * @returns {this}
	     */
	    this.setDir = function(value)
	    {
	        this._fwd = value;
	        this.setLocalDir(value);
	        return this;

	    };

	    /**
	     * Change the actual local direction of the animation
	     *
	     * @param {boolean} value
	     * @returns {this}
	     */
	    this.setLocalDir = function(value)
	    {
	        this._localFwd = value;
	        // change direction of the delay too
	        if(this._delayDummy)
	        {
	            this._delayDummy.setDir(value);
	        }
	        // when changing direction of a timeline, the change cascades to children
	        if(this.type != 'tween')
	        {
	            this._propagateToAll('setDir', value);
	        }
	        return this;
	    };


	    /**
	     * Swap the global direction, from forward to backward or vice versa
	     *
	     * @returns {this}
	     */
	    this.swapDir = function()
	    {
	        this._fwd = !this._fwd;
	        this.swapLocalDir();
	        return this;
	    };


	    /**
	     * Swap the actual local direction, from forward to backward or vice versa
	     *
	     * @returns {this}
	     */
	    this.swapLocalDir = function()
	    {
	        this._localFwd = !this._localFwd;
	        if(this._delayDummy)
	        {
	            this._delayDummy.swapDir();
	        }
	        if(this.type != 'tween')
	        {
	            this._propagateToAll('swapDir');
	        }
	        return this;
	    };


	    /**
	     * Override Common.play()
	     *
	     */
	    this.play = function()
	    {
	        // play not allowed when the current playhead position is at the end of the duration
	        if(this._playAllowed)
	        {
	            this._reverseAllowed = true;
	            if(!this._fwd)
	            {
	                this.pause();
	                this.swapDir();
	            }
	            this.resume();
	        }
	        return this;
	    };


	    /**
	     * Override Common.reverse()
	     *
	     */
	    this.reverse = function()
	    {
	        // reverse is not allowed when the playhead position is equal to 0 (begin of the current animation)
	        if(this._reverseAllowed)
	        {
	            this._playAllowed = true;
	            if(this._fwd)
	            {
	                this.pause();
	                this.swapDir();
	            }
	            this.resume();
	        }
	        return this;
	    };


	    /**
	     * Override Common.pause()
	     *
	     */
	    this.pause = function()
	    {
	//        console.log(this._id, 'pause');
	        // if not ready, it means that is not yet started, so no need to perform a pause
	        if(this._ready)
	        {
	            // stop progress ticker, if present
	            this._stopProgress();

	            // propagate pause to delay, if present
	            if(this._delayDummy)
	            {
	                this._delayDummy.pause();
	                this._paused = true;
	                return this;
	            }

	            if(!this._paused)
	            {
	//                console.log(this._id, 'pausing');
	                this._paused = true;

	                this._pauseTime = Tw.ticker.now();
	                // evaluate pause position on playhead
	                this._position += (this._pauseTime - this._startTime) * this.getRealSpeed() * (this._localFwd? 1 : -1);

	                this._pauseTween();
	            }
	        }
	        return this;
	    };


	    /**
	     * Override Common.resume()
	     *
	     */
	    this.resume = function()
	    {
	//        if(this._parent && this._parent.paused())
	//        {
	//            return this;
	//        }
	//        console.log(this._id, 'resume', (this._parent && this._parent.paused()? 'parent paused': 'parent running'));
	        if(this._paused && (this._fwd && this._playAllowed || !this._fwd && this._reverseAllowed))
	        {
	            this._paused = false;
	            this.prepare();

	            // propagate resume to delay, if present
	            if(this._delayDummy)
	            {
	                this._delayDummy.resume();
	                return this;
	            }

	            // evaluate remaining duration, accordingly with current position, direction and speed
	            if(this.type != 'timeline')
	            {
	                var duration = this._localFwd? this._duration - this._position : this._position;
	                this._data.duration = convertTime(duration, this._coreTimeUnit, this._driverTimeUnit);
	                this._data.realDuration = this._data.duration / this.getRealSpeed();
	            }
	            this._startTime = Tw.ticker.now();

	            if(this._duration)
	            {
	                this._playAllowed = true;
	                this._reverseAllowed = true;
	            }

	            // always true after the very first execution of resume()
	            if(this._running)
	            {
	                if(this._duration)
	                {
	                    // resume progress ticker, if needed
	                    this._startProgress();
	                }

	                // when the animation library does not have native support for begin callback
	                if(this._emulatedBegin && this._hasHandlers('_begin'))
	                {
	                    this._runHandlers('_begin');
	                }

	                // at both ends of the tween (begin in forward dir, end in backward dir) perform preTween actions
	                if(this.type != 'timeline' && ((this._position === 0 && this._localFwd) || (this._position == this._duration && !this._localFwd)))
	                {
	                    this._preTween(this._localFwd);
	                }
	                this._resumeTween();
	            }
	            else
	            {
	                this._loopsCount = 0;
	                // we need pausable and reversable delay, so we ignore any native support for delay and always emulate it
	                if(this._delay)
	                {
	                    this._emulateDelay(this._delay, this._run);
	                }
	                else
	                {
	                    this._run();
	                }
	            }
	        }
	        return this;
	    };


	    /**
	     * Override Common.restart()
	     *
	     */
	    this.restart = function()
	    {
	        if(this._keyCurrentIndex !== null)
	        {
	            this._keyCurrentIndex = null;
	        }

	        this.pause();
	        this.setDir(true);
	        this.back();
	        this.resume();
	        return this;
	    };


	    /**
	     * Override Common.back()
	     *
	     */
	    this.back = function()
	    {
	        // reset loop counter accordingly with direction
	        if(this._loops)
	        {
	            if(this._fwd)
	            {
	                this._loopsCount = 0;
	            }
	            else
	            {
	                if(this._loops != -1)
	                {
	                    this._loopsCount = this._loops + 1;
	                }
	            }
	        }

	        if(this._running)
	        {
	            this._back();
	        }
	        this._playAllowed = this._fwd;
	        this._reverseAllowed = !this._playAllowed;
	        return this;
	    };


	    /**
	     * Override Common.speed()
	     *
	     */
	    this.speed = function(value)
	    {
	        if(value === void 0)
	        {
	            return this._speed;
	        }

	        if(!this._running)
	        {
	            this.invalidate();
	        }
	        value = parseSpeed(value);

	        if(value != this._speed)
	        {
	            // changing speed in running animations is performed pausing and immediately resuming with the new speed
	            var notPaused = !this._paused;
	            if(notPaused)
	            {
	                this.pause();
	            }

	            this._speed = value;

	            if(notPaused)
	            {
	                this.resume();
	            }
	        }
	        return this;
	    };


	    /**
	     * Calculate current time position, needed only by info methods like time() and progress()
	     *
	     * @returns {number}
	     */
	    this._getPosition = function()
	    {
	        if(this._time !== null)
	        {
	            return this._time;
	        }
	        if(this._paused)
	        {
	            return this._position;
	        }
	        var now = Tw.ticker.now();
	        return Math.max(0, this._position + (now - this._startTime) * this.getRealSpeed() * (this._localFwd? 1 : -1));
	    };


	    /**
	     * Calculate the current percent progress, as a value between 0 and 1
	     *
	     * @returns {number}
	     */
	    this._getProgress = function()
	    {
	        return Math.max(0, Math.min(1, this._getPosition() / this._duration));
	    };


	    /**
	     * Get the current running status
	     *
	     * @returns {boolean}
	     */
	    this._getPaused = function()
	    {
	        return this._paused;
	    };


	    /**
	     * Reset the internal playhead position on both ends of animation
	     *
	     */
	    this._resetPosition = function()
	    {
	        this._paused = true;
	        this._position = this._localFwd? this._duration : 0;
	        this._startTime = this._pauseTime = 0;
	    };


	    /**
	     * Used to emulate a progress / update callback when the driver lacks native support for it
	     *
	     */
	    this._startProgress = function()
	    {
	        if(this._emulatedProgress && this._hasHandlers('progress'))
	        {
	            // passing 0 as first param, it will fire until it is manually removed
	            Tw.ticker.addCallback(0, this._id + '_progress', this._runHandlers, this, ['progress']);
	        }
	    };


	    /**
	     * Used to emulate a progress / update callback when the driver lacks native support for it
	     *
	     */
	    this._stopProgress = function()
	    {
	        if(this._emulatedProgress && this._hasHandlers('progress'))
	        {
	            Tw.ticker.removeCallback(this._id + '_progress');
	        }
	    };


	    /**
	     * Internal method used to restart the animation in both directions.
	     *
	     */
	    this._restart = function()
	    {
	        this._delayDummy = null;
	        this.pause();
	        this._back();
	        this.resume();
	    };


	    /**
	     * Used in loop or manual restart, it reset data and animation to the begin (or end) state accordingly to direction
	     *
	     * @returns {this}
	     */
	    this._back = function()
	    {
	        this._position = this._localFwd? 0 : this._duration;
	        if(this._running)
	        {
	            this._delayDummy = null;
	            var dir = this._localFwd? (this._hasPre && this._offset !== 0? 'pre' : 'begin') : 'end';
	            this._backTween(dir);
	        }
	        return this;
	    };


	    /**
	     * Update loop counter when running in backward direction and restart
	     *
	     */
	    this._loopRev = function()
	    {
	        this._loopsCount --;
	        this._restart();
	    };


	    /**
	     * Update loop counter when running in forward direction and restart
	     *
	     */
	    this._loopFwd = function()
	    {
	        this._runHandlers('loop');
	        if(this._yoyo)
	        {
	            this.swapLocalDir();
	        }
	        this._restart();
	    };


	    /**
	     * loop controller, performed on both ends of animation, accordingly with current direction and yoyo property
	     *
	     */
	    this._loopCheck = function()
	    {
	        this._delayDummy = null;
	        if(this._fwd)
	        {
	            this._loopsCount++;
	        }
	        else
	        {
	            if(this._yoyo)
	            {
	                this.swapLocalDir();
	            }
	            this._runHandlers('loop');
	        }

	        if(this._loopsDelay)
	        {
	            if(!this._fwd && !this._yoyo)
	            {
	                // delay is executed on final position in order to have a simmetric animation between both directions
	                this._back();
	            }
	            this._emulateDelay(this._loopsDelay, this._loopFwd, this._loopRev);
	        }
	        else
	        {
	            if(this._fwd)
	            {
	                this._loopFwd();
	            }
	            else
	            {
	                this._loopRev();
	            }
	        }
	    };



	    /**
	     * Emulate delay and loopsDelay using a special Dummy Tween
	     *
	     * @param {number} delay
	     * @param {function} callback
	     * @param {function} [reverseCallback] - used only in loopsDelay
	     */
	    this._emulateDelay = function(delay, callback, reverseCallback)
	    {
	        var dummy = this._delayDummy = this._getDummy()
	            .duration(delay)
	            .setCoreHandler('end', name, callback, this);

	        // only loopsDelay has reverseCallback set
	        if(reverseCallback)
	        {
	            dummy.position(this._fwd? 0 : delay);
	            // progress callback is not paused during loops delay
	            if(this._emulatedPlayhead && this._hasHandlers('progress'))
	            {
	                dummy.setCoreHandler('progress', '_progress', this._runHandlers, this, ['progress']);
	            }
	            dummy.setCoreHandler('reverse', name, reverseCallback, this);
	        }

	        dummy[this._fwd? 'play' : 'reverse']();
	    };


	    /**
	     * Internal event handler needed to perform actions at the begin of the animation
	     */
	    this._onTweenBegin = function()
	    {
	        if(this._position === 0 && this._localFwd)
	        {
	            // begin event is not raised on loop iterations
	            if(this._loopsCount === 0)
	            {
	                this._runHandlers('begin');
	            }
	        }
	    };


	    /**
	     * Internal event handler needed to perform actions at the end of the animation
	     */
	    this._onTweenEnd = function()
	    {
	        this._resetPosition();

	        if(this._localFwd)
	        {
	            if(this._loopsCount == this._loops)
	            {
	                if(this.type != 'timeline')
	                {
	                    this._postTween('end');
	                }
	                this._playAllowed = false;
	                this._time = this._duration;
	                this._runHandlers('end');
	                this._time = null;
	            }
	            else if(this._loops !== 0)
	            {
	                this._loopCheck();
	            }
	        }
	        else
	        {
	            if(this._loopsCount === 0)
	            {
	                if(this.type != 'timeline')
	                {
	                    this._postTween('begin');
	                }
	                this._reverseAllowed = false;
	                this._time = 0;
	                this._runHandlers('reverse');
	                this._time = null;
	            }
	            else if(this._loops !== 0)
	            {
	                this._loopCheck();
	            }
	        }
	    };


	    /**
	     * Create a Dummy object
	     * @see TweeneDummy
	     *
	     * @returns {object}
	     */
	    this._getDummy = function()
	    {
	        // Dummy don't need any target
	        return Tw.get(null, 'Dummy');
	    };


	    // register some internal handlers
	    this.setCoreHandler('_begin', '_begin', this._onTweenBegin, this);
	    this.setCoreHandler('_end', '_end', this._onTweenEnd, this);

	};

	/**
	 * Tweene - JavaScript Animation Proxy 
	 * 
	 * @link http://tweene.com
	 *   
	 * Copyright (c) 2014, Federico Orru'   <federico@buzzler.com>
	 * 
	 * @license Artistic License 2.0 
	 * See LICENSE.txt for details
	 * 
	 */



	// used as cache for vendor-prefixed names
	var propertyNames = {};

	/**
	 * Get style real name and value, checking for browser prefixes if needed
	 * 
	 * @param {object} style
	 * @param {string} name
	 * @returns {array} - return [realName, value]
	 */
	function getProperty(style, name)
	{
	    if(style[name] !== void 0)
	    {
	        return [name, style[name]];
	    }
	    if(name in propertyNames)
	    {
	        return [propertyNames[name], style[propertyNames[name]]];
	    }
	    name = name.substr(0, 1).toUpperCase() + name.substr(1);
	    var prefixes = ['webkit', 'moz', 'ms', 'o'], fullName;
	    for(var i = 0, end = prefixes.length; i < end; i++)
	    {
	        fullName = prefixes[i] + name;
	        if(style[fullName] !== void 0)
	        {
	            propertyNames[name] = fullName;
	            return [fullName, style[fullName]];
	        }
	    }
	    return [name, void 0];        
	}


	/**
	 * Reverse a cubic bezier, needed for playing tweens backwards
	 * 
	 * @param {array} value - 4-length cubic bezier array
	 * @returns {array}
	 */
	function reverseBezier(value)
	{
	    return [
	        1 - value[2],
	        1 - value[3],
	        1 - value[0],
	        1 - value[1]
	    ];
	}


	// needed by next func
	var bezierEasingCache = {};

	/**
	 * Widely based on the great work by Vincent Tan
	 * http://polymathprogrammer.com/2007/06/27/reverse-engineering-bezier-curves/
	 * 
	 * given a bezier curve and current time progress, it returns a new cubic bezier array equal to the remaining part of the curve
	 * 
	 * @param {Array} oldBezier - 4-length cubic bezier array
	 * @param {Number} time -  current progress value, between 0 and 1 
	 * @returns {Array}
	 */
	function getNewBezier(oldBezier, time)         
	{                
	    if(time === 0 || time === 1)
	    {
	        return oldBezier;
	    }

	    var cacheName = oldBezier.join('_').replace(/\./g, 'p') + '_' + time.toFixed(3);
	    if(cacheName in bezierEasingCache)
	    {
	        return bezierEasingCache[cacheName];
	    }        

	    var oldBezierFunc = bezier.apply(null, oldBezier);
	    var xInterval = 1 - time;
	    var startY = oldBezierFunc(time);
	    var sign = startY > 1? - 1 : 1;
	    var yInterval = (1 - startY) * sign;

	    var u = 0.33, v = 0.67;
	    var uu = u * xInterval + time;
	    var vv = v * xInterval + time;

	    var 
	        p0x = 0, p0y = 0,
	        p1x = u, p1y = (oldBezierFunc(uu) - startY) * sign / yInterval, 
	        p2x = v, p2y = (oldBezierFunc(vv) - startY) * sign / yInterval, 
	        p3x = 1, p3y = 1,
	        compU = 1 - u, compV = 1 -v, 
	        u2 = u * u, u3 = u * u * u, v2 = v * v, v3 = v * v * v,

	        a = 3 * compU * compU * u, b = 3 * compU * u2, 
	        c = 3 * compV * compV * v, d = 3 * compV * v2;       

	    var det = a*d - b*c;

	    /* it would not be needed, it's just to honor Murphy's Law */
	    if(det === 0) 
	    {
	        console.log('New Bezier FAIL: Det == 0'); 
	        return oldBezier;
	    }

	    var compU3 = compU * compU * compU, compV3 = compV * compV * compV;

	    var 
	        q1x = p1x - (compU3 * p0x + u3 * p3x),
	        q1y = p1y - (compU3 * p0y + u3 * p3y),	
	        q2x = p2x - (compV3 * p0x + v3 * p3x),
	        q2y = p2y - (compV3 * p0y + v3 * p3y);

	    var res = [
	        (d * q1x - b * q2x) / det,
	        (d * q1y - b * q2y) / det,

	        ((-c) * q1x + a * q2x) / det,
	        ((-c) * q1y + a * q2y) / det
	    ];

	    bezierEasingCache[cacheName] = res;
	    return res;
	}




	/**
	 * Vars and methods used in tween object, for animation library that does not have native support 
	 * for playhead control (play / pause / reverse and so on) 
	 * @mixin
	 * 
	 */
	var TweenPro = function()
	{        
	    this._beginReady = this._endReady = this._thenReady = false;
	    
	    
	    
	    /**
	     * Called on first tween start
	     * 
	     * @returns {TweenPro}
	     */
	    this._run = function()
	    {
	        if(this._duration)
	        {
	            this._startProgress();
	        }
	        // get current display and/or visibility values before starting, if needed
	        if(this._hasStaticProps)
	        {
	            this._fetchStaticProps();
	            this._setStaticProps('tween');                                        
	        }

	        this._running = true;
	        this._delayDummy = null;
	        
	        if(this._emulatedBegin && this._hasHandlers('_begin'))
	        {
	            this._runHandlers('_begin');
	        }
	        
	        // if from() or fromTo() tween, need to jump to begin position before starting the animation
	        if(this._emulatedFrom && this._from)
	        {
	            this._setTween('begin');
	        }
	        
	        this._startTime = Tw.ticker.now();             
	        this._playTween();

	        return this;            
	    };                                 


	    /**
	     * Used to restore begin or end style values accordingly to current direction
	     * 
	     * @param {string} field
	     */
	    this._backTween = function(field)
	    {
	        this._resetTween(field);
	    };


	    /**
	     * Set style values accordinglty to the param, and perform postTween actions
	     * 
	     * @param {string} field
	     */
	    this._resetTween = function(field)
	    {
	        this._setTween(field);
	        this._postTween(field);            
	    };


	    /**
	     * Perform actions before starting the tween. Apply to both directions
	     * 
	     * @param {boolean} direction - true = forward, false = backward
	     */
	    this._preTween = function(direction)
	    {
	        var field = direction? 'begin' : 'end';
	        if(this._hasStaticProps && this._duration)
	        {
	            this._setStaticProps(field, 'tween');                            
	        }
	        this._setTween(field);
	    };
	    

	    /**
	     * Perform actions after ending the tween. Apply to both directions
	     * 
	     * @param {string} field
	     */
	    this._postTween = function(field)
	    {
	        if(field == 'end')                
	        {
	            if(this._hasThen)
	            {
	                this._setTween('then');
	            }
	            if(this._hasStaticProps)
	            {
	                this._setStaticProps(field, 'then');
	            }
	        }
	        else
	        {
	            // if the tween is reversed, restore previous style values
	            // this is needed in timelines, when a reversed tween is preceded by others that refer common targets, with a time gap between them
	            // otherwise, during the time gap in reverse direction the targets will have wrong style values
	            if(this._hasPre)// && this._offset !== 0)
	            {
	                this._setTween('pre');
	            }
	            this._setStaticProps(field);
	        }

	    };


	    /**
	     * Get a simple name: value map of style property, ready to be passed to the chosen animation library.
	     * If supported, set also the per-property easing specified by the user
	     * 
	     * @param {object} tween - tween data structure
	     * @param {string} field - 'begin' | 'end' | 'pre' | 'then'
	     * @param {boolean} isSet - true when the values are needed for changing the style instantly. Easing info are omitted in this case
	     * @returns {object}
	     */
	    this._getTweenValues = function(tween, field, isSet)
	    {
	        var values = {}, entry, value, name, easing, i = 0;
	        for(name in tween)
	        {
	            entry = tween[name];
	            value = null;
	            easing = entry.easing;

	            if(entry[field] !== null)
	            {
	                i++;
	                // cast pure numeric string to number. This avoid bugs in Transit and other libraries that potentially does not support numeric 
	                // values passed as string
	                value = isNumeric(entry[field])? Number(entry[field]) : entry[field];
	                value = isSet || !this._allowMultipleEasing || !easing? value : [value, this._getRealEasing(easing)];
	                values[name] = value;
	            }            
	        }

	        // instead of handling different errors from any library involved, if there are no values to set, we force a fake tween
	        if(!i)
	        {
	            values.opacity = '+=0';
	        }

	        return values;
	    };


	    /**
	     * Fetch a style value for a dom element
	     * 
	     * @param {object} item - dom element
	     * @param {string} name - property name
	     * @param {boolean} useStyle - if true, use element.style instead of computedStyle value
	     * @returns {string|number}
	     */
	    this._getCurrentValue = function(item, name, useStyle)
	    {
	        var style = useStyle? item.style : window.getComputedStyle(item);
	        return style[name];        
	    };


	    /**
	     * Fetch current values for display and / or visibility properties
	     * 
	     */
	    this._fetchStaticProps = function()
	    {             
	        this._staticProps = [];
	        
	        var item, i, end, names, name, value, fieldName, field, hidden, tweenValue, values;
	        for(i = 0, end = this._getTargetLength(); i < end; i++)
	        {
	            item = this._target.get(i);
	            names = {display: false, visibility: false};
	            
	            this._staticProps[i] = {
	                begin: {},
	                end: {},
	                then: {},
	                tween: {}
	            };
	            
	            for(name in names)
	            {
	                fieldName = '_' + name;
	                field = cloneObject(this[fieldName]);
	                if(field.mask > 0)
	                {
	                    if(field.mask < 7)
	                    {
	                        value = this._getCurrentValue(item, name, false);
	                        if(field.begin === null)
	                        {
	                            field.begin = value;
	                        }

	                        if(field.end === null)
	                        {
	                            field.end = value;
	                            if(field.then === null)
	                            {
	                                field.then = value;
	                            }
	                        }                                                                                
	                    }

	                    values = this._staticProps[i];
	                    
	                    values.begin[name] = field.begin;
	                    values.end[name] = field.end;
	                    values.then[name] = field.then;
	                    // values that show the element need to be set before the tween
	                    hidden = (name == 'display')? 'none' : 'hidden';
	                    tweenValue = field.begin != hidden? field.begin : (field.end != hidden? field.end : false);
	                    if(tweenValue !== false)
	                    {
	                        values.tween[name] = tweenValue;
	                    }                    
	                }
	            }
	        }
	    };
	    
	    
	    /**
	     * Set display and visibility properties, that are handled separately
	     * @link http://tweene.com/docs/#displayVisibility
	     * 
	     * @param {string} first
	     * @param {string} [second] two set of values could be applied toghether in some cases, for example end + then or begin + tween
	     */
	    this._setStaticProps = function(first, second)
	    {
	        if(this._staticProps.length)
	        {
	            var i, end, values;
	            for(i = 0, end = this._getTargetLength(); i < end; i++)
	            {                
	                values = this._staticProps[i][first];
	                if(second)
	                {
	                    values = extendObject(values, this._staticProps[i][second]);
	                }
	                if(!isEmpty(values))
	                {
	                    this._target.eq(i).css(values);
	                }
	            }
	        }
	    };         
	    

	    /**
	     * Override TweenCommon._getRealEasing()
	     * It generates also custom bezier curves needed for resuming a paused tween honoring the original easing effect
	     * 
	     * @param {string|array} value
	     * @returns {string|array|function}
	     */
	    this._getRealEasing = function(value)
	    {
	        if(isString(value) && value in easings)
	        {
	            value = easings[value];
	        }

	        if(isArray(value))
	        {
	            var position = this._position;
	            // in backward direction, reverse the bezier curve too
	            if(!this._localFwd)
	            {
	                value = reverseBezier(value);
	                position = this._duration - position;
	            }

	            var timeRatio = position / this._duration;
	            value = this._getBezierEasing(getNewBezier(value, timeRatio));
	        }

	        return value;
	    };


	};
	/**
	 * Tweene - JavaScript Animation Proxy
	 *
	 * @link http://tweene.com
	 *
	 * Copyright (c) 2014, Federico Orru'   <federico@buzzler.com>
	 *
	 * @license Artistic License 2.0
	 * See LICENSE.txt for details
	 *
	 */



	/**
	 * Vars and methods used in timeline object, for animation library that does not have native support for timelines
	 * @mixin
	 *
	 */
	var TimelinePro = function()
	{
	    this._emulatedPlayhead = true;

	    this._emulatedBegin = true;

	    this._emulatedProgress = true;

	    this._runningList = {};

	    this._runningCount = 0;

	    this._keyframes = {};

	    this._index = [];

	    this._childrenList = [];

	    this._backKeyframes = {};

	    this._backIndex = [];

	    this._backEnabled = true;

	    this._keyTime = null;
	    this._keyDirection = null;
	    this._keyCurrentIndex = null;



	    /**
	     * Cascade a method call to the children that are currently running
	     *
	     * @param {string} method
	     * @returns {this}
	     */
	    this._propagate = function(method)
	    {
	        var args = toArray(arguments, 1);
	        for(var id in this._runningList)
	        {
	            this._runningList[id][method].apply(this._runningList[id], args);
	        }
	        return this;
	    };


	    /**
	     * Cascade a method call to the all the children, regardless their running status
	     *
	     * @param {string} method
	     * @returns {this}
	     */
	    this._propagateToAll = function(method)
	    {
	        var args = toArray(arguments, 1);
	        for(var i = 0, end = this._childrenList.length; i < end; i++)
	        {
	            this._childrenList[i][method].apply(this._childrenList[i], args);
	        }
	        return this;
	    };


	    /**
	     * Perform internal tasks needed before starting the timeline
	     *
	     * @returns {number} - Returns the timeline total duration
	     */
	    this.prepare = function()
	    {
	        if(this._ready)
	        {
	            return this;
	        }

	        var sortInt = function(a, b){
	            return a - b;
	        };

	        this._reset();

	        if(this._emulatedProgress)
	        {
	            this
	                .setCoreHandler('end', '_progress', this._stopProgress, this, [])
	                .setCoreHandler('reverse', '_progress', this._stopProgress, this, []);
	        }

	        this._mergeChildren();
	        this._index.sort(sortInt);

	        // empty timeline
	        if(!this._index.length)
	        {
	            this._ready = true;
	            return this;
	        }

	        var i = 1;
	        var firstTime = this._index[0];
	        // if the first child does not start at 0, add a dummy to fill to gap
	        if(firstTime !== 0)
	        {
	            // prevent the push of 0 at the end of index, because index is already sorted
	            this._keyframes[0] = {f: [], b: [], fTrigger: null, bTrigger: null};
	            this._addDummy(0, firstTime);
	            this._keyframes[0].bTrigger = null;
	            this._index.unshift(0);
	            i++;
	        }

	        // add dummies to fill the gaps between real children, in both directions, so the timeline will work like a queues tree
	        var time, keyframe, j;
	        for(var len = this._index.length - 1; i < len; i++)
	        {
	            time = this._index[i];
	            keyframe = this._keyframes[time];
	            if(!keyframe.bTrigger)
	            {
	                j = i - 1;
	                while(j > 0 && !this._keyframes[this._index[j]].bTrigger)
	                {
	                    j--;
	                }
	                this._addDummy(this._index[j], time);
	            }
	            if(!keyframe.fTrigger)
	            {
	                j = i + 1;
	                while(j < this._index.length - 2 && !this._keyframes[this._index[j]].fTrigger)
	                {
	                    j++;
	                }
	                this._addDummy(time, this._index[j]);
	            }
	        }

	        this._backIndex.sort(sortInt);
	        this._ready = true;
	        return this._getTotalDuration();
	    };


	    /**
	     * Push child to the top level timeline in order to build a sorted index needed for restarting all the tweens in the right order
	     *
	     * @param {object} tween
	     * @param {number} begin
	     * @param {number} end
	     * @param {number} offset
	     * @returns {this}
	     */
	    this.pushUp = function(tween, begin, end, offset)
	    {
	        if(this._parent)
	        {
	            this._parent.pushUp(tween, begin + offset, end + offset, 0);
	        }
	        else
	        {
	            if(tween.type == 'tween')
	            {
	                tween.offset(begin + offset);
	            }
	        }

	        // add to backIndex
	        this._addToIndex(tween, begin, end, false, false, true);
	        return this;
	    };


	    /**
	     * Reset internal indexes and properties, needed by invalidate()
	     *
	     */
	    this._reset = function()
	    {
	        this._offset = 0;
	        this._cursor = null;
	        this._keyframes = {};
	        this._index = [];
	        this._backKeyframes = {};
	        this._backIndex = [];
	    };


	    /**
	     * Add a dummy child. Dummies are needed to fill gaps between real children.
	     * Dummy reverse and end events will trigger the start for other children
	     *
	     * @param {number} begin
	     * @param {number} end
	     */
	    this._addDummy = function(begin, end)
	    {
	        var dummy = this._getDummy();
	        var res = this._addToIndex(dummy, begin, end, true, true, false);
	        this.pushUp(dummy, begin, end);
	        dummy
	            .parent(this)
	            .duration(end - begin)
	            .setCoreHandler('reverse', 'timeline', this._childCallback, this, ['b', begin, dummy.id(), res[0]])
	            .setCoreHandler('end', 'timeline', this._childCallback, this, ['f', end, dummy.id(), res[1]]);

	        this._childrenList.push(dummy);
	    };


	    /**
	     * Save a children to index or backIndex. Indexes are needed to start and reset tweens in the right order
	     *
	     * @param {object} tween - dummy, tween or timeline object
	     * @param {number} begin
	     * @param {number} end
	     * @param {boolean} fTriggering - forward triggering, true when this child is suitable for triggering next children with its end event
	     * @param {boolean} bTriggering - backward triggering, true when this child is suitable for triggering previous children with its reverse event
	     * @param {boolean} useBack - true = store data in backIndex
	     * @returns {array}
	     */
	    this._addToIndex = function(tween, begin, end, fTriggering, bTriggering, useBack)
	    {
	        var keyframes, index, firstBegin, firstEnd;
	        if(useBack)
	        {
	            keyframes = this._backKeyframes;
	            index = this._backIndex;
	        }
	        else
	        {
	            keyframes = this._keyframes;
	            index = this._index;
	        }

	        if(!(begin in keyframes))
	        {
	            keyframes[begin] = {f: [], b: [], fc: [], bc: [], fTrigger: null, bTrigger: null};
	            index.push(begin);
	        }
	        if(tween.type == 'callback')
	        {
	            keyframes[begin].fc.push(tween);
	        }
	        else
	        {
	            keyframes[begin].f.push(tween);
	        }
	        // use only one child for each keyframe trigger in forward direction
	        firstBegin = fTriggering && !this._keyframes[begin].fTrigger;
	        if(firstBegin)
	        {
	            keyframes[begin].fTrigger = tween;
	        }

	        if(end != Infinity)
	        {
	            if(!(end in keyframes))
	            {
	                keyframes[end] = {f: [], b: [], fc: [], bc: [], fTrigger: null, bTrigger: null};
	                index.push(end);
	            }
	            if(tween.type == 'callback')
	            {
	                keyframes[end].bc.push(tween);
	            }
	            else
	            {
	                keyframes[end].b.push(tween);
	            }
	            // use only one child for each keyframe trigger in backward direction
	            firstEnd = bTriggering && !this._keyframes[end].bTrigger;
	            if(firstEnd)
	            {
	                keyframes[end].bTrigger = tween;
	            }
	        }

	        return [firstBegin, firstEnd];
	    };


	    /**
	     * Available for drivers that need to perform extra operation with labels
	     *
	     * @param {object} child - Label object
	     * @param {number} begin - label position inside the timeline
	     */
	    this._mergeLabel = function(child, begin)
	    {
	        // nop
	    };


	    /**
	     * Merge tweens and timelines inside their parent timeline
	     *
	     * @param {object} child - tween or timeline
	     * @param {number} begin
	     * @param {number} end
	     */
	    this._mergeTweenable = function(child, begin, end)
	    {
	        this._childrenList.push(child);
	        this._mergeElement(child, begin, end, true);
	    };


	    /**
	     * Merge callbacks inside their parent timeline
	     *
	     * @param {object} child - Callback object
	     * @param {number} begin
	     * @param {number} end
	     */
	    this._mergeCallback = function(child, begin, end)
	    {
	        this._mergeElement(child, begin, end, false);
	    };


	    /**
	     * Finalize the merging of tweens, timelines and callbacks
	     *
	     * @param {object} child
	     * @param {number} begin
	     * @param {number} end
	     * @param {boolean} tweenable - true for tweens and timelines
	     * @returns {undefined}
	     */
	    this._mergeElement = function(child, begin, end, tweenable)
	    {
	        // trigger will be true only for tweenable children with positive duration (callbacks have end = begin)
	        var trigger = end > begin;
	        var res = this._addToIndex(child, begin, end, trigger, trigger, false);

	        if(tweenable)
	        {
	            this.pushUp(child, begin, end, this._offset);

	            child.setCoreHandler('reverse', 'timeline', this._childCallback, this, ['b', begin, child.id(), res[0]]);
	            if(end != Infinity)
	            {
	                child.setCoreHandler('end', 'timeline', this._childCallback, this, ['f', end, child.id(), res[1]]);
	            }
	        }
	    };


	    /**
	     * Called by each child on reverse and end events. Used for update runningList and trigger the start of other previous or next children
	     *
	     * @param {string} direction - 'b' = backward | 'f' = forward
	     * @param {number} time
	     * @param {number} id - unique identifier of the child
	     * @param {boolean} isKeyChild - true when the child is enabled to trigger the start of other children
	     */
	    this._childCallback = function(direction, time, id, isKeyChild)
	    {
	        // remove from runningList
	        if(id in this._runningList)
	        {
	            delete this._runningList[id];
	            this._runningCount--;
	        }

	        if(isKeyChild)
	        {
	            if(time in this._keyframes)
	            {
	                this._processKeyframe(time, direction, null);
	            }
	        }
	    };



	    this._processKeyframe = function(time, direction, currentIndex)
	    {
	        this._keyCurrentIndex = null;

	        var cDirection = direction + 'c', cList = this._keyframes[time][cDirection], tList = this._keyframes[time][direction],
	            i, end, offset, item, paused = false;

	        if(cList.length)
	        {
	            if(direction == 'f')
	            {
	                i = currentIndex !== null? currentIndex + 1 : 0;
	                end = cList.length;
	                offset = 1;
	            }
	            else
	            {
	                i = currentIndex !== null? currentIndex - 1 : cList.length - 1;
	                end = -1;
	                offset = -1;
	            }

	            for(; i != end; i += offset)
	            {
	                item = cList[i];
	                if(item.isPause)
	                {
	                    paused = true;
	                    this._keyTime = time;
	                    this._keyDirection = direction;
	                    this._keyCurrentIndex = i;
	                    this.pause();
	                }

	                // also callback are executed by resume()
	                item.resume();
	                if(paused)
	                {
	                    break;
	                }
	            }
	        }

	        if(!paused)
	        {
	            if(tList.length)
	            {
	                for(i = 0, end = tList.length; i < end; i++)
	                {
	                    item = tList[i];
	                    this._addToRun(item);
	                    item.resume();
	                }
	            }
	            // emulate end / reverse events
	            if((direction == 'b' && time === 0) || (direction == 'f' && time == this._index[this._index.length - 1]))
	            {
	                this._runHandlers('_end');
	            }
	        }

	        return paused;
	    };


	    /**
	     * Called on first timeline start
	     *
	     * @returns {this}
	     */
	    this._run = function()
	    {
	        this._running = true;
	        this._delayDummy = null;

	        if(this._emulatedBegin && this._hasHandlers('_begin'))
	        {
	            this._runHandlers('_begin');
	        }

	        this._startTime = Tw.ticker.now();
	        this._playTween();

	        return this;
	    };


	    /**
	     * trigger the start of the first keyframe
	     *
	     */
	    this._playTween = function()
	    {
	        this._childCallback('f', 0, -1, true);
	    };


	    /**
	     * propagate pause to the running children
	     *
	     */
	    this._pauseTween = function()
	    {
	        this._propagate('pause');
	    };


	    /**
	     * if running, propagate resume to running children, else trigger first or last keyframe accordingly with current direction
	     */
	    this._resumeTween = function()
	    {
	        var runningCount = this._runningCount, paused = false;
	        this._startProgress();

	        if(this._keyCurrentIndex !== null)
	        {
	            this._keyDirection = this._localFwd? 'f' : 'b';
	            paused = this._processKeyframe(this._keyTime, this._keyDirection, this._keyCurrentIndex);
	        }

	        if(!paused)
	        {
	            if(runningCount)
	            {
	                this._propagate('resume');
	            }
	            else
	            {
	                var args = false, direction = this._localFwd;

	                if(direction && this._position === 0)
	                {
	                    args = ['f', 0, -1, true];
	                }
	                else if(!direction && this._position == this._duration)
	                {
	                    args = ['b', this._index.length? this._index[this._index.length - 1] : 0, -1, true];
	                }

	                if(args)
	                {
	                    this._childCallback.apply(this, args);
	                }
	            }
	        }
	    };


	    /**
	     * Go to final or start position resetting also the children, accordingly with current direction
	     *
	     */
	    this._backTween = function()
	    {
	        // clear running List
	        this._runningList = {};
	        this._runningCount = 0;

	        // timeline disable back in nested timelines when going back
	        if(!this._backEnabled)
	        {
	            return;
	        }
	        var i, end, inc, type, elemList, time;

	        // reset tweens in reverse order, in order to restore all the style properties correctly
	        if(this._localFwd)
	        {
	            i = this._backIndex.length - 1;
	            end = -1;
	            inc = -1;
	            type = 'f';
	        }
	        else
	        {
	            i = 0;
	            end = this._backIndex.length;
	            inc = 1;
	            type = 'b';
	        }


	        for(; i != end; i += inc)
	        {
	            time = this._backIndex[i];
	            elemList = this._backKeyframes[time][type];
	            for(var j = elemList.length - 1; j >= 0; j--)
	            {
	                var child = elemList[j];
	                // disable back in children timelines
	                child._backEnabled = false;
	                child.pause().back();
	                child._backEnabled = true;
	            }
	        }
	    };


	    /**
	     * Add child to runningList
	     *
	     * @param {object} child
	     * @returns {this}
	     */
	    this._addToRun = function(child)
	    {
	        if(child.totalDuration())
	        {
	            var id = child.id();
	            // avoid multiple wrong increments of runningCount
	            if(!(id in this._runningList))
	            {
	                this._runningCount ++;
	                this._runningList[id] = child;
	            }
	        }
	        return this;
	    };


	    /**
	     * Remove child from runningList
	     *
	     * @param {object} child
	     * @returns {this}
	     */
	    this._removeFromRun = function(child)
	    {
	        var id = child.id();
	        // avoid multiple wrong decrements of runningCount
	        if(id in this._runningList)
	        {
	            this._runningCount --;
	            delete this._runningList[id];
	        }
	        return this;
	    };
	};

	/**
	 * Tweene - JavaScript Animation Proxy 
	 * 
	 * @link http://tweene.com
	 *   
	 * Copyright (c) 2014, Federico Orru'   <federico@buzzler.com>
	 * 
	 * @license Artistic License 2.0 
	 * See LICENSE.txt for details
	 * 
	 */


	/**
	 * Dummy tween driver. Dummies are used to emulate delay and to fill time gaps between real tweens inside timelines
	 * @class
	 * @mixes Common, TweenCommon, ControlsPro, TweenPro
	 * 
	 * suitable OST https://www.youtube.com/watch?v=GaUqpnHvua8
	 * 
	 */   
	Tw.registerDriver('Dummy', 'tween', function() {
	    Common.call(this);
	    TweenCommon.call(this);
	    ControlsPro.call(this);
	    TweenPro.call(this);    

	    
	    this._driverTimeUnit = 'ms';    
	    this._emulatedPlayhead = true;
	    this._emulatedProgress = true;
	        
	    this
	        .setCoreHandler('end', 'resetPos', this._resetPosition, this)
	        .setCoreHandler('reverse', 'resetPos', this._resetPosition, this)
	        .setCoreHandler('end', '_progress', this._stopProgress, this)
	        .setCoreHandler('reverse', '_progress', this._stopProgress, this);                

	    
	    /**
	     * nothing to invalidate here
	     * 
	     * @returns {this}
	     */
	    this.invalidate = function()
	    {
	        return this;
	    };
	    
	    
	    /**
	     * Override ControlsPro.pause()
	     * 
	     * @returns {this}
	     */
	    this.pause = function()
	    {
	        if(!this._paused)
	        {
	            this._stopProgress();
	            // remove callback from ticker queue
	            Tw.ticker.removeCallback(this._id);
	            this._paused = true;
	            this._pauseTime = Tw.ticker.now();
	            this._position += (this._pauseTime - this._startTime) * this.getRealSpeed() * (this._localFwd? 1 : -1);
	        }
	        return this;
	    };
	    
	                        
	    /** 
	     * Set internal position of dummy
	     * 
	     * @param {number} value
	     * @returns {this}
	     */      
	    this.position = function(value)
	    {
	        this._position = value;
	        if(value === 0)
	        {
	            this._playAllowed = true;
	        }
	        else if(value == this._duration)
	        {
	            this._reverseAllowed = true;
	        }
	            
	        return this;
	    };
	    
	    
	    /**
	     * Set dummy duration
	     * 
	     * @param {number} value
	     * @returns {this}
	     */
	    this.duration = function(value)
	    {
	        this._duration = value;
	        return this;
	    };
	    
	    
	    /**
	     * Override ControlsPro.resume()
	     * 
	     * @returns {this}
	     */
	    this.resume = function()
	    {
	        if(this._paused)
	        {
	            this._running = true;
	            this._paused = false;            
	            var handler = this._localFwd? 'end' : 'reverse';
	            
	            if(this._localFwd && this._position === 0)
	            {
	                this._runHandlers('begin');                
	            }
	            var duration = (this._localFwd? this._duration - this._position : this._position) / this.getRealSpeed();                
	            if(!duration)
	            {
	                this._runHandlers(handler);
	            }
	            else
	            {                
	                var params = [duration, this._id, this._runHandlers, this, [handler]];
	                this._startTime = Tw.ticker.now();
	                // add callback in ticker queue
	                Tw.ticker.addCallback.apply(Tw.ticker, params);                
	                this._startProgress();
	            }
	        }
	        return this;
	    };
	    
	        
	    this._backTween = function() {};    
	        
	});
	      

	/**
	 * Tweene - JavaScript Animation Proxy
	 *
	 * @link http://tweene.com
	 *
	 * Copyright (c) 2014, Federico Orru'   <federico@buzzler.com>
	 *
	 * @license Artistic License 2.0
	 * See LICENSE.txt for details
	 *
	 */



	// needed for scheduling sequences of Tweene.set()
	var velocitySetPendings = [];


	/**
	 * Velocity Tween Driver
	 *
	 * @link http://julian.com/research/velocity/
	 * @mixes Common, TweenCommon, ControlsPro, TweenPro
	 *
	 */
	Tw.registerDriver('velocity', 'tween', function() {
	    Common.call(this);
	    TweenCommon.call(this);
	    ControlsPro.call(this);
	    TweenPro.call(this);

	    this._driverTimeUnit = 'ms';

	    this._emulatedPlayhead = true;
	    this._emulatedFrom = true;
	    this._emulatedLoop = true;
	    this._emulatedDelay = true;
	    this._emulatedBegin = false;
	    this._emulatedProgress = false;
	    this._allowMultipleEasing = true;
	    this._allowTransform = true;


	    this._propertyMap = {
	        x: 'translateX',
	        y: 'translateY',
	        z: 'translateZ',
	        rotation: 'rotateZ',
	        rotate: 'rotateZ',
	        rotationX: 'rotateX',
	        rotationY: 'rotateY',
	        rotationZ: 'rotateZ'
	    };

	    var _css = $.fn.velocity.CSS;
	    this._tweenReady = true;
	    this._pendings = [];
	    this._setPending = false;


	    /**
	     * Velocity executes also instant tweens async, so we need to handle an internal schedule
	     *
	     * @param {function} callback
	     * @param {array} [params]
	     */
	    this._addPendingCall = function(callback, params)
	    {
	        this._pendings.push([callback, params || []]);
	    };


	    /**
	     * Run pending callbacks
	     *
	     */
	    this._processPendings = function()
	    {
	        for(var i = 0, end = this._pendings.length; i < end; i++)
	        {
	            this._pendings[i][0].apply(this, this._pendings[i][1]);
	        }
	        // pending processed could push other calls, so we cannot just empty the whole array
	        this._pendings.splice(0, end);
	    };


	    /**
	     * Fetch actual style values from Velocity calls queue, then pass them to a callback
	     *
	     * @param {object} tween
	     * @param {function} callback
	     */
	    this._getVelocityValues = function(tween, callback)
	    {
	        var calls = $.fn.velocity.State.calls;
	        var name, root, beginValue, endValue, entry = calls[calls.length - 1][0][0];
	        for(name in entry)
	        {
	            if(isObject(entry[name]) && 'startValue' in entry[name])
	            {
	                // Velocity splits some properties in sub-properties
	                root = _css.Hooks.getRoot(name);
	                if(!(name in tween))
	                {
	                    tween[name] = {begin: null, end: null, then: null, easing: root in tween? tween[root].easing : null};
	                }
	                beginValue = entry[name].startValue + entry[name].unitType;
	                endValue = entry[name].endValue + entry[name].unitType;
	                callback.call(this, tween, name, root, beginValue, endValue);
	            }
	        }
	    };


	    /**
	     * Velocity implements bezier internally, we can send directly the array param
	     *
	     * @param {array} value
	     * @returns {array}
	     */
	    this._getBezierEasing = function(value)
	    {
	        return value;
	    };


	    /**
	     * Save pre-start values in tween structure
	     *
	     * @param {object} tween
	     * @param {string} name
	     * @param {string} root
	     * @param {string|number} begin
	     * @param {string|number} end
	     */
	    this._fetchBegin = function(tween, name, root, begin, end)
	    {
	        tween[name].begin = end;
	        if(this._hasBegin && !this._hasEnd)
	        {
	            tween[name].end = tween[name].pre = begin;
	            if(this._hasThen && tween[name].then === null)
	            {
	                tween[name].then = begin;
	            }
	            if(root != name)
	            {
	                tween[root].begin = tween[root].end = tween[root].then = null;
	            }
	            this._endReady = true;
	        }
	        else
	        {
	            tween[name].pre = begin;
	            if(tween[name].end === null)
	            {
	                tween[name].end = end;
	            }
	            if(root != name)
	            {
	                tween[root].begin = null;
	            }
	        }

	    };


	    /**
	     * Save then values in tween structure
	     *
	     * @param {object} tween
	     * @param {string} name
	     * @param {string} root
	     * @param {string|number} begin
	     * @param {string|number} end
	     */
	    this._fetchThen = function(tween, name, root, begin, end)
	    {
	        tween[name].then = end;
	        if(tween[name].end === null)
	        {
	            tween[name].end = begin;
	        }
	        if(tween[name].begin === null)
	        {
	            tween[name].begin = tween[name].end;
	        }
	        if(this._hasPre && tween[name].pre === null)
	        {
	            tween[name].pre = this._hasEnd? tween[name].begin : tween[name].end;
	        }
	        if(root != name)
	        {
	            tween[root].begin = tween[root].end = tween[root].then = tween[root].pre = null;
	        }
	    };


	    /**
	     * Save post-tween values in tween structure
	     *
	     * @param {object} tween
	     * @param {string} name
	     * @param {string} root
	     * @param {string|number} begin
	     * @param {string|number} end
	     */
	    this._fetchEnd = function(tween, name, root, begin, end)
	    {
	        tween[name].begin = begin;
	        tween[name].end = end;
	        if(this._hasPre && tween[name].pre === null)
	        {
	            tween[name].pre = begin;
	        }
	        if(this._hasThen && tween[name].then === null)
	        {
	            tween[name].then = end;
	        }
	        if(root != name)
	        {
	            tween[root].begin = tween[root].end = tween[root].pre = tween[root].then = null;
	        }
	    };


	    /**
	     * Set css values instantly
	     *
	     * @param {string} field - 'begin' | 'end' | 'pre' | 'then'
	     */
	    this._setTween = function(field)
	    {
	        if(!this._tweenReady)
	        {
	            this._addPendingCall(this._setTween, [field]);
	            return;
	        }

	        var options, self = this, i, end, tween, values,
	            onComplete = function() {
	                self._tweenReady = true;
	                self._processPendings();
	            };

	        this._tweenReady = false;
	        for(i = 0, end = this._target.length; i < end; i++)
	        {
	            tween = this._data.tween[i];
	            values = this._getTweenValues(this._data.tween[i], field, true);
	            options = {duration: 0, queue: false};
	            if(i == end - 1)
	            {
	                options.complete = onComplete;
	            }
	            this._target.eq(i).velocity(values, options);
	            if(field == 'begin' && this._hasBegin && !this._beginReady)
	            {
	                this._getVelocityValues(tween, this._fetchBegin);
	                this._hasPre = true;
	            }
	            else if(field == 'then' && this._hasThen && !this._thenReady)
	            {
	                this._getVelocityValues(tween, this._fetchThen);
	            }
	        }

	        if(field == 'begin')
	        {
	            this._beginReady = true;
	        }
	        else if(field == 'then')
	        {
	            this._thenReady = true;
	        }
	    };


	    /**
	     * Execute the effective tween
	     *
	     */
	    this._playTween = function()
	    {
	        if(!this._tweenReady)
	        {
	            this._addPendingCall(this._playTween);
	            return;
	        }
	        // in Velocity also tweens with duration = 0 are async, so we need to handle a queue in order to allow multiple Tweene.set() to run in the right order
	        if(!this._duration)
	        {
	            if(!this._setPending)
	            {
	                this._setPending = true;
	                velocitySetPendings.push(this);

	                this.setCoreHandler('_end', 'setEnd', function() {
	                    velocitySetPendings.shift();
	                    if(velocitySetPendings.length > 0)
	                    {
	                        velocitySetPendings[0]._playTween();
	                    }
	                }, this);

	                if(velocitySetPendings.length > 1)
	                {
	                    return;
	                }
	            }
	        }


	        var self = this,
	            data = this._data,
	            field = this._localFwd? 'end' : 'begin',
	            i, end, tween, values, options,  target,
	            onBegin = function() { self._runHandlers('_begin'); },
	            onComplete = function() { self._runHandlers('_end'); },
	            onProgress = function() { self._runHandlers('progress'); };
	        for(i = 0, end = this._target.length; i < end; i++)
	        {
	            tween = data.tween[i];
	            target = this._target.eq(i);
	            values = this._getTweenValues(tween, field, (data.duration !== 0));
	            options = {
	                duration: data.realDuration,
	                queue: 'tweene_' + this._id
	            };

	            if(data.duration)
	            {
	                options.easing = this._getRealEasing(data.easing);
	            }

	            if(i === end - 1)
	            {
	                options.begin = onBegin;
	                options.complete = onComplete;

	                if(this._hasHandlers('progress'))
	                {
	                    options.progress = onProgress;
	                }
	            }
	            target.velocity(values, options).dequeue('tweene_' + this._id);
	            if(!this._endReady)
	            {
	                this._getVelocityValues(tween, this._fetchEnd);
	            }
	        }
	        this._endReady = true;
	        return this;
	    };



	    /**
	     * Pause a running tween
	     *
	     */
	    this._pauseTween = function()
	    {
	//        console.log('pausing velocity tween');
	        this._target.velocity('stop', 'tweene_' + this._id);
	//        this._pendings = [];
	        return this;
	    };



	    this._resumeTween = function()
	    {
	//        console.log('resuming velocity tween');
	        return this._playTween();
	    };


	    // need to handle also this with queue
	    this._oldStaticProps = this._setStaticProps;

	    this._setStaticProps = function(first, second)
	    {
	        if(!this._tweenReady)
	        {
	            this._addPendingCall(this._setStaticProps, [first, second]);
	            return;
	        }

	        this._oldStaticProps(first, second);
	    };


	});


	/**
	 * Velocity Timeline Driver
	 *
	 * @mixes Common, TimelineCommon, ControlsPro, TimelinePro
	 *
	 */
	Tw.registerDriver('velocity', 'timeline', function() {
	    Common.call(this);
	    TimelineCommon.call(this);
	    ControlsPro.call(this);
	    TimelinePro.call(this);

	    this._driverTimeUnit = 'ms';
	});

	Tw.defaultTimeUnit = 'ms';
	Tw.defaultDriver = 'velocity';
	return Tw;
	};

	if(true) {
	   !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(275), __webpack_require__(274)], __WEBPACK_AMD_DEFINE_FACTORY__ = (func.bind(this, window)), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if(typeof(module) !== 'undefined' && module.exports) {
	   var mod;
	 mod = require('jquery');
	 if(window) window.jQuery = window.$ = mod;
	 mod = require('velocity-animate');
	module.exports = func(window);
	} else {
	   func(window);
	}
	}(typeof(global) !== 'undefined'? global : window));

	//# sourceMappingURL=velocity.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! VelocityJS.org (1.5.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */

	/*************************
	 Velocity jQuery Shim
	 *************************/

	/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */

	/* This file contains the jQuery functions that Velocity relies on, thereby removing Velocity's dependency on a full copy of jQuery, and allowing it to work in any environment. */
	/* These shimmed functions are only used if jQuery isn't present. If both this shim and jQuery are loaded, Velocity defaults to jQuery proper. */
	/* Browser support: Using this shim instead of jQuery proper removes support for IE8. */

	(function(window) {
		"use strict";
		/***************
		 Setup
		 ***************/

		/* If jQuery is already loaded, there's no point in loading this shim. */
		if (window.jQuery) {
			return;
		}

		/* jQuery base. */
		var $ = function(selector, context) {
			return new $.fn.init(selector, context);
		};

		/********************
		 Private Methods
		 ********************/

		/* jQuery */
		$.isWindow = function(obj) {
			/* jshint eqeqeq: false */
			return obj && obj === obj.window;
		};

		/* jQuery */
		$.type = function(obj) {
			if (!obj) {
				return obj + "";
			}

			return typeof obj === "object" || typeof obj === "function" ?
					class2type[toString.call(obj)] || "object" :
					typeof obj;
		};

		/* jQuery */
		$.isArray = Array.isArray || function(obj) {
			return $.type(obj) === "array";
		};

		/* jQuery */
		function isArraylike(obj) {
			var length = obj.length,
					type = $.type(obj);

			if (type === "function" || $.isWindow(obj)) {
				return false;
			}

			if (obj.nodeType === 1 && length) {
				return true;
			}

			return type === "array" || length === 0 || typeof length === "number" && length > 0 && (length - 1) in obj;
		}

		/***************
		 $ Methods
		 ***************/

		/* jQuery: Support removed for IE<9. */
		$.isPlainObject = function(obj) {
			var key;

			if (!obj || $.type(obj) !== "object" || obj.nodeType || $.isWindow(obj)) {
				return false;
			}

			try {
				if (obj.constructor &&
						!hasOwn.call(obj, "constructor") &&
						!hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
					return false;
				}
			} catch (e) {
				return false;
			}

			for (key in obj) {
			}

			return key === undefined || hasOwn.call(obj, key);
		};

		/* jQuery */
		$.each = function(obj, callback, args) {
			var value,
					i = 0,
					length = obj.length,
					isArray = isArraylike(obj);

			if (args) {
				if (isArray) {
					for (; i < length; i++) {
						value = callback.apply(obj[i], args);

						if (value === false) {
							break;
						}
					}
				} else {
					for (i in obj) {
						if (!obj.hasOwnProperty(i)) {
							continue;
						}
						value = callback.apply(obj[i], args);

						if (value === false) {
							break;
						}
					}
				}

			} else {
				if (isArray) {
					for (; i < length; i++) {
						value = callback.call(obj[i], i, obj[i]);

						if (value === false) {
							break;
						}
					}
				} else {
					for (i in obj) {
						if (!obj.hasOwnProperty(i)) {
							continue;
						}
						value = callback.call(obj[i], i, obj[i]);

						if (value === false) {
							break;
						}
					}
				}
			}

			return obj;
		};

		/* Custom */
		$.data = function(node, key, value) {
			/* $.getData() */
			if (value === undefined) {
				var getId = node[$.expando],
						store = getId && cache[getId];

				if (key === undefined) {
					return store;
				} else if (store) {
					if (key in store) {
						return store[key];
					}
				}
				/* $.setData() */
			} else if (key !== undefined) {
				var setId = node[$.expando] || (node[$.expando] = ++$.uuid);

				cache[setId] = cache[setId] || {};
				cache[setId][key] = value;

				return value;
			}
		};

		/* Custom */
		$.removeData = function(node, keys) {
			var id = node[$.expando],
					store = id && cache[id];

			if (store) {
				// Cleanup the entire store if no keys are provided.
				if (!keys) {
					delete cache[id];
				} else {
					$.each(keys, function(_, key) {
						delete store[key];
					});
				}
			}
		};

		/* jQuery */
		$.extend = function() {
			var src, copyIsArray, copy, name, options, clone,
					target = arguments[0] || {},
					i = 1,
					length = arguments.length,
					deep = false;

			if (typeof target === "boolean") {
				deep = target;

				target = arguments[i] || {};
				i++;
			}

			if (typeof target !== "object" && $.type(target) !== "function") {
				target = {};
			}

			if (i === length) {
				target = this;
				i--;
			}

			for (; i < length; i++) {
				if ((options = arguments[i])) {
					for (name in options) {
						if (!options.hasOwnProperty(name)) {
							continue;
						}
						src = target[name];
						copy = options[name];

						if (target === copy) {
							continue;
						}

						if (deep && copy && ($.isPlainObject(copy) || (copyIsArray = $.isArray(copy)))) {
							if (copyIsArray) {
								copyIsArray = false;
								clone = src && $.isArray(src) ? src : [];

							} else {
								clone = src && $.isPlainObject(src) ? src : {};
							}

							target[name] = $.extend(deep, clone, copy);

						} else if (copy !== undefined) {
							target[name] = copy;
						}
					}
				}
			}

			return target;
		};

		/* jQuery 1.4.3 */
		$.queue = function(elem, type, data) {
			function $makeArray(arr, results) {
				var ret = results || [];

				if (arr) {
					if (isArraylike(Object(arr))) {
						/* $.merge */
						(function(first, second) {
							var len = +second.length,
									j = 0,
									i = first.length;

							while (j < len) {
								first[i++] = second[j++];
							}

							if (len !== len) {
								while (second[j] !== undefined) {
									first[i++] = second[j++];
								}
							}

							first.length = i;

							return first;
						})(ret, typeof arr === "string" ? [arr] : arr);
					} else {
						[].push.call(ret, arr);
					}
				}

				return ret;
			}

			if (!elem) {
				return;
			}

			type = (type || "fx") + "queue";

			var q = $.data(elem, type);

			if (!data) {
				return q || [];
			}

			if (!q || $.isArray(data)) {
				q = $.data(elem, type, $makeArray(data));
			} else {
				q.push(data);
			}

			return q;
		};

		/* jQuery 1.4.3 */
		$.dequeue = function(elems, type) {
			/* Custom: Embed element iteration. */
			$.each(elems.nodeType ? [elems] : elems, function(i, elem) {
				type = type || "fx";

				var queue = $.queue(elem, type),
						fn = queue.shift();

				if (fn === "inprogress") {
					fn = queue.shift();
				}

				if (fn) {
					if (type === "fx") {
						queue.unshift("inprogress");
					}

					fn.call(elem, function() {
						$.dequeue(elem, type);
					});
				}
			});
		};

		/******************
		 $.fn Methods
		 ******************/

		/* jQuery */
		$.fn = $.prototype = {
			init: function(selector) {
				/* Just return the element wrapped inside an array; don't proceed with the actual jQuery node wrapping process. */
				if (selector.nodeType) {
					this[0] = selector;

					return this;
				} else {
					throw new Error("Not a DOM node.");
				}
			},
			offset: function() {
				/* jQuery altered code: Dropped disconnected DOM node checking. */
				var box = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {top: 0, left: 0};

				return {
					top: box.top + (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
					left: box.left + (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
				};
			},
			position: function() {
				/* jQuery */
				function offsetParentFn(elem) {
					var offsetParent = elem.offsetParent;

					while (offsetParent && offsetParent.nodeName.toLowerCase() !== "html" && offsetParent.style && offsetParent.style.position === "static") {
						offsetParent = offsetParent.offsetParent;
					}

					return offsetParent || document;
				}

				/* Zepto */
				var elem = this[0],
						offsetParent = offsetParentFn(elem),
						offset = this.offset(),
						parentOffset = /^(?:body|html)$/i.test(offsetParent.nodeName) ? {top: 0, left: 0} : $(offsetParent).offset();

				offset.top -= parseFloat(elem.style.marginTop) || 0;
				offset.left -= parseFloat(elem.style.marginLeft) || 0;

				if (offsetParent.style) {
					parentOffset.top += parseFloat(offsetParent.style.borderTopWidth) || 0;
					parentOffset.left += parseFloat(offsetParent.style.borderLeftWidth) || 0;
				}

				return {
					top: offset.top - parentOffset.top,
					left: offset.left - parentOffset.left
				};
			}
		};

		/**********************
		 Private Variables
		 **********************/

		/* For $.data() */
		var cache = {};
		$.expando = "velocity" + (new Date().getTime());
		$.uuid = 0;

		/* For $.queue() */
		var class2type = {},
				hasOwn = class2type.hasOwnProperty,
				toString = class2type.toString;

		var types = "Boolean Number String Function Array Date RegExp Object Error".split(" ");
		for (var i = 0; i < types.length; i++) {
			class2type["[object " + types[i] + "]"] = types[i].toLowerCase();
		}

		/* Makes $(node) possible, without having to call init. */
		$.fn.init.prototype = $.fn;

		/* Globalize Velocity onto the window, and assign its Utilities property. */
		window.Velocity = {Utilities: $};
	})(window);

	/******************
	 Velocity.js
	 ******************/

	(function(factory) {
		"use strict";
		/* CommonJS module. */
		if (typeof module === "object" && typeof module.exports === "object") {
			module.exports = factory();
			/* AMD module. */
		} else if (true) {
			!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			/* Browser globals. */
		} else {
			factory();
		}
	}(function() {
		"use strict";
		return function(global, window, document, undefined) {

			/***************
			 Summary
			 ***************/

			/*
			 - CSS: CSS stack that works independently from the rest of Velocity.
			 - animate(): Core animation method that iterates over the targeted elements and queues the incoming call onto each element individually.
			 - Pre-Queueing: Prepare the element for animation by instantiating its data cache and processing the call's options.
			 - Queueing: The logic that runs once the call has reached its point of execution in the element's $.queue() stack.
			 Most logic is placed here to avoid risking it becoming stale (if the element's properties have changed).
			 - Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
			 - tick(): The single requestAnimationFrame loop responsible for tweening all in-progress calls.
			 - completeCall(): Handles the cleanup process for each Velocity call.
			 */

			/*********************
			 Helper Functions
			 *********************/

			/* IE detection. Gist: https://gist.github.com/julianshapiro/9098609 */
			var IE = (function() {
				if (document.documentMode) {
					return document.documentMode;
				} else {
					for (var i = 7; i > 4; i--) {
						var div = document.createElement("div");

						div.innerHTML = "<!--[if IE " + i + "]><span></span><![endif]-->";

						if (div.getElementsByTagName("span").length) {
							div = null;

							return i;
						}
					}
				}

				return undefined;
			})();

			/* rAF shim. Gist: https://gist.github.com/julianshapiro/9497513 */
			var rAFShim = (function() {
				var timeLast = 0;

				return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
					var timeCurrent = (new Date()).getTime(),
							timeDelta;

					/* Dynamically set delay on a per-tick basis to match 60fps. */
					/* Technique by Erik Moller. MIT license: https://gist.github.com/paulirish/1579671 */
					timeDelta = Math.max(0, 16 - (timeCurrent - timeLast));
					timeLast = timeCurrent + timeDelta;

					return setTimeout(function() {
						callback(timeCurrent + timeDelta);
					}, timeDelta);
				};
			})();

			var performance = (function() {
				var perf = window.performance || {};

				if (typeof perf.now !== "function") {
					var nowOffset = perf.timing && perf.timing.navigationStart ? perf.timing.navigationStart : (new Date()).getTime();

					perf.now = function() {
						return (new Date()).getTime() - nowOffset;
					};
				}
				return perf;
			})();

			/* Array compacting. Copyright Lo-Dash. MIT License: https://github.com/lodash/lodash/blob/master/LICENSE.txt */
			function compactSparseArray(array) {
				var index = -1,
						length = array ? array.length : 0,
						result = [];

				while (++index < length) {
					var value = array[index];

					if (value) {
						result.push(value);
					}
				}

				return result;
			}

			/**
			 * Shim for "fixing" IE's lack of support (IE < 9) for applying slice
			 * on host objects like NamedNodeMap, NodeList, and HTMLCollection
			 * (technically, since host objects have been implementation-dependent,
			 * at least before ES2015, IE hasn't needed to work this way).
			 * Also works on strings, fixes IE < 9 to allow an explicit undefined
			 * for the 2nd argument (as in Firefox), and prevents errors when
			 * called on other DOM objects.
			 */
			var _slice = (function() {
				var slice = Array.prototype.slice;

				try {
					// Can't be used with DOM elements in IE < 9
					slice.call(document.documentElement);
					return slice;
				} catch (e) { // Fails in IE < 9

					// This will work for genuine arrays, array-like objects, 
					// NamedNodeMap (attributes, entities, notations),
					// NodeList (e.g., getElementsByTagName), HTMLCollection (e.g., childNodes),
					// and will not fail on other DOM objects (as do DOM elements in IE < 9)
					return function(begin, end) {
						var len = this.length;

						if (typeof begin !== "number") {
							begin = 0;
						}
						// IE < 9 gets unhappy with an undefined end argument
						if (typeof end !== "number") {
							end = len;
						}
						// For native Array objects, we use the native slice function
						if (this.slice) {
							return slice.call(this, begin, end);
						}
						// For array like object we handle it ourselves.
						var i,
								cloned = [],
								// Handle negative value for "begin"
								start = (begin >= 0) ? begin : Math.max(0, len + begin),
								// Handle negative value for "end"
								upTo = end < 0 ? len + end : Math.min(end, len),
								// Actual expected size of the slice
								size = upTo - start;

						if (size > 0) {
							cloned = new Array(size);
							if (this.charAt) {
								for (i = 0; i < size; i++) {
									cloned[i] = this.charAt(start + i);
								}
							} else {
								for (i = 0; i < size; i++) {
									cloned[i] = this[start + i];
								}
							}
						}
						return cloned;
					};
				}
			})();

			/* .indexOf doesn't exist in IE<9 */
			var _inArray = (function() {
				if (Array.prototype.includes) {
					return function(arr, val) {
						return arr.includes(val);
					};
				}
				if (Array.prototype.indexOf) {
					return function(arr, val) {
						return arr.indexOf(val) >= 0;
					};
				}
				return function(arr, val) {
					for (var i = 0; i < arr.length; i++) {
						if (arr[i] === val) {
							return true;
						}
					}
					return false;
				};
			});

			function sanitizeElements(elements) {
				/* Unwrap jQuery/Zepto objects. */
				if (Type.isWrapped(elements)) {
					elements = _slice.call(elements);
					/* Wrap a single element in an array so that $.each() can iterate with the element instead of its node's children. */
				} else if (Type.isNode(elements)) {
					elements = [elements];
				}

				return elements;
			}

			var Type = {
				isNumber: function(variable) {
					return (typeof variable === "number");
				},
				isString: function(variable) {
					return (typeof variable === "string");
				},
				isArray: Array.isArray || function(variable) {
					return Object.prototype.toString.call(variable) === "[object Array]";
				},
				isFunction: function(variable) {
					return Object.prototype.toString.call(variable) === "[object Function]";
				},
				isNode: function(variable) {
					return variable && variable.nodeType;
				},
				/* Determine if variable is an array-like wrapped jQuery, Zepto or similar element, or even a NodeList etc. */
				/* NOTE: HTMLFormElements also have a length. */
				isWrapped: function(variable) {
					return variable
							&& variable !== window
							&& Type.isNumber(variable.length)
							&& !Type.isString(variable)
							&& !Type.isFunction(variable)
							&& !Type.isNode(variable)
							&& (variable.length === 0 || Type.isNode(variable[0]));
				},
				isSVG: function(variable) {
					return window.SVGElement && (variable instanceof window.SVGElement);
				},
				isEmptyObject: function(variable) {
					for (var name in variable) {
						if (variable.hasOwnProperty(name)) {
							return false;
						}
					}

					return true;
				}
			};

			/*****************
			 Dependencies
			 *****************/

			var $,
					isJQuery = false;

			if (global.fn && global.fn.jquery) {
				$ = global;
				isJQuery = true;
			} else {
				$ = window.Velocity.Utilities;
			}

			if (IE <= 8 && !isJQuery) {
				throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
			} else if (IE <= 7) {
				/* Revert to jQuery's $.animate(), and lose Velocity's extra features. */
				jQuery.fn.velocity = jQuery.fn.animate;

				/* Now that $.fn.velocity is aliased, abort this Velocity declaration. */
				return;
			}

			/*****************
			 Constants
			 *****************/

			var DURATION_DEFAULT = 400,
					EASING_DEFAULT = "swing";

			/*************
			 State
			 *************/

			var Velocity = {
				/* Container for page-wide Velocity state data. */
				State: {
					/* Detect mobile devices to determine if mobileHA should be turned on. */
					isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
					/* The mobileHA option's behavior changes on older Android devices (Gingerbread, versions 2.3.3-2.3.7). */
					isAndroid: /Android/i.test(navigator.userAgent),
					isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
					isChrome: window.chrome,
					isFirefox: /Firefox/i.test(navigator.userAgent),
					/* Create a cached element for re-use when checking for CSS property prefixes. */
					prefixElement: document.createElement("div"),
					/* Cache every prefix match to avoid repeating lookups. */
					prefixMatches: {},
					/* Cache the anchor used for animating window scrolling. */
					scrollAnchor: null,
					/* Cache the browser-specific property names associated with the scroll anchor. */
					scrollPropertyLeft: null,
					scrollPropertyTop: null,
					/* Keep track of whether our RAF tick is running. */
					isTicking: false,
					/* Container for every in-progress call to Velocity. */
					calls: [],
					delayedElements: {
						count: 0
					}
				},
				/* Velocity's custom CSS stack. Made global for unit testing. */
				CSS: {/* Defined below. */},
				/* A shim of the jQuery utility functions used by Velocity -- provided by Velocity's optional jQuery shim. */
				Utilities: $,
				/* Container for the user's custom animation redirects that are referenced by name in place of the properties map argument. */
				Redirects: {/* Manually registered by the user. */},
				Easings: {/* Defined below. */},
				/* Attempt to use ES6 Promises by default. Users can override this with a third-party promises library. */
				Promise: window.Promise,
				/* Velocity option defaults, which can be overriden by the user. */
				defaults: {
					queue: "",
					duration: DURATION_DEFAULT,
					easing: EASING_DEFAULT,
					begin: undefined,
					complete: undefined,
					progress: undefined,
					display: undefined,
					visibility: undefined,
					loop: false,
					delay: false,
					mobileHA: true,
					/* Advanced: Set to false to prevent property values from being cached between consecutive Velocity-initiated chain calls. */
					_cacheValues: true,
					/* Advanced: Set to false if the promise should always resolve on empty element lists. */
					promiseRejectEmpty: true
				},
				/* A design goal of Velocity is to cache data wherever possible in order to avoid DOM requerying. Accordingly, each element has a data cache. */
				init: function(element) {
					$.data(element, "velocity", {
						/* Store whether this is an SVG element, since its properties are retrieved and updated differently than standard HTML elements. */
						isSVG: Type.isSVG(element),
						/* Keep track of whether the element is currently being animated by Velocity.
						 This is used to ensure that property values are not transferred between non-consecutive (stale) calls. */
						isAnimating: false,
						/* A reference to the element's live computedStyle object. Learn more here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
						computedStyle: null,
						/* Tween data is cached for each animation on the element so that data can be passed across calls --
						 in particular, end values are used as subsequent start values in consecutive Velocity calls. */
						tweensContainer: null,
						/* The full root property values of each CSS hook being animated on this element are cached so that:
						 1) Concurrently-animating hooks sharing the same root can have their root values' merged into one while tweening.
						 2) Post-hook-injection root values can be transferred over to consecutively chained Velocity calls as starting root values. */
						rootPropertyValueCache: {},
						/* A cache for transform updates, which must be manually flushed via CSS.flushTransformCache(). */
						transformCache: {}
					});
				},
				/* A parallel to jQuery's $.css(), used for getting/setting Velocity's hooked CSS properties. */
				hook: null, /* Defined below. */
				/* Velocity-wide animation time remapping for testing purposes. */
				mock: false,
				version: {major: 1, minor: 5, patch: 0},
				/* Set to 1 or 2 (most verbose) to output debug info to console. */
				debug: false,
				/* Use rAF high resolution timestamp when available */
				timestamp: true,
				/* Pause all animations */
				pauseAll: function(queueName) {
					var currentTime = (new Date()).getTime();

					$.each(Velocity.State.calls, function(i, activeCall) {

						if (activeCall) {

							/* If we have a queueName and this call is not on that queue, skip */
							if (queueName !== undefined && ((activeCall[2].queue !== queueName) || (activeCall[2].queue === false))) {
								return true;
							}

							/* Set call to paused */
							activeCall[5] = {
								resume: false
							};
						}
					});

					/* Pause timers on any currently delayed calls */
					$.each(Velocity.State.delayedElements, function(k, element) {
						if (!element) {
							return;
						}
						pauseDelayOnElement(element, currentTime);
					});
				},
				/* Resume all animations */
				resumeAll: function(queueName) {
					var currentTime = (new Date()).getTime();

					$.each(Velocity.State.calls, function(i, activeCall) {

						if (activeCall) {

							/* If we have a queueName and this call is not on that queue, skip */
							if (queueName !== undefined && ((activeCall[2].queue !== queueName) || (activeCall[2].queue === false))) {
								return true;
							}

							/* Set call to resumed if it was paused */
							if (activeCall[5]) {
								activeCall[5].resume = true;
							}
						}
					});
					/* Resume timers on any currently delayed calls */
					$.each(Velocity.State.delayedElements, function(k, element) {
						if (!element) {
							return;
						}
						resumeDelayOnElement(element, currentTime);
					});
				}
			};

			/* Retrieve the appropriate scroll anchor and property name for the browser: https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY */
			if (window.pageYOffset !== undefined) {
				Velocity.State.scrollAnchor = window;
				Velocity.State.scrollPropertyLeft = "pageXOffset";
				Velocity.State.scrollPropertyTop = "pageYOffset";
			} else {
				Velocity.State.scrollAnchor = document.documentElement || document.body.parentNode || document.body;
				Velocity.State.scrollPropertyLeft = "scrollLeft";
				Velocity.State.scrollPropertyTop = "scrollTop";
			}

			/* Shorthand alias for jQuery's $.data() utility. */
			function Data(element) {
				/* Hardcode a reference to the plugin name. */
				var response = $.data(element, "velocity");

				/* jQuery <=1.4.2 returns null instead of undefined when no match is found. We normalize this behavior. */
				return response === null ? undefined : response;
			}

			/**************
			 Delay Timer
			 **************/

			function pauseDelayOnElement(element, currentTime) {
				/* Check for any delay timers, and pause the set timeouts (while preserving time data)
				 to be resumed when the "resume" command is issued */
				var data = Data(element);
				if (data && data.delayTimer && !data.delayPaused) {
					data.delayRemaining = data.delay - currentTime + data.delayBegin;
					data.delayPaused = true;
					clearTimeout(data.delayTimer.setTimeout);
				}
			}

			function resumeDelayOnElement(element, currentTime) {
				/* Check for any paused timers and resume */
				var data = Data(element);
				if (data && data.delayTimer && data.delayPaused) {
					/* If the element was mid-delay, re initiate the timeout with the remaining delay */
					data.delayPaused = false;
					data.delayTimer.setTimeout = setTimeout(data.delayTimer.next, data.delayRemaining);
				}
			}



			/**************
			 Easing
			 **************/

			/* Step easing generator. */
			function generateStep(steps) {
				return function(p) {
					return Math.round(p * steps) * (1 / steps);
				};
			}

			/* Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */
			function generateBezier(mX1, mY1, mX2, mY2) {
				var NEWTON_ITERATIONS = 4,
						NEWTON_MIN_SLOPE = 0.001,
						SUBDIVISION_PRECISION = 0.0000001,
						SUBDIVISION_MAX_ITERATIONS = 10,
						kSplineTableSize = 11,
						kSampleStepSize = 1.0 / (kSplineTableSize - 1.0),
						float32ArraySupported = "Float32Array" in window;

				/* Must contain four arguments. */
				if (arguments.length !== 4) {
					return false;
				}

				/* Arguments must be numbers. */
				for (var i = 0; i < 4; ++i) {
					if (typeof arguments[i] !== "number" || isNaN(arguments[i]) || !isFinite(arguments[i])) {
						return false;
					}
				}

				/* X values must be in the [0, 1] range. */
				mX1 = Math.min(mX1, 1);
				mX2 = Math.min(mX2, 1);
				mX1 = Math.max(mX1, 0);
				mX2 = Math.max(mX2, 0);

				var mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);

				function A(aA1, aA2) {
					return 1.0 - 3.0 * aA2 + 3.0 * aA1;
				}
				function B(aA1, aA2) {
					return 3.0 * aA2 - 6.0 * aA1;
				}
				function C(aA1) {
					return 3.0 * aA1;
				}

				function calcBezier(aT, aA1, aA2) {
					return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
				}

				function getSlope(aT, aA1, aA2) {
					return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
				}

				function newtonRaphsonIterate(aX, aGuessT) {
					for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
						var currentSlope = getSlope(aGuessT, mX1, mX2);

						if (currentSlope === 0.0) {
							return aGuessT;
						}

						var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
						aGuessT -= currentX / currentSlope;
					}

					return aGuessT;
				}

				function calcSampleValues() {
					for (var i = 0; i < kSplineTableSize; ++i) {
						mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
					}
				}

				function binarySubdivide(aX, aA, aB) {
					var currentX, currentT, i = 0;

					do {
						currentT = aA + (aB - aA) / 2.0;
						currentX = calcBezier(currentT, mX1, mX2) - aX;
						if (currentX > 0.0) {
							aB = currentT;
						} else {
							aA = currentT;
						}
					} while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);

					return currentT;
				}

				function getTForX(aX) {
					var intervalStart = 0.0,
							currentSample = 1,
							lastSample = kSplineTableSize - 1;

					for (; currentSample !== lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
						intervalStart += kSampleStepSize;
					}

					--currentSample;

					var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample + 1] - mSampleValues[currentSample]),
							guessForT = intervalStart + dist * kSampleStepSize,
							initialSlope = getSlope(guessForT, mX1, mX2);

					if (initialSlope >= NEWTON_MIN_SLOPE) {
						return newtonRaphsonIterate(aX, guessForT);
					} else if (initialSlope === 0.0) {
						return guessForT;
					} else {
						return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize);
					}
				}

				var _precomputed = false;

				function precompute() {
					_precomputed = true;
					if (mX1 !== mY1 || mX2 !== mY2) {
						calcSampleValues();
					}
				}

				var f = function(aX) {
					if (!_precomputed) {
						precompute();
					}
					if (mX1 === mY1 && mX2 === mY2) {
						return aX;
					}
					if (aX === 0) {
						return 0;
					}
					if (aX === 1) {
						return 1;
					}

					return calcBezier(getTForX(aX), mY1, mY2);
				};

				f.getControlPoints = function() {
					return [{x: mX1, y: mY1}, {x: mX2, y: mY2}];
				};

				var str = "generateBezier(" + [mX1, mY1, mX2, mY2] + ")";
				f.toString = function() {
					return str;
				};

				return f;
			}

			/* Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
			/* Given a tension, friction, and duration, a simulation at 60FPS will first run without a defined duration in order to calculate the full path. A second pass
			 then adjusts the time delta -- using the relation between actual time and duration -- to calculate the path for the duration-constrained animation. */
			var generateSpringRK4 = (function() {
				function springAccelerationForState(state) {
					return (-state.tension * state.x) - (state.friction * state.v);
				}

				function springEvaluateStateWithDerivative(initialState, dt, derivative) {
					var state = {
						x: initialState.x + derivative.dx * dt,
						v: initialState.v + derivative.dv * dt,
						tension: initialState.tension,
						friction: initialState.friction
					};

					return {dx: state.v, dv: springAccelerationForState(state)};
				}

				function springIntegrateState(state, dt) {
					var a = {
						dx: state.v,
						dv: springAccelerationForState(state)
					},
							b = springEvaluateStateWithDerivative(state, dt * 0.5, a),
							c = springEvaluateStateWithDerivative(state, dt * 0.5, b),
							d = springEvaluateStateWithDerivative(state, dt, c),
							dxdt = 1.0 / 6.0 * (a.dx + 2.0 * (b.dx + c.dx) + d.dx),
							dvdt = 1.0 / 6.0 * (a.dv + 2.0 * (b.dv + c.dv) + d.dv);

					state.x = state.x + dxdt * dt;
					state.v = state.v + dvdt * dt;

					return state;
				}

				return function springRK4Factory(tension, friction, duration) {

					var initState = {
						x: -1,
						v: 0,
						tension: null,
						friction: null
					},
							path = [0],
							time_lapsed = 0,
							tolerance = 1 / 10000,
							DT = 16 / 1000,
							have_duration, dt, last_state;

					tension = parseFloat(tension) || 500;
					friction = parseFloat(friction) || 20;
					duration = duration || null;

					initState.tension = tension;
					initState.friction = friction;

					have_duration = duration !== null;

					/* Calculate the actual time it takes for this animation to complete with the provided conditions. */
					if (have_duration) {
						/* Run the simulation without a duration. */
						time_lapsed = springRK4Factory(tension, friction);
						/* Compute the adjusted time delta. */
						dt = time_lapsed / duration * DT;
					} else {
						dt = DT;
					}

					while (true) {
						/* Next/step function .*/
						last_state = springIntegrateState(last_state || initState, dt);
						/* Store the position. */
						path.push(1 + last_state.x);
						time_lapsed += 16;
						/* If the change threshold is reached, break. */
						if (!(Math.abs(last_state.x) > tolerance && Math.abs(last_state.v) > tolerance)) {
							break;
						}
					}

					/* If duration is not defined, return the actual time required for completing this animation. Otherwise, return a closure that holds the
					 computed path and returns a snapshot of the position according to a given percentComplete. */
					return !have_duration ? time_lapsed : function(percentComplete) {
						return path[ (percentComplete * (path.length - 1)) | 0 ];
					};
				};
			}());

			/* jQuery easings. */
			Velocity.Easings = {
				linear: function(p) {
					return p;
				},
				swing: function(p) {
					return 0.5 - Math.cos(p * Math.PI) / 2;
				},
				/* Bonus "spring" easing, which is a less exaggerated version of easeInOutElastic. */
				spring: function(p) {
					return 1 - (Math.cos(p * 4.5 * Math.PI) * Math.exp(-p * 6));
				}
			};

			/* CSS3 and Robert Penner easings. */
			$.each(
					[
						["ease", [0.25, 0.1, 0.25, 1.0]],
						["ease-in", [0.42, 0.0, 1.00, 1.0]],
						["ease-out", [0.00, 0.0, 0.58, 1.0]],
						["ease-in-out", [0.42, 0.0, 0.58, 1.0]],
						["easeInSine", [0.47, 0, 0.745, 0.715]],
						["easeOutSine", [0.39, 0.575, 0.565, 1]],
						["easeInOutSine", [0.445, 0.05, 0.55, 0.95]],
						["easeInQuad", [0.55, 0.085, 0.68, 0.53]],
						["easeOutQuad", [0.25, 0.46, 0.45, 0.94]],
						["easeInOutQuad", [0.455, 0.03, 0.515, 0.955]],
						["easeInCubic", [0.55, 0.055, 0.675, 0.19]],
						["easeOutCubic", [0.215, 0.61, 0.355, 1]],
						["easeInOutCubic", [0.645, 0.045, 0.355, 1]],
						["easeInQuart", [0.895, 0.03, 0.685, 0.22]],
						["easeOutQuart", [0.165, 0.84, 0.44, 1]],
						["easeInOutQuart", [0.77, 0, 0.175, 1]],
						["easeInQuint", [0.755, 0.05, 0.855, 0.06]],
						["easeOutQuint", [0.23, 1, 0.32, 1]],
						["easeInOutQuint", [0.86, 0, 0.07, 1]],
						["easeInExpo", [0.95, 0.05, 0.795, 0.035]],
						["easeOutExpo", [0.19, 1, 0.22, 1]],
						["easeInOutExpo", [1, 0, 0, 1]],
						["easeInCirc", [0.6, 0.04, 0.98, 0.335]],
						["easeOutCirc", [0.075, 0.82, 0.165, 1]],
						["easeInOutCirc", [0.785, 0.135, 0.15, 0.86]]
					], function(i, easingArray) {
				Velocity.Easings[easingArray[0]] = generateBezier.apply(null, easingArray[1]);
			});

			/* Determine the appropriate easing type given an easing input. */
			function getEasing(value, duration) {
				var easing = value;

				/* The easing option can either be a string that references a pre-registered easing,
				 or it can be a two-/four-item array of integers to be converted into a bezier/spring function. */
				if (Type.isString(value)) {
					/* Ensure that the easing has been assigned to jQuery's Velocity.Easings object. */
					if (!Velocity.Easings[value]) {
						easing = false;
					}
				} else if (Type.isArray(value) && value.length === 1) {
					easing = generateStep.apply(null, value);
				} else if (Type.isArray(value) && value.length === 2) {
					/* springRK4 must be passed the animation's duration. */
					/* Note: If the springRK4 array contains non-numbers, generateSpringRK4() returns an easing
					 function generated with default tension and friction values. */
					easing = generateSpringRK4.apply(null, value.concat([duration]));
				} else if (Type.isArray(value) && value.length === 4) {
					/* Note: If the bezier array contains non-numbers, generateBezier() returns false. */
					easing = generateBezier.apply(null, value);
				} else {
					easing = false;
				}

				/* Revert to the Velocity-wide default easing type, or fall back to "swing" (which is also jQuery's default)
				 if the Velocity-wide default has been incorrectly modified. */
				if (easing === false) {
					if (Velocity.Easings[Velocity.defaults.easing]) {
						easing = Velocity.defaults.easing;
					} else {
						easing = EASING_DEFAULT;
					}
				}

				return easing;
			}

			/*****************
			 CSS Stack
			 *****************/

			/* The CSS object is a highly condensed and performant CSS stack that fully replaces jQuery's.
			 It handles the validation, getting, and setting of both standard CSS properties and CSS property hooks. */
			/* Note: A "CSS" shorthand is aliased so that our code is easier to read. */
			var CSS = Velocity.CSS = {
				/*************
				 RegEx
				 *************/

				RegEx: {
					isHex: /^#([A-f\d]{3}){1,2}$/i,
					/* Unwrap a property value's surrounding text, e.g. "rgba(4, 3, 2, 1)" ==> "4, 3, 2, 1" and "rect(4px 3px 2px 1px)" ==> "4px 3px 2px 1px". */
					valueUnwrap: /^[A-z]+\((.*)\)$/i,
					wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
					/* Split a multi-value property into an array of subvalues, e.g. "rgba(4, 3, 2, 1) 4px 3px 2px 1px" ==> [ "rgba(4, 3, 2, 1)", "4px", "3px", "2px", "1px" ]. */
					valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/ig
				},
				/************
				 Lists
				 ************/

				Lists: {
					colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
					transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
					transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
					units: [
						"%", // relative
						"em", "ex", "ch", "rem", // font relative
						"vw", "vh", "vmin", "vmax", // viewport relative
						"cm", "mm", "Q", "in", "pc", "pt", "px", // absolute lengths
						"deg", "grad", "rad", "turn", // angles
						"s", "ms" // time
					],
					colorNames: {
						"aliceblue": "240,248,255",
						"antiquewhite": "250,235,215",
						"aquamarine": "127,255,212",
						"aqua": "0,255,255",
						"azure": "240,255,255",
						"beige": "245,245,220",
						"bisque": "255,228,196",
						"black": "0,0,0",
						"blanchedalmond": "255,235,205",
						"blueviolet": "138,43,226",
						"blue": "0,0,255",
						"brown": "165,42,42",
						"burlywood": "222,184,135",
						"cadetblue": "95,158,160",
						"chartreuse": "127,255,0",
						"chocolate": "210,105,30",
						"coral": "255,127,80",
						"cornflowerblue": "100,149,237",
						"cornsilk": "255,248,220",
						"crimson": "220,20,60",
						"cyan": "0,255,255",
						"darkblue": "0,0,139",
						"darkcyan": "0,139,139",
						"darkgoldenrod": "184,134,11",
						"darkgray": "169,169,169",
						"darkgrey": "169,169,169",
						"darkgreen": "0,100,0",
						"darkkhaki": "189,183,107",
						"darkmagenta": "139,0,139",
						"darkolivegreen": "85,107,47",
						"darkorange": "255,140,0",
						"darkorchid": "153,50,204",
						"darkred": "139,0,0",
						"darksalmon": "233,150,122",
						"darkseagreen": "143,188,143",
						"darkslateblue": "72,61,139",
						"darkslategray": "47,79,79",
						"darkturquoise": "0,206,209",
						"darkviolet": "148,0,211",
						"deeppink": "255,20,147",
						"deepskyblue": "0,191,255",
						"dimgray": "105,105,105",
						"dimgrey": "105,105,105",
						"dodgerblue": "30,144,255",
						"firebrick": "178,34,34",
						"floralwhite": "255,250,240",
						"forestgreen": "34,139,34",
						"fuchsia": "255,0,255",
						"gainsboro": "220,220,220",
						"ghostwhite": "248,248,255",
						"gold": "255,215,0",
						"goldenrod": "218,165,32",
						"gray": "128,128,128",
						"grey": "128,128,128",
						"greenyellow": "173,255,47",
						"green": "0,128,0",
						"honeydew": "240,255,240",
						"hotpink": "255,105,180",
						"indianred": "205,92,92",
						"indigo": "75,0,130",
						"ivory": "255,255,240",
						"khaki": "240,230,140",
						"lavenderblush": "255,240,245",
						"lavender": "230,230,250",
						"lawngreen": "124,252,0",
						"lemonchiffon": "255,250,205",
						"lightblue": "173,216,230",
						"lightcoral": "240,128,128",
						"lightcyan": "224,255,255",
						"lightgoldenrodyellow": "250,250,210",
						"lightgray": "211,211,211",
						"lightgrey": "211,211,211",
						"lightgreen": "144,238,144",
						"lightpink": "255,182,193",
						"lightsalmon": "255,160,122",
						"lightseagreen": "32,178,170",
						"lightskyblue": "135,206,250",
						"lightslategray": "119,136,153",
						"lightsteelblue": "176,196,222",
						"lightyellow": "255,255,224",
						"limegreen": "50,205,50",
						"lime": "0,255,0",
						"linen": "250,240,230",
						"magenta": "255,0,255",
						"maroon": "128,0,0",
						"mediumaquamarine": "102,205,170",
						"mediumblue": "0,0,205",
						"mediumorchid": "186,85,211",
						"mediumpurple": "147,112,219",
						"mediumseagreen": "60,179,113",
						"mediumslateblue": "123,104,238",
						"mediumspringgreen": "0,250,154",
						"mediumturquoise": "72,209,204",
						"mediumvioletred": "199,21,133",
						"midnightblue": "25,25,112",
						"mintcream": "245,255,250",
						"mistyrose": "255,228,225",
						"moccasin": "255,228,181",
						"navajowhite": "255,222,173",
						"navy": "0,0,128",
						"oldlace": "253,245,230",
						"olivedrab": "107,142,35",
						"olive": "128,128,0",
						"orangered": "255,69,0",
						"orange": "255,165,0",
						"orchid": "218,112,214",
						"palegoldenrod": "238,232,170",
						"palegreen": "152,251,152",
						"paleturquoise": "175,238,238",
						"palevioletred": "219,112,147",
						"papayawhip": "255,239,213",
						"peachpuff": "255,218,185",
						"peru": "205,133,63",
						"pink": "255,192,203",
						"plum": "221,160,221",
						"powderblue": "176,224,230",
						"purple": "128,0,128",
						"red": "255,0,0",
						"rosybrown": "188,143,143",
						"royalblue": "65,105,225",
						"saddlebrown": "139,69,19",
						"salmon": "250,128,114",
						"sandybrown": "244,164,96",
						"seagreen": "46,139,87",
						"seashell": "255,245,238",
						"sienna": "160,82,45",
						"silver": "192,192,192",
						"skyblue": "135,206,235",
						"slateblue": "106,90,205",
						"slategray": "112,128,144",
						"snow": "255,250,250",
						"springgreen": "0,255,127",
						"steelblue": "70,130,180",
						"tan": "210,180,140",
						"teal": "0,128,128",
						"thistle": "216,191,216",
						"tomato": "255,99,71",
						"turquoise": "64,224,208",
						"violet": "238,130,238",
						"wheat": "245,222,179",
						"whitesmoke": "245,245,245",
						"white": "255,255,255",
						"yellowgreen": "154,205,50",
						"yellow": "255,255,0"
					}
				},
				/************
				 Hooks
				 ************/

				/* Hooks allow a subproperty (e.g. "boxShadowBlur") of a compound-value CSS property
				 (e.g. "boxShadow: X Y Blur Spread Color") to be animated as if it were a discrete property. */
				/* Note: Beyond enabling fine-grained property animation, hooking is necessary since Velocity only
				 tweens properties with single numeric values; unlike CSS transitions, Velocity does not interpolate compound-values. */
				Hooks: {
					/********************
					 Registration
					 ********************/

					/* Templates are a concise way of indicating which subproperties must be individually registered for each compound-value CSS property. */
					/* Each template consists of the compound-value's base name, its constituent subproperty names, and those subproperties' default values. */
					templates: {
						"textShadow": ["Color X Y Blur", "black 0px 0px 0px"],
						"boxShadow": ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
						"clip": ["Top Right Bottom Left", "0px 0px 0px 0px"],
						"backgroundPosition": ["X Y", "0% 0%"],
						"transformOrigin": ["X Y Z", "50% 50% 0px"],
						"perspectiveOrigin": ["X Y", "50% 50%"]
					},
					/* A "registered" hook is one that has been converted from its template form into a live,
					 tweenable property. It contains data to associate it with its root property. */
					registered: {
						/* Note: A registered hook looks like this ==> textShadowBlur: [ "textShadow", 3 ],
						 which consists of the subproperty's name, the associated root property's name,
						 and the subproperty's position in the root's value. */
					},
					/* Convert the templates into individual hooks then append them to the registered object above. */
					register: function() {
						/* Color hooks registration: Colors are defaulted to white -- as opposed to black -- since colors that are
						 currently set to "transparent" default to their respective template below when color-animated,
						 and white is typically a closer match to transparent than black is. An exception is made for text ("color"),
						 which is almost always set closer to black than white. */
						for (var i = 0; i < CSS.Lists.colors.length; i++) {
							var rgbComponents = (CSS.Lists.colors[i] === "color") ? "0 0 0 1" : "255 255 255 1";
							CSS.Hooks.templates[CSS.Lists.colors[i]] = ["Red Green Blue Alpha", rgbComponents];
						}

						var rootProperty,
								hookTemplate,
								hookNames;

						/* In IE, color values inside compound-value properties are positioned at the end the value instead of at the beginning.
						 Thus, we re-arrange the templates accordingly. */
						if (IE) {
							for (rootProperty in CSS.Hooks.templates) {
								if (!CSS.Hooks.templates.hasOwnProperty(rootProperty)) {
									continue;
								}
								hookTemplate = CSS.Hooks.templates[rootProperty];
								hookNames = hookTemplate[0].split(" ");

								var defaultValues = hookTemplate[1].match(CSS.RegEx.valueSplit);

								if (hookNames[0] === "Color") {
									/* Reposition both the hook's name and its default value to the end of their respective strings. */
									hookNames.push(hookNames.shift());
									defaultValues.push(defaultValues.shift());

									/* Replace the existing template for the hook's root property. */
									CSS.Hooks.templates[rootProperty] = [hookNames.join(" "), defaultValues.join(" ")];
								}
							}
						}

						/* Hook registration. */
						for (rootProperty in CSS.Hooks.templates) {
							if (!CSS.Hooks.templates.hasOwnProperty(rootProperty)) {
								continue;
							}
							hookTemplate = CSS.Hooks.templates[rootProperty];
							hookNames = hookTemplate[0].split(" ");

							for (var j in hookNames) {
								if (!hookNames.hasOwnProperty(j)) {
									continue;
								}
								var fullHookName = rootProperty + hookNames[j],
										hookPosition = j;

								/* For each hook, register its full name (e.g. textShadowBlur) with its root property (e.g. textShadow)
								 and the hook's position in its template's default value string. */
								CSS.Hooks.registered[fullHookName] = [rootProperty, hookPosition];
							}
						}
					},
					/*****************************
					 Injection and Extraction
					 *****************************/

					/* Look up the root property associated with the hook (e.g. return "textShadow" for "textShadowBlur"). */
					/* Since a hook cannot be set directly (the browser won't recognize it), style updating for hooks is routed through the hook's root property. */
					getRoot: function(property) {
						var hookData = CSS.Hooks.registered[property];

						if (hookData) {
							return hookData[0];
						} else {
							/* If there was no hook match, return the property name untouched. */
							return property;
						}
					},
					getUnit: function(str, start) {
						var unit = (str.substr(start || 0, 5).match(/^[a-z%]+/) || [])[0] || "";

						if (unit && _inArray(CSS.Lists.units, unit)) {
							return unit;
						}
						return "";
					},
					fixColors: function(str) {
						return str.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function($0, $1, $2) {
							if (CSS.Lists.colorNames.hasOwnProperty($2)) {
								return ($1 ? $1 : "rgba(") + CSS.Lists.colorNames[$2] + ($1 ? "" : ",1)");
							}
							return $1 + $2;
						});
					},
					/* Convert any rootPropertyValue, null or otherwise, into a space-delimited list of hook values so that
					 the targeted hook can be injected or extracted at its standard position. */
					cleanRootPropertyValue: function(rootProperty, rootPropertyValue) {
						/* If the rootPropertyValue is wrapped with "rgb()", "clip()", etc., remove the wrapping to normalize the value before manipulation. */
						if (CSS.RegEx.valueUnwrap.test(rootPropertyValue)) {
							rootPropertyValue = rootPropertyValue.match(CSS.RegEx.valueUnwrap)[1];
						}

						/* If rootPropertyValue is a CSS null-value (from which there's inherently no hook value to extract),
						 default to the root's default value as defined in CSS.Hooks.templates. */
						/* Note: CSS null-values include "none", "auto", and "transparent". They must be converted into their
						 zero-values (e.g. textShadow: "none" ==> textShadow: "0px 0px 0px black") for hook manipulation to proceed. */
						if (CSS.Values.isCSSNullValue(rootPropertyValue)) {
							rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
						}

						return rootPropertyValue;
					},
					/* Extracted the hook's value from its root property's value. This is used to get the starting value of an animating hook. */
					extractValue: function(fullHookName, rootPropertyValue) {
						var hookData = CSS.Hooks.registered[fullHookName];

						if (hookData) {
							var hookRoot = hookData[0],
									hookPosition = hookData[1];

							rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);

							/* Split rootPropertyValue into its constituent hook values then grab the desired hook at its standard position. */
							return rootPropertyValue.toString().match(CSS.RegEx.valueSplit)[hookPosition];
						} else {
							/* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
							return rootPropertyValue;
						}
					},
					/* Inject the hook's value into its root property's value. This is used to piece back together the root property
					 once Velocity has updated one of its individually hooked values through tweening. */
					injectValue: function(fullHookName, hookValue, rootPropertyValue) {
						var hookData = CSS.Hooks.registered[fullHookName];

						if (hookData) {
							var hookRoot = hookData[0],
									hookPosition = hookData[1],
									rootPropertyValueParts,
									rootPropertyValueUpdated;

							rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);

							/* Split rootPropertyValue into its individual hook values, replace the targeted value with hookValue,
							 then reconstruct the rootPropertyValue string. */
							rootPropertyValueParts = rootPropertyValue.toString().match(CSS.RegEx.valueSplit);
							rootPropertyValueParts[hookPosition] = hookValue;
							rootPropertyValueUpdated = rootPropertyValueParts.join(" ");

							return rootPropertyValueUpdated;
						} else {
							/* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
							return rootPropertyValue;
						}
					}
				},
				/*******************
				 Normalizations
				 *******************/

				/* Normalizations standardize CSS property manipulation by pollyfilling browser-specific implementations (e.g. opacity)
				 and reformatting special properties (e.g. clip, rgba) to look like standard ones. */
				Normalizations: {
					/* Normalizations are passed a normalization target (either the property's name, its extracted value, or its injected value),
					 the targeted element (which may need to be queried), and the targeted property value. */
					registered: {
						clip: function(type, element, propertyValue) {
							switch (type) {
								case "name":
									return "clip";
									/* Clip needs to be unwrapped and stripped of its commas during extraction. */
								case "extract":
									var extracted;

									/* If Velocity also extracted this value, skip extraction. */
									if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
										extracted = propertyValue;
									} else {
										/* Remove the "rect()" wrapper. */
										extracted = propertyValue.toString().match(CSS.RegEx.valueUnwrap);

										/* Strip off commas. */
										extracted = extracted ? extracted[1].replace(/,(\s+)?/g, " ") : propertyValue;
									}

									return extracted;
									/* Clip needs to be re-wrapped during injection. */
								case "inject":
									return "rect(" + propertyValue + ")";
							}
						},
						blur: function(type, element, propertyValue) {
							switch (type) {
								case "name":
									return Velocity.State.isFirefox ? "filter" : "-webkit-filter";
								case "extract":
									var extracted = parseFloat(propertyValue);

									/* If extracted is NaN, meaning the value isn't already extracted. */
									if (!(extracted || extracted === 0)) {
										var blurComponent = propertyValue.toString().match(/blur\(([0-9]+[A-z]+)\)/i);

										/* If the filter string had a blur component, return just the blur value and unit type. */
										if (blurComponent) {
											extracted = blurComponent[1];
											/* If the component doesn't exist, default blur to 0. */
										} else {
											extracted = 0;
										}
									}

									return extracted;
									/* Blur needs to be re-wrapped during injection. */
								case "inject":
									/* For the blur effect to be fully de-applied, it needs to be set to "none" instead of 0. */
									if (!parseFloat(propertyValue)) {
										return "none";
									} else {
										return "blur(" + propertyValue + ")";
									}
							}
						},
						/* <=IE8 do not support the standard opacity property. They use filter:alpha(opacity=INT) instead. */
						opacity: function(type, element, propertyValue) {
							if (IE <= 8) {
								switch (type) {
									case "name":
										return "filter";
									case "extract":
										/* <=IE8 return a "filter" value of "alpha(opacity=\d{1,3})".
										 Extract the value and convert it to a decimal value to match the standard CSS opacity property's formatting. */
										var extracted = propertyValue.toString().match(/alpha\(opacity=(.*)\)/i);

										if (extracted) {
											/* Convert to decimal value. */
											propertyValue = extracted[1] / 100;
										} else {
											/* When extracting opacity, default to 1 since a null value means opacity hasn't been set. */
											propertyValue = 1;
										}

										return propertyValue;
									case "inject":
										/* Opacified elements are required to have their zoom property set to a non-zero value. */
										element.style.zoom = 1;

										/* Setting the filter property on elements with certain font property combinations can result in a
										 highly unappealing ultra-bolding effect. There's no way to remedy this throughout a tween, but dropping the
										 value altogether (when opacity hits 1) at leasts ensures that the glitch is gone post-tweening. */
										if (parseFloat(propertyValue) >= 1) {
											return "";
										} else {
											/* As per the filter property's spec, convert the decimal value to a whole number and wrap the value. */
											return "alpha(opacity=" + parseInt(parseFloat(propertyValue) * 100, 10) + ")";
										}
								}
								/* With all other browsers, normalization is not required; return the same values that were passed in. */
							} else {
								switch (type) {
									case "name":
										return "opacity";
									case "extract":
										return propertyValue;
									case "inject":
										return propertyValue;
								}
							}
						}
					},
					/*****************************
					 Batched Registrations
					 *****************************/

					/* Note: Batched normalizations extend the CSS.Normalizations.registered object. */
					register: function() {

						/*****************
						 Transforms
						 *****************/

						/* Transforms are the subproperties contained by the CSS "transform" property. Transforms must undergo normalization
						 so that they can be referenced in a properties map by their individual names. */
						/* Note: When transforms are "set", they are actually assigned to a per-element transformCache. When all transform
						 setting is complete complete, CSS.flushTransformCache() must be manually called to flush the values to the DOM.
						 Transform setting is batched in this way to improve performance: the transform style only needs to be updated
						 once when multiple transform subproperties are being animated simultaneously. */
						/* Note: IE9 and Android Gingerbread have support for 2D -- but not 3D -- transforms. Since animating unsupported
						 transform properties results in the browser ignoring the *entire* transform string, we prevent these 3D values
						 from being normalized for these browsers so that tweening skips these properties altogether
						 (since it will ignore them as being unsupported by the browser.) */
						if ((!IE || IE > 9) && !Velocity.State.isGingerbread) {
							/* Note: Since the standalone CSS "perspective" property and the CSS transform "perspective" subproperty
							 share the same name, the latter is given a unique token within Velocity: "transformPerspective". */
							CSS.Lists.transformsBase = CSS.Lists.transformsBase.concat(CSS.Lists.transforms3D);
						}

						for (var i = 0; i < CSS.Lists.transformsBase.length; i++) {
							/* Wrap the dynamically generated normalization function in a new scope so that transformName's value is
							 paired with its respective function. (Otherwise, all functions would take the final for loop's transformName.) */
							(function() {
								var transformName = CSS.Lists.transformsBase[i];

								CSS.Normalizations.registered[transformName] = function(type, element, propertyValue) {
									switch (type) {
										/* The normalized property name is the parent "transform" property -- the property that is actually set in CSS. */
										case "name":
											return "transform";
											/* Transform values are cached onto a per-element transformCache object. */
										case "extract":
											/* If this transform has yet to be assigned a value, return its null value. */
											if (Data(element) === undefined || Data(element).transformCache[transformName] === undefined) {
												/* Scale CSS.Lists.transformsBase default to 1 whereas all other transform properties default to 0. */
												return /^scale/i.test(transformName) ? 1 : 0;
												/* When transform values are set, they are wrapped in parentheses as per the CSS spec.
												 Thus, when extracting their values (for tween calculations), we strip off the parentheses. */
											}
											return Data(element).transformCache[transformName].replace(/[()]/g, "");
										case "inject":
											var invalid = false;

											/* If an individual transform property contains an unsupported unit type, the browser ignores the *entire* transform property.
											 Thus, protect users from themselves by skipping setting for transform values supplied with invalid unit types. */
											/* Switch on the base transform type; ignore the axis by removing the last letter from the transform's name. */
											switch (transformName.substr(0, transformName.length - 1)) {
												/* Whitelist unit types for each transform. */
												case "translate":
													invalid = !/(%|px|em|rem|vw|vh|\d)$/i.test(propertyValue);
													break;
													/* Since an axis-free "scale" property is supported as well, a little hack is used here to detect it by chopping off its last letter. */
												case "scal":
												case "scale":
													/* Chrome on Android has a bug in which scaled elements blur if their initial scale
													 value is below 1 (which can happen with forcefeeding). Thus, we detect a yet-unset scale property
													 and ensure that its first value is always 1. More info: http://stackoverflow.com/questions/10417890/css3-animations-with-transform-causes-blurred-elements-on-webkit/10417962#10417962 */
													if (Velocity.State.isAndroid && Data(element).transformCache[transformName] === undefined && propertyValue < 1) {
														propertyValue = 1;
													}

													invalid = !/(\d)$/i.test(propertyValue);
													break;
												case "skew":
													invalid = !/(deg|\d)$/i.test(propertyValue);
													break;
												case "rotate":
													invalid = !/(deg|\d)$/i.test(propertyValue);
													break;
											}

											if (!invalid) {
												/* As per the CSS spec, wrap the value in parentheses. */
												Data(element).transformCache[transformName] = "(" + propertyValue + ")";
											}

											/* Although the value is set on the transformCache object, return the newly-updated value for the calling code to process as normal. */
											return Data(element).transformCache[transformName];
									}
								};
							})();
						}

						/*************
						 Colors
						 *************/

						/* Since Velocity only animates a single numeric value per property, color animation is achieved by hooking the individual RGBA components of CSS color properties.
						 Accordingly, color values must be normalized (e.g. "#ff0000", "red", and "rgb(255, 0, 0)" ==> "255 0 0 1") so that their components can be injected/extracted by CSS.Hooks logic. */
						for (var j = 0; j < CSS.Lists.colors.length; j++) {
							/* Wrap the dynamically generated normalization function in a new scope so that colorName's value is paired with its respective function.
							 (Otherwise, all functions would take the final for loop's colorName.) */
							(function() {
								var colorName = CSS.Lists.colors[j];

								/* Note: In IE<=8, which support rgb but not rgba, color properties are reverted to rgb by stripping off the alpha component. */
								CSS.Normalizations.registered[colorName] = function(type, element, propertyValue) {
									switch (type) {
										case "name":
											return colorName;
											/* Convert all color values into the rgb format. (Old IE can return hex values and color names instead of rgb/rgba.) */
										case "extract":
											var extracted;

											/* If the color is already in its hookable form (e.g. "255 255 255 1") due to having been previously extracted, skip extraction. */
											if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
												extracted = propertyValue;
											} else {
												var converted,
														colorNames = {
															black: "rgb(0, 0, 0)",
															blue: "rgb(0, 0, 255)",
															gray: "rgb(128, 128, 128)",
															green: "rgb(0, 128, 0)",
															red: "rgb(255, 0, 0)",
															white: "rgb(255, 255, 255)"
														};

												/* Convert color names to rgb. */
												if (/^[A-z]+$/i.test(propertyValue)) {
													if (colorNames[propertyValue] !== undefined) {
														converted = colorNames[propertyValue];
													} else {
														/* If an unmatched color name is provided, default to black. */
														converted = colorNames.black;
													}
													/* Convert hex values to rgb. */
												} else if (CSS.RegEx.isHex.test(propertyValue)) {
													converted = "rgb(" + CSS.Values.hexToRgb(propertyValue).join(" ") + ")";
													/* If the provided color doesn't match any of the accepted color formats, default to black. */
												} else if (!(/^rgba?\(/i.test(propertyValue))) {
													converted = colorNames.black;
												}

												/* Remove the surrounding "rgb/rgba()" string then replace commas with spaces and strip
												 repeated spaces (in case the value included spaces to begin with). */
												extracted = (converted || propertyValue).toString().match(CSS.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
											}

											/* So long as this isn't <=IE8, add a fourth (alpha) component if it's missing and default it to 1 (visible). */
											if ((!IE || IE > 8) && extracted.split(" ").length === 3) {
												extracted += " 1";
											}

											return extracted;
										case "inject":
											/* If we have a pattern then it might already have the right values */
											if (/^rgb/.test(propertyValue)) {
												return propertyValue;
											}

											/* If this is IE<=8 and an alpha component exists, strip it off. */
											if (IE <= 8) {
												if (propertyValue.split(" ").length === 4) {
													propertyValue = propertyValue.split(/\s+/).slice(0, 3).join(" ");
												}
												/* Otherwise, add a fourth (alpha) component if it's missing and default it to 1 (visible). */
											} else if (propertyValue.split(" ").length === 3) {
												propertyValue += " 1";
											}

											/* Re-insert the browser-appropriate wrapper("rgb/rgba()"), insert commas, and strip off decimal units
											 on all values but the fourth (R, G, and B only accept whole numbers). */
											return (IE <= 8 ? "rgb" : "rgba") + "(" + propertyValue.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";
									}
								};
							})();
						}

						/**************
						 Dimensions
						 **************/
						function augmentDimension(name, element, wantInner) {
							var isBorderBox = CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() === "border-box";

							if (isBorderBox === (wantInner || false)) {
								/* in box-sizing mode, the CSS width / height accessors already give the outerWidth / outerHeight. */
								var i,
										value,
										augment = 0,
										sides = name === "width" ? ["Left", "Right"] : ["Top", "Bottom"],
										fields = ["padding" + sides[0], "padding" + sides[1], "border" + sides[0] + "Width", "border" + sides[1] + "Width"];

								for (i = 0; i < fields.length; i++) {
									value = parseFloat(CSS.getPropertyValue(element, fields[i]));
									if (!isNaN(value)) {
										augment += value;
									}
								}
								return wantInner ? -augment : augment;
							}
							return 0;
						}
						function getDimension(name, wantInner) {
							return function(type, element, propertyValue) {
								switch (type) {
									case "name":
										return name;
									case "extract":
										return parseFloat(propertyValue) + augmentDimension(name, element, wantInner);
									case "inject":
										return (parseFloat(propertyValue) - augmentDimension(name, element, wantInner)) + "px";
								}
							};
						}
						CSS.Normalizations.registered.innerWidth = getDimension("width", true);
						CSS.Normalizations.registered.innerHeight = getDimension("height", true);
						CSS.Normalizations.registered.outerWidth = getDimension("width");
						CSS.Normalizations.registered.outerHeight = getDimension("height");
					}
				},
				/************************
				 CSS Property Names
				 ************************/

				Names: {
					/* Camelcase a property name into its JavaScript notation (e.g. "background-color" ==> "backgroundColor").
					 Camelcasing is used to normalize property names between and across calls. */
					camelCase: function(property) {
						return property.replace(/-(\w)/g, function(match, subMatch) {
							return subMatch.toUpperCase();
						});
					},
					/* For SVG elements, some properties (namely, dimensional ones) are GET/SET via the element's HTML attributes (instead of via CSS styles). */
					SVGAttribute: function(property) {
						var SVGAttributes = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";

						/* Certain browsers require an SVG transform to be applied as an attribute. (Otherwise, application via CSS is preferable due to 3D support.) */
						if (IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) {
							SVGAttributes += "|transform";
						}

						return new RegExp("^(" + SVGAttributes + ")$", "i").test(property);
					},
					/* Determine whether a property should be set with a vendor prefix. */
					/* If a prefixed version of the property exists, return it. Otherwise, return the original property name.
					 If the property is not at all supported by the browser, return a false flag. */
					prefixCheck: function(property) {
						/* If this property has already been checked, return the cached value. */
						if (Velocity.State.prefixMatches[property]) {
							return [Velocity.State.prefixMatches[property], true];
						} else {
							var vendors = ["", "Webkit", "Moz", "ms", "O"];

							for (var i = 0, vendorsLength = vendors.length; i < vendorsLength; i++) {
								var propertyPrefixed;

								if (i === 0) {
									propertyPrefixed = property;
								} else {
									/* Capitalize the first letter of the property to conform to JavaScript vendor prefix notation (e.g. webkitFilter). */
									propertyPrefixed = vendors[i] + property.replace(/^\w/, function(match) {
										return match.toUpperCase();
									});
								}

								/* Check if the browser supports this property as prefixed. */
								if (Type.isString(Velocity.State.prefixElement.style[propertyPrefixed])) {
									/* Cache the match. */
									Velocity.State.prefixMatches[property] = propertyPrefixed;

									return [propertyPrefixed, true];
								}
							}

							/* If the browser doesn't support this property in any form, include a false flag so that the caller can decide how to proceed. */
							return [property, false];
						}
					}
				},
				/************************
				 CSS Property Values
				 ************************/

				Values: {
					/* Hex to RGB conversion. Copyright Tim Down: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb */
					hexToRgb: function(hex) {
						var shortformRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
								longformRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
								rgbParts;

						hex = hex.replace(shortformRegex, function(m, r, g, b) {
							return r + r + g + g + b + b;
						});

						rgbParts = longformRegex.exec(hex);

						return rgbParts ? [parseInt(rgbParts[1], 16), parseInt(rgbParts[2], 16), parseInt(rgbParts[3], 16)] : [0, 0, 0];
					},
					isCSSNullValue: function(value) {
						/* The browser defaults CSS values that have not been set to either 0 or one of several possible null-value strings.
						 Thus, we check for both falsiness and these special strings. */
						/* Null-value checking is performed to default the special strings to 0 (for the sake of tweening) or their hook
						 templates as defined as CSS.Hooks (for the sake of hook injection/extraction). */
						/* Note: Chrome returns "rgba(0, 0, 0, 0)" for an undefined color whereas IE returns "transparent". */
						return (!value || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(value));
					},
					/* Retrieve a property's default unit type. Used for assigning a unit type when one is not supplied by the user. */
					getUnitType: function(property) {
						if (/^(rotate|skew)/i.test(property)) {
							return "deg";
						} else if (/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(property)) {
							/* The above properties are unitless. */
							return "";
						} else {
							/* Default to px for all other properties. */
							return "px";
						}
					},
					/* HTML elements default to an associated display type when they're not set to display:none. */
					/* Note: This function is used for correctly setting the non-"none" display value in certain Velocity redirects, such as fadeIn/Out. */
					getDisplayType: function(element) {
						var tagName = element && element.tagName.toString().toLowerCase();

						if (/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(tagName)) {
							return "inline";
						} else if (/^(li)$/i.test(tagName)) {
							return "list-item";
						} else if (/^(tr)$/i.test(tagName)) {
							return "table-row";
						} else if (/^(table)$/i.test(tagName)) {
							return "table";
						} else if (/^(tbody)$/i.test(tagName)) {
							return "table-row-group";
							/* Default to "block" when no match is found. */
						} else {
							return "block";
						}
					},
					/* The class add/remove functions are used to temporarily apply a "velocity-animating" class to elements while they're animating. */
					addClass: function(element, className) {
						if (element) {
							if (element.classList) {
								element.classList.add(className);
							} else if (Type.isString(element.className)) {
								// Element.className is around 15% faster then set/getAttribute
								element.className += (element.className.length ? " " : "") + className;
							} else {
								// Work around for IE strict mode animating SVG - and anything else that doesn't behave correctly - the same way jQuery does it
								var currentClass = element.getAttribute(IE <= 7 ? "className" : "class") || "";

								element.setAttribute("class", currentClass + (currentClass ? " " : "") + className);
							}
						}
					},
					removeClass: function(element, className) {
						if (element) {
							if (element.classList) {
								element.classList.remove(className);
							} else if (Type.isString(element.className)) {
								// Element.className is around 15% faster then set/getAttribute
								// TODO: Need some jsperf tests on performance - can we get rid of the regex and maybe use split / array manipulation?
								element.className = element.className.toString().replace(new RegExp("(^|\\s)" + className.split(" ").join("|") + "(\\s|$)", "gi"), " ");
							} else {
								// Work around for IE strict mode animating SVG - and anything else that doesn't behave correctly - the same way jQuery does it
								var currentClass = element.getAttribute(IE <= 7 ? "className" : "class") || "";

								element.setAttribute("class", currentClass.replace(new RegExp("(^|\s)" + className.split(" ").join("|") + "(\s|$)", "gi"), " "));
							}
						}
					}
				},
				/****************************
				 Style Getting & Setting
				 ****************************/

				/* The singular getPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
				getPropertyValue: function(element, property, rootPropertyValue, forceStyleLookup) {
					/* Get an element's computed property value. */
					/* Note: Retrieving the value of a CSS property cannot simply be performed by checking an element's
					 style attribute (which only reflects user-defined values). Instead, the browser must be queried for a property's
					 *computed* value. You can read more about getComputedStyle here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
					function computePropertyValue(element, property) {
						/* When box-sizing isn't set to border-box, height and width style values are incorrectly computed when an
						 element's scrollbars are visible (which expands the element's dimensions). Thus, we defer to the more accurate
						 offsetHeight/Width property, which includes the total dimensions for interior, border, padding, and scrollbar.
						 We subtract border and padding to get the sum of interior + scrollbar. */
						var computedValue = 0;

						/* IE<=8 doesn't support window.getComputedStyle, thus we defer to jQuery, which has an extensive array
						 of hacks to accurately retrieve IE8 property values. Re-implementing that logic here is not worth bloating the
						 codebase for a dying browser. The performance repercussions of using jQuery here are minimal since
						 Velocity is optimized to rarely (and sometimes never) query the DOM. Further, the $.css() codepath isn't that slow. */
						if (IE <= 8) {
							computedValue = $.css(element, property); /* GET */
							/* All other browsers support getComputedStyle. The returned live object reference is cached onto its
							 associated element so that it does not need to be refetched upon every GET. */
						} else {
							/* Browsers do not return height and width values for elements that are set to display:"none". Thus, we temporarily
							 toggle display to the element type's default value. */
							var toggleDisplay = false;

							if (/^(width|height)$/.test(property) && CSS.getPropertyValue(element, "display") === 0) {
								toggleDisplay = true;
								CSS.setPropertyValue(element, "display", CSS.Values.getDisplayType(element));
							}

							var revertDisplay = function() {
								if (toggleDisplay) {
									CSS.setPropertyValue(element, "display", "none");
								}
							};

							if (!forceStyleLookup) {
								if (property === "height" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
									var contentBoxHeight = element.offsetHeight - (parseFloat(CSS.getPropertyValue(element, "borderTopWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderBottomWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingTop")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingBottom")) || 0);
									revertDisplay();

									return contentBoxHeight;
								} else if (property === "width" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
									var contentBoxWidth = element.offsetWidth - (parseFloat(CSS.getPropertyValue(element, "borderLeftWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderRightWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingLeft")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingRight")) || 0);
									revertDisplay();

									return contentBoxWidth;
								}
							}

							var computedStyle;

							/* For elements that Velocity hasn't been called on directly (e.g. when Velocity queries the DOM on behalf
							 of a parent of an element its animating), perform a direct getComputedStyle lookup since the object isn't cached. */
							if (Data(element) === undefined) {
								computedStyle = window.getComputedStyle(element, null); /* GET */
								/* If the computedStyle object has yet to be cached, do so now. */
							} else if (!Data(element).computedStyle) {
								computedStyle = Data(element).computedStyle = window.getComputedStyle(element, null); /* GET */
								/* If computedStyle is cached, use it. */
							} else {
								computedStyle = Data(element).computedStyle;
							}

							/* IE and Firefox do not return a value for the generic borderColor -- they only return individual values for each border side's color.
							 Also, in all browsers, when border colors aren't all the same, a compound value is returned that Velocity isn't setup to parse.
							 So, as a polyfill for querying individual border side colors, we just return the top border's color and animate all borders from that value. */
							if (property === "borderColor") {
								property = "borderTopColor";
							}

							/* IE9 has a bug in which the "filter" property must be accessed from computedStyle using the getPropertyValue method
							 instead of a direct property lookup. The getPropertyValue method is slower than a direct lookup, which is why we avoid it by default. */
							if (IE === 9 && property === "filter") {
								computedValue = computedStyle.getPropertyValue(property); /* GET */
							} else {
								computedValue = computedStyle[property];
							}

							/* Fall back to the property's style value (if defined) when computedValue returns nothing,
							 which can happen when the element hasn't been painted. */
							if (computedValue === "" || computedValue === null) {
								computedValue = element.style[property];
							}

							revertDisplay();
						}

						/* For top, right, bottom, and left (TRBL) values that are set to "auto" on elements of "fixed" or "absolute" position,
						 defer to jQuery for converting "auto" to a numeric value. (For elements with a "static" or "relative" position, "auto" has the same
						 effect as being set to 0, so no conversion is necessary.) */
						/* An example of why numeric conversion is necessary: When an element with "position:absolute" has an untouched "left"
						 property, which reverts to "auto", left's value is 0 relative to its parent element, but is often non-zero relative
						 to its *containing* (not parent) element, which is the nearest "position:relative" ancestor or the viewport (and always the viewport in the case of "position:fixed"). */
						if (computedValue === "auto" && /^(top|right|bottom|left)$/i.test(property)) {
							var position = computePropertyValue(element, "position"); /* GET */

							/* For absolute positioning, jQuery's $.position() only returns values for top and left;
							 right and bottom will have their "auto" value reverted to 0. */
							/* Note: A jQuery object must be created here since jQuery doesn't have a low-level alias for $.position().
							 Not a big deal since we're currently in a GET batch anyway. */
							if (position === "fixed" || (position === "absolute" && /top|left/i.test(property))) {
								/* Note: jQuery strips the pixel unit from its returned values; we re-add it here to conform with computePropertyValue's behavior. */
								computedValue = $(element).position()[property] + "px"; /* GET */
							}
						}

						return computedValue;
					}

					var propertyValue;

					/* If this is a hooked property (e.g. "clipLeft" instead of the root property of "clip"),
					 extract the hook's value from a normalized rootPropertyValue using CSS.Hooks.extractValue(). */
					if (CSS.Hooks.registered[property]) {
						var hook = property,
								hookRoot = CSS.Hooks.getRoot(hook);

						/* If a cached rootPropertyValue wasn't passed in (which Velocity always attempts to do in order to avoid requerying the DOM),
						 query the DOM for the root property's value. */
						if (rootPropertyValue === undefined) {
							/* Since the browser is now being directly queried, use the official post-prefixing property name for this lookup. */
							rootPropertyValue = CSS.getPropertyValue(element, CSS.Names.prefixCheck(hookRoot)[0]); /* GET */
						}

						/* If this root has a normalization registered, peform the associated normalization extraction. */
						if (CSS.Normalizations.registered[hookRoot]) {
							rootPropertyValue = CSS.Normalizations.registered[hookRoot]("extract", element, rootPropertyValue);
						}

						/* Extract the hook's value. */
						propertyValue = CSS.Hooks.extractValue(hook, rootPropertyValue);

						/* If this is a normalized property (e.g. "opacity" becomes "filter" in <=IE8) or "translateX" becomes "transform"),
						 normalize the property's name and value, and handle the special case of transforms. */
						/* Note: Normalizing a property is mutually exclusive from hooking a property since hook-extracted values are strictly
						 numerical and therefore do not require normalization extraction. */
					} else if (CSS.Normalizations.registered[property]) {
						var normalizedPropertyName,
								normalizedPropertyValue;

						normalizedPropertyName = CSS.Normalizations.registered[property]("name", element);

						/* Transform values are calculated via normalization extraction (see below), which checks against the element's transformCache.
						 At no point do transform GETs ever actually query the DOM; initial stylesheet values are never processed.
						 This is because parsing 3D transform matrices is not always accurate and would bloat our codebase;
						 thus, normalization extraction defaults initial transform values to their zero-values (e.g. 1 for scaleX and 0 for translateX). */
						if (normalizedPropertyName !== "transform") {
							normalizedPropertyValue = computePropertyValue(element, CSS.Names.prefixCheck(normalizedPropertyName)[0]); /* GET */

							/* If the value is a CSS null-value and this property has a hook template, use that zero-value template so that hooks can be extracted from it. */
							if (CSS.Values.isCSSNullValue(normalizedPropertyValue) && CSS.Hooks.templates[property]) {
								normalizedPropertyValue = CSS.Hooks.templates[property][1];
							}
						}

						propertyValue = CSS.Normalizations.registered[property]("extract", element, normalizedPropertyValue);
					}

					/* If a (numeric) value wasn't produced via hook extraction or normalization, query the DOM. */
					if (!/^[\d-]/.test(propertyValue)) {
						/* For SVG elements, dimensional properties (which SVGAttribute() detects) are tweened via
						 their HTML attribute values instead of their CSS style values. */
						var data = Data(element);

						if (data && data.isSVG && CSS.Names.SVGAttribute(property)) {
							/* Since the height/width attribute values must be set manually, they don't reflect computed values.
							 Thus, we use use getBBox() to ensure we always get values for elements with undefined height/width attributes. */
							if (/^(height|width)$/i.test(property)) {
								/* Firefox throws an error if .getBBox() is called on an SVG that isn't attached to the DOM. */
								try {
									propertyValue = element.getBBox()[property];
								} catch (error) {
									propertyValue = 0;
								}
								/* Otherwise, access the attribute value directly. */
							} else {
								propertyValue = element.getAttribute(property);
							}
						} else {
							propertyValue = computePropertyValue(element, CSS.Names.prefixCheck(property)[0]); /* GET */
						}
					}

					/* Since property lookups are for animation purposes (which entails computing the numeric delta between start and end values),
					 convert CSS null-values to an integer of value 0. */
					if (CSS.Values.isCSSNullValue(propertyValue)) {
						propertyValue = 0;
					}

					if (Velocity.debug >= 2) {
						console.log("Get " + property + ": " + propertyValue);
					}

					return propertyValue;
				},
				/* The singular setPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
				setPropertyValue: function(element, property, propertyValue, rootPropertyValue, scrollData) {
					var propertyName = property;

					/* In order to be subjected to call options and element queueing, scroll animation is routed through Velocity as if it were a standard CSS property. */
					if (property === "scroll") {
						/* If a container option is present, scroll the container instead of the browser window. */
						if (scrollData.container) {
							scrollData.container["scroll" + scrollData.direction] = propertyValue;
							/* Otherwise, Velocity defaults to scrolling the browser window. */
						} else {
							if (scrollData.direction === "Left") {
								window.scrollTo(propertyValue, scrollData.alternateValue);
							} else {
								window.scrollTo(scrollData.alternateValue, propertyValue);
							}
						}
					} else {
						/* Transforms (translateX, rotateZ, etc.) are applied to a per-element transformCache object, which is manually flushed via flushTransformCache().
						 Thus, for now, we merely cache transforms being SET. */
						if (CSS.Normalizations.registered[property] && CSS.Normalizations.registered[property]("name", element) === "transform") {
							/* Perform a normalization injection. */
							/* Note: The normalization logic handles the transformCache updating. */
							CSS.Normalizations.registered[property]("inject", element, propertyValue);

							propertyName = "transform";
							propertyValue = Data(element).transformCache[property];
						} else {
							/* Inject hooks. */
							if (CSS.Hooks.registered[property]) {
								var hookName = property,
										hookRoot = CSS.Hooks.getRoot(property);

								/* If a cached rootPropertyValue was not provided, query the DOM for the hookRoot's current value. */
								rootPropertyValue = rootPropertyValue || CSS.getPropertyValue(element, hookRoot); /* GET */

								propertyValue = CSS.Hooks.injectValue(hookName, propertyValue, rootPropertyValue);
								property = hookRoot;
							}

							/* Normalize names and values. */
							if (CSS.Normalizations.registered[property]) {
								propertyValue = CSS.Normalizations.registered[property]("inject", element, propertyValue);
								property = CSS.Normalizations.registered[property]("name", element);
							}

							/* Assign the appropriate vendor prefix before performing an official style update. */
							propertyName = CSS.Names.prefixCheck(property)[0];

							/* A try/catch is used for IE<=8, which throws an error when "invalid" CSS values are set, e.g. a negative width.
							 Try/catch is avoided for other browsers since it incurs a performance overhead. */
							if (IE <= 8) {
								try {
									element.style[propertyName] = propertyValue;
								} catch (error) {
									if (Velocity.debug) {
										console.log("Browser does not support [" + propertyValue + "] for [" + propertyName + "]");
									}
								}
								/* SVG elements have their dimensional properties (width, height, x, y, cx, etc.) applied directly as attributes instead of as styles. */
								/* Note: IE8 does not support SVG elements, so it's okay that we skip it for SVG animation. */
							} else {
								var data = Data(element);

								if (data && data.isSVG && CSS.Names.SVGAttribute(property)) {
									/* Note: For SVG attributes, vendor-prefixed property names are never used. */
									/* Note: Not all CSS properties can be animated via attributes, but the browser won't throw an error for unsupported properties. */
									element.setAttribute(property, propertyValue);
								} else {
									element.style[propertyName] = propertyValue;
								}
							}

							if (Velocity.debug >= 2) {
								console.log("Set " + property + " (" + propertyName + "): " + propertyValue);
							}
						}
					}

					/* Return the normalized property name and value in case the caller wants to know how these values were modified before being applied to the DOM. */
					return [propertyName, propertyValue];
				},
				/* To increase performance by batching transform updates into a single SET, transforms are not directly applied to an element until flushTransformCache() is called. */
				/* Note: Velocity applies transform properties in the same order that they are chronogically introduced to the element's CSS styles. */
				flushTransformCache: function(element) {
					var transformString = "",
							data = Data(element);

					/* Certain browsers require that SVG transforms be applied as an attribute. However, the SVG transform attribute takes a modified version of CSS's transform string
					 (units are dropped and, except for skewX/Y, subproperties are merged into their master property -- e.g. scaleX and scaleY are merged into scale(X Y). */
					if ((IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) && data && data.isSVG) {
						/* Since transform values are stored in their parentheses-wrapped form, we use a helper function to strip out their numeric values.
						 Further, SVG transform properties only take unitless (representing pixels) values, so it's okay that parseFloat() strips the unit suffixed to the float value. */
						var getTransformFloat = function(transformProperty) {
							return parseFloat(CSS.getPropertyValue(element, transformProperty));
						};

						/* Create an object to organize all the transforms that we'll apply to the SVG element. To keep the logic simple,
						 we process *all* transform properties -- even those that may not be explicitly applied (since they default to their zero-values anyway). */
						var SVGTransforms = {
							translate: [getTransformFloat("translateX"), getTransformFloat("translateY")],
							skewX: [getTransformFloat("skewX")], skewY: [getTransformFloat("skewY")],
							/* If the scale property is set (non-1), use that value for the scaleX and scaleY values
							 (this behavior mimics the result of animating all these properties at once on HTML elements). */
							scale: getTransformFloat("scale") !== 1 ? [getTransformFloat("scale"), getTransformFloat("scale")] : [getTransformFloat("scaleX"), getTransformFloat("scaleY")],
							/* Note: SVG's rotate transform takes three values: rotation degrees followed by the X and Y values
							 defining the rotation's origin point. We ignore the origin values (default them to 0). */
							rotate: [getTransformFloat("rotateZ"), 0, 0]
						};

						/* Iterate through the transform properties in the user-defined property map order.
						 (This mimics the behavior of non-SVG transform animation.) */
						$.each(Data(element).transformCache, function(transformName) {
							/* Except for with skewX/Y, revert the axis-specific transform subproperties to their axis-free master
							 properties so that they match up with SVG's accepted transform properties. */
							if (/^translate/i.test(transformName)) {
								transformName = "translate";
							} else if (/^scale/i.test(transformName)) {
								transformName = "scale";
							} else if (/^rotate/i.test(transformName)) {
								transformName = "rotate";
							}

							/* Check that we haven't yet deleted the property from the SVGTransforms container. */
							if (SVGTransforms[transformName]) {
								/* Append the transform property in the SVG-supported transform format. As per the spec, surround the space-delimited values in parentheses. */
								transformString += transformName + "(" + SVGTransforms[transformName].join(" ") + ")" + " ";

								/* After processing an SVG transform property, delete it from the SVGTransforms container so we don't
								 re-insert the same master property if we encounter another one of its axis-specific properties. */
								delete SVGTransforms[transformName];
							}
						});
					} else {
						var transformValue,
								perspective;

						/* Transform properties are stored as members of the transformCache object. Concatenate all the members into a string. */
						$.each(Data(element).transformCache, function(transformName) {
							transformValue = Data(element).transformCache[transformName];

							/* Transform's perspective subproperty must be set first in order to take effect. Store it temporarily. */
							if (transformName === "transformPerspective") {
								perspective = transformValue;
								return true;
							}

							/* IE9 only supports one rotation type, rotateZ, which it refers to as "rotate". */
							if (IE === 9 && transformName === "rotateZ") {
								transformName = "rotate";
							}

							transformString += transformName + transformValue + " ";
						});

						/* If present, set the perspective subproperty first. */
						if (perspective) {
							transformString = "perspective" + perspective + " " + transformString;
						}
					}

					CSS.setPropertyValue(element, "transform", transformString);
				}
			};

			/* Register hooks and normalizations. */
			CSS.Hooks.register();
			CSS.Normalizations.register();

			/* Allow hook setting in the same fashion as jQuery's $.css(). */
			Velocity.hook = function(elements, arg2, arg3) {
				var value;

				elements = sanitizeElements(elements);

				$.each(elements, function(i, element) {
					/* Initialize Velocity's per-element data cache if this element hasn't previously been animated. */
					if (Data(element) === undefined) {
						Velocity.init(element);
					}

					/* Get property value. If an element set was passed in, only return the value for the first element. */
					if (arg3 === undefined) {
						if (value === undefined) {
							value = CSS.getPropertyValue(element, arg2);
						}
						/* Set property value. */
					} else {
						/* sPV returns an array of the normalized propertyName/propertyValue pair used to update the DOM. */
						var adjustedSet = CSS.setPropertyValue(element, arg2, arg3);

						/* Transform properties don't automatically set. They have to be flushed to the DOM. */
						if (adjustedSet[0] === "transform") {
							Velocity.CSS.flushTransformCache(element);
						}

						value = adjustedSet;
					}
				});

				return value;
			};

			/*****************
			 Animation
			 *****************/

			var animate = function() {
				var opts;

				/******************
				 Call Chain
				 ******************/

				/* Logic for determining what to return to the call stack when exiting out of Velocity. */
				function getChain() {
					/* If we are using the utility function, attempt to return this call's promise. If no promise library was detected,
					 default to null instead of returning the targeted elements so that utility function's return value is standardized. */
					if (isUtility) {
						return promiseData.promise || null;
						/* Otherwise, if we're using $.fn, return the jQuery-/Zepto-wrapped element set. */
					} else {
						return elementsWrapped;
					}
				}

				/*************************
				 Arguments Assignment
				 *************************/

				/* To allow for expressive CoffeeScript code, Velocity supports an alternative syntax in which "elements" (or "e"), "properties" (or "p"), and "options" (or "o")
				 objects are defined on a container object that's passed in as Velocity's sole argument. */
				/* Note: Some browsers automatically populate arguments with a "properties" object. We detect it by checking for its default "names" property. */
				var syntacticSugar = (arguments[0] && (arguments[0].p || (($.isPlainObject(arguments[0].properties) && !arguments[0].properties.names) || Type.isString(arguments[0].properties)))),
						/* Whether Velocity was called via the utility function (as opposed to on a jQuery/Zepto object). */
						isUtility,
						/* When Velocity is called via the utility function ($.Velocity()/Velocity()), elements are explicitly
						 passed in as the first parameter. Thus, argument positioning varies. We normalize them here. */
						elementsWrapped,
						argumentIndex;

				var elements,
						propertiesMap,
						options;

				/* Detect jQuery/Zepto elements being animated via the $.fn method. */
				if (Type.isWrapped(this)) {
					isUtility = false;

					argumentIndex = 0;
					elements = this;
					elementsWrapped = this;
					/* Otherwise, raw elements are being animated via the utility function. */
				} else {
					isUtility = true;

					argumentIndex = 1;
					elements = syntacticSugar ? (arguments[0].elements || arguments[0].e) : arguments[0];
				}

				/***************
				 Promises
				 ***************/

				var promiseData = {
					promise: null,
					resolver: null,
					rejecter: null
				};

				/* If this call was made via the utility function (which is the default method of invocation when jQuery/Zepto are not being used), and if
				 promise support was detected, create a promise object for this call and store references to its resolver and rejecter methods. The resolve
				 method is used when a call completes naturally or is prematurely stopped by the user. In both cases, completeCall() handles the associated
				 call cleanup and promise resolving logic. The reject method is used when an invalid set of arguments is passed into a Velocity call. */
				/* Note: Velocity employs a call-based queueing architecture, which means that stopping an animating element actually stops the full call that
				 triggered it -- not that one element exclusively. Similarly, there is one promise per call, and all elements targeted by a Velocity call are
				 grouped together for the purposes of resolving and rejecting a promise. */
				if (isUtility && Velocity.Promise) {
					promiseData.promise = new Velocity.Promise(function(resolve, reject) {
						promiseData.resolver = resolve;
						promiseData.rejecter = reject;
					});
				}

				if (syntacticSugar) {
					propertiesMap = arguments[0].properties || arguments[0].p;
					options = arguments[0].options || arguments[0].o;
				} else {
					propertiesMap = arguments[argumentIndex];
					options = arguments[argumentIndex + 1];
				}

				elements = sanitizeElements(elements);

				if (!elements) {
					if (promiseData.promise) {
						if (!propertiesMap || !options || options.promiseRejectEmpty !== false) {
							promiseData.rejecter();
						} else {
							promiseData.resolver();
						}
					}
					return;
				}

				/* The length of the element set (in the form of a nodeList or an array of elements) is defaulted to 1 in case a
				 single raw DOM element is passed in (which doesn't contain a length property). */
				var elementsLength = elements.length,
						elementsIndex = 0;

				/***************************
				 Argument Overloading
				 ***************************/

				/* Support is included for jQuery's argument overloading: $.animate(propertyMap [, duration] [, easing] [, complete]).
				 Overloading is detected by checking for the absence of an object being passed into options. */
				/* Note: The stop/finish/pause/resume actions do not accept animation options, and are therefore excluded from this check. */
				if (!/^(stop|finish|finishAll|pause|resume)$/i.test(propertiesMap) && !$.isPlainObject(options)) {
					/* The utility function shifts all arguments one position to the right, so we adjust for that offset. */
					var startingArgumentPosition = argumentIndex + 1;

					options = {};

					/* Iterate through all options arguments */
					for (var i = startingArgumentPosition; i < arguments.length; i++) {
						/* Treat a number as a duration. Parse it out. */
						/* Note: The following RegEx will return true if passed an array with a number as its first item.
						 Thus, arrays are skipped from this check. */
						if (!Type.isArray(arguments[i]) && (/^(fast|normal|slow)$/i.test(arguments[i]) || /^\d/.test(arguments[i]))) {
							options.duration = arguments[i];
							/* Treat strings and arrays as easings. */
						} else if (Type.isString(arguments[i]) || Type.isArray(arguments[i])) {
							options.easing = arguments[i];
							/* Treat a function as a complete callback. */
						} else if (Type.isFunction(arguments[i])) {
							options.complete = arguments[i];
						}
					}
				}

				/*********************
				 Action Detection
				 *********************/

				/* Velocity's behavior is categorized into "actions": Elements can either be specially scrolled into view,
				 or they can be started, stopped, paused, resumed, or reversed . If a literal or referenced properties map is passed in as Velocity's
				 first argument, the associated action is "start". Alternatively, "scroll", "reverse", "pause", "resume" or "stop" can be passed in 
				 instead of a properties map. */
				var action;

				switch (propertiesMap) {
					case "scroll":
						action = "scroll";
						break;

					case "reverse":
						action = "reverse";
						break;

					case "pause":

						/*******************
						 Action: Pause
						 *******************/

						var currentTime = (new Date()).getTime();

						/* Handle delay timers */
						$.each(elements, function(i, element) {
							pauseDelayOnElement(element, currentTime);
						});

						/* Pause and Resume are call-wide (not on a per element basis). Thus, calling pause or resume on a 
						 single element will cause any calls that containt tweens for that element to be paused/resumed
						 as well. */

						/* Iterate through all calls and pause any that contain any of our elements */
						$.each(Velocity.State.calls, function(i, activeCall) {

							var found = false;
							/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
							if (activeCall) {
								/* Iterate through the active call's targeted elements. */
								$.each(activeCall[1], function(k, activeElement) {
									var queueName = (options === undefined) ? "" : options;

									if (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {
										return true;
									}

									/* Iterate through the calls targeted by the stop command. */
									$.each(elements, function(l, element) {
										/* Check that this call was applied to the target element. */
										if (element === activeElement) {

											/* Set call to paused */
											activeCall[5] = {
												resume: false
											};

											/* Once we match an element, we can bounce out to the next call entirely */
											found = true;
											return false;
										}
									});

									/* Proceed to check next call if we have already matched */
									if (found) {
										return false;
									}
								});
							}

						});

						/* Since pause creates no new tweens, exit out of Velocity. */
						return getChain();

					case "resume":

						/*******************
						 Action: Resume
						 *******************/

						/* Handle delay timers */
						$.each(elements, function(i, element) {
							resumeDelayOnElement(element, currentTime);
						});

						/* Pause and Resume are call-wide (not on a per elemnt basis). Thus, calling pause or resume on a 
						 single element will cause any calls that containt tweens for that element to be paused/resumed
						 as well. */

						/* Iterate through all calls and pause any that contain any of our elements */
						$.each(Velocity.State.calls, function(i, activeCall) {
							var found = false;
							/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
							if (activeCall) {
								/* Iterate through the active call's targeted elements. */
								$.each(activeCall[1], function(k, activeElement) {
									var queueName = (options === undefined) ? "" : options;

									if (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {
										return true;
									}

									/* Skip any calls that have never been paused */
									if (!activeCall[5]) {
										return true;
									}

									/* Iterate through the calls targeted by the stop command. */
									$.each(elements, function(l, element) {
										/* Check that this call was applied to the target element. */
										if (element === activeElement) {

											/* Flag a pause object to be resumed, which will occur during the next tick. In
											 addition, the pause object will at that time be deleted */
											activeCall[5].resume = true;

											/* Once we match an element, we can bounce out to the next call entirely */
											found = true;
											return false;
										}
									});

									/* Proceed to check next call if we have already matched */
									if (found) {
										return false;
									}
								});
							}

						});

						/* Since resume creates no new tweens, exit out of Velocity. */
						return getChain();

					case "finish":
					case "finishAll":
					case "stop":
						/*******************
						 Action: Stop
						 *******************/

						/* Clear the currently-active delay on each targeted element. */
						$.each(elements, function(i, element) {
							if (Data(element) && Data(element).delayTimer) {
								/* Stop the timer from triggering its cached next() function. */
								clearTimeout(Data(element).delayTimer.setTimeout);

								/* Manually call the next() function so that the subsequent queue items can progress. */
								if (Data(element).delayTimer.next) {
									Data(element).delayTimer.next();
								}

								delete Data(element).delayTimer;
							}

							/* If we want to finish everything in the queue, we have to iterate through it
							 and call each function. This will make them active calls below, which will
							 cause them to be applied via the duration setting. */
							if (propertiesMap === "finishAll" && (options === true || Type.isString(options))) {
								/* Iterate through the items in the element's queue. */
								$.each($.queue(element, Type.isString(options) ? options : ""), function(_, item) {
									/* The queue array can contain an "inprogress" string, which we skip. */
									if (Type.isFunction(item)) {
										item();
									}
								});

								/* Clearing the $.queue() array is achieved by resetting it to []. */
								$.queue(element, Type.isString(options) ? options : "", []);
							}
						});

						var callsToStop = [];

						/* When the stop action is triggered, the elements' currently active call is immediately stopped. The active call might have
						 been applied to multiple elements, in which case all of the call's elements will be stopped. When an element
						 is stopped, the next item in its animation queue is immediately triggered. */
						/* An additional argument may be passed in to clear an element's remaining queued calls. Either true (which defaults to the "fx" queue)
						 or a custom queue string can be passed in. */
						/* Note: The stop command runs prior to Velocity's Queueing phase since its behavior is intended to take effect *immediately*,
						 regardless of the element's current queue state. */

						/* Iterate through every active call. */
						$.each(Velocity.State.calls, function(i, activeCall) {
							/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
							if (activeCall) {
								/* Iterate through the active call's targeted elements. */
								$.each(activeCall[1], function(k, activeElement) {
									/* If true was passed in as a secondary argument, clear absolutely all calls on this element. Otherwise, only
									 clear calls associated with the relevant queue. */
									/* Call stopping logic works as follows:
									 - options === true --> stop current default queue calls (and queue:false calls), including remaining queued ones.
									 - options === undefined --> stop current queue:"" call and all queue:false calls.
									 - options === false --> stop only queue:false calls.
									 - options === "custom" --> stop current queue:"custom" call, including remaining queued ones (there is no functionality to only clear the currently-running queue:"custom" call). */
									var queueName = (options === undefined) ? "" : options;

									if (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {
										return true;
									}

									/* Iterate through the calls targeted by the stop command. */
									$.each(elements, function(l, element) {
										/* Check that this call was applied to the target element. */
										if (element === activeElement) {
											/* Optionally clear the remaining queued calls. If we're doing "finishAll" this won't find anything,
											 due to the queue-clearing above. */
											if (options === true || Type.isString(options)) {
												/* Iterate through the items in the element's queue. */
												$.each($.queue(element, Type.isString(options) ? options : ""), function(_, item) {
													/* The queue array can contain an "inprogress" string, which we skip. */
													if (Type.isFunction(item)) {
														/* Pass the item's callback a flag indicating that we want to abort from the queue call.
														 (Specifically, the queue will resolve the call's associated promise then abort.)  */
														item(null, true);
													}
												});

												/* Clearing the $.queue() array is achieved by resetting it to []. */
												$.queue(element, Type.isString(options) ? options : "", []);
											}

											if (propertiesMap === "stop") {
												/* Since "reverse" uses cached start values (the previous call's endValues), these values must be
												 changed to reflect the final value that the elements were actually tweened to. */
												/* Note: If only queue:false animations are currently running on an element, it won't have a tweensContainer
												 object. Also, queue:false animations can't be reversed. */
												var data = Data(element);
												if (data && data.tweensContainer && queueName !== false) {
													$.each(data.tweensContainer, function(m, activeTween) {
														activeTween.endValue = activeTween.currentValue;
													});
												}

												callsToStop.push(i);
											} else if (propertiesMap === "finish" || propertiesMap === "finishAll") {
												/* To get active tweens to finish immediately, we forcefully shorten their durations to 1ms so that
												 they finish upon the next rAf tick then proceed with normal call completion logic. */
												activeCall[2].duration = 1;
											}
										}
									});
								});
							}
						});

						/* Prematurely call completeCall() on each matched active call. Pass an additional flag for "stop" to indicate
						 that the complete callback and display:none setting should be skipped since we're completing prematurely. */
						if (propertiesMap === "stop") {
							$.each(callsToStop, function(i, j) {
								completeCall(j, true);
							});

							if (promiseData.promise) {
								/* Immediately resolve the promise associated with this stop call since stop runs synchronously. */
								promiseData.resolver(elements);
							}
						}

						/* Since we're stopping, and not proceeding with queueing, exit out of Velocity. */
						return getChain();

					default:
						/* Treat a non-empty plain object as a literal properties map. */
						if ($.isPlainObject(propertiesMap) && !Type.isEmptyObject(propertiesMap)) {
							action = "start";

							/****************
							 Redirects
							 ****************/

							/* Check if a string matches a registered redirect (see Redirects above). */
						} else if (Type.isString(propertiesMap) && Velocity.Redirects[propertiesMap]) {
							opts = $.extend({}, options);

							var durationOriginal = opts.duration,
									delayOriginal = opts.delay || 0;

							/* If the backwards option was passed in, reverse the element set so that elements animate from the last to the first. */
							if (opts.backwards === true) {
								elements = $.extend(true, [], elements).reverse();
							}

							/* Individually trigger the redirect for each element in the set to prevent users from having to handle iteration logic in their redirect. */
							$.each(elements, function(elementIndex, element) {
								/* If the stagger option was passed in, successively delay each element by the stagger value (in ms). Retain the original delay value. */
								if (parseFloat(opts.stagger)) {
									opts.delay = delayOriginal + (parseFloat(opts.stagger) * elementIndex);
								} else if (Type.isFunction(opts.stagger)) {
									opts.delay = delayOriginal + opts.stagger.call(element, elementIndex, elementsLength);
								}

								/* If the drag option was passed in, successively increase/decrease (depending on the presense of opts.backwards)
								 the duration of each element's animation, using floors to prevent producing very short durations. */
								if (opts.drag) {
									/* Default the duration of UI pack effects (callouts and transitions) to 1000ms instead of the usual default duration of 400ms. */
									opts.duration = parseFloat(durationOriginal) || (/^(callout|transition)/.test(propertiesMap) ? 1000 : DURATION_DEFAULT);

									/* For each element, take the greater duration of: A) animation completion percentage relative to the original duration,
									 B) 75% of the original duration, or C) a 200ms fallback (in case duration is already set to a low value).
									 The end result is a baseline of 75% of the redirect's duration that increases/decreases as the end of the element set is approached. */
									opts.duration = Math.max(opts.duration * (opts.backwards ? 1 - elementIndex / elementsLength : (elementIndex + 1) / elementsLength), opts.duration * 0.75, 200);
								}

								/* Pass in the call's opts object so that the redirect can optionally extend it. It defaults to an empty object instead of null to
								 reduce the opts checking logic required inside the redirect. */
								Velocity.Redirects[propertiesMap].call(element, element, opts || {}, elementIndex, elementsLength, elements, promiseData.promise ? promiseData : undefined);
							});

							/* Since the animation logic resides within the redirect's own code, abort the remainder of this call.
							 (The performance overhead up to this point is virtually non-existant.) */
							/* Note: The jQuery call chain is kept intact by returning the complete element set. */
							return getChain();
						} else {
							var abortError = "Velocity: First argument (" + propertiesMap + ") was not a property map, a known action, or a registered redirect. Aborting.";

							if (promiseData.promise) {
								promiseData.rejecter(new Error(abortError));
							} else if (window.console) {
								console.log(abortError);
							}

							return getChain();
						}
				}

				/**************************
				 Call-Wide Variables
				 **************************/

				/* A container for CSS unit conversion ratios (e.g. %, rem, and em ==> px) that is used to cache ratios across all elements
				 being animated in a single Velocity call. Calculating unit ratios necessitates DOM querying and updating, and is therefore
				 avoided (via caching) wherever possible. This container is call-wide instead of page-wide to avoid the risk of using stale
				 conversion metrics across Velocity animations that are not immediately consecutively chained. */
				var callUnitConversionData = {
					lastParent: null,
					lastPosition: null,
					lastFontSize: null,
					lastPercentToPxWidth: null,
					lastPercentToPxHeight: null,
					lastEmToPx: null,
					remToPx: null,
					vwToPx: null,
					vhToPx: null
				};

				/* A container for all the ensuing tween data and metadata associated with this call. This container gets pushed to the page-wide
				 Velocity.State.calls array that is processed during animation ticking. */
				var call = [];

				/************************
				 Element Processing
				 ************************/

				/* Element processing consists of three parts -- data processing that cannot go stale and data processing that *can* go stale (i.e. third-party style modifications):
				 1) Pre-Queueing: Element-wide variables, including the element's data storage, are instantiated. Call options are prepared. If triggered, the Stop action is executed.
				 2) Queueing: The logic that runs once this call has reached its point of execution in the element's $.queue() stack. Most logic is placed here to avoid risking it becoming stale.
				 3) Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
				 `elementArrayIndex` allows passing index of the element in the original array to value functions.
				 If `elementsIndex` were used instead the index would be determined by the elements' per-element queue.
				 */
				function processElement(element, elementArrayIndex) {

					/*************************
					 Part I: Pre-Queueing
					 *************************/

					/***************************
					 Element-Wide Variables
					 ***************************/

					var /* The runtime opts object is the extension of the current call's options and Velocity's page-wide option defaults. */
							opts = $.extend({}, Velocity.defaults, options),
							/* A container for the processed data associated with each property in the propertyMap.
							 (Each property in the map produces its own "tween".) */
							tweensContainer = {},
							elementUnitConversionData;

					/******************
					 Element Init
					 ******************/

					if (Data(element) === undefined) {
						Velocity.init(element);
					}

					/******************
					 Option: Delay
					 ******************/

					/* Since queue:false doesn't respect the item's existing queue, we avoid injecting its delay here (it's set later on). */
					/* Note: Velocity rolls its own delay function since jQuery doesn't have a utility alias for $.fn.delay()
					 (and thus requires jQuery element creation, which we avoid since its overhead includes DOM querying). */
					if (parseFloat(opts.delay) && opts.queue !== false) {
						$.queue(element, opts.queue, function(next) {
							/* This is a flag used to indicate to the upcoming completeCall() function that this queue entry was initiated by Velocity. See completeCall() for further details. */
							Velocity.velocityQueueEntryFlag = true;

							/* The ensuing queue item (which is assigned to the "next" argument that $.queue() automatically passes in) will be triggered after a setTimeout delay.
							 The setTimeout is stored so that it can be subjected to clearTimeout() if this animation is prematurely stopped via Velocity's "stop" command, and
							 delayBegin/delayTime is used to ensure we can "pause" and "resume" a tween that is still mid-delay. */

							/* Temporarily store delayed elements to facilite access for global pause/resume */
							var callIndex = Velocity.State.delayedElements.count++;
							Velocity.State.delayedElements[callIndex] = element;

							var delayComplete = (function(index) {
								return function() {
									/* Clear the temporary element */
									Velocity.State.delayedElements[index] = false;

									/* Finally, issue the call */
									next();
								};
							})(callIndex);


							Data(element).delayBegin = (new Date()).getTime();
							Data(element).delay = parseFloat(opts.delay);
							Data(element).delayTimer = {
								setTimeout: setTimeout(next, parseFloat(opts.delay)),
								next: delayComplete
							};
						});
					}

					/*********************
					 Option: Duration
					 *********************/

					/* Support for jQuery's named durations. */
					switch (opts.duration.toString().toLowerCase()) {
						case "fast":
							opts.duration = 200;
							break;

						case "normal":
							opts.duration = DURATION_DEFAULT;
							break;

						case "slow":
							opts.duration = 600;
							break;

						default:
							/* Remove the potential "ms" suffix and default to 1 if the user is attempting to set a duration of 0 (in order to produce an immediate style change). */
							opts.duration = parseFloat(opts.duration) || 1;
					}

					/************************
					 Global Option: Mock
					 ************************/

					if (Velocity.mock !== false) {
						/* In mock mode, all animations are forced to 1ms so that they occur immediately upon the next rAF tick.
						 Alternatively, a multiplier can be passed in to time remap all delays and durations. */
						if (Velocity.mock === true) {
							opts.duration = opts.delay = 1;
						} else {
							opts.duration *= parseFloat(Velocity.mock) || 1;
							opts.delay *= parseFloat(Velocity.mock) || 1;
						}
					}

					/*******************
					 Option: Easing
					 *******************/

					opts.easing = getEasing(opts.easing, opts.duration);

					/**********************
					 Option: Callbacks
					 **********************/

					/* Callbacks must functions. Otherwise, default to null. */
					if (opts.begin && !Type.isFunction(opts.begin)) {
						opts.begin = null;
					}

					if (opts.progress && !Type.isFunction(opts.progress)) {
						opts.progress = null;
					}

					if (opts.complete && !Type.isFunction(opts.complete)) {
						opts.complete = null;
					}

					/*********************************
					 Option: Display & Visibility
					 *********************************/

					/* Refer to Velocity's documentation (VelocityJS.org/#displayAndVisibility) for a description of the display and visibility options' behavior. */
					/* Note: We strictly check for undefined instead of falsiness because display accepts an empty string value. */
					if (opts.display !== undefined && opts.display !== null) {
						opts.display = opts.display.toString().toLowerCase();

						/* Users can pass in a special "auto" value to instruct Velocity to set the element to its default display value. */
						if (opts.display === "auto") {
							opts.display = Velocity.CSS.Values.getDisplayType(element);
						}
					}

					if (opts.visibility !== undefined && opts.visibility !== null) {
						opts.visibility = opts.visibility.toString().toLowerCase();
					}

					/**********************
					 Option: mobileHA
					 **********************/

					/* When set to true, and if this is a mobile device, mobileHA automatically enables hardware acceleration (via a null transform hack)
					 on animating elements. HA is removed from the element at the completion of its animation. */
					/* Note: Android Gingerbread doesn't support HA. If a null transform hack (mobileHA) is in fact set, it will prevent other tranform subproperties from taking effect. */
					/* Note: You can read more about the use of mobileHA in Velocity's documentation: VelocityJS.org/#mobileHA. */
					opts.mobileHA = (opts.mobileHA && Velocity.State.isMobile && !Velocity.State.isGingerbread);

					/***********************
					 Part II: Queueing
					 ***********************/

					/* When a set of elements is targeted by a Velocity call, the set is broken up and each element has the current Velocity call individually queued onto it.
					 In this way, each element's existing queue is respected; some elements may already be animating and accordingly should not have this current Velocity call triggered immediately. */
					/* In each queue, tween data is processed for each animating property then pushed onto the call-wide calls array. When the last element in the set has had its tweens processed,
					 the call array is pushed to Velocity.State.calls for live processing by the requestAnimationFrame tick. */
					function buildQueue(next) {
						var data, lastTweensContainer;

						/*******************
						 Option: Begin
						 *******************/

						/* The begin callback is fired once per call -- not once per elemenet -- and is passed the full raw DOM element set as both its context and its first argument. */
						if (opts.begin && elementsIndex === 0) {
							/* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
							try {
								opts.begin.call(elements, elements);
							} catch (error) {
								setTimeout(function() {
									throw error;
								}, 1);
							}
						}

						/*****************************************
						 Tween Data Construction (for Scroll)
						 *****************************************/

						/* Note: In order to be subjected to chaining and animation options, scroll's tweening is routed through Velocity as if it were a standard CSS property animation. */
						if (action === "scroll") {
							/* The scroll action uniquely takes an optional "offset" option -- specified in pixels -- that offsets the targeted scroll position. */
							var scrollDirection = (/^x$/i.test(opts.axis) ? "Left" : "Top"),
									scrollOffset = parseFloat(opts.offset) || 0,
									scrollPositionCurrent,
									scrollPositionCurrentAlternate,
									scrollPositionEnd;

							/* Scroll also uniquely takes an optional "container" option, which indicates the parent element that should be scrolled --
							 as opposed to the browser window itself. This is useful for scrolling toward an element that's inside an overflowing parent element. */
							if (opts.container) {
								/* Ensure that either a jQuery object or a raw DOM element was passed in. */
								if (Type.isWrapped(opts.container) || Type.isNode(opts.container)) {
									/* Extract the raw DOM element from the jQuery wrapper. */
									opts.container = opts.container[0] || opts.container;
									/* Note: Unlike other properties in Velocity, the browser's scroll position is never cached since it so frequently changes
									 (due to the user's natural interaction with the page). */
									scrollPositionCurrent = opts.container["scroll" + scrollDirection]; /* GET */

									/* $.position() values are relative to the container's currently viewable area (without taking into account the container's true dimensions
									 -- say, for example, if the container was not overflowing). Thus, the scroll end value is the sum of the child element's position *and*
									 the scroll container's current scroll position. */
									scrollPositionEnd = (scrollPositionCurrent + $(element).position()[scrollDirection.toLowerCase()]) + scrollOffset; /* GET */
									/* If a value other than a jQuery object or a raw DOM element was passed in, default to null so that this option is ignored. */
								} else {
									opts.container = null;
								}
							} else {
								/* If the window itself is being scrolled -- not a containing element -- perform a live scroll position lookup using
								 the appropriate cached property names (which differ based on browser type). */
								scrollPositionCurrent = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + scrollDirection]]; /* GET */
								/* When scrolling the browser window, cache the alternate axis's current value since window.scrollTo() doesn't let us change only one value at a time. */
								scrollPositionCurrentAlternate = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + (scrollDirection === "Left" ? "Top" : "Left")]]; /* GET */

								/* Unlike $.position(), $.offset() values are relative to the browser window's true dimensions -- not merely its currently viewable area --
								 and therefore end values do not need to be compounded onto current values. */
								scrollPositionEnd = $(element).offset()[scrollDirection.toLowerCase()] + scrollOffset; /* GET */
							}

							/* Since there's only one format that scroll's associated tweensContainer can take, we create it manually. */
							tweensContainer = {
								scroll: {
									rootPropertyValue: false,
									startValue: scrollPositionCurrent,
									currentValue: scrollPositionCurrent,
									endValue: scrollPositionEnd,
									unitType: "",
									easing: opts.easing,
									scrollData: {
										container: opts.container,
										direction: scrollDirection,
										alternateValue: scrollPositionCurrentAlternate
									}
								},
								element: element
							};

							if (Velocity.debug) {
								console.log("tweensContainer (scroll): ", tweensContainer.scroll, element);
							}

							/******************************************
							 Tween Data Construction (for Reverse)
							 ******************************************/

							/* Reverse acts like a "start" action in that a property map is animated toward. The only difference is
							 that the property map used for reverse is the inverse of the map used in the previous call. Thus, we manipulate
							 the previous call to construct our new map: use the previous map's end values as our new map's start values. Copy over all other data. */
							/* Note: Reverse can be directly called via the "reverse" parameter, or it can be indirectly triggered via the loop option. (Loops are composed of multiple reverses.) */
							/* Note: Reverse calls do not need to be consecutively chained onto a currently-animating element in order to operate on cached values;
							 there is no harm to reverse being called on a potentially stale data cache since reverse's behavior is simply defined
							 as reverting to the element's values as they were prior to the previous *Velocity* call. */
						} else if (action === "reverse") {
							data = Data(element);

							/* Abort if there is no prior animation data to reverse to. */
							if (!data) {
								return;
							}

							if (!data.tweensContainer) {
								/* Dequeue the element so that this queue entry releases itself immediately, allowing subsequent queue entries to run. */
								$.dequeue(element, opts.queue);

								return;
							} else {
								/*********************
								 Options Parsing
								 *********************/

								/* If the element was hidden via the display option in the previous call,
								 revert display to "auto" prior to reversal so that the element is visible again. */
								if (data.opts.display === "none") {
									data.opts.display = "auto";
								}

								if (data.opts.visibility === "hidden") {
									data.opts.visibility = "visible";
								}

								/* If the loop option was set in the previous call, disable it so that "reverse" calls aren't recursively generated.
								 Further, remove the previous call's callback options; typically, users do not want these to be refired. */
								data.opts.loop = false;
								data.opts.begin = null;
								data.opts.complete = null;

								/* Since we're extending an opts object that has already been extended with the defaults options object,
								 we remove non-explicitly-defined properties that are auto-assigned values. */
								if (!options.easing) {
									delete opts.easing;
								}

								if (!options.duration) {
									delete opts.duration;
								}

								/* The opts object used for reversal is an extension of the options object optionally passed into this
								 reverse call plus the options used in the previous Velocity call. */
								opts = $.extend({}, data.opts, opts);

								/*************************************
								 Tweens Container Reconstruction
								 *************************************/

								/* Create a deepy copy (indicated via the true flag) of the previous call's tweensContainer. */
								lastTweensContainer = $.extend(true, {}, data ? data.tweensContainer : null);

								/* Manipulate the previous tweensContainer by replacing its end values and currentValues with its start values. */
								for (var lastTween in lastTweensContainer) {
									/* In addition to tween data, tweensContainers contain an element property that we ignore here. */
									if (lastTweensContainer.hasOwnProperty(lastTween) && lastTween !== "element") {
										var lastStartValue = lastTweensContainer[lastTween].startValue;

										lastTweensContainer[lastTween].startValue = lastTweensContainer[lastTween].currentValue = lastTweensContainer[lastTween].endValue;
										lastTweensContainer[lastTween].endValue = lastStartValue;

										/* Easing is the only option that embeds into the individual tween data (since it can be defined on a per-property basis).
										 Accordingly, every property's easing value must be updated when an options object is passed in with a reverse call.
										 The side effect of this extensibility is that all per-property easing values are forcefully reset to the new value. */
										if (!Type.isEmptyObject(options)) {
											lastTweensContainer[lastTween].easing = opts.easing;
										}

										if (Velocity.debug) {
											console.log("reverse tweensContainer (" + lastTween + "): " + JSON.stringify(lastTweensContainer[lastTween]), element);
										}
									}
								}

								tweensContainer = lastTweensContainer;
							}

							/*****************************************
							 Tween Data Construction (for Start)
							 *****************************************/

						} else if (action === "start") {

							/*************************
							 Value Transferring
							 *************************/

							/* If this queue entry follows a previous Velocity-initiated queue entry *and* if this entry was created
							 while the element was in the process of being animated by Velocity, then this current call is safe to use
							 the end values from the prior call as its start values. Velocity attempts to perform this value transfer
							 process whenever possible in order to avoid requerying the DOM. */
							/* If values aren't transferred from a prior call and start values were not forcefed by the user (more on this below),
							 then the DOM is queried for the element's current values as a last resort. */
							/* Note: Conversely, animation reversal (and looping) *always* perform inter-call value transfers; they never requery the DOM. */

							data = Data(element);

							/* The per-element isAnimating flag is used to indicate whether it's safe (i.e. the data isn't stale)
							 to transfer over end values to use as start values. If it's set to true and there is a previous
							 Velocity call to pull values from, do so. */
							if (data && data.tweensContainer && data.isAnimating === true) {
								lastTweensContainer = data.tweensContainer;
							}

							/***************************
							 Tween Data Calculation
							 ***************************/

							/* This function parses property data and defaults endValue, easing, and startValue as appropriate. */
							/* Property map values can either take the form of 1) a single value representing the end value,
							 or 2) an array in the form of [ endValue, [, easing] [, startValue] ].
							 The optional third parameter is a forcefed startValue to be used instead of querying the DOM for
							 the element's current value. Read Velocity's docmentation to learn more about forcefeeding: VelocityJS.org/#forcefeeding */
							var parsePropertyValue = function(valueData, skipResolvingEasing) {
								var endValue, easing, startValue;

								/* If we have a function as the main argument then resolve it first, in case it returns an array that needs to be split */
								if (Type.isFunction(valueData)) {
									valueData = valueData.call(element, elementArrayIndex, elementsLength);
								}

								/* Handle the array format, which can be structured as one of three potential overloads:
								 A) [ endValue, easing, startValue ], B) [ endValue, easing ], or C) [ endValue, startValue ] */
								if (Type.isArray(valueData)) {
									/* endValue is always the first item in the array. Don't bother validating endValue's value now
									 since the ensuing property cycling logic does that. */
									endValue = valueData[0];

									/* Two-item array format: If the second item is a number, function, or hex string, treat it as a
									 start value since easings can only be non-hex strings or arrays. */
									if ((!Type.isArray(valueData[1]) && /^[\d-]/.test(valueData[1])) || Type.isFunction(valueData[1]) || CSS.RegEx.isHex.test(valueData[1])) {
										startValue = valueData[1];
										/* Two or three-item array: If the second item is a non-hex string easing name or an array, treat it as an easing. */
									} else if ((Type.isString(valueData[1]) && !CSS.RegEx.isHex.test(valueData[1]) && Velocity.Easings[valueData[1]]) || Type.isArray(valueData[1])) {
										easing = skipResolvingEasing ? valueData[1] : getEasing(valueData[1], opts.duration);

										/* Don't bother validating startValue's value now since the ensuing property cycling logic inherently does that. */
										startValue = valueData[2];
									} else {
										startValue = valueData[1] || valueData[2];
									}
									/* Handle the single-value format. */
								} else {
									endValue = valueData;
								}

								/* Default to the call's easing if a per-property easing type was not defined. */
								if (!skipResolvingEasing) {
									easing = easing || opts.easing;
								}

								/* If functions were passed in as values, pass the function the current element as its context,
								 plus the element's index and the element set's size as arguments. Then, assign the returned value. */
								if (Type.isFunction(endValue)) {
									endValue = endValue.call(element, elementArrayIndex, elementsLength);
								}

								if (Type.isFunction(startValue)) {
									startValue = startValue.call(element, elementArrayIndex, elementsLength);
								}

								/* Allow startValue to be left as undefined to indicate to the ensuing code that its value was not forcefed. */
								return [endValue || 0, easing, startValue];
							};

							var fixPropertyValue = function(property, valueData) {
								/* In case this property is a hook, there are circumstances where we will intend to work on the hook's root property and not the hooked subproperty. */
								var rootProperty = CSS.Hooks.getRoot(property),
										rootPropertyValue = false,
										/* Parse out endValue, easing, and startValue from the property's data. */
										endValue = valueData[0],
										easing = valueData[1],
										startValue = valueData[2],
										pattern;

								/**************************
								 Start Value Sourcing
								 **************************/

								/* Other than for the dummy tween property, properties that are not supported by the browser (and do not have an associated normalization) will
								 inherently produce no style changes when set, so they are skipped in order to decrease animation tick overhead.
								 Property support is determined via prefixCheck(), which returns a false flag when no supported is detected. */
								/* Note: Since SVG elements have some of their properties directly applied as HTML attributes,
								 there is no way to check for their explicit browser support, and so we skip skip this check for them. */
								if ((!data || !data.isSVG) && rootProperty !== "tween" && CSS.Names.prefixCheck(rootProperty)[1] === false && CSS.Normalizations.registered[rootProperty] === undefined) {
									if (Velocity.debug) {
										console.log("Skipping [" + rootProperty + "] due to a lack of browser support.");
									}
									return;
								}

								/* If the display option is being set to a non-"none" (e.g. "block") and opacity (filter on IE<=8) is being
								 animated to an endValue of non-zero, the user's intention is to fade in from invisible, thus we forcefeed opacity
								 a startValue of 0 if its startValue hasn't already been sourced by value transferring or prior forcefeeding. */
								if (((opts.display !== undefined && opts.display !== null && opts.display !== "none") || (opts.visibility !== undefined && opts.visibility !== "hidden")) && /opacity|filter/.test(property) && !startValue && endValue !== 0) {
									startValue = 0;
								}

								/* If values have been transferred from the previous Velocity call, extract the endValue and rootPropertyValue
								 for all of the current call's properties that were *also* animated in the previous call. */
								/* Note: Value transferring can optionally be disabled by the user via the _cacheValues option. */
								if (opts._cacheValues && lastTweensContainer && lastTweensContainer[property]) {
									if (startValue === undefined) {
										startValue = lastTweensContainer[property].endValue + lastTweensContainer[property].unitType;
									}

									/* The previous call's rootPropertyValue is extracted from the element's data cache since that's the
									 instance of rootPropertyValue that gets freshly updated by the tweening process, whereas the rootPropertyValue
									 attached to the incoming lastTweensContainer is equal to the root property's value prior to any tweening. */
									rootPropertyValue = data.rootPropertyValueCache[rootProperty];
									/* If values were not transferred from a previous Velocity call, query the DOM as needed. */
								} else {
									/* Handle hooked properties. */
									if (CSS.Hooks.registered[property]) {
										if (startValue === undefined) {
											rootPropertyValue = CSS.getPropertyValue(element, rootProperty); /* GET */
											/* Note: The following getPropertyValue() call does not actually trigger a DOM query;
											 getPropertyValue() will extract the hook from rootPropertyValue. */
											startValue = CSS.getPropertyValue(element, property, rootPropertyValue);
											/* If startValue is already defined via forcefeeding, do not query the DOM for the root property's value;
											 just grab rootProperty's zero-value template from CSS.Hooks. This overwrites the element's actual
											 root property value (if one is set), but this is acceptable since the primary reason users forcefeed is
											 to avoid DOM queries, and thus we likewise avoid querying the DOM for the root property's value. */
										} else {
											/* Grab this hook's zero-value template, e.g. "0px 0px 0px black". */
											rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
										}
										/* Handle non-hooked properties that haven't already been defined via forcefeeding. */
									} else if (startValue === undefined) {
										startValue = CSS.getPropertyValue(element, property); /* GET */
									}
								}

								/**************************
								 Value Data Extraction
								 **************************/

								var separatedValue,
										endValueUnitType,
										startValueUnitType,
										operator = false;

								/* Separates a property value into its numeric value and its unit type. */
								var separateValue = function(property, value) {
									var unitType,
											numericValue;

									numericValue = (value || "0")
											.toString()
											.toLowerCase()
											/* Match the unit type at the end of the value. */
											.replace(/[%A-z]+$/, function(match) {
												/* Grab the unit type. */
												unitType = match;

												/* Strip the unit type off of value. */
												return "";
											});

									/* If no unit type was supplied, assign one that is appropriate for this property (e.g. "deg" for rotateZ or "px" for width). */
									if (!unitType) {
										unitType = CSS.Values.getUnitType(property);
									}

									return [numericValue, unitType];
								};

								if (startValue !== endValue && Type.isString(startValue) && Type.isString(endValue)) {
									pattern = "";
									var iStart = 0, // index in startValue
											iEnd = 0, // index in endValue
											aStart = [], // array of startValue numbers
											aEnd = [], // array of endValue numbers
											inCalc = 0, // Keep track of being inside a "calc()" so we don't duplicate it
											inRGB = 0, // Keep track of being inside an RGB as we can't use fractional values
											inRGBA = 0; // Keep track of being inside an RGBA as we must pass fractional for the alpha channel

									startValue = CSS.Hooks.fixColors(startValue);
									endValue = CSS.Hooks.fixColors(endValue);
									while (iStart < startValue.length && iEnd < endValue.length) {
										var cStart = startValue[iStart],
												cEnd = endValue[iEnd];

										if (/[\d\.-]/.test(cStart) && /[\d\.-]/.test(cEnd)) {
											var tStart = cStart, // temporary character buffer
													tEnd = cEnd, // temporary character buffer
													dotStart = ".", // Make sure we can only ever match a single dot in a decimal
													dotEnd = "."; // Make sure we can only ever match a single dot in a decimal

											while (++iStart < startValue.length) {
												cStart = startValue[iStart];
												if (cStart === dotStart) {
													dotStart = ".."; // Can never match two characters
												} else if (!/\d/.test(cStart)) {
													break;
												}
												tStart += cStart;
											}
											while (++iEnd < endValue.length) {
												cEnd = endValue[iEnd];
												if (cEnd === dotEnd) {
													dotEnd = ".."; // Can never match two characters
												} else if (!/\d/.test(cEnd)) {
													break;
												}
												tEnd += cEnd;
											}
											var uStart = CSS.Hooks.getUnit(startValue, iStart), // temporary unit type
													uEnd = CSS.Hooks.getUnit(endValue, iEnd); // temporary unit type

											iStart += uStart.length;
											iEnd += uEnd.length;
											if (uStart === uEnd) {
												// Same units
												if (tStart === tEnd) {
													// Same numbers, so just copy over
													pattern += tStart + uStart;
												} else {
													// Different numbers, so store them
													pattern += "{" + aStart.length + (inRGB ? "!" : "") + "}" + uStart;
													aStart.push(parseFloat(tStart));
													aEnd.push(parseFloat(tEnd));
												}
											} else {
												// Different units, so put into a "calc(from + to)" and animate each side to/from zero
												var nStart = parseFloat(tStart),
														nEnd = parseFloat(tEnd);

												pattern += (inCalc < 5 ? "calc" : "") + "("
														+ (nStart ? "{" + aStart.length + (inRGB ? "!" : "") + "}" : "0") + uStart
														+ " + "
														+ (nEnd ? "{" + (aStart.length + (nStart ? 1 : 0)) + (inRGB ? "!" : "") + "}" : "0") + uEnd
														+ ")";
												if (nStart) {
													aStart.push(nStart);
													aEnd.push(0);
												}
												if (nEnd) {
													aStart.push(0);
													aEnd.push(nEnd);
												}
											}
										} else if (cStart === cEnd) {
											pattern += cStart;
											iStart++;
											iEnd++;
											// Keep track of being inside a calc()
											if (inCalc === 0 && cStart === "c"
													|| inCalc === 1 && cStart === "a"
													|| inCalc === 2 && cStart === "l"
													|| inCalc === 3 && cStart === "c"
													|| inCalc >= 4 && cStart === "("
													) {
												inCalc++;
											} else if ((inCalc && inCalc < 5)
													|| inCalc >= 4 && cStart === ")" && --inCalc < 5) {
												inCalc = 0;
											}
											// Keep track of being inside an rgb() / rgba()
											if (inRGB === 0 && cStart === "r"
													|| inRGB === 1 && cStart === "g"
													|| inRGB === 2 && cStart === "b"
													|| inRGB === 3 && cStart === "a"
													|| inRGB >= 3 && cStart === "("
													) {
												if (inRGB === 3 && cStart === "a") {
													inRGBA = 1;
												}
												inRGB++;
											} else if (inRGBA && cStart === ",") {
												if (++inRGBA > 3) {
													inRGB = inRGBA = 0;
												}
											} else if ((inRGBA && inRGB < (inRGBA ? 5 : 4))
													|| inRGB >= (inRGBA ? 4 : 3) && cStart === ")" && --inRGB < (inRGBA ? 5 : 4)) {
												inRGB = inRGBA = 0;
											}
										} else {
											inCalc = 0;
											// TODO: changing units, fixing colours
											break;
										}
									}
									if (iStart !== startValue.length || iEnd !== endValue.length) {
										if (Velocity.debug) {
											console.error("Trying to pattern match mis-matched strings [\"" + endValue + "\", \"" + startValue + "\"]");
										}
										pattern = undefined;
									}
									if (pattern) {
										if (aStart.length) {
											if (Velocity.debug) {
												console.log("Pattern found \"" + pattern + "\" -> ", aStart, aEnd, "[" + startValue + "," + endValue + "]");
											}
											startValue = aStart;
											endValue = aEnd;
											endValueUnitType = startValueUnitType = "";
										} else {
											pattern = undefined;
										}
									}
								}

								if (!pattern) {
									/* Separate startValue. */
									separatedValue = separateValue(property, startValue);
									startValue = separatedValue[0];
									startValueUnitType = separatedValue[1];

									/* Separate endValue, and extract a value operator (e.g. "+=", "-=") if one exists. */
									separatedValue = separateValue(property, endValue);
									endValue = separatedValue[0].replace(/^([+-\/*])=/, function(match, subMatch) {
										operator = subMatch;

										/* Strip the operator off of the value. */
										return "";
									});
									endValueUnitType = separatedValue[1];

									/* Parse float values from endValue and startValue. Default to 0 if NaN is returned. */
									startValue = parseFloat(startValue) || 0;
									endValue = parseFloat(endValue) || 0;

									/***************************************
									 Property-Specific Value Conversion
									 ***************************************/

									/* Custom support for properties that don't actually accept the % unit type, but where pollyfilling is trivial and relatively foolproof. */
									if (endValueUnitType === "%") {
										/* A %-value fontSize/lineHeight is relative to the parent's fontSize (as opposed to the parent's dimensions),
										 which is identical to the em unit's behavior, so we piggyback off of that. */
										if (/^(fontSize|lineHeight)$/.test(property)) {
											/* Convert % into an em decimal value. */
											endValue = endValue / 100;
											endValueUnitType = "em";
											/* For scaleX and scaleY, convert the value into its decimal format and strip off the unit type. */
										} else if (/^scale/.test(property)) {
											endValue = endValue / 100;
											endValueUnitType = "";
											/* For RGB components, take the defined percentage of 255 and strip off the unit type. */
										} else if (/(Red|Green|Blue)$/i.test(property)) {
											endValue = (endValue / 100) * 255;
											endValueUnitType = "";
										}
									}
								}

								/***************************
								 Unit Ratio Calculation
								 ***************************/

								/* When queried, the browser returns (most) CSS property values in pixels. Therefore, if an endValue with a unit type of
								 %, em, or rem is animated toward, startValue must be converted from pixels into the same unit type as endValue in order
								 for value manipulation logic (increment/decrement) to proceed. Further, if the startValue was forcefed or transferred
								 from a previous call, startValue may also not be in pixels. Unit conversion logic therefore consists of two steps:
								 1) Calculating the ratio of %/em/rem/vh/vw relative to pixels
								 2) Converting startValue into the same unit of measurement as endValue based on these ratios. */
								/* Unit conversion ratios are calculated by inserting a sibling node next to the target node, copying over its position property,
								 setting values with the target unit type then comparing the returned pixel value. */
								/* Note: Even if only one of these unit types is being animated, all unit ratios are calculated at once since the overhead
								 of batching the SETs and GETs together upfront outweights the potential overhead
								 of layout thrashing caused by re-querying for uncalculated ratios for subsequently-processed properties. */
								/* Todo: Shift this logic into the calls' first tick instance so that it's synced with RAF. */
								var calculateUnitRatios = function() {

									/************************
									 Same Ratio Checks
									 ************************/

									/* The properties below are used to determine whether the element differs sufficiently from this call's
									 previously iterated element to also differ in its unit conversion ratios. If the properties match up with those
									 of the prior element, the prior element's conversion ratios are used. Like most optimizations in Velocity,
									 this is done to minimize DOM querying. */
									var sameRatioIndicators = {
										myParent: element.parentNode || document.body, /* GET */
										position: CSS.getPropertyValue(element, "position"), /* GET */
										fontSize: CSS.getPropertyValue(element, "fontSize") /* GET */
									},
											/* Determine if the same % ratio can be used. % is based on the element's position value and its parent's width and height dimensions. */
											samePercentRatio = ((sameRatioIndicators.position === callUnitConversionData.lastPosition) && (sameRatioIndicators.myParent === callUnitConversionData.lastParent)),
											/* Determine if the same em ratio can be used. em is relative to the element's fontSize. */
											sameEmRatio = (sameRatioIndicators.fontSize === callUnitConversionData.lastFontSize);

									/* Store these ratio indicators call-wide for the next element to compare against. */
									callUnitConversionData.lastParent = sameRatioIndicators.myParent;
									callUnitConversionData.lastPosition = sameRatioIndicators.position;
									callUnitConversionData.lastFontSize = sameRatioIndicators.fontSize;

									/***************************
									 Element-Specific Units
									 ***************************/

									/* Note: IE8 rounds to the nearest pixel when returning CSS values, thus we perform conversions using a measurement
									 of 100 (instead of 1) to give our ratios a precision of at least 2 decimal values. */
									var measurement = 100,
											unitRatios = {};

									if (!sameEmRatio || !samePercentRatio) {
										var dummy = data && data.isSVG ? document.createElementNS("http://www.w3.org/2000/svg", "rect") : document.createElement("div");

										Velocity.init(dummy);
										sameRatioIndicators.myParent.appendChild(dummy);

										/* To accurately and consistently calculate conversion ratios, the element's cascaded overflow and box-sizing are stripped.
										 Similarly, since width/height can be artificially constrained by their min-/max- equivalents, these are controlled for as well. */
										/* Note: Overflow must be also be controlled for per-axis since the overflow property overwrites its per-axis values. */
										$.each(["overflow", "overflowX", "overflowY"], function(i, property) {
											Velocity.CSS.setPropertyValue(dummy, property, "hidden");
										});
										Velocity.CSS.setPropertyValue(dummy, "position", sameRatioIndicators.position);
										Velocity.CSS.setPropertyValue(dummy, "fontSize", sameRatioIndicators.fontSize);
										Velocity.CSS.setPropertyValue(dummy, "boxSizing", "content-box");

										/* width and height act as our proxy properties for measuring the horizontal and vertical % ratios. */
										$.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(i, property) {
											Velocity.CSS.setPropertyValue(dummy, property, measurement + "%");
										});
										/* paddingLeft arbitrarily acts as our proxy property for the em ratio. */
										Velocity.CSS.setPropertyValue(dummy, "paddingLeft", measurement + "em");

										/* Divide the returned value by the measurement to get the ratio between 1% and 1px. Default to 1 since working with 0 can produce Infinite. */
										unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth = (parseFloat(CSS.getPropertyValue(dummy, "width", null, true)) || 1) / measurement; /* GET */
										unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight = (parseFloat(CSS.getPropertyValue(dummy, "height", null, true)) || 1) / measurement; /* GET */
										unitRatios.emToPx = callUnitConversionData.lastEmToPx = (parseFloat(CSS.getPropertyValue(dummy, "paddingLeft")) || 1) / measurement; /* GET */

										sameRatioIndicators.myParent.removeChild(dummy);
									} else {
										unitRatios.emToPx = callUnitConversionData.lastEmToPx;
										unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth;
										unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight;
									}

									/***************************
									 Element-Agnostic Units
									 ***************************/

									/* Whereas % and em ratios are determined on a per-element basis, the rem unit only needs to be checked
									 once per call since it's exclusively dependant upon document.body's fontSize. If this is the first time
									 that calculateUnitRatios() is being run during this call, remToPx will still be set to its default value of null,
									 so we calculate it now. */
									if (callUnitConversionData.remToPx === null) {
										/* Default to browsers' default fontSize of 16px in the case of 0. */
										callUnitConversionData.remToPx = parseFloat(CSS.getPropertyValue(document.body, "fontSize")) || 16; /* GET */
									}

									/* Similarly, viewport units are %-relative to the window's inner dimensions. */
									if (callUnitConversionData.vwToPx === null) {
										callUnitConversionData.vwToPx = parseFloat(window.innerWidth) / 100; /* GET */
										callUnitConversionData.vhToPx = parseFloat(window.innerHeight) / 100; /* GET */
									}

									unitRatios.remToPx = callUnitConversionData.remToPx;
									unitRatios.vwToPx = callUnitConversionData.vwToPx;
									unitRatios.vhToPx = callUnitConversionData.vhToPx;

									if (Velocity.debug >= 1) {
										console.log("Unit ratios: " + JSON.stringify(unitRatios), element);
									}
									return unitRatios;
								};

								/********************
								 Unit Conversion
								 ********************/

								/* The * and / operators, which are not passed in with an associated unit, inherently use startValue's unit. Skip value and unit conversion. */
								if (/[\/*]/.test(operator)) {
									endValueUnitType = startValueUnitType;
									/* If startValue and endValue differ in unit type, convert startValue into the same unit type as endValue so that if endValueUnitType
									 is a relative unit (%, em, rem), the values set during tweening will continue to be accurately relative even if the metrics they depend
									 on are dynamically changing during the course of the animation. Conversely, if we always normalized into px and used px for setting values, the px ratio
									 would become stale if the original unit being animated toward was relative and the underlying metrics change during the animation. */
									/* Since 0 is 0 in any unit type, no conversion is necessary when startValue is 0 -- we just start at 0 with endValueUnitType. */
								} else if ((startValueUnitType !== endValueUnitType) && startValue !== 0) {
									/* Unit conversion is also skipped when endValue is 0, but *startValueUnitType* must be used for tween values to remain accurate. */
									/* Note: Skipping unit conversion here means that if endValueUnitType was originally a relative unit, the animation won't relatively
									 match the underlying metrics if they change, but this is acceptable since we're animating toward invisibility instead of toward visibility,
									 which remains past the point of the animation's completion. */
									if (endValue === 0) {
										endValueUnitType = startValueUnitType;
									} else {
										/* By this point, we cannot avoid unit conversion (it's undesirable since it causes layout thrashing).
										 If we haven't already, we trigger calculateUnitRatios(), which runs once per element per call. */
										elementUnitConversionData = elementUnitConversionData || calculateUnitRatios();

										/* The following RegEx matches CSS properties that have their % values measured relative to the x-axis. */
										/* Note: W3C spec mandates that all of margin and padding's properties (even top and bottom) are %-relative to the *width* of the parent element. */
										var axis = (/margin|padding|left|right|width|text|word|letter/i.test(property) || /X$/.test(property) || property === "x") ? "x" : "y";

										/* In order to avoid generating n^2 bespoke conversion functions, unit conversion is a two-step process:
										 1) Convert startValue into pixels. 2) Convert this new pixel value into endValue's unit type. */
										switch (startValueUnitType) {
											case "%":
												/* Note: translateX and translateY are the only properties that are %-relative to an element's own dimensions -- not its parent's dimensions.
												 Velocity does not include a special conversion process to account for this behavior. Therefore, animating translateX/Y from a % value
												 to a non-% value will produce an incorrect start value. Fortunately, this sort of cross-unit conversion is rarely done by users in practice. */
												startValue *= (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
												break;

											case "px":
												/* px acts as our midpoint in the unit conversion process; do nothing. */
												break;

											default:
												startValue *= elementUnitConversionData[startValueUnitType + "ToPx"];
										}

										/* Invert the px ratios to convert into to the target unit. */
										switch (endValueUnitType) {
											case "%":
												startValue *= 1 / (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
												break;

											case "px":
												/* startValue is already in px, do nothing; we're done. */
												break;

											default:
												startValue *= 1 / elementUnitConversionData[endValueUnitType + "ToPx"];
										}
									}
								}

								/*********************
								 Relative Values
								 *********************/

								/* Operator logic must be performed last since it requires unit-normalized start and end values. */
								/* Note: Relative *percent values* do not behave how most people think; while one would expect "+=50%"
								 to increase the property 1.5x its current value, it in fact increases the percent units in absolute terms:
								 50 points is added on top of the current % value. */
								switch (operator) {
									case "+":
										endValue = startValue + endValue;
										break;

									case "-":
										endValue = startValue - endValue;
										break;

									case "*":
										endValue = startValue * endValue;
										break;

									case "/":
										endValue = startValue / endValue;
										break;
								}

								/**************************
								 tweensContainer Push
								 **************************/

								/* Construct the per-property tween object, and push it to the element's tweensContainer. */
								tweensContainer[property] = {
									rootPropertyValue: rootPropertyValue,
									startValue: startValue,
									currentValue: startValue,
									endValue: endValue,
									unitType: endValueUnitType,
									easing: easing
								};
								if (pattern) {
									tweensContainer[property].pattern = pattern;
								}

								if (Velocity.debug) {
									console.log("tweensContainer (" + property + "): " + JSON.stringify(tweensContainer[property]), element);
								}
							};

							/* Create a tween out of each property, and append its associated data to tweensContainer. */
							for (var property in propertiesMap) {

								if (!propertiesMap.hasOwnProperty(property)) {
									continue;
								}
								/* The original property name's format must be used for the parsePropertyValue() lookup,
								 but we then use its camelCase styling to normalize it for manipulation. */
								var propertyName = CSS.Names.camelCase(property),
										valueData = parsePropertyValue(propertiesMap[property]);

								/* Find shorthand color properties that have been passed a hex string. */
								/* Would be quicker to use CSS.Lists.colors.includes() if possible */
								if (_inArray(CSS.Lists.colors, propertyName)) {
									/* Parse the value data for each shorthand. */
									var endValue = valueData[0],
											easing = valueData[1],
											startValue = valueData[2];

									if (CSS.RegEx.isHex.test(endValue)) {
										/* Convert the hex strings into their RGB component arrays. */
										var colorComponents = ["Red", "Green", "Blue"],
												endValueRGB = CSS.Values.hexToRgb(endValue),
												startValueRGB = startValue ? CSS.Values.hexToRgb(startValue) : undefined;

										/* Inject the RGB component tweens into propertiesMap. */
										for (var i = 0; i < colorComponents.length; i++) {
											var dataArray = [endValueRGB[i]];

											if (easing) {
												dataArray.push(easing);
											}

											if (startValueRGB !== undefined) {
												dataArray.push(startValueRGB[i]);
											}

											fixPropertyValue(propertyName + colorComponents[i], dataArray);
										}
										/* If we have replaced a shortcut color value then don't update the standard property name */
										continue;
									}
								}
								fixPropertyValue(propertyName, valueData);
							}

							/* Along with its property data, store a reference to the element itself onto tweensContainer. */
							tweensContainer.element = element;
						}

						/*****************
						 Call Push
						 *****************/

						/* Note: tweensContainer can be empty if all of the properties in this call's property map were skipped due to not
						 being supported by the browser. The element property is used for checking that the tweensContainer has been appended to. */
						if (tweensContainer.element) {
							/* Apply the "velocity-animating" indicator class. */
							CSS.Values.addClass(element, "velocity-animating");

							/* The call array houses the tweensContainers for each element being animated in the current call. */
							call.push(tweensContainer);

							data = Data(element);

							if (data) {
								/* Store the tweensContainer and options if we're working on the default effects queue, so that they can be used by the reverse command. */
								if (opts.queue === "") {

									data.tweensContainer = tweensContainer;
									data.opts = opts;
								}

								/* Switch on the element's animating flag. */
								data.isAnimating = true;
							}

							/* Once the final element in this call's element set has been processed, push the call array onto
							 Velocity.State.calls for the animation tick to immediately begin processing. */
							if (elementsIndex === elementsLength - 1) {
								/* Add the current call plus its associated metadata (the element set and the call's options) onto the global call container.
								 Anything on this call container is subjected to tick() processing. */
								Velocity.State.calls.push([call, elements, opts, null, promiseData.resolver, null, 0]);

								/* If the animation tick isn't running, start it. (Velocity shuts it off when there are no active calls to process.) */
								if (Velocity.State.isTicking === false) {
									Velocity.State.isTicking = true;

									/* Start the tick loop. */
									tick();
								}
							} else {
								elementsIndex++;
							}
						}
					}

					/* When the queue option is set to false, the call skips the element's queue and fires immediately. */
					if (opts.queue === false) {
						/* Since this buildQueue call doesn't respect the element's existing queue (which is where a delay option would have been appended),
						 we manually inject the delay property here with an explicit setTimeout. */
						if (opts.delay) {

							/* Temporarily store delayed elements to facilitate access for global pause/resume */
							var callIndex = Velocity.State.delayedElements.count++;
							Velocity.State.delayedElements[callIndex] = element;

							var delayComplete = (function(index) {
								return function() {
									/* Clear the temporary element */
									Velocity.State.delayedElements[index] = false;

									/* Finally, issue the call */
									buildQueue();
								};
							})(callIndex);

							Data(element).delayBegin = (new Date()).getTime();
							Data(element).delay = parseFloat(opts.delay);
							Data(element).delayTimer = {
								setTimeout: setTimeout(buildQueue, parseFloat(opts.delay)),
								next: delayComplete
							};
						} else {
							buildQueue();
						}
						/* Otherwise, the call undergoes element queueing as normal. */
						/* Note: To interoperate with jQuery, Velocity uses jQuery's own $.queue() stack for queuing logic. */
					} else {
						$.queue(element, opts.queue, function(next, clearQueue) {
							/* If the clearQueue flag was passed in by the stop command, resolve this call's promise. (Promises can only be resolved once,
							 so it's fine if this is repeatedly triggered for each element in the associated call.) */
							if (clearQueue === true) {
								if (promiseData.promise) {
									promiseData.resolver(elements);
								}

								/* Do not continue with animation queueing. */
								return true;
							}

							/* This flag indicates to the upcoming completeCall() function that this queue entry was initiated by Velocity.
							 See completeCall() for further details. */
							Velocity.velocityQueueEntryFlag = true;

							buildQueue(next);
						});
					}

					/*********************
					 Auto-Dequeuing
					 *********************/

					/* As per jQuery's $.queue() behavior, to fire the first non-custom-queue entry on an element, the element
					 must be dequeued if its queue stack consists *solely* of the current call. (This can be determined by checking
					 for the "inprogress" item that jQuery prepends to active queue stack arrays.) Regardless, whenever the element's
					 queue is further appended with additional items -- including $.delay()'s or even $.animate() calls, the queue's
					 first entry is automatically fired. This behavior contrasts that of custom queues, which never auto-fire. */
					/* Note: When an element set is being subjected to a non-parallel Velocity call, the animation will not begin until
					 each one of the elements in the set has reached the end of its individually pre-existing queue chain. */
					/* Note: Unfortunately, most people don't fully grasp jQuery's powerful, yet quirky, $.queue() function.
					 Lean more here: http://stackoverflow.com/questions/1058158/can-somebody-explain-jquery-queue-to-me */
					if ((opts.queue === "" || opts.queue === "fx") && $.queue(element)[0] !== "inprogress") {
						$.dequeue(element);
					}
				}

				/**************************
				 Element Set Iteration
				 **************************/

				/* If the "nodeType" property exists on the elements variable, we're animating a single element.
				 Place it in an array so that $.each() can iterate over it. */
				$.each(elements, function(i, element) {
					/* Ensure each element in a set has a nodeType (is a real element) to avoid throwing errors. */
					if (Type.isNode(element)) {
						processElement(element, i);
					}
				});

				/******************
				 Option: Loop
				 ******************/

				/* The loop option accepts an integer indicating how many times the element should loop between the values in the
				 current call's properties map and the element's property values prior to this call. */
				/* Note: The loop option's logic is performed here -- after element processing -- because the current call needs
				 to undergo its queue insertion prior to the loop option generating its series of constituent "reverse" calls,
				 which chain after the current call. Two reverse calls (two "alternations") constitute one loop. */
				opts = $.extend({}, Velocity.defaults, options);
				opts.loop = parseInt(opts.loop, 10);
				var reverseCallsCount = (opts.loop * 2) - 1;

				if (opts.loop) {
					/* Double the loop count to convert it into its appropriate number of "reverse" calls.
					 Subtract 1 from the resulting value since the current call is included in the total alternation count. */
					for (var x = 0; x < reverseCallsCount; x++) {
						/* Since the logic for the reverse action occurs inside Queueing and therefore this call's options object
						 isn't parsed until then as well, the current call's delay option must be explicitly passed into the reverse
						 call so that the delay logic that occurs inside *Pre-Queueing* can process it. */
						var reverseOptions = {
							delay: opts.delay,
							progress: opts.progress
						};

						/* If a complete callback was passed into this call, transfer it to the loop redirect's final "reverse" call
						 so that it's triggered when the entire redirect is complete (and not when the very first animation is complete). */
						if (x === reverseCallsCount - 1) {
							reverseOptions.display = opts.display;
							reverseOptions.visibility = opts.visibility;
							reverseOptions.complete = opts.complete;
						}

						animate(elements, "reverse", reverseOptions);
					}
				}

				/***************
				 Chaining
				 ***************/

				/* Return the elements back to the call chain, with wrapped elements taking precedence in case Velocity was called via the $.fn. extension. */
				return getChain();
			};

			/* Turn Velocity into the animation function, extended with the pre-existing Velocity object. */
			Velocity = $.extend(animate, Velocity);
			/* For legacy support, also expose the literal animate method. */
			Velocity.animate = animate;

			/**************
			 Timing
			 **************/

			/* Ticker function. */
			var ticker = window.requestAnimationFrame || rAFShim;

			/* Inactive browser tabs pause rAF, which results in all active animations immediately sprinting to their completion states when the tab refocuses.
			 To get around this, we dynamically switch rAF to setTimeout (which the browser *doesn't* pause) when the tab loses focus. We skip this for mobile
			 devices to avoid wasting battery power on inactive tabs. */
			/* Note: Tab focus detection doesn't work on older versions of IE, but that's okay since they don't support rAF to begin with. */
			if (!Velocity.State.isMobile && document.hidden !== undefined) {
				var updateTicker = function() {
					/* Reassign the rAF function (which the global tick() function uses) based on the tab's focus state. */
					if (document.hidden) {
						ticker = function(callback) {
							/* The tick function needs a truthy first argument in order to pass its internal timestamp check. */
							return setTimeout(function() {
								callback(true);
							}, 16);
						};

						/* The rAF loop has been paused by the browser, so we manually restart the tick. */
						tick();
					} else {
						ticker = window.requestAnimationFrame || rAFShim;
					}
				};

				/* Page could be sitting in the background at this time (i.e. opened as new tab) so making sure we use correct ticker from the start */
				updateTicker();

				/* And then run check again every time visibility changes */
				document.addEventListener("visibilitychange", updateTicker);
			}

			/************
			 Tick
			 ************/

			/* Note: All calls to Velocity are pushed to the Velocity.State.calls array, which is fully iterated through upon each tick. */
			function tick(timestamp) {
				/* An empty timestamp argument indicates that this is the first tick occurence since ticking was turned on.
				 We leverage this metadata to fully ignore the first tick pass since RAF's initial pass is fired whenever
				 the browser's next tick sync time occurs, which results in the first elements subjected to Velocity
				 calls being animated out of sync with any elements animated immediately thereafter. In short, we ignore
				 the first RAF tick pass so that elements being immediately consecutively animated -- instead of simultaneously animated
				 by the same Velocity call -- are properly batched into the same initial RAF tick and consequently remain in sync thereafter. */
				if (timestamp) {
					/* We normally use RAF's high resolution timestamp but as it can be significantly offset when the browser is
					 under high stress we give the option for choppiness over allowing the browser to drop huge chunks of frames.
					 We use performance.now() and shim it if it doesn't exist for when the tab is hidden. */
					var timeCurrent = Velocity.timestamp && timestamp !== true ? timestamp : performance.now();

					/********************
					 Call Iteration
					 ********************/

					var callsLength = Velocity.State.calls.length;

					/* To speed up iterating over this array, it is compacted (falsey items -- calls that have completed -- are removed)
					 when its length has ballooned to a point that can impact tick performance. This only becomes necessary when animation
					 has been continuous with many elements over a long period of time; whenever all active calls are completed, completeCall() clears Velocity.State.calls. */
					if (callsLength > 10000) {
						Velocity.State.calls = compactSparseArray(Velocity.State.calls);
						callsLength = Velocity.State.calls.length;
					}

					/* Iterate through each active call. */
					for (var i = 0; i < callsLength; i++) {
						/* When a Velocity call is completed, its Velocity.State.calls entry is set to false. Continue on to the next call. */
						if (!Velocity.State.calls[i]) {
							continue;
						}

						/************************
						 Call-Wide Variables
						 ************************/

						var callContainer = Velocity.State.calls[i],
								call = callContainer[0],
								opts = callContainer[2],
								timeStart = callContainer[3],
								firstTick = !!timeStart,
								tweenDummyValue = null,
								pauseObject = callContainer[5],
								millisecondsEllapsed = callContainer[6];



						/* If timeStart is undefined, then this is the first time that this call has been processed by tick().
						 We assign timeStart now so that its value is as close to the real animation start time as possible.
						 (Conversely, had timeStart been defined when this call was added to Velocity.State.calls, the delay
						 between that time and now would cause the first few frames of the tween to be skipped since
						 percentComplete is calculated relative to timeStart.) */
						/* Further, subtract 16ms (the approximate resolution of RAF) from the current time value so that the
						 first tick iteration isn't wasted by animating at 0% tween completion, which would produce the
						 same style value as the element's current value. */
						if (!timeStart) {
							timeStart = Velocity.State.calls[i][3] = timeCurrent - 16;
						}

						/* If a pause object is present, skip processing unless it has been set to resume */
						if (pauseObject) {
							if (pauseObject.resume === true) {
								/* Update the time start to accomodate the paused completion amount */
								timeStart = callContainer[3] = Math.round(timeCurrent - millisecondsEllapsed - 16);

								/* Remove pause object after processing */
								callContainer[5] = null;
							} else {
								continue;
							}
						}

						millisecondsEllapsed = callContainer[6] = timeCurrent - timeStart;

						/* The tween's completion percentage is relative to the tween's start time, not the tween's start value
						 (which would result in unpredictable tween durations since JavaScript's timers are not particularly accurate).
						 Accordingly, we ensure that percentComplete does not exceed 1. */
						var percentComplete = Math.min((millisecondsEllapsed) / opts.duration, 1);

						/**********************
						 Element Iteration
						 **********************/

						/* For every call, iterate through each of the elements in its set. */
						for (var j = 0, callLength = call.length; j < callLength; j++) {
							var tweensContainer = call[j],
									element = tweensContainer.element;

							/* Check to see if this element has been deleted midway through the animation by checking for the
							 continued existence of its data cache. If it's gone, or the element is currently paused, skip animating this element. */
							if (!Data(element)) {
								continue;
							}

							var transformPropertyExists = false;

							/**********************************
							 Display & Visibility Toggling
							 **********************************/

							/* If the display option is set to non-"none", set it upfront so that the element can become visible before tweening begins.
							 (Otherwise, display's "none" value is set in completeCall() once the animation has completed.) */
							if (opts.display !== undefined && opts.display !== null && opts.display !== "none") {
								if (opts.display === "flex") {
									var flexValues = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];

									$.each(flexValues, function(i, flexValue) {
										CSS.setPropertyValue(element, "display", flexValue);
									});
								}

								CSS.setPropertyValue(element, "display", opts.display);
							}

							/* Same goes with the visibility option, but its "none" equivalent is "hidden". */
							if (opts.visibility !== undefined && opts.visibility !== "hidden") {
								CSS.setPropertyValue(element, "visibility", opts.visibility);
							}

							/************************
							 Property Iteration
							 ************************/

							/* For every element, iterate through each property. */
							for (var property in tweensContainer) {
								/* Note: In addition to property tween data, tweensContainer contains a reference to its associated element. */
								if (tweensContainer.hasOwnProperty(property) && property !== "element") {
									var tween = tweensContainer[property],
											currentValue,
											/* Easing can either be a pre-genereated function or a string that references a pre-registered easing
											 on the Velocity.Easings object. In either case, return the appropriate easing *function*. */
											easing = Type.isString(tween.easing) ? Velocity.Easings[tween.easing] : tween.easing;

									/******************************
									 Current Value Calculation
									 ******************************/

									if (Type.isString(tween.pattern)) {
										var patternReplace = percentComplete === 1 ?
												function($0, index, round) {
													var result = tween.endValue[index];

													return round ? Math.round(result) : result;
												} :
												function($0, index, round) {
													var startValue = tween.startValue[index],
															tweenDelta = tween.endValue[index] - startValue,
															result = startValue + (tweenDelta * easing(percentComplete, opts, tweenDelta));

													return round ? Math.round(result) : result;
												};

										currentValue = tween.pattern.replace(/{(\d+)(!)?}/g, patternReplace);
									} else if (percentComplete === 1) {
										/* If this is the last tick pass (if we've reached 100% completion for this tween),
										 ensure that currentValue is explicitly set to its target endValue so that it's not subjected to any rounding. */
										currentValue = tween.endValue;
									} else {
										/* Otherwise, calculate currentValue based on the current delta from startValue. */
										var tweenDelta = tween.endValue - tween.startValue;

										currentValue = tween.startValue + (tweenDelta * easing(percentComplete, opts, tweenDelta));
										/* If no value change is occurring, don't proceed with DOM updating. */
									}
									if (!firstTick && (currentValue === tween.currentValue)) {
										continue;
									}

									tween.currentValue = currentValue;

									/* If we're tweening a fake 'tween' property in order to log transition values, update the one-per-call variable so that
									 it can be passed into the progress callback. */
									if (property === "tween") {
										tweenDummyValue = currentValue;
									} else {
										/******************
										 Hooks: Part I
										 ******************/
										var hookRoot;

										/* For hooked properties, the newly-updated rootPropertyValueCache is cached onto the element so that it can be used
										 for subsequent hooks in this call that are associated with the same root property. If we didn't cache the updated
										 rootPropertyValue, each subsequent update to the root property in this tick pass would reset the previous hook's
										 updates to rootPropertyValue prior to injection. A nice performance byproduct of rootPropertyValue caching is that
										 subsequently chained animations using the same hookRoot but a different hook can use this cached rootPropertyValue. */
										if (CSS.Hooks.registered[property]) {
											hookRoot = CSS.Hooks.getRoot(property);

											var rootPropertyValueCache = Data(element).rootPropertyValueCache[hookRoot];

											if (rootPropertyValueCache) {
												tween.rootPropertyValue = rootPropertyValueCache;
											}
										}

										/*****************
										 DOM Update
										 *****************/

										/* setPropertyValue() returns an array of the property name and property value post any normalization that may have been performed. */
										/* Note: To solve an IE<=8 positioning bug, the unit type is dropped when setting a property value of 0. */
										var adjustedSetData = CSS.setPropertyValue(element, /* SET */
												property,
												tween.currentValue + (IE < 9 && parseFloat(currentValue) === 0 ? "" : tween.unitType),
												tween.rootPropertyValue,
												tween.scrollData);

										/*******************
										 Hooks: Part II
										 *******************/

										/* Now that we have the hook's updated rootPropertyValue (the post-processed value provided by adjustedSetData), cache it onto the element. */
										if (CSS.Hooks.registered[property]) {
											/* Since adjustedSetData contains normalized data ready for DOM updating, the rootPropertyValue needs to be re-extracted from its normalized form. ?? */
											if (CSS.Normalizations.registered[hookRoot]) {
												Data(element).rootPropertyValueCache[hookRoot] = CSS.Normalizations.registered[hookRoot]("extract", null, adjustedSetData[1]);
											} else {
												Data(element).rootPropertyValueCache[hookRoot] = adjustedSetData[1];
											}
										}

										/***************
										 Transforms
										 ***************/

										/* Flag whether a transform property is being animated so that flushTransformCache() can be triggered once this tick pass is complete. */
										if (adjustedSetData[0] === "transform") {
											transformPropertyExists = true;
										}

									}
								}
							}

							/****************
							 mobileHA
							 ****************/

							/* If mobileHA is enabled, set the translate3d transform to null to force hardware acceleration.
							 It's safe to override this property since Velocity doesn't actually support its animation (hooks are used in its place). */
							if (opts.mobileHA) {
								/* Don't set the null transform hack if we've already done so. */
								if (Data(element).transformCache.translate3d === undefined) {
									/* All entries on the transformCache object are later concatenated into a single transform string via flushTransformCache(). */
									Data(element).transformCache.translate3d = "(0px, 0px, 0px)";

									transformPropertyExists = true;
								}
							}

							if (transformPropertyExists) {
								CSS.flushTransformCache(element);
							}
						}

						/* The non-"none" display value is only applied to an element once -- when its associated call is first ticked through.
						 Accordingly, it's set to false so that it isn't re-processed by this call in the next tick. */
						if (opts.display !== undefined && opts.display !== "none") {
							Velocity.State.calls[i][2].display = false;
						}
						if (opts.visibility !== undefined && opts.visibility !== "hidden") {
							Velocity.State.calls[i][2].visibility = false;
						}

						/* Pass the elements and the timing data (percentComplete, msRemaining, timeStart, tweenDummyValue) into the progress callback. */
						if (opts.progress) {
							opts.progress.call(callContainer[1],
									callContainer[1],
									percentComplete,
									Math.max(0, (timeStart + opts.duration) - timeCurrent),
									timeStart,
									tweenDummyValue);
						}

						/* If this call has finished tweening, pass its index to completeCall() to handle call cleanup. */
						if (percentComplete === 1) {
							completeCall(i);
						}
					}
				}

				/* Note: completeCall() sets the isTicking flag to false when the last call on Velocity.State.calls has completed. */
				if (Velocity.State.isTicking) {
					ticker(tick);
				}
			}

			/**********************
			 Call Completion
			 **********************/

			/* Note: Unlike tick(), which processes all active calls at once, call completion is handled on a per-call basis. */
			function completeCall(callIndex, isStopped) {
				/* Ensure the call exists. */
				if (!Velocity.State.calls[callIndex]) {
					return false;
				}

				/* Pull the metadata from the call. */
				var call = Velocity.State.calls[callIndex][0],
						elements = Velocity.State.calls[callIndex][1],
						opts = Velocity.State.calls[callIndex][2],
						resolver = Velocity.State.calls[callIndex][4];

				var remainingCallsExist = false;

				/*************************
				 Element Finalization
				 *************************/

				for (var i = 0, callLength = call.length; i < callLength; i++) {
					var element = call[i].element;

					/* If the user set display to "none" (intending to hide the element), set it now that the animation has completed. */
					/* Note: display:none isn't set when calls are manually stopped (via Velocity("stop"). */
					/* Note: Display gets ignored with "reverse" calls and infinite loops, since this behavior would be undesirable. */
					if (!isStopped && !opts.loop) {
						if (opts.display === "none") {
							CSS.setPropertyValue(element, "display", opts.display);
						}

						if (opts.visibility === "hidden") {
							CSS.setPropertyValue(element, "visibility", opts.visibility);
						}
					}

					/* If the element's queue is empty (if only the "inprogress" item is left at position 0) or if its queue is about to run
					 a non-Velocity-initiated entry, turn off the isAnimating flag. A non-Velocity-initiatied queue entry's logic might alter
					 an element's CSS values and thereby cause Velocity's cached value data to go stale. To detect if a queue entry was initiated by Velocity,
					 we check for the existence of our special Velocity.queueEntryFlag declaration, which minifiers won't rename since the flag
					 is assigned to jQuery's global $ object and thus exists out of Velocity's own scope. */
					var data = Data(element);

					if (opts.loop !== true && ($.queue(element)[1] === undefined || !/\.velocityQueueEntryFlag/i.test($.queue(element)[1]))) {
						/* The element may have been deleted. Ensure that its data cache still exists before acting on it. */
						if (data) {
							data.isAnimating = false;
							/* Clear the element's rootPropertyValueCache, which will become stale. */
							data.rootPropertyValueCache = {};

							var transformHAPropertyExists = false;
							/* If any 3D transform subproperty is at its default value (regardless of unit type), remove it. */
							$.each(CSS.Lists.transforms3D, function(i, transformName) {
								var defaultValue = /^scale/.test(transformName) ? 1 : 0,
										currentValue = data.transformCache[transformName];

								if (data.transformCache[transformName] !== undefined && new RegExp("^\\(" + defaultValue + "[^.]").test(currentValue)) {
									transformHAPropertyExists = true;

									delete data.transformCache[transformName];
								}
							});

							/* Mobile devices have hardware acceleration removed at the end of the animation in order to avoid hogging the GPU's memory. */
							if (opts.mobileHA) {
								transformHAPropertyExists = true;
								delete data.transformCache.translate3d;
							}

							/* Flush the subproperty removals to the DOM. */
							if (transformHAPropertyExists) {
								CSS.flushTransformCache(element);
							}

							/* Remove the "velocity-animating" indicator class. */
							CSS.Values.removeClass(element, "velocity-animating");
						}
					}

					/*********************
					 Option: Complete
					 *********************/

					/* Complete is fired once per call (not once per element) and is passed the full raw DOM element set as both its context and its first argument. */
					/* Note: Callbacks aren't fired when calls are manually stopped (via Velocity("stop"). */
					if (!isStopped && opts.complete && !opts.loop && (i === callLength - 1)) {
						/* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
						try {
							opts.complete.call(elements, elements);
						} catch (error) {
							setTimeout(function() {
								throw error;
							}, 1);
						}
					}

					/**********************
					 Promise Resolving
					 **********************/

					/* Note: Infinite loops don't return promises. */
					if (resolver && opts.loop !== true) {
						resolver(elements);
					}

					/****************************
					 Option: Loop (Infinite)
					 ****************************/

					if (data && opts.loop === true && !isStopped) {
						/* If a rotateX/Y/Z property is being animated by 360 deg with loop:true, swap tween start/end values to enable
						 continuous iterative rotation looping. (Otherise, the element would just rotate back and forth.) */
						$.each(data.tweensContainer, function(propertyName, tweenContainer) {
							if (/^rotate/.test(propertyName) && ((parseFloat(tweenContainer.startValue) - parseFloat(tweenContainer.endValue)) % 360 === 0)) {
								var oldStartValue = tweenContainer.startValue;

								tweenContainer.startValue = tweenContainer.endValue;
								tweenContainer.endValue = oldStartValue;
							}

							if (/^backgroundPosition/.test(propertyName) && parseFloat(tweenContainer.endValue) === 100 && tweenContainer.unitType === "%") {
								tweenContainer.endValue = 0;
								tweenContainer.startValue = 100;
							}
						});

						Velocity(element, "reverse", {loop: true, delay: opts.delay});
					}

					/***************
					 Dequeueing
					 ***************/

					/* Fire the next call in the queue so long as this call's queue wasn't set to false (to trigger a parallel animation),
					 which would have already caused the next call to fire. Note: Even if the end of the animation queue has been reached,
					 $.dequeue() must still be called in order to completely clear jQuery's animation queue. */
					if (opts.queue !== false) {
						$.dequeue(element, opts.queue);
					}
				}

				/************************
				 Calls Array Cleanup
				 ************************/

				/* Since this call is complete, set it to false so that the rAF tick skips it. This array is later compacted via compactSparseArray().
				 (For performance reasons, the call is set to false instead of being deleted from the array: http://www.html5rocks.com/en/tutorials/speed/v8/) */
				Velocity.State.calls[callIndex] = false;

				/* Iterate through the calls array to determine if this was the final in-progress animation.
				 If so, set a flag to end ticking and clear the calls array. */
				for (var j = 0, callsLength = Velocity.State.calls.length; j < callsLength; j++) {
					if (Velocity.State.calls[j] !== false) {
						remainingCallsExist = true;

						break;
					}
				}

				if (remainingCallsExist === false) {
					/* tick() will detect this flag upon its next iteration and subsequently turn itself off. */
					Velocity.State.isTicking = false;

					/* Clear the calls array so that its length is reset. */
					delete Velocity.State.calls;
					Velocity.State.calls = [];
				}
			}

			/******************
			 Frameworks
			 ******************/

			/* Both jQuery and Zepto allow their $.fn object to be extended to allow wrapped elements to be subjected to plugin calls.
			 If either framework is loaded, register a "velocity" extension pointing to Velocity's core animate() method.  Velocity
			 also registers itself onto a global container (window.jQuery || window.Zepto || window) so that certain features are
			 accessible beyond just a per-element scope. This master object contains an .animate() method, which is later assigned to $.fn
			 (if jQuery or Zepto are present). Accordingly, Velocity can both act on wrapped DOM elements and stand alone for targeting raw DOM elements. */
			global.Velocity = Velocity;

			if (global !== window) {
				/* Assign the element function to Velocity's core animate() method. */
				global.fn.velocity = animate;
				/* Assign the object function's defaults to Velocity's global defaults object. */
				global.fn.velocity.defaults = Velocity.defaults;
			}

			/***********************
			 Packaged Redirects
			 ***********************/

			/* slideUp, slideDown */
			$.each(["Down", "Up"], function(i, direction) {
				Velocity.Redirects["slide" + direction] = function(element, options, elementsIndex, elementsSize, elements, promiseData) {
					var opts = $.extend({}, options),
							begin = opts.begin,
							complete = opts.complete,
							inlineValues = {},
							computedValues = {height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: ""};

					if (opts.display === undefined) {
						/* Show the element before slideDown begins and hide the element after slideUp completes. */
						/* Note: Inline elements cannot have dimensions animated, so they're reverted to inline-block. */
						opts.display = (direction === "Down" ? (Velocity.CSS.Values.getDisplayType(element) === "inline" ? "inline-block" : "block") : "none");
					}

					opts.begin = function() {
						/* If the user passed in a begin callback, fire it now. */
						if (elementsIndex === 0 && begin) {
							begin.call(elements, elements);
						}

						/* Cache the elements' original vertical dimensional property values so that we can animate back to them. */
						for (var property in computedValues) {
							if (!computedValues.hasOwnProperty(property)) {
								continue;
							}
							inlineValues[property] = element.style[property];

							/* For slideDown, use forcefeeding to animate all vertical properties from 0. For slideUp,
							 use forcefeeding to start from computed values and animate down to 0. */
							var propertyValue = CSS.getPropertyValue(element, property);
							computedValues[property] = (direction === "Down") ? [propertyValue, 0] : [0, propertyValue];
						}

						/* Force vertical overflow content to clip so that sliding works as expected. */
						inlineValues.overflow = element.style.overflow;
						element.style.overflow = "hidden";
					};

					opts.complete = function() {
						/* Reset element to its pre-slide inline values once its slide animation is complete. */
						for (var property in inlineValues) {
							if (inlineValues.hasOwnProperty(property)) {
								element.style[property] = inlineValues[property];
							}
						}

						/* If the user passed in a complete callback, fire it now. */
						if (elementsIndex === elementsSize - 1) {
							if (complete) {
								complete.call(elements, elements);
							}
							if (promiseData) {
								promiseData.resolver(elements);
							}
						}
					};

					Velocity(element, computedValues, opts);
				};
			});

			/* fadeIn, fadeOut */
			$.each(["In", "Out"], function(i, direction) {
				Velocity.Redirects["fade" + direction] = function(element, options, elementsIndex, elementsSize, elements, promiseData) {
					var opts = $.extend({}, options),
							complete = opts.complete,
							propertiesMap = {opacity: (direction === "In") ? 1 : 0};

					/* Since redirects are triggered individually for each element in the animated set, avoid repeatedly triggering
					 callbacks by firing them only when the final element has been reached. */
					if (elementsIndex !== 0) {
						opts.begin = null;
					}
					if (elementsIndex !== elementsSize - 1) {
						opts.complete = null;
					} else {
						opts.complete = function() {
							if (complete) {
								complete.call(elements, elements);
							}
							if (promiseData) {
								promiseData.resolver(elements);
							}
						};
					}

					/* If a display was passed in, use it. Otherwise, default to "none" for fadeOut or the element-specific default for fadeIn. */
					/* Note: We allow users to pass in "null" to skip display setting altogether. */
					if (opts.display === undefined) {
						opts.display = (direction === "In" ? "auto" : "none");
					}

					Velocity(this, propertiesMap, opts);
				};
			});

			return Velocity;
		}((window.jQuery || window.Zepto || window), window, (window ? window.document : undefined));
	}));

	/******************
	 Known Issues
	 ******************/

	/* The CSS spec mandates that the translateX/Y/Z transforms are %-relative to the element itself -- not its parent.
	 Velocity, however, doesn't make this distinction. Thus, converting to or from the % unit with these subproperties
	 will produce an inaccurate conversion value. The same issue exists with the cx/cy attributes of SVG circles and ellipses. */


/***/ },
/* 275 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_275__;

/***/ }
/******/ ])
});
;