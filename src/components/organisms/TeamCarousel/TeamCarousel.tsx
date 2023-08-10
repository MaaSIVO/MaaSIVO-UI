import React, { FC } from 'react';
import { Base } from '../../../types/base';
import styles from './TeamCarousel.module.scss';
import { Divider, Icon, Image, Typo } from '../../atoms';
import { useGetCarouselStyles } from '../../../hooks/useGetCarouselStyles';

export interface TeamMemberProps {
  img: string;
  name: string;
  jobPosition: string;
  description: React.ReactNode;
}

export interface TeamCarouselProps extends Base {
  items: TeamMemberProps[];
}
export const TeamCarousel: FC<TeamCarouselProps> = ({ className, style, items }) => {
  const { itemStyles, handleNext, handlePrev, activeIndex } = useGetCarouselStyles(items.length);

  return (
    <div className={styles.container}>
      <div className={[styles.carousel, className].join(' ')} style={style}>
        {items.map((item, index) => (
          <div key={item.name} className={styles.carousel__item} style={itemStyles[index]}>
            <Image
              src={item.img}
              className={styles.carousel__teamImage}
              bordered
              withShadow={false}
            />
          </div>
        ))}
        <div className={styles.carousel__arrows}>
          <Icon
            name="DoubleArrow"
            size={25}
            className={[styles.carousel__prev].join(' ')}
            onClick={handlePrev}
          />
          <Icon name="DoubleArrow" size={25} onClick={handleNext} />
        </div>
      </div>
      <div className={styles.carousel__info}>
        <div className={styles.carousel__topInfo}>
          <div className={styles.carousel__teamName}>
            <Typo style={{ fontWeight: 'bold' }}>{items[activeIndex].name}</Typo>
          </div>
          <Typo variant="helperText">{items[activeIndex].jobPosition}</Typo>
        </div>
        <Divider className={styles.carousel__divider} />
        <Typo variant="helperText">{items[activeIndex].description}</Typo>
      </div>
    </div>
  );
};
