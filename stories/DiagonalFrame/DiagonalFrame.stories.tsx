import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DiagonalFrame } from '../../src/components';

export default {
  title: 'Decorators/DiagonalFrame',
  component: DiagonalFrame,
  argTypes: {}
} as ComponentMeta<typeof DiagonalFrame>;

const Template: ComponentStory<typeof DiagonalFrame> = (args) => (
  <div
    style={{
      background: '#000',
      height: '100vh',
      padding: 50
    }}>
    <DiagonalFrame {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  size: 500
};
