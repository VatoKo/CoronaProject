import {LitElement, html, css} from "lit-element";

export class AppHeader extends LitElement {

    static get is() {
        return 'app-header'
    }

    static get styles() {
        // language=css
        return css`
            :host {
                display: block;
            }
            
            .header {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
                
                background-color: #303e4c;
                
            }

            @media (max-width: 800px) {
                .header {
                    flex-direction: column;
                }

                .header-logo {
                    display: none;
                }
            }
            
            .header-logo {
                padding: 16px;
                width: 72px;
                height: 72px;
            }
            
            .header-title {
                color: #ffa400;
                alignment: center;
                font-family: Futura;
                font-size: 32px;
            }
            
            .search-container {
                padding: 16px;
            }
            
            .search-input {
                color: #ffa400;
                padding: 10px;
                font-size: 16px;
                border: 1px solid #2a3642;
                float: left;
                background: #303e4c;
                border-radius: 25px 0px 0px 25px;
            }

            ::placeholder {
                color: #ffa400;
                opacity: 1;
            }
            
            
            .search-button {
                padding: 10px;
                background: #ffa400;
                border: 1px solid #2a3642;
                border-left: none;
                cursor: pointer;
                border-radius: 0px 25px 25px 0px;
            }
            
            .search-icon {
                width: 16px;
                height: 16px;
            }
            
        `;
    }

    render() {
        // language=html
        return html`
            <div class="header">
                <img class="header-logo" src="https://image.flaticon.com/icons/png/512/2739/2739948.png" alt=""/>
                
                <p class="header-title">Corona Statistics</p>
                
                <div class="search-container">
                    <input id="search-input-id" class="search-input" type="text" placeholder="Search..."/>
                    <button class="search-button" @click="${this.searchHandler}">
                        <img class="search-icon"src="https://cdn3.iconfinder.com/data/icons/video-player-1/154/search-find-magnifier-function-player-keyword-name-512.png" alt=""/>
                    </button>
                </div>
                
            </div>
        `;
    }

    searchHandler() {
        let searchValue = this.shadowRoot.getElementById("search-input-id").value
        this.shadowRoot.getElementById("search-input-id").value = ""
        alert(searchValue)
    }
}

customElements.define(AppHeader.is, AppHeader);