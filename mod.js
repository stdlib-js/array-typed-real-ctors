// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var n=Object.prototype.toString;var r=Object.prototype.hasOwnProperty;var o="function"==typeof Symbol?Symbol:void 0,a="function"==typeof o?o.toStringTag:"";var e=t&&"symbol"==typeof Symbol.toStringTag?function(t){var o,e,i,f,y;if(null==t)return n.call(t);e=t[a],y=a,o=null!=(f=t)&&r.call(f,y);try{t[a]=void 0}catch(r){return n.call(t)}return i=n.call(t),o?t[a]=e:delete t[a],i}:function(t){return n.call(t)},i="function"==typeof Float64Array;var f="function"==typeof Float64Array?Float64Array:null;var y="function"==typeof Float64Array?Float64Array:void 0;var c=function(){var t,n,r;if("function"!=typeof f)return!1;try{n=new f([1,3.14,-3.14,NaN]),r=n,t=(i&&r instanceof Float64Array||"[object Float64Array]"===e(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?y:function(){throw new Error("not implemented")},u="function"==typeof Float32Array;var l=Number.POSITIVE_INFINITY,p="function"==typeof Float32Array?Float32Array:null;var A="function"==typeof Float32Array?Float32Array:void 0;var v=function(){var t,n,r;if("function"!=typeof p)return!1;try{n=new p([1,3.14,-3.14,5e40]),r=n,t=(u&&r instanceof Float32Array||"[object Float32Array]"===e(r))&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===l}catch(n){t=!1}return t}()?A:function(){throw new Error("not implemented")},m="function"==typeof Int16Array;var d="function"==typeof Int16Array?Int16Array:null;var w="function"==typeof Int16Array?Int16Array:void 0;var U=function(){var t,n,r;if("function"!=typeof d)return!1;try{n=new d([1,3.14,-3.14,32768]),r=n,t=(m&&r instanceof Int16Array||"[object Int16Array]"===e(r))&&1===n[0]&&3===n[1]&&-3===n[2]&&-32768===n[3]}catch(n){t=!1}return t}()?w:function(){throw new Error("not implemented")},I="function"==typeof Int32Array;var h="function"==typeof Int32Array?Int32Array:null;var b="function"==typeof Int32Array?Int32Array:void 0;var F=function(){var t,n,r;if("function"!=typeof h)return!1;try{n=new h([1,3.14,-3.14,2147483648]),r=n,t=(I&&r instanceof Int32Array||"[object Int32Array]"===e(r))&&1===n[0]&&3===n[1]&&-3===n[2]&&-2147483648===n[3]}catch(n){t=!1}return t}()?b:function(){throw new Error("not implemented")},s="function"==typeof Int8Array;var j="function"==typeof Int8Array?Int8Array:null;var E="function"==typeof Int8Array?Int8Array:void 0;var S=function(){var t,n,r;if("function"!=typeof j)return!1;try{n=new j([1,3.14,-3.14,128]),r=n,t=(s&&r instanceof Int8Array||"[object Int8Array]"===e(r))&&1===n[0]&&3===n[1]&&-3===n[2]&&-128===n[3]}catch(n){t=!1}return t}()?E:function(){throw new Error("not implemented")},C="function"==typeof Uint16Array;var g="function"==typeof Uint16Array?Uint16Array:null;var N="function"==typeof Uint16Array?Uint16Array:void 0;var O=function(){var t,n,r;if("function"!=typeof g)return!1;try{n=new g(n=[1,3.14,-3.14,65536,65537]),r=n,t=(C&&r instanceof Uint16Array||"[object Uint16Array]"===e(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?N:function(){throw new Error("not implemented")},T="function"==typeof Uint32Array;var P="function"==typeof Uint32Array?Uint32Array:null;var x="function"==typeof Uint32Array?Uint32Array:void 0;var V=function(){var t,n,r;if("function"!=typeof P)return!1;try{n=new P(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(T&&r instanceof Uint32Array||"[object Uint32Array]"===e(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?x:function(){throw new Error("not implemented")},Y="function"==typeof Uint8Array;var _="function"==typeof Uint8Array?Uint8Array:null;var k,q="function"==typeof Uint8Array?Uint8Array:void 0;k=function(){var t,n,r;if("function"!=typeof _)return!1;try{n=new _(n=[1,3.14,-3.14,256,257]),r=n,t=(Y&&r instanceof Uint8Array||"[object Uint8Array]"===e(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?q:function(){throw new Error("not implemented")};var z="function"==typeof Uint8ClampedArray;var B="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var D="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var G={float64:c,float32:v,int16:U,int32:F,int8:S,uint16:O,uint32:V,uint8:k,uint8c:function(){var t,n,r;if("function"!=typeof B)return!1;try{n=new B([-1,0,1,3.14,4.99,255,256]),r=n,t=(z&&r instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===e(r))&&0===n[0]&&0===n[1]&&1===n[2]&&3===n[3]&&5===n[4]&&255===n[5]&&255===n[6]}catch(n){t=!1}return t}()?D:function(){throw new Error("not implemented")}};function H(t){return G[t]||null}export{H as default};
//# sourceMappingURL=mod.js.map