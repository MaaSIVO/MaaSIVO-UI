import React, { CSSProperties, FC, ReactNode } from 'react';
import Typo from '../Typo';
import { Base } from '../../../types/base';
import Icon, { IconProps } from '../Icon/Icon';
import styles from './whiteCard.module.scss';

export interface WhiteCardProps extends Base {
  title?: string;
  icon?: IconProps;
  children?: ReactNode;
  contentClassName?: string;
  contentStyle?: CSSProperties;
  theme?: '';
  align?: 'left' | 'right' | 'center' | 'justify';
}

const WhiteCard: FC<WhiteCardProps> = ({
  icon,
  align,
  title,
  style,
  children,
  className,
  contentStyle,
  contentClassName
}) => {
  return (
    <div className={[styles.baseCard, className].join(' ')} style={style}>
      {icon && <Icon {...icon} />}
      {children}
    </div>
  );
};
export default WhiteCard;

WhiteCard.defaultProps = {
  children: undefined,
  title: undefined,
  icon: undefined,
  align: 'right'
};
