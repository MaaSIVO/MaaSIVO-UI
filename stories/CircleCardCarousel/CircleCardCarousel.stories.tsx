import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CircleCardCarousel } from '../../src/components';
import { values } from '../../src/data';

export default {
  title: 'Carousels/CircleCard',
  component: CircleCardCarousel
} as ComponentMeta<typeof CircleCardCarousel>;

const Template: ComponentStory<typeof CircleCardCarousel> = (args) => (
  <div
    style={{
      padding: 50,
      minHeight: '100vh',
      background: '#000',
      position: 'relative'
    }}>
    <CircleCardCarousel {...args} items={values} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  title: 'Un Sistema de Transporte Multimodal'
};
