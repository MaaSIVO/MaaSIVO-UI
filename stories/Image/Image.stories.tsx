import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Image } from '../../src/components';
import { PhoneRoad } from '../../src/assets/img/index';
export default {
  title: 'Basics/Image',
  component: Image,
  argTypes: {
    theme: {
      options: ['light', 'dark'],
      control: { type: 'select' }
    }
  }
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => (
  <div
    style={{
      background: '#2f6c89',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10
    }}
  >
    <Image {...args} />
  </div>
);

export const Basic = Template.bind({});

Basic.args = {
  src: PhoneRoad,
  width: 500,
  height: '100%',
  bordered: true,
  blured: true,
  withShadow: true
};
