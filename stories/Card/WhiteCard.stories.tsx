import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Typo, WhiteCard } from '../../src/components';

export default {
  title: 'Cards/White',
  component: WhiteCard,
  argTypes: {
    title: {
      type: 'string'
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
      <Typo>
        Card Example Card Example Card Example Card Example Card Example Card Example Card Example
        Card Example Card Example Card añlsk sñldkañlxda Example Card Example Card Example Card
        Example Card Example aojsclskxmañl Card Example Card Example Card Example Card Example Card
        Example Card Example Card Example Card Example Card Example Card Example
      </Typo>
    </WhiteCard>
  </div>
);

export const Basic = Template.bind({});

Basic.args = {
  title: 'Colaboration'
};
