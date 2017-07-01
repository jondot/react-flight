'use strict';var _keys=require('babel-runtime/core-js/object/keys');var _keys2=_interopRequireDefault(_keys);var _typeof2=require('babel-runtime/helpers/typeof');var _typeof3=_interopRequireDefault(_typeof2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};};(function(window){'use strict';var func=function func(window,undef){'use strict';/**
 * Tweene - JavaScript Animation Proxy
 * @version 0.5.11
 * @link http://tweene.com
 *
 * Copyright (c) 2014, Federico Orru'   <federico@buzzler.com>
 *
 * @license Artistic License 2.0
 * See LICENSE.txt for details
 *
 *//* jshint -W008 *//**
 * Common data and utility functions used internally.
 * None of them is exported.
 */if(window&&window.jQuery&&window){var $=jQuery;}// used for recognize transform properties
var transformProperties='scale|scale3d|translate|translate3d|rotate|rotate3d|rotation|skew|scaleX|scaleY|scaleZ|translateX|translateY|translateZ|x|y|z|rotateX|rotateY|rotateZ|skewX|skewY'.split('|');// compound transforms are on the begin of the transformProperties array
var compoundTransforms=transformProperties.slice(0,8);// compound properties we parse to obtain a list of key - value couples
var compoundNames='margin|padding|borderColor|borderWidth|borderRadius'.split('|');var compoundDirections=['Top','Right','Bottom','Left'];var radiusDirections=['TopLeft','TopRight','BottomRight','BottomLeft'];// base name and aliases for event names. Those with an empty string as value are the names used internally
var handlersMap={begin:'',end:'',progress:'',loop:'',reverse:'',onBegin:'begin',start:'begin',onStart:'begin',onEnd:'end',complete:'end',onComplete:'end',finish:'end',onFinish:'end',done:'end',onProgress:'progress',update:'progress',onUpdate:'progress',onLoop:'loop',onRepeat:'loop',onReverse:'reverse',onReverseComplete:'reverse'};// base name and aliases for option names. Those with an empty string as value are the names used internally
var optionsMap={delay:'',loops:'',loopsDelay:'',yoyo:'',target:'',speed:'',sleep:'delay',repeat:'loops',repeatDelay:'loopsDelay',timeScale:'speed'};// base name and aliases for tween option names
var tweenOptionsMap={easing:'',duration:'',paused:'',to:'',from:'',then:'',ease:'easing'};// predefined easing shortcuts
var easings={linear:[0.25,0.25,0.75,0.75],ease:[0.25,0.1,0.25,1],'ease-in':[0.42,0,1,1],'ease-out':[0,0,0.58,1],'ease-in-out':[0.42,0,0.58,1],in:[0.42,0,1,1],out:[0,0,0.58,1],'in-out':[0.42,0,0.58,1],snap:[0,1,0.5,1],easeInCubic:[0.550,0.055,0.675,0.190],easeOutCubic:[0.215,0.61,0.355,1],easeInOutCubic:[0.645,0.045,0.355,1],easeInCirc:[0.6,0.04,0.98,0.335],easeOutCirc:[0.075,0.82,0.165,1],easeInOutCirc:[0.785,0.135,0.15,0.86],easeInExpo:[0.95,0.05,0.795,0.035],easeOutExpo:[0.19,1,0.22,1],easeInOutExpo:[1,0,0,1],easeInQuad:[0.55,0.085,0.68,0.53],easeOutQuad:[0.25,0.46,0.45,0.94],easeInOutQuad:[0.455,0.03,0.515,0.955],easeInQuart:[0.895,0.03,0.685,0.22],easeOutQuart:[0.165,0.84,0.44,1],easeInOutQuart:[0.77,0,0.175,1],easeInQuint:[0.755,0.05,0.855,0.06],easeOutQuint:[0.23,1,0.32,1],easeInOutQuint:[0.86,0,0.07,1],easeInSine:[0.47,0,0.745,0.715],easeOutSine:[0.39,0.575,0.565,1],easeInOutSine:[0.445,0.05,0.55,0.95],easeInBack:[0.6,-0.28,0.735,0.045],easeOutBack:[0.175,0.885,0.32,1.275],easeInOutBack:[0.68,-0.55,0.265,1.55]};// predefined duration shortcuts
var durations={fast:'200ms',slow:'600ms'};// predefined speed shortcuts
var speeds={half:0.5,double:2};function isFunction(value){return typeof value=='function';}function isNumber(value){return typeof value=='number'||value&&(typeof value==='undefined'?'undefined':(0,_typeof3.default)(value))=='object'&&Object.prototype.toString.call(value)=='[object Number]'||false;}function isString(value){return typeof value=='string'||value&&(typeof value==='undefined'?'undefined':(0,_typeof3.default)(value))=='object'&&Object.prototype.toString.call(value)=='[object String]'||false;}var isArray=Array.isArray||function(value){return value&&(typeof value==='undefined'?'undefined':(0,_typeof3.default)(value))=='object'&&typeof value.length=='number'&&Object.prototype.toString.call(value)=='[object Array]';};function isObject(value){var type=typeof value==='undefined'?'undefined':(0,_typeof3.default)(value);return type==='function'||type==='object'&&!!value;}/*
 * @link http://stackoverflow.com/questions/18082/validate-decimal-numbers-in-javascript-isnumeric
 */function isNumeric(value){return!isArray(value)&&value-parseFloat(value)+1>=0;}function isEmpty(obj){for(var name in obj){if(obj.hasOwnProperty(name)){return false;}}return true;}function seemsPlainObject(value){return isObject(value)&&!(value instanceof Function)&&value.constructor==Object;}function extendObject(obj){if(!isObject(obj)){return obj;}var source,name,i,length;for(i=1,length=arguments.length;i<length;i++){source=arguments[i];for(name in source){obj[name]=source[name];}}return obj;}function cloneObject(obj,deep){if(isFunction(obj)||!isObject(obj)){return obj;}if(isArray(obj)){obj=obj.slice();if(deep){for(var i=0,end=obj.length;i<end;i++){obj[i]=cloneObject(obj[i],deep);}}}else{obj=extendObject({},obj);if(deep){for(var name in obj){if(obj.hasOwnProperty(name)){obj[name]=cloneObject(obj[name],deep);}}}}return obj;}function keys(obj){if(_keys2.default){return(0,_keys2.default)(obj);}var ks=[];for(var key in obj){if(obj.hasOwnProperty(key)){ks.push(key);}}return ks;}// simplified version of Array.indexOf polyfill
function inArray(array,search){if(!isArray(array)){throw'expected an array as first param';}if(array.indexOf){return array.indexOf(search);}for(var i=0,end=array.length;i<end;i++){if(array[i]===search){return i;}}return-1;}// used to convert arguments to real array
function toArray(args,pos){if(pos===void 0){pos=0;}return Array.prototype.slice.call(args,pos);}/**
 * convert time from seconds to milliseconds and vice versa
 *
 * @param {number} value
 * @param {string} fromUnit - 's' | 'ms'
 * @param {string} toUnit - 's' | 'ms'
 * @returns {Number}
 */function convertTime(value,fromUnit,toUnit){if(fromUnit!=toUnit&&value!==0){return value*(toUnit=='s'?0.001:1000);}return value;}/*
 *  Based on Bez http://github.com/rdallasgray/bez
 *
 * Copyright Robert Dallas Gray. All rights reserved.
 * Provided under the FreeBSD license: https://github.com/rdallasgray/bez/blob/master/LICENSE.txt
*/function bezier(x1,y1,x2,y2){var p1=[x1,y1],p2=[x2,y2],A=[null,null],B=[null,null],C=[null,null],bezCoOrd=function bezCoOrd(time,ax){C[ax]=3*p1[ax];B[ax]=3*(p2[ax]-p1[ax])-C[ax];A[ax]=1-C[ax]-B[ax];return time*(C[ax]+time*(B[ax]+time*A[ax]));},xDeriv=function xDeriv(time){return C[0]+time*(2*B[0]+3*A[0]*time);},xForT=function xForT(time){var x=time,i=0,z;while(++i<14){z=bezCoOrd(x,0)-time;if(Math.abs(z)<1e-3)break;x-=z/xDeriv(x);}return x;};return function(time){return bezCoOrd(xForT(time),1);};}/**
 * take as input compound properties defined as a space separated string of values and return the list of single value properties
 *
 *   padding: 5 => paddingTop: 5, paddingRight: 5, paddingBottom: 5, paddingLeft: 5
 *   border-width: 2px 1px => borderTopWidth: 2px, borderRightWidth: 1px, borderBottomWidth: 2px, borderLeftWidth: 1px
 *
 * @param {string} name
 * @param {string} value
 * @returns {object}
 */function compoundMapping(name,value){var parts,nameParts,prefix,suffix,dirs,values={},easing,i;if(isArray(value)){value=value[0];easing=value[1];}else{easing=null;}parts=String(value).split(/\s+/);switch(parts.length){case 1:parts=[parts[0],parts[0],parts[0],parts[0]];break;case 2:parts=[parts[0],parts[1],parts[0],parts[1]];break;case 3:parts=[parts[0],parts[1],parts[2],parts[1]];break;}nameParts=decamelize(name).split('-');prefix=nameParts[0];suffix=nameParts.length>1?nameParts[1].substr(0,1).toUpperCase()+nameParts[1].substr(1):'';dirs=name=='borderRadius'?radiusDirections:compoundDirections;for(i=0;i<4;i++){values[prefix+dirs[i]+suffix]=easing?[parts[i],easing]:parts[i];}return values;}/**
 *  split commpound transform values
 *
 *   scale: 1.2 => scaleX: 1.2, scaleY: 1.2
 *   rotate3d: 30, 60, 40 => rotateX: 30, rotateY: 60, rotateZ: 40
 *
 * @param {string} name
 * @param {string} value
 * @returns {object}
 */function transformMapping(name,value){var easing,dirs=['X','Y','Z'],values={},parts,baseName;if(isArray(value)){value=value[0];easing=value[1];}else{easing=null;}parts=String(value).split(/\s*,\s*/);baseName=name.indexOf('3')!==-1?name.substr(0,name.length-2):name;if(name=='rotate3d'){if(parts.length==4){dirs=[parts[0]=='1'?'X':parts[1]=='1'?'Y':'Z'];parts[0]=parts[3];}else{throw'invalid rotate 3d value';}}else{switch(parts.length){// for rotations, a single value is passed as Z-value, while for other transforms it is applied to X and Y
case 1:parts=baseName=='rotate'||baseName=='rotation'?[null,null,parts[0]]:[parts[0],parts[0],null];break;case 2:parts=[parts[0],parts[1],null];break;}}for(var i=0;i<dirs.length;i++){if(parts[i]!==null){values[baseName+dirs[i]]=easing?[parts[i],easing]:parts[i];}}return values;}function isTransformProperty(name){return inArray(transformProperties,name)!=-1;}// border-bottom-width -> borderBottomWidth
function camelize(name){return name.replace(/(\-[a-z])/g,function(value){return value.substr(1).toUpperCase();});}// borderBottomWidth -> border-bottom-width
function decamelize(name){return name.replace(/([A-Z])/g,'-$1').toLowerCase();}/**
 * accept a speed name shortcuts or a number and give back an acceptable positive value.
 * Fallback to 1 if value is out of valid range
 *
 * @param {string|number} value
 * @returns {number}
 */function parseSpeed(value){if(value in speeds){value=speeds[value];}value=parseFloat(value);if(isNaN(value)||!value||value<=0){value=1;}return value;}/**
 * Tweene global class, is the unique identifier exported
 *
 * You will never need to instantiate a Tweene object. You have to use Tweene static methods
 * in order to obtain instances of tween and timeline objects of the different drivers
 *
 * @class
 *
 */var Tweene=function Tweene(){var _self=this;// used for generate unique identifier for any tweene object (tweens, timelines, callbacks and labels)
this._idCounter=0;// internally, all time values use this unit
this._coreTimeUnit='ms';// time unit used when pure numbers are passed as delay or duration values. Users can change this value any time
// when the user requires only GSAP driver, it defaults to 's' in order to mimic the library native API
this.defaultTimeUnit='ms';this._macros={};this.easings=easings;this.durations=durations;this.speeds=speeds;this.defaultDriver='jquery';this.defaultEasing='easeOutQuad';this.defaultDuration='400ms';// container for registered drivers
var _drivers={tween:{},timeline:{}},/**
         * Create a tween or timeline object of the specified driver. If driverName is not given, it fallbacks to default driver
         *
         * @param {string} 'tween' or 'timeline'
         * @param {string} [driverName] - one of the registered driver's name
         * @returns {object} tween or timeline object
         */_getInstance=function _getInstance(type,driverName){var d,i;driverName=(driverName?driverName:_self.defaultDriver).toLowerCase();if(driverName in _drivers[type]){d=_drivers[type][driverName];i=new d();i.driverName=driverName;return i;}throw'Driver '+name+' not found';},/**
         * Common method used inside from(), to() and fromTo() to create a tween and pass arguments to it
         *
         * @param {arguments} args - list of arguments passed to original public method
         * @param {string} method - 'from' | 'to' | 'fromTo'
         * @returns {object} - return a tween object
         */_tweenNow=function _tweenNow(args,method){var tw=_getInstance('tween');if(args.length){args=toArray(args,0);tw.target(args.shift())[method].apply(tw,args);}return tw._immediateStart?tw.play():tw;};/**
     * Register an animation driver
     *
     * @param {string} name - name of the driver
     * @param {string} type - 'tween' | 'timeline'
     * @param {function} construct - constructor function that defines the driver class
     * @returns {Tweene}
     */this.registerDriver=function(name,type,construct){type=type.toLowerCase();if(type!='tween'){type='timeline';}_drivers[type][name.toLowerCase()]=construct;return this;};/**
     * Define a macro for tween objects
     * @link http://tweene.com/docs/#macro
     *
     * @param {string} name
     * @param {function} macro - inside the function, 'this' refers to the tween object
     * @returns {Tweene}
     */this.registerMacro=function(name,macro){this._macros[name]=macro;return this;};/**
     * Return an instance of a tween object
     * @link http://tweene.com/docs/#createTween
     *
     * @param {object|string} [target] jquery object or string selector of the dom element(s) to be animated
     * @param {string} [driver]
     * @returns {object}
     */this.get=function(target,driver){var t=_getInstance('tween',driver);return target?t.target(target):t;};/**
     * Apply instantly the properties values to the target
     *
     * @param {object|string} target
     * @param {object} values - CSS property - value map
     * @returns {unresolved}
     */this.set=function(target,values){return _getInstance('tween').target(target).set(values);};/**
     * Create a tween object for a 'to' animation and pass the arguments to it. First argument is always the target.
     * If you don't set paused: true in the options passed, the tween will start immediately.
     * @link http://tweene.com/docs/#tweenTo
     *
     * @returns {object} - return the tween object
     */this.to=function(){return _tweenNow(arguments,'to');};/**
     * Create a tween object for a 'from' animation and pass the arguments to it. First argument is always the target.
     * If you don't set paused: true in the options passed, the tween will start immediately.
     * @link http://tweene.com/docs/#tweenFrom
     *
     * @returns {object} - return the tween object
     */this.from=function(){return _tweenNow(arguments,'from');};/**
     * Create a tween object for a 'fromTo' animation and pass the arguments to it. First argument is always the target.
     * If you don't set paused: true in the options passed, the tween will start immediately.
     * @link http://tweene.com/docs/#tweenFromTo
     *
     * @returns {object} - return the tween object
     */this.fromTo=function(){return _tweenNow(arguments,'fromTo');};/**
     * Create a timeline object
     * @link http://tweene.com/docs/#createTimeline
     *
     * @param {object|string} [target] - it checks if the object passed as first param is a plain object (options) or not (target)
     * @param {object} [options]
     * @param {string} driver - name of the driver
     * @returns {object} - a timeline object
     */this.line=function(target,options,driver){// we assume that targets cannot be plain objects
var lineTarget=isObject(target)&&!seemsPlainObject(target)||isString(target)?target:null;// if no target is passed, unshift arguments by one position
if(!lineTarget){options=arguments[0];driver=arguments[1];}options=seemsPlainObject(options)?options:{};// driver can be specified also with a 'driver' property inside options object
driver=driver!==void 0?driver:'driver'in options?options.driver:null;return _getInstance('timeline',driver).options(options).target(lineTarget);};};var Tw=new Tweene();if(window){window.Tweene=Tw;}/**
 * Tweene - JavaScript Animation Proxy
 *
 * @link http://tweene.com
 *
 * Copyright (c) 2014, Federico Orru'   <federico@buzzler.com>
 *
 * @license Artistic License 2.0
 * See LICENSE.txt for details
 *
 *//**
 * Vars and methods common to every tween and timeline, whatever is the driver used
 * @mixin
 *
 */var Common=function Common(){// unique identifier
this._id=++Tw._idCounter;this._coreTimeUnit=Tw._coreTimeUnit;this._timeUnit=Tw.defaultTimeUnit;this._parent=null;this._target=null;this._duration=0;this._speed=1;this._delay=0;this._loops=0;this._loopsDelay=0;this._loopsCount=0;this._yoyo=false;this._fwd=true;this._localFwd=true;this._ready=false;this._running=false;// event handlers set by user
this._handlers={begin:null,end:null,reverse:null,progress:null,loop:null};// event handlers set internally
this._coreHandlers={_begin:[],_end:[],begin:[],end:[],reverse:[],progress:[],loop:[]};/**
     * Play the animation in forward direction
     * @link http://tweene.com/docs/#play
     *
     * @returns {this}
     */this.play=function(){this._fwd=true;this._playTween();return this;};/**
     * Play the animation in backward direction from its current position
     * @link http://tweene.com/docs/#reverse
     *
     * @returns {this}
     */this.reverse=function(){this._fwd=false;this._reverseTween();return this;};/**
     * Pause the animation on its current state.
     * @link http://tweene.com/docs/#pause
     *
     * @returns {this}
     */this.pause=function(){if(this._ready){this._pauseTween();}return this;};/**
     * Resume a previously paused animation without affecting the current direction
     * @link http://tweene.com/docs/#resume
     *
     * @returns {this}
     */this.resume=function(){this._resumeTween();return this;};/**
     * Restart animation in forward direction.
     * Reset also loops counter.
     * Initial delay is performed only on the very first start, not on restart.
     * @link http://tweene.com/docs/#restart
     *
     * @returns {this}
     */this.restart=function(){this._restartTween();return this;};/**
     * Go back to initial or final position accordingly to the value of direction. Intended to be used internally, you don't have to call this directly.
     *
     * @returns {this}
     */this.back=function(){this._backTween(this._localFwd?'begin':'end');return this;};/**
     * Get or set the speed of the current tween/timeline. Normal speed is 1, so 2 is double speed and 0.5 is half speed.
     * It's usable both before and during the animation.
     * It Accepts also string shortcut defined in Tweene.speeds
     * @link http://tweene.com/docs/#speedControl
     *
     * @param {number} [value]
     * @returns {number|this}
     */this.speed=function(value){if(value===void 0){return this._speed;}value=parseSpeed(value);if(value!=this._speed){this._speed=value;this._speedTween();}return this;};/**
     * Alias for speed()
     * @see speed
     *
     */this.timeScale=function(){return this.speed.apply(this,arguments);};/**
     * Return the current playhead time (a value between 0 and duration) in time unit set in Tweene.defaultTimeUnit
     *
     * @returns {number}
     */this.time=function(){return Math.round(convertTime(this._getPosition(),this._coreTimeUnit,this._timeUnit)*1000)/1000;};/**
     * Return the current playhead position in percent (a value between 0 and 1)
     *
     * @returns {number}
     */this.progress=function(){return Math.round(this._getProgress()*1000)/1000;};/**
     * Return true if the animation is currently paused
     * Tt's true also when the animation is finished or not yet started
     *
     * @returns {boolean}
     */this.paused=function(){return this._getPaused();};/**
     * Return true if the animation direction is currently reversed
     *
     * @returns {boolean}
     */this.reversed=function(){return!this._fwd;};/**
     * Get/Set the tween duration (only get available for timeline)
     * Accept numeric values interpreted as Tweene.defaultTimeUnit
     * or string with unit suffix, so '500ms' or '0.5s'
     *
     * @param {string|number} [value]
     * @returns {this|number}
     *
     */this.duration=function(value){if(value!==void 0){if(this._type!='timeline'){this._duration=this._parseTime(value);this.invalidate();}return this;}// timeline needs to process its children in order to calculate the overall duration
if(this.type=='timeline'){this.prepare();}return Math.round(convertTime(this._duration,this._coreTimeUnit,this._timeUnit)*1000)/1000;};/**
     * Get the tween/timeline total duration including loops and loopsDelay, in the timeUnit set in Tweene.defaultTimeUnit
     * In case of infinite loop, it returns Infinity
     *
     * @returns {number}
     */this.totalDuration=function(){if(this.type=='timeline'){this.prepare();}return Math.round(convertTime(this._getTotalDuration()*this._speed,this._coreTimeUnit,this._timeUnit)*1000)/1000;};/**
     * Set the animation target (jquery or dom objects commonly, accordingly to the specific animation library in use)
     * @link http://tweene.com/docs/#target
     *
     * @param {string|object} [value]
     * @returns {string|object|this}
     */this.target=function(value){if(value===void 0){return this._target;}this._setTarget(value);return this;};/**
     * Get/Set the tween initial delay
     * Accept numeric values interpreted as Tweene.defaultTimeUnit
     * or string with unit suffix, so '500ms' or '0.5s'
     * @link http://tweene.com/docs/#delay
     *
     * @param {string|number} [value]
     * @returns {number|this}
     */this.delay=function(value){if(value===void 0){return convertTime(this._delay,this._coreTimeUnit,this._timeUnit);}this._delay=this._parseTime(value);this.invalidate();return this;};/**
     * Set the number of animation repeats. Default is 0, so loops(1) will execute the tween/timeline twice.
     * A value of -1 means 'Infinite loop'.
     * @link http://tweene.com/docs/#loops
     *
     * @param {number} value
     * @returns {this}
     */this.loops=function(value){if(value===void 0){return this._loops;}value=parseInt(value);if(isNaN(value)){value=0;}else if(!isFinite(value)){value=-1;}this._loops=value;this.invalidate();return this;};/**
     * Enable/disable yoyo behavior or retrieve its status.
     * Yoyo makes sense only when used with looops.
     * @link http://tweene.com/docs/#yoyoEffect
     *
     * @param {boolean} [value]
     * @returns {boolean|this}
     */this.yoyo=function(value){if(value===void 0){return this._yoyo;}this._yoyo=!!value;return this;};/**
     * Get/Set the value of delay before each loop iteration
     * Accept numeric values interpreted as Tweene.defaultTimeUnit
     * or string with unit suffix, so '500ms' or '0.5s'
     * @link http://tweene.com/docs/#loopsDelay
     *
     * @param {string|number} [value]
     * @returns {number|this}
     */this.loopsDelay=function(value){if(value===void 0){return convertTime(this._loopsDelay,this._coreTimeUnit,this._timeUnit);}this._loopsDelay=this._parseTime(value);this.invalidate();return this;};/**
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
     */this.on=function(name,callback){if(name in handlersMap){name=handlersMap[name].length?handlersMap[name]:name;if(callback===null){this._handlers[name]=null;}else{this._handlers[name]={callback:callback,params:arguments.length>2?isArray(arguments[2])?arguments[2]:[arguments[2]]:[],scope:arguments.length>3&&arguments[3]!==null?arguments[3]:this};}}return this;};/**
     * Used internally for register core event handlers
     *
     * @param {string} name
     * @param {string} id
     * @param {function} callback
     * @param {object} [scope]
     * @param {array} [params]
     * @param {boolean} [priority]
     * @returns {this}
     */this.setCoreHandler=function(name,id,callback,scope,params,priority){this.unsetCoreHandler(name,id);var entry={id:id,callback:callback,scope:scope||this,params:params||[]};if(priority){this._coreHandlers[name].unshift(entry);}else{this._coreHandlers[name].push(entry);}return this;};/**
     * Used internally for unregister core event handlers
     *
     * @param {string} name
     * @param {string} id
     * @returns {this}
     */this.unsetCoreHandler=function(name,id){for(var i=0,end=this._coreHandlers[name].length;i<end;i++){if(this._coreHandlers[name][i].id==id){this._coreHandlers[name].splice(i,1);break;}}return this;};/**
     * Reset _ready flag every time that one of the internal properties that need to be processed before running is changed
     *
     * @returns {this}
     */this.invalidate=function(){if(!this._running){if(this._parent){this._parent.invalidate();}this._ready=false;}return this;};/**
     * Get/Set the parent object. The parent could be a timeline or a tween if the child is a DummyTween used for emulate delay
     *
     * @param {object} [value]
     * @returns {this|object}
     */this.parent=function(value){if(value===void 0){return this._parent;}this._parent=value;this.invalidate();return this;};/**
     * Get the internal unique identifier
     *
     * @returns {number}
     */this.id=function(){return this._id;};/**
     * Set options for tween or timeline
     *
     * @param {object} options
     * @returns {this}
     */this.options=function(options){// the object will be modified, we need to clone it in order to keep the original safe, allowing its reuse
options=cloneObject(options,true);var opts=this._parseOptions(options);opts.events=this._parseEvents(options);this._applyArguments(opts);return this;};/**
     * Return the resulting speed of the object
     *
     * @returns {number}
     */this.getRealSpeed=function(){return this._parent?this._parent.getRealSpeed()*this._speed:this._speed;};/**
     * Get the tween/timeline total duration including loops and loopsDelay
     * In case of infinite loop, it returns Infinity
     *
     * @returns {number}
     */this._getTotalDuration=function(){if(this._loops==-1&&(this._duration||this._loopsDelay)){return Infinity;}return(this._duration+(this._loopsDelay+this._duration)*this._loops)/this._speed;};/**
     * Assign otpions and event handlers previously parsed
     *
     * @param {object} args
     */this._applyArguments=function(args){var name;for(name in args.events){this.on.apply(this,args.events[name]);}delete args.events;for(name in args){// these properties are available only for tween objects
if(this.type!='timeline'&&inArray(['from','to','then','immediateStart'],name)!=-1){this['_'+name]=args[name];}else if(name in this&&this[name]instanceof Function){this[name](args[name]);}}};/**
     * Check if there are public or internal event handlers set for that name
     *
     * @param {string} name
     * @returns {boolean}
     */this._hasHandlers=function(name){return name in this._handlers&&this._handlers[name]!==null||this._coreHandlers[name].length;};/**
     * execute event handlers bound to the given name
     *
     * @param {string} name
     */this._runHandlers=function(name){var i,end,entry;// run external events first to guarantee correct events order inside timelines
if(name in this._handlers&&this._handlers[name]!==null){entry=this._handlers[name];entry.callback.apply(entry.scope,entry.params);}// internal handlers
if(this._coreHandlers[name].length){for(i=0,end=this._coreHandlers[name].length;i<end;i++){entry=this._coreHandlers[name][i];entry.callback.apply(entry.scope,entry.params);}}};/**
     * find and return allowed options in a generic object
     *
     * @param {Object} options
     * @param {Boolean} remove - if true, it removes found options from original object
     * @returns {Object}
     */this._parseOptions=function(options,remove){var opts=this.type=='tween'?extendObject({},optionsMap,tweenOptionsMap):optionsMap,values={},name,realName,value;for(name in options){if(options.hasOwnProperty(name)&&name in opts){value=options[name];// paused property is used internally for another purpose, so we have to handle this option separately
if(name=='paused'){this._immediateStart=!value;delete options[name];continue;}realName=opts[name].length?opts[name]:name;values[realName]=value;if(remove){delete options[name];}}}return values;};/**
     * Find and return allowed event in a generic object
     *
     * @param {object} options
     * @param {boolean} remove - if true, it removes found handlers and related values (scope and params) from original object
     * @returns {object}
     */this._parseEvents=function(options,remove){var values={},value,args,name,realName,params;for(name in options){if(options.hasOwnProperty(name)&&name in handlersMap){value=options[name];realName=handlersMap[name].length?handlersMap[name]:name;args=[realName,value];if(remove){delete options[name];}if(name+'Params'in options){params=options[name+'Params'];args.push(isArray(params)?params:[params]);if(remove){delete options[name+'Params'];}}if(name+'Scope'in options){args.push(options[name+'Scope']);if(remove){delete options[name+'Scope'];}}else{args.push(this);}values[realName]=args;}}return values;};/**
     * Parse time value used for delay and duration settings, return a number that is the time expressed in coreTimeUnit.
     * Fallback to 0 if the given value is not valid
     *
     * @param {string|number} value
     * @returns {number}
     */this._parseTime=function(value){if(!value){return 0;}var unit=this._timeUnit,parts;if(isString(value)){// check for duration shortcuts like 'slow', 'fast', and so on
if(value in durations){value=durations[value];}// accept 's' or 'ms' as suffix after the number
parts=value.match(/^[\+\-]?\s*([0-9\.]+)\s*(m?s)?$/i);if(parts===null||parts[1]===void 0){return 0;}if(parts[2]!==void 0){unit=parts[2].toLowerCase();}value=parts[1];}value=Number(value);if(isNaN(value)){value=0;}value=convertTime(value,unit,this._coreTimeUnit);return Math.max(0,value);};/**
     * Set the target for tween or timeline. It accept both an object or a selector string
     *
     * @param {string|object} value
     * @returns {this}
     */this._setTarget=function(value){if(isString(value)&&'$'in window){value=$(value);}this._target=value;return this;};};/**
 * Tweene - JavaScript Animation Proxy
 *
 * @link http://tweene.com
 *
 * Copyright (c) 2014, Federico Orru'   <federico@buzzler.com>
 *
 * @license Artistic License 2.0
 * See LICENSE.txt for details
 *
 *//**
 * Create a Label object, used internally by timelines when you add a label
 * @class
 *
 * @param {string} name
 */var Label=function Label(name){this.type='label';this._id=name;this._name=name;this._position=null;/**
     * Return the unique identifier
     *
     * @returns {number}
     */this.id=function(){return this._id;};/**
     * Get/Set the time position inside the parent timeline
     *
     * @param {number} [value]
     * @returns {this}
     */this.position=function(value){if(value===void 0){return this._position;}this._position=value;return this;};};/**
 * Tweene - JavaScript Animation Proxy 
 * 
 * @link http://tweene.com
 *   
 * Copyright (c) 2014, Federico Orru'   <federico@buzzler.com>
 * 
 * @license Artistic License 2.0 
 * See LICENSE.txt for details
 * 
 *//**
 * Create a Callback object, used internally by timelines when you add callbacks calls
 * @class
 * 
 * @param {function} callback
 * @param {object} scope
 * @param {array} params
 * @param {number} dir - values: 1 | -1 | 0
 */var Callback=function Callback(callback,scope,params,dir,isPause){this.type='callback';// unique id
this._id=++Tw._idCounter;this.isPause=!!isPause;dir=dir===1?true:dir===-1?false:null;var parent=null;/**
     * Get or set the parent timeline object
     * 
     * @param {object} [value] - parent object
     * @returns {object|this}
     */this.parent=function(value){if(!value){return parent;}parent=value;return this;};/**
     * Return the unique identifier
     * 
     * @returns {number} 
     */this.id=function(){return this._id;};/**
     * Duration of a callback inside a timeline is always 0, this is needed because internally they are handled as tweens
     * 
     * @returns {number}
     */this.totalDuration=function(){return 0;};/**
     * Execute the callback if the parent's direction is coherent with the callback's dir value
     * 
     * @returns {this}
     */this.resume=function(){if(callback&&(dir===null||dir!=parent.reversed())){callback.apply(scope||parent,params);}return this;};};/**
 * Tweene - JavaScript Animation Proxy 
 * 
 * @link http://tweene.com
 *   
 * Copyright (c) 2014, Federico Orru'   <federico@buzzler.com>
 * 
 * @license Artistic License 2.0 
 * See LICENSE.txt for details
 * 
 *//**
 * Vars and methods common to every tween, whatever is the driver used
 * @mixin
 * 
 */var TweenCommon=function TweenCommon(){this.type='tween';this._from=null;this._to=null;this._then=null;this._easing=Tw.defaultEasing;this._duration=this._parseTime(Tw.defaultDuration);// could be overriden inside each driver
this._propertyMap={};this._hasMultipleEasing=false;this._allowMultipleEasing=false;this._allowTransform=false;this._immediateStart=true;this._data=null;this._offset=0;/**
     * Used by parent timeline to set the time offset of the tween
     * 
     * @param {number} value
     * @returns {this}
     */this.offset=function(value){this._offset=value;return this;};/**
     * Create and return a timeline using target and driver of the current object
     * 
     * @param {object} params
     * @returns {object}
     */this.line=function(params){return Tw.line(this._target,params,this.driverName);};/**
     * Execute a previously registered macro using this as macro scope
     * 
     * @param {string} name - the name of the macro
     * @returns {this}
     */this.exec=function(name){// all arguments but the first will be passed to the macro
var args=toArray(arguments,1);if(name&&name in Tw._macros){Tw._macros[name].apply(this,args);}return this;};/**
     * Get/Set an easing function for the tween
     * 
     * @param {string|array} [value] You could pass a string shortcut for easing registered in Tweene.easings or a 4-length array that represents 
     * a cubic bezier curve
     * @returns {string|array|this}
     */this.easing=function(value){if(value===void 0){return this._easing;}this._easing=value;return this;};/**
     * Parse arguments and set internal properties, expecting an object considered as "from" style properties
     * 
     * @returns {this}
     */this.from=function(){this.parseArguments(arguments,true,false);this.invalidate();return this;};/**
     * Parse arguments and set internal properties, expecting an object considered as "from" style properties and another one considered as "to" style properties
     * 
     * @returns {this}
     */this.fromTo=function(){this.parseArguments(arguments,true,true);this.invalidate();return this;};/**
     * Parse arguments and set internal properties, expecting an object considered as "to" style properties
     * 
     * @returns {this}
     */this.to=function(){this.parseArguments(arguments,false,true);this.invalidate();return this;};/**
     * Set then style properties
     * @link http://tweene.com/docs/#then
     * 
     * @param {object} values
     * @returns {this}
     */this.then=function(values){this._then=values;this.invalidate();return this;};/**
     * Change style properties instantly, like $('#target').css()
     * @link http://tweene.com/docs/#tweenSet
     * 
     * @param {object} values
     * @returns {this}
     */this.set=function(values){// it runs as a 'to' tween with 0 duration, this allow to schedule it inside a timeline too
if(values){this._to=values;}this.duration(0).play();return this;};/**
     * Perform internal tasks needed before starting the tween
     * 
     * @returns {number} - Returns the tween total duration
     */this.prepare=function(){this._prepare();return this._getTotalDuration();};/**
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
     */this.parseArguments=function(args,needFrom,needTo,needPos){if(!isArray(args)){args=toArray(args);}var values={events:{}},pos=null;if(args.length){// duration passed before properties, like in GSAP
if(isString(args[0])||isNumber(args[0])){values.duration=args.shift();}if(args.length){if(needFrom){values=this._parseDataArg(args.shift(),'from',values);}if(args.length){if(needTo){values=this._parseDataArg(args.shift(),'to',values);}if(args.length){// if not yet passed, check for duration param after the style properties
if(!('duration'in values)&&(isString(args[0])||isNumber(args[0]))){values.duration=args.shift();}if(args.length){// timeline position, when needed, is expected here after duration
if(needPos&&(isString(args[0])||isNumber(args[0]))){pos=args.shift();}if(args.length){if(isString(args[0])||isArray(args[0])){values.easing=args.shift();}else if(!isFunction(args[0])){values=this._parseDataArg(args.shift(),'then',values);}}}// complete callback
if(args.length&&isFunction(args[0])){var evt=['end',args.shift()];if(args.length){evt.push(isArray(args[0])?args[0]:[args[0]]);if(args.length){evt.push(args.shift());}}values.events.end=evt;}}}}}this._applyArguments(values);if(needPos){return pos;}return this;};/**
     * Clear the internal _data cache 
     * 
     */this._reset=function(){this._data=null;};/**
     * Perform internal tasks needed before starting the tween
     * 
     * @returns {this}
     */this._prepare=function(){if(!this._ready){this._reset();if(this._emulatedProgress){// stop the progress ticker on both ends of the tween
this.setCoreHandler('end','_progress',this._stopProgress,this,[]).setCoreHandler('reverse','_progress',this._stopProgress,this,[]);}// fill data with all time values converted to the unit used by the current driver
this._data={delay:convertTime(this._delay,this._coreTimeUnit,this._driverTimeUnit),loopsDelay:convertTime(this._loopsDelay,this._coreTimeUnit,this._driverTimeUnit),duration:convertTime(this._duration,this._coreTimeUnit,this._driverTimeUnit),speed:this._speed,easing:this._easing};this._data.realDuration=this._data.duration/this.getRealSpeed();// flags needed for further actions
this._hasBegin=false;this._hasEnd=false;this._hasThen=false;this._hasTween=false;this._hasPre=false;this._hasMultipleEasing=false;// init data structures for handling display and visibility special properties
this._hasStaticProps=false;this._staticProps=[];this._display={pre:null,begin:null,end:null,then:null,mask:0};this._visibility={pre:null,begin:null,end:null,then:null,mask:0};this._data.tween=this._prepareProperties(this._from,this._to,this._then);this._ready=true;}return this;};/**
     * Return the number of dom elements selected as target for this tween. If the specific library used does not support target objects
     * with a length property, this method should be overriden in the driver class
     * 
     * @returns {number}
     */this._getTargetLength=function(){return this._target.length;};/**
     * Create a common data structure after processing data hold in from, to and then objects, if set
     * 
     * @param {object|null} from
     * @param {object|null} to
     * @param {object|null} then
     * @returns {object|array}
     */this._prepareProperties=function(from,to,then){var tween={};this._prepareSingle(tween,to,'end');this._prepareSingle(tween,from,'begin');this._prepareSingle(tween,then,'then');// if the used animation library does not have native support for play / pause / reverse / resume, it creates a clone of tween structure
// for each single dom target involved
if(this._emulatedPlayhead){var i,end,sortedTween={},tweens=[],name,transformOrder=['x','translateX','y','translateY','z','translateZ','rotateZ','rotate','rotation','rotationZ','rotateX','rotationX','rotateY','rotationY','scale','scaleX','scaleY','scaleZ'];for(i=0,end=transformOrder.length;i<end;i++){name=transformOrder[i];if(name in tween){sortedTween[name]=tween[name];delete tween[name];}}tween=extendObject(sortedTween,tween);for(i=0,end=this._getTargetLength();i<end;i++){tweens[i]=cloneObject(tween,true);}return tweens;}return tween;};/**
     * Process one block of properties
     * 
     * @param {object} tween
     * @param {object} block - one of from, to, then
     * @param {string} type - 'begin' | 'end' | 'then'
     */this._prepareSingle=function(tween,block,type){if(block){block=this._parsePropertiesNames(block);var data;// bit mask used for display and visibility properties
// 1 = then, 2 = 'end', 4 = 'begin'. In case of 'end', value is copied in then too, so 3 is used instead of 2
var maskValue=type=='then'?1:type=='end'?3:4;// _hasBegin | _hasEnd | _hasThen
var hasField='_has'+type.substr(0,1).toUpperCase()+type.substr(1);for(var name in block){if(block.hasOwnProperty(name)){var easing=null,value=block[name],found;// per-property easing
if(isArray(value)){easing=this._allowMultipleEasing?value[1]:null;value=value[0];// per-property easing passed with then object is ignored
this._hasMultipleEasing=easing&&type!='then';}if(name=='display'||name=='visibility'){this['_'+name][type]=value;this._hasStaticProps=true;this['_'+name].mask|=maskValue;// 'then' object is processed after 'end', so if there is a static property there too, it will overwrite correctly the one set by 'end' call
if(type=='end'){this['_'+name].then=value;}continue;}this[hasField]=true;if(type!='then'){this._hasTween=true;}if(type=='end'||!(name in tween)){found=false;data={pre:null,begin:null,end:null,then:null,easing:null,isTransform:false};}else{found=true;data=tween[name];}data[type]=value;if(type!='then'){if(!found){data.easing=easing;}}if(!data.isTransform){data.isTransform=isTransformProperty(name);}tween[name]=data;}}}};/**
     * utility function for splitting tween style values when per-property easing is specified
     * currently used only by GSAP driver, so for simplicity it assumes that this._emulatePlayhead is false and tween data is not cloned 
     * for each dom target
     * 
     * @param {objet} tween
     * @returns {array}
     */this._splitEasing=function(tween){var map={},tweens=[],name,easing,easingName,entry;for(name in tween){entry=tween[name];easing=entry.easing?entry.easing:this._easing;// easing could be a string or an array, so we normalize array values to a string in order to have a proper value for the easing map
easingName=isString(easing)?easing:easing.join('_').replace(/\./g,'p');if(!(easingName in map)){map[easingName]=tweens.length;tweens.push({tween:{},easing:easing});}tweens[map[easingName]].tween[name]=entry;}return tweens;};/**
     * Perform several actions on style properties passed
     * 
     * @param {object} values
     * @returns {object}
     */this._parsePropertiesNames=function(values){var newValues={},newName,subValues;for(var name in values){if(values.hasOwnProperty(name)){// convert dashed names to camelCase version
newName=camelize(name);// split compund properties like padding: 10px 20px to a list of single-valued properties
if(inArray(compoundNames,newName)!==-1){subValues=compoundMapping(newName,values[name]);}else if(this._allowTransform&&inArray(compoundTransforms,newName)!==-1){// split compound transform properties like translate: 10 20 to a list of single-valued transform properties
subValues=transformMapping(newName,values[name]);}else{subValues={};subValues[newName]=values[name];}for(name in subValues){// if found, replace the given name with the alias accepted by the specific animation library
newName=name in this._propertyMap?this._propertyMap[name]:name;// if transformation are not supported (using jQuery as animation library, for example) any transform property is dropped
if(this._allowTransform||!isTransformProperty(newName)){newValues[newName]=subValues[name];}}}}return newValues;};/**
     * Transform the given easing value in the form accepted by the specific animation library. In most of the case, the driver has to override 
     * _getBezierEasing() method 
     * 
     * @param {string|array} value
     * @returns {string|array|function}
     */this._getRealEasing=function(value){// check for shortcut set in Tweene.easings
if(isString(value)&&value in easings){value=easings[value];}// cubic bezier curve array
if(isArray(value)&&value.length==4){value=this._getBezierEasing(value);}return value;};/**
     * Duplicate style properties object and check for any options and event handlers passed together
     * 
     * @param {object} data - only plain object accepted, else it throws an exception 
     * @param {string} name - 'from' | 'to' | 'then'
     * @param {object} values - destination container
     * @returns {object}
     */this._parseDataArg=function(data,name,values){if(!seemsPlainObject(data)){throw'Expected plain object as argument';}data=cloneObject(data,true);var options=this._parseOptions(data,true);var events=this._parseEvents(data,true);if(keys(data).length){values[name]=data;}values=extendObject(values,options);values.events=extendObject(values.events,events);return values;};};/**
 * Tweene - JavaScript Animation Proxy
 *
 * @link http://tweene.com
 *
 * Copyright (c) 2014, Federico Orru'   <federico@buzzler.com>
 *
 * @license Artistic License 2.0
 * See LICENSE.txt for details
 *
 *//**
 * Vars and methods common to every timeline object, whatever is the driver used
 * @mixin
 *
 */var TimelineCommon=function TimelineCommon(){this.type='timeline';this._offset=0;this._children=[];this._cursor=null;this._labels={};/**
     * Add tweens, timelines, callbacks and labels to current timeline object
     * @link http://tweene.com/docs/#timelineAdd
     * @link http://tweene.com/docs/#nestedTimelines
     * @link http://tweene.com/docs/#directionalCallbacks
     * @link http://tweene.com/docs/#labels
     *
     * @param {string|object|number} child - number is accepted only when adding directional callback
     * @param {string|number} [startPosition]
     * @returns {this}
     */this.add=function(child,startPosition){// adding a label
if(isString(child)){// label needs to start with an alphabetic character and cannot contains arithmetic symbols specified in the regexp here
if(child.search(/^[a-z][^\+\-=]*$/)!=-1){child=new Label(child);this._labels[child.id()]=child;}else{throw'The label "'+child+'" contains invalid symbols';}}else{// adding a callback or directional callback
if(isFunction(child)||isNumber(child)&&isFunction(startPosition)){var dir=0,i=0;// when a number is passed as first arg, it is a directional callback and we need to shift left the other params
if(isNumber(child)){dir=child;child=startPosition;startPosition=arguments[2]||null;i=1;}i=i+2;// params expected after the callback
var params=arguments.length>i?isArray(arguments[i])?arguments[i]:[arguments[i]]:[];i++;// callback scope object expected after callback params
var scope=arguments.length>i?arguments[i]:null;child=new Callback(child,scope,params,dir,false);}child.parent(this);}if(startPosition===void 0){startPosition=null;}this._children.push({id:child.id(),child:child,start:startPosition});this.invalidate();return this;};/**
     * Add pause, with an optional callback
     * @link http://tweene.com/docs/#addPause
     *
     * @param {string|number} [startPosition]
     * @param {string|number} [callbackDirection]
     * @param {function} [callback] - callback
     * @param {array} [params] - callback params
     * @param {object} [scope] - callback scope
     * @returns {this}
     */this.addPause=function(){var args=toArray(arguments),startPosition=null,dir=0,callback=null,params=[],scope=null,arg,child;if(args.length){arg=args.shift();if(isFunction(arg)){callback=arg;}else{startPosition=arg;}if(args.length){arg=args.shift();if(!callback){if(isNumber(arg)){dir=arg;if(args.length){callback=args.shift();}}else{callback=arg;}}if(callback&&args.length){params=args.shift();if(!isArray(params)){params=[params];}if(args.length){scope=args.shift();}}}}child=new Callback(callback,scope,params,dir,true);child.parent(this);this._children.push({id:child.id(),child:child,start:startPosition});this.invalidate();return this;};/**
     * Create a tween and execute a previously registered macro on it
     * If the timeline has not a target specified, it expects a target as first param.
     * It expects a position as second (or first) param, all other params are passed to the tween exec() method
     *
     * @returns {this}
     */this.exec=function(){var args=toArray(arguments);if(args.length){var target=this._target?this._target:args.shift();var tween=Tw.get(target,this.driverName);var pos=args.length>1?args.splice(1,1)[0]:null;this.add(tween,pos);tween.exec.apply(tween,args);}return this;};/**
     * Schedule a tween with duration = 0
     * @link http://tweene.com/docs/#timelineSet
     *
     * @returns {this}
     */this.set=function(){var args=toArray(arguments);if(args.length){var target=this._target?this._target:args.shift();var tween=Tw.get(target,this.driverName);if(args.length){var values=args.shift();var pos=args.length?args.shift():null;tween._to=values;tween.duration(0);this.add(tween,pos);}}return this;};/**
     * Shortcut for .add(Tweene.get().to())
     * @link http://tweene.com/docs/#timelineTo
     *
     * @returns {this}
     */this.to=function(){return this._tweenMethod(arguments,false,true);};/**
     * Shortcut for .add(Tweene.get().fromTo())
     * @link http://tweene.com/docs/#timelineFromTo
     *
     * @returns {this}
     */this.fromTo=function(){return this._tweenMethod(arguments,true,true);};/**
     * Shortcut for .add(Tweene.get().from())
     * @link http://tweene.com/docs/#timelineFrom
     *
     * @returns {this}
     */this.from=function(){return this._tweenMethod(arguments,true,false);};/**
     * used internally for setting child timeline time position inside the parent
     *
     * @param {number} value
     * @returns {this}
     */this.offset=function(value){this._offset=value;return this;};/**
     * Timeline need to process its children just before starting or when you ask for duration. See implementation in TimelinePro or
     * in specific drivers
     *
     * @returns {this}
     */this.prepare=function(){if(this._ready){return this;}this._reset();this._mergeChildren();this.ready=true;return this;};/**
     * Perform all the common actions needed by .to(), .from() and .fromTo()
     *
     * @param {arguments} args
     * @param {boolean} from
     * @param {boolean} to
     * @returns {this}
     */this._tweenMethod=function(args,from,to){args=toArray(args);if(args.length){// use first argument as target if the timeline does not have a global target set
var target=this._target?this._target:args.shift();var tween=Tw.get(target,this.driverName);var pos=tween.parseArguments(args,from,to,true);this.add(tween,pos);}return this;};/**
     * Process all the children added evaluating their actual time position inside the timeline
     *
     * @returns {this}
     */this._mergeChildren=function(){if(this._ready){return this;}// cursor will contains the end of the last processed child, while duration holds the overall end of the timeline
this._cursor=this._duration=0;var child,begin,end,start,childDelay,tweenable;for(var i=0,len=this._children.length;i<len;i++){child=this._children[i].child;start=this._children[i].start;tweenable=child.type=='timeline'||child.type=='tween';if(tweenable){// if the child has a delay, remove it from the child and use it as a start offset inside the timeline
childDelay=this._parseTime(child.delay());if(childDelay){this._cursor+=childDelay;this._duration+=childDelay;child.delay(0);}}// evaluate actual start position
begin=this._getStartPosition(this._duration,this._cursor,start);if(child.type=='label'){child.position(begin);this._mergeLabel(child,begin);continue;}if(tweenable){if(child.type=='timeline'){child.offset(this._offset+begin);}// prepare() returns totalDuration
end=begin+child.prepare();this._mergeTweenable(child,begin,end);}else{// callbacks have duration = 0
end=begin;this._mergeCallback(child,begin,end);}// an infinite loop in a child tween or timeline results in its duration = Infinity
if(end!=Infinity){this._cursor=end;if(this._cursor>this._duration){this._duration=this._cursor;}}else{this._cursor=this._duration=Infinity;}}return this;};/**
     * Evaluate actual time position of a child inside a timeline
     *
     * @param {number} currentDuration
     * @param {number} currentCursor - end of the previously processed child
     * @param {string|number} startPosition
     *
     * @returns {number}
     */this._getStartPosition=function(currentDuration,currentCursor,startPosition){// by default, add to the end of the timeline, obtaining a queue of not-overlapping tweens
if(startPosition===null){return currentDuration;}var start=currentDuration,pos,sign=0,toCursor=false;if(isString(startPosition)){// parts:
//  1 - label
//  2 - relative operator, +=, ++=, -=, --=
//  3 - time value, number or string with 's' or 'ms' suffix
var parts=startPosition.match(/^([a-z][^\+\-=]*)?(?:(\+{1,2}|\-{1,2})=)?([^\+\-=]+)?$/i);if(parts===null){return currentDuration;}pos=parts[3]!==void 0?this._parseTime(parts[3]):0;if(parts[2]!==void 0){toCursor=parts[2].length==2;sign=parts[2].substr(0,1)=='-'?-1:1;}if(parts[1]!==void 0&&parts[1]in this._labels){start=this._labels[parts[1]].position();if(!sign){pos=0;sign=1;}}else{if(sign){start=toCursor?currentCursor:currentDuration;}else{start=0;sign=1;}}}else{start=0;sign=1;pos=this._parseTime(startPosition);}if(start==Infinity){return Infinity;}// cannot add child in negative positions, fallback to 0
return Math.max(0,start+pos*sign);};};/**
 * Tweene - JavaScript Animation Proxy 
 * 
 * @link http://tweene.com
 *   
 * Copyright (c) 2014, Federico Orru'   <federico@buzzler.com>
 * 
 * @license Artistic License 2.0 
 * See LICENSE.txt for details
 * 
 *//**
 * Ticker object used to emulate delay, progress callbacks, async calls.
 * It uses RequestAnimationFrame when available, with fallback to setTimeout.
 * We instantiate a single Ticker in Tweene.ticker
 * @class
 * 
 */var Ticker=function Ticker(){var _lastTime=0;var _callbacks=[];this.now=Date.now||function(){return new Date().getTime();};var _now=this.now;/*
     *  Polyfill taken here: https://gist.github.com/paulirish/1579671
     *  
     * requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
     * MIT license    
     *  
     */var _requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(callback){var currTime=_now();var timeToCall=Math.max(0,16-(currTime-_lastTime));var id=window.setTimeout(function(){callback(currTime+timeToCall);},timeToCall);_lastTime=currTime+timeToCall;return id;};var _tick=function _tick(){var now=_now();var i=0;while(i<_callbacks.length){var entry=_callbacks[i];var call=!entry.time||now-entry.now-entry.time>=0;if(call&&entry.time){// remove expired callback
_callbacks.splice(i,1);}else{i++;}if(call){entry.callback.apply(entry.scope,entry.params);}}// ticker is turned off when the callbacks list is empty
if(_callbacks.length){_requestAnimationFrame(_tick);}};/**
     * Register a callback 
     * 
     * @param {number} time - Timeout in ms. When = 0, the function will be called on each tick and need to be unregistered manually
     * @param {string} id - unique identifier of the registered callback
     * @param {function} callback
     * @param {object} [scope] scope used as 'this' inside the callback
     * @param {array} [params] params to be passed to the callback on execution
     * @returns {this}
     */this.addCallback=function(time,id,callback,scope,params){this.removeCallback(id);_callbacks.push({now:_now(),time:time,id:id,callback:callback,scope:scope||this,params:params||[]});// turn on ticker if it is the first callback in queue
if(_callbacks.length==1){_requestAnimationFrame(_tick);}return this;};/**
     * Unregister a callback. Callbacks registered with a positive timeout, commonly do not need to be unregistered manually, 
     * the ticker unregister them after automatically after their execution.
     * 
     * @param {string} id - unique identifier of the registered callback
     * @returns {this}
     */this.removeCallback=function(id){for(var i=0,end=_callbacks.length;i<end;i++){if(_callbacks[i].id==id){_callbacks.splice(i,1);break;}}return this;};};Tw.ticker=new Ticker();/**
 * Tweene - JavaScript Animation Proxy
 *
 * @link http://tweene.com
 *
 * Copyright (c) 2014, Federico Orru'   <federico@buzzler.com>
 *
 * @license Artistic License 2.0
 * See LICENSE.txt for details
 *
 *//**
 * Vars and methods common to tween and timeline, for animation library that does not have native support
 * for playhead control (play / pause / reverse and so on)
 * @mixin
 *
 */var ControlsPro=function ControlsPro(){this._time=null;this._startTime=0;this._pauseTime=0;this._position=0;this._paused=true;this._running=false;this._delayDummy=null;this._emulatedProgress=false;this._emulatedBegin=false;this._playAllowed=true;this._reverseAllowed=false;/**
     * play() and reverse() acts on both global and local direction (_fwd and _localFwd properties), while the change
     * in direction performed during a yoyo loop changes only local direction
     *
     * @param {boolean} value
     * @returns {this}
     */this.setDir=function(value){this._fwd=value;this.setLocalDir(value);return this;};/**
     * Change the actual local direction of the animation
     *
     * @param {boolean} value
     * @returns {this}
     */this.setLocalDir=function(value){this._localFwd=value;// change direction of the delay too
if(this._delayDummy){this._delayDummy.setDir(value);}// when changing direction of a timeline, the change cascades to children
if(this.type!='tween'){this._propagateToAll('setDir',value);}return this;};/**
     * Swap the global direction, from forward to backward or vice versa
     *
     * @returns {this}
     */this.swapDir=function(){this._fwd=!this._fwd;this.swapLocalDir();return this;};/**
     * Swap the actual local direction, from forward to backward or vice versa
     *
     * @returns {this}
     */this.swapLocalDir=function(){this._localFwd=!this._localFwd;if(this._delayDummy){this._delayDummy.swapDir();}if(this.type!='tween'){this._propagateToAll('swapDir');}return this;};/**
     * Override Common.play()
     *
     */this.play=function(){// play not allowed when the current playhead position is at the end of the duration
if(this._playAllowed){this._reverseAllowed=true;if(!this._fwd){this.pause();this.swapDir();}this.resume();}return this;};/**
     * Override Common.reverse()
     *
     */this.reverse=function(){// reverse is not allowed when the playhead position is equal to 0 (begin of the current animation)
if(this._reverseAllowed){this._playAllowed=true;if(this._fwd){this.pause();this.swapDir();}this.resume();}return this;};/**
     * Override Common.pause()
     *
     */this.pause=function(){//        console.log(this._id, 'pause');
// if not ready, it means that is not yet started, so no need to perform a pause
if(this._ready){// stop progress ticker, if present
this._stopProgress();// propagate pause to delay, if present
if(this._delayDummy){this._delayDummy.pause();this._paused=true;return this;}if(!this._paused){//                console.log(this._id, 'pausing');
this._paused=true;this._pauseTime=Tw.ticker.now();// evaluate pause position on playhead
this._position+=(this._pauseTime-this._startTime)*this.getRealSpeed()*(this._localFwd?1:-1);this._pauseTween();}}return this;};/**
     * Override Common.resume()
     *
     */this.resume=function(){//        if(this._parent && this._parent.paused())
//        {
//            return this;
//        }
//        console.log(this._id, 'resume', (this._parent && this._parent.paused()? 'parent paused': 'parent running'));
if(this._paused&&(this._fwd&&this._playAllowed||!this._fwd&&this._reverseAllowed)){this._paused=false;this.prepare();// propagate resume to delay, if present
if(this._delayDummy){this._delayDummy.resume();return this;}// evaluate remaining duration, accordingly with current position, direction and speed
if(this.type!='timeline'){var duration=this._localFwd?this._duration-this._position:this._position;this._data.duration=convertTime(duration,this._coreTimeUnit,this._driverTimeUnit);this._data.realDuration=this._data.duration/this.getRealSpeed();}this._startTime=Tw.ticker.now();if(this._duration){this._playAllowed=true;this._reverseAllowed=true;}// always true after the very first execution of resume()
if(this._running){if(this._duration){// resume progress ticker, if needed
this._startProgress();}// when the animation library does not have native support for begin callback
if(this._emulatedBegin&&this._hasHandlers('_begin')){this._runHandlers('_begin');}// at both ends of the tween (begin in forward dir, end in backward dir) perform preTween actions
if(this.type!='timeline'&&(this._position===0&&this._localFwd||this._position==this._duration&&!this._localFwd)){this._preTween(this._localFwd);}this._resumeTween();}else{this._loopsCount=0;// we need pausable and reversable delay, so we ignore any native support for delay and always emulate it
if(this._delay){this._emulateDelay(this._delay,this._run);}else{this._run();}}}return this;};/**
     * Override Common.restart()
     *
     */this.restart=function(){if(this._keyCurrentIndex!==null){this._keyCurrentIndex=null;}this.pause();this.setDir(true);this.back();this.resume();return this;};/**
     * Override Common.back()
     *
     */this.back=function(){// reset loop counter accordingly with direction
if(this._loops){if(this._fwd){this._loopsCount=0;}else{if(this._loops!=-1){this._loopsCount=this._loops+1;}}}if(this._running){this._back();}this._playAllowed=this._fwd;this._reverseAllowed=!this._playAllowed;return this;};/**
     * Override Common.speed()
     *
     */this.speed=function(value){if(value===void 0){return this._speed;}if(!this._running){this.invalidate();}value=parseSpeed(value);if(value!=this._speed){// changing speed in running animations is performed pausing and immediately resuming with the new speed
var notPaused=!this._paused;if(notPaused){this.pause();}this._speed=value;if(notPaused){this.resume();}}return this;};/**
     * Calculate current time position, needed only by info methods like time() and progress()
     *
     * @returns {number}
     */this._getPosition=function(){if(this._time!==null){return this._time;}if(this._paused){return this._position;}var now=Tw.ticker.now();return Math.max(0,this._position+(now-this._startTime)*this.getRealSpeed()*(this._localFwd?1:-1));};/**
     * Calculate the current percent progress, as a value between 0 and 1
     *
     * @returns {number}
     */this._getProgress=function(){return Math.max(0,Math.min(1,this._getPosition()/this._duration));};/**
     * Get the current running status
     *
     * @returns {boolean}
     */this._getPaused=function(){return this._paused;};/**
     * Reset the internal playhead position on both ends of animation
     *
     */this._resetPosition=function(){this._paused=true;this._position=this._localFwd?this._duration:0;this._startTime=this._pauseTime=0;};/**
     * Used to emulate a progress / update callback when the driver lacks native support for it
     *
     */this._startProgress=function(){if(this._emulatedProgress&&this._hasHandlers('progress')){// passing 0 as first param, it will fire until it is manually removed
Tw.ticker.addCallback(0,this._id+'_progress',this._runHandlers,this,['progress']);}};/**
     * Used to emulate a progress / update callback when the driver lacks native support for it
     *
     */this._stopProgress=function(){if(this._emulatedProgress&&this._hasHandlers('progress')){Tw.ticker.removeCallback(this._id+'_progress');}};/**
     * Internal method used to restart the animation in both directions.
     *
     */this._restart=function(){this._delayDummy=null;this.pause();this._back();this.resume();};/**
     * Used in loop or manual restart, it reset data and animation to the begin (or end) state accordingly to direction
     *
     * @returns {this}
     */this._back=function(){this._position=this._localFwd?0:this._duration;if(this._running){this._delayDummy=null;var dir=this._localFwd?this._hasPre&&this._offset!==0?'pre':'begin':'end';this._backTween(dir);}return this;};/**
     * Update loop counter when running in backward direction and restart
     *
     */this._loopRev=function(){this._loopsCount--;this._restart();};/**
     * Update loop counter when running in forward direction and restart
     *
     */this._loopFwd=function(){this._runHandlers('loop');if(this._yoyo){this.swapLocalDir();}this._restart();};/**
     * loop controller, performed on both ends of animation, accordingly with current direction and yoyo property
     *
     */this._loopCheck=function(){this._delayDummy=null;if(this._fwd){this._loopsCount++;}else{if(this._yoyo){this.swapLocalDir();}this._runHandlers('loop');}if(this._loopsDelay){if(!this._fwd&&!this._yoyo){// delay is executed on final position in order to have a simmetric animation between both directions
this._back();}this._emulateDelay(this._loopsDelay,this._loopFwd,this._loopRev);}else{if(this._fwd){this._loopFwd();}else{this._loopRev();}}};/**
     * Emulate delay and loopsDelay using a special Dummy Tween
     *
     * @param {number} delay
     * @param {function} callback
     * @param {function} [reverseCallback] - used only in loopsDelay
     */this._emulateDelay=function(delay,callback,reverseCallback){var dummy=this._delayDummy=this._getDummy().duration(delay).setCoreHandler('end',name,callback,this);// only loopsDelay has reverseCallback set
if(reverseCallback){dummy.position(this._fwd?0:delay);// progress callback is not paused during loops delay
if(this._emulatedPlayhead&&this._hasHandlers('progress')){dummy.setCoreHandler('progress','_progress',this._runHandlers,this,['progress']);}dummy.setCoreHandler('reverse',name,reverseCallback,this);}dummy[this._fwd?'play':'reverse']();};/**
     * Internal event handler needed to perform actions at the begin of the animation
     */this._onTweenBegin=function(){if(this._position===0&&this._localFwd){// begin event is not raised on loop iterations
if(this._loopsCount===0){this._runHandlers('begin');}}};/**
     * Internal event handler needed to perform actions at the end of the animation
     */this._onTweenEnd=function(){this._resetPosition();if(this._localFwd){if(this._loopsCount==this._loops){if(this.type!='timeline'){this._postTween('end');}this._playAllowed=false;this._time=this._duration;this._runHandlers('end');this._time=null;}else if(this._loops!==0){this._loopCheck();}}else{if(this._loopsCount===0){if(this.type!='timeline'){this._postTween('begin');}this._reverseAllowed=false;this._time=0;this._runHandlers('reverse');this._time=null;}else if(this._loops!==0){this._loopCheck();}}};/**
     * Create a Dummy object
     * @see TweeneDummy
     *
     * @returns {object}
     */this._getDummy=function(){// Dummy don't need any target
return Tw.get(null,'Dummy');};// register some internal handlers
this.setCoreHandler('_begin','_begin',this._onTweenBegin,this);this.setCoreHandler('_end','_end',this._onTweenEnd,this);};/**
 * Tweene - JavaScript Animation Proxy 
 * 
 * @link http://tweene.com
 *   
 * Copyright (c) 2014, Federico Orru'   <federico@buzzler.com>
 * 
 * @license Artistic License 2.0 
 * See LICENSE.txt for details
 * 
 */// used as cache for vendor-prefixed names
var propertyNames={};/**
 * Get style real name and value, checking for browser prefixes if needed
 * 
 * @param {object} style
 * @param {string} name
 * @returns {array} - return [realName, value]
 */function getProperty(style,name){if(style[name]!==void 0){return[name,style[name]];}if(name in propertyNames){return[propertyNames[name],style[propertyNames[name]]];}name=name.substr(0,1).toUpperCase()+name.substr(1);var prefixes=['webkit','moz','ms','o'],fullName;for(var i=0,end=prefixes.length;i<end;i++){fullName=prefixes[i]+name;if(style[fullName]!==void 0){propertyNames[name]=fullName;return[fullName,style[fullName]];}}return[name,void 0];}/**
 * Reverse a cubic bezier, needed for playing tweens backwards
 * 
 * @param {array} value - 4-length cubic bezier array
 * @returns {array}
 */function reverseBezier(value){return[1-value[2],1-value[3],1-value[0],1-value[1]];}// needed by next func
var bezierEasingCache={};/**
 * Widely based on the great work by Vincent Tan
 * http://polymathprogrammer.com/2007/06/27/reverse-engineering-bezier-curves/
 * 
 * given a bezier curve and current time progress, it returns a new cubic bezier array equal to the remaining part of the curve
 * 
 * @param {Array} oldBezier - 4-length cubic bezier array
 * @param {Number} time -  current progress value, between 0 and 1 
 * @returns {Array}
 */function getNewBezier(oldBezier,time){if(time===0||time===1){return oldBezier;}var cacheName=oldBezier.join('_').replace(/\./g,'p')+'_'+time.toFixed(3);if(cacheName in bezierEasingCache){return bezierEasingCache[cacheName];}var oldBezierFunc=bezier.apply(null,oldBezier);var xInterval=1-time;var startY=oldBezierFunc(time);var sign=startY>1?-1:1;var yInterval=(1-startY)*sign;var u=0.33,v=0.67;var uu=u*xInterval+time;var vv=v*xInterval+time;var p0x=0,p0y=0,p1x=u,p1y=(oldBezierFunc(uu)-startY)*sign/yInterval,p2x=v,p2y=(oldBezierFunc(vv)-startY)*sign/yInterval,p3x=1,p3y=1,compU=1-u,compV=1-v,u2=u*u,u3=u*u*u,v2=v*v,v3=v*v*v,a=3*compU*compU*u,b=3*compU*u2,c=3*compV*compV*v,d=3*compV*v2;var det=a*d-b*c;/* it would not be needed, it's just to honor Murphy's Law */if(det===0){console.log('New Bezier FAIL: Det == 0');return oldBezier;}var compU3=compU*compU*compU,compV3=compV*compV*compV;var q1x=p1x-(compU3*p0x+u3*p3x),q1y=p1y-(compU3*p0y+u3*p3y),q2x=p2x-(compV3*p0x+v3*p3x),q2y=p2y-(compV3*p0y+v3*p3y);var res=[(d*q1x-b*q2x)/det,(d*q1y-b*q2y)/det,(-c*q1x+a*q2x)/det,(-c*q1y+a*q2y)/det];bezierEasingCache[cacheName]=res;return res;}/**
 * Vars and methods used in tween object, for animation library that does not have native support 
 * for playhead control (play / pause / reverse and so on) 
 * @mixin
 * 
 */var TweenPro=function TweenPro(){this._beginReady=this._endReady=this._thenReady=false;/**
     * Called on first tween start
     * 
     * @returns {TweenPro}
     */this._run=function(){if(this._duration){this._startProgress();}// get current display and/or visibility values before starting, if needed
if(this._hasStaticProps){this._fetchStaticProps();this._setStaticProps('tween');}this._running=true;this._delayDummy=null;if(this._emulatedBegin&&this._hasHandlers('_begin')){this._runHandlers('_begin');}// if from() or fromTo() tween, need to jump to begin position before starting the animation
if(this._emulatedFrom&&this._from){this._setTween('begin');}this._startTime=Tw.ticker.now();this._playTween();return this;};/**
     * Used to restore begin or end style values accordingly to current direction
     * 
     * @param {string} field
     */this._backTween=function(field){this._resetTween(field);};/**
     * Set style values accordinglty to the param, and perform postTween actions
     * 
     * @param {string} field
     */this._resetTween=function(field){this._setTween(field);this._postTween(field);};/**
     * Perform actions before starting the tween. Apply to both directions
     * 
     * @param {boolean} direction - true = forward, false = backward
     */this._preTween=function(direction){var field=direction?'begin':'end';if(this._hasStaticProps&&this._duration){this._setStaticProps(field,'tween');}this._setTween(field);};/**
     * Perform actions after ending the tween. Apply to both directions
     * 
     * @param {string} field
     */this._postTween=function(field){if(field=='end'){if(this._hasThen){this._setTween('then');}if(this._hasStaticProps){this._setStaticProps(field,'then');}}else{// if the tween is reversed, restore previous style values
// this is needed in timelines, when a reversed tween is preceded by others that refer common targets, with a time gap between them
// otherwise, during the time gap in reverse direction the targets will have wrong style values
if(this._hasPre){// && this._offset !== 0)
this._setTween('pre');}this._setStaticProps(field);}};/**
     * Get a simple name: value map of style property, ready to be passed to the chosen animation library.
     * If supported, set also the per-property easing specified by the user
     * 
     * @param {object} tween - tween data structure
     * @param {string} field - 'begin' | 'end' | 'pre' | 'then'
     * @param {boolean} isSet - true when the values are needed for changing the style instantly. Easing info are omitted in this case
     * @returns {object}
     */this._getTweenValues=function(tween,field,isSet){var values={},entry,value,name,easing,i=0;for(name in tween){entry=tween[name];value=null;easing=entry.easing;if(entry[field]!==null){i++;// cast pure numeric string to number. This avoid bugs in Transit and other libraries that potentially does not support numeric
// values passed as string
value=isNumeric(entry[field])?Number(entry[field]):entry[field];value=isSet||!this._allowMultipleEasing||!easing?value:[value,this._getRealEasing(easing)];values[name]=value;}}// instead of handling different errors from any library involved, if there are no values to set, we force a fake tween
if(!i){values.opacity='+=0';}return values;};/**
     * Fetch a style value for a dom element
     * 
     * @param {object} item - dom element
     * @param {string} name - property name
     * @param {boolean} useStyle - if true, use element.style instead of computedStyle value
     * @returns {string|number}
     */this._getCurrentValue=function(item,name,useStyle){var style=useStyle?item.style:window.getComputedStyle(item);return style[name];};/**
     * Fetch current values for display and / or visibility properties
     * 
     */this._fetchStaticProps=function(){this._staticProps=[];var item,i,end,names,name,value,fieldName,field,hidden,tweenValue,values;for(i=0,end=this._getTargetLength();i<end;i++){item=this._target.get(i);names={display:false,visibility:false};this._staticProps[i]={begin:{},end:{},then:{},tween:{}};for(name in names){fieldName='_'+name;field=cloneObject(this[fieldName]);if(field.mask>0){if(field.mask<7){value=this._getCurrentValue(item,name,false);if(field.begin===null){field.begin=value;}if(field.end===null){field.end=value;if(field.then===null){field.then=value;}}}values=this._staticProps[i];values.begin[name]=field.begin;values.end[name]=field.end;values.then[name]=field.then;// values that show the element need to be set before the tween
hidden=name=='display'?'none':'hidden';tweenValue=field.begin!=hidden?field.begin:field.end!=hidden?field.end:false;if(tweenValue!==false){values.tween[name]=tweenValue;}}}}};/**
     * Set display and visibility properties, that are handled separately
     * @link http://tweene.com/docs/#displayVisibility
     * 
     * @param {string} first
     * @param {string} [second] two set of values could be applied toghether in some cases, for example end + then or begin + tween
     */this._setStaticProps=function(first,second){if(this._staticProps.length){var i,end,values;for(i=0,end=this._getTargetLength();i<end;i++){values=this._staticProps[i][first];if(second){values=extendObject(values,this._staticProps[i][second]);}if(!isEmpty(values)){this._target.eq(i).css(values);}}}};/**
     * Override TweenCommon._getRealEasing()
     * It generates also custom bezier curves needed for resuming a paused tween honoring the original easing effect
     * 
     * @param {string|array} value
     * @returns {string|array|function}
     */this._getRealEasing=function(value){if(isString(value)&&value in easings){value=easings[value];}if(isArray(value)){var position=this._position;// in backward direction, reverse the bezier curve too
if(!this._localFwd){value=reverseBezier(value);position=this._duration-position;}var timeRatio=position/this._duration;value=this._getBezierEasing(getNewBezier(value,timeRatio));}return value;};};/**
 * Tweene - JavaScript Animation Proxy
 *
 * @link http://tweene.com
 *
 * Copyright (c) 2014, Federico Orru'   <federico@buzzler.com>
 *
 * @license Artistic License 2.0
 * See LICENSE.txt for details
 *
 *//**
 * Vars and methods used in timeline object, for animation library that does not have native support for timelines
 * @mixin
 *
 */var TimelinePro=function TimelinePro(){this._emulatedPlayhead=true;this._emulatedBegin=true;this._emulatedProgress=true;this._runningList={};this._runningCount=0;this._keyframes={};this._index=[];this._childrenList=[];this._backKeyframes={};this._backIndex=[];this._backEnabled=true;this._keyTime=null;this._keyDirection=null;this._keyCurrentIndex=null;/**
     * Cascade a method call to the children that are currently running
     *
     * @param {string} method
     * @returns {this}
     */this._propagate=function(method){var args=toArray(arguments,1);for(var id in this._runningList){this._runningList[id][method].apply(this._runningList[id],args);}return this;};/**
     * Cascade a method call to the all the children, regardless their running status
     *
     * @param {string} method
     * @returns {this}
     */this._propagateToAll=function(method){var args=toArray(arguments,1);for(var i=0,end=this._childrenList.length;i<end;i++){this._childrenList[i][method].apply(this._childrenList[i],args);}return this;};/**
     * Perform internal tasks needed before starting the timeline
     *
     * @returns {number} - Returns the timeline total duration
     */this.prepare=function(){if(this._ready){return this;}var sortInt=function sortInt(a,b){return a-b;};this._reset();if(this._emulatedProgress){this.setCoreHandler('end','_progress',this._stopProgress,this,[]).setCoreHandler('reverse','_progress',this._stopProgress,this,[]);}this._mergeChildren();this._index.sort(sortInt);// empty timeline
if(!this._index.length){this._ready=true;return this;}var i=1;var firstTime=this._index[0];// if the first child does not start at 0, add a dummy to fill to gap
if(firstTime!==0){// prevent the push of 0 at the end of index, because index is already sorted
this._keyframes[0]={f:[],b:[],fTrigger:null,bTrigger:null};this._addDummy(0,firstTime);this._keyframes[0].bTrigger=null;this._index.unshift(0);i++;}// add dummies to fill the gaps between real children, in both directions, so the timeline will work like a queues tree
var time,keyframe,j;for(var len=this._index.length-1;i<len;i++){time=this._index[i];keyframe=this._keyframes[time];if(!keyframe.bTrigger){j=i-1;while(j>0&&!this._keyframes[this._index[j]].bTrigger){j--;}this._addDummy(this._index[j],time);}if(!keyframe.fTrigger){j=i+1;while(j<this._index.length-2&&!this._keyframes[this._index[j]].fTrigger){j++;}this._addDummy(time,this._index[j]);}}this._backIndex.sort(sortInt);this._ready=true;return this._getTotalDuration();};/**
     * Push child to the top level timeline in order to build a sorted index needed for restarting all the tweens in the right order
     *
     * @param {object} tween
     * @param {number} begin
     * @param {number} end
     * @param {number} offset
     * @returns {this}
     */this.pushUp=function(tween,begin,end,offset){if(this._parent){this._parent.pushUp(tween,begin+offset,end+offset,0);}else{if(tween.type=='tween'){tween.offset(begin+offset);}}// add to backIndex
this._addToIndex(tween,begin,end,false,false,true);return this;};/**
     * Reset internal indexes and properties, needed by invalidate()
     *
     */this._reset=function(){this._offset=0;this._cursor=null;this._keyframes={};this._index=[];this._backKeyframes={};this._backIndex=[];};/**
     * Add a dummy child. Dummies are needed to fill gaps between real children.
     * Dummy reverse and end events will trigger the start for other children
     *
     * @param {number} begin
     * @param {number} end
     */this._addDummy=function(begin,end){var dummy=this._getDummy();var res=this._addToIndex(dummy,begin,end,true,true,false);this.pushUp(dummy,begin,end);dummy.parent(this).duration(end-begin).setCoreHandler('reverse','timeline',this._childCallback,this,['b',begin,dummy.id(),res[0]]).setCoreHandler('end','timeline',this._childCallback,this,['f',end,dummy.id(),res[1]]);this._childrenList.push(dummy);};/**
     * Save a children to index or backIndex. Indexes are needed to start and reset tweens in the right order
     *
     * @param {object} tween - dummy, tween or timeline object
     * @param {number} begin
     * @param {number} end
     * @param {boolean} fTriggering - forward triggering, true when this child is suitable for triggering next children with its end event
     * @param {boolean} bTriggering - backward triggering, true when this child is suitable for triggering previous children with its reverse event
     * @param {boolean} useBack - true = store data in backIndex
     * @returns {array}
     */this._addToIndex=function(tween,begin,end,fTriggering,bTriggering,useBack){var keyframes,index,firstBegin,firstEnd;if(useBack){keyframes=this._backKeyframes;index=this._backIndex;}else{keyframes=this._keyframes;index=this._index;}if(!(begin in keyframes)){keyframes[begin]={f:[],b:[],fc:[],bc:[],fTrigger:null,bTrigger:null};index.push(begin);}if(tween.type=='callback'){keyframes[begin].fc.push(tween);}else{keyframes[begin].f.push(tween);}// use only one child for each keyframe trigger in forward direction
firstBegin=fTriggering&&!this._keyframes[begin].fTrigger;if(firstBegin){keyframes[begin].fTrigger=tween;}if(end!=Infinity){if(!(end in keyframes)){keyframes[end]={f:[],b:[],fc:[],bc:[],fTrigger:null,bTrigger:null};index.push(end);}if(tween.type=='callback'){keyframes[end].bc.push(tween);}else{keyframes[end].b.push(tween);}// use only one child for each keyframe trigger in backward direction
firstEnd=bTriggering&&!this._keyframes[end].bTrigger;if(firstEnd){keyframes[end].bTrigger=tween;}}return[firstBegin,firstEnd];};/**
     * Available for drivers that need to perform extra operation with labels
     *
     * @param {object} child - Label object
     * @param {number} begin - label position inside the timeline
     */this._mergeLabel=function(child,begin){}// nop
/**
     * Merge tweens and timelines inside their parent timeline
     *
     * @param {object} child - tween or timeline
     * @param {number} begin
     * @param {number} end
     */;this._mergeTweenable=function(child,begin,end){this._childrenList.push(child);this._mergeElement(child,begin,end,true);};/**
     * Merge callbacks inside their parent timeline
     *
     * @param {object} child - Callback object
     * @param {number} begin
     * @param {number} end
     */this._mergeCallback=function(child,begin,end){this._mergeElement(child,begin,end,false);};/**
     * Finalize the merging of tweens, timelines and callbacks
     *
     * @param {object} child
     * @param {number} begin
     * @param {number} end
     * @param {boolean} tweenable - true for tweens and timelines
     * @returns {undefined}
     */this._mergeElement=function(child,begin,end,tweenable){// trigger will be true only for tweenable children with positive duration (callbacks have end = begin)
var trigger=end>begin;var res=this._addToIndex(child,begin,end,trigger,trigger,false);if(tweenable){this.pushUp(child,begin,end,this._offset);child.setCoreHandler('reverse','timeline',this._childCallback,this,['b',begin,child.id(),res[0]]);if(end!=Infinity){child.setCoreHandler('end','timeline',this._childCallback,this,['f',end,child.id(),res[1]]);}}};/**
     * Called by each child on reverse and end events. Used for update runningList and trigger the start of other previous or next children
     *
     * @param {string} direction - 'b' = backward | 'f' = forward
     * @param {number} time
     * @param {number} id - unique identifier of the child
     * @param {boolean} isKeyChild - true when the child is enabled to trigger the start of other children
     */this._childCallback=function(direction,time,id,isKeyChild){// remove from runningList
if(id in this._runningList){delete this._runningList[id];this._runningCount--;}if(isKeyChild){if(time in this._keyframes){this._processKeyframe(time,direction,null);}}};this._processKeyframe=function(time,direction,currentIndex){this._keyCurrentIndex=null;var cDirection=direction+'c',cList=this._keyframes[time][cDirection],tList=this._keyframes[time][direction],i,end,offset,item,paused=false;if(cList.length){if(direction=='f'){i=currentIndex!==null?currentIndex+1:0;end=cList.length;offset=1;}else{i=currentIndex!==null?currentIndex-1:cList.length-1;end=-1;offset=-1;}for(;i!=end;i+=offset){item=cList[i];if(item.isPause){paused=true;this._keyTime=time;this._keyDirection=direction;this._keyCurrentIndex=i;this.pause();}// also callback are executed by resume()
item.resume();if(paused){break;}}}if(!paused){if(tList.length){for(i=0,end=tList.length;i<end;i++){item=tList[i];this._addToRun(item);item.resume();}}// emulate end / reverse events
if(direction=='b'&&time===0||direction=='f'&&time==this._index[this._index.length-1]){this._runHandlers('_end');}}return paused;};/**
     * Called on first timeline start
     *
     * @returns {this}
     */this._run=function(){this._running=true;this._delayDummy=null;if(this._emulatedBegin&&this._hasHandlers('_begin')){this._runHandlers('_begin');}this._startTime=Tw.ticker.now();this._playTween();return this;};/**
     * trigger the start of the first keyframe
     *
     */this._playTween=function(){this._childCallback('f',0,-1,true);};/**
     * propagate pause to the running children
     *
     */this._pauseTween=function(){this._propagate('pause');};/**
     * if running, propagate resume to running children, else trigger first or last keyframe accordingly with current direction
     */this._resumeTween=function(){var runningCount=this._runningCount,paused=false;this._startProgress();if(this._keyCurrentIndex!==null){this._keyDirection=this._localFwd?'f':'b';paused=this._processKeyframe(this._keyTime,this._keyDirection,this._keyCurrentIndex);}if(!paused){if(runningCount){this._propagate('resume');}else{var args=false,direction=this._localFwd;if(direction&&this._position===0){args=['f',0,-1,true];}else if(!direction&&this._position==this._duration){args=['b',this._index.length?this._index[this._index.length-1]:0,-1,true];}if(args){this._childCallback.apply(this,args);}}}};/**
     * Go to final or start position resetting also the children, accordingly with current direction
     *
     */this._backTween=function(){// clear running List
this._runningList={};this._runningCount=0;// timeline disable back in nested timelines when going back
if(!this._backEnabled){return;}var i,end,inc,type,elemList,time;// reset tweens in reverse order, in order to restore all the style properties correctly
if(this._localFwd){i=this._backIndex.length-1;end=-1;inc=-1;type='f';}else{i=0;end=this._backIndex.length;inc=1;type='b';}for(;i!=end;i+=inc){time=this._backIndex[i];elemList=this._backKeyframes[time][type];for(var j=elemList.length-1;j>=0;j--){var child=elemList[j];// disable back in children timelines
child._backEnabled=false;child.pause().back();child._backEnabled=true;}}};/**
     * Add child to runningList
     *
     * @param {object} child
     * @returns {this}
     */this._addToRun=function(child){if(child.totalDuration()){var id=child.id();// avoid multiple wrong increments of runningCount
if(!(id in this._runningList)){this._runningCount++;this._runningList[id]=child;}}return this;};/**
     * Remove child from runningList
     *
     * @param {object} child
     * @returns {this}
     */this._removeFromRun=function(child){var id=child.id();// avoid multiple wrong decrements of runningCount
if(id in this._runningList){this._runningCount--;delete this._runningList[id];}return this;};};/**
 * Tweene - JavaScript Animation Proxy 
 * 
 * @link http://tweene.com
 *   
 * Copyright (c) 2014, Federico Orru'   <federico@buzzler.com>
 * 
 * @license Artistic License 2.0 
 * See LICENSE.txt for details
 * 
 *//**
 * Dummy tween driver. Dummies are used to emulate delay and to fill time gaps between real tweens inside timelines
 * @class
 * @mixes Common, TweenCommon, ControlsPro, TweenPro
 * 
 * suitable OST https://www.youtube.com/watch?v=GaUqpnHvua8
 * 
 */Tw.registerDriver('Dummy','tween',function(){Common.call(this);TweenCommon.call(this);ControlsPro.call(this);TweenPro.call(this);this._driverTimeUnit='ms';this._emulatedPlayhead=true;this._emulatedProgress=true;this.setCoreHandler('end','resetPos',this._resetPosition,this).setCoreHandler('reverse','resetPos',this._resetPosition,this).setCoreHandler('end','_progress',this._stopProgress,this).setCoreHandler('reverse','_progress',this._stopProgress,this);/**
     * nothing to invalidate here
     * 
     * @returns {this}
     */this.invalidate=function(){return this;};/**
     * Override ControlsPro.pause()
     * 
     * @returns {this}
     */this.pause=function(){if(!this._paused){this._stopProgress();// remove callback from ticker queue
Tw.ticker.removeCallback(this._id);this._paused=true;this._pauseTime=Tw.ticker.now();this._position+=(this._pauseTime-this._startTime)*this.getRealSpeed()*(this._localFwd?1:-1);}return this;};/** 
     * Set internal position of dummy
     * 
     * @param {number} value
     * @returns {this}
     */this.position=function(value){this._position=value;if(value===0){this._playAllowed=true;}else if(value==this._duration){this._reverseAllowed=true;}return this;};/**
     * Set dummy duration
     * 
     * @param {number} value
     * @returns {this}
     */this.duration=function(value){this._duration=value;return this;};/**
     * Override ControlsPro.resume()
     * 
     * @returns {this}
     */this.resume=function(){if(this._paused){this._running=true;this._paused=false;var handler=this._localFwd?'end':'reverse';if(this._localFwd&&this._position===0){this._runHandlers('begin');}var duration=(this._localFwd?this._duration-this._position:this._position)/this.getRealSpeed();if(!duration){this._runHandlers(handler);}else{var params=[duration,this._id,this._runHandlers,this,[handler]];this._startTime=Tw.ticker.now();// add callback in ticker queue
Tw.ticker.addCallback.apply(Tw.ticker,params);this._startProgress();}}return this;};this._backTween=function(){};});/**
 * Tweene - JavaScript Animation Proxy
 *
 * @link http://tweene.com
 *
 * Copyright (c) 2014, Federico Orru'   <federico@buzzler.com>
 *
 * @license Artistic License 2.0
 * See LICENSE.txt for details
 *
 */// needed for scheduling sequences of Tweene.set()
var velocitySetPendings=[];/**
 * Velocity Tween Driver
 *
 * @link http://julian.com/research/velocity/
 * @mixes Common, TweenCommon, ControlsPro, TweenPro
 *
 */Tw.registerDriver('velocity','tween',function(){Common.call(this);TweenCommon.call(this);ControlsPro.call(this);TweenPro.call(this);this._driverTimeUnit='ms';this._emulatedPlayhead=true;this._emulatedFrom=true;this._emulatedLoop=true;this._emulatedDelay=true;this._emulatedBegin=false;this._emulatedProgress=false;this._allowMultipleEasing=true;this._allowTransform=true;this._propertyMap={x:'translateX',y:'translateY',z:'translateZ',rotation:'rotateZ',rotate:'rotateZ',rotationX:'rotateX',rotationY:'rotateY',rotationZ:'rotateZ'};var _css=$.fn.velocity.CSS;this._tweenReady=true;this._pendings=[];this._setPending=false;/**
     * Velocity executes also instant tweens async, so we need to handle an internal schedule
     *
     * @param {function} callback
     * @param {array} [params]
     */this._addPendingCall=function(callback,params){this._pendings.push([callback,params||[]]);};/**
     * Run pending callbacks
     *
     */this._processPendings=function(){for(var i=0,end=this._pendings.length;i<end;i++){this._pendings[i][0].apply(this,this._pendings[i][1]);}// pending processed could push other calls, so we cannot just empty the whole array
this._pendings.splice(0,end);};/**
     * Fetch actual style values from Velocity calls queue, then pass them to a callback
     *
     * @param {object} tween
     * @param {function} callback
     */this._getVelocityValues=function(tween,callback){var calls=$.fn.velocity.State.calls;var name,root,beginValue,endValue,entry=calls[calls.length-1][0][0];for(name in entry){if(isObject(entry[name])&&'startValue'in entry[name]){// Velocity splits some properties in sub-properties
root=_css.Hooks.getRoot(name);if(!(name in tween)){tween[name]={begin:null,end:null,then:null,easing:root in tween?tween[root].easing:null};}beginValue=entry[name].startValue+entry[name].unitType;endValue=entry[name].endValue+entry[name].unitType;callback.call(this,tween,name,root,beginValue,endValue);}}};/**
     * Velocity implements bezier internally, we can send directly the array param
     *
     * @param {array} value
     * @returns {array}
     */this._getBezierEasing=function(value){return value;};/**
     * Save pre-start values in tween structure
     *
     * @param {object} tween
     * @param {string} name
     * @param {string} root
     * @param {string|number} begin
     * @param {string|number} end
     */this._fetchBegin=function(tween,name,root,begin,end){tween[name].begin=end;if(this._hasBegin&&!this._hasEnd){tween[name].end=tween[name].pre=begin;if(this._hasThen&&tween[name].then===null){tween[name].then=begin;}if(root!=name){tween[root].begin=tween[root].end=tween[root].then=null;}this._endReady=true;}else{tween[name].pre=begin;if(tween[name].end===null){tween[name].end=end;}if(root!=name){tween[root].begin=null;}}};/**
     * Save then values in tween structure
     *
     * @param {object} tween
     * @param {string} name
     * @param {string} root
     * @param {string|number} begin
     * @param {string|number} end
     */this._fetchThen=function(tween,name,root,begin,end){tween[name].then=end;if(tween[name].end===null){tween[name].end=begin;}if(tween[name].begin===null){tween[name].begin=tween[name].end;}if(this._hasPre&&tween[name].pre===null){tween[name].pre=this._hasEnd?tween[name].begin:tween[name].end;}if(root!=name){tween[root].begin=tween[root].end=tween[root].then=tween[root].pre=null;}};/**
     * Save post-tween values in tween structure
     *
     * @param {object} tween
     * @param {string} name
     * @param {string} root
     * @param {string|number} begin
     * @param {string|number} end
     */this._fetchEnd=function(tween,name,root,begin,end){tween[name].begin=begin;tween[name].end=end;if(this._hasPre&&tween[name].pre===null){tween[name].pre=begin;}if(this._hasThen&&tween[name].then===null){tween[name].then=end;}if(root!=name){tween[root].begin=tween[root].end=tween[root].pre=tween[root].then=null;}};/**
     * Set css values instantly
     *
     * @param {string} field - 'begin' | 'end' | 'pre' | 'then'
     */this._setTween=function(field){if(!this._tweenReady){this._addPendingCall(this._setTween,[field]);return;}var options,self=this,i,end,tween,values,onComplete=function onComplete(){self._tweenReady=true;self._processPendings();};this._tweenReady=false;for(i=0,end=this._target.length;i<end;i++){tween=this._data.tween[i];values=this._getTweenValues(this._data.tween[i],field,true);options={duration:0,queue:false};if(i==end-1){options.complete=onComplete;}this._target.eq(i).velocity(values,options);if(field=='begin'&&this._hasBegin&&!this._beginReady){this._getVelocityValues(tween,this._fetchBegin);this._hasPre=true;}else if(field=='then'&&this._hasThen&&!this._thenReady){this._getVelocityValues(tween,this._fetchThen);}}if(field=='begin'){this._beginReady=true;}else if(field=='then'){this._thenReady=true;}};/**
     * Execute the effective tween
     *
     */this._playTween=function(){if(!this._tweenReady){this._addPendingCall(this._playTween);return;}// in Velocity also tweens with duration = 0 are async, so we need to handle a queue in order to allow multiple Tweene.set() to run in the right order
if(!this._duration){if(!this._setPending){this._setPending=true;velocitySetPendings.push(this);this.setCoreHandler('_end','setEnd',function(){velocitySetPendings.shift();if(velocitySetPendings.length>0){velocitySetPendings[0]._playTween();}},this);if(velocitySetPendings.length>1){return;}}}var self=this,data=this._data,field=this._localFwd?'end':'begin',i,end,tween,values,options,target,onBegin=function onBegin(){self._runHandlers('_begin');},onComplete=function onComplete(){self._runHandlers('_end');},onProgress=function onProgress(){self._runHandlers('progress');};for(i=0,end=this._target.length;i<end;i++){tween=data.tween[i];target=this._target.eq(i);values=this._getTweenValues(tween,field,data.duration!==0);options={duration:data.realDuration,queue:'tweene_'+this._id};if(data.duration){options.easing=this._getRealEasing(data.easing);}if(i===end-1){options.begin=onBegin;options.complete=onComplete;if(this._hasHandlers('progress')){options.progress=onProgress;}}target.velocity(values,options).dequeue('tweene_'+this._id);if(!this._endReady){this._getVelocityValues(tween,this._fetchEnd);}}this._endReady=true;return this;};/**
     * Pause a running tween
     *
     */this._pauseTween=function(){//        console.log('pausing velocity tween');
this._target.velocity('stop','tweene_'+this._id);//        this._pendings = [];
return this;};this._resumeTween=function(){//        console.log('resuming velocity tween');
return this._playTween();};// need to handle also this with queue
this._oldStaticProps=this._setStaticProps;this._setStaticProps=function(first,second){if(!this._tweenReady){this._addPendingCall(this._setStaticProps,[first,second]);return;}this._oldStaticProps(first,second);};});/**
 * Velocity Timeline Driver
 *
 * @mixes Common, TimelineCommon, ControlsPro, TimelinePro
 *
 */Tw.registerDriver('velocity','timeline',function(){Common.call(this);TimelineCommon.call(this);ControlsPro.call(this);TimelinePro.call(this);this._driverTimeUnit='ms';});Tw.defaultTimeUnit='ms';Tw.defaultDriver='velocity';return Tw;};module.exports=function(env){if(window&&!window.jQuery)window.jQuery=window.$=env.jQuery;var mod=require('velocity-animate');return func(env);};})(typeof global!=='undefined'?global:window);//# sourceMappingURL=velocity.js.map