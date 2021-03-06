define(["exports","./node_modules/@polymer/polymer/polymer-element.js"],function(_exports,_polymerElement){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.BeakerBroker=void 0;function _templateObject_6ccac4d081c111e9b60e49f7be0672c9(){var data=babelHelpers.taggedTemplateLiteral(["\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"]);_templateObject_6ccac4d081c111e9b60e49f7be0672c9=function _templateObject_6ccac4d081c111e9b60e49f7be0672c9(){return data};return data}/**
 * `beaker-broker`
 * `An element to help check for and broker calls to read and write beaker browser dat sites.
 * This allows for data binding and figuring out if we're in an environment that we can even use this.`
 *
 * @microcopy - language worth noting:
 *  - beaker browser - a transformative, decentralized platform
 *  - dat - a communication protocol for serving sites up p2p
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */var BeakerBroker=/*#__PURE__*/function(_PolymerElement){babelHelpers.inherits(BeakerBroker,_PolymerElement);function BeakerBroker(){babelHelpers.classCallCheck(this,BeakerBroker);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(BeakerBroker).apply(this,arguments))}babelHelpers.createClass(BeakerBroker,[{key:"connectedCallback",/**
   * life cycle, element is afixed to the DOM
   */value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(BeakerBroker.prototype),"connectedCallback",this).call(this);if(("undefined"===typeof DatArchive?"undefined":babelHelpers.typeof(DatArchive))===("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){console.log("Beaker is not available from this site loading methodology")}}/**
   * notice dat address has changed, build the object for it
   */},{key:"_datUrlChanged",value:function(){var _datUrlChanged2=babelHelpers.asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(newValue,oldValue){return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(("undefined"===typeof DatArchive?"undefined":babelHelpers.typeof(DatArchive))!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))&&newValue){// load current site, set to archive
this.set("archive",new DatArchive(newValue))}case 1:case"end":return _context.stop();}}},_callee,this)}));function _datUrlChanged(_x,_x2){return _datUrlChanged2.apply(this,arguments)}return _datUrlChanged}()/**
   * Write to file
   * @usage - this.write('hello.txt', 'things and stuff');
   */},{key:"write",value:function(){var _write=babelHelpers.asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee2(path,data){return regeneratorRuntime.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return this.archive.writeFile(path,data);case 2:case"end":return _context2.stop();}}},_callee2,this)}));function write(_x3,_x4){return _write.apply(this,arguments)}return write}()/**
   * Read to file
   * @var path - location of file
   * @var type - utf8, base64, hex, binary or specialized ones jpeg / png
   * @return Promise() with reference to the data in the file if await / async is active
   * @usage - await this.read('index.html'); to get this file
   */},{key:"read",value:function(){var _read=babelHelpers.asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee3(path,type){var ftype,response,buf,blob,str;return regeneratorRuntime.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:ftype="utf8";_context3.t0=type;_context3.next="jpeg"===_context3.t0?4:"jpg"===_context3.t0?4:"png"===_context3.t0?11:"base64"===_context3.t0?18:23;break;case 4:ftype="binary";_context3.next=7;return this.archive.readFile(path,ftype);case 7:buf=_context3.sent;blob=new Blob([buf],{type:"image/jpeg"});response=URL.createObjectURL(blob);return _context3.abrupt("break",28);case 11:ftype="binary";_context3.next=14;return this.archive.readFile(path,ftype);case 14:buf=_context3.sent;blob=new Blob([buf],{type:"image/png"});response=URL.createObjectURL(blob);return _context3.abrupt("break",28);case 18:_context3.next=20;return this.archive.readFile(path,type);case 20:str=_context3.sent;response="data:image/png;base64,"+str;return _context3.abrupt("break",28);case 23:_context3.next=25;return this.archive.readFile(path,type);case 25:str=_context3.sent;response=str;return _context3.abrupt("break",28);case 28:_context3.next=30;return response;case 30:return _context3.abrupt("return",_context3.sent);case 31:case"end":return _context3.stop();}}},_callee3,this)}));function read(_x5,_x6){return _read.apply(this,arguments)}return read}()/**
   * life cycle, element is removed from the DOM
   */ //disconnectedCallback() {}
}],[{key:"template",// render function
get:function get(){return(0,_polymerElement.html)(_templateObject_6ccac4d081c111e9b60e49f7be0672c9())}// haxProperty definition
},{key:"haxProperties",get:function get(){return{}}// properties available to the custom element for data binding
},{key:"properties",get:function get(){return{/**
   * Archive
   */archive:{type:"Object",notify:!0},/**
   * datUrl
   */datUrl:{type:"String",value:window.location.host,observer:"_datUrlChanged",notify:!0}}}/**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */},{key:"tag",get:function get(){return"beaker-broker"}}]);return BeakerBroker}(_polymerElement.PolymerElement);_exports.BeakerBroker=BeakerBroker;window.customElements.define(BeakerBroker.tag,BeakerBroker)});