!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("@polymer/polymer/polymer-legacy.js"),require("@polymer/polymer/lib/legacy/polymer.dom.js"),require("@polymer/polymer/lib/utils/resolve-url.js"),require("@polymer/polymer/lib/utils/async.js"),require("@polymer/polymer/lib/mixins/element-mixin.js"),require("@polymer/app-layout/app-header/app-header.js"),require("@polymer/app-layout/app-toolbar/app-toolbar.js"),require("@polymer/app-layout/app-drawer/app-drawer.js"),require("@polymer/app-layout/app-drawer-layout/app-drawer-layout.js"),require("@polymer/app-layout/app-header-layout/app-header-layout.js"),require("@polymer/paper-progress/paper-progress.js"),require("@polymer/iron-media-query/iron-media-query.js"),require("@lrnwebcomponents/materializecss-styles/materializecss-styles.js"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js"),require("@lrnwebcomponents/haxcms-elements/lib/haxcms-theme-behavior.js"),require("@lrnwebcomponents/map-menu/map-menu.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-legacy.js","@polymer/polymer/lib/legacy/polymer.dom.js","@polymer/polymer/lib/utils/resolve-url.js","@polymer/polymer/lib/utils/async.js","@polymer/polymer/lib/mixins/element-mixin.js","@polymer/app-layout/app-header/app-header.js","@polymer/app-layout/app-toolbar/app-toolbar.js","@polymer/app-layout/app-drawer/app-drawer.js","@polymer/app-layout/app-drawer-layout/app-drawer-layout.js","@polymer/app-layout/app-header-layout/app-header-layout.js","@polymer/paper-progress/paper-progress.js","@polymer/iron-media-query/iron-media-query.js","@lrnwebcomponents/materializecss-styles/materializecss-styles.js","@lrnwebcomponents/schema-behaviors/schema-behaviors.js","@lrnwebcomponents/haxcms-elements/lib/haxcms-theme-behavior.js","@lrnwebcomponents/map-menu/map-menu.js"],n):n((e=e||self).OutlinePlayer={},e.polymerLegacy_js,e.polymer_dom_js,null,e.async,e.elementMixin_js)}(this,function(e,n,t,i,a,o){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function p(){var e=l(['\n    <style include="materializecss-styles">\n      :host {\n        display: block;\n        position: relative;\n        font-family: libre baskerville;\n        width: 48px;\n        --app-drawer-width: 300px;\n        --outline-player-dark: #222222;\n        --outline-player-light: #f8f8f8;\n      }\n\n      paper-icon-button {\n        --paper-icon-button-ink-color: var(--outline-player-dark);\n      }\n    </style>\n\n    <div id="container">\n      <paper-icon-button\n        id="button"\n        disabled="[[disabled]]"\n        icon="[[icon]]"\n      ></paper-icon-button>\n      <paper-tooltip for="button" position="bottom" offset="14">\n        <slot></slot>\n      </paper-tooltip>\n    </div>\n  ']);return p=function(){return e},e}function s(){var e=l(['\n    <style include="materializecss-styles">\n      :host {\n        display: block;\n        font-family: libre baskerville;\n        position: relative;\n        overflow: hidden;\n        --outline-player-min-height: 100vh;\n        --app-drawer-width: 300px;\n        --outline-player-dark: #222222;\n        --outline-player-light: #f8f8f8;\n        --outline-player-arrow-margin-top: 50px;\n      }\n\n      :host([closed]) {\n        --app-drawer-width: 0px;\n      }\n\n      h1 {\n        font-size: 48px;\n        line-height: 16px;\n      }\n\n      h2 {\n        font-size: 32px;\n      }\n\n      h3 {\n        font-size: 28px;\n      }\n\n      p {\n        line-height: 26px;\n        min-height: 26px;\n      }\n\n      a,\n      a:visited,\n      a:active {\n        color: #000;\n      }\n\n      a:hover {\n        color: #2196f3;\n      }\n\n      ul li {\n        padding-bottom: 24px;\n        line-height: 1.5;\n        color: #424242;\n        max-width: 448px;\n      }\n\n      ul li:last-child {\n        padding-bottom: 16px;\n      }\n\n      app-toolbar {\n        background-color: var(--outline-player-light);\n        color: var(--outline-player-dark);\n        font-weight: bold;\n        border-bottom: solid 1px var(--outline-player-dark);\n        -webkit-box-shadow: 0 0 6px -1px var(--outline-player-dark);\n        box-shadow: 0 0 6px -1px var(--outline-player-dark);\n      }\n\n      app-drawer-layout {\n        min-height: 100%;\n        min-height: -moz-available; /* WebKit-based browsers will ignore this. */\n        min-height: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */\n        min-height: fill-available;\n        /* if the user has set a specific value then override the defaults */\n        min-height: var(--outline-player-min-height);\n      }\n\n      .outline-title {\n        font-size: 24px;\n        height: 64px;\n        padding: 16px;\n        margin: 0;\n      }\n\n      #menu {\n        padding: 8px;\n      }\n\n      outline-player-navigation {\n        --outline-player-dark: var(--outline-player-dark);\n      }\n\n      paper-icon-button + [main-title] {\n        margin-left: 24px;\n      }\n\n      paper-progress {\n        display: block;\n        width: 100%;\n        --paper-progress-active-color: rgba(255, 255, 255, 0.5);\n        --paper-progress-container-color: transparent;\n      }\n\n      app-header {\n        color: var(--outline-player-dark);\n        /* Enable outline to be placed anywhere in the dom */\n        /* This will override the app-header-layout forcing fixed mode */\n        position: absolute !important;\n        left: 0 !important;\n        --app-header-background-rear-layer: {\n          /* app-header-layout will force fixed */\n          background-color: var(--outline-player-light);\n        }\n      }\n\n      app-toolbar {\n        box-shadow: none;\n        border-bottom: none;\n        background: none;\n      }\n\n      app-drawer {\n        border-bottom: solid 1px var(--outline-player-dark);\n        -webkit-box-shadow: 0 0 6px -3px var(--outline-player-dark);\n        box-shadow: 0 0 6px -3px var(--outline-player-dark);\n        position: absolute;\n        min-height: var(--outline-play-min-height);\n        --app-drawer-scrim-background: rgba(80, 80, 80, 0.8);\n        --app-drawer-content-container: {\n          overflow: scroll;\n          background-color: var(--outline-player-light);\n        }\n      }\n\n      #content {\n        display: flex;\n        justify-content: center;\n      }\n\n      #content > * {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n\n      /* Required for HAX */\n      :host([edit-mode]) #slot {\n        display: none !important;\n      }\n      #contentcontainer {\n        padding: 16px;\n        max-width: 1040px;\n        flex: 1 1 auto;\n        order: 1;\n        display: flex;\n      }\n      #contentcontainer > * {\n        flex: 1 1 auto;\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n      }\n      #contentcontainer h-a-x {\n        margin: 0;\n      }\n\n      .desktopNav {\n        margin-left: 2%;\n        margin-right: 2%;\n        position: relative;\n        margin-top: var(--outline-player-arrow-margin-top);\n      }\n\n      #desktopNavLeft {\n        order: 0;\n      }\n\n      #desktopNavRight {\n        order: 2;\n      }\n    </style>\n    \x3c!-- Control the sites query paremeters --\x3e\n\n    \x3c!-- Begin Layout --\x3e\n    <app-drawer-layout>\n      <app-drawer id="drawer" swipe-open="" slot="drawer">\n        <template is="dom-if" if="[[__hasTitle(outlineTitle)]]">\n          <h2 class="outline-title">[[outlineTitle]]</h2>\n        </template>\n        <map-menu\n          id="menu"\n          selected="[[selected]]"\n          manifest="[[_routerManifest]]"\n          active-indicator=""\n          auto-scroll=""\n        ></map-menu>\n      </app-drawer>\n      <app-header-layout>\n        <app-header reveals="" slot="header">\n          <app-toolbar>\n            <paper-icon-button\n              icon="menu"\n              on-click="_toggleMenu"\n            ></paper-icon-button>\n            <div main-title="">\n              [[activeItem.title]]\n              <div id="slotTitle"><slot name="title"></slot></div>\n            </div>\n            <template is="dom-if" if="[[!breakpointDesktop]]">\n              <outline-player-arrow\n                id="prevpage"\n                disabled="[[disablePrevPage(__activeIndex)]]"\n                icon="icons:arrow-back"\n                on-click="prevPage"\n              >\n                Previous page\n              </outline-player-arrow>\n              <outline-player-arrow\n                id="nextpage"\n                disabled="[[disableNextPage(__activeIndex)]]"\n                icon="icons:arrow-forward"\n                on-click="nextPage"\n              >\n                Next page\n              </outline-player-arrow>\n            </template>\n            <paper-progress\n              hidden$="[[!__loadingContent]]"\n              value="10"\n              indeterminate=""\n              bottom-item=""\n            ></paper-progress>\n          </app-toolbar>\n        </app-header>\n        <div id="content">\n          <div id="contentcontainer">\n            <div id="slot"><slot></slot></div>\n          </div>\n          <template is="dom-if" if="[[breakpointDesktop]]">\n            <div class="desktopNav" id="desktopNavLeft">\n              <outline-player-arrow\n                sticky=""\n                id="prevpage"\n                disabled="[[disablePrevPage(__activeIndex)]]"\n                icon="icons:arrow-back"\n                on-click="prevPage"\n              >\n                Previous page\n              </outline-player-arrow>\n            </div>\n            <div class="desktopNav" id="desktopNavRight">\n              <outline-player-arrow\n                sticky=""\n                id="nextpage"\n                disabled="[[disableNextPage(__activeIndex)]]"\n                icon="icons:arrow-forward"\n                on-click="nextPage"\n              >\n                Next page\n              </outline-player-arrow>\n            </div>\n          </template>\n        </div>\n      </app-header-layout>\n    </app-drawer-layout>\n    <iron-media-query\n      query="(min-width: 700px)"\n      query-matches="{{breakpointDesktop}}"\n    ></iron-media-query>\n  '],['\n    <style include="materializecss-styles">\n      :host {\n        display: block;\n        font-family: libre baskerville;\n        position: relative;\n        overflow: hidden;\n        --outline-player-min-height: 100vh;\n        --app-drawer-width: 300px;\n        --outline-player-dark: #222222;\n        --outline-player-light: #f8f8f8;\n        --outline-player-arrow-margin-top: 50px;\n      }\n\n      :host([closed]) {\n        --app-drawer-width: 0px;\n      }\n\n      h1 {\n        font-size: 48px;\n        line-height: 16px;\n      }\n\n      h2 {\n        font-size: 32px;\n      }\n\n      h3 {\n        font-size: 28px;\n      }\n\n      p {\n        line-height: 26px;\n        min-height: 26px;\n      }\n\n      a,\n      a:visited,\n      a:active {\n        color: #000;\n      }\n\n      a:hover {\n        color: #2196f3;\n      }\n\n      ul li {\n        padding-bottom: 24px;\n        line-height: 1.5;\n        color: #424242;\n        max-width: 448px;\n      }\n\n      ul li:last-child {\n        padding-bottom: 16px;\n      }\n\n      app-toolbar {\n        background-color: var(--outline-player-light);\n        color: var(--outline-player-dark);\n        font-weight: bold;\n        border-bottom: solid 1px var(--outline-player-dark);\n        -webkit-box-shadow: 0 0 6px -1px var(--outline-player-dark);\n        box-shadow: 0 0 6px -1px var(--outline-player-dark);\n      }\n\n      app-drawer-layout {\n        min-height: 100%;\n        min-height: -moz-available; /* WebKit-based browsers will ignore this. */\n        min-height: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */\n        min-height: fill-available;\n        /* if the user has set a specific value then override the defaults */\n        min-height: var(--outline-player-min-height);\n      }\n\n      .outline-title {\n        font-size: 24px;\n        height: 64px;\n        padding: 16px;\n        margin: 0;\n      }\n\n      #menu {\n        padding: 8px;\n      }\n\n      outline-player-navigation {\n        --outline-player-dark: var(--outline-player-dark);\n      }\n\n      paper-icon-button + [main-title] {\n        margin-left: 24px;\n      }\n\n      paper-progress {\n        display: block;\n        width: 100%;\n        --paper-progress-active-color: rgba(255, 255, 255, 0.5);\n        --paper-progress-container-color: transparent;\n      }\n\n      app-header {\n        color: var(--outline-player-dark);\n        /* Enable outline to be placed anywhere in the dom */\n        /* This will override the app-header-layout forcing fixed mode */\n        position: absolute !important;\n        left: 0 !important;\n        --app-header-background-rear-layer: {\n          /* app-header-layout will force fixed */\n          background-color: var(--outline-player-light);\n        }\n      }\n\n      app-toolbar {\n        box-shadow: none;\n        border-bottom: none;\n        background: none;\n      }\n\n      app-drawer {\n        border-bottom: solid 1px var(--outline-player-dark);\n        -webkit-box-shadow: 0 0 6px -3px var(--outline-player-dark);\n        box-shadow: 0 0 6px -3px var(--outline-player-dark);\n        position: absolute;\n        min-height: var(--outline-play-min-height);\n        --app-drawer-scrim-background: rgba(80, 80, 80, 0.8);\n        --app-drawer-content-container: {\n          overflow: scroll;\n          background-color: var(--outline-player-light);\n        }\n      }\n\n      #content {\n        display: flex;\n        justify-content: center;\n      }\n\n      #content > * {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n\n      /* Required for HAX */\n      :host([edit-mode]) #slot {\n        display: none !important;\n      }\n      #contentcontainer {\n        padding: 16px;\n        max-width: 1040px;\n        flex: 1 1 auto;\n        order: 1;\n        display: flex;\n      }\n      #contentcontainer > * {\n        flex: 1 1 auto;\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n      }\n      #contentcontainer h-a-x {\n        margin: 0;\n      }\n\n      .desktopNav {\n        margin-left: 2%;\n        margin-right: 2%;\n        position: relative;\n        margin-top: var(--outline-player-arrow-margin-top);\n      }\n\n      #desktopNavLeft {\n        order: 0;\n      }\n\n      #desktopNavRight {\n        order: 2;\n      }\n    </style>\n    \x3c!-- Control the sites query paremeters --\x3e\n\n    \x3c!-- Begin Layout --\x3e\n    <app-drawer-layout>\n      <app-drawer id="drawer" swipe-open="" slot="drawer">\n        <template is="dom-if" if="[[__hasTitle(outlineTitle)]]">\n          <h2 class="outline-title">[[outlineTitle]]</h2>\n        </template>\n        <map-menu\n          id="menu"\n          selected="[[selected]]"\n          manifest="[[_routerManifest]]"\n          active-indicator=""\n          auto-scroll=""\n        ></map-menu>\n      </app-drawer>\n      <app-header-layout>\n        <app-header reveals="" slot="header">\n          <app-toolbar>\n            <paper-icon-button\n              icon="menu"\n              on-click="_toggleMenu"\n            ></paper-icon-button>\n            <div main-title="">\n              [[activeItem.title]]\n              <div id="slotTitle"><slot name="title"></slot></div>\n            </div>\n            <template is="dom-if" if="[[!breakpointDesktop]]">\n              <outline-player-arrow\n                id="prevpage"\n                disabled="[[disablePrevPage(__activeIndex)]]"\n                icon="icons:arrow-back"\n                on-click="prevPage"\n              >\n                Previous page\n              </outline-player-arrow>\n              <outline-player-arrow\n                id="nextpage"\n                disabled="[[disableNextPage(__activeIndex)]]"\n                icon="icons:arrow-forward"\n                on-click="nextPage"\n              >\n                Next page\n              </outline-player-arrow>\n            </template>\n            <paper-progress\n              hidden\\$="[[!__loadingContent]]"\n              value="10"\n              indeterminate=""\n              bottom-item=""\n            ></paper-progress>\n          </app-toolbar>\n        </app-header>\n        <div id="content">\n          <div id="contentcontainer">\n            <div id="slot"><slot></slot></div>\n          </div>\n          <template is="dom-if" if="[[breakpointDesktop]]">\n            <div class="desktopNav" id="desktopNavLeft">\n              <outline-player-arrow\n                sticky=""\n                id="prevpage"\n                disabled="[[disablePrevPage(__activeIndex)]]"\n                icon="icons:arrow-back"\n                on-click="prevPage"\n              >\n                Previous page\n              </outline-player-arrow>\n            </div>\n            <div class="desktopNav" id="desktopNavRight">\n              <outline-player-arrow\n                sticky=""\n                id="nextpage"\n                disabled="[[disableNextPage(__activeIndex)]]"\n                icon="icons:arrow-forward"\n                on-click="nextPage"\n              >\n                Next page\n              </outline-player-arrow>\n            </div>\n          </template>\n        </div>\n      </app-header-layout>\n    </app-drawer-layout>\n    <iron-media-query\n      query="(min-width: 700px)"\n      query-matches="{{breakpointDesktop}}"\n    ></iron-media-query>\n  ']);return s=function(){return e},e}n.Polymer({_template:n.html(p()),is:"outline-player-arrow",behaviors:[MaterializeCSSBehaviors.ColorBehaviors],properties:{icon:{type:String,value:"icons:arrow-back"},disabled:{type:Boolean,value:!0,reflectToAttribute:!0},sticky:{type:Boolean,value:!1,reflectToAttribute:!0},__isNavSticky:{type:Boolean,value:!1,observer:"__isNavStickyChanged"},__originalPosition:{type:Number,value:0}},attached:function(){var e=this;this.__originalPosition=this.__getElementOffset(this);var n=this.$.container;window.addEventListener("scroll",function(t){e.sticky&&(e.__calculateIsNavSticky(),e.__isNavSticky&&(n.style.position="absolute",n.style.top=window.pageYOffset-e.__originalPosition.top+"px",n.style.left=e.__originalPosition.left))})},resetPosition:function(){this.$.container.style.top=0},__isNavStickyChanged:function(e){},__calculateIsNavSticky:function(){var e=window.pageYOffset;this.__originalPosition.top<e?this.__isNavSticky||(this.__isNavSticky=!0):this.__isNavSticky&&(this.__isNavSticky=!1)},__getElementOffset:function(e){var n=document.documentElement,t=e.getBoundingClientRect();return{top:t.top+window.pageYOffset-n.clientTop,left:t.left+window.pageXOffset-n.clientLeft}}});var d=n.Polymer({_template:n.html(s()),is:"outline-player",behaviors:[MaterializeCSSBehaviors.ColorBehaviors,SchemaBehaviors.Schema,HAXCMSBehaviors.Theme],properties:{manifest:{type:Object},auto:{type:Boolean,notify:!0,value:!1},outlineFile:{type:String,value:"outline.json",notify:!0},outlineLocation:{type:String,notify:!0},outlineTitle:{type:String,notify:!0},selected:{type:String,notify:!0,observer:"_selectedPageChanged"},closed:{type:Boolean,notify:!0,reflectToAttribute:!0,value:!1},_activeItemContent:{type:String,observer:"_activeItemContentChanged"},outline:{type:Array,notify:!0,observer:"_outlineChanged"},activeItem:{type:Object,notify:!0},breakpointDesktop:{type:String,value:"600px"},fillRemaining:{type:Boolean,value:!1,reflectToAttribute:!0},_routerManifest:{type:Object,value:{}}},ready:function(){this.setupHAXTheme(!0,this.$.contentcontainer)},attached:function(){var e=this;this.refreshDynamicPositions(),window.addEventListener("resize",function(n){e.refreshDynamicPositions()}),window.addEventListener("haxcms-site-router-active-item-changed",this._haxcmsSiteRouterActiveItemChangedHandler.bind(this)),window.dispatchEvent(new CustomEvent("haxcms-router-manifest-subscribe",{detail:{callback:"_haxcmsRouterManifestSubscribeHandler",scope:this,setup:!0}})),window.dispatchEvent(new CustomEvent("haxcms-site-router-location-subscribe",{detail:{callback:"_haxcmsSiteRouterLocationSubscribe",scope:this,setup:!0}}))},_haxcmsRouterManifestSubscribeHandler:function(e){this._routerManifest={},this._routerManifest=e.detail},_haxcmsSiteRouterActiveItemChangedHandler:function(e){this.selected=e.detail.id},_haxcmsSiteRouterLocationSubscribe:function(e){var n=e.detail.route.name;if("home"===n||"404"===n){var t=this.manifest.items.find(function(e){return void 0!==e.id});window.dispatchEvent(new CustomEvent("json-outline-schema-active-item-changed",{detail:t}))}},refreshDynamicPositions:function(){var e=this.getBoundingClientRect(),n=window.innerHeight-e.top,t=n/2-20,i={};this.fillRemaining&&(i["--outline-player-min-height"]=n+"px"),i["--outline-player-arrow-margin-top"]=t+"px",this.updateStyles(i)},_toggleMenu:function(e){this.$.drawer.toggle(),this.closed=!this.$.drawer.opened,a.microTask.run(function(){window.dispatchEvent(new Event("resize")),o.updateStyles()})},wipeSlot:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"*";if("*"===n)for(;null!==t.dom(e).firstChild;)t.dom(e).removeChild(t.dom(e).firstChild);else for(var i in t.dom(e).childNodes)"undefined"!==r(t.dom(e).childNodes[i])&&t.dom(e).childNodes[i].slot===n&&t.dom(e).removeChild(t.dom(e).childNodes[i])},_activeItemContentChanged:function(e,n){if("undefined"!==r(e)&&(this.wipeSlot(this,"*"),null!==e)){var i=document.createRange().createContextualFragment(e);t.dom(this).appendChild(i)}},disablePrevPage:function(e){return 0===e},disableNextPage:function(e){return e===this._outlineData.items.length-1},prevPage:function(e){this.changePage("previous")},nextPage:function(e){},changePage:function(e){"next"==e&&this.__activeIndex<this._outlineData.items.length-1?this.selected=this._outlineData.items[this.__activeIndex+1].id:"previous"==e&&this.__activeIndex>0&&(this.selected=this._outlineData.items[this.__activeIndex-1].id);var n=this.querySelectorAll("outline-player-arrow"),t=!0,i=!1,a=void 0;try{for(var o,r=n[Symbol.iterator]();!(t=(o=r.next()).done);t=!0){o.value.resetPosition()}}catch(e){i=!0,a=e}finally{try{t||null==r.return||r.return()}finally{if(i)throw a}}},_selectedPageChanged:function(e,n){var t=this;if("undefined"!==r(e)&&"undefined"!==r(this._outlineData)){var i=this._outlineData.items.filter(function(n,i){if(e===n.id)return t.__activeIndex=i,n}).pop();this.set("activeItem",i)}},__hasTitle:function(e){return!!e}});e.OutlinePlayer=d,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=outline-player.umd.js.map
