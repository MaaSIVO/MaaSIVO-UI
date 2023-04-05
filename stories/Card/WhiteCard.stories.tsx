import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { WhiteCard, Typo } from '../../src/components';

export default {
  title: 'Cards/White',
  component: WhiteCard,
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
} as ComponentMeta<typeof WhiteCard>;

const Template: ComponentStory<typeof WhiteCard> = (args) => (
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
    <WhiteCard {...args}>
      <Typo theme="dark">
        Card Example Card Example Card Example Card Example Card Example Card Example Card Example
        Card Example Card Example Card añlsk sñldkañlxda Example Card Example Card Example Card
        Example Card Example aojsclskxmañl Card Example Card Example Card Example Card Example Card
        Example Card Example Card Example Card Example Card Example Card Example
      </Typo>
    </WhiteCard>
  </div>
);

export const Default = Template.bind({});
export const Rounded = Template.bind({});

Default.args = {
  bordered: false,
  title: 'Card Title',
  align: 'justify'
};

Rounded.args = {
  bordered: false,
  title: 'Card Title',
  align: 'justify'
};
