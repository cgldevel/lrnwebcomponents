import{html,Polymer}from"./node_modules/@polymer/polymer/polymer-legacy.js";import{dom}from"./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js";import{FlattenedNodesObserver}from"./node_modules/@polymer/polymer/lib/utils/flattened-nodes-observer.js";import{flush}from"./node_modules/@polymer/polymer/lib/utils/flush.js";import*as async from"./node_modules/@polymer/polymer/lib/utils/async.js";import"./node_modules/@polymer/paper-item/paper-item.js";import"./node_modules/@lrnwebcomponents/simple-colors/simple-colors.js";import"./node_modules/@polymer/iron-a11y-keys/iron-a11y-keys.js";import"./node_modules/@lrnwebcomponents/grid-plate/grid-plate.js";import"./lib/hax-text-context.js";import"./lib/hax-ce-context.js";import"./lib/hax-plate-context.js";import"./lib/hax-input-mixer.js";import"./lib/hax-shared-styles.js";let HaxBody=Polymer({is:"hax-body",_template:html`
    <style include="simple-colors hax-shared-styles">
      @import url("https://fonts.googleapis.com/css?family=Noto+Serif");
      :host {
        display: block;
        min-height: 32px;
        min-width: 32px;
      }
      :host #bodycontainer ::slotted(.hax-context-menu) {
        padding: 0;
        margin: 0;
        position: absolute;
        visibility: hidden;
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 100;
        float: left;
        display: block;
      }
      :host #bodycontainer ::slotted(#haxinputmixer) {
        z-index: 10000000;
      }
      :host #bodycontainer ::slotted(.hax-context-visible) {
        visibility: visible;
        opacity: 1;
      }
      :host #bodycontainer ::slotted(*) {
        font-size: 16px;
        font-family: "Noto Serif", serif;
        color: #444;
        padding: 14px;
        margin: 2px;
      }

      :host([edit-mode]) #bodycontainer ::slotted(*[data-editable]) {
        outline: none;
        transition: 0.6s width ease-in-out, 0.6s height ease-in-out,
          0.6s margin ease-in-out;
      }
      :host([edit-mode]) #bodycontainer ::slotted(p):empty {
        background: #f1f1f1;
      }
      :host([edit-mode]) #bodycontainer ::slotted(*[data-editable]:hover) {
        outline: 1px solid var(--hax-color-accent1);
      }
      :host([edit-mode])
        #bodycontainer
        ::slotted(*:not(.hax-active)[data-editable]:hover):after {
        content: attr(data-hax-ray) " " attr(content);
        font-size: 16px;
        font-family: "Noto Serif", serif;
        left: unset;
        right: unset;
        top: unset;
        background-color: var(--hax-color-accent1);
        color: var(--hax-color-accent1-text);
        bottom: unset;
        width: auto;
        padding: 8px;
        margin: 0;
        z-index: 100;
        margin: -14px -14px 0 0;
        float: right;
        line-height: 16px;
      }

      :host([edit-mode]) #bodycontainer ::slotted(* [data-editable]:hover) {
        outline: 1px solid #e2e4e7;
        outline-offset: 2px;
      }
      :host([edit-mode]) #bodycontainer ::slotted(*[data-editable]:before) {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 32px;
        transition: 0.3s all ease;
      }
      :host([edit-mode])
        #bodycontainer
        ::slotted(*[data-editable]:hover:before) {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 32px;
        transition: 0.3s all ease;
      }
      :host([edit-mode]) #bodycontainer ::slotted(*.hax-active[data-editable]) {
        cursor: text !important;
        outline: 1px solid rgba(145, 151, 162, 0.25);
      }
      :host([edit-mode])
        #bodycontainer
        ::slotted(*[data-editable] .hax-active) {
        cursor: text !important;
        outline: 1px solid rgba(145, 151, 162, 0.25);
      }
      :host([edit-mode])
        #bodycontainer
        ::slotted(*.hax-active[data-editable]:before) {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 32px;
        transition: 0.3s all ease;
      }
      :host([edit-mode])
        #bodycontainer
        ::slotted(code.hax-active[data-editable]) {
        display: block;
      }
      :host([edit-mode]) #bodycontainer ::slotted(hr[data-editable]) {
        height: 4px;
        background-color: #eeeeee;
        padding-top: 8px;
        padding-bottom: 8px;
      }
      /** Fix to support safari as it defaults to none */
      :host([edit-mode]) #bodycontainer ::slotted(*[data-editable]) {
        -webkit-user-select: text;
        cursor: pointer;
      }

      :host([edit-mode])
        #bodycontainer
        ::slotted(*[data-editable]::-moz-selection),
      :host([edit-mode])
        #bodycontainer
        ::slotted(*[data-editable] *::-moz-selection) {
        background-color: var(--hax-body-highlight, --paper-yellow-300);
        color: black;
      }
      :host([edit-mode]) #bodycontainer ::slotted(*[data-editable]::selection),
      :host([edit-mode])
        #bodycontainer
        ::slotted(*[data-editable] *::selection) {
        background-color: var(--hax-body-highlight, --paper-yellow-300);
        color: black;
      }
      #bodycontainer {
        -webkit-user-select: text;
        user-select: text;
      }

      #contextcontainer {
        display: none;
      }
      :host([edit-mode][hax-ray-mode])
        #bodycontainer
        ::slotted(*[data-editable]) {
        outline: 1px dashed #d3d3d3;
        outline-offset: 4px;
      }
      :host([edit-mode][hax-ray-mode])
        #bodycontainer
        ::slotted(*[data-editable]):before {
        content: attr(data-hax-ray) " " attr(resource) " " attr(typeof) " "
          attr(property) " " attr(content);
        font-size: 10px;
        font-style: italic;
        left: unset;
        right: unset;
        top: unset;
        background-color: #d3d3d3;
        color: #000000;
        bottom: unset;
        width: auto;
        padding: 8px;
        margin: 0;
        z-index: 1;
        margin: -16px 0 0 0;
        float: left;
        line-height: 2;
      }
    </style>
    <div id="bodycontainer" class="ignore-activation">
      <slot id="body"></slot>
    </div>
    <div id="contextcontainer">
      <hax-text-context
        id="textcontextmenu"
        class="hax-context-menu ignore-activation"
      ></hax-text-context>
      <hax-ce-context
        id="cecontextmenu"
        class="hax-context-menu ignore-activation"
      ></hax-ce-context>
      <hax-plate-context
        id="platecontextmenu"
        class="hax-context-menu ignore-activation"
      ></hax-plate-context>
      <hax-input-mixer
        id="haxinputmixer"
        class="hax-context-menu ignore-activation"
      ></hax-input-mixer>
    </div>
    <iron-a11y-keys
      target="[[activeContainerNode]]"
      keys="esc"
      on-keys-pressed="_escKeyPressed"
      stop-keyboard-event-propagation=""
    ></iron-a11y-keys>
    <iron-a11y-keys
      target="[[activeContainerNode]]"
      keys="del backspace"
      on-keys-pressed="_delKeyPressed"
    ></iron-a11y-keys>
    <iron-a11y-keys
      target="[[activeContainerNode]]"
      keys="shift+tab"
      on-keys-pressed="_tabBackKeyPressed"
      stop-keyboard-event-propagation=""
    ></iron-a11y-keys>
    <iron-a11y-keys
      target="[[activeContainerNode]]"
      keys="tab"
      on-keys-pressed="_tabKeyPressed"
      stop-keyboard-event-propagation=""
    ></iron-a11y-keys>
    <iron-a11y-keys
      target="[[activeContainerNode]]"
      keys="up"
      on-keys-pressed="_upKeyPressed"
      stop-keyboard-event-propagation=""
    ></iron-a11y-keys>
    <iron-a11y-keys
      target="[[activeContainerNode]]"
      keys="down"
      on-keys-pressed="_downKeyPressed"
      stop-keyboard-event-propagation=""
    ></iron-a11y-keys>
  `,listeners:{focusin:"_focusIn",mousedown:"_focusIn","hax-context-item-selected":"_haxContextOperation","hax-input-mixer-update":"_haxInputMixerOperation","place-holder-replace":"replacePlaceholder"},properties:{editMode:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_editModeChanged"},globalPreferences:{type:Object,value:{},observer:"_globalPreferencesUpdated"},haxRayMode:{type:Boolean,value:!1,reflectToAttribute:!0},activeNode:{type:Object,value:null,notify:!0,observer:"_activeNodeChanged"},activeContainerNode:{type:Object,value:null,notify:!0,observer:"_activeContainerNodeChanged"}},ready:function(){this.polyfillSafe=window.HaxStore.instance.computePolyfillSafe();this._observer=new FlattenedNodesObserver(this,info=>{flush();if(0<info.addedNodes.length){info.addedNodes.map(node=>{if(this._haxElementTest(node)){if(this._HTMLPrimativeTest(node)){node.contentEditable=this.editMode}node.setAttribute("data-editable",this.editMode);let haxRay=node.tagName.replace("-"," ").toLowerCase(),i=window.HaxStore.instance.gizmoList.findIndex(j=>j.tag===node.tagName.toLowerCase());if(-1!==i){haxRay=window.HaxStore.instance.gizmoList[i].title}node.setAttribute("data-hax-ray",haxRay);this.fire("hax-body-tag-added",{node:node})}})}if(0<info.removedNodes.length){info.removedNodes.map(node=>{if(this._haxElementTest(node)&&!node.classList.contains("hax-active")){this.fire("hax-body-tag-removed",{node:node})}})}})},attached:function(){this.shadowRoot.querySelector("slot").addEventListener("mouseup",e=>{const tmp=window.HaxStore.getSelection();window.HaxStore._tmpSelection=tmp;try{let range=window.HaxStore._tmpSelection.getRangeAt(0);window.HaxStore._tmpRange=range.cloneRange()}catch(e){}});this.shadowRoot.querySelector("slot").addEventListener("paste",e=>{if(window.HaxStore.instance.isTextElement(window.HaxStore.instance.activeNode)&&!window.HaxStore.instance.haxManager.opened){e.preventDefault();let text="";if(e.clipboardData||e.originalEvent.clipboardData){text=(e.originalEvent||e).clipboardData.getData("text/plain")}else if(window.clipboardData){text=window.clipboardData.getData("Text")}let sel,range,html;if(window.HaxStore.instance.activeHaxBody.shadowRoot.getSelection){sel=window.HaxStore.instance.activeHaxBody.shadowRoot.getSelection();if(sel.getRangeAt&&sel.rangeCount){range=sel.getRangeAt(0);range.deleteContents();range.insertNode(document.createTextNode(text))}}else if(document.selection&&document.selection.createRange){document.selection.createRange().text=text}}});this.__tabTrap=!1;this.fire("hax-register-body",this);document.body.addEventListener("hax-store-property-updated",this._haxStorePropertyUpdated.bind(this));window.addEventListener("scroll",this._keepContextVisible.bind(this))},detached:function(){this.shadowRoot.querySelector("slot").removeEventListener("mouseup",e=>{window.HaxStore._tmpSelection=window.HaxStore.getSelection()});this.shadowRoot.querySelector("slot").removeEventListener("paste",e=>{if(window.HaxStore.instance.isTextElement(window.HaxStore.instance.activeNode)&&!window.HaxStore.instance.haxManager.opened){e.preventDefault();let text="";if(e.clipboardData||e.originalEvent.clipboardData){text=(e.originalEvent||e).clipboardData.getData("text/plain")}else if(window.clipboardData){text=window.clipboardData.getData("Text")}let sel,range,html;if(window.HaxStore.instance.activeHaxBody.shadowRoot.getSelection){sel=window.HaxStore.instance.activeHaxBody.shadowRoot.getSelection();if(sel.getRangeAt&&sel.rangeCount){range=sel.getRangeAt(0);range.deleteContents();range.insertNode(document.createTextNode(text))}}else if(document.selection&&document.selection.createRange){document.selection.createRange().text=text}}});document.body.removeEventListener("hax-store-property-updated",this._haxStorePropertyUpdated.bind(this));window.removeEventListener("scroll",this._keepContextVisible.bind(this))},_keepContextVisible:function(e){let el=!1;if(this.$.textcontextmenu.classList.contains("hax-context-visible")){el=this.$.textcontextmenu}else if(this.$.cecontextmenu.classList.contains("hax-context-visible")){el=this.$.cecontextmenu}if(el){if(this.elementInViewport(el)){el.classList.remove("hax-context-pin-bottom");el.classList.remove("hax-context-pin-top")}else{if(this.__OffBottom){el.classList.add("hax-context-pin-top")}else{el.classList.add("hax-context-pin-bottom")}}}},elementInViewport:function(el){let top=el.offsetTop-32-window.HaxStore.instance.haxPanel.$.drawer.offsetHeight,left=el.offsetLeft,width=el.offsetWidth,height=el.offsetHeight;while(el.offsetParent){el=el.offsetParent;top+=el.offsetTop;left+=el.offsetLeft}this.__OffBottom=top<window.pageYOffset+window.innerHeight;return top<window.pageYOffset+window.innerHeight&&left<window.pageXOffset+window.innerWidth&&top+height>window.pageYOffset&&left+width>window.pageXOffset},replacePlaceholder:function(e){if("text"===e.detail){let p=document.createElement("p");this.haxReplaceNode(this.activeNode,p,dom(this.activeNode).parentNode);setTimeout(()=>{window.HaxStore.write("activeNode",p,this);p.focus()},100)}else{this.replaceElementWorkflow()}},replaceElementWorkflow:function(){let element=window.HaxStore.nodeToHaxElement(this.activeNode,null),type="*",skipPropMatch=!1;if("place-holder"===element.tag&&typeof element.properties.type!==typeof void 0){type=element.properties.type;skipPropMatch=!0}var props={};if(typeof window.HaxStore.instance.elementList[element.tag]!==typeof void 0&&!1!==window.HaxStore.instance.elementList[element.tag].gizmo&&typeof window.HaxStore.instance.elementList[element.tag].gizmo.handles!==typeof void 0&&0<window.HaxStore.instance.elementList[element.tag].gizmo.handles.length){let gizmo=window.HaxStore.instance.elementList[element.tag].gizmo;for(var i=0;i<gizmo.handles.length;i++){for(var prop in gizmo.handles[i]){if("type"!==prop&&typeof element.properties[gizmo.handles[i][prop]]!==typeof void 0){props[prop]=element.properties[gizmo.handles[i][prop]]}}}}let haxElements=window.HaxStore.guessGizmo(type,props,skipPropMatch);if(0<haxElements.length){let tag=this.activeNode.tagName.toLowerCase(),humanName=tag.replace("-"," ");if(typeof window.HaxStore.instance.elementList[tag]!==typeof void 0&&!1!==window.HaxStore.instance.elementList[tag].gizmo){humanName=window.HaxStore.instance.elementList[tag].gizmo.title}window.HaxStore.instance.haxAppPicker.presentOptions(haxElements,"__convert",`Transform ${humanName} to..`,"gizmo")}else{window.HaxStore.toast("Sorry, this can not be transformed!",5e3)}},_globalPreferencesUpdated:function(newValue,oldValue){if(typeof newValue!==typeof void 0&&null!=newValue){this.haxRayMode=newValue.haxRayMode}},_haxStorePropertyUpdated:function(e){if(e.detail&&typeof e.detail.value!==typeof void 0&&e.detail.property){if("object"===typeof e.detail.value){this.set(e.detail.property,null)}this.set(e.detail.property,e.detail.value)}},haxClearBody:function(confirm=!0){let status=!0;if(confirm){status=prompt("Are you sure you want to delete all content?")}if(status){window.HaxStore.wipeSlot(this)}},haxInsert:function(tag,content,properties={},waitForLock=!0){var tags=window.HaxStore.instance.validTagList;if(tags.includes(tag)){var frag=document.createElement(tag);frag.innerHTML=content;var newNode=frag.cloneNode(!0);for(var property in properties){let attributeName=window.HaxStore.camelToDash(property);if(properties.hasOwnProperty(property)){if(!0===properties[property]){newNode.setAttribute(attributeName,properties[property])}else if(!1===properties[property]){newNode.removeAttribute(attributeName)}else if(null!=properties[property]&&properties[property].constructor===Array&&!newNode.properties[property].readOnly){newNode.set(attributeName,properties[property])}else if(null!=properties[property]&&properties[property].constructor===Object&&!newNode.properties[property].readOnly){newNode.set(attributeName,properties[property])}else{newNode.setAttribute(attributeName,properties[property])}}}if(null!==window.HaxStore.instance.activePlaceHolder&&typeof window.HaxStore.instance.activePlaceHolder.style!==typeof void 0){newNode.style.width=window.HaxStore.instance.activePlaceHolder.style.width;newNode.style.float=window.HaxStore.instance.activePlaceHolder.style.float;newNode.style.margin=window.HaxStore.instance.activePlaceHolder.style.margin;newNode.style.display=window.HaxStore.instance.activePlaceHolder.style.display;this.haxReplaceNode(window.HaxStore.instance.activePlaceHolder,newNode,dom(window.HaxStore.instance.activePlaceHolder).parentNode);window.HaxStore.instance.activePlaceHolder=null}else if(null!==this.activeContainerNode){if("GRID-PLATE"!==newNode.tagName&&"GRID-PLATE"===this.activeContainerNode.tagName&&this.activeContainerNode!==this.activeNode){newNode.setAttribute("slot",this.activeNode.getAttribute("slot"));dom(this.activeContainerNode).insertBefore(newNode,this.activeNode)}else{dom(this).insertBefore(newNode,this.activeContainerNode.nextElementSibling)}}else{dom(this).appendChild(newNode)}this.$.textcontextmenu.highlightOps=!1;this.__updateLockFocus=newNode;if(waitForLock){setTimeout(()=>{this.breakUpdateLock()},300)}return!0}return!1},breakUpdateLock:function(){window.HaxStore.write("activeContainerNode",this.__updateLockFocus,this);window.HaxStore.write("activeNode",this.__updateLockFocus,this);this.__updateLockFocus.focus();if("function"===typeof this.__updateLockFocus.scrollIntoViewIfNeeded){this.__updateLockFocus.scrollIntoViewIfNeeded(!0)}else{this.__updateLockFocus.scrollIntoView({behavior:"smooth",inline:"center"})}},haxToContent:function(){this.hideContextMenus();var __active=this.activeNode;window.HaxStore.write("activeNode",null,this);window.HaxStore.write("activeContainerNode",null,this);let children=dom(this.$.body).getDistributedNodes();if(this.globalPreferences.haxDeveloperMode){console.log(children)}for(var content="",i=0,len=children.length;i<len;i++){if(this._haxElementTest(children[i])){children[i].removeAttribute("data-editable");children[i].removeAttribute("data-hax-ray");children[i].contentEditable=!1;content+=window.HaxStore.haxNodeToContent(children[i]);if("grid-plate"===children[i].tagName.toLowerCase()){this._applyContentEditable(this.editMode,children[i])}}else if(8===children[i].nodeType){content+="<!-- "+children[i].textContent+" -->"}else if(1!==children[i].nodeType&&typeof children[i].textContent!==typeof void 0&&"undefined"!==children[i].textContent){content+=children[i].textContent}}content=content.replace(/\scontenteditable=\"false\"/g,"");content=content.replace(/\sdata-editable=\"true\"/g,"");content=content.replace(/\sdata-editable=\"false\"/g,"");content=content.replace(/\sdata-editable=\""/g,"");content=content.replace(/\sdata-editable/g,"");content=content.replace(/\scontenteditable/g,"");content=content.replace(/\sdraggable/g,"");content=content.replace(/\sdata-draggable/g,"");content=content.replace(/\sdata-hax-ray=\".*?\"/g,"");if(this.parentNode.tagName){let parentTag=this.parentNode.tagName.toLowerCase(),string="style-scope "+parentTag+" x-scope",re=new RegExp(string,"g");content=content.replace(re,"");string="style-scope "+parentTag;re=new RegExp(string,"g");content=content.replace(re,"");string="x-scope "+parentTag+"-0";re=new RegExp(string,"g");content=content.replace(re,"");let tags=window.HaxStore.instance.validTagList;tags.push("hax-preview");for(var i in tags){string="style-scope "+tags[i];re=new RegExp(string,"g");content=content.replace(re,"");string="x-scope "+tags[i]+"-0 ";re=new RegExp(string,"g");content=content.replace(re,"");string="x-scope "+tags[i]+"-0";re=new RegExp(string,"g");content=content.replace(re,"")}}content=content.replace(/\sclass=\"\"/g,"");content=content.replace(/\sclass=\"\s\"/g,"");this._applyContentEditable(this.editMode);window.HaxStore.write("activeNode",__active,this);window.HaxStore.write("activeContainerNode",__active,this);content=window.HaxStore.encapScript(content);if(this.globalPreferences.haxDeveloperMode){console.log(content)}return content},haxDuplicateNode:function(node,parent=this){this.hideContextMenus();var nodeClone=dom(node).cloneNode(!0);if("webview"===nodeClone.tagName.toLowerCase()&&window.HaxStore.instance._isSandboxed&&typeof nodeClone.guestinstance!==typeof void 0){delete nodeClone.guestinstance}if(null!==node){dom(parent).insertBefore(nodeClone,dom(node).nextSibling)}else{dom(parent).appendChild(nodeClone)}setTimeout(()=>{if(parent===this){window.HaxStore.write("activeContainerNode",nodeClone,this)}window.HaxStore.write("activeNode",nodeClone,this)},100);return!0},hideContextMenus:function(){this._hideContextMenu(this.$.textcontextmenu);this._hideContextMenu(this.$.cecontextmenu);this._hideContextMenu(this.$.platecontextmenu);this._hideContextMenu(this.$.haxinputmixer);this.$.textcontextmenu.highlightOps=!1},positionContextMenus:function(node,container){let tag=node.tagName.toLowerCase();if(window.HaxStore.instance._isSandboxed&&"webview"===tag){tag="iframe"}let props=window.HaxStore.instance.elementList[tag],w=Math.max(document.documentElement.clientWidth,window.innerWidth||0),offsetmenu=-39,offsetplate=-31;if(800>w){offsetmenu=0;offsetplate=0}if(typeof props!==typeof void 0&&"P"!==node.tagName){this.__activeContextType=this.$.cecontextmenu;props.element=node;this.__activeContextType.setHaxProperties(props)}else{this.__activeContextType=this.$.textcontextmenu}this._positionContextMenu(this.__activeContextType,container,offsetmenu,-37);this._positionContextMenu(this.$.platecontextmenu,container,offsetplate,0,!1);if(!this._HTMLPrimativeTest(node)&&node!==container){container.contentEditable=!1}else if(this._HTMLPrimativeTest(container)){container.contentEditable=!0}},haxMoveGridPlate:function(direction,node,container){this.hideContextMenus();switch(direction){case"first":if(null!==container.previousElementSibling){dom(this).insertBefore(container,dom(this).firstChild)}break;case"up":if(null!==container.previousElementSibling){dom(this).insertBefore(container,container.previousElementSibling)}break;case"down":if(null!==container.nextElementSibling){dom(this).insertBefore(container.nextElementSibling,container)}break;case"last":if(null!==container.nextElementSibling){dom(this).appendChild(container)}break;}this.positionContextMenus(node,container);setTimeout(()=>{if("function"===typeof container.scrollIntoViewIfNeeded){container.scrollIntoViewIfNeeded(!0)}else{container.scrollIntoView({behavior:"smooth",inline:"center"})}},100);return!0},haxReplaceNode:function(node,replacement,parent=this){this.hideContextMenus();try{if(null!=node.getAttribute("slot")){replacement.setAttribute("slot",node.getAttribute("slot"))}dom(parent).replaceChild(replacement,node)}catch(e){console.log(e)}return replacement},haxChangeTagName:function(node,tagName,newNode){this.hideContextMenus();for(var replacement=document.createElement(tagName),i=0,l=node.attributes.length;i<l;++i){var nodeName=node.attributes.item(i).nodeName,value=node.attributes.item(i).value;replacement.setAttribute(nodeName,value)}replacement.innerHTML=node.innerHTML;dom(this).replaceChild(replacement,node);return replacement},haxDeleteNode:function(node,parent=this){this.hideContextMenus();if(null!=this.activeContainerNode&&null!==this.activeContainerNode.previousElementSibling){this.activeContainerNode.previousElementSibling.focus();if(null!=this.activeContainerNode&&window.HaxStore.instance.isTextElement(this.activeContainerNode)&&""!==dom(this.activeContainerNode).textContent){try{var range=document.createRange(),sel=window.HaxStore.getSelection();range.setStart(this.activeContainerNode,1);range.collapse(!0);sel.removeAllRanges();sel.addRange(range);this.activeContainerNode.focus()}catch(e){console.log(e)}}}else if(null!=this.activeContainerNode&&null!==this.activeContainerNode.nextElementSibling){this.activeContainerNode.nextElementSibling.focus()}else{window.HaxStore.write("activeContainerNode",null,this);window.HaxStore.write("activeNode",null,this)}try{return dom(parent).removeChild(node)}catch(e){console.log(e)}},importContent:function(html,clear=!0){if(clear){window.HaxStore.wipeSlot(this,"*")}setTimeout(()=>{html=window.HaxStore.encapScript(html);const validTags=window.HaxStore.instance.validTagList;let fragment=document.createElement("div");fragment.insertAdjacentHTML("beforeend",html);while(null!==fragment.firstChild){if(typeof fragment.firstChild.tagName!==typeof void 0&&validTags.includes(fragment.firstChild.tagName.toLowerCase())){if(window.HaxStore.instance._isSandboxed&&"iframe"===fragment.firstChild.tagName.toLowerCase()){for(var replacement=document.createElement("webview"),j=0,l=fragment.firstChild.attributes.length;j<l;++j){var nodeName=fragment.firstChild.attributes.item(j).nodeName,value=fragment.firstChild.attributes.item(j).value;if("height"===nodeName||"width"===nodeName){replacement.style[nodeName]==value}replacement.setAttribute(nodeName,value)}dom(this).appendChild(replacement)}else{dom(this).appendChild(fragment.firstChild)}}else{fragment.removeChild(fragment.firstChild)}}},100)},_haxContextOperation:function(e){let detail=e.detail;var haxElement;switch(detail.eventName){case"p":case"h2":case"h3":case"h4":case"h5":case"h6":case"code":case"blockquote":this.$.textcontextmenu.selectedValue=detail.eventName;window.HaxStore.write("activeContainerNode",this.haxChangeTagName(this.activeContainerNode,detail.eventName),this);this.positionContextMenus(this.activeNode,this.activeContainerNode);break;case"text-align-left":this.activeNode.style.textAlign=null;this.positionContextMenus(this.activeNode,this.activeContainerNode);break;case"grid-plate-convert":this.replaceElementWorkflow();break;case"grid-plate-duplicate":if(this.activeNode===this.activeContainerNode){this.haxDuplicateNode(this.activeNode)}else{this.haxDuplicateNode(this.activeNode,this.activeContainerNode)}break;case"grid-plate-delete":let options=[{icon:"thumb-up",color:"green",title:"Yes"},{icon:"thumb-down",color:"red",title:"No"}],tag=this.activeNode.tagName.toLowerCase(),humanName=tag.replace("-"," ");if(typeof window.HaxStore.instance.elementList[tag]!==typeof void 0&&!1!==window.HaxStore.instance.elementList[tag].gizmo){humanName=window.HaxStore.instance.elementList[tag].gizmo.title}window.HaxStore.instance.haxAppPicker.presentOptions(options,"",`Remove this \`${humanName}\`?`,"delete");break;case"grid-plate-first":this.haxMoveGridPlate("first",this.activeNode,this.activeContainerNode);break;case"grid-plate-up":this.haxMoveGridPlate("up",this.activeNode,this.activeContainerNode);break;case"hax-manager-open":window.HaxStore.write("activeHaxElement",{},this);window.HaxStore.instance.haxManager.resetManager(parseInt(detail.value));window.HaxStore.instance.haxManager.toggleDialog();break;case"grid-plate-down":this.haxMoveGridPlate("down",this.activeNode,this.activeContainerNode);break;case"grid-plate-last":this.haxMoveGridPlate("last",this.activeNode,this.activeContainerNode);break;case"close-menu":window.HaxStore.write("activeContainerNode",null,this);window.HaxStore.write("activeNode",null,this);break;case"hax-edit-property":let haxInputMixer=this.$.haxinputmixer;haxInputMixer.label=detail.target.label;haxInputMixer.options=detail.target.options;haxInputMixer.icon=detail.target.icon;haxInputMixer.description=detail.target.description;haxInputMixer.required=detail.target.required;haxInputMixer.validation=detail.target.validation;haxInputMixer.validationType=detail.target.validationType;haxInputMixer.inputMethod=detail.target.inputMethod;haxInputMixer.value="";if(typeof detail.target.propertyToBind!==typeof void 0&&null!=detail.target.propertyToBind&&!1!=detail.target.propertyToBind){haxInputMixer.propertyToBind=detail.target.propertyToBind;if(typeof this.activeNode[detail.target.propertyToBind]!==typeof void 0){haxInputMixer.value=this.activeNode[detail.target.propertyToBind]}else{haxInputMixer.value=this.activeNode.getAttribute(detail.target.propertyToBind)}}this._positionContextMenu(haxInputMixer,this.$.cecontextmenu,0,0);haxInputMixer.style.width=null;break;case"hax-align-left":this.activeNode.style.float=null;this.activeNode.style.margin=null;this.activeNode.style.display=null;this.positionContextMenus(this.activeNode,this.activeContainerNode);break;case"hax-align-center":this.activeNode.style.float=null;this.activeNode.style.margin="0 auto";this.activeNode.style.display="block";this.positionContextMenus(this.activeNode,this.activeContainerNode);break;case"hax-size-change":this.activeNode.style.width=detail.value+"%";setTimeout(()=>{this.positionContextMenus(this.activeNode,this.activeContainerNode)},500);break;case"hax-manager-configure":this._hideContextMenu(this.$.haxinputmixer);window.HaxStore.instance.haxManager.resetManager();haxElement=window.HaxStore.nodeToHaxElement(window.HaxStore.instance.activeNode);window.HaxStore.write("activeHaxElement",haxElement,this);window.HaxStore.instance.haxManager.editExistingNode=!0;window.HaxStore.instance.haxManager.selectStep("configure");window.HaxStore.instance.haxManager.toggleDialog();setTimeout(()=>{window.HaxStore.instance.haxManager.$.preview.$.configurebutton.focus()},325);break;case"hax-manager-configure-container":window.HaxStore.write("activeNode",window.HaxStore.instance.activeContainerNode,this);this._hideContextMenu(this.$.haxinputmixer);window.HaxStore.instance.haxManager.resetManager();haxElement=window.HaxStore.nodeToHaxElement(window.HaxStore.instance.activeNode);window.HaxStore.write("activeHaxElement",haxElement,this);window.HaxStore.instance.haxManager.editExistingNode=!0;window.HaxStore.instance.haxManager.selectStep("configure");window.HaxStore.instance.haxManager.toggleDialog();setTimeout(()=>{window.HaxStore.instance.haxManager.$.preview.$.configurebutton.focus()},325);break;}},_haxInputMixerOperation:function(e){let mixer=e.detail.inputMixer;if(null!=mixer.propertyToBind){this.activeNode[mixer.propertyToBind]=mixer.value}else if(null!=mixer.slotToBind){item=document.createElement("span");item.style.height="inherit";item.innerHTML=mixer.value;item.slot=mixer.slotToBind;this.activeNode.appendChild(item)}this._hideContextMenu(this.$.haxinputmixer)},_focusIn:function(e){if(this.editMode&&!this.__tabTrap){var normalizedEvent=dom(e),local=normalizedEvent.localTarget,tags=window.HaxStore.instance.validTagList;let containerNode=local,activeNode=null;if(this._haxElementTest(containerNode)&&null!=containerNode.parentNode){while("HAX-BODY"!=containerNode.parentNode.tagName){if(null===activeNode&&tags.includes(containerNode.tagName.toLowerCase())&&"LI"!==containerNode.tagName&&"B"!==containerNode.tagName&&"I"!==containerNode.tagName&&"STRONG"!==containerNode.tagName&&"EM"!==containerNode.tagName){activeNode=containerNode}containerNode=containerNode.parentNode}if(null===activeNode){activeNode=containerNode}else if(!window.HaxStore.instance.isGridPlateElement(containerNode)){activeNode=containerNode}else if(["UL","OL","LI","P","GRID-PLATE"].includes(containerNode.tagName)&&["UL","OL","LI"].includes(activeNode.tagName)){activeNode=containerNode}if(this.activeContainerNode!==containerNode&&tags.includes(containerNode.tagName.toLowerCase())&&!containerNode.classList.contains("ignore-activation")){window.HaxStore.write("activeContainerNode",containerNode,this);e.stopPropagation()}else if(containerNode.classList.contains("ignore-activation")){e.stopPropagation()}if(this.activeNode!==activeNode&&tags.includes(containerNode.tagName.toLowerCase())&&!activeNode.classList.contains("ignore-activation")){setTimeout(()=>{window.HaxStore.write("activeNode",activeNode,this)},50);e.stopPropagation()}}}else{this.__tabTrap=!1}},_editModeChanged:function(newValue,oldValue){if(typeof oldValue!==typeof void 0){this._applyContentEditable(newValue);if(!1!==newValue&&typeof this.activeNode!==typeof void 0&&null!==this.activeNode){this.positionContextMenus(this.activeNode,this.activeContainerNode)}}if(!1===newValue){this.hideContextMenus()}},_haxResolvePreviousElement:function(node){node=dom(node).previousElementSibling;while(null!=node&&typeof node.tagName!==typeof void 0&&"HAX-"===node.tagName.substring(0,4)){node=dom(node).previousElementSibling}return node},_haxElementTest:function(node){if(typeof node.tagName!==typeof void 0&&"HAX-"!==node.tagName.substring(0,4)){return!0}return!1},_HTMLPrimativeTest:function(node){if(typeof node.tagName!==typeof void 0&&-1==node.tagName.indexOf("-")){return!0}return!1},_applyContentEditable:function(status,target=this.$.body){let children=dom(target).getDistributedNodes();if(0===children.length){children=dom(target).getEffectiveChildNodes()}for(var i=0,len=children.length;i<len;i++){if(this._HTMLPrimativeTest(children[i])){children[i].contentEditable=status}if(this._haxElementTest(children[i])){if(status){children[i].setAttribute("data-editable",status);let haxRay=children[i].tagName.replace("-"," ").toLowerCase(),l=window.HaxStore.instance.gizmoList.findIndex(j=>j.tag===children[i].tagName.toLowerCase());if(-1!==l){haxRay=window.HaxStore.instance.gizmoList[l].title}children[i].setAttribute("data-hax-ray",haxRay)}else{children[i].removeAttribute("data-editable");children[i].removeAttribute("data-hax-ray")}}}},_activeContainerNodeChanged:function(newValue,oldValue){if(this.editMode&&typeof newValue!==typeof void 0&&null!==newValue){let tag=newValue.tagName.toLowerCase();if("grid-plate"===tag){newValue.editMode=this.editMode;this._applyContentEditable(this.editMode,newValue)}}},_activeNodeChanged:function(newValue,oldValue){if(typeof oldValue!==typeof void 0&&null!=oldValue){oldValue.classList.remove("hax-active")}if(this.editMode&&typeof newValue!==typeof void 0&&null!==newValue){let tag=newValue.tagName.toLowerCase();newValue.classList.add("hax-active");this.$.textcontextmenu.selectedValue=tag;setTimeout(()=>{this.positionContextMenus(newValue,window.HaxStore.instance.activeContainerNode)},25);if("left"==newValue.style.textAlign){this.$.textcontextmenu.justifyIcon="editor:format-align-left";this.$.textcontextmenu.justifyValue="text-align-left"}else if("left"==newValue.style.float){this.$.cecontextmenu.justifyIcon="editor:format-align-left";this.$.cecontextmenu.justifyValue="hax-align-left"}else if("0 auto"==newValue.style.margin){this.$.cecontextmenu.justifyIcon="editor:format-align-center";this.$.cecontextmenu.justifyValue="hax-align-center"}}else if(null===newValue){this.hideContextMenus();this.$.textcontextmenu.justifyIcon="editor:format-align-left";this.$.textcontextmenu.justifyValue="text-align-left"}},_positionContextMenu:function(menu,target,xoffset,yoffset,matchStyle=!0){try{dom(this).insertBefore(menu,target)}catch(err){try{dom(target.parentNode).insertBefore(menu,target)}catch(err2){}}if(matchStyle){menu.style.width=target.style.width}let style=target.currentStyle||window.getComputedStyle(target);if(0!=parseInt(style.marginLeft)){xoffset=xoffset+parseInt(style.marginLeft)}else{xoffset=xoffset+parseInt(target.offsetLeft)-this.offsetLeft}if(null!=xoffset){menu.style["margin-left"]=xoffset+"px"}if(null!=yoffset){menu.style["margin-top"]=yoffset+"px"}menu.classList.add("hax-context-visible");async.microTask.run(this._keepContextVisible())},_hideContextMenu:function(menu){menu.classList.remove("hax-context-visible");menu.classList.remove("hax-context-pin-top");menu.classList.remove("hax-context-pin-bottom");dom(this.$.contextcontainer).appendChild(menu)},_escKeyPressed:function(e){if(this.editMode){e.preventDefault();e.stopPropagation();if(this.$.textcontextmenu.highlightOps){this.$.textcontextmenu.highlightOps=!1;window.HaxStore.write("activeNode",this.activeContainerNode,this);this.activeContainerNode.focus()}else if(this.activeNode===this.activeContainerNode){window.HaxStore.write("activeContainerNode",null,this);window.HaxStore.write("activeNode",null,this);document.body.focus()}else{window.HaxStore.write("activeNode",this.activeContainerNode,this);this.activeContainerNode.focus()}}},_delKeyPressed:function(e){if(this.editMode){const activeNodeTextContent=dom(this.activeContainerNode).textContent;if(""===activeNodeTextContent){e.preventDefault();e.stopPropagation();this.haxDeleteNode(this.activeContainerNode)}else if(window.HaxStore.instance.isTextElement(this._haxResolvePreviousElement(this.activeContainerNode))){var selection=window.HaxStore.getSelection();let range=selection.getRangeAt(0).cloneRange(),tagTest=range.commonAncestorContainer.tagName;if(typeof tagTest===typeof void 0){tagTest=range.commonAncestorContainer.parentNode.tagName}if(0===range.startOffset&&0===range.endOffset&&!["UL","OL","LI"].includes(tagTest)){e.preventDefault();e.stopPropagation();while(this.activeContainerNode.firstChild){this._haxResolvePreviousElement(this.activeContainerNode).appendChild(this.activeContainerNode.firstChild)}setTimeout(()=>{this.haxDeleteNode(this.activeContainerNode)},100)}}}},_upKeyPressed:function(e){if(this.editMode&&""===dom(this.activeContainerNode).textContent){let node=this._haxResolvePreviousElement(this.activeContainerNode);try{node.focus()}catch(e){}}},_downKeyPressed:function(e){if(this.editMode&&""===dom(this.activeContainerNode).textContent){let node=dom(this.activeContainerNode);try{node.nextElementSibling.focus()}catch(e){}}},_tabKeyPressed:function(e){if(this.editMode){e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();let focus=!1,node=this.activeContainerNode;const activeNodeTagName=this.activeContainerNode.tagName;try{var selection=window.HaxStore.getSelection();let range=selection.getRangeAt(0).cloneRange();var tagTest=range.commonAncestorContainer.tagName;if(typeof tagTest===typeof void 0){tagTest=range.commonAncestorContainer.parentNode.tagName}if(["UL","OL","LI"].includes(activeNodeTagName)||["UL","OL","LI"].includes(tagTest)){if(this.polyfillSafe){document.execCommand("indent");this.__tabTrap=!0}}else{while(!focus){if(null==dom(node).nextSibling){focus=!0}else if("function"===dom(node).nextSibling.focus){dom(node).nextSibling.focus();focus=!0}else{node=dom(node).nextSibling}}}}catch(e){}}},_tabBackKeyPressed:function(e){if(this.editMode){e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();let node=dom(this.activeContainerNode).previousSibling;const activeNodeTagName=this.activeContainerNode.tagName;var selection=window.HaxStore.getSelection();try{let range=selection.getRangeAt(0).cloneRange();if(["UL","OL","LI"].includes(activeNodeTagName)||["UL","OL","LI"].includes(range.commonAncestorContainer.parentElement.tagName)){if(this.polyfillSafe){document.execCommand("outdent");this.__tabTrap=!0}}else{if(null!=node){while(null!=node&&!this._haxElementTest(node)){node=dom(node).previousSibling}}if(null!=node){setTimeout(()=>{node.focus()},100)}}}catch(e){}}}});export{HaxBody};