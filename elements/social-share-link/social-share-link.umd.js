!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js"],t):t((e=e||self).SocialShareLink={},e.polymerElement_js)}(this,function(e,t){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e,t,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r(e)););return e}(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function u(){var e,t,n=(e=["\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>\n<div>[[title]]</div>"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return u=function(){return n},n}var f=function(e){function f(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),l(this,r(f).apply(this,arguments))}var a,p,y;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(f,t.PolymerElement),a=f,y=[{key:"template",get:function(){return t.html(u())}},{key:"properties",get:function(){return{title:{name:"title",type:"String",value:"",reflectToAttribute:!0,observer:"_titleChanged"}}}},{key:"tag",get:function(){return"social-share-link"}}],(p=[{key:"connectedCallback",value:function(){c(r(f.prototype),"connectedCallback",this).call(this)}},{key:"_titleChanged",value:function(e,t){"undefined"!==n(e)&&console.log(e)}}])&&o(a.prototype,p),y&&o(a,y),f}();window.customElements.define(f.tag,f),e.SocialShareLink=f,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=social-share-link.umd.js.map