define(["exports","./node_modules/@polymer/polymer/polymer-element.js"],function(_exports,_polymerElement){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.SimpleSchemaForm=void 0;function _templateObject_b12a0120557711e987efa51f14bd19df(){var data=babelHelpers.taggedTemplateLiteral(["\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"]);_templateObject_b12a0120557711e987efa51f14bd19df=function _templateObject_b12a0120557711e987efa51f14bd19df(){return data};return data}var SimpleSchemaForm=function(_PolymerElement){babelHelpers.inherits(SimpleSchemaForm,_PolymerElement);function SimpleSchemaForm(){babelHelpers.classCallCheck(this,SimpleSchemaForm);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(SimpleSchemaForm).apply(this,arguments))}babelHelpers.createClass(SimpleSchemaForm,[{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(SimpleSchemaForm.prototype),"connectedCallback",this).call(this)}}],[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_b12a0120557711e987efa51f14bd19df())}},{key:"properties",get:function get(){return{}}},{key:"tag",get:function get(){return"simple-schema-form"}}]);return SimpleSchemaForm}(_polymerElement.PolymerElement);_exports.SimpleSchemaForm=SimpleSchemaForm;window.customElements.define(SimpleSchemaForm.tag,SimpleSchemaForm)});