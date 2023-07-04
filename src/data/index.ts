import { Anaid, Hector, Paulo, Rafa } from '../assets/img';
import { TeamMemberProps } from '../components';
import { IconOptions } from '../types/icons';

export interface SocialMediaProps {
  link?: string;
  icon: IconOptions;
}

export const maasivoSocialMedia = [
  { link: '', icon: 'Tw' },
  { link: '', icon: 'Fb' },
  { link: '', icon: 'Insta' },
  { link: '', icon: 'Mail' }
] as SocialMediaProps[];

export const routes = [
  { label: 'MaaSIVO', path: '' },
  { label: 'Travit', path: '' },
  { label: 'MaaS', path: '' }
];

export const teamMemberData = [
  {
    img: Anaid,
    name: 'Member Name',
    jobPosition: 'Job Position',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },
  {
    img: Hector,
    name: 'Member Name',
    jobPosition: 'Job Position',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },
  {
    img: Paulo,
    name: 'Member Name',
    jobPosition: 'Job Position',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },
  {
    img: Rafa,
    name: 'Member Name',
    jobPosition: 'Job Position',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  }
] as TeamMemberProps[];
