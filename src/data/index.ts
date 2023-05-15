import { RoundedCardProps } from '../components';
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

export const values = [
  ,  {
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
  },

] as RoundedCardProps[];
