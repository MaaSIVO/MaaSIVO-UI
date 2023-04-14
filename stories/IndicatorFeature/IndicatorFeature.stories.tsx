import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IndicatorFeature } from '../../src/components';

export default {
  title: 'Features/IndicatorFeature',
  component: IndicatorFeature,
  argTypes: {}
} as ComponentMeta<typeof IndicatorFeature>;

const Template: ComponentStory<typeof IndicatorFeature> = (args) => (
  <div
    style={{
      background: '#000',
      height: '100vh',
      padding: 50
    }}
  >
    <IndicatorFeature {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  children:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  position: 'left'
};
