/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */import{html,PolymerElement}from"./node_modules/@polymer/polymer/polymer-element.js";import{HAXCMSTheme}from"./node_modules/@lrnwebcomponents/haxcms-elements/lib/core/HAXCMSThemeWiring.js";import"./node_modules/@lrnwebcomponents/simple-colors/simple-colors.js";/**
 * `learn-two-theme`
 * `Learn2 theme for HAXcms`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */class LearnTwoTheme extends HAXCMSTheme(PolymerElement){// render function
static get template(){return html`
<style>:host {
  display: block;
  font-family: "Muli","Helvetica","Tahoma","Geneva","Arial",sans-serif;
  letter-spacing: -.03rem;
  font-weight:400;
  background: #FAFAFA;
}
h1,h2,h3,h4,h5,h6 {
  font-family:"Montserrat","Helvetica","Tahoma","Geneva","Arial",sans-serif;
  font-weight:400;
  text-rendering:optimizeLegibility;
  line-height:150%;
  letter-spacing:0
}

:host([hidden]) {
  display: none;
}

:host([edit-mode]) #slot {
  display: none;
}

#contentcontainer {
  background: #FAFAFA;
  padding: 48px 96px;
}

.header {
  background: #747474;
  color: #FAFAFA;
  text-align: center;
  padding: 0rem 1rem 2rem 1rem;
}

site-active-title {
  --site-active-title-heading: {
    font-family: "Montserrat", "Helvetica", "Tahoma", "Geneva", "Arial", sans-serif;
    font-size: 52px;
    letter-spacing: -3px;
    line-height: 78px;
    margin-bottom: 27.2px;
    margin-top: 13.6px;
    text-align: center;
    text-rendering: optimizelegibility;
    font-weight: 100;
  };
}
site-title {
  position: relative;
  overflow: hidden;
  --site-title-link: {
    display: inline-block;
    color: #FAFAFA;
    text-decoration: none;
  };
  --site-title-heading: {
    font-family: "Montserrat", "Helvetica", "Tahoma", "Geneva", "Arial", sans-serif;
    font-size: 28px;
    margin: 0;
    padding: 0;
    letter-spacing: -3px;
    line-height: 78px;
    text-align: center;
    text-rendering: optimizelegibility;
    font-weight: 100;
  };
}
site-menu {
  background-color: #383F45;
  color: #FFFFFF;
  padding: 0;
  overflow: scroll;
  max-height: calc(100vh - 200px);
  --site-menu-active-color: #FFFFFF;
  --site-menu: {
    background-color: #383F45;
    color: #FFFFFF;
  }
  --site-menu-container: {
    padding: 0;
    background-color: #2d3237;
  }
  --site-menu-item-active-item: {
    color: #2d3237;
  }
}

site-menu::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 4px rgba(56, 63, 69, 0.9);
  border-radius: 0;
  background-color: #383F45;
}
site-menu::-webkit-scrollbar {
  width: 2px;
  background-color: #383F45;
}
site-menu::-webkit-scrollbar-thumb {
  border-radius: 1px;
  -webkit-box-shadow: inset 0 0 4px #747474;
  background-color: #383F45;
}
app-drawer-layout {
  min-height: 100vh;
  min-height: -moz-available; 
  min-height: -webkit-fill-available; 
  min-height: fill-available;
  --app-drawer-width: 300px;
  --app-drawer-scrim-background: rgba(80, 80, 80, 0.8);
  --app-drawer-width: 300px;
  --app-drawer-content-container: {
    overflow: hidden;
    background-color: #383F45;
  }
}
.rss-buttons {
  justify-content: space-evenly;
  display: flex;
}
site-print-button {
  --site-print-button-button: {
    color: white;
  }
}

app-drawer {
  box-shadow: 0 0 6px -3px var(--haxcms-color, black);
  overflow: hidden;
  width: 300px;
}
app-drawer-layout[narrow] #contentcontainer {
  padding: 0 16px;
}
#menubutton,#menubutton2 {
  display: none;
}
app-drawer-layout[narrow] #menubutton {
  display: block;
}
app-drawer-layout[narrow] #menubutton2 {
  display: block;
  position: absolute;
  z-index: 1;
}
app-drawer-layout[narrow] .header {
  padding: 0;
}
site-menu-button {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 300px;
  --site-menu-button-icon: {
    width: 64px;
    height: 64px;
    color: #2d3237;
  };
  --site-menu-button-button: {
    background-color: rgba(0,0,0,0);
    width: 64px;
    height: 100vh;
    border-radius: 0;
    transition: .4s all ease-in-out;
    transition-delay: .2s;
    margin: 0;
    padding: 0;
    opacity: .8;
    -webkit-transition: .4s all ease-in-out;
    -moz-transition: .4s all ease-in-out;
    -ms-transition: .4s all ease-in-out;
    -o-transition: .4s all ease-in-out;
  };
}
site-menu-button:not([disabled]):hover,
site-menu-button:not([disabled]):active,
site-menu-button:not([disabled]):focus {
  opacity: 1;
  background-color: rgba(0,0,0,.1);
}
app-drawer-layout[narrow] site-menu {
  max-height: calc(100vh - 160px);
}
app-drawer-layout[narrow] site-menu-button {
  bottom: 0;
  top: unset;
  --site-menu-button-button: {
    background-color: transparent !important;
    width: 64px;
    height: 64px;
  };
}
site-menu-button[type="next"] {
  right: 0;
  left: unset;
}
app-drawer-layout[narrow] site-menu-button[type="prev"] {
  left: unset;
}
:host([opened]) app-drawer-layout[narrow] site-menu-button[type="prev"],
:host([opened]) app-drawer-layout[narrow] site-menu-button[type="next"] {
  display: none;
}</style>
<style>
  html,body {
    background-color: #FAFAFA;
  }
  </style>

<app-drawer-layout>
  <paper-icon-button id="menubutton" icon="menu" on-click="toggleDrawer"></paper-icon-button>
  <app-drawer swipe-open slot="drawer" opened="{{opened}}">
    <paper-icon-button id="menubutton2" icon="menu" on-click="toggleDrawer"></paper-icon-button>
    <div class="header-wrapper">
      <div class="header">
        <site-title></site-title>
        <site-modal icon="icons:search" title="Search site" button-label="Search">
          <site-search></site-search>
        </site-modal>
      </div>
    </div>
    <site-menu></site-menu>
    <div class="rss-buttons">
      <site-rss-button type="atom"></site-rss-button>
      <site-rss-button type="rss"></site-rss-button>
      <site-print-button position="top"></site-print-button>
    </div>
  </app-drawer>
  <div>
    <site-menu-button type="prev"></site-menu-button>
    <div id="contentcontainer">
      <site-breadcrumb></site-breadcrumb>
      <site-active-title></site-active-title>
      <div id="slot">
        <slot></slot>
      </div>
    </div>
    <site-menu-button type="next"></site-menu-button>
  </div>
</app-drawer-layout>`}// properties available to the custom element for data binding
static get properties(){return{}}constructor(){super();import("./node_modules/@polymer/app-layout/app-drawer/app-drawer.js");import("./node_modules/@polymer/app-layout/app-drawer-layout/app-drawer-layout.js");import("./node_modules/@polymer/paper-icon-button/paper-icon-button.js");import("./node_modules/@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-breadcrumb.js");import("./node_modules/@lrnwebcomponents/haxcms-elements/lib/ui-components/active-item/site-active-title.js");import("./node_modules/@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-title.js");import("./node_modules/@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-rss-button.js");import("./node_modules/@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-print-button.js");import("./node_modules/@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-menu.js");import("./node_modules/@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-menu-button.js");import("./node_modules/@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-search.js");import("./node_modules/@lrnwebcomponents/haxcms-elements/lib/ui-components/layout/site-modal.js")}/**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */static get tag(){return"learn-two-theme"}/**
   * Mix in an opened status
   */static get properties(){let props=super.properties;props.opened={type:Boolean,reflectToAttribute:!0};return props}toggleDrawer(e){this.shadowRoot.querySelector("app-drawer").toggle()}}window.customElements.define(LearnTwoTheme.tag,LearnTwoTheme);export{LearnTwoTheme};