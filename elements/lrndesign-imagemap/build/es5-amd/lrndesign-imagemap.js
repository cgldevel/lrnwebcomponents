define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js",
  "./node_modules/@polymer/iron-ajax/iron-ajax.js",
  "./node_modules/@polymer/iron-a11y-keys/iron-a11y-keys.js",
  "./node_modules/@polymer/paper-dialog/paper-dialog.js",
  "./node_modules/@lrnwebcomponents/relative-heading/relative-heading.js",
  "./lib/lrndesign-imagemap-hotspot.js"
], function(_polymerLegacy, _polymerDom) {
  "use strict";
  function _templateObject_f64674c0e70711e8a98cc35b26c930f5() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n    <style>\n      :host {\n        display: block;\n      }\n      :host #buttons {\n        position: absolute;\n        left: -999999px;\n        top: 0;\n        overflow: hidden;\n        opacity: 0;\n      }\n      :host paper-dialog {\n        border: 1px solid #000;\n        border-radius: 4px;\n      }\n      :host paper-dialog > #title, \n      :host paper-dialog > #desc {\n        padding: 15px;\n        margin: 0;\n      }\n      :host paper-dialog > #title {\n        position: absolute;\n        left: -9999px;\n        overflow: hidden;\n        height: 0;\n        width: 0;\n      }\n      :host paper-dialog > #title > * {\n        margin: 0;\n      }\n      /*::slotted([hotspot]) {\n        display: none;\n      }*/\n      @media print {\n        :host > #svg {\n          display: none;\n        }\n        /*::slotted(#screen-only) {\n          display: none;\n        }\n        ::slotted([hotspot]) {\n          display: block;\n        }*/\n      }\n    </style>\n    <relative-heading hidden$="[[!label]]" id="heading" subtopic-of$="[[subtopicOf]]" tag$="[[tag]]" text$="[[label]]">\n    </relative-heading>\n    <div id="desc"><slot name="desc"></slot></div>\n    <div id="svg"></div>\n    <div id="buttons"></div>\n    <slot></slot>\n    <paper-dialog id="hdetails">\n      <div id="title"></div>\n      <div id="desc"></div>\n    </paper-dialog>\n    <iron-ajax auto="" id="get_svg" url="[[src]]" handle-as="text" on-response="_getSVGHandler"></iron-ajax>\n'
      ],
      [
        '\n    <style>\n      :host {\n        display: block;\n      }\n      :host #buttons {\n        position: absolute;\n        left: -999999px;\n        top: 0;\n        overflow: hidden;\n        opacity: 0;\n      }\n      :host paper-dialog {\n        border: 1px solid #000;\n        border-radius: 4px;\n      }\n      :host paper-dialog > #title, \n      :host paper-dialog > #desc {\n        padding: 15px;\n        margin: 0;\n      }\n      :host paper-dialog > #title {\n        position: absolute;\n        left: -9999px;\n        overflow: hidden;\n        height: 0;\n        width: 0;\n      }\n      :host paper-dialog > #title > * {\n        margin: 0;\n      }\n      /*::slotted([hotspot]) {\n        display: none;\n      }*/\n      @media print {\n        :host > #svg {\n          display: none;\n        }\n        /*::slotted(#screen-only) {\n          display: none;\n        }\n        ::slotted([hotspot]) {\n          display: block;\n        }*/\n      }\n    </style>\n    <relative-heading hidden\\$="[[!label]]" id="heading" subtopic-of\\$="[[subtopicOf]]" tag\\$="[[tag]]" text\\$="[[label]]">\n    </relative-heading>\n    <div id="desc"><slot name="desc"></slot></div>\n    <div id="svg"></div>\n    <div id="buttons"></div>\n    <slot></slot>\n    <paper-dialog id="hdetails">\n      <div id="title"></div>\n      <div id="desc"></div>\n    </paper-dialog>\n    <iron-ajax auto="" id="get_svg" url="[[src]]" handle-as="text" on-response="_getSVGHandler"></iron-ajax>\n'
      ]
    );
    _templateObject_f64674c0e70711e8a98cc35b26c930f5 = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_f64674c0e70711e8a98cc35b26c930f5()
    ),
    is: "lrndesign-imagemap",
    properties: {
      label: { type: String, value: null },
      src: { type: String, value: null },
      hotspotDetails: { type: Array, value: [] },
      subtopicOf: { type: String, value: null, reflectToAttribute: !0 },
      tag: { type: String, value: null, reflectToAttribute: !0 }
    },
    ready: function ready() {
      var root = this;
      this.$.hdetails.addEventListener("blur", function() {
        root.closeHotspot();
      });
      this.$.hdetails.addEventListener("mouseout", function() {
        root.closeHotspot();
      });
      this.$.hdetails.addEventListener("keyup", function(e) {
        if (13 === e.keyCode || 32 === e.keyCode) {
          root.closeHotspot();
        }
      });
    },
    _getSVGHandler: function _getSVGHandler(e) {
      var root = this,
        temp = document.createElement("div"),
        getID = function(element, alt) {
          if (null === element.getAttribute("id"))
            element.setAttribute("id", alt);
          return element.getAttribute("id");
        },
        setAriaLabelledBy = function(source, target, prefix) {
          var svgElem = function(nodename) {
            source = null !== source ? source : root;
            var attr = "title" === nodename ? "label" : nodename,
              query = source.querySelector("#" + attr),
              label = target.querySelector(nodename);
            if (null === label) {
              label = document.createElement(nodename);
              target.prepend(label);
            }
            if (null !== source.getAttribute(attr)) {
              label.innerHTML = source.getAttribute(attr);
            } else if (null !== query && "" !== query.innerHTML) {
              label.innerHTML = query.innerHTML;
            }
            return getID(label, prefix + "-" + attr);
          };
          target.setAttribute(
            "aria-labelledby",
            svgElem("desc") + " " + svgElem("label")
          );
        };
      temp.innerHTML = e.detail.response;
      var svg = temp.querySelector("svg"),
        svgid = getID(svg, "svg-" + Date.now()),
        hdata = (0, _polymerDom.dom)(root).querySelectorAll(
          "lrndesign-imagemap-hotspot"
        );
      setAriaLabelledBy(root, svg, svgid);
      this.$.svg.appendChild(svg);
      for (
        var _loop = function(i) {
            var hid = hdata[i].getAttribute("hotspot-id"),
              hotspot = svg.querySelector("#" + hid),
              clone = svg.cloneNode(!0);
            setAriaLabelledBy(hdata[i], clone, hid);
            hdata[i].appendChild(clone);
            hdata[i].querySelector("#" + hid).classList.add("selected");
            hdata[i].setParentHeading(root.$.heading);
            for (var j = 0; j < hdata.length; j++) {
              hdata[i]
                .querySelector("#" + hdata[j].getAttribute("hotspot-id"))
                .classList.add("hotspot");
            }
            var hbutton = document.createElement("button");
            hbutton.setAttribute("aria-controls", "hdetails");
            hbutton.setAttribute("tabindex", 0);
            hbutton.setAttribute("aria-label", hdata[i].label);
            root.$.buttons.appendChild(hbutton);
            hbutton.addEventListener("focus", function() {
              console.log("focus", i, hotspot);
              hotspot.classList.add("focus");
            });
            hbutton.addEventListener("blur", function() {
              hotspot.classList.remove("focus");
            });
            hotspot.classList.add("hotspot");
            hotspot.addEventListener("click", function() {
              root.openHotspot(hotspot, hdata[i]);
            });
            hbutton.addEventListener("keyup", function(e) {
              if (13 === e.keyCode || 32 === e.keyCode) {
                if (!hotspot.classList.contains("selected")) {
                  root.openHotspot(hotspot, hdata[i]);
                }
              }
            });
          },
          i = 0;
        i < hdata.length;
        i++
      ) {
        _loop(i);
      }
    },
    openHotspot: function openHotspot(hotspot, details) {
      var root = this,
        node = (0, _polymerDom.dom)(root).querySelector(
          'lrndesign-imagemap-hotspot[hotspot-id="' +
            hotspot.getAttribute("id") +
            '"]'
        );
      this.$.hdetails.querySelector("#title").innerHTML = details.getAttribute(
        "label"
      );
      this.$.hdetails.querySelector("#desc").innerHTML = details.querySelector(
        "#desc"
      ).innerHTML;
      this.$.hdetails.positionTarget = hotspot;
      this.__activeHotspot = hotspot;
      this.$.hdetails.open();
      this.resetHotspots();
      hotspot.classList.add("selected");
    },
    closeHotspot: function closeHotspot() {
      this.$.hdetails.querySelector("#title").innerHTML = "";
      this.$.hdetails.querySelector("#desc").innerHTML = "";
      this.resetHotspots();
      this.$.hdetails.close();
      this.__activeHotspot.focus();
    },
    resetHotspots: function resetHotspots() {
      for (
        var hotspots = this.querySelectorAll('.hotspot[role="button"]'), i = 0;
        i < hotspots.length;
        i++
      ) {
        hotspots[i].classList.remove("selected");
      }
    }
  });
});
