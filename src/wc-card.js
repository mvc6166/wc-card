import { LitElement, html, css } from 'lit';

const icon = new URL('../assets/user-icon.jpg', import.meta.url).href;

class WcCard extends LitElement {
  static properties = {
    header: {
      type: String
    },
    title: {
      type: String
    },
    description:{
      type: String
    }
  }

  static styles = css`
  .dupe:hover {
    background-color: black;
    color: white;
  }
  
  .dupe:focus {
    background-color: black;
    color: white;
  }
  
  .layout {
    display: flex;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    grid-auto-rows: minmax(100px, auto);
  }
  
  .card {
    border: 10px solid;
    margin: auto;
    width: 500px;
    padding: 10px;
    text-align: center;
    background-color: cyan;
  }
  
  @media screen and (max-width: 800px) {
    .details {
      display: none;
    }
  }
  
  @media screen and (max-width: 500px) {
    .card {
      width = 100%;
    }
  }
  `;

  constructor() {
    super();
    this.header = 'My app';
    this.title = 'This is the title of the card';
    this.description = "Description of the image above. Lorem ipsum dolor sit amet"
  }

  render() {
    return html`  
      <div class="layout">
        <div class="card">

          <img src="${icon}"/>
          <h2>${this.title}</h2>
          <p>${this.description}</p>

          <details class="details">
            <summary>This is a summary</summary>
            <div>
              <ul>
                <li>Line one</li>
                <li>Line two</li>
              </ul>
            </div>
          </details>
          
        </div>
      </div>
    `;
  }
}

customElements.define('wc-card', WcCard);