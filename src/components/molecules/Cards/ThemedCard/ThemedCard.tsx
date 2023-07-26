import React, { CSSProperties, FC, ReactNode } from 'react';
import { Typo } from '../../../atoms';
import { Base } from '../../../../types/base';
import styles from './themedCard.module.scss';

export interface ThemedCardProps extends Base {
  title?: string;
  shadow?: boolean;
  bordered?: boolean;
  children?: ReactNode;
  contentClassName?: string;
  contentStyle?: CSSProperties;
  align?: 'left' | 'right' | 'center' | 'justify';
}

export const ThemedCard: FC<ThemedCardProps> = ({
  align,
  title,
  style,
  shadow,
  children,
  bordered,
  className,
  contentStyle,
  contentClassName
}) => {
  return (
    <div className={[styles.baseCard, shadow && styles.shadow, className].join(' ')} style={style}>
      <div className={[styles.innerCard, bordered && styles.bordered].join(' ')}>
        {title && (
          <Typo variant="subtitle" className={styles.title} style={{ textAlign: align }}>
            {title}
          </Typo>
        )}
        <div className={contentClassName} style={{ ...contentStyle, textAlign: align }}>
          {children}
        </div>
      </div>
    </div>
  );
};

ThemedCard.defaultProps = {
  bordered: true,
  children: undefined,
  title: undefined,
  align: 'right'
};
