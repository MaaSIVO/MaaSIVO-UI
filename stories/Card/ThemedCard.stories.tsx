import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemedCard, Typo } from '../../src/components';

export default {
  title: 'Cards/Themed',
  component: ThemedCard,
  argTypes: {
    title: {
      type: 'string'
    },
    bordered: {
      type: 'boolean'
    },
    align: {
      options: ['left', 'right', 'center', 'justify'],
      control: { type: 'select' }
    }
  }
} as ComponentMeta<typeof ThemedCard>;

const Template: ComponentStory<typeof ThemedCard> = (args) => (
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
    <ThemedCard {...args}>
      <Typo>
        Card Example Card Example Card Example Card Example Card Example Card Example Card Example
        Card Example Card Example Card añlsk sñldkañlxda Example Card Example Card Example Card
        Example Card Example aojsclskxmañl Card Example Card Example Card Example Card Example Card
        Example Card Example Card Example Card Example Card Example Card Example
      </Typo>
    </ThemedCard>
  </div>
);

export const Basic = Template.bind({});
export const Bordered = Template.bind({});

Basic.args = {
  bordered: false,
  title: 'Card Title',
  align: 'jsu'
};

Bordered.args = {};
