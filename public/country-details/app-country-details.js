import { LitElement, html, css } from "lit-element";
import { AppCountrySummaryCard } from "./summary-card/app-country-summary-card";
import { AppLineChart } from "./charts/app-line-chart";
import { AppPieChart } from "./charts/app-pie-chart";

export class AppCountryDetails extends LitElement {

    firstUpdated(_changedProperties) {
        this.fetchSummary();
        this.fetchConfirmedCases();
        this.fetchRecoveryData();
        this.fetchDeathCases();
    }

    fetchSummary() {
        fetch('https://api.covid19api.com/summary')
            .then(response => response.json())
            .then(data => {
                this.globalSummary = data["Global"];
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
            })
            .catch((error) => {
                this.confirmedCases = [];
            })
    }



    fetchRecoveryData() {
        fetch(`https://api.covid19api.com/dayone/country/${this.routeParams.slug}/status/recovered`)
            .then(response => response.json())
            .then(data => {
                this.recoveryCases = data;
            })
            .catch((error) => {
                this.recoveryCases = [];
            })
    }

    fetchDeathCases() {
        fetch(`https://api.covid19api.com/dayone/country/${this.routeParams.slug}/status/deaths`)
            .then(response => response.json())
            .then(data => {
                this.deathCases = data;
            })
            .catch((error) => {
                this.deathCases = [];
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
            
            .charts-container {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
            }
            
            .pie-charts-container {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
            }
            
            .layer {
                background-color: #fefefe;
                border-radius: 25px;
                box-shadow: 0 0 8px #888888;
                margin: 16px 0;
                padding: 8px;
            }
            
            .maps {
                width: 400px;
                height: 400px;
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
                .details-title-container {
                    margin: 16px 16px;
                }

                .layer {
                    margin: 16px 16px;
                }
                
                .pie-charts-container {
                    flex-direction: column;
                }
            }
        `;
    }

    render() {
        // language=html
        if (this.countrySummary === undefined || this.confirmedCases === undefined || this.recoveryCases === undefined || this.deathCases === undefined) {
            return html`<div class="lds-dual-ring"></div>`;
        } else {
            return html`
                <div class="details-title-container">
                    <h1>${this.countrySummary.Country}</h1>
                </div>
                
                <div class="charts-container">
                    <app-country-summary-card .countrySummary="${this.countrySummary}"></app-country-summary-card>
                    
                    <div class="pie-charts-container">
                        
                        <div class="layer">
                            <app-pie-chart .labels="${["Alive", "Dead"]}"
                                           .data="${[this.countrySummary.TotalConfirmed - this.countrySummary.TotalDeaths, this.countrySummary.TotalDeaths]}"
                                           title="Death Rate"
                                           .backgroundColors="${["rgba(255, 189, 35, 0.32)", "rgba(226, 40, 32, 0.32)"]}"
                                           .borderColors="${["rgba(255, 189, 35, 1)", "rgba(226, 40, 32, 1)"]}">
                            </app-pie-chart>
                        </div>
                        <div class="layer">
                            <app-pie-chart .labels="${["Active case", "Recovered"]}"
                                           .data="${[this.countrySummary.TotalConfirmed - this.countrySummary.TotalRecovered, this.countrySummary.TotalRecovered]}"
                                           title="Recovery Rate"
                                           .backgroundColors="${["rgba(255, 189, 35, 0.32)", "rgba(6, 167, 76, 0.32)"]}"
                                           .borderColors="${["rgba(255, 189, 35, 1)", "rgba(6, 167, 76, 1)"]}">
                            </app-pie-chart>
                        </div>
                        <div class="layer">
                            <app-pie-chart .labels="${["Confirmed Globally", `Confirmed in ${this.countrySummary.Country}`]}"
                                           .data="${[this.globalSummary.TotalConfirmed - this.countrySummary.TotalConfirmed, this.countrySummary.TotalConfirmed]}"
                                           title="Ratio to global cases"
                                           .backgroundColors="${["rgba(226, 40, 32, 0.32)", "rgba(6, 167, 76, 0.32)"]}"
                                           .borderColors="${["rgba(226, 40, 32, 1)", "rgba(6, 167, 76, 1)"]}">
                            </app-pie-chart>
                        </div>
                    </div>
                    
                    <div class="layer">
                        <app-line-chart title="Recovered"
                                        backgroundColor="rgba(6, 167, 76, 0.32)"
                                        borderColor="rgba(6, 167, 76, 1)"
                                        .data="${this.recoveryCases}">
                        </app-line-chart>
                    </div>

                    <div class="layer">
                        <app-line-chart title="Confirmed"
                                        backgroundColor="rgba(255, 189, 35, 0.32)"
                                        borderColor="rgba(255, 189, 35, 1)"
                                        .data="${this.confirmedCases}">
                        </app-line-chart>
                    </div>

                    <div class="layer">
                        <app-line-chart title="Deaths"
                                        backgroundColor="rgba(226, 40, 32, 0.32)"
                                        borderColor="rgba(226, 40, 32, 1)"
                                        .data="${this.deathCases}">
                        </app-line-chart>
                    </div>
                </div>
            `;
        }
    }

    static get properties() {
        return {
            routeParams: {
                type: Object
            },
            globalSummary: {
                type: Object
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