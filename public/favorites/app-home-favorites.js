import {LitElement, html, css} from "lit-element";

export class AppHomeFavorites extends LitElement {

    constructor() {
        super();
        this.favoriteCountries = {
            countries: [
                {
                    "Country": "Maldives",
                    "Slug": "maldives",
                    "ISO2": "MV"
                },
                {
                    "Country": "Palau",
                    "Slug": "palau",
                    "ISO2": "PW"
                },
                {
                    "Country": "Papua New Guinea",
                    "Slug": "papua-new-guinea",
                    "ISO2": "PG"
                },
                {
                    "Country": "Saudi Arabia",
                    "Slug": "saudi-arabia",
                    "ISO2": "SA"
                },
                {
                    "Country": "Ukraine",
                    "Slug": "ukraine",
                    "ISO2": "UA"
                },
                {
                    "Country": "Azerbaijan",
                    "Slug": "azerbaijan",
                    "ISO2": "AZ"
                },
                {
                    "Country": "Madagascar",
                    "Slug": "madagascar",
                    "ISO2": "MG"
                }
            ]
        };
    }

    static get is() {
        return 'app-home-favorites'
    }

    static get styles() {
        // language=css
        return css`
            :host {
                display: flex;
                justify-content: space-around;
                flex-direction: column;
                align-items: center;
                margin-right: 8px;
                background-color: #fefefe;
                /*height: 480px;*/
                border-radius: 25px;
                box-shadow: 0 0 8px #888888;
            }

            @media (max-width: 1200px) {
                :host {
                    display: none;
                }
            }
            
            .favorites-title {
                flex: 2%;
                padding: 0;
                margin: 16px 32px 8px 32px;
                font-family: Futura;
                font-size: 28px;
                color: #303e4c;
            }
            
            .favorites-list {
                margin: 8px 32px 16px 32px;
                flex: 98%;
            }
            
            .favorites-list-item {
                color: #ffa400;
                padding: 4px;
                cursor: pointer;
                font-family: Futura;
            }
            
            .favorites-list-item:hover {
                color: #dd9e30;
            }
        `;
    }

    render() {
        // language=html
        return html`
            <h3 class="favorites-title">Favorites</h3>
            <ul class="favorites-list">
                ${this.favoriteCountries.countries.map(country => html`<li id="${country.Slug}"
                                                                           class="favorites-list-item"
                                                                           @click="${this.itemClickHandler}">${country.Country}</li>`)}
            </ul>
        `;
    }

    static get properties() {
        return {
            favoriteCountries: {
                type: Object
            }
        };
    }

    itemClickHandler(event) {
        alert(event.target.attributes.id.value)
    }

}

customElements.define(AppHomeFavorites.is, AppHomeFavorites);