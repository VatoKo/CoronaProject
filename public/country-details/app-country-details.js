import { LitElement, html, css } from "lit-element";
import { AppCountrySummaryCard } from "./summary-card/app-country-summary-card";

export class AppCountryDetails extends LitElement {

    firstUpdated(_changedProperties) {
        this.fetchSummary();
        // this.fetchConfirmedCases();
        // this.fetchRecoveryData();
        // this.fetchDeathCases();
    }

    fetchSummary() {
        fetch('https://api.covid19api.com/summary')
            .then(response => response.json())
            .then(data => {
                this.countrySummary = data["Countries"].filter(item => item.Slug === this.routeParams.slug)[0];
            })
            .catch((error) => {
                this.countrySummary = {
                    "ID": "",
                    "Country": "",
                    "CountryCode": "",
                    "Slug": "",
                    "NewConfirmed": 0,
                    "TotalConfirmed": 0,
                    "NewDeaths": 0,
                    "TotalDeaths": 0,
                    "NewRecovered": 0,
                    "TotalRecovered": 0,
                    "Date": "",
                    "Premium": {}
                };
                alert("Failed to fetch data: " + error);
            })
    }

    fetchConfirmedCases() {
        fetch(`https://api.covid19api.com/dayone/country/${this.routeParams.slug}/status/confirmed`)
            .then(response => response.json())
            .then(data => {
                this.confirmedCases = data;
                console.log(data);
            })
            .catch((error) => {
                this.confirmedCases = [];
                alert("Failed to fetch data: " + error);
            })
    }



    fetchRecoveryData() {
        fetch(`https://api.covid19api.com/dayone/country/${this.routeParams.slug}/status/recovered`)
            .then(response => response.json())
            .then(data => {
                this.recoveryCases = data;
                console.log(data);
            })
            .catch((error) => {
                this.recoveryCases = [];
                alert("Failed to fetch data: " + error);
            })
    }

    fetchDeathCases() {
        fetch(`https://api.covid19api.com/dayone/country/${this.routeParams.slug}/status/deaths`)
            .then(response => response.json())
            .then(data => {
                this.deathCases = data;
                console.log(data);
            })
            .catch((error) => {
                this.deathCases = [];
                alert("Failed to fetch data: " + error);
            })
    }

    static get is() {
        return 'app-country-details'
    }

    static get styles() {
        // language=css
        return css`
            :host {
                display: block;
            }
            
            .details-title-container {
                background-color: #fefefe;
                border-radius: 25px;
                box-shadow: 0 0 8px #888888;
                padding: 16px;
                margin: 16px 0;
                
                color: #2a3642;
                font-family: Futura;
                text-align: center;
            }
            
            .details-container {
                display: grid;
                grid-template-columns: auto auto;
                gap: 16px;
            }
            
            .layer {
                background-color: #fefefe;
                border-radius: 25px;
                box-shadow: 0 0 8px #888888;
            }

            /* Loader is from this site: https://loading.io/css/ */
            .lds-dual-ring {
                display: block;
                width: 80px;
                height: 80px;
                margin: auto;
                padding: 72px;
            }
            .lds-dual-ring:after {
                content: " ";
                display: block;
                width: 64px;
                height: 64px;
                margin: 8px;
                border-radius: 50%;
                border: 6px solid #303e4c;
                border-color: #303e4c transparent #303e4c transparent;
                animation: lds-dual-ring 1.2s linear infinite;
            }
            @keyframes lds-dual-ring {
                0% {
                    transform: rotate(0deg);
                }
                100% {
                    transform: rotate(360deg);
                }
            }

            @media (max-width: 800px) {
                .details-container {
                    grid-template-columns: auto;
                }

                .details-title-container {
                    margin: 16px 16px;
                }
            }
        `;
    }

    render() {
        // language=html

        // if (this.confirmedCases === undefined || this.recoveryCases === undefined || this.deathCases === undefined) {
        //     return html`<div class="lds-dual-ring"></div>`;
        // } else {
        //     return html`
        //         <h1>${this.confirmedCases[0].Cases}</h1>
        //         <h1>${this.recoveryCases[0].Cases}</h1>
        //         <h1>${this.deathCases[0].Cases}</h1>
        //     `;
        // }

        // Change this to 'equals'
        if (this.countrySummary === undefined) {
            return html`<div class="lds-dual-ring"></div>`;
        } else {
            return html`
                
                <div class="details-title-container">
                    <h1>${this.countrySummary.Country}</h1>
                </div>
                
                <div class="details-container">
                    <app-country-summary-card .countrySummary="${this.countrySummary}"></app-country-summary-card>
                    <div class="layer"><h1>To be implemented</h1></div>
                    <div class="layer"><h1>To be implemented</h1></div>
                    <div class="layer"><h1>To be implemented</h1></div>
                </div>
            `;
        }
    }

    static get properties() {
        return {
            routeParams: {
                type: Object,
            },
            countrySummary: {
                type: Object
            },
            confirmedCases: {
                type: Object
            },
            recoveryCases: {
                type: Object
            },
            deathCases: {
                type: Object
            }
        };
    }

}

customElements.define(AppCountryDetails.is, AppCountryDetails);