import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Typo, FeatureCard } from '../../src/components';

export default {
  title: 'Cards/Feature',
  component: FeatureCard,
  argTypes: {
    title: {
      type: 'string'
    },
    align: {
      options: ['left', 'right', 'center', 'justify'],
      control: { type: 'select' }
    }
  }
} as ComponentMeta<typeof FeatureCard>;

const Template: ComponentStory<typeof FeatureCard> = (args) => (
  <div
    style={{
      background: '#000',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 50,
      gap: 10
    }}>
    <FeatureCard {...args}>
      <Typo>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industrys standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book
      </Typo>
    </FeatureCard>
  </div>
);

export const Basic = Template.bind({});

Basic.args = {
  icon: 'Colaboration'
};
