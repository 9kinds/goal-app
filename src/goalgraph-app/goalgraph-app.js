import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import Chart from 'chart.js';
/**
 * @customElement
 * @polymer
 */
class GoalgraphApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2 class="goal-name">Your goal here</h2>
      <goal-chart></goal-chart>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'goalgraph-app'
      }
    };
  }
}

window.customElements.define('goalgraph-app', GoalgraphApp);
