import { Button } from './Button.jsx';
import { fn } from '@storybook/test';
import {bool, string} from "prop-types";

export default {
  title: 'LifeBuoy/Button',
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
    onClick: fn()
  },
};

export const Primary = {
  args:{
    content: "Button"
  },
};

export const Confetti = {
  args:{
    content: "Button",
    hasConfetti: true
  },
};

