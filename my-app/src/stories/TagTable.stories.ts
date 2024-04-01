import type { Meta, StoryObj } from '@storybook/react';
import { TagTable } from './TagTable';
import { number } from 'prop-types';

const meta = {
  title: 'Example/TagTable',
  component: TagTable,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: [ 'autodocs' ],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {

  },
} satisfies Meta<typeof TagTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    page: 0,
    pageSize: 5,
    API_URL: 'https://api.stackexchange.com/2.3/tags?site=stackoverflow',
  },
};

export const Big: Story = {
  args: {
    page: 0,
    pageSize: 10,
    API_URL: 'https://api.stackexchange.com/2.3/tags?site=stackoverflow',
  },
};

export const Error: Story = {
  args: {
    page: 0,
    pageSize: 5,
    API_URL: 'https://api.stackexchange.com/wrongurl',
  },
};
