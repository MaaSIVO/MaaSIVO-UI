import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RoundedCard } from '../../src/components';

export default {
  title: 'Cards/White',
  component: RoundedCard,
  argTypes: {
    title: {
      type: 'string'
    }
  }
} as ComponentMeta<typeof RoundedCard>;

const Template: ComponentStory<typeof RoundedCard> = (args) => (
  <div
    style={{
      background: '#000',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 50,
      gap: 10
    }}
  >
    <RoundedCard
      {...args}
      icon={{
        name: 'Colaboration'
      }}
    />
  </div>
);

export const Rounded = Template.bind({});

Rounded.args = {
  title: 'Colaboration'
};
