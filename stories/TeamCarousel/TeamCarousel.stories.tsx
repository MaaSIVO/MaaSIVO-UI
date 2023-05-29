import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TeamCarousel } from '../../src/components';
import { teamMemberData } from '../../src/data';

export default {
  title: 'Carousels/Team',
  component: TeamCarousel
} as ComponentMeta<typeof TeamCarousel>;

const Template: ComponentStory<typeof TeamCarousel> = (args) => (
  <TeamCarousel {...args} items={teamMemberData} />
);

export const Default = Template.bind({});

Default.args = {};
