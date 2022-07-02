// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var t=function(){return n&&"symbol"==typeof Symbol.toStringTag},r=Object.prototype.toString,o=r;var e=function(n){return o.call(n)},a=Object.prototype.hasOwnProperty;var i=function(n,t){return null!=n&&a.call(n,t)},f="function"==typeof Symbol?Symbol.toStringTag:"",u=i,y=f,c=r;var l=e,A=function(n){var t,r,o;if(null==n)return c.call(n);r=n[y],t=u(n,y);try{n[y]=void 0}catch(t){return c.call(n)}return o=c.call(n),t?n[y]=r:delete n[y],o},p=t()?A:l,v=p,m="function"==typeof Float64Array;var d="function"==typeof Float64Array?Float64Array:null,w=function(n){return m&&n instanceof Float64Array||"[object Float64Array]"===v(n)},U=d;var I="function"==typeof Float64Array?Float64Array:void 0,h=function(){throw new Error("not implemented")},b=function(){var n,t;if("function"!=typeof U)return!1;try{t=new U([1,3.14,-3.14,NaN]),n=w(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n}()?I:h,F=p,s="function"==typeof Float32Array;var j=function(n){return s&&n instanceof Float32Array||"[object Float32Array]"===F(n)},E=Number.POSITIVE_INFINITY,S="function"==typeof Float32Array?Float32Array:null,C=j,g=E,N=S;var O="function"==typeof Float32Array?Float32Array:void 0,T=function(){throw new Error("not implemented")},P=function(){var n,t;if("function"!=typeof N)return!1;try{t=new N([1,3.14,-3.14,5e40]),n=C(t)&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===g}catch(t){n=!1}return n}()?O:T,x=p,V="function"==typeof Int16Array;var Y="function"==typeof Int16Array?Int16Array:null,_=function(n){return V&&n instanceof Int16Array||"[object Int16Array]"===x(n)},k=Y;var q="function"==typeof Int16Array?Int16Array:void 0,z=function(){throw new Error("not implemented")},B=function(){var n,t;if("function"!=typeof k)return!1;try{t=new k([1,3.14,-3.14,32768]),n=_(t)&&1===t[0]&&3===t[1]&&-3===t[2]&&-32768===t[3]}catch(t){n=!1}return n}()?q:z,D=p,G="function"==typeof Int32Array;var H="function"==typeof Int32Array?Int32Array:null,J=function(n){return G&&n instanceof Int32Array||"[object Int32Array]"===D(n)},K=H;var L="function"==typeof Int32Array?Int32Array:void 0,M=function(){throw new Error("not implemented")},Q=function(){var n,t;if("function"!=typeof K)return!1;try{t=new K([1,3.14,-3.14,2147483648]),n=J(t)&&1===t[0]&&3===t[1]&&-3===t[2]&&-2147483648===t[3]}catch(t){n=!1}return n}()?L:M,R=p,W="function"==typeof Int8Array;var X="function"==typeof Int8Array?Int8Array:null,Z=function(n){return W&&n instanceof Int8Array||"[object Int8Array]"===R(n)},$=X;var nn="function"==typeof Int8Array?Int8Array:void 0,tn=function(){throw new Error("not implemented")},rn=function(){var n,t;if("function"!=typeof $)return!1;try{t=new $([1,3.14,-3.14,128]),n=Z(t)&&1===t[0]&&3===t[1]&&-3===t[2]&&-128===t[3]}catch(t){n=!1}return n}()?nn:tn,on=p,en="function"==typeof Uint16Array;var an="function"==typeof Uint16Array?Uint16Array:null,fn=function(n){return en&&n instanceof Uint16Array||"[object Uint16Array]"===on(n)},un=an;var yn="function"==typeof Uint16Array?Uint16Array:void 0,cn=function(){throw new Error("not implemented")},ln=function(){var n,t;if("function"!=typeof un)return!1;try{t=new un(t=[1,3.14,-3.14,65536,65537]),n=fn(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?yn:cn,An=p,pn="function"==typeof Uint32Array;var vn="function"==typeof Uint32Array?Uint32Array:null,mn=function(n){return pn&&n instanceof Uint32Array||"[object Uint32Array]"===An(n)},dn=vn;var wn="function"==typeof Uint32Array?Uint32Array:void 0,Un=function(){throw new Error("not implemented")},In=function(){var n,t;if("function"!=typeof dn)return!1;try{t=new dn(t=[1,3.14,-3.14,4294967296,4294967297]),n=mn(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?wn:Un,hn=p,bn="function"==typeof Uint8Array;var Fn="function"==typeof Uint8Array?Uint8Array:null,sn=function(n){return bn&&n instanceof Uint8Array||"[object Uint8Array]"===hn(n)},jn=Fn;var En,Sn="function"==typeof Uint8Array?Uint8Array:void 0,Cn=function(){throw new Error("not implemented")};En=function(){var n,t;if("function"!=typeof jn)return!1;try{t=new jn(t=[1,3.14,-3.14,256,257]),n=sn(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?Sn:Cn;var gn=p,Nn="function"==typeof Uint8ClampedArray;var On="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null,Tn=function(n){return Nn&&n instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===gn(n)},Pn=On;var xn="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0,Vn=function(){throw new Error("not implemented")},Yn={float64:b,float32:P,int16:B,int32:Q,int8:rn,uint16:ln,uint32:In,uint8:En,uint8c:function(){var n,t;if("function"!=typeof Pn)return!1;try{t=new Pn([-1,0,1,3.14,4.99,255,256]),n=Tn(t)&&0===t[0]&&0===t[1]&&1===t[2]&&3===t[3]&&5===t[4]&&255===t[5]&&255===t[6]}catch(t){n=!1}return n}()?xn:Vn};function _n(n){return Yn[n]||null}export{_n as default};
//# sourceMappingURL=mod.js.map
