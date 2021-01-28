import {LitElement, html, css} from "lit-element";

export class AppInfoCard extends LitElement {

    static get is() {
        return 'app-info-card'
    }

    static get styles() {
        // language=css
        return css`
            :host {
                display: flex;
                flex-direction: column;
                align-items: center;
                border-radius: 25px;
                padding-left: 32px;
                padding-right: 32px;
            }

            .icon-container {
                display: flex;
                align-items: center;
                justify-content: space-around;
                height: 100px;
                width: 100px;
                background-color: #fefefe;
                border-radius: 50%;
                margin: 32px;
            }
            
            .info-card-icon {
                width: 50px;
                height: 50px;
            }

            .card-title {
                font-family: Futura;
                font-size: 28px;
                color: #fefefe;
                margin-top: 0;
            }

            .caption {
                font-family: Futura;
                font-size: 16px;
                margin: 0 0 4px;
                color: #fefefe;
                text-decoration: underline;
                text-align: center;
            }

            .number-value {
                font-family: Futura;
                font-size: 24px;
                margin-top: 0;
                color: #fefefe;
                text-align: center;
            }
        `;
    }

    render() {
        // language=html
        return html`
            <div class="icon-container">
                <img class="info-card-icon" src="${this.data.iconUrl}"/>
            </div>
            
            <h4 class="card-title">${this.data.title}</h4>
            
            <div>
                <p class="caption">${this.data.caption1}</p>
                <p class="number-value">${this.data.value1}</p>
            </div>

            <div>
                <p class="caption">${this.data.caption2}</p>
                <p class="number-value">${this.data.value2}</p>
            </div>
        `;
    }

    static get properties() {
        return {
            data: {
                type: Object
            }
        };
    }

}

customElements.define(AppInfoCard.is, AppInfoCard);