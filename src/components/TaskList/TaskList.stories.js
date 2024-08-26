import { TaskList } from './TaskList.jsx';
import { fn } from '@storybook/test';

export default {
  title: 'LifeBuoy/TaskList',
  component: TaskList,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  }
};

export const SimpleList = {
  args:{
    tasks:[{
      "name": "Create List Design",
      "id": "537cbdec-59a0-4395-9b86-819710e49f15"
    }, {
      "name": "Make functional backend",
      "id": "acf1fcd8-cb50-47ba-86d7-29e24818eb5c"
    }]
  },
};

export const DetailedList = {
  args:{
    tasks:[{
      "name": "Create List Design",
      "id": "537cbdec-59a0-4395-9b86-819710e49f15",
      "moreInfo": "Needs Actions",
    }, {
      "name": "Make functional backend",
      "moreInfo": "Awaiting Response",
      "id": "acf1fcd8-cb50-47ba-86d7-29e24818eb5c"
    }]
  },
};

export const VariedList = {
  args:{
    tasks:[{
      "name": "Create List Design",
      "id": "537cbdec-59a0-4395-9b86-819710e49f15",
    }, {
      "name": "Make functional backend",
      "id": "acf1fcd8-cb50-47ba-86d7-29e24818eb5c"
    },
      {
        "name": "Create List Design",
        "id": "537cbdec-59a0-4395-9b86-819710e49f15",
        "moreInfo": "Overdue by 7 days",
      },
      {
        "name": "Create List Design",
        "id": "537cbdec-59a0-4395-9b86-819710e49f15",
        "moreInfo": "12/17 Complete",
      },
      {
        "name": "Make functional backend",
        "id": "acf1fcd8-cb50-47ba-86d7-29e24818eb5c"
      }]
  },
};

export const HeadingSimpleList = {
  args:{
    heading: 'Simple List',
    tasks:[{
      "name": "Create List Design",
      "id": "537cbdec-59a0-4395-9b86-819710e49f15"
    }, {
      "name": "Make functional backend",
      "id": "acf1fcd8-cb50-47ba-86d7-29e24818eb5c"
    }]
  },
};

export const HeadingVariedList = {
  args:{
    heading: 'Default List',
    tasks:[{
      "name": "Create List Design",
      "id": "537cbdec-59a0-4395-9b86-819710e49f15",
    }, {
      "name": "Make functional backend",
      "id": "acf1fcd8-cb50-47ba-86d7-29e24818eb5c"
    },
      {
        "name": "Create List Design",
        "id": "537cbdec-59a0-4395-9b86-819710e49f15",
        "moreInfo": "Overdue by 7 days",
      },
      {
        "name": "Create List Design",
        "id": "537cbdec-59a0-4395-9b86-819710e49f15",
        "moreInfo": "12/17 Complete",
      },
      {
        "name": "Make functional backend",
        "id": "acf1fcd8-cb50-47ba-86d7-29e24818eb5c"
      }]
  },
};