!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).JsonOutlineSchema={})}(this,function(t){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e,n){return(a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var i=[null];i.push.apply(i,e);var r=new(Function.bind.apply(t,i));return n&&u(r,n.prototype),r}).apply(null,arguments)}function s(t){var e="function"==typeof Map?new Map:void 0;return(s=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,i)}function i(){return a(t,arguments,o(this).constructor)}return i.prototype=Object.create(t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),u(i,t)})(t)}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var l=function(){function t(){n(this,t),this.id="item-"+this.generateUUID(),this.ident=0,this.location="",this.order=0,this.parent="",this.title="New item",this.description="",this.metadata={}}return r(t,[{key:"readLocation",value:function(){return FALSE}},{key:"writeLocation",value:function(t){return FALSE}},{key:"generateUUID",value:function(){return"ss-s-s-s-sss".replace(/s/g,this._uuidPart)}},{key:"_uuidPart",value:function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}}]),t}();window.JSONOutlineSchema=window.JSONOutlineSchema||{},window.JSONOutlineSchema.requestAvailability=function(){return window.JSONOutlineSchema.instance||(window.JSONOutlineSchema.instance=document.createElement("json-outline-schema"),document.body.appendChild(window.JSONOutlineSchema.instance)),window.JSONOutlineSchema.instance};var h=function(t){function i(){var t,e,r,u=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return n(this,i),e=this,(t=!(r=o(i).call(this))||"object"!=typeof r&&"function"!=typeof r?c(e):r).tag=i.tag,t._queue=[],t.template=document.createElement("template"),t.attachShadow({mode:"open"}),u||t.render(),t.tag=i.tag,t.file=null,t.id=t.generateUUID(),t.title="New site",t.author="",t.description="",t.license="by-sa",t.metadata={},t.items=[],t.__debug=!1,window.JSONOutlineSchema.instance=c(c(t)),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(i,s(HTMLElement)),r(i,[{key:"html",get:function(){return"\n<style>:host {\n  display: block;\n  font-family: monospace;\n  white-space: pre;\n  margin: 1em 0px;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"}}],[{key:"properties",get:function(){return{}}},{key:"tag",get:function(){return"json-outline-schema"}}]),r(i,[{key:"connectedCallback",value:function(){window.ShadyCSS&&window.ShadyCSS.styleElement(this),this._queue.length&&this._processQueue(),window.addEventListener("json-outline-schema-debug-toggle",this._toggleDebug.bind(this));var t=new CustomEvent("json-outline-schema-ready",{bubbles:!0,cancelable:!1,detail:!0});this.dispatchEvent(t)}},{key:"_copyAttribute",value:function(t,e){var n=this.shadowRoot.querySelectorAll(e),i=this.getAttribute(t),r=null==i?"removeAttribute":"setAttribute",o=!0,u=!1,a=void 0;try{for(var s,c=n[Symbol.iterator]();!(o=(s=c.next()).done);o=!0){s.value[r](t,i)}}catch(t){u=!0,a=t}finally{try{o||null==c.return||c.return()}finally{if(u)throw a}}}},{key:"_queueAction",value:function(t){this._queue.push(t)}},{key:"_processQueue",value:function(){var t=this;this._queue.forEach(function(e){t["_".concat(e.type)](e.data)}),this._queue=[]}},{key:"_setProperty",value:function(t){var e=t.name,n=t.value;this[e]=n}},{key:"render",value:function(){this.shadowRoot.innerHTML=null,this.template.innerHTML=this.html,window.ShadyCSS&&window.ShadyCSS.prepareTemplate(this.template,this.tag),this.shadowRoot.appendChild(this.template.content.cloneNode(!0))}},{key:"disconnectedCallback",value:function(){window.removeEventListener("json-outline-schema-debug-toggle",this._toggleDebug.bind(this));var t=new CustomEvent("json-outline-schema-unready",{bubbles:!0,cancelable:!1,detail:!0});this.dispatchEvent(t)}},{key:"newItem",value:function(){return new l}},{key:"addItem",value:function(t){var e=this.validateItem(t);return count=array_push(this.items,e),count}},{key:"validateItem",value:function(t){var n=new l;for(var i in n)"undefined"!==e(t[i])&&(n[i]=t[i]);return n}},{key:"removeItem",value:function(t){for(var e in this.items)if(this.items[e].id==t){var n=this.items[e];return delete this.items[e],n}return!1}},{key:"updateItem",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.validateItem(t);for(var i in this.items)if(this.items[i].id==n.id)return this.items[i]=n,!e||this.save();return!1}},{key:"load",value:function(t){if(file_exists(t)){this.file=t;var n=json_decode(file_get_contents(t));for(var i in n)"undefined"!==e(this[i])&&"items"!==i&&(this[i]=n[i]);if(isset(n.items))for(var i in n.items){var r=new l;r.id=item.id,r.indent=item.indent,r.location=item.location,r.order=item.order,r.parent=item.parent,r.title=item.title,r.description=item.description,r.metadata=item.metadata,this.items[i]=r}return!0}return!1}},{key:"save",value:function(){var t={id:this.id,title:this.title,author:this.author,description:this.description,license:this.license,metadata:this.metadata,items:this.items};return JSON.stringify(t,null,2)}},{key:"generateUUID",value:function(){return"ss-s-s-s-sss".replace(/s/g,this._uuidPart)}},{key:"_uuidPart",value:function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}},{key:"_toggleDebug",value:function(t){this.__debug=!this.__debug,this._triggerDebugPaint(this.__debug)}},{key:"_triggerDebugPaint",value:function(t){if(t){var e={file:this.file,id:this.id,title:this.title,author:this.author,description:this.description,license:this.license,metadata:this.metadata,items:this.items},n=document.createElement("span");n.innerHTML=JSON.stringify(e,null,2),this.shadowRoot.appendChild(n.cloneNode(!0))}else this.render()}},{key:"attributeChangedCallback",value:function(t,e,n){this.__debug&&(this.render(),this._triggerDebugPaint(this.__debug))}},{key:"updateMetadata",value:function(t,e){this.metadata[t]=e}},{key:"file",get:function(){return this.getAttribute("file")},set:function(t){this.setAttribute("file",t)}},{key:"id",get:function(){return this.getAttribute("id")},set:function(t){this.setAttribute("id",t)}},{key:"title",get:function(){return this.getAttribute("title")},set:function(t){this.setAttribute("title",t)}},{key:"author",get:function(){return this.getAttribute("author")},set:function(t){this.setAttribute("author",t)}},{key:"description",get:function(){return this.getAttribute("description")},set:function(t){this.setAttribute("description",t)}},{key:"license",get:function(){return this.getAttribute("license")},set:function(t){this.setAttribute("license",t)}},{key:"metadata",get:function(){return console.log(JSON.parse(this.getAttribute("metadata"))),JSON.parse(this.getAttribute("metadata"))},set:function(t){this.setAttribute("metadata",JSON.stringify(t))}}],[{key:"observedAttributes",get:function(){return["file","id","title","author","description","license","metadata"]}}]),i}();window.customElements.define(h.tag,h),t.JsonOutlineSchema=h,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=json-outline-schema.umd.js.map