import { LitElement, html, css } from "lit-element";
import { AppHeader } from "./header/app-header";
import { AppHome } from "./home/app-home";

export class AppRoot extends LitElement {

    constructor() {
        super();
        //localStorage.clear()
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
            
            <app-home></app-home>
        `;
    }

}

customElements.define(AppRoot.is, AppRoot);