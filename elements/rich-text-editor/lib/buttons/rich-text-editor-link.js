/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */
import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import "@polymer/paper-tooltip/paper-tooltip.js";
import "@polymer/iron-icons/iron-icons.js";
import "./rich-text-editor-button-styles.js";
import { RichTextEditorPromptButton } from "./rich-text-editor-prompt-button.js";
import "../singletons/rich-text-editor-prompt.js";
/**
 * `rich-text-editor-link`
 * `a button for rich text editor (custom buttons can extend this)`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @polymer
 */
class RichTextEditorLink extends RichTextEditorPromptButton {
  constructor() {
    super();
    this.fields = [
      {
        property: "",
        title: "Text",
        description: "The link text",
        inputMethod: "textfield"
      },
      {
        property: "href",
        title: "Link",
        description: "The link URL",
        inputMethod: "textfield"
      }
    ];
    this.tag = "a";
    this.value = {
      link: null
    };
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {};
  }

  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  static get tag() {
    return "rich-text-editor-link";
  }
}
window.customElements.define(RichTextEditorLink.tag, RichTextEditorLink);
export { RichTextEditorLink };
