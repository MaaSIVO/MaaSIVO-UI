import React, { FC } from 'react';
import { RoundedCard, RoundedCardProps } from '../../molecules';
import { Base } from '../../../types/base';
import styles from './CircleCardCarousel.module.scss';

export interface CircleCardCarouselProps extends Base {
  items: RoundedCardProps[];
}

export const CircleCardCarousel: FC<CircleCardCarouselProps> = ({ className, style, items }) => {
  return (
    <div className={styles.carousel}>
      {items.map((item) => (
        <RoundedCard title={item.title} icon={item.icon} size={150} />
      ))}
    </div>
  );
};
