import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { afterNextRender } from "@polymer/polymer/lib/utils/render-status.js";
import { HAXWiring } from "@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js";
import { SchemaBehaviors } from "@lrnwebcomponents/schema-behaviors/schema-behaviors.js";
/**
 * `image-compare-slider`
 * Layers images over each other with a slider interface to compare them
 * @microcopy - the mental model for this element
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class ImageCompareSlider extends SchemaBehaviors(PolymerElement) {
  constructor() {
    super();
    import("@lrnwebcomponents/user-action/user-action.js");
    import("@polymer/iron-image/iron-image.js");
    import("@polymer/paper-slider/paper-slider.js");
    afterNextRender(this, function() {
      this.HAXWiring = new HAXWiring();
      this.HAXWiring.setup(
        ImageCompareSlider.haxProperties,
        ImageCompareSlider.tag,
        this
      );
    });
  }
  static get template() {
    return html`
      <style>
        :host {
          display: inline-flex;
          width: 100%;
          @apply --image-compare-slider;
        }
        :host > div,
        :host #container,
        :host #top {
          width: 100%;
        }
        :host #container {
          background-size: cover;
          overflow: visible;
          @apply --image-compare-slider-container;
        }
        :host #top {
          background-size: auto 100%;
          overflow: hidden;
        }
        :host #slider {
          width: calc(100% + 30px);
          margin-left: -15px;
          @apply --image-compare-slider-control;
        }
      </style>
      <div>
        <h2>[[title]]</h2>
        <div id="container" style$="background-image: url([[bottomSrc]]);">
          <div id="top" style$="background-image: url([[topSrc]]);"></div>
        </div>
        <user-action track="click">
          <paper-slider id="slider" value="50"></paper-slider>
        </user-action>
        <div></div>
      </div>
    `;
  }

  static get tag() {
    return "image-compare-slider";
  }
  static get observers() {
    return ["_setStyles(width,height,sliderPercent)"];
  }

  static get properties() {
    let props = {
      /**
       * Title
       */
      title: {
        type: String
      },
      /**
       * src for top image
       */
      topSrc: {
        type: String,
        observer: "_updateAspect"
      },
      /**
       * mode for the slider: wipe
       */
      opacity: {
        type: Boolean,
        value: false
      },
      /**
       * src for top image
       */
      bottomSrc: {
        type: String
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
        title: "Image comparison",
        description:
          "Simple element to allow one image to swipe over top of the other.",
        icon: "image:compare",
        color: "orange",
        groups: ["Image", "Media"],
        handles: [
          {
            type: "image",
            source: "bottomSrc",
            source2: "topSrc",
            title: "title"
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
            description: "The title of the element",
            inputMethod: "textfield",
            icon: "editor:title"
          },
          {
            property: "opacity",
            title: "Slider Behavior",
            description:
              "Do you want the slider to wipe the top image across the bottom one (default), or to adjust the opacity of the top image?",
            inputMethod: "select",
            options: {
              false: "wipe across",
              true: "adjust opacity"
            },
            icon: "image:compare"
          }
        ],
        configure: [
          {
            property: "title",
            title: "Title",
            description: "The title of the element",
            inputMethod: "textfield"
          },
          {
            property: "bottomSrc",
            title: "Bottom image",
            description: "The base image to swipe over",
            inputMethod: "haxupload",
            validationType: "url"
          },
          {
            property: "topSrc",
            title: "Top image",
            description: "The top image that swipes over",
            inputMethod: "haxupload",
            validationType: "url"
          }
        ],
        advanced: []
      }
    };
  }
  ready() {
    super.ready();
    this._updateAspect();
    this._slide();
    this.shadowRoot
      .querySelector("#slider")
      .addEventListener("immediate-value-changed", e => {
        this._slide();
      });
  }
  /**
   * updates the slider
   */
  _slide() {
    if (this.opacity === false) {
      this.shadowRoot.querySelector("#top").style.width =
        this.shadowRoot.querySelector("#slider").immediateValue + "%";
    } else {
      this.shadowRoot.querySelector("#top").style.opacity =
        this.shadowRoot.querySelector("#slider").immediateValue / 100;
    }
  }
  /**
   * updates the aspect ratio
   */
  _updateAspect() {
    let img = document.createElement("img"),
      el = this.shadowRoot.querySelector("#top"),
      getAspect = img => {
        el.style.paddingTop = (img.height * 100) / img.width + "%";
      };
    this.__aspect = "75";
    img.setAttribute("src", this.topSrc);
    if (img.height !== undefined && img.height > 0) {
      getAspect(img);
    } else {
      img.addEventListener("load", function() {
        getAspect(img);
      });
    }
  }
}
window.customElements.define(ImageCompareSlider.tag, ImageCompareSlider);
export { ImageCompareSlider };
