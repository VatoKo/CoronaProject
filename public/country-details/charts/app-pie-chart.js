import { LitElement, html, css } from "lit-element";

export class AppPieChart extends LitElement {

    static get is() {
        return 'app-pie-chart'
    }

    firstUpdated(_changedProperties) {
        requestAnimationFrame(() => {
            this.configureChart();
        });
    }

    configureChart() {
        let chart = this.shadowRoot.getElementById("pie-canvas");
        let ctx = chart.getContext('2d');
        let myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: this.labels,
                datasets: [{
                    label: this.title,
                    data: this.data,
                    backgroundColor: this.backgroundColors,
                    borderColor: this.borderColors,
                    borderWidth: 1
                }]
            },
            options: {}
        });
    }

    static get styles() {
        // language=css
        return css`
            :host {
                display: block;
            }
        `;
    }

    render() {
        // language=html
        if (this.data === undefined) {
            return html``;
        } else {
            return html`<canvas id="pie-canvas"></canvas>`;
        }
    }

    static get properties() {
        return {
            labels: {
                type: Object
            },
            data: {
                type: Object,
            },
            title: {
                type: String
            },
            backgroundColors: {
                type: Object
            },
            borderColors: {
                type: String
            },
        };
    }

}

customElements.define(AppPieChart.is, AppPieChart);