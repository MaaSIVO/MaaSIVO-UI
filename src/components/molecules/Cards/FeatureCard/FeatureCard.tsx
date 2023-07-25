import React, { FC } from 'react';
import { IconOptions } from '../../../../types';
import { ThemedCard } from '../ThemedCard';
import { RoundedCard } from '../RoundedCard';
import styles from './FeatureCard.module.scss';
export interface FeatureCardProps {
  children?: React.ReactNode;
  icon: IconOptions;
}

export const FeatureCard: FC<FeatureCardProps> = ({ children, icon }) => {
  return (
    <ThemedCard className={styles.feature}>
      <RoundedCard icon={{ name: icon }} className={styles.feature__icon} />
      {children}
    </ThemedCard>
  );
};

FeatureCard.defaultProps;
