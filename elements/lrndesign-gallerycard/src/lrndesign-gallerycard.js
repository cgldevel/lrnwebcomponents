import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { afterNextRender } from "@polymer/polymer/lib/utils/render-status.js";

/**
`lrndesign-gallerycard`
A LRN element for presenting a gallery of items as cards
that can pop up to display more info
* @demo demo/index.html
*/
class LrndesignGallerycard extends PolymerElement {
  constructor() {
    super();
    import("@lrnwebcomponents/lrndesign-avatar/lrndesign-avatar.js");
    import("@polymer/iron-image/iron-image.js");
    import("@polymer/paper-card/paper-card.js");
    import("@polymer/iron-icon/iron-icon.js");
  }
  static get template() {
    return html`
      <style>
        :host {
          display: inline-flex;
        }
        :host([size="micro"]) {
          transform: scale(0.5);
        }
        :host([size="small"]) {
          transform: scale(0.8);
        }

        paper-card {
          border-radius: 4px;
          margin: 0;
          width: 100%;
        }

        .card-actions {
          background-color: #f5f5f5;
          border-radius: 0 0 4px 4px;
          padding: 0 8px;
        }
        .card-actions .card-action-details {
          display: inline-block;
          vertical-align: middle;
          vertical-align: -webkit-baseline-middle;
          width: 80%;
        }
        #avatar {
          display: inline-block;
          vertical-align: text-top;
          transform: scale(0.8);
        }

        .card-control-height {
          height: 240px;
        }

        [elevation="0"] {
          border: solid 1px #eeeeee;
        }

        .text-right {
          text-align: right;
        }

        .text-left {
          text-align: left;
        }

        .title {
          color: #222;
          font-size: 12.8px;
          font-weight: 600;
          line-height: 20px;
          padding: 0 12px;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-top: 8px;
        }

        .comments {
          font-size: 12px;
          float: right;
        }

        .divider {
          height: 1px;
          width: 100%;
          background: #efefef;
        }

        .project-icon {
          --iron-icon-height: 100%;
          --iron-icon-width: 100%;
          overflow: hidden;
          color: grey;
        }
        .project-icon:hover,
        .project-icon:focus {
          color: black;
        }

        .center {
          margin: auto;
          width: 80%;
          padding: 16px;
        }

        .link {
          font-size: 16px;
          line-height: 16px;
        }

        .submission-info {
          width: 100%;
        }
        .submission-preview {
          height: 160px;
        }

        .card-content {
          padding: 0;
          margin: 0;
          overflow: hidden;
        }

        .inline {
          display: inline;
        }
      </style>
      <paper-card elevation="[[elevation]]">
        <div class="card-content card-control-height card-control-center">
          <div class="submission-preview">
            <iron-icon
              class="project-icon"
              icon="[[icon]]"
              hidden\$="[[!icon]]"
            ></iron-icon>
            <iron-image
              style="width:100%; height:100%; background-color: lightgray;"
              sizing="cover"
              preload=""
              fade=""
              src="[[image]]"
              hidden\$="[[!image]]"
            ></iron-image>
          </div>
          <div class="submission-info">
            <div class="divider"></div>
            <div class="title">[[title]]</div>
          </div>
        </div>
        <div class="card-actions">
          <lrndesign-avatar
            id="avatar"
            label="[[author.name]]"
            src="[[author.avatar]]"
          ></lrndesign-avatar>
          <div class="card-action-details">
            <span class="text-left author">[[author.display_name]]</span>
            <span class="comments text-right">Comments: [[comments]]</span>
          </div>
        </div>
      </paper-card>
    `;
  }

  static get tag() {
    return "lrndesign-gallerycard";
  }
  connectedCallback() {
    super.connectedCallback();
    afterNextRender(this, function() {
      this.addEventListener("mouseenter", this._mouseEnter.bind(this));
      this.addEventListener("mouseleave", this._mouseLeave.bind(this));
    });
  }
  disconnectedCallback() {
    this.removeEventListener("mouseenter", this._mouseEnter.bind(this));
    this.removeEventListener("mouseleave", this._mouseLeave.bind(this));
    super.disconnectedCallback();
  }
  static get properties() {
    return {
      size: {
        type: String,
        notify: true,
        reflectToAttribute: true
      },
      /**
       * Cover image src.
       */
      image: {
        type: String,
        notify: true,
        reflectToAttribute: true
      },
      /**
       * Icon to use if image isn't there.
       */
      icon: {
        type: String,
        notify: true,
        reflectToAttribute: true
      },
      /**
       * Title of the gallery item
       */
      title: {
        type: String,
        value: "Project",
        notify: true
      },
      /**
       * Gallery creator
       */
      author: {
        type: Object,
        value: { name: "author", display_name: "Author" },
        notify: true
      },
      /**
       * Visual elevation of the item off the UI via paper element height
       */
      elevation: {
        type: Number,
        value: 1,
        reflectToAttribute: true,
        notify: true
      },
      /**
       * Number of comments this has
       */
      comments: {
        type: Number,
        value: 0,
        reflectToAttribute: true,
        notify: true
      }
    };
  }

  _mouseEnter(e) {
    this.elevation += 2;
  }

  _mouseLeave(e) {
    this.elevation -= 2;
  }
}
window.customElements.define(LrndesignGallerycard.tag, LrndesignGallerycard);
export { LrndesignGallerycard };
