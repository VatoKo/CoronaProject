import {LitElement, html, css} from "lit-element";
import { AppHeader } from "./header/app-header";
import { AppHomeFavorites} from "./favorites/app-home-favorites";
import { AppHomeDashboard } from "./dashboard/app-home-dashboard";

export class AppRoot extends LitElement {

    constructor() {
        super()
        
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
                flex: 1;
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
                    <app-home-dashboard class="home-dashboard"></app-home-dashboard>
                </div>
                
                
            </div>
            
        `;
    }

    // static get properties() {
    //     return {
    //         text: {
    //             type: String
    //         },
    //         visible: {
    //             type: Boolean,
    //             reflect: true
    //         }
    //     };
    // }

    // log() {
    //     this.dispatchEvent(new CustomEvent("log", {
    //         details: {
    //
    //         }
    //     }))
    // }

}

customElements.define(AppRoot.is, AppRoot);