import { html } from 'lit';
import '../src/wc-card.js';

export default {
  title: 'WcCard',
  component: 'wc-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <wc-card
      style="--wc-card-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </wc-card>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
