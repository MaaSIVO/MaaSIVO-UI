import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from '../../src/components';
import { routes } from '../../src/data';

export default {
  title: 'Layout/Header',
  component: Header
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
  <div
    style={{
      padding: 50,
      minHeight: '100vh',
      background: '#000',
      position: 'relative'
    }}>
    <Header {...args} routes={routes} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  title: 'Innovación en Movimiento'
};
