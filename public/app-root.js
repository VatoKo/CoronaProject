import { LitElement, html, css } from "lit-element";
import { AppHeader } from "./header/app-header";
import { AppHome } from "./home/app-home";
import { AppCountryDetails } from "./country-details/app-country-details";
import 'lit-elem-router/public/lit-router';
import 'lit-elem-router/public/lit-route';

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
            
            <lit-router>
                <lit-route path="/" tag-name="app-home"></lit-route>
                <lit-route path="/details/:slug" tag-name="app-country-details"></lit-route>
            </lit-router>
        `;
    }

}

customElements.define(AppRoot.is, AppRoot);