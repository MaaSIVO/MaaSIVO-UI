import React, { FC, useEffect, useRef, useState } from 'react';
import { Base } from '../../../../types/base';
import styles from './RoundedCard.module.scss';
import { Icon, IconProps, Typo } from '../../../atoms';

export interface RoundedCardProps extends Base {
  theme?: '';
  title?: string;
  icon?: IconProps;
}

export const RoundedCard: FC<RoundedCardProps> = ({ icon, title, style, className }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    if (divRef.current) {
      const divWidth = divRef.current.offsetWidth;
      setCardWidth(divWidth);
    }
  }, []);
  return (
    <div
      ref={divRef}
      className={[styles.baseCard, className].join(' ')}
      style={{ height: cardWidth, maxHeight: cardWidth, ...style }}
    >
      {icon && <Icon {...icon} />}
      {title && (
        <Typo theme="themedColor" className={styles.title}>
          {title}
        </Typo>
      )}
    </div>
  );
};

RoundedCard.defaultProps = {
  title: undefined,
  icon: undefined
};
