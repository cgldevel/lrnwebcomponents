!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("@polymer/polymer/polymer-element.js"),require("@polymer/polymer/lib/utils/render-status.js"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@polymer/polymer/lib/utils/render-status.js","@lrnwebcomponents/schema-behaviors/schema-behaviors.js"],e):e((t=t||self).PromoTile={},t.polymerElement_js,t.renderStatus_js,t.schemaBehaviors_js)}(this,function(t,e,n,o){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t,e,n){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=a(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function s(){var t,e,n=(t=['\n      <style>\n        :host {\n          display: block;\n        }\n\n        a {\n          text-decoration: var(--promo-tile-a-text-decoration, none);\n          @apply --promo-tile-a;\n        }\n\n        #container {\n          width: var(--promo-tile-container-width, 100%);\n          height: var(--promo-tile-container-height, auto);\n          @apply --promo-tile-container;\n        }\n\n        .back_card {\n          background-color: var(\n            --promo-tile-back-card-background-color,\n            #e2801e\n          );\n          height: var(--promo-tile-back-card-height, 460px);\n          opacity: var(--promo-tile-back-card-opacity, 0);\n          display: var(--promo-tile-back-card-display, flex);\n          flex-direction: var(--promo-tile-back-card-flex-direction, column);\n          @apply --promo-tile-back-card;\n        }\n\n        :host([hover]) #container .back_card {\n          opacity: var(--promo-tile-container-back-card-hover-opacity, 0.9);\n          transition: var(\n            --promo-tile-container-back-card-hover-transition,\n            all 0.3s ease-in-out\n          );\n          @apply --promo-tile-container-back-card-hover;\n        }\n\n        :host([hover]) #container .front_card .front_title {\n          opacity: var(\n            --promo-tile-container-front-card-front-title-hover-opacity,\n            0\n          );\n          transition: var(\n            --promo-tile-container-front-card-front-title-hover-transition,\n            all 0.3s ease-in-out\n          );\n          @apply --promo-tile-container-front-card-hover;\n        }\n\n        .image {\n          display: var(--promo-tile-image-display, flex);\n          justify-content: var(--promo-tile-image-justify-content, center);\n          background-position: var(\n            --promo-tile-image-background-position,\n            top center\n          );\n          background-repeat: var(\n            --promo-tile-image-background-repeat,\n            no-repeat\n          );\n          background-size: var(--promo-tile-image-background-size, cover);\n          width: var(--promo-tile-image-width, 100%);\n          height: var(--promo-tile-image-height, 100%);\n          @apply --promo-tile-image;\n        }\n\n        .front_title {\n          opacity: var(--promo-tile-front-title-opacity, 1);\n          position: var(--promo-tile-front-title-position, absolute);\n          display: var(--promo-tile-front-title-display, flex);\n          align-self: var(--promo-tile-front-title-align-self, flex-end);\n          padding: var(--promo-tile-front-title-padding, 0 0 25px 0);\n          @apply --promo-tile-front-title;\n        }\n\n        .front_title h1 {\n          color: var(--promo-tile-front-title-h1-color, #ffffff);\n          font-size: var(--promo-tile-front-title-h1-font-size, 36px);\n          font-weight: var(--promo-tile-front-title-h1-font-weight, 400);\n          text-shadow: var(\n            --promo-tile-front-title-h1-text-shadow,\n            1px 1px 3px\n              var(--promo-tile-front-title-h1-text-shadow-color, #363533)\n          );\n          @apply --promo-title-front-title-h1;\n        }\n\n        .back_title {\n          opacity: var(--promo-tile-back-title-opacity, 1);\n          display: var(--promo-tile-back-title-display, flex);\n          justify-content: var(--promo-tile-back-title-justify-content, center);\n          padding: var(--promo-tile-back-title-padding, 20px 0 0 0);\n          @apply --promo-tile-back-title;\n        }\n\n        .back_title h1 {\n          color: var(--promo-tile-back-title-h1-color, #ffffff);\n          font-size: var(--promo-tile-back-title-h1-font-size, 36px);\n          font-weight: var(--promo-tile-back-title-h1-font-weight, 400);\n          @apply --promo-tile-back-title-h1;\n        }\n\n        .back_content {\n          color: var(--promo-tile-back-content-font-color, #ffffff);\n          font-size: var(--promo-tile-back-content-font-size, 18px);\n          font-weight: var(--promo-tile-back-content-font-weight, 300);\n          line-height: var(--promo-tile-back-content-line-height, 1.4);\n          padding: var(--promo-title-back-content-padding, 0 20px 0 20px);\n          text-align: justify;\n          @apply --promo-tile-back-content;\n        }\n\n        paper-button#learn {\n          display: var(--promo-tile-paper-button-learn-display, flex);\n          margin: var(\n            --promo-tile-paper-button-learn-margin,\n            140px auto 0 auto\n          );\n          font-size: var(--promo-tile-paper-button-learn-font-size, 18px);\n          color: var(--promo-tile-paper-button-learn-font-color, #ffffff);\n          border: var(--promo-tile-paper-button-learn-border, solid);\n          border-width: var(--promo-tile-paper-button-learn-border-width, 1px);\n          border-color: var(\n            --promo-tile-paper-button-learn-border-color,\n            #ffffff\n          );\n          border-radius: var(--promo-tile-paper-button-learn-border-radius, 0);\n          width: var(--promo-tile-paper-button-learn-width, 50%);\n          @apply --promo-tile-paper-button-learn;\n        }\n\n        paper-button#learn:hover,\n        paper-button#learn:focus {\n          background-color: var(\n            --promo-tile-paper-button-learn-background-color-active,\n            #363533\n          );\n          @apply --promo-tile-paper-button-learn-active;\n        }\n      </style>\n      <div id="container">\n        <div class="front_card">\n          <div\n            id="front_image"\n            class="image"\n            alt="[[alt]]"\n            style$="background-image:url([[image]])"\n          >\n            <div class="front_title">\n              <h1>[[title]]</h1>\n            </div>\n            <div class="back_card" id="cardBack" on-click="activateBtn">\n              <div class="back_title">\n                <h1>[[title]]</h1>\n              </div>\n              <div class="back_content">\n                <slot></slot>\n              </div>\n              <div class="learn_more">\n                <a\n                  tabindex="-1"\n                  href="[[url]]"\n                  id="link"\n                  target$="[[_urlTarget(url)]]"\n                >\n                  <paper-button id="learn" no-ink\n                    >[[label]]\n                    <iron-icon icon="chevron-right"></iron-icon>\n                  </paper-button>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    '],e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}})));return s=function(){return n},n}var u=function(t){function u(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),t=c(this,a(u).call(this)),import("@polymer/paper-button/paper-button.js"),import("@polymer/iron-icon/iron-icon.js"),import("@polymer/iron-icons/iron-icons.js"),t}var f,d,h;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(u,o.SchemaBehaviors(e.PolymerElement)),f=u,h=[{key:"template",get:function(){return e.html(s())}},{key:"tag",get:function(){return"promo-tile"}},{key:"properties",get:function(){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){i(t,e,n[e])})}return t}({},p(a(u),"properties",this),{image:{type:String,value:"",reflectToAttribute:!0},alt:{type:String,value:"",reflectToAttribute:!0},label:{type:String,value:"",reflectToAttribute:!0},title:{type:String,value:"",reflectToAttribute:!0},url:{type:String,value:"",reflectToAttribute:!0},hover:{type:Boolean,value:!1,reflectToAttribute:!0}})}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Promo-Tile",description:"A tile element for promoting content.",icon:"icons:dashboard",color:"orange",groups:["Content","Media"],handles:[{type:"content",source:"image",title:"citation",url:"source"}],meta:{author:"LRNWebComponents"}},settings:{quick:[{property:"title",title:"Title",description:"The title of the tile",inputMethod:"textfield",icon:"editor:title"},{property:"image",title:"Image",description:"The image of the tile",inputMethod:"textfield",icon:"editor:insert-photo"},{property:"url",title:"Link",description:"The link of the tile",inputMethod:"textfield",icon:"editor:insert-link"}],configure:[{property:"title",title:"Title",description:"The title of the tile",inputMethod:"textfield",icon:"editor:title"},{property:"image",title:"Image",description:"The image of the tile",inputMethod:"textfield",icon:"editor:insert-photo"},{property:"alt",title:"Alt",description:"The alt text for the image",inputMethod:"textfield",icon:"editor:mode-edit"},{property:"url",title:"Link",description:"The link of the tile",inputMethod:"textfield",icon:"editor:insert-link"},{property:"label",title:"Label",description:"The label for the button",inputMethod:"textfield",icon:"editor:title"}],advanced:[]}}}}],(d=[{key:"connectedCallback",value:function(){p(a(u.prototype),"connectedCallback",this).call(this),n.afterNextRender(this,function(){this.addEventListener("mouseover",this.__hoverIn.bind(this)),this.addEventListener("mouseout",this.__hoverOut.bind(this)),this.addEventListener("focusin",this.__hoverIn.bind(this)),this.addEventListener("focusout",this.__hoverOut.bind(this))})}},{key:"disconnectedCallback",value:function(){this.removeEventListener("mouseover",this.__hoverIn.bind(this)),this.removeEventListener("mouseout",this.__hoverOut.bind(this)),this.removeEventListener("focusin",this.__hoverIn.bind(this)),this.removeEventListener("focusout",this.__hoverOut.bind(this)),p(a(u.prototype),"disconnectedCallback",this).call(this)}},{key:"_outsideLink",value:function(t){if(0!=t.indexOf("http"))return!1;var e=location.href,n=location.pathname,o=e.substring(0,e.indexOf(n));return 0!=t.indexOf(o)}},{key:"_urlTarget",value:function(t){if(t&&this._outsideLink(t))return"_blank";return!1}},{key:"activateBtn",value:function(){if(this.hover){var t=this.shadowRoot.querySelector("#link");window.innerWidth>700&&t.click()}}},{key:"__hoverIn",value:function(){this.hover=!0}},{key:"__hoverOut",value:function(){this.hover=!1}}])&&r(f.prototype,d),h&&r(f,h),u}();window.customElements.define(u.tag,u),t.PromoTile=u,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=promo-tile.umd.js.map
