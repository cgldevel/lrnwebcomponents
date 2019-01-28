define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@lrnwebcomponents/smooth-scroll/smooth-scroll.js","./lib/map-menu-container.js","./lib/map-menu-builder.js"],function(_exports,_polymerLegacy,_smoothScroll,_mapMenuContainer,_mapMenuBuilder){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.MapMenu=void 0;function _templateObject_6a0dfab022ca11e992433952f2d87ff1(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        --map-menu-active-color: rgba(0, 0, 0, 0.1);\n        display: block;\n        overflow-y: scroll;\n        position: relative;\n        height: 100%;\n      }\n\n      #activeIndicator {\n        background: var(--map-menu-active-color);\n        transition: all 0.3s ease-in-out;\n        position: absolute;\n      }\n\n      map-menu-container {\n        padding: 32px;\n        @apply --map-menu-container;\n      }\n\n      /* turn default active color if indicator is on */\n      :host([active-indicator]) map-menu-builder {\n        --map-menu-active-color: transparent;\n      }\n    </style>\n    <div id=\"itemslist\">\n      <map-menu-container>\n        <div id=\"activeIndicator\"></div>\n        <map-menu-builder\n          id=\"builder\"\n          items=\"[[items]]\"\n          selected=\"[[selected]]\"\n        ></map-menu-builder>\n      </map-menu-container>\n    </div>\n    <smooth-scroll id=\"smoothScroll\"></smooth-scroll>\n  "]);_templateObject_6a0dfab022ca11e992433952f2d87ff1=function _templateObject_6a0dfab022ca11e992433952f2d87ff1(){return data};return data}var MapMenu=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_6a0dfab022ca11e992433952f2d87ff1()),is:"map-menu",properties:{title:{type:String,value:"Content Outline"},data:{type:Array,value:null},manifest:{type:Object,notify:!0,observer:"_manifestChanged"},items:{type:Array,value:null,notify:!0},selected:{type:String,notify:!0},autoScroll:{type:Boolean,value:!1},activeIndicator:{type:Boolean,value:!1}},observers:["_dataChanged(data)"],listeners:{"link-clicked":"__linkClickedHandler","toggle-updated":"__toggleUpdated","active-item":"__activeItemHandler","map-meu-item-hidden-check":"_mapMeuItemHiddenCheckHandler"},ready:function ready(){},__activeItemHandler:function __activeItemHandler(e){var target=e.detail;this.refreshActiveChildren(target)},_mapMeuItemHiddenCheckHandler:function _mapMeuItemHiddenCheckHandler(e){var action=e.detail.action,target=e.detail.target,hiddenChild=e.detail.hiddenChild;if("closed"===action&&!0===hiddenChild){this.__updateActiveIndicator(this._activeItem,100,!0)}else{this.__updateActiveIndicator(this._activeItem,100,!1)}},refreshActiveChildren:function refreshActiveChildren(activeItem){var timeoutTime=1<arguments.length&&arguments[1]!==void 0?arguments[1]:100,oldActiveItem=this._activeItem,newActiveItem=activeItem;if(newActiveItem&&""!==newActiveItem){newActiveItem.setAttribute("active",!0);if(this.activeIndicator){this.__updateActiveIndicator(newActiveItem,timeoutTime)}if(this.autoScroll){this.$.smoothScroll.scroll(newActiveItem,{duration:300,scrollElement:this})}}if(oldActiveItem){oldActiveItem.removeAttribute("active");this.__updateActiveIndicator(newActiveItem,timeoutTime)}this._activeItem=newActiveItem},_manifestChanged:function _manifestChanged(newValue,oldValue){if(newValue){this.set("data",newValue.items)}},setData:function setData(data){this.set("data",[]);this.set("data",data)},_dataChanged:function _dataChanged(data){var _this=this,items=[];if(!data)return;data.forEach(function(element){if(!element.parent){items.push(element)}});items.forEach(function(item,i){_this._setChildren(item,data)});this.set("items",[]);this.set("items",items)},_setChildren:function _setChildren(item,data){var _this2=this,children=data.filter(function(d){return item.id===d.parent});item.children=children;if(0<item.children.length){item.children.forEach(function(child){_this2._setChildren(child,data)})}},__hasChildren:function __hasChildren(item){return 0<item.children.length},__linkClickedHandler:function __linkClickedHandler(e){this.selected=e.detail.id;this.fire("selected",e.detail.id)},__toggleUpdated:function __toggleUpdated(e){var action=e.detail.opened?"opened":"closed",target=e.path[0];if("undefined"!==typeof this._activeItem){this._activeItem.fire("map-menu-item-hidden-check",Object.assign({},{action:action,target:target}))}},__isInViewport:function __isInViewport(element){var scrollParent=this.__getScrollParent(element);if(!scrollParent)return!1;var elementTop=element.offsetTop,elementBottom=elementTop+element.offsetHeight,viewportTop=scrollParent.offsetTop,viewportBottom=viewportTop+scrollParent.offsetHeight;return elementBottom>viewportTop&&elementTop<viewportBottom},__getScrollParent:function __getScrollParent(node){if(null==node){return null}if(node.scrollHeight>node.clientHeight){return node}else{return this.__getScrollParent(node.parentNode)}},__updateActiveIndicator:function __updateActiveIndicator(element){var _this3=this,timeoutTime=1<arguments.length&&arguments[1]!==void 0?arguments[1]:100,hidden=2<arguments.length&&arguments[2]!==void 0?arguments[2]:!1;setTimeout(function(){var activeIndicator=_this3.$.activeIndicator,left=element.offsetLeft,bottom=element.offsetBottom,top=element.offsetTop,width=element.offsetWidth,height=!hidden?element.offsetHeight:0;timeoutTime=0<height?timeoutTime:10;activeIndicator.setAttribute("style","width:".concat(width,"px;height:").concat(height,"px;top:").concat(top,"px;left:").concat(left,"px"))},timeoutTime)},__parentsHidden:function __parentsHidden(node){var parent=node.parentNode;if(null==parent)return null;if("MAP-MENU-SUBMENU"===parent.tagName){if(!parent.opened)return!0}if("MAP-MENU"===parent.tagName)return!1;return this.__parentsHidden(parent)}});_exports.MapMenu=MapMenu});