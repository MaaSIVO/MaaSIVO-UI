import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Typo } from '../../src/components';

export default {
  title: 'Basics/Typo',
  component: Typo
} as ComponentMeta<typeof Typo>;

const Template: ComponentStory<typeof Typo> = (args) => (
  <div
    style={{
      background: '#2f6c89',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10
    }}
  >
    <Typo {...args} />
    <Typo {...args} theme="dark" />
    <Typo {...args} theme="themedColor" />
  </div>
);

export const Title = Template.bind({});
export const Subtitle = Template.bind({});
export const Content = Template.bind({});
export const HelperText = Template.bind({});

Title.args = {
  variant: 'title',
  children: 'Title Example'
};

Subtitle.args = {
  variant: 'subtitle',
  children: 'Subtitle Example'
};

Content.args = {
  children: 'Content Example'
};

HelperText.args = {
  variant: 'helperText',
  children: 'Helper Text Example'
};
