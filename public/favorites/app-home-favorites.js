import {LitElement, html, css} from "lit-element";

export class AppHomeFavorites extends LitElement {

    constructor() {
        super();
        this.favoriteCountries = JSON.parse(localStorage.getItem("favorites")) ?? [];

        document.addEventListener("favoritesFired", () => {
            this.favoriteCountries = JSON.parse(localStorage.getItem("favorites"));
        });
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
                border-radius: 25px;
                box-shadow: 0 0 8px #888888;
            }

            @media (max-width: 1200px) {
                :host {
                    /*display: none;*/
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
            
            .empty-favorites-icon {
                width: 40px;
                height: 40px;
                padding: 16px;
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
            
            .favorite-item-a {
                color: #ffa400;
                cursor: pointer;
                font-family: Futura;
                text-decoration: none;
            }
            
            .favorites-list-item:hover {
                color: #dd9e30;
            }
            
            .favorite-item-a:hover {
                color: #dd9e30;
            }
        `;
    }

    render() {
        // language=html
        return html`
            <h3 class="favorites-title">Favorites</h3>
            
            ${
                this.favoriteCountries.length === 0 
                ? html`
                    <img class="empty-favorites-icon"
                         src="https://cdn1.iconfinder.com/data/icons/pixel-perfect-at-16px-volume-1/16/5082-512.png"
                         alt=""/>
                `
                : html`
                    <ul class="favorites-list">
                        ${this.favoriteCountries.map(country => html`
                            <li id="${country["slug"]}"
                                class="favorites-list-item">
                                <a href="/details/${country["slug"]}" class="favorite-item-a">${country["country"]}</a>
                            </li>`)}
                    </ul>
                `
            }
        `;
    }

    static get properties() {
        return {
            favoriteCountries: {
                type: Object
            }
        };
    }

}

customElements.define(AppHomeFavorites.is, AppHomeFavorites);