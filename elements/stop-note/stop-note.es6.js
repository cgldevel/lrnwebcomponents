import{html,PolymerElement}from"./node_modules/@polymer/polymer/polymer-element.js";import{SchemaBehaviors}from"./node_modules/@lrnwebcomponents/schema-behaviors/schema-behaviors.js";import{HAXWiring}from"./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js";import"./node_modules/@polymer/iron-icon/iron-icon.js";import"./lib/stop-icon.js";/**
 * `stop-note`
 * `A note that directs people to an action item of different warning levels`
 * @demo demo/index.html
 * @microcopy - the mental model for this element
 * -
 */class StopNote extends SchemaBehaviors(PolymerElement){static get template(){return html`
      <style>
        :host {
          display: block;
          width: auto;
          --background-color: #f7f7f7;
          --accent-color: #d32f2f;
          margin-bottom: 20px;
        }

        iron-icon {
          height: 100px;
          width: 100px;
        }

        :host([icon="stopnoteicons:stop-icon"]) {
          --accent-color: #d8261c;
        }

        :host([icon="stopnoteicons:warning-icon"]) {
          --accent-color: #ffeb3b;
        }

        :host([icon="stopnoteicons:confirm-icon"]) {
          --accent-color: #81c784;
        }

        :host([icon="stopnoteicons:book-icon"]) {
          --accent-color: #21a3db;
        }

        .container {
          display: flex;
          width: auto;
        }

        .message_wrap {
          border-right: 7px solid var(--accent-color);
          padding: 10px 25px;
          flex: 1 1 auto;
          background-color: var(--background-color);
        }

        .main_message {
          font-size: 32px;
          margin-top: 10px;
        }

        .secondary_message {
          margin-top: 5px;
          font-size: 19.2px;
          float: left;
        }

        .link a {
          margin-top: 5px;
          font-size: 19.2px;
          float: left;
          clear: left;
          text-decoration: none;
          color: #2196f3;
        }

        .link a:hover {
          color: #1976d2;
        }

        .svg {
          display: flex;
          justify-content: center;
        }

        .svg_wrap {
          background-color: var(--accent-color);
          padding: 5px;
          width: auto;
        }
      </style>
      <div class="container">
        <div class="svg_wrap">
          <div class="svg"><iron-icon icon="[[icon]]"></iron-icon></div>
        </div>
        <div class="message_wrap">
          <div class="main_message">[[title]]</div>
          <div class="secondary_message"><slot name="message"></slot></div>
          <div class="link" hidden$="[[!url]]">
            <a href="[[url]]" target\$="[[_urlTarget(url)]]"
              >More Information &gt;</a
            >
          </div>
        </div>
      </div>
    `}static get tag(){return"stop-note"}static get properties(){return{/**
       * Title Message
       */title:{type:String,value:"Title",reflectToAttribute:!0},/**
       * url to additional resources
       */url:{type:String,value:null,reflectToAttribute:!0},/**
       * Icon selected
       */icon:{type:String,value:"stopnoteicons:stop-icon",observer:"_iconChanged",reflectToAttribute:!0}}}/**
   * Update styles based on icon selected.
   */_iconChanged(icon){this.updateStyles()}/**
   * Evaluates url for correct targeting.
   */_urlTarget(url){if(url){const external=this._outsideLink(url);if(external){return"_blank"}}return!1}/**
   * Internal function to check if a url is external
   */_outsideLink(url){if(0!=url.indexOf("http"))return!1;var loc=location.href,path=location.pathname,root=loc.substring(0,loc.indexOf(path));return 0!=url.indexOf(root)}static get haxProperties(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Stop Note",description:"A message to alert readers to specific directions.",icon:"icons:report",color:"orange",groups:["Video","Media"],handles:[{type:"text",title:"label"}],meta:{author:"LRNWebComponents"}},settings:{quick:[{property:"title",title:"Title",description:"Enter title for stop-note.",inputMethod:"textfield",required:!0},{property:"url",title:"URL",description:"Enter an external url.",inputMethod:"textfield",required:!0}],configure:[{property:"title",title:"Title",description:"Enter title for stop-note.",inputMethod:"textfield",required:!0},{property:"url",title:"URL",description:"Enter an external url.",inputMethod:"haxupload",required:!0},{slot:"message",title:"Message",description:"Enter a message for stop-note.",inputMethod:"code-editor",required:!0},{property:"icon",title:"Action Icon",description:"Icon used for stop-note",inputMethod:"iconpicker",options:["stopnoteicons:stop-icon","stopnoteicons:warning-icon","stopnoteicons:confirm-icon","stopnoteicons:book-icon"]}],advanced:[]}}}/**
   * Attached to the DOM, now fire.
   */connectedCallback(){super.connectedCallback();this.HAXWiring=new HAXWiring;this.HAXWiring.setup(StopNote.haxProperties,StopNote.tag,this)}}window.customElements.define(StopNote.tag,StopNote);export{StopNote};