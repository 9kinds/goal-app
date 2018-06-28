import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class GoalChart extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <canvas id="myChart" width="616" height="308"></canvas>
      <script>
        new Chart(document.getElementById('myChart'), {
          'type': 'pie',
          'data': {
              'labels': [
                'saved',
                'still needed',
              ],
              datasets: [{
                data: [1300,800],
                backgroundColor: '#66BB6A' '#FFA726',
            }]
        },
            options: {},
        });
        }
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'goal-chart'
      }
    };
  }
}

window.customElements.define('goal-chart', GoalChart);
