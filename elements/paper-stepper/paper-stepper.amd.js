define(["exports","./node_modules/@polymer/polymer/polymer-element.js"],function(_exports,_polymerElement){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.PaperStepper=void 0;/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */ /**
 * `paper-stepper`
 * `steps to completion in a vertical display`
 * @demo demo/index.html
 */var PaperStepper=/*#__PURE__*/function(_PolymerElement){babelHelpers.inherits(PaperStepper,_PolymerElement);function PaperStepper(){babelHelpers.classCallCheck(this,PaperStepper);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(PaperStepper).apply(this,arguments))}babelHelpers.createClass(PaperStepper,[{key:"_tapPrevious",// Private methods
value:function _tapPrevious(){this.$.selector.selectPrevious()}},{key:"_tapNext",value:function _tapNext(){this.$.selector.selectNext()}/**
   * Returns true if there is a step before the current and if
   * _getDisablePrevious is set to false
   */},{key:"_getDisablePrevious",value:function _getDisablePrevious(selected,disablePrevious){return 0<selected&&!disablePrevious}/**
   * Returns true if there is a step after the current and if
   * _getDisableNext is set to false
   */},{key:"_getDisableNext",value:function _getDisableNext(selected,nrItems,disableNext){return selected<nrItems-1&&!disableNext}/**
   * Returns the current progress value
   *
   * Depends on items to ensure that `max` is already set. Otherwise
   * `paper-progress` doesn't show the bar on startup.
   * TODO: Remove parameter `items` once paper-progress can handle
   * setting the property `value` before property `max`.
   */},{key:"_computeProgressValue",value:function _computeProgressValue(selected,items){return selected+1}},{key:"_onItemsChanged",value:function _onItemsChanged(e){this._items=this.$.selector.items}}],[{key:"tag",get:function get(){return"paper-stepper"}},{key:"properties",get:function get(){return{selected:{type:Number,notify:!0,value:0},/**
       * True if a progress bar is shown instead of dots.
       *
       * Use a progress bar when there are many steps, or if there are
       * steps that need to be inserted during the process (based o
       * responses to earlier steps).
       */progressBar:{type:Boolean,value:!1},/**
       * Text for the back button. Use this property to localize the element.
       */backLabel:{type:String,value:"Back"},/**
       * Text for the back button. Use this property to localize the element.
       */nextLabel:{type:String,value:"Next"},/**
       * Boolean for disabling the previous button.
       */disablePrevious:{type:Boolean,value:!1},/**
       * Boolean for disabling the next button.
       */disableNext:{type:Boolean,value:!1},/**
       * Hide back/next buttons
       */noButtons:{type:Boolean,value:!1}}}}]);return PaperStepper}(_polymerElement.PolymerElement);_exports.PaperStepper=PaperStepper;window.customElements.define(PaperStepper.tag,PaperStepper)});