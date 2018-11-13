define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js",
  "./node_modules/@polymer/paper-item/paper-item.js",
  "./node_modules/@polymer/paper-listbox/paper-listbox.js"
], function(_polymerLegacy) {
  "use strict";
  function _templateObject_d4b4edc0e70511e8b674f583431006eb() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n    <style>\n      :host {\n        display: block;\n      }\n      paper-listbox ::slotted(paper-item) {\n        display: block;\n        width: 100%;\n        min-height: 32px;\n        vertical-align: text-top;\n        line-height: 32px;\n        @apply --dropdown-select-items;\n      }\n      paper-listbox paper-listbox {\n        @apply --dropdown-listbox;\n      }\n    </style>\n    <paper-dropdown-menu id="menu" allow-outside-scroll$="[[allowOutsideScroll]]" always-float-label$="[[alwaysFloatLabel]]" dynamic-align$="[[dynamicAlign]]" error-message$="[[errorMessage]]" horizontal-align$="[[horizontalAlign]]" label$="[[label]]" no-animations$="[[noAnimations]]" no-label-float$="[[noLabelFloat]]" on-selected-item-changed="_getSelectedValue" placeholder$="[[placeholder]]" restore-focus-on-close$="[[restoreFocusOnClose]]" vertical-align$="[[verticalAlign]]" vertical-offset$="[[verticalOffset]]">\n      <paper-listbox id="listbox" slot="dropdown-content" class="dropdown-content">\n        <slot id="content"></slot>\n      </paper-listbox>\n    </paper-dropdown-menu>\n'
      ],
      [
        '\n    <style>\n      :host {\n        display: block;\n      }\n      paper-listbox ::slotted(paper-item) {\n        display: block;\n        width: 100%;\n        min-height: 32px;\n        vertical-align: text-top;\n        line-height: 32px;\n        @apply --dropdown-select-items;\n      }\n      paper-listbox paper-listbox {\n        @apply --dropdown-listbox;\n      }\n    </style>\n    <paper-dropdown-menu id="menu" allow-outside-scroll\\$="[[allowOutsideScroll]]" always-float-label\\$="[[alwaysFloatLabel]]" dynamic-align\\$="[[dynamicAlign]]" error-message\\$="[[errorMessage]]" horizontal-align\\$="[[horizontalAlign]]" label\\$="[[label]]" no-animations\\$="[[noAnimations]]" no-label-float\\$="[[noLabelFloat]]" on-selected-item-changed="_getSelectedValue" placeholder\\$="[[placeholder]]" restore-focus-on-close\\$="[[restoreFocusOnClose]]" vertical-align\\$="[[verticalAlign]]" vertical-offset\\$="[[verticalOffset]]">\n      <paper-listbox id="listbox" slot="dropdown-content" class="dropdown-content">\n        <slot id="content"></slot>\n      </paper-listbox>\n    </paper-dropdown-menu>\n'
      ]
    );
    _templateObject_d4b4edc0e70511e8b674f583431006eb = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_d4b4edc0e70511e8b674f583431006eb()
    ),
    is: "dropdown-select",
    listeners: {
      "paper-dropdown-open": "_onOpen",
      "paper-dropdown-close": "_onClose"
    },
    properties: {
      allowOutsideScroll: { type: Boolean, value: !1 },
      alwaysFloatLabel: { type: Boolean, value: !1 },
      dynamicAlign: { type: Boolean },
      errorMessage: { type: String },
      horizontalAlign: { type: String, value: "right" },
      label: { type: String, value: "Select an option." },
      noAnimations: { type: Boolean, value: !1 },
      noLabelFloat: { type: Boolean, value: !1 },
      opened: { type: Boolean, value: !1 },
      placeholder: { type: String },
      restoreFocusOnClose: { type: Boolean, value: !0 },
      selectedItem: { type: Object },
      selectedItemIndex: { type: Number, value: null },
      selectedItemLabel: { type: String, value: null },
      value: { type: String, value: null },
      verticalAlign: { type: String, value: "top" },
      verticalOffset: { type: Number }
    },
    _getSelectedValue: function _getSelectedValue(e) {
      if (null !== e.detail.value) {
        this.value = e.detail.value.getAttribute("value");
        this._setSelectedValues();
        this.fire("change", { value: this.value });
        this.fire("dropdown-select-changed", this);
      }
    },
    _onOpen: function _onOpen() {
      this.opened = !0;
    },
    _onClose: function _onClose() {
      this.opened = !1;
    },
    _setSelectedValues: function _setSelectedValues() {
      this.selectedItem = this.$.menu.selectedItem;
      this.selectedItemLabel = this.$.menu.selectedItemLabel;
      this.selectedItemIndex = this.$.listbox.selected;
    },
    attached: function attached() {
      var children = this.$.listbox.querySelectorAll("paper-item");
      if (children !== void 0 && null !== children) {
        for (var i = 0; i < children.length; i++) {
          if (this.value === children[i].getAttribute("value")) {
            this.$.listbox.selected = i;
            this._setSelectedValues();
          }
        }
      }
    }
  });
});
