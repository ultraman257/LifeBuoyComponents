/** @type { import('@storybook/react').Preview } */

import lifebuoyTheme from "./lifebuoyTheme.js";

import './style.css'

const preview = {
  parameters: {
    docs: {
      theme: lifebuoyTheme,
      toc: true
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
