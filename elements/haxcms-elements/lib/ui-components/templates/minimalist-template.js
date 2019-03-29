/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { html } from "@polymer/polymer/polymer-element.js";
import "@lrnwebcomponents/scroll-button/scroll-button.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/active-item/site-active-title.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/blocks/site-children-block.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/layout/site-footer.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/layout/site-modal.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-breadcrumb.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-top-menu.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-menu-button.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-menu.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-rss-button.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-print-button.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-title.js";

/**
 * `An incredibly minimalist template.
 * @HTMLElement
 */
let MinimalistTemplate = superclass =>
  class extends superclass {
    // render function
    static get template() {
      return html`
        <site-top-menu
          noink
          notitle
          showindex
          sticky
          conditions='{"parent": "$firstId"}'
        >
          <div slot="prefix" class="spacing">
            <site-title icon="home" notitle></site-title>
          </div>
          <div slot="prefix" class="spacing">
            <site-print-button></site-print-button>
          </div>
        </site-top-menu>
        <header
          class="masthead"
          style$="background-image: url('[[activeItemFields.images.0.src]]');"
          alt$="[[activeItemFields.images.0.alt]]"
        >
          <div class="overlay"></div>
          <div class="container">
            <div class="row">
              <div class="col-lg-10 col-md-10 mx-auto">
                <div class="page-heading">
                  <h1>[[activeItemFields.title]]</h1>
                  <h2>[[activeItemFields.subtitle]]</h2>
                  <span class="subheading"></span>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div class="container">
          <div id="contentcontainer">
            <div id="slot"><slot></slot></div>
          </div>
        </div>
        <hr />
        <site-top-menu
          noink
          notitle
          indicator="none"
          position="top"
          showindex
          conditions='{"parent": "$firstId"}'
        >
          <div slot="prefix" class="spacing">
            <site-title icon="home" notitle position="top"></site-title>
          </div>
          <div slot="prefix" class="spacing">
            <site-print-button position="top"></site-print-button>
          </div>
          <div slot="prefix" class="spacing">
            <site-menu-button type="prev" position="top"></site-menu-button>
          </div>
          <div slot="suffix" class="spacing">
            <site-menu-button type="next" position="top"></site-menu-button>
          </div>
        </site-top-menu>
        <hr />
        <site-footer></site-footer>
        <scroll-button position="right" label="Back to top"> </scroll-button>
      `;
    }
  };
class Minimalist extends MinimalistTemplate(HTMLElement) {}
window.customElements.define("minimalist-template", Minimalist);
export { MinimalistTemplate, Minimalist };