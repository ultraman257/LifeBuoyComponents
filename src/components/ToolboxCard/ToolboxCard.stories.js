import { ToolboxCard } from './ToolboxCard.jsx';

export default {
    title: 'LifeBuoy/ToolboxCard',
    component: ToolboxCard,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered'
    }
};

export const Default = {
    args: {
        itemName: 'Demo Content',
        itemDescription:
            "Open this tool to do absolutly notbing as it's currently under development"
    }
};
