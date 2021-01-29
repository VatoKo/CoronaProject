import { LitElement, html, css } from "lit-element";
import { AppHeader } from "./header/app-header";
import { AppHomeFavorites} from "./favorites/app-home-favorites";
import { AppHomeDashboard } from "./dashboard/app-home-dashboard";
import { AppCountryInfoCard } from "./country-data/app-country-info-card";

export class AppRoot extends LitElement {

    constructor() {
        super()
        fetch('https://api.covid19api.com/summary')
            .then(response => response.json())
            .then(data => this.dataSummary = data);

        document.addEventListener("searchFired", this.searchHandler);
    }

    searchHandler(event) {
        alert(event.detail.searchValue)
    }

    static get is() {
        return 'app-root'
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
            
            .home-favorites {
                
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
        `;
    }

    render() {
        // language=html
        return html`
            <app-header></app-header>
            
            <div class="home-container">
                
                <div>
                    <app-home-favorites class="home-favorites"></app-home-favorites>
                </div>
                
                <div class="dashboard-container">
                    <app-home-dashboard class="home-dashboard" .globalSummary="${this.dataSummary["Global"]}"></app-home-dashboard>
                </div>
                
            </div>

            
            <div class="country-data">
                ${this.dataSummary["Countries"].map(countrySummary => html`<app-country-info-card id="${countrySummary.Slug}"
                                                                                                  @click="${this.countryItemClickHandler}"
                                                                                                  .countrySummary="${countrySummary}"></app-country-info-card>`)}
            </div>
            
        `;
    }

    static get properties() {
        return {
            dataSummary: {
                type: Object
            },
            countriesShowing: {
                type: Object
            }
        };
    }

    countryItemClickHandler(event) {
        alert(event.target.attributes.id.value)
    }

    // log() {
    //     this.dispatchEvent(new CustomEvent("log", {
    //         details: {
    //
    //         }
    //     }))
    // }

}

customElements.define(AppRoot.is, AppRoot);