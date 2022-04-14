import { LitElement, html, css } from "lit";

export class JBtn extends LitElement {
  static properties = {
    text: {},
  };

  static styles = css`
    button {
      width: 100px;
      height: 40px;
      border-radius: 5px;
      border: 0px;
      box-shadow: 0px 2px 2px 0px;
    }
  `;

  constructor() {
    super();

    this.text = "btn";
  }

  _clicked() {
    console.log(`clicked ${this.text}`);
  }

  render() {
    return html`<button @click=${this._clicked}>${this.text}</button>`;
  }
}

customElements.define("j-btn", JBtn);
