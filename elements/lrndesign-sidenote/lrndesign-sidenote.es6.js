/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */import{html,PolymerElement}from"./node_modules/@polymer/polymer/polymer-element.js";import{A11yBehaviors}from"./node_modules/@lrnwebcomponents/a11y-behaviors/a11y-behaviors.js";import"./node_modules/@lrnwebcomponents/materializecss-styles/materializecss-styles.js";/**
`lrndesign-sidenote`
A basic side note

* @demo demo/index.html
*/class LrndesignSidenote extends A11yBehaviors(PolymerElement){static get template(){return html`
      <style>
        :host {
          display: block;
          --container-bg-color: lightgray;
          --container-text-color: black;
          --container-padding: 16px;
          --container-outset: 0;
          @apply --host-styles;
        }

        #container {
          display: block;
          background: var(--container-bg-color);
          color: var(--container-text-color);
          padding: var(--container-padding);
          margin-left: -var(--container-outset);
          @apply --container-styles;
        }

        #header {
          display: flex;
          align-items: center;
          @apply --container-header;
        }

        #icon {
          margin-right: 8px;
          @apply --icon-styles;
        }

        #label {
          font-size: 20.8px;
          margin: 12.8px 0;
          flex: 1 1 auto;
          @apply --label-styles;
        }
      </style>
      <div id="container">
        <div id="header">
          <iron-icon id="icon" icon="[[icon]]" hidden\$="[[!icon]]"></iron-icon>
          <div id="label" hidden\$="[[!label]]">[[label]]</div>
        </div>
        <slot></slot>
      </div>
    `}static get tag(){return"lrndesign-sidenote"}static get properties(){return{/**
       * The display label
       */label:{type:String,value:""},/**
       * The display icon for the element
       */icon:{type:String,value:""},/**
       * Background Color
       */bgColor:{type:String,value:"#f7f7f7"},/**
       * Outset will move the entire element left to make it
       * stand out from the content.
       */outset:{type:Number,value:0},/**
       * Define the unit of measure for the outset variable
       * Examples: 'em', 'px', '%', 'vw'
       */outsetMeasurementType:{type:String,value:"em"}}}/**
   * Create global overrides for each property defined in a component
   *
   * Example: this will override the default value for bgColor for all
   *          lrndesign-sidenote elements on the page.
   *
   *  _.set(window, 'lrndesignSidenote.bgColor', 'blue');
   */constructor(){super();for(var prop in this.properties){let prefix=this.is;// convert prefix to camel case
prefix=prefix.replace("-"," ").replace(/(?:^\w|[A-Z]|\b\w)/g,function(letter,index){return 0==index?letter.toLowerCase():letter.toUpperCase()}).replace(/\s+/g,"");// find out if a property override is set on the window object
if("undefined"!==typeof window[prefix]){if("undefined"!==typeof window[prefix][prop]){this.properties[prop].value=window[prefix][prop]}}}}static get observers(){return["__updateStyles(bgColor, outset, outsetMeasurementType)"]}__updateStyles(bgColor,outset,outsetMeasurementType){const bgColorHex=this._colorTransformFromClass(bgColor)||bgColor;this.updateStyles({"--container-text-color":this.getTextContrastColor(bgColorHex),"--container-bg-color":bgColorHex,"--container-outset":`${+outset}${outsetMeasurementType}`})}}window.customElements.define(LrndesignSidenote.tag,LrndesignSidenote);export{LrndesignSidenote};