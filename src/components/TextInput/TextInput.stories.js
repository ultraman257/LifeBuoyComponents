import { TextInput } from './TextInput.jsx';
import { fn } from '@storybook/test';

export default {
  title: 'LifeBuoy/TextInput',
  component: TextInput,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  }
};

export const Prefilled = {
  args:{
    value: 'Demo Content',
    label: 'Demo'
  },
};

export const Placeholder = {
  args:{
    placeholder: 'Enter Text Here',
    label: 'Placeholder Demo'
  }
}

export const HelpText = {
  args:{
    placeholder: 'Enter Text Here',
    label: 'Placeholder Demo',
    helpText: 'This field has some text that the user may find helpful.'
  }
}

export const ErrorText = {
  args:{
    placeholder: 'Enter Text Here',
    label: 'Placeholder Demo',
    errorText: 'This field contains an error of some kind.'
  }
}

export const ErrorAndHelpText = {
  args:{
    placeholder: 'Enter Text Here',
    label: 'Placeholder Demo',
    helpText: 'This field has some text that the user may find helpful.',
    errorText: 'This field contains an error of some kind.'
  }
}

