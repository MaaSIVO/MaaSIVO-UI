import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SectionHeader } from '../../src/components';

export default {
  title: 'Layout/SectionHeader',
  component: SectionHeader,
  argTypes: {
    title: {
      type: 'string'
    },
    align: {
      control: 'select',
      options: ['left', 'right']
    }
  }
} as ComponentMeta<typeof SectionHeader>;

const Template: ComponentStory<typeof SectionHeader> = (args) => (
  <div
    style={{
      gap: 10,
      padding: 50,
      height: '100vh',
      display: 'flex',
      background: '#000',
      position: 'relative',
      alignItems: 'center',
      flexDirection: 'column'
    }}
  >
    <SectionHeader {...args} />
  </div>
);

export const Left = Template.bind({});
export const Right = Template.bind({});

Left.args = {
  title: 'Un Sistema de Transporte Multimodal'
};

Right.args = {
  title: 'Un Sistema de Transporte Multimodal',
  align: 'right'
};
