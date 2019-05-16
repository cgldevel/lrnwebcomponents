/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import "./rich-text-editor-breadcrumb.js";
import "./rich-text-editor-styles.js";
import "./rich-text-editor-button-styles.js";

/**
 * `rich-text-editor-breadcrumbs`
 * `A utility that manages the state of multiple rich-text-prompts on one page.`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @polymer
 */
class richTextEditorBreadcrumbs extends PolymerElement {
  /* REQUIRED FOR TOOLING DO NOT TOUCH */ // render function
  static get template() {
    return html`
      <style include="rich-text-editor-styles"></style>
      <style include="rich-text-editor-button-styles">
        :host {
          display: block;
          background-color: var(--rich-text-editor-bg);
          color: var(--rich-text-editor-button-color);
          border: var(--rich-text-editor-border);
          padding: 3px 10px;

          --rich-text-editor-breadcrumb: {
            font-family: monospace;
            display: inline-block;
            text-align: center;
            min-width: 30px;
            line-height: 30px;
            margin: 0;
            padding: 2px 5px;
          }
        }
        :host .selectednode {
        }
        :host .selectednode {
          background-color: var(--rich-text-editor-bg);
          @apply --rich-text-editor-breadcrumb;
        }
      </style>
      Expand selection:
      <template is="dom-repeat" items="[[ancestorNodes]]" as="crumb">
        <rich-text-editor-breadcrumb
          controls$="[[controls]]"
          tag$="[[crumb.tag]]"
          target="[[crumb.target]]"
        >
        </rich-text-editor-breadcrumb>
      </template>
    `;
  }

  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  static get tag() {
    return "rich-text-editor-breadcrumbs";
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {
      /**
       * The active rict-text-edito.
       */
      controls: {
        type: String,
        value: null
      },
      /**
       * The selected text.
       */
      selection: {
        type: Object,
        value: null
      },
      /**
       * fields for the prompt popover.
       */
      ancestorNodes: {
        type: Array,
        computed: "_getAncestorNodes(selection,controls)"
      }
    };
  }

  /**
   * life cycle, element is afixed to the DOM
   * Makes sure there is a utility ready and listening for elements.
   */
  connectedCallback() {
    super.connectedCallback();
  }
  /**
   * updates the breadcrumbs
   * @param {object} the selected range
   */
  _getAncestorNodes(selection, controls) {
    let nodes = [],
      node = "",
      ancestor = false,
      parent = false;
    if (selection) ancestor = selection.commonAncestorContainer;
    if (ancestor) parent = ancestor;
    this.hidden = !ancestor;
    while (parent && parent.nodeName !== "RICH-TEXT-EDITOR") {
      nodes.unshift({
        tag: parent.nodeName.toLowerCase(),
        target: parent
      });
      parent = parent.parentNode;
    }
    return nodes;
  }
}
window.customElements.define(
  richTextEditorBreadcrumbs.tag,
  richTextEditorBreadcrumbs
);
export { richTextEditorBreadcrumbs };