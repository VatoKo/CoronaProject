import { LitElement, html, css } from "lit-element";

export class AppLineChart extends LitElement {

    static get is() {
        return 'app-line-chart'
    }

    firstUpdated(_changedProperties) {
        requestAnimationFrame(() => {
            this.configureChart(this.data);
        });
    }

    configureChart(data) {
        let chart = this.shadowRoot.getElementById("line-canvas");
        let ctx = chart.getContext('2d');
        let myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: this.data.map(item => new Date(item.Date).toLocaleDateString()),
                datasets: [{
                    label: this.title,
                    data: this.data.map(item => item.Cases),
                    backgroundColor: this.data.map(() => this.backgroundColor),
                    borderColor: this.data.map(() => this.borderColor),
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }

    static get styles() {
        // language=css
        return css`
            :host {
                display: flex;
                justify-content: center;
            }
            
            .no-data-icon {
                margin: 0 auto;
                width: 100px;
                height: 100px;
            }
        `;
    }

    render() {
        // language=html
        if (this.data === undefined || this.data.length === 0) {
            return html`<img class="no-data-icon"
                             src="https://cdn1.iconfinder.com/data/icons/pixel-perfect-at-16px-volume-1/16/5082-512.png"
                             alt=""/>`;
        } else {
            return html`<canvas id="line-canvas"></canvas>`;
        }
    }

    static get properties() {
        return {
            data: {
                type: Object,
            },
            title: {
                type: String
            },
            backgroundColor: {
                type: String
            },
            borderColor: {
                type: String
            },
        };
    }

}

customElements.define(AppLineChart.is, AppLineChart);