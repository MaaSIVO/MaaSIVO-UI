import React, { FC, useEffect, useRef, useState } from 'react';
import Typo from '../../../atoms/Typo';
import { Base } from '../../../../types/base';
import Icon, { IconProps } from '../../../atoms/Icon/Icon';
import styles from './RoundedCard.module.scss';

export interface RoundedCardProps extends Base {
  theme?: '';
  title?: string;
  icon?: IconProps;
}

const RoundedCard: FC<RoundedCardProps> = ({ icon, title, style, className }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    if (divRef.current) {
      const divWidth = divRef.current.offsetWidth;
      setCardWidth(divWidth);
    }
  }, [divRef.current?.offsetWidth]);

  return (
    <div
      ref={divRef}
      className={[styles.baseCard, className].join(' ')}
      style={{ height: cardWidth, ...style }}
    >
      {icon && <Icon {...icon} size="100%" />}
      {title && (
        <Typo theme="themedColor" className={styles.title}>
          {title}
        </Typo>
      )}
    </div>
  );
};
export default RoundedCard;

RoundedCard.defaultProps = {
  title: undefined,
  icon: undefined
};
