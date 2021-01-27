import {LitElement, html, css} from "lit-element";
import { AppHeader } from "./header/app-header";

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
        `;
    }

    render() {
        // language=html
        return html`
            <app-header></app-header>
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