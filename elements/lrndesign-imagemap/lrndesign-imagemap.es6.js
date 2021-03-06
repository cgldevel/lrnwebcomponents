import{html,PolymerElement}from"./node_modules/@polymer/polymer/polymer-element.js";import{afterNextRender}from"./node_modules/@polymer/polymer/lib/utils/render-status.js";import{dom}from"./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js";import"./node_modules/@polymer/iron-ajax/iron-ajax.js";import"./node_modules/@polymer/iron-a11y-keys/iron-a11y-keys.js";import"./node_modules/@lrnwebcomponents/simple-modal/simple-modal.js";/**
 * `lrndesign-imagemap`
 * creates an accessible image map
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */class LrndesignImagemap extends PolymerElement{constructor(){super();import("./node_modules/@lrnwebcomponents/relative-heading/relative-heading.js");import("./node_modules/@lrnwebcomponents/lrndesign-imagemap/lib/lrndesign-imagemap-hotspot.js")}static get template(){return html`
      <style>
        :host {
          display: block;
        }
        :host #buttons {
          position: absolute;
          left: -999999px;
          top: 0;
          overflow: hidden;
          opacity: 0;
        }
        /*::slotted([hotspot]) {
        display: none;
      }*/
        @media print {
          :host > #svg {
            display: none;
          }
          /*::slotted(#screen-only) {
          display: none;
        }
        ::slotted([hotspot]) {
          display: block;
        }*/
        }
      </style>
      <relative-heading
        hidden\$="[[!label]]"
        id="heading"
        subtopic-of\$="[[subtopicOf]]"
        tag\$="[[tag]]"
        text\$="[[label]]"
      >
      </relative-heading>
      <div id="desc"><slot name="desc"></slot></div>
      <div id="svg"></div>
      <div id="buttons"></div>
      <slot></slot>
      <iron-ajax
        auto=""
        id="get_svg"
        url="[[src]]"
        handle-as="text"
        on-response="_getSVGHandler"
      ></iron-ajax>
    `}static get tag(){return"lrndesign-imagemap"}static get properties(){return{/**
       * Label for the imagemap
       */label:{type:String,value:null},/**
       * The path of the SVG
       */src:{type:String,value:null},/**
       * The path of the SVG
       */hotspotDetails:{type:Array,value:[]},/*
       * optional: the id of the heading element that this imagemap is a subtopic of
       */subtopicOf:{type:String,value:null,reflectToAttribute:!0},/*
       * optional: if subtopicOf is not set, start the content at a heading tag, eg. <h1/>, <h2/> ...
       */tag:{type:String,value:null,reflectToAttribute:!0}}}/**
   * attached life cycle
   */connectedCallback(){super.connectedCallback();window.SimpleModal.requestAvailability();window.addEventListener("simple-modal-closed",e=>{if(e.detail.invokedBy===this){this.closeHotspot()}})}/**
   * detached life cycle
   */disconnectedCallback(){window.removeEventListener("simple-modal-closed",e=>{if(e.detail.invokedBy===this){this.closeHotspot()}});super.disconnectedCallback()}/**
   * Convert from svg text to an array in the table function
   */_getSVGHandler(e){let root=this,temp=document.createElement("div"),getID=function(element,alt){if(null===element.getAttribute("id"))element.setAttribute("id",alt);return element.getAttribute("id")},setAriaLabelledBy=function(source,target,prefix){// adds title and desc elements to target and sets the aria-labelledby attribute
let svgElem=function(nodename){source=null!==source?source:root;//adds title or desc element to target
let attr="title"===nodename?"label":nodename,query=source.querySelector("#"+attr);var label=target.querySelector(nodename);//if the target doesn't have the element, add it
if(null===label){label=document.createElement(nodename);target.prepend(label)}//populates the element with data from the source element
if(null!==source.getAttribute(attr)){label.innerHTML=source.getAttribute(attr)}else if(null!==query&&""!==query.innerHTML){label.innerHTML=query.innerHTML}//returns the new element's id
return getID(label,prefix+"-"+attr)};//set aria-labelledby to the id's for title and descriptions
target.setAttribute("aria-labelledby",svgElem("desc")+" "+svgElem("label"))};//set up main svg and append to document
temp.innerHTML=e.detail.response;let svg=temp.querySelector("svg"),svgid=getID(svg,"svg-"+Date.now()),hdata=dom(root).querySelectorAll("lrndesign-imagemap-hotspot");setAriaLabelledBy(root,svg,svgid);this.shadowRoot.querySelector("#svg").appendChild(svg);for(let i=0;i<hdata.length;i++){let hid=hdata[i].getAttribute("hotspot-id"),hotspot=svg.querySelector("#"+hid),clone=svg.cloneNode(!0);//clone svg for print versions and show hotspot as selected
setAriaLabelledBy(hdata[i],clone,hid);hdata[i].appendChild(clone);hdata[i].querySelector("#"+hid).classList.add("selected");hdata[i].setParentHeading(root.shadowRoot.querySelector("#heading"));for(let j=0;j<hdata.length;j++){hdata[i].querySelector("#"+hdata[j].getAttribute("hotspot-id")).classList.add("hotspot")}//configure hotspot on main (interactive) svg
let hbutton=document.createElement("button");hbutton.setAttribute("tabindex",0);hbutton.setAttribute("aria-label",hdata[i].label);root.shadowRoot.querySelector("#buttons").appendChild(hbutton);hbutton.addEventListener("focus",function(){hotspot.classList.add("focus")});hbutton.addEventListener("blur",function(){hotspot.classList.remove("focus")});hotspot.classList.add("hotspot");hotspot.addEventListener("click",e=>{this.openHotspot(hotspot,hdata[i])});hbutton.addEventListener("keyup",e=>{if(13===e.keyCode||32===e.keyCode){if(!hotspot.classList.contains("selected")){this.openHotspot(hotspot,hdata[i])}}})}}/**
   * Selects a hotspot and opens dialog with details about it.
   */openHotspot(hotspot,details){// get everything flat
var children=details.shadowRoot.querySelector("#desc").querySelector("slot").assignedNodes({flatten:!0});let c=document.createElement("div");// append clones of the children we found
for(var child in children){c.appendChild(children[child].cloneNode(!0))}const evt=new CustomEvent("simple-modal-show",{bubbles:!0,cancelable:!0,detail:{title:details.getAttribute("label"),elements:{content:c},invokedBy:this,clone:!1}});this.dispatchEvent(evt);this.__activeHotspot=hotspot;this.resetHotspots();hotspot.classList.add("selected")}/**
   * Closes a hotspot.
   */closeHotspot(){this.resetHotspots();this.__activeHotspot.focus()}/**
   * Closes dialog and deselects all hotspots.
   */resetHotspots(){let hotspots=this.querySelectorAll(".hotspot[role=\"button\"]");for(let i=0;i<hotspots.length;i++){hotspots[i].classList.remove("selected")}}}window.customElements.define(LrndesignImagemap.tag,LrndesignImagemap);export{LrndesignImagemap};