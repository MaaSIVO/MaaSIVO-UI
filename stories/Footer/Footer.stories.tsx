import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Footer } from '../../src/components';

export default {
  title: 'Layout/Footer',
  component: Footer
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => (
  <div
    style={{
      padding: 50,
      minHeight: '100vh',
      background: '#000',
      position: 'relative'
    }}
  >
    <Footer {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  title: 'Un Sistema de Transporte Multimodal'
};
