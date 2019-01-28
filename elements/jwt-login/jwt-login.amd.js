define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@polymer/iron-ajax/iron-ajax.js"],function(_exports,_polymerLegacy,_ironAjax){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.JwtLogin=void 0;function _templateObject_3f1c65a022c811e9979ef550167483a9(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        visibility: hidden;\n      }\n    </style>\n    <iron-ajax\n      id=\"loginrequest\"\n      method=\"GET\"\n      url=\"[[url]]\"\n      handle-as=\"json\"\n      on-response=\"loginResponse\"\n    >\n    </iron-ajax>\n  "]);_templateObject_3f1c65a022c811e9979ef550167483a9=function _templateObject_3f1c65a022c811e9979ef550167483a9(){return data};return data}var JwtLogin=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_3f1c65a022c811e9979ef550167483a9()),is:"jwt-login",properties:{url:{type:String},key:{type:String,value:"jwt"},jwt:{type:String,notify:!0}},ready:function ready(){this.jwt=localStorage.getItem(this.key);this.fire("jwt-token",this.jwt)},toggleLogin:function toggleLogin(){if(null==this.jwt){this.$.loginrequest.generateRequest()}else{localStorage.removeItem(this.key);this.jwt=null;this.fire("jwt-logged-in",!1)}},loginResponse:function loginResponse(e){this.jwt=e.detail.response;if(null==this.jwt||""==this.jwt){this.fire("jwt-logged-in",!1)}else{localStorage.setItem(this.key,this.jwt);this.fire("jwt-token",this.jwt);this.fire("jwt-logged-in",!0)}}});_exports.JwtLogin=JwtLogin});