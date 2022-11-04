// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var r=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;var o="function"==typeof Symbol?Symbol.toStringTag:"";var a=t&&"symbol"==typeof Symbol.toStringTag?function(t){var a,e,i,y,f;if(null==t)return r.call(t);e=t[o],f=o,a=null!=(y=t)&&n.call(y,f);try{t[o]=void 0}catch(n){return r.call(t)}return i=r.call(t),a?t[o]=e:delete t[o],i}:function(t){return r.call(t)},e="function"==typeof Float64Array;var i="function"==typeof Float64Array?Float64Array:null;var y="function"==typeof Float64Array?Float64Array:void 0;var f=function(){var t,r,n;if("function"!=typeof i)return!1;try{r=new i([1,3.14,-3.14,NaN]),n=r,t=(e&&n instanceof Float64Array||"[object Float64Array]"===a(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?y:function(){throw new Error("not implemented")},c="function"==typeof Float32Array;var u=Number.POSITIVE_INFINITY,l="function"==typeof Float32Array?Float32Array:null;var A="function"==typeof Float32Array?Float32Array:void 0;var p=function(){var t,r,n;if("function"!=typeof l)return!1;try{r=new l([1,3.14,-3.14,5e40]),n=r,t=(c&&n instanceof Float32Array||"[object Float32Array]"===a(n))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===u}catch(r){t=!1}return t}()?A:function(){throw new Error("not implemented")},v="function"==typeof Int16Array;var m="function"==typeof Int16Array?Int16Array:null;var d="function"==typeof Int16Array?Int16Array:void 0;var w=function(){var t,r,n;if("function"!=typeof m)return!1;try{r=new m([1,3.14,-3.14,32768]),n=r,t=(v&&n instanceof Int16Array||"[object Int16Array]"===a(n))&&1===r[0]&&3===r[1]&&-3===r[2]&&-32768===r[3]}catch(r){t=!1}return t}()?d:function(){throw new Error("not implemented")},U="function"==typeof Int32Array;var I="function"==typeof Int32Array?Int32Array:null;var h="function"==typeof Int32Array?Int32Array:void 0;var b=function(){var t,r,n;if("function"!=typeof I)return!1;try{r=new I([1,3.14,-3.14,2147483648]),n=r,t=(U&&n instanceof Int32Array||"[object Int32Array]"===a(n))&&1===r[0]&&3===r[1]&&-3===r[2]&&-2147483648===r[3]}catch(r){t=!1}return t}()?h:function(){throw new Error("not implemented")},F="function"==typeof Int8Array;var s="function"==typeof Int8Array?Int8Array:null;var j="function"==typeof Int8Array?Int8Array:void 0;var E=function(){var t,r,n;if("function"!=typeof s)return!1;try{r=new s([1,3.14,-3.14,128]),n=r,t=(F&&n instanceof Int8Array||"[object Int8Array]"===a(n))&&1===r[0]&&3===r[1]&&-3===r[2]&&-128===r[3]}catch(r){t=!1}return t}()?j:function(){throw new Error("not implemented")},S="function"==typeof Uint16Array;var C="function"==typeof Uint16Array?Uint16Array:null;var g="function"==typeof Uint16Array?Uint16Array:void 0;var N=function(){var t,r,n;if("function"!=typeof C)return!1;try{r=new C(r=[1,3.14,-3.14,65536,65537]),n=r,t=(S&&n instanceof Uint16Array||"[object Uint16Array]"===a(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?g:function(){throw new Error("not implemented")},O="function"==typeof Uint32Array;var T="function"==typeof Uint32Array?Uint32Array:null;var P="function"==typeof Uint32Array?Uint32Array:void 0;var x=function(){var t,r,n;if("function"!=typeof T)return!1;try{r=new T(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(O&&n instanceof Uint32Array||"[object Uint32Array]"===a(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?P:function(){throw new Error("not implemented")},V="function"==typeof Uint8Array;var Y="function"==typeof Uint8Array?Uint8Array:null;var _,k="function"==typeof Uint8Array?Uint8Array:void 0;_=function(){var t,r,n;if("function"!=typeof Y)return!1;try{r=new Y(r=[1,3.14,-3.14,256,257]),n=r,t=(V&&n instanceof Uint8Array||"[object Uint8Array]"===a(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?k:function(){throw new Error("not implemented")};var q="function"==typeof Uint8ClampedArray;var z="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var B="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var D={float64:f,float32:p,int16:w,int32:b,int8:E,uint16:N,uint32:x,uint8:_,uint8c:function(){var t,r,n;if("function"!=typeof z)return!1;try{r=new z([-1,0,1,3.14,4.99,255,256]),n=r,t=(q&&n instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===a(n))&&0===r[0]&&0===r[1]&&1===r[2]&&3===r[3]&&5===r[4]&&255===r[5]&&255===r[6]}catch(r){t=!1}return t}()?B:function(){throw new Error("not implemented")}};function G(t){return D[t]||null}export{G as default};
//# sourceMappingURL=mod.js.map
