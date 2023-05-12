import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GradientCircle } from '../../src/components';

export default {
  title: 'Decorators/GradientCircle',
  component: GradientCircle,
  argTypes: {}
} as ComponentMeta<typeof GradientCircle>;

const Template: ComponentStory<typeof GradientCircle> = (args) => (
  <div
    style={{
      background: '#000',
      height: '100vh',
      padding: 50
    }}>
    <GradientCircle {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  size: 500
};
