import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon } from '../../src/components';

export default {
  title: 'Icon',
  component: Icon,
  argTypes: {
    theme: {
      options: ['light', 'dark'],
      control: { type: 'select' }
    }
  }
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => (
  <div
    style={{
      background: '#2f6c89',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10
    }}
  >
    <Icon {...args} />
  </div>
);

export const Logo = Template.bind({});
export const Social = Template.bind({});
export const ColorThemed = Template.bind({});

Logo.args = {
  name: 'Maasivo',
  size: 100,
  theme: 'dark'
};

Social.args = {
  name: 'Insta',
  size: 100
};

ColorThemed.args = {
  name: 'Bus',
  size: 100
};
