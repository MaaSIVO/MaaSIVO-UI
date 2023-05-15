import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Layout } from '../../src/components';
import { routes } from '../../src/data';

export default {
  title: 'Layout/Layout',
  component: Layout
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => (
  <div
    style={{
      minHeight: '100vh'
    }}>
    <Layout {...args} routes={routes} contentStyle={{ height: '100vh' }} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  title: 'Un Sistema de Transporte Multimodal'
};
