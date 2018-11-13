define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js",
  "./node_modules/@polymer/paper-tabs/paper-tabs.js",
  "./node_modules/@polymer/paper-tabs/paper-tab.js"
], function(_polymerLegacy) {
  "use strict";
  function _templateObject_97921240e70711e8b81c117cfb61bc23() {
    var data = babelHelpers.taggedTemplateLiteral([
      '\n    <style>\n      :host {\n        display: block;\n        margin: 0 auto;\n        list-style: none;\n        display: flex;\n        padding: 16px;\n        border-bottom: 1px solid black;\n      }\n      paper-tab a {\n        text-decoration: none;\n      }\n      paper-button {\n        text-transform: unset;\n      }\n    </style>\n    <paper-tabs>\n      <template is="dom-repeat" items="[[tabs]]" as="tab">\n        <paper-tab><a target="_blank" href="[[tab.link]]" tabindex="-1"><paper-button raised>[[tab.label]]</paper-button></a></paper-tab>\n      </template>\n    </paper-tabs>\n'
    ]);
    _templateObject_97921240e70711e8b81c117cfb61bc23 = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_97921240e70711e8b81c117cfb61bc23()
    ),
    is: "tab-list",
    behaviors: [HAXBehaviors.PropertiesBehaviors],
    observers: ["_valueChanged(tabs.*)"],
    properties: { tabs: { type: Array, value: [] } },
    _valueChanged: function _valueChanged(e) {
      for (var i in e.base) {
        for (var j in e.base[i]) {
          this.notifyPath("tabs." + i + "." + j);
        }
      }
    },
    attached: function attached() {
      this.setHaxProperties({
        canScale: !1,
        canPosition: !1,
        canEditSource: !1,
        gizmo: {
          title: "Tabs",
          description: "A list of links as tabs.",
          icon: "icons:tab",
          color: "grey",
          groups: ["Presentation", "Links"],
          handles: [],
          meta: { author: "LRNWebComponents" }
        },
        settings: {
          quick: [],
          configure: [
            {
              property: "tabs",
              title: "Tabs",
              description: "Listing of tabs",
              inputMethod: "array",
              properties: [
                {
                  property: "link",
                  title: "Link",
                  description: "link to go to",
                  inputMethod: "textfield",
                  required: !0
                },
                {
                  property: "label",
                  title: "Label",
                  description: "text to place on the tab",
                  inputMethod: "textfield",
                  required: !0
                }
              ]
            }
          ],
          advanced: []
        }
      });
    }
  });
});
