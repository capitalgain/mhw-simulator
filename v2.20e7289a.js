parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"BVEO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("~/app/util/array");const r=new Set(["EX龍紋ヲ刻マレシ封冠α","EX龍紋ヲ刻マレシ封冠β","EX龍紋ヲ刻マレシ封鎧α","EX龍紋ヲ刻マレシ封鎧β","EX龍紋ヲ刻マレシ封甲α","EX龍紋ヲ刻マレシ封甲β","EX龍紋ヲ刻マレシ封帯α","EX龍紋ヲ刻マレシ封帯β","EX龍紋ヲ刻マレシ封靴α","EX龍紋ヲ刻マレシ封靴β"]);var t=t=>{const s=(0,e.fromEntries)(Object.entries(t.ignoreArmors).filter(([e])=>!r.has(e)));return Object.assign(Object.assign({},t),{ignoreArmors:s})};exports.default=t;
},{"~/app/util/array":"CcrE"}]},{},[], null)
//# sourceMappingURL=https://imasanari.github.io/mhw-simulator/v2.20e7289a.js.map