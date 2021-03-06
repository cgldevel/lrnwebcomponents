/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */
import { RichTextEditorPicker } from "./rich-text-editor-picker.js";
import { pathFromUrl } from "@polymer/polymer/lib/utils/resolve-url.js";
import "@lrnwebcomponents/es-global-bridge/es-global-bridge.js";
/**
 * `rich-text-editor-symbol-picker`
 * `a symbol picker for the rich-text-editor`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @polymer
 */
class RichTextEditorSymbolPicker extends RichTextEditorPicker {
  constructor() {
    super();
    this.icon = "editor:functions";
    this.label = "Insert symbol";
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {
      /**
       * An optional JSON file with default options.
       */
      optionsSrc: {
        name: "optionsSrc",
        type: String,
        value: "data/symbols.js"
      },

      /**
       * Symbol types to include
       */
      symbolTypes: {
        name: "symbolTypes",
        type: Array,
        value: ["symbols", "math", "characters", "greek", "misc"]
      },

      /**
       * Renders html as title. (Good for titles with HTML in them.)
       */
      titleAsHtml: {
        name: "titleAsHtml",
        type: Boolean,
        value: true,
        readOnly: true
      }
    };
  }
  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   *
   */
  static get tag() {
    return "rich-text-editor-symbol-picker";
  }
  /**
   * life cycle, element is afixed to the DOM
   */
  connectedCallback() {
    super.connectedCallback();
    const basePath = pathFromUrl(decodeURIComponent(import.meta.url));
    const src = this.optionsSrc;
    const location = `${basePath}${src}`;
    window.addEventListener(
      "es-bridge-symbols-loaded",
      this._setOptions.bind(this)
    );
    window.ESGlobalBridge.requestAvailability();
    window.ESGlobalBridge.instance.load("symbols", location);
  }
  disconnectedCallback() {
    window.removeEventListener(
      "es-bridge-symbols-loaded",
      this._setOptions.bind(this)
    );
    super.disconnectedCallback();
  }

  /**
   * Handles default options loaded from an external js file
   */
  _setOptions() {
    let optData = [];
    this.symbolTypes.forEach(function(type) {
      optData = optData.concat(symbols[type]);
    });
    this.set(
      "options",
      this._getPickerOptions(optData, this.allowNull, this.icon)
    );
  }

  /**
   * Converts option data to picker option data;
   * can be overridden in extended elements
   *
   * @param {object} data about the option
   * @returns {object} picker dato for the option
   */
  _getOptionData(option) {
    return {
      value: option,
      alt: option,
      icon: null,
      style: null
    };
  }
}
window.customElements.define(
  RichTextEditorSymbolPicker.tag,
  RichTextEditorSymbolPicker
);
export { RichTextEditorSymbolPicker };
