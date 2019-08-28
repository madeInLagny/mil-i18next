import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `mil-i18next`
 * Javascript i18next mixin for webcomponents
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class MilI18next extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'mil-i18next',
      },
    };
  }
}

window.customElements.define('mil-i18next', MilI18next);
