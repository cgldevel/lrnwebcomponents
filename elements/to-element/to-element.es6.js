/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */ /**
 * `to-element`
 * `Replicate any DOM node passed in and turn it into a web component`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @demo demo/index.html
 */class ToElement extends HTMLElement{// render function
get html(){return`
<style></style>
<slot></slot>`}// properties available to the custom element for data binding
static get properties(){return{/**
   * object in question to clone and turn into a custom element
   */element:{name:"element",type:"Object",value:{}},/**
   * valid custom element name of the new element to create
   */name:{name:"name",type:"String",value:"new-element"},/**
   * optional original location that this came from
   */sourceUrl:{name:"sourceUrl",type:"String",value:""},/**
   * MIME type lookup for file extensions
   */fileTypes:{type:"Object","value"(){return{CSV:"text/csv",JSON:"text/json",PDF:"application/pdf",TXT:"text/plain"}}}}}/**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */static get tag(){return"to-element"}/**
   * life cycle
   */constructor(delayRender=!1){super();// set tag for later use
this.tag=ToElement.tag;// map our imported properties json to real props on the element
// @notice static getter of properties is built via tooling
// to edit modify src/ToElement-properties.json
let obj=ToElement.properties;for(let p in obj){if(obj.hasOwnProperty(p)){if(this.hasAttribute(p)){this[p]=this.getAttribute(p)}else{this.setAttribute(p,obj[p].value);this[p]=obj[p].value}}}// optional queue for future use
this._queue=[];this.template=document.createElement("template");this.attachShadow({mode:"open"});if(!delayRender){this.render()}}/**
   * life cycle, element is afixed to the DOM
   */connectedCallback(){if(window.ShadyCSS){window.ShadyCSS.styleElement(this)}if(this._queue.length){this._processQueue()}}_copyAttribute(name,to){const recipients=this.shadowRoot.querySelectorAll(to),value=this.getAttribute(name),fname=null==value?"removeAttribute":"setAttribute";for(const node of recipients){node[fname](name,value)}}_queueAction(action){this._queue.push(action)}_processQueue(){this._queue.forEach(action=>{this[`_${action.type}`](action.data)});this._queue=[]}_setProperty({name,value}){this[name]=value}render(){this.shadowRoot.innerHTML=null;this.template.innerHTML=this.html;if(window.ShadyCSS){window.ShadyCSS.prepareTemplate(this.template,this.tag)}this.shadowRoot.appendChild(this.template.content.cloneNode(!0))}/**
   * Take the element in scope and calculate it's styling
   */createNewElement(){this._tmp=this.element;let css=this.extractCSS(this._tmp).stylesheet,html=this._tmp.outerHTML;return{html:html,css:css}}/**
   * Generate a UUID
   */generateUUID(){return"item-sss-ss-ss".replace(/s/g,this._uuidPart)}_uuidPart(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}// based on https://stackoverflow.com/questions/22907735/get-the-computed-style-and-omit-defaults
/**
   * get computed style for an element, excluding any default styles
   */getDefaultStyling(element,part=null){let tagName=element.tagName;//  Create dummy iframe
var iframe=document.createElement("iframe");this.shadowRoot.appendChild(iframe);//  Create element within the iframe's document
var iframeDocument=iframe.contentDocument,targetElement=iframeDocument.createElement(tagName);iframeDocument.body.appendChild(targetElement);//  Grab styling (CSSStyleDeclaration is live, and all values become "" after element removal)
for(var styling=iframe.contentWindow.getComputedStyle(targetElement),clonedStyling={},i=0,len=styling.length,property;i<len;i++){property=styling[i];clonedStyling[i]=property;clonedStyling[property]=styling[property]}//  Remove iframe
this.shadowRoot.removeChild(iframe);//  Return cloned styling
return clonedStyling}getStylesWithoutDefaults(element,part=null){for(var allStyling=window.getComputedStyle(element,part),defaultStyling=this.getDefaultStyling(element.tagName),userStyling={},i=0,len=allStyling.length;i<len;i++){var property=allStyling[i],value=allStyling[property],defaultValue=defaultStyling[property];if(value!=defaultValue&&"transform-origin"!==property&&"perspective-origin"!==property){userStyling[property]=value}}return userStyling}// based on https://stackoverflow.com/questions/53613045/how-get-all-computed-css-properties-of-element-and-its-children-in-javascript
// Flatten an array
// https://stackoverflow.com/a/15030117/2054072
flatten(arr){return arr.reduce((flat,toFlatten)=>{return flat.concat(Array.isArray(toFlatten)?this.flatten(toFlatten):toFlatten)},[])}recursiveExtract(element){const id=this.generateUUID(),styles=this.getStylesWithoutDefaults(element);/*
    // keep these later if we're able to figure out they work
    const before = this.getStylesWithoutDefaults(element, ":before");
    const after = this.getStylesWithoutDefaults(element, ":after");
    const hover = this.getStylesWithoutDefaults(element, ":hover");
    const focus = this.getStylesWithoutDefaults(element, ":focus");
    */ // Now that we get the style, we can swap the id
element.setAttribute("id",id);let css="";for(var i in styles){css+=`      ${i}: ${styles[i]};\n`}// The children are not a real array but a NodeList, we need to convert them
// so we can map over them easily
var children=Array.prototype.slice.call(element.children);return[{id:id,style:css}].concat(children.map(this.recursiveExtract.bind(this)))}extractCSS(element){if(!element){return{elements:[],stylesheet:""}}var raw=this.recursiveExtract(element),flat=this.flatten(raw);return{elements:flat,stylesheet:flat.reduce(function(acc,cur){var style="    #"+cur.id+" {\n"+cur.style+"    }\n";return acc+style},"")}}/**
   * convert dashed case to camel case
   */dashToCamel(str){return str.replace(/-([a-z])/g,function(g){return g[1].toUpperCase()})}/**
   * Output entire thing as a file.
   */contentToFile(html){return`
/**
 * Copyright 2019 {Your compay}
 * @license Apache-2.0, see License.md for full text.
 */
import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
/**
 * \`${this.name}\`
 * \`An auto generated element via to-element\`
 *
 * @microcopy - language worth noting:
 *  - This element was made by someone else and then forked from their site
 *  - The point is not perfection but to rapidly generate boilerplate
 *
 * @originalSite - This code is based on work originally found on
 *   - ${this.sourceUrl}
 * @customElement
 * @polymer
 */
class ${this.dashToCamel(this.name)} extends PolymerElement {
  
  // render function
  static get template() {
    return html\`
    ${html}
    \`;
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {
      "title": {
        "name": "title",
        "type": "String",
        "value": "",
      }
    };
  }

  /**
   * Store the tag name to make it easier to obtain directly.
   */
  static get tag() {
    return "${this.name}";
  }
  /**
   * life cycle, element is afixed to the DOM
   */
  //connectedCallback() { super.connectedCallback(); }
  /**
   * life cycle, element is removed from the DOM
   */
  //disconnectedCallback() {super.disconnectedCallback();}
}
window.customElements.define(${this.dashToCamel(this.name)}.tag, ${this.dashToCamel(this.name)});
export { ${this.dashToCamel(this.name)} };
    `}/**
   * Download a new component based on the selected element
   */downloadNewComponent(element,name){if(element){this.element=element}if(name){this.name=name}let tmp=this.createNewElement(),html=`<style>
${tmp.css}</style>
    ${tmp.html}`,data=this.contentToFile(html);this.downloadFromData(data,"js",this.name)}/**
   * Converts the data to a blob then uses navigator to save blob if it’s available, otherwise
   * creates an <a> with [download] attribute then simulates a click.
   * @param {String} data - data to encode.
   * @param {String} type - type of file to generate (i.e, JSON or CSV).
   * @param {String} [name = 'download'] - file name to save data under.
   * @param {Boolean} [newTab = true] - If false, downloads uri in existing tab. Otherwise,
   * downloads in new tab.
   */downloadFromData(data,type,name="download",newTab=!0){const mimeType=this.fileTypes[type.toUpperCase()],blob=new Blob([decodeURIComponent(encodeURI(data))],{type:mimeType}),filename=name+"."+type.toLowerCase();if(window.navigator&&window.navigator.msSaveOrOpenBlob){window.navigator.msSaveOrOpenBlob(blob,filename)}else{// Link elements have a download attribute which provides cross-platform
// download behavior supporting all but IE 11. This creates new link and then
// clicks it to initiate download.
const link=document.createElement("a");link.href=(window.URL||window.webkitURL).createObjectURL(blob);link.download=filename;link.target=newTab?"_blank":"_self";this.shadowRoot.appendChild(link);link.click();this.shadowRoot.removeChild(link)}}/**
   * Opens a new tab at the URI so that download can be initiated from the page.
   * @param {String} uri - The uri to open.
   * @param {Boolean} [newTab = true] - If false, downloads uri in existing tab. Otherwise,
   * downloads in new tab.
   * @return {Boolean} Returns true.
   */downloadFromURI(uri,newTab=!0){window.open(uri,newTab?"_blank":"_self");return!0;// NOTE: Returning true to prevent error in some browsers during download.
}//static get observedAttributes() {
//  return [];
//}
// disconnectedCallback() {}
// attributeChangedCallback(attr, oldValue, newValue) {}
}window.customElements.define(ToElement.tag,ToElement);export{ToElement};