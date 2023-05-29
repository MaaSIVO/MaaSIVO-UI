import React, { FC } from 'react';
import { Base } from '../../../../types/base';
import styles from './RoundedCard.module.scss';
import { Icon, IconProps, Typo } from '../../../atoms';

export interface RoundedCardProps extends Base {
  title?: string;
  icon?: IconProps;
  size?: number;
}

export const RoundedCard: FC<RoundedCardProps> = ({ icon, title, style, className, size }) => {
  return (
    <div className={styles.rounded}>
      <div
        className={[styles.rounded__baseCard, className].join(' ')}
        style={{ height: size, width: size, minWidth: size, ...style }}>
        {icon && <Icon {...icon} />}
      </div>
      {title && (
        <div className={styles.rounded__titleContainer}>
          <Typo theme="themedColor" className={styles.rounded__title}>
            {title}
          </Typo>
        </div>
      )}
    </div>
  );
};

RoundedCard.defaultProps = {
  title: undefined,
  icon: undefined,
  size: 100
};
