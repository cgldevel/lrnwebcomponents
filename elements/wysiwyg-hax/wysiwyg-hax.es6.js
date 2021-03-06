import{html,PolymerElement}from"./node_modules/@polymer/polymer/polymer-element.js";import"./node_modules/@lrnwebcomponents/cms-hax/cms-hax.js";import{FlattenedNodesObserver}from"./node_modules/@polymer/polymer/lib/utils/flattened-nodes-observer.js";/**
 * `wysiwyg-hax`
 * `Integration of wysiwyg edit form for a page with HAX.`
 */class WysiwygHax extends PolymerElement{static get template(){return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <textarea id\$="[[fieldId]]" name="[[fieldName]]" hidden="">
[[bodyValue]]</textarea
      >
      <cms-hax
        open-default="[[openDefault]]"
        hide-message=""
        body-offset-left="[[bodyOffsetLeft]]"
        update-page-data="[[updatePageData]]"
        end-point="[[endPoint]]"
        app-store-connection="[[appStoreConnection]]"
        hide-export-button="[[hideExportButton]]"
        align="[[align]]"
      >
      </cms-hax>
    `}static get tag(){return"wysiwyg-hax"}static get properties(){return{/**
       * Default the panel to open
       */openDefault:{type:Boolean,value:!1},/**
       * Hide the export button, not a common thing to show
       * in this mode but it's possible for debugging
       */hideExportButton:{type:Boolean,value:!0},/**
       * Direction to align the hax edit panel
       */align:{type:String,value:"right"},/**
       * Data binding of a hidden text area with the value from the hax-body tag
       */bodyValue:{type:String},/**
       * Connection object for talking to an app store.
       */appStoreConnection:{type:Object},/**
       * fieldId, id value on the input field.
       */fieldId:{type:String,value:"textarea-input-field"},/**
       * fieldName, internal to the form in whatever system it's in.
       */fieldName:{type:String,value:"data[content]"},/**
       * Offset from the left of the body field
       */bodyOffsetLeft:{type:Number,value:-22},/**
       * State of the panel
       */editMode:{type:Boolean,reflectToAttribute:!0},/**
       * Location to save content to.
       */endPoint:{type:String},/**
       * Page data, body of text as a string.
       */updatePageData:{type:String},/**
       * Reference to activeBody.
       */activeHaxBody:{type:Object,observer:"_activeHaxBodyUpdated"},__imported:{type:Boolean,value:!1}}}/**
   * highjack shadowDom
   */_attachDom(dom){this.appendChild(dom)}/**
   * Ensure we've imported our content on initial setup
   */_activeHaxBodyUpdated(newValue,oldValue){// ensure we import our content once we get an initial registration of active body
if(null!=newValue&&!this.__imported){this.__imported=!0;// see what's inside of this, in a template tag
let children=this.querySelector("template");// convert this template content into the real thing
// this helps with correctly preserving everything on the way down
if(null!=children){newValue.importContent(children.innerHTML);// need to dot his because of juggling unfortunately
this.editMode=!1;window.HaxStore.write("editMode",this.editMode,this);setTimeout(()=>{this.editMode=!0;window.HaxStore.write("editMode",this.editMode,this)},200)}}}connectedCallback(){super.connectedCallback();document.body.addEventListener("hax-save",this._bodyContentUpdated.bind(this));document.body.addEventListener("hax-store-property-updated",this._haxStorePropertyUpdated.bind(this))}disconnectedCallback(){document.body.removeEventListener("hax-save",this._bodyContentUpdated.bind(this));document.body.removeEventListener("hax-store-property-updated",this._haxStorePropertyUpdated.bind(this));super.disconnectedCallback()}/**
   * Store updated, sync.
   */_haxStorePropertyUpdated(e){if(e.detail&&typeof e.detail.value!==typeof void 0&&e.detail.property){if("object"===typeof e.detail.value){this.set(e.detail.property,null)}this.set(e.detail.property,e.detail.value)}}/**
   * Set the bubbled up event to the body value that just got changed
   */_bodyContentUpdated(e){this.bodyValue=window.HaxStore.instance.activeHaxBody.haxToContent()}}window.customElements.define(WysiwygHax.tag,WysiwygHax);export{WysiwygHax};