/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { html } from "@polymer/polymer/polymer-element.js";
import { afterNextRender } from "@polymer/polymer/lib/utils/render-status.js";
import { SimpleColors } from "@lrnwebcomponents/simple-colors/simple-colors.js";
import { HAXWiring } from "@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js";
/**
`lrndesign-panelcard`
A LRN element

* @demo demo/index.html
*/
class LrndesignPanelcard extends SimpleColors {
  constructor() {
    super();
    import("@polymer/paper-card/paper-card.js");
    afterNextRender(this, function() {
      this.HAXWiring = new HAXWiring();
      this.HAXWiring.setup(
        LrndesignPanelcard.haxProperties,
        LrndesignPanelcard.tag,
        this
      );
    });
  }
  static get template() {
    return html`
      <style>
        :host {
          display: inline-block;
          position: relative;
          box-sizing: border-box;
          --lrndesign-panelcard-text-color: var(
            --simple-colors-default-theme-grey-12
          );
          --lrndesign-panelcard-color: var(
            --simple-colors-default-theme-accent-1
          );
        }
        :host([dark]:not([accent-color="grey"])) {
          --lrndesign-panelcard-color: var(
            --simple-colors-default-theme-accent-3
          );
        }
        :host([colored-text]) {
          --lrndesign-panelcard-text-color: var(
            --simple-colors-default-theme-accent-9
          );
          --lrndesign-panelcard-color: var(
            --simple-colors-default-theme-grey-1
          );
        }
        .card-panel {
          transition: box-shadow 0.25s;
          padding: 24px;
          margin: 0;
          border-radius: 2px;
          color: var(--lrndesign-panelcard-text-color);
          background-color: var(--lrndesign-panelcard-color);
        }

        h3 {
          padding: 0;
          margin: 0 0 8px 0;
        }
      </style>
      <aside>
        <paper-card elevation="[[elevation]]">
          <div class="card-panel">
            <h3>[[title]]</h3>
            <span><slot></slot></span>
          </div>
        </paper-card>
      </aside>
    `;
  }

  static get tag() {
    return "lrndesign-panelcard";
  }
  static get properties() {
    let props = {
      /**
       * Title of the panel
       */
      title: {
        type: String,
        value: "Block heading",
        reflectToAttribute: true
      },
      /**
       * Height of the paper.
       */
      elevation: {
        type: Number,
        value: 2,
        reflectToAttribute: true
      },
      /**
       * Applies the color to the text instead of the background
       */
      coloredText: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      }
    };
    if (super.properties) {
      props = Object.assign(props, super.properties);
    }
    return props;
  }
  static get haxProperties() {
    return {
      canScale: true,
      canPosition: true,
      canEditSource: false,
      gizmo: {
        title: "Note card",
        description: "A small note to offset text used for asides.",
        icon: "icons:check-box-outline-blank",
        color: "grey",
        groups: ["Content", "Visual Treatment"],
        handles: [
          {
            type: "text",
            text: "title"
          }
        ],
        meta: {
          author: "LRNWebComponents"
        }
      },
      settings: {
        quick: [
          {
            property: "title",
            title: "Title",
            description: "The heading for this sticky note",
            inputMethod: "textfield",
            icon: "editor:title"
          },
          {
            property: "accentColor",
            title: "Accent color",
            description: "Select the accent color use",
            inputMethod: "colorpicker",
            icon: "editor:format-color-fill"
          },
          {
            property: "dark",
            title: "Dark",
            description: "Use dark theme",
            inputMethod: "boolean",
            icon: "invert-colors"
          },
          {
            property: "elevation",
            title: "Elevation",
            description: "Visually how high this is off the page",
            inputMethod: "textfield",
            icon: "icons:content-copy"
          }
        ],
        configure: [
          {
            property: "title",
            title: "Title",
            description: "The heading for this sticky note",
            inputMethod: "textfield",
            icon: "editor:title"
          },
          {
            slot: "",
            title: "Text",
            description: "The text for our sticky note",
            inputMethod: "textarea",
            icon: "editor:title",
            required: false,
            validationType: "text"
          },
          {
            property: "accentColor",
            title: "Accent color",
            description: "Select the accent color use",
            inputMethod: "colorpicker",
            icon: "editor:format-color-fill"
          },
          {
            property: "dark",
            title: "Dark",
            description: "Use dark theme",
            inputMethod: "boolean",
            icon: "invert-colors"
          },
          {
            property: "coloredText",
            title: "Colored Text",
            description: "Apply color to text instead of background.",
            inputMethod: "boolean",
            icon: "editor:format-color-text"
          },
          {
            property: "elevation",
            title: "Elevation",
            description: "Visually how high this is off the page",
            inputMethod: "select",
            options: {
              0: "0",
              1: "1",
              2: "2",
              3: "3",
              4: "4",
              5: "5"
            }
          }
        ],
        advanced: []
      }
    };
  }
}
window.customElements.define(LrndesignPanelcard.tag, LrndesignPanelcard);
export { LrndesignPanelcard };
