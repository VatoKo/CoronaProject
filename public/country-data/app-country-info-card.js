import { LitElement, html, css } from "lit-element";

export class AppCountryInfoCard extends LitElement {

    static get is() {
        return 'app-country-info-card'
    }

    static get styles() {
        // language=css
        return css`
            :host {
                display: block;
                border-radius: 25px;
                background-color: #fefefe;
                box-shadow: 0 0 8px #888888;
                transition: transform .2s;
                cursor: pointer;
                
                /*height: 200px;*/
            }

            :host(:hover) {
                transform: scale(1.1);
            }
            
            .card-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 16px;
                background-color: #303e4c;
                border-top-left-radius: 25px;
                border-top-right-radius: 25px;
            }
            
            .country-card-title {
                font-family: Futura;
                font-size: 16px;
                color: #fefefe;
                margin: 0;
                
            }
            
            .favorite-icon {
                width: 32px;
                height: 32px;
            }
            
            .country-data {
                padding: 16px;
                margin: auto;
            }
            
            .data-title-recovery {
                font-family: Futura;
                color: #06a74c;
                font-size: 12px;
                text-align: center;
                padding: 4px;
            }

            .data-title-confirmed {
                font-family: Futura;
                color: #ffbd23;
                font-size: 12px;
                text-align: center;
                padding: 4px;
            }
            
            .data-title-deaths {
                font-family: Futura;
                color: #e22820;
                font-size: 12px;
                text-align: center;
                padding: 4px;
            }
            
            .data-value-recovery {
                font-family: Futura;
                color: #06a74c;
                font-size: 14px;
                text-align: center;
                padding: 4px;
            }
            
            .data-value-confirmed {
                font-family: Futura;
                color: #ffbd23;
                font-size: 14px;
                text-align: center;
                padding: 4px;
            }
            
            .data-value-deaths {
                font-family: Futura;
                color: #e22820;
                font-size: 14px;
                text-align: center;
                padding: 4px;
            }
        `;
    }

    render() {
        // language=html
        return html`
            <div class="card-header">
                <h3 class="country-card-title">${this.countrySummary.Country}</h3>
                <img class="favorite-icon"
                     src="https://icons-for-free.com/iconfiles/png/512/heart-131965017458786724.png"
                     @click="${this.favoriteButtonClickHandler}"
                     alt=""/>
            </div>

            <table class="country-data">
                <tr>
                    <th class="data-title-recovery">New Recovered</th>
                    <th class="data-title-recovery">Total Recovered</th>
                </tr>
                <tr>
                    <td class="data-value-recovery">${this.countrySummary.NewRecovered}</td>
                    <td class="data-value-recovery">${this.countrySummary.TotalRecovered}</td>
                </tr>
                
                <tr>
                    <th class="data-title-confirmed">New Confirmed</th>
                    <th class="data-title-confirmed">Total Confirmed</th>
                </tr>
                <tr>
                    <td class="data-value-confirmed">${this.countrySummary.NewConfirmed}</td>
                    <td class="data-value-confirmed">${this.countrySummary.TotalConfirmed}</td>
                </tr>

                <tr>
                    <th class="data-title-deaths">New Deaths</th>
                    <th class="data-title-deaths">Total Deaths</th>
                </tr>
                <tr>
                    <td class="data-value-deaths">${this.countrySummary.NewDeaths}</td>
                    <td class="data-value-deaths">${this.countrySummary.TotalDeaths}</td>
                </tr>
                
            </table>
            
        `;
    }

    static get properties() {
        return {
            countrySummary: {
                type: Object
            }
        };
    }

    favoriteButtonClickHandler(event) {
        event.target.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_corazón.svg/1200px-Heart_corazón.svg.png"
    }

}

customElements.define(AppCountryInfoCard.is, AppCountryInfoCard);