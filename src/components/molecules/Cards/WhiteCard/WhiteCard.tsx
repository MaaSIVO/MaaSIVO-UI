import React, { CSSProperties, FC, ReactNode } from 'react';
import { Typo } from '../../../atoms';
import { Base } from '../../../../types/base';
import styles from './whiteCard.module.scss';

export interface WhiteCardProps extends Base {
  title?: string;
  children?: ReactNode;
  contentClassName?: string;
  contentStyle?: CSSProperties;
  align?: 'left' | 'right' | 'center' | 'justify';
}

const WhiteCard: FC<WhiteCardProps> = ({
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
      {title && (
        <Typo
          variant="subtitle"
          theme="themedColor"
          className={styles.title}
          style={{ textAlign: align }}
        >
          {title}
        </Typo>
      )}
      <div className={contentClassName} style={{ ...contentStyle, textAlign: align }}>
        <Typo theme="themedColor">{children}</Typo>
      </div>
    </div>
  );
};
export default WhiteCard;

WhiteCard.defaultProps = {
  children: undefined,
  title: undefined,
  align: 'right'
};
