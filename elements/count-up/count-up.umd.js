!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("lit-element/lit-element.js"),require("countup.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","countup.js"],e):e((t=t||self).CountUpElement={},t.litElement_js,t.countup_js)}(this,function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t,e,n){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=u(t)););return t}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value}})(t,e,n||t)}function l(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function p(){var t=l(["\n:host {\n  display: inline-flex;\n  --count-up-color: #000000;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n.wrapper {\n  display: block;\n  text-align: center;\n  width: 100%;\n  height: 100%;\n}\n\n#counter {\n  color: var(--count-up-color);\n  font-weight: var(--count-up-number-font-weight);\n  font-size: var(--count-up-number-font-size);\n}\n      "]);return p=function(){return t},t}function f(){var t=l(['\n\n<div class="wrapper">\n  <slot name="prefix"></slot>\n  <div id="counter"></div>\n  <slot name="suffix"></slot>\n</div>']);return f=function(){return t},t}var d=function(t){function r(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),(t=a(this,u(r).call(this))).start=0,t.end=100,t.duration=2.5,t.noeasing=!1,t.decimalplaces=0,t.separator=",",t.decimal=".",t.prefixtext=" ",t.suffixtext=" ",t.thresholds=[0,.25,.5,.75,1],t.rootMargin="0px",t.visibleLimit=.5,t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(r,e.LitElement),i(r,[{key:"render",value:function(){return e.html(f())}}],[{key:"styles",get:function(){return[e.css(p())]}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Count up",description:"count up js wrapper with minimal styling",icon:"icons:android",color:"green",groups:["Up"],handles:[{type:"todo:read-the-docs-for-usage"}],meta:{author:"btopro",owner:"The Pennsylvania State University"}},settings:{quick:[],configure:[{property:"start",description:"",inputMethod:"textfield"},{property:"end",description:"",inputMethod:"textfield"},{property:"duration",description:"",inputMethod:"textfield"},{property:"noeasing",description:"",inputMethod:"boolean"},{property:"decimalplaces",description:"",inputMethod:"textfield"},{property:"separator",description:"",inputMethod:"textfield"},{property:"decimal",description:"",inputMethod:"textfield"},{property:"prefix",description:"",inputMethod:"textfield"},{property:"suffix",description:"",inputMethod:"textfield"}],advanced:[]}}}},{key:"properties",get:function(){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){o(t,e,n[e])})}return t}({},s(u(r),"properties",this),{start:{type:Number},end:{type:Number},duration:{type:Number},noeasing:{type:Boolean},decimalplaces:{type:Number},separator:{type:String},decimal:{type:String},prefixtext:{type:String},suffixtext:{type:String},thresholds:{type:Array},rootMargin:{type:String,attribute:"root-margin"},ratio:{type:Number,reflect:!0},visibleLimit:{type:Number,reflect:!0,attribute:"visible-limit"}})}},{key:"tag",get:function(){return"count-up"}}]),i(r,[{key:"connectedCallback",value:function(){s(u(r.prototype),"connectedCallback",this).call(this),this.observer=new IntersectionObserver(this.handleIntersectionCallback.bind(this),{root:document.rootElement,rootMargin:this.rootMargin,threshold:this.thresholds}),this.observer.observe(this)}},{key:"disconnectedCallback",value:function(){this.observer.disconnect(),s(u(r.prototype),"disconnectedCallback",this).call(this)}},{key:"firstUpdated",value:function(){var t={startVal:this.start,decimalPlaces:this.decimalplaces,duration:this.duration,useEasing:!this.noeasing,separator:this.separator,decimal:this.decimal,prefix:this.prefixtext,suffix:this.suffixtext};this._countUp=new n.CountUp(this.shadowRoot.querySelector("#counter"),this.end,t)}},{key:"handleIntersectionCallback",value:function(t){if(this._countUp){var e=!0,n=!1,r=void 0;try{for(var i,o=t[Symbol.iterator]();!(e=(i=o.next()).done);e=!0){var u=i.value;this.ratio=Number(u.intersectionRatio).toFixed(2),this.ratio>=this.visibleLimit&&this._countUp.start()}}catch(t){n=!0,r=t}finally{try{e||null==o.return||o.return()}finally{if(n)throw r}}}}}]),r}();customElements.define(d.tag,d),t.CountUp=n.CountUp,t.CountUpElement=d,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=count-up.umd.js.map
