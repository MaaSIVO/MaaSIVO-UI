import React, { FC } from 'react';
import { IconOptions } from '../../../../types';
import { ThemedCard, ThemedCardProps } from '../ThemedCard';
import { RoundedCard } from '../RoundedCard';
import styles from './FeatureCard.module.scss';
import { useWindowSize } from '../../../../hooks/useWindowSize';
export interface FeatureCardProps extends ThemedCardProps {
  children?: React.ReactNode;
  icon: IconOptions;
}

export const FeatureCard: FC<FeatureCardProps> = ({
  children,
  icon,
  style,
  className,
  ...props
}) => {
  const { width } = useWindowSize();
  const isMobile = width <= 768;

  return (
    <div className={styles.feature__container}>
      <ThemedCard
        {...props}
        align="center"
        style={style}
        className={[styles.feature, className].join(' ')}
        contentClassName={styles.feature__content}>
        <RoundedCard
          icon={{ name: icon }}
          size={isMobile ? 100 : 120}
          className={styles.feature__icon}
        />
        {children}
      </ThemedCard>
    </div>
  );
};

FeatureCard.defaultProps;
