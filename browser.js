// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,o;t=this,o=function(){"use strict";function t(t,o){return t===o?0!==t||1/t==1/o:t!=t&&o!=o}var o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),n=Object.prototype.toString,e=Object.prototype.hasOwnProperty,r="function"==typeof Symbol?Symbol:void 0,l="function"==typeof r?r.toStringTag:"",f=o&&"symbol"==typeof Symbol.toStringTag?function(t){var o,r,f,a,i;if(null==t)return n.call(t);r=t[l],i=l,o=null!=(a=t)&&e.call(a,i);try{t[l]=void 0}catch(o){return n.call(t)}return f=n.call(t),o?t[l]=r:delete t[l],f}:function(t){return n.call(t)},a="function"==typeof Float64Array,i="function"==typeof Float64Array?Float64Array:null,u="function"==typeof Float64Array?Float64Array:void 0,y=function(){var t,o,n;if("function"!=typeof i)return!1;try{o=new i([1,3.14,-3.14,NaN]),n=o,t=(a&&n instanceof Float64Array||"[object Float64Array]"===f(n))&&1===o[0]&&3.14===o[1]&&-3.14===o[2]&&o[3]!=o[3]}catch(o){t=!1}return t}()?u:function(){throw new Error("not implemented")};function c(t){var o=new y(2);return o[0]=t.re,o[1]=t.im,o}return function(o,n){var e=c(o),r=c(n);return t(e[0],r[0])&&t(e[1],r[1])}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):(t="undefined"!=typeof globalThis?globalThis:t||self).isSameValue=o();
//# sourceMappingURL=browser.js.map
