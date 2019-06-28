import { html, Polymer } from "@polymer/polymer/polymer-legacy.js";
import "@lrnwebcomponents/hax-body-behaviors/hax-body-behaviors.js";
import "@lrnwebcomponents/schema-behaviors/schema-behaviors.js";
import "@polymer/paper-button/paper-button.js";
import "@polymer/iron-icon/iron-icon.js";
import "@polymer/iron-icons/iron-icons.js";
/**
`promo-tile`
A LRN element

* @demo demo/index.html

@microcopy - the mental model for this element
 -
 -

*/
let PromoTile = Polymer({
  _template: html`
    <style>
      :host {
        display: block;
      }

      a {
        text-decoration: var(--promo-tile-a-text-decoration, none);
        @apply --promo-tile-a
      }

      #container {
        width: var(--promo-tile-container-width, 100%);
        height: var(--promo-tile-container-height, auto);
        @apply --promo-tile-container
      }

      .back_card {
        background-color: var(--promo-tile-back-card-background-color, #e2801e);
        height: var(--promo-tile-back-card-height, 460px);
        opacity: var(--promo-tile-back-card-opacity, 0);
        display: var(--promo-tile-back-card-display, flex);
        flex-direction: var(--promo-tile-back-card-flex-direction, column);
        @apply --promo-tile-back-card
      }

      :host([hover]) #container .back_card {
        opacity: var(--promo-tile-container-back-card-hover-opacity, 0.9);
        transition: var(--promo-tile-container-back-card-hover-transition, all 0.3s ease-in-out);
        @apply --promo-tile-container-back-card-hover
      }

      :host([hover]) #container .front_card .front_title {
        opacity: var(--promo-tile-container-front-card-front-title-hover-opacity, 0);
        transition: var(--promo-tile-container-front-card-front-title-hover-transition, all 0.3s ease-in-out);
        @apply --promo-tile-container-front-card-hover
      }

      .image {
        display: var(--promo-tile-image-display, flex);
        justify-content: var(--promo-tile-image-justify-content, center);
        background-position: var(--promo-tile-image-background-position, top center);
        background-repeat: var(--promo-tile-image-background-repeat, no-repeat);
        background-size: var(--promo-tile-image-background-size, cover);
        width: var(--promo-tile-image-width, 100%);
        height: var(--promo-tile-image-height, 100%);
        @apply --promo-tile-image
      }

      .front_title {
        opacity: var(--promo-tile-front-title-opacity, 1);
        position: var(--promo-tile-front-title-position, absolute);
        display: var(--promo-tile-front-title-display, flex);
        align-self: var(--promo-tile-front-title-align-self, flex-end);
        padding: var(--promo-tile-front-title-padding, 0 0 25px 0);
        @apply --promo-tile-front-title
      }

      .front_title h1 {
        color: var(--promo-tile-front-title-h1-color, #ffffff);
        font-size: var(--promo-tile-front-title-h1-font-size, 36px);
        font-weight: var(--promo-tile-front-title-h1-font-weight, 400);
        text-shadow: var(--promo-tile-front-title-h1-text-shadow, 1px 1px 3px var(--promo-tile-front-title-h1-text-shadow-color, #363533));
        @apply --promo-title-front-title-h1
      }

      .back_title {
        opacity: var(--promo-tile-back-title-opacity, 1);
        display: var(--promo-tile-back-title-display, flex);
        justify-content: var(--promo-tile-back-title-justify-content, center);
        padding: var(--promo-tile-back-title-padding, 20px 0 0 0);
        @apply --promo-tile-back-title
      }

      .back_title h1 {
        color: var(--promo-tile-back-title-h1-color, #ffffff);
        font-size: var(--promo-tile-back-title-h1-font-size, 36px);
        font-weight: var(--promo-tile-back-title-h1-font-weight, 400);
        @apply --promo-tile-back-title-h1
      }

      .back_content {
        color: var(--promo-tile-back-content-font-color, #ffffff);
        font-size: var(--promo-tile-back-content-font-size, 18px);
        font-weight: var(--promo-tile-back-content-font-weight, 300);
        line-height: var(--promo-tile-back-content-line-height, 1.4);
        padding: var(--promo-title-back-content-padding, 0 20px 0 20px);
        text-align: justify;
        @apply --promo-tile-back-content
      }

      paper-button#learn {
        display: var(--promo-tile-paper-button-learn-display, flex);
        margin: var(--promo-tile-paper-button-learn-margin, 140px auto 0 auto);
        font-size: var(--promo-tile-paper-button-learn-font-size, 18px);
        color: var(--promo-tile-paper-button-learn-font-color, #ffffff);
        border: var(--promo-tile-paper-button-learn-border, solid);
        border-width: var(--promo-tile-paper-button-learn-border-width, 1px);
        border-color: var(--promo-tile-paper-button-learn-border-color, #ffffff);
        border-radius: var(--promo-tile-paper-button-learn-border-radius, 0);
        width: var(--promo-tile-paper-button-learn-width, 50%);
        @apply --promo-tile-paper-button-learn
      }

      paper-button#learn:hover,
      paper-button#learn:focus {
        background-color: var(--promo-tile-paper-button-learn-background-color-active, #363533);
        @apply --promo-tile-paper-button-learn-active
      }
    </style>
    <div id="container">
      <div class="front_card">
        <div id="front_image" class="image" alt="[[alt]]" style$="background-image:url([[image]])">
          <div class="front_title">
            <h1>[[title]]</h1>
          </div>
          <div class="back_card" id="cardBack" on-click="activateBtn">
            <div class="back_title">
              <h1>[[title]]</h1>
            </div>
            <div class="back_content">
              <slot></slot>
            </div>
            <div class="learn_more">
              <a
                tabindex="-1"
                href="[[url]]"
                id="link"
                target$="[[_urlTarget(url)]]"
              >
                <paper-button id="learn" no-ink
                  >[[label]]
                  <iron-icon icon="chevron-right"></iron-icon>
                </paper-button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,

  is: "promo-tile",
  behaviors: [HAXBehaviors.PropertiesBehaviors, SchemaBehaviors.Schema],

  properties: {
    /**
     * Image source
     */
    image: {
      type: String,
      value: "",
      reflectToAttribute: true
    },
    /**
     * Alt text for image
     */
    alt: {
      type: String,
      value: "",
      reflectToAttribute: true
    },
    /**
     * Label for button
     */
    label: {
      type: String,
      value: "",
      reflectToAttribute: true
    },
    /**
     * Title of tile
     */
    title: {
      type: String,
      value: "",
      reflectToAttribute: true
    },
    /**
     * Url for tile
     */
    url: {
      type: String,
      value: "",
      reflectToAttribute: true
    },
    /**
     * Hover state
     */
    hover: {
      type: Boolean,
      value: false,
      reflectToAttribute: true
    }
  },

  listeners: {
    mouseover: "__hoverIn",
    mouseout: "__hoverOut",
    focusin: "__hoverIn",
    focusout: "__hoverOut"
  },

  /**
   * Attached to the DOM, now fire.
   */
  attached: function() {
    // Establish hax property binding
    let props = {
      canScale: true,
      canPosition: true,
      canEditSource: false,
      gizmo: {
        title: "Promo-Tile",
        description: "A tile element for promoting content.",
        icon: "icons:dashboard",
        color: "orange",
        groups: ["Content", "Media"],
        handles: [
          {
            type: "content",
            source: "image",
            title: "citation",
            url: "source"
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
            description: "The title of the tile",
            inputMethod: "textfield",
            icon: "editor:title"
          },
          {
            property: "image",
            title: "Image",
            description: "The image of the tile",
            inputMethod: "textfield",
            icon: "editor:insert-photo"
          },
          {
            property: "url",
            title: "Link",
            description: "The link of the tile",
            inputMethod: "textfield",
            icon: "editor:insert-link"
          }
        ],
        configure: [
          {
            property: "title",
            title: "Title",
            description: "The title of the tile",
            inputMethod: "textfield",
            icon: "editor:title"
          },
          {
            property: "image",
            title: "Image",
            description: "The image of the tile",
            inputMethod: "textfield",
            icon: "editor:insert-photo"
          },
          {
            property: "alt",
            title: "Alt",
            description: "The alt text for the image",
            inputMethod: "textfield",
            icon: "editor:mode-edit"
          },
          {
            property: "url",
            title: "Link",
            description: "The link of the tile",
            inputMethod: "textfield",
            icon: "editor:insert-link"
          },
          {
            property: "label",
            title: "Label",
            description: "The label for the button",
            inputMethod: "textfield",
            icon: "editor:title"
          }
        ],
        advanced: []
      }
    };
    this.setHaxProperties(props);
  },

  /**
   * Internal function to check if a url is external
   */
  _outsideLink: function(url) {
    if (url.indexOf("http") != 0) return false;
    var loc = location.href,
      path = location.pathname,
      root = loc.substring(0, loc.indexOf(path));
    return url.indexOf(root) != 0;
  },

  /**
   * If url is external, open link in new window, otherwise open link in same window.
   */
  _urlTarget: function(url) {
    if (url) {
      const external = this._outsideLink(url);
      if (external) {
        return "_blank";
      }
    }
    return false;
  },

  activateBtn: function() {
    if (this.hover) {
      const link = this.$.link;
      if (window.innerWidth > 700) {
        link.click();
      }
    }
  },

  __hoverIn: function() {
    this.hover = true;
  },
  __hoverOut: function() {
    this.hover = false;
  }
});
export { PromoTile };
