import React, { FC } from 'react';
import { Icon } from '../../atoms';
import { Base } from '../../../types/base';
import styles from './CircleCardCarousel.module.scss';
import { RoundedCard, RoundedCardProps } from '../../molecules';
import { useHorizontalScroll } from '../../../hooks/useHorizontalScroll';
import { useWindowSize } from '../../../hooks';

export interface CircleCardCarouselProps extends Base {
  items: RoundedCardProps[];
}

export const CircleCardCarousel: FC<CircleCardCarouselProps> = ({ className, style, items }) => {
  const { scrollRef, handleOnMouseLeave, onMouseEnterPrev, onMouseEnterNext } =
    useHorizontalScroll();

  const { width } = useWindowSize();
  const isMobile = width <= 576;

  return (
    <div className={[styles.carousel, className].join(' ')} style={style}>
      <div ref={scrollRef} className={styles.carousel__scroll}>
        {items.map((item) => (
          <RoundedCard key={item.title} title={item.title} icon={item.icon} size={150} />
        ))}
      </div>
      <div className={styles.carousel__arrows}>
        <div
          onMouseLeave={handleOnMouseLeave}
          onMouseEnter={onMouseEnterPrev}
          className={styles.carousel__arrow}>
          <Icon
            name="DoubleArrow"
            size={isMobile ? 20 : 25}
            className={[styles.carousel__prev].join(' ')}
          />
        </div>
        <div
          onMouseLeave={handleOnMouseLeave}
          onMouseEnter={onMouseEnterNext}
          className={styles.carousel__arrow}>
          <Icon name="DoubleArrow" size={isMobile ? 20 : 25} />
        </div>
      </div>
    </div>
  );
};
