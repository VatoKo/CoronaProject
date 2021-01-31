import { LitElement, html, css } from "lit-element";
import { AppHomeFavorites} from "../favorites/app-home-favorites";
import { AppHomeDashboard } from "../dashboard/app-home-dashboard";
import { AppCountryInfoCard } from "../country-data/app-country-info-card";
import { Router } from 'lit-elem-router/public/router';

export class AppHome extends LitElement {

    constructor() {
        super()
        document.addEventListener("searchFired", (event) => {
            this.countries = this.dataSummary["Countries"].filter(country => country.Country
                                                                    .toLowerCase()
                                                                    .startsWith(event.detail.searchValue
                                                                                            .toLowerCase()));
        });
    }

    firstUpdated(_changedProperties) {
        fetch('https://api.covid19api.com/summary')
            .then(response => response.json())
            .then(data => {
                this.dataSummary = data;
                this.countries = data["Countries"];
            })
            .catch((error) => {
                this.dataSummary = {
                    "ID": "",
                    "Message": "",
                    "Global": {
                        "ID": "",
                        "NewConfirmed": 0,
                        "TotalConfirmed": 0,
                        "NewDeaths": 0,
                        "TotalDeaths": 0,
                        "NewRecovered": 0,
                        "TotalRecovered": 0
                    },
                    "Countries": []
                };
                this.countries = [];
                alert("Failed to fetch data: " + error);
            })
    }

    static get is() {
        return 'app-home'
    }

    static get styles() {
        // language=css
        return css`
            :host {
                display: block;
            }

            .home-container {
                padding: 16px 0 16px 0;
                display: flex;
                flex-direction: row;
            }
            
            .dashboard-container {
                flex: 70%;
            }
            
            .country-data {
                display: grid;
                margin-top: 16px;
                margin-bottom: 16px;
                
                grid-template-columns: auto auto auto auto;
                gap: 32px;
            }

            @media (max-width: 1200px) {
                .home-favorites {
                    display: flex;
                    margin-top: 32px;
                    margin-left: 16px;
                    margin-right: 16px;
                }

                .home-container {
                    flex-direction: column-reverse;
                }
            }
            
            @media (max-width: 768px) {
                .country-data {
                    grid-template-columns: auto auto;
                }

                .country-data {
                    margin: 16px;
                }
                
            }

            @media (max-width: 400px) {
                .country-data {
                    grid-template-columns: auto;
                }
                
                .country-data {
                    margin: 16px;
                }
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
        `;
    }

    render() {
        // language=html
        if (this.dataSummary === undefined) {
            return html`<div class="lds-dual-ring"></div>`
        } else {
            return html`
                <div class="home-container">

                    <div>
                        <app-home-favorites class="home-favorites"></app-home-favorites>
                    </div>

                    <div class="dashboard-container">
                        <app-home-dashboard class="home-dashboard"
                                            .globalSummary="${this.dataSummary["Global"]}"></app-home-dashboard>
                    </div>

                </div>

                <div class="country-data">
                    ${this.countries.map(countrySummary => html`
                        
                        <app-country-info-card id="${countrySummary.Slug}"
                                               @click="${this.countryItemClickHandler}"
                                               .countrySummary="${countrySummary}"></app-country-info-card>
                    `)}
                </div>
            `;
        }
    }

    static get properties() {
        return {
            dataSummary: {
                type: Object
            },
            countries: {
                type: Object
            }
        };
    }

    countryItemClickHandler(event) {
        Router.navigate(`/details/${event.target.attributes.id.value}`);
    }

}

customElements.define(AppHome.is, AppHome);