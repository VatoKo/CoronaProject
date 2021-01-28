import {LitElement, html, css} from "lit-element";
import { AppInfoCard } from "./app-info-card/app-info-card";

export class AppHomeDashboard extends LitElement {

    constructor() {
        super();
        this.cardsData = {
            data: [
                {
                    title: "Recovered",
                    iconUrl: "data:image/png;base64,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",
                    caption1: "New Recovered",
                    value1: "353346",
                    caption2: "Total Recovered",
                    value2: "55186858",
                },
                {
                    title: "Confirmed",
                    iconUrl: "https://cdn1.iconfinder.com/data/icons/docs-folders/80/Doc_Folder_Data_Document_Case-15-512.png",
                    caption1: "New Confirmed",
                    value1: "398845",
                    caption2: "Total Confirmed",
                    value2: "100086067",
                },
                {
                    title: "Deaths",
                    iconUrl: "https://img.icons8.com/ios/452/death.png",
                    caption1: "New Deaths",
                    value1: "12148",
                    caption2: "Total Deaths",
                    value2: "2154946",
                },
            ]
        };
    }

    static get is() {
        return 'app-home-dashboard'
    }

    static get styles() {
        // language=css
        return css`
            :host {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-left: 8px;
                background-color: #fefefe;
                border-radius: 25px;
                
                box-shadow: 5px 5px 8px #888888;
            }
            
            @media (max-width: 800px) {
                :host {
                    margin: 0 16px 0 16px;
                }

                .dashboard-items-container {
                    /* This is not working !!! */
                    flex-direction: column;
                }
            }
            
            .dashboard-title {
                padding: 0;
                margin: 16px 32px 8px 32px;
                font-family: Futura;
                font-size: 28px;
                color: #303e4c;
            }
            
            .dashboard-items-container {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                
                width: 100%;
            }
            
            .recovery-info-card {
                flex: 1;
                background-color: #06a74c;
                margin: 16px;
            }
            
            .confirmed-info-card {
                flex: 1;
                background-color: #ffbd23;
                margin: 16px;
            }
            
            .deaths-info-card {
                flex: 1;
                background-color: #e22820;
                margin: 16px;
            }
            
        `;
    }

    render() {
        // language=html
        return html`
            <h3 class="dashboard-title">Dashboard</h3>
            
            <div class="dashboard-items-container">
                <app-info-card class="recovery-info-card" .data="${this.cardsData.data[0]}"></app-info-card>

                <app-info-card class="confirmed-info-card" .data="${this.cardsData.data[1]}"></app-info-card>

                <app-info-card class="deaths-info-card" .data="${this.cardsData.data[2]}"></app-info-card>
            </div>
        `;
    }

}

customElements.define(AppHomeDashboard.is, AppHomeDashboard);