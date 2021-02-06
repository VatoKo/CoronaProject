import { LitElement, html, css } from "lit-element";

export class AppCountrySummaryCard extends LitElement {

    static get is() {
        return 'app-country-summary-card'
    }

    static get styles() {
        // language=css
        return css`
            :host {
                display: grid;
                grid-template-columns: auto auto auto;
                background-color: #fefefe;
                border-radius: 25px;
                box-shadow: 0 0 8px #888888;
            }

            .chip {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border-radius: 100px;
                padding: 8px 16px;
                margin: 16px 8px;
                -moz-box-shadow: inset 0 0 10px #444444;
                -webkit-box-shadow: inset 0 0 10px #444444;
                box-shadow: inset 0 0 10px #444444;
            }

            .chip-title {
                font-family: Futura;
                color: #fefefe;
                font-size: 16px;
                margin: 0;
                text-align: center;
            }

            .chip-value {
                font-family: Futura;
                color: #fefefe;
                font-size: 16px;
                margin-top: 8px;
                text-align: center;
            }

            @media (max-width: 800px) {
                :host {
                    margin: 0 16px;
                }
            }

            @media (max-width: 420px) {
                :host {
                    grid-template-columns: auto;
                    margin: 0 16px;
                }

                .chip {
                    margin: 16px auto;
                    width: 300px;
                }
            }
        `;
    }

    render() {
        // language=html
        return html`
           <div class="chip" style="background-color: #06a74c">
               <h4 class="chip-title">New Recovered</h4>
               <p class="chip-value">${this.countrySummary.NewRecovered}</p>
           </div>

           <div class="chip" style="background-color: #ffbd23">
               <h4 class="chip-title">New Confirmed</h4>
               <p class="chip-value">${this.countrySummary.NewConfirmed}</p>
           </div>

           <div class="chip" style="background-color: #e22820">
               <h4 class="chip-title">New Deaths</h4>
               <p class="chip-value">${this.countrySummary.NewDeaths}</p>
           </div>

           <div class="chip" style="background-color: #06a74c">
               <h4 class="chip-title">Total Recovered</h4>
               <p class="chip-value">${this.countrySummary.TotalRecovered}</p>
           </div>

           <div class="chip" style="background-color: #ffbd23">
               <h4 class="chip-title">Total Confirmed</h4>
               <p class="chip-value">${this.countrySummary.TotalConfirmed}</p>
           </div>

           <div class="chip" style="background-color: #e22820">
               <h4 class="chip-title">Total Deaths</h4>
               <p class="chip-value">${this.countrySummary.TotalDeaths}</p>
           </div>
        `;
    }

    static get properties() {
        return {
            countrySummary: {
                type: Object
            }
        };
    }

}

customElements.define(AppCountrySummaryCard.is, AppCountrySummaryCard);