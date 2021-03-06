/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */
import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { RichTextEditorButton } from "./rich-text-editor-button.js";
import "@polymer/paper-tooltip/paper-tooltip.js";
import "@polymer/iron-icons/iron-icons.js";
import "../singletons/rich-text-editor-selection.js";
import "../singletons/rich-text-editor-prompt.js";
import "./rich-text-editor-button-styles.js";
/**
 * `rich-text-editor-prompt-button`
 * `a button that prompts for more information for rich text editor (custom buttons can extend this)`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @polymer
 */
class RichTextEditorPromptButton extends RichTextEditorButton {
  constructor() {
    super();
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {
      /**
       * fields for the prompt popover.
       */
      fields: {
        type: Array,
        value: [
          {
            property: "text",
            title: "Text",
            description: "The link text",
            inputMethod: "textfield"
          }
        ]
      },
      /**
       * the tag that will wrap the selection
       */
      tag: {
        name: "tag",
        type: String,
        value: "span"
      },
      /**
       * The prefilled value of the prompt
       */
      value: {
        type: Object,
        value: {
          link: null
        }
      },
      /**
       * the prompt that pops up when button is pressed
       */
      __prompt: {
        name: "__prompt",
        type: Object,
        value: null
      },
      /**
       * the highlight surrounding the selected range
       */
      __selection: {
        name: "__selection",
        type: Object,
        value: null
      },
      /**
       * the contents node inside the selected range
       */
      __selectionContents: {
        name: "__selectionContents",
        type: Object,
        value: null
      },
      /**
       * the contents node inside the selected range
       */
      __revertContents: {
        name: "__revertContents",
        type: Object,
        value: null
      }
    };
  }

  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  static get tag() {
    return "rich-text-editor-prompt-button";
  }

  /**
   * life cycle, element is ready
   */
  ready() {
    super.ready();
    let root = this;
    this.__prompt = window.RichTextEditorPrompt.requestAvailability();
    this.__selection = window.RichTextEditorSelection.requestAvailability();
  }
  /**
   * Handles button tap;
   */
  _buttonTap(e) {
    e.preventDefault();
    this.open();
  }
  /**
   * updates prompt fields with selection data
   */
  updatePrompt() {
    this.fields.forEach(field => {
      if (field.property && field.property !== "") {
        this.value[field.property] = this.__selectionContents.getAttribute(
          field.property
        );
      } else if (field.property && field.property !== "") {
        this.value[field.slot] = this.__selectionContents.querySelector(
          field.slot
        );
      } else {
        this.value[""] = this.__selectionContents.innerHTML;
      }
    });
  }
  /**
   * updates the insertion based on fields
   */
  updateSelection() {
    /**
     * this.__selectionContents.setAttribute("href", this.value.link.trim());
     * this.__selectionContents.innerHTML = this.value.text;
     */
    let hasTag = false;
    this.__selectionContents.innerHTML = ``;
    this.fields.forEach(field => {
      if (field.property && field.property !== "") {
        if (
          this.value[field.property] !== null &&
          this.value[field.property].trim() !== ""
        )
          hasTag = true;
        this.__selectionContents.setAttribute(
          field.property,
          this.value[field.property].trim()
        );
      } else if (
        field.slot &&
        field.slot !== "" &&
        this.value[field.slot] !== null &&
        this.value[field.slot].trim() !== ""
      ) {
        hasTag = true;
        this.__selectionContents.innerHTML += `${field.slot}${this.value[
          field.slot
        ].trim()}${field.slot}`;
      } else {
        this.__selectionContents.innerHTML += `${this.value[field.property]}`;
      }
    });
    if (!hasTag) this.__selection.unwrap();
  }
  /**
   * updates the insertion based on fields
   */
  confirm() {
    this.updateSelection();
    this.__selection.removeHighlight();
  }
  /**
   * updates the insertion based on fields
   */
  cancel() {
    this.__selection.innerHTML = "";
    while (this.__revertContents.firstChild)
      this.__selection.appendChild(this.__revertContents.firstChild);
    this.__selection.normalize();
    this.__revertContents.remove();
    this.__selection.removeHighlight();
  }
  /**
   * Handles selecting text and opening prompt
   */
  open() {
    this.__revertContents = document.createElement("div");
    this.__revertContents.appendChild(this.__selection.getRangeContents());
    this.__selectionContents = this.__selection.wrapOrGetTag(this.tag);
    this.__selection.addHighlight();
    this.updatePrompt();
    //make sure there is a unique id so that the prompt popover appears near the selection
    if (!this.__selectionContents.getAttribute("id"))
      this.__selectionContents.setAttribute("id", "prompt" + Date.now());
    this.__prompt.setTarget(this);
    this.dispatchEvent(new CustomEvent("select", { detail: this }));
  }
}
window.customElements.define(
  RichTextEditorPromptButton.tag,
  RichTextEditorPromptButton
);
export { RichTextEditorPromptButton };
