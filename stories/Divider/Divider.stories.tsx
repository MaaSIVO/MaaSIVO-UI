import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Divider } from '../../src/components';

export default {
  title: 'Decorators/Divider',
  component: Divider,
  argTypes: {}
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => (
  <div
    style={{
      background: '#000',
      height: '100vh',
      padding: 50
    }}
  >
    <Divider {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {};
