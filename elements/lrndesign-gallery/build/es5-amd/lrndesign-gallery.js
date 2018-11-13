define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@lrnwebcomponents/simple-colors/simple-colors.js",
  "./node_modules/@lrnwebcomponents/responsive-utility/responsive-utility.js",
  "./lib/lrndesign-gallery-carousel.js",
  "./lib/lrndesign-gallery-grid.js",
  "./lib/lrndesign-gallery-print.js"
], function(_polymerLegacy) {
  "use strict";
  function _templateObject_8aa9ab50e70811e899a08bc3de33740c() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n    <style is="custom-style">\n      :host {\n        display: block;\n      }\n      :host * {\n        --lrndesign-gallery-color: var(--simple-colors-foreground1);\n        --lrndesign-gallery-background-color: var(--simple-colors-background3);\n        --lrndesign-gallery-focus-color: var(--simple-colors-accent-foreground3);\n        --lrndesign-gallery-border-color: var(--simple-colors-background5);\n        --lrndesign-gallery-rgba-high: rgba(255,255,255,0.7);\n        --lrndesign-gallery-rgba-mid: rgba(255,255,255,0.5);\n        --lrndesign-gallery-rgba-low: rgba(255,255,255,0.3);\n        --lrndesign-gallery-rgba-none: rgba(255,255,255,0);\n        --lrndesign-gallery-thumbnail-size: 100px;\n        --lrndesign-gallery-thumbnail-size-sm: 150px;\n        --lrndesign-gallery-thumbnail-size-md: 200px;\n        --lrndesign-gallery-thumbnail-size-lg: 250px;\n        --lrndesign-gallery-thumbnail-size-xl: 300px;\n      } \n      :host([dark]) * {\n        --lrndesign-gallery-border-color: var(--simple-colors-background1);\n        --lrndesign-gallery-rgba-high: rgba(0,0,0,0.7);\n        --lrndesign-gallery-rgba-mid: rgba(0,0,0,0.5);\n        --lrndesign-gallery-rgba-low: rgba(0,0,0,0.3);\n        --lrndesign-gallery-rgba-none: rgba(0,0,0,0);\n      }\n    </style>\n    <article>\n      <template is="dom-if" if="[[_isAttrSet(title)]]">\n        <h1 id="gallery-title">[[title]]</h1>\n      </template>\n      <div id="gallery-description">\n        <slot name="description"></slot>\n      </div>\n      <template is="dom-if" if="[[grid]]">\n        <lrndesign-gallery-grid aspect$="[[aspect]]" dark$="[[dark]]" class="gallery-type" id="gallery-grid" items$="[[__items]]" modal-open$="[[__modalOpen]]" responsive-size$="[[responsiveSize]]" selected$="[[selected]]" sizing$="[[sizing]]" theme$="[[theme]]">\n        </lrndesign-gallery-grid>\n      </template>\n      <template is="dom-if" if="[[!grid]]">\n        <lrndesign-gallery-carousel aspect$="[[aspect]]" dark$="[[dark]]" class="gallery-type" hide-navigation$="[[__hideNav]]" id="gallery-carousel" items$="[[__items]]" modal-open$="[[__modalOpen]]" responsive-size$="[[responsiveSize]]" selected$="[[selected]]" sizing$="[[sizing]]" theme$="[[theme]]">\n        </lrndesign-gallery-carousel>\n      </template>\n      \n      <template id="printlist" is="dom-repeat" items="[[items]]" as="item">\n        <lrndesign-gallery-print alt$="[[item.alt]]" details$="[[item.details]]" heading$="[[item.heading]]" id="gallery-print" src$="[[item.src]]" title$="[[item.title]]">\n        </lrndesign-gallery-print>\n      </template>\n    </article>\n'
      ],
      [
        '\n    <style is="custom-style">\n      :host {\n        display: block;\n      }\n      :host * {\n        --lrndesign-gallery-color: var(--simple-colors-foreground1);\n        --lrndesign-gallery-background-color: var(--simple-colors-background3);\n        --lrndesign-gallery-focus-color: var(--simple-colors-accent-foreground3);\n        --lrndesign-gallery-border-color: var(--simple-colors-background5);\n        --lrndesign-gallery-rgba-high: rgba(255,255,255,0.7);\n        --lrndesign-gallery-rgba-mid: rgba(255,255,255,0.5);\n        --lrndesign-gallery-rgba-low: rgba(255,255,255,0.3);\n        --lrndesign-gallery-rgba-none: rgba(255,255,255,0);\n        --lrndesign-gallery-thumbnail-size: 100px;\n        --lrndesign-gallery-thumbnail-size-sm: 150px;\n        --lrndesign-gallery-thumbnail-size-md: 200px;\n        --lrndesign-gallery-thumbnail-size-lg: 250px;\n        --lrndesign-gallery-thumbnail-size-xl: 300px;\n      } \n      :host([dark]) * {\n        --lrndesign-gallery-border-color: var(--simple-colors-background1);\n        --lrndesign-gallery-rgba-high: rgba(0,0,0,0.7);\n        --lrndesign-gallery-rgba-mid: rgba(0,0,0,0.5);\n        --lrndesign-gallery-rgba-low: rgba(0,0,0,0.3);\n        --lrndesign-gallery-rgba-none: rgba(0,0,0,0);\n      }\n    </style>\n    <article>\n      <template is="dom-if" if="[[_isAttrSet(title)]]">\n        <h1 id="gallery-title">[[title]]</h1>\n      </template>\n      <div id="gallery-description">\n        <slot name="description"></slot>\n      </div>\n      <template is="dom-if" if="[[grid]]">\n        <lrndesign-gallery-grid aspect\\$="[[aspect]]" dark\\$="[[dark]]" class="gallery-type" id="gallery-grid" items\\$="[[__items]]" modal-open\\$="[[__modalOpen]]" responsive-size\\$="[[responsiveSize]]" selected\\$="[[selected]]" sizing\\$="[[sizing]]" theme\\$="[[theme]]">\n        </lrndesign-gallery-grid>\n      </template>\n      <template is="dom-if" if="[[!grid]]">\n        <lrndesign-gallery-carousel aspect\\$="[[aspect]]" dark\\$="[[dark]]" class="gallery-type" hide-navigation\\$="[[__hideNav]]" id="gallery-carousel" items\\$="[[__items]]" modal-open\\$="[[__modalOpen]]" responsive-size\\$="[[responsiveSize]]" selected\\$="[[selected]]" sizing\\$="[[sizing]]" theme\\$="[[theme]]">\n        </lrndesign-gallery-carousel>\n      </template>\n      \n      <template id="printlist" is="dom-repeat" items="[[items]]" as="item">\n        <lrndesign-gallery-print alt\\$="[[item.alt]]" details\\$="[[item.details]]" heading\\$="[[item.heading]]" id="gallery-print" src\\$="[[item.src]]" title\\$="[[item.title]]">\n        </lrndesign-gallery-print>\n      </template>\n    </article>\n'
      ]
    );
    _templateObject_8aa9ab50e70811e899a08bc3de33740c = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_8aa9ab50e70811e899a08bc3de33740c()
    ),
    is: "lrndesign-gallery",
    behaviors: [simpleColorsBehaviors],
    properties: {
      grid: { type: Boolean, value: !1 },
      sources: { type: Array, value: [] },
      items: { type: Array, computed: "_itemsLoaded(sources,sizing)" },
      responsiveSize: { type: String, value: "xs", reflectToAttribute: !0 },
      selected: { type: Object, value: {}, notify: !0, reflectToAttribute: !0 },
      sizing: { type: String, value: "cover" },
      title: { type: String, value: null },
      __modalOpen: { type: Boolean, value: !1 }
    },
    attached: function attached() {
      var root = this;
      window.ResponsiveUtility.requestAvailability();
      root.fire("responsive-element", {
        element: root,
        attribute: "responsive-size"
      });
    },
    _itemsLoaded: function _itemsLoaded(sources, sizing) {
      var temp = sources.slice(),
        anchor = window.location.hash,
        index = sources.findIndex(function(i) {
          return "#" + i.id === anchor.replace("-zoom", "");
        });
      if (sources !== void 0 && null !== this.items && 0 < sources.length) {
        for (var i in temp) {
          temp[i].index = parseInt(i);
          temp[i].large =
            temp[i].large !== void 0 ? temp[i].large : temp[i].src;
          temp[i].next =
            parseInt(i) + 1 < sources.length ? parseInt(i) + 1 : -1;
          temp[i].prev = -1 < parseInt(i) - 1 ? parseInt(i) - 1 : -1;
          temp[i].sizing = temp[i].sizing !== void 0 ? temp[i].sizing : sizing;
          temp[i].tooltip =
            temp[i].title !== void 0 ? "Zoom In" : temp[i].title + " Zoom";
          temp[i].thumbnail =
            temp[i].thumbnail !== void 0 ? temp[i].thumbnail : temp[i].src;
          temp[i].zoom = temp[i].zoom !== void 0 ? temp[i].zoom : !0;
          if (!temp[i].zoom) {
            temp[i].heading =
              temp[i].title === void 0 ? "Image Information" : temp[i].title;
            temp[i].tooltip =
              temp[i].title === void 0
                ? "View Image Information"
                : temp[i].title + " Information";
          } else {
            temp[i].heading =
              temp[i].title === void 0
                ? "Image Zoom"
                : temp[i].title + " (Image Zoom)";
            temp[i].tooltip =
              temp[i].title === void 0 ? "Zoom In" : temp[i].title + " Zoom";
          }
        }
        this.__items = temp;
        this.selected = -1 < index ? this.__items[index] : this.__items[0];
        return this.__items;
      }
    },
    _isAttrSet: function _isAttrSet(attr) {
      return null !== attr && attr !== void 0;
    }
  });
});
