import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { pathFromUrl } from "@polymer/polymer/lib/utils/resolve-url.js";
/**
 * append and register the shared styles
 */
const styleElement = document.createElement("dom-module"),
  template = document.createElement("template");

styleElement.appendChild(html`
  <style>
    .ct-label {
      fill: var(--chartist-label-color, #000);
      color: var(--chartist-label-color, #000);
      font-size: 0.75rem;
      line-height: 1;
    }

    .ct-chart-line .ct-label,
    .ct-chart-bar .ct-label {
      display: block;
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
    }

    .ct-chart-pie .ct-label,
    .ct-chart-donut .ct-label {
      dominant-baseline: central;
    }

    .ct-label.ct-horizontal.ct-start {
      -webkit-box-align: flex-end;
      -webkit-align-items: flex-end;
      -ms-flex-align: flex-end;
      align-items: flex-end;
      -webkit-box-pack: flex-start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: flex-start;
      justify-content: flex-start;
      text-align: left;
      text-anchor: start;
    }

    .ct-label.ct-horizontal.ct-end {
      -webkit-box-align: flex-start;
      -webkit-align-items: flex-start;
      -ms-flex-align: flex-start;
      align-items: flex-start;
      -webkit-box-pack: flex-start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: flex-start;
      justify-content: flex-start;
      text-align: left;
      text-anchor: start;
    }

    .ct-label.ct-vertical.ct-start {
      -webkit-box-align: flex-end;
      -webkit-align-items: flex-end;
      -ms-flex-align: flex-end;
      align-items: flex-end;
      -webkit-box-pack: flex-end;
      -webkit-justify-content: flex-end;
      -ms-flex-pack: flex-end;
      justify-content: flex-end;
      text-align: right;
      text-anchor: end;
    }

    .ct-label.ct-vertical.ct-end {
      -webkit-box-align: flex-end;
      -webkit-align-items: flex-end;
      -ms-flex-align: flex-end;
      align-items: flex-end;
      -webkit-box-pack: flex-start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: flex-start;
      justify-content: flex-start;
      text-align: left;
      text-anchor: start;
    }

    .ct-chart-bar .ct-label.ct-horizontal.ct-start {
      -webkit-box-align: flex-end;
      -webkit-align-items: flex-end;
      -ms-flex-align: flex-end;
      align-items: flex-end;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      text-align: center;
      text-anchor: start;
    }

    .ct-chart-bar .ct-label.ct-horizontal.ct-end {
      -webkit-box-align: flex-start;
      -webkit-align-items: flex-start;
      -ms-flex-align: flex-start;
      align-items: flex-start;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      text-align: center;
      text-anchor: start;
    }

    .ct-chart-bar.ct-horizontal-bars .ct-label.ct-horizontal.ct-start {
      -webkit-box-align: flex-end;
      -webkit-align-items: flex-end;
      -ms-flex-align: flex-end;
      align-items: flex-end;
      -webkit-box-pack: flex-start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: flex-start;
      justify-content: flex-start;
      text-align: left;
      text-anchor: start;
    }

    .ct-chart-bar.ct-horizontal-bars .ct-label.ct-horizontal.ct-end {
      -webkit-box-align: flex-start;
      -webkit-align-items: flex-start;
      -ms-flex-align: flex-start;
      align-items: flex-start;
      -webkit-box-pack: flex-start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: flex-start;
      justify-content: flex-start;
      text-align: left;
      text-anchor: start;
    }

    .ct-chart-bar.ct-horizontal-bars .ct-label.ct-vertical.ct-start {
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: flex-end;
      -webkit-justify-content: flex-end;
      -ms-flex-pack: flex-end;
      justify-content: flex-end;
      text-align: right;
      text-anchor: end;
    }

    .ct-chart-bar.ct-horizontal-bars .ct-label.ct-vertical.ct-end {
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: flex-start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: flex-start;
      justify-content: flex-start;
      text-align: left;
      text-anchor: end;
    }

    .ct-grid {
      stroke: rgba(0, 0, 0, 0.2);
      stroke-width: 1px;
      stroke-dasharray: 2px;
    }

    .ct-grid-background {
      fill: none;
    }

    .ct-point {
      stroke-width: 10px;
      stroke-linecap: round;
    }

    .ct-line {
      fill: none;
      stroke-width: 4px;
    }

    .ct-area {
      stroke: none;
      fill-opacity: 0.1;
    }

    .ct-bar {
      fill: none;
      stroke-width: 10px;
    }

    .ct-slice-donut {
      fill: none;
      stroke-width: 60px;
    }

    .ct-series-a .ct-point,
    .ct-series-a .ct-line,
    .ct-series-a .ct-bar,
    .ct-series-a .ct-slice-donut {
      stroke: var(--chartist-color-1, #d70206);
    }

    .ct-series-a .ct-slice-pie,
    .ct-series-a .ct-slice-donut-solid,
    .ct-series-a .ct-area {
      fill: var(--chartist-color-1, #d70206);
    }

    .ct-series-a .ct-label {
      fill: var(--chartist-label-color-1, --chartist-label-color);
      stroke: var(--chartist-label-color-1, --chartist-label-color);
    }

    .ct-series-b .ct-point,
    .ct-series-b .ct-line,
    .ct-series-b .ct-bar,
    .ct-series-b .ct-slice-donut {
      stroke: var(--chartist-color-2, #f05b4f);
    }

    .ct-series-b .ct-slice-pie,
    .ct-series-b .ct-slice-donut-solid,
    .ct-series-b .ct-area {
      fill: var(--chartist-color-2, #f05b4f);
    }

    .ct-series-b .ct-label {
      fill: var(--chartist-label-color-2, --chartist-label-color);
      stroke: var(--chartist-label-color-2, --chartist-label-color);
    }

    .ct-series-c .ct-point,
    .ct-series-c .ct-line,
    .ct-series-c .ct-bar,
    .ct-series-c .ct-slice-donut {
      stroke: var(--chartist-color-3, #f4c63d);
    }

    .ct-series-c .ct-slice-pie,
    .ct-series-c .ct-slice-donut-solid,
    .ct-series-c .ct-area {
      fill: var(--chartist-color-3, #f4c63d);
    }

    .ct-series-c .ct-label {
      fill: var(--chartist-label-color-3, --chartist-label-color);
      stroke: var(--chartist-label-color-3, --chartist-label-color);
    }

    .ct-series-d .ct-point,
    .ct-series-d .ct-line,
    .ct-series-d .ct-bar,
    .ct-series-d .ct-slice-donut {
      stroke: var(--chartist-color-4, #d17905);
    }

    .ct-series-d .ct-slice-pie,
    .ct-series-d .ct-slice-donut-solid,
    .ct-series-d .ct-area {
      fill: var(--chartist-color-4, #d17905);
    }

    .ct-series-d .ct-label {
      fill: var(--chartist-label-color-4, --chartist-label-color);
      stroke: var(--chartist-label-color-4, --chartist-label-color);
    }

    .ct-series-e .ct-point,
    .ct-series-e .ct-line,
    .ct-series-e .ct-bar,
    .ct-series-e .ct-slice-donut {
      stroke: var(--chartist-color-5, #453d3f);
    }

    .ct-series-e .ct-slice-pie,
    .ct-series-e .ct-slice-donut-solid,
    .ct-series-e .ct-area {
      fill: var(--chartist-color-5, #453d3f);
    }

    .ct-series-e .ct-label {
      fill: var(--chartist-label-color-5, --chartist-label-color);
      stroke: var(--chartist-label-color-5, --chartist-label-color);
    }

    .ct-series-f .ct-point,
    .ct-series-f .ct-line,
    .ct-series-f .ct-bar,
    .ct-series-f .ct-slice-donut {
      stroke: var(--chartist-color-6, #59922b);
    }

    .ct-series-f .ct-slice-pie,
    .ct-series-f .ct-slice-donut-solid,
    .ct-series-f .ct-area {
      fill: var(--chartist-color-6, #59922b);
    }

    .ct-series-f .ct-label {
      fill: var(--chartist-label-color-6, --chartist-label-color);
      stroke: var(--chartist-label-color-6, --chartist-label-color);
    }

    .ct-series-g .ct-point,
    .ct-series-g .ct-line,
    .ct-series-g .ct-bar,
    .ct-series-g .ct-slice-donut {
      stroke: var(--chartist-color-7, #0544d3);
    }

    .ct-series-g .ct-slice-pie,
    .ct-series-g .ct-slice-donut-solid,
    .ct-series-g .ct-area {
      fill: var(--chartist-color-7, #0544d3);
    }

    .ct-series-g .ct-label {
      fill: var(--chartist-label-color-7, --chartist-label-color);
      stroke: var(--chartist-label-color-7, --chartist-label-color);
    }

    .ct-series-h .ct-point,
    .ct-series-h .ct-line,
    .ct-series-h .ct-bar,
    .ct-series-h .ct-slice-donut {
      stroke: var(--chartist-color-8, #6b0392);
    }

    .ct-series-h .ct-slice-pie,
    .ct-series-h .ct-slice-donut-solid,
    .ct-series-h .ct-area {
      fill: var(--chartist-color-8, #6b0392);
    }

    .ct-series-h .ct-label {
      fill: var(--chartist-label-color-8, --chartist-label-color);
      stroke: var(--chartist-label-color-8, --chartist-label-color);
    }

    .ct-series-i .ct-point,
    .ct-series-i .ct-line,
    .ct-series-i .ct-bar,
    .ct-series-i .ct-slice-donut {
      stroke: var(--chartist-color-9, #f05b4f);
    }

    .ct-series-i .ct-slice-pie,
    .ct-series-i .ct-slice-donut-solid,
    .ct-series-i .ct-area {
      fill: var(--chartist-color-9, #f05b4f);
    }

    .ct-series-i .ct-label {
      fill: var(--chartist-label-color-9, --chartist-label-color);
      stroke: var(--chartist-label-color-9, --chartist-label-color);
    }

    .ct-series-j .ct-point,
    .ct-series-j .ct-line,
    .ct-series-j .ct-bar,
    .ct-series-j .ct-slice-donut {
      stroke: var(--chartist-color-10, #dda458);
    }

    .ct-series-j .ct-slice-pie,
    .ct-series-j .ct-slice-donut-solid,
    .ct-series-j .ct-area {
      fill: var(--chartist-color-10, #dda458);
    }

    .ct-series-j .ct-label {
      fill: var(--chartist-label-color-10, --chartist-label-color);
      stroke: var(--chartist-label-color-10, --chartist-label-color);
    }

    .ct-series-k .ct-point,
    .ct-series-k .ct-line,
    .ct-series-k .ct-bar,
    .ct-series-k .ct-slice-donut {
      stroke: var(--chartist-color-11, #eacf7d);
    }

    .ct-series-k .ct-slice-pie,
    .ct-series-k .ct-slice-donut-solid,
    .ct-series-k .ct-area {
      fill: var(--chartist-color-11, #eacf7d);
    }

    .ct-series-k .ct-label {
      fill: var(--chartist-label-color-11, --chartist-label-color);
      stroke: var(--chartist-label-color-11, --chartist-label-color);
    }

    .ct-series-l .ct-point,
    .ct-series-l .ct-line,
    .ct-series-l .ct-bar,
    .ct-series-l .ct-slice-donut {
      stroke: var(--chartist-color-12, #86797d);
    }

    .ct-series-l .ct-slice-pie,
    .ct-series-l .ct-slice-donut-solid,
    .ct-series-l .ct-area {
      fill: var(--chartist-color-12, #86797d);
    }

    .ct-series-l .ct-label {
      fill: var(--chartist-label-color-12, --chartist-label-color);
      stroke: var(--chartist-label-color-12, --chartist-label-color);
    }

    .ct-series-m .ct-point,
    .ct-series-m .ct-line,
    .ct-series-m .ct-bar,
    .ct-series-m .ct-slice-donut {
      stroke: var(--chartist-color-13, #b2c326);
    }

    .ct-series-m .ct-slice-pie,
    .ct-series-m .ct-slice-donut-solid,
    .ct-series-m .ct-area {
      fill: var(--chartist-color-13, #b2c326);
    }

    .ct-series-m .ct-label {
      fill: var(--chartist-label-color-13, --chartist-label-color);
      stroke: var(--chartist-label-color-13, --chartist-label-color);
    }

    .ct-series-n .ct-point,
    .ct-series-n .ct-line,
    .ct-series-n .ct-bar,
    .ct-series-n .ct-slice-donut {
      stroke: var(--chartist-color-14, #6188e2);
    }

    .ct-series-n .ct-slice-pie,
    .ct-series-n .ct-slice-donut-solid,
    .ct-series-n .ct-area {
      fill: var(--chartist-color-14, #6188e2);
    }

    .ct-series-n .ct-label {
      fill: var(--chartist-label-color-14, --chartist-label-color);
      stroke: var(--chartist-label-color-14, --chartist-label-color);
    }

    .ct-series-o .ct-point,
    .ct-series-o .ct-line,
    .ct-series-o .ct-bar,
    .ct-series-o .ct-slice-donut {
      stroke: var(--chartist-color-15, #a748ca);
    }

    .ct-series-o .ct-slice-pie,
    .ct-series-o .ct-slice-donut-solid,
    .ct-series-o .ct-area {
      fill: var(--chartist-color-15, #a748ca);
    }

    .ct-series-o .ct-label {
      fill: var(--chartist-label-color-15, --chartist-label-color);
      stroke: var(--chartist-label-color-15, --chartist-label-color);
    }

    .ct-square {
      display: block;
      position: relative;
      width: 100%;
    }
    .ct-square:before {
      display: block;
      float: left;
      content: "";
      width: 0;
      height: 0;
      padding-bottom: 100%;
    }
    .ct-square:after {
      content: "";
      display: table;
      clear: both;
    }
    .ct-square > svg {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
    }

    .ct-minor-second {
      display: block;
      position: relative;
      width: 100%;
    }
    .ct-minor-second:before {
      display: block;
      float: left;
      content: "";
      width: 0;
      height: 0;
      padding-bottom: 93.75%;
    }
    .ct-minor-second:after {
      content: "";
      display: table;
      clear: both;
    }
    .ct-minor-second > svg {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
    }

    .ct-major-second {
      display: block;
      position: relative;
      width: 100%;
    }
    .ct-major-second:before {
      display: block;
      float: left;
      content: "";
      width: 0;
      height: 0;
      padding-bottom: 88.8888888889%;
    }
    .ct-major-second:after {
      content: "";
      display: table;
      clear: both;
    }
    .ct-major-second > svg {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
    }

    .ct-minor-third {
      display: block;
      position: relative;
      width: 100%;
    }
    .ct-minor-third:before {
      display: block;
      float: left;
      content: "";
      width: 0;
      height: 0;
      padding-bottom: 83.3333333333%;
    }
    .ct-minor-third:after {
      content: "";
      display: table;
      clear: both;
    }
    .ct-minor-third > svg {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
    }

    .ct-major-third {
      display: block;
      position: relative;
      width: 100%;
    }
    .ct-major-third:before {
      display: block;
      float: left;
      content: "";
      width: 0;
      height: 0;
      padding-bottom: 80%;
    }
    .ct-major-third:after {
      content: "";
      display: table;
      clear: both;
    }
    .ct-major-third > svg {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
    }

    .ct-perfect-fourth {
      display: block;
      position: relative;
      width: 100%;
    }
    .ct-perfect-fourth:before {
      display: block;
      float: left;
      content: "";
      width: 0;
      height: 0;
      padding-bottom: 75%;
    }
    .ct-perfect-fourth:after {
      content: "";
      display: table;
      clear: both;
    }
    .ct-perfect-fourth > svg {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
    }

    .ct-perfect-fifth {
      display: block;
      position: relative;
      width: 100%;
    }
    .ct-perfect-fifth:before {
      display: block;
      float: left;
      content: "";
      width: 0;
      height: 0;
      padding-bottom: 66.6666666667%;
    }
    .ct-perfect-fifth:after {
      content: "";
      display: table;
      clear: both;
    }
    .ct-perfect-fifth > svg {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
    }

    .ct-minor-sixth {
      display: block;
      position: relative;
      width: 100%;
    }
    .ct-minor-sixth:before {
      display: block;
      float: left;
      content: "";
      width: 0;
      height: 0;
      padding-bottom: 62.5%;
    }
    .ct-minor-sixth:after {
      content: "";
      display: table;
      clear: both;
    }
    .ct-minor-sixth > svg {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
    }

    .ct-golden-section {
      display: block;
      position: relative;
      width: 100%;
    }
    .ct-golden-section:before {
      display: block;
      float: left;
      content: "";
      width: 0;
      height: 0;
      padding-bottom: 61.804697157%;
    }
    .ct-golden-section:after {
      content: "";
      display: table;
      clear: both;
    }
    .ct-golden-section > svg {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
    }

    .ct-major-sixth {
      display: block;
      position: relative;
      width: 100%;
    }
    .ct-major-sixth:before {
      display: block;
      float: left;
      content: "";
      width: 0;
      height: 0;
      padding-bottom: 60%;
    }
    .ct-major-sixth:after {
      content: "";
      display: table;
      clear: both;
    }
    .ct-major-sixth > svg {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
    }

    .ct-minor-seventh {
      display: block;
      position: relative;
      width: 100%;
    }
    .ct-minor-seventh:before {
      display: block;
      float: left;
      content: "";
      width: 0;
      height: 0;
      padding-bottom: 56.25%;
    }
    .ct-minor-seventh:after {
      content: "";
      display: table;
      clear: both;
    }
    .ct-minor-seventh > svg {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
    }

    .ct-major-seventh {
      display: block;
      position: relative;
      width: 100%;
    }
    .ct-major-seventh:before {
      display: block;
      float: left;
      content: "";
      width: 0;
      height: 0;
      padding-bottom: 53.3333333333%;
    }
    .ct-major-seventh:after {
      content: "";
      display: table;
      clear: both;
    }
    .ct-major-seventh > svg {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
    }

    .ct-octave {
      display: block;
      position: relative;
      width: 100%;
    }
    .ct-octave:before {
      display: block;
      float: left;
      content: "";
      width: 0;
      height: 0;
      padding-bottom: 50%;
    }
    .ct-octave:after {
      content: "";
      display: table;
      clear: both;
    }
    .ct-octave > svg {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
    }

    .ct-major-tenth {
      display: block;
      position: relative;
      width: 100%;
    }
    .ct-major-tenth:before {
      display: block;
      float: left;
      content: "";
      width: 0;
      height: 0;
      padding-bottom: 40%;
    }
    .ct-major-tenth:after {
      content: "";
      display: table;
      clear: both;
    }
    .ct-major-tenth > svg {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
    }

    .ct-major-eleventh {
      display: block;
      position: relative;
      width: 100%;
    }
    .ct-major-eleventh:before {
      display: block;
      float: left;
      content: "";
      width: 0;
      height: 0;
      padding-bottom: 37.5%;
    }
    .ct-major-eleventh:after {
      content: "";
      display: table;
      clear: both;
    }
    .ct-major-eleventh > svg {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
    }

    .ct-major-twelfth {
      display: block;
      position: relative;
      width: 100%;
    }
    .ct-major-twelfth:before {
      display: block;
      float: left;
      content: "";
      width: 0;
      height: 0;
      padding-bottom: 33.3333333333%;
    }
    .ct-major-twelfth:after {
      content: "";
      display: table;
      clear: both;
    }
    .ct-major-twelfth > svg {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
    }

    .ct-double-octave {
      display: block;
      position: relative;
      width: 100%;
    }
    .ct-double-octave:before {
      display: block;
      float: left;
      content: "";
      width: 0;
      height: 0;
      padding-bottom: 25%;
    }
    .ct-double-octave:after {
      content: "";
      display: table;
      clear: both;
    }
    .ct-double-octave > svg {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
    }

    /*# sourceMappingURL=chartist.css.map */
  </style>
`);
styleElement.register("chartist-render-shared-styles");