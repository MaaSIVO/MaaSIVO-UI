import { Person1, Person2, Person3, Person4 } from '../assets/img';
import { RoundedCardProps, TeamMemberProps } from '../components';
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
    img: Person1,
    name: 'Member Name',
    jobPosition: 'Job Position',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },
  {
    img: Person2,
    name: 'Member Name',
    jobPosition: 'Job Position',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },
  {
    img: Person3,
    name: 'Member Name',
    jobPosition: 'Job Position',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },
  {
    img: Person4,
    name: 'Member Name',
    jobPosition: 'Job Position',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  }
] as TeamMemberProps[];

export const values = [
  {
    title: 'Excellence',
    icon: {
      name: 'Work'
    }
  },
  {
    title: 'Sustentabilidad',
    icon: {
      name: 'Sustentabillity'
    }
  },
  {
    title: 'Innovación',
    icon: {
      name: 'Idea2'
    }
  },
  {
    title: 'Pasión',
    icon: {
      name: 'Heart'
    }
  },
  {
    title: 'Colaboración',
    icon: {
      name: 'Colaboration'
    }
  }
] as RoundedCardProps[];
