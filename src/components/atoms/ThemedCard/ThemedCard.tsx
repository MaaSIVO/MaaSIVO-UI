import React, { CSSProperties, FC, ReactNode } from 'react';
import Typo from '../Typo';
import { Base } from '../../../types/base';
import styles from './themedCard.module.scss';

export interface ThemedCardProps extends Base {
  title?: string;
  bordered?: boolean;
  children?: ReactNode;
  contentClassName?: string;
  contentStyle?: CSSProperties;
  align?: 'left' | 'right' | 'center' | 'justify';
}

const ThemedCard: FC<ThemedCardProps> = ({
  align,
  title,
  style,
  children,
  bordered,
  className,
  contentStyle,
  contentClassName
}) => {
  return (
    <div className={[styles.baseCard, className].join(' ')} style={style}>
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
export default ThemedCard;

ThemedCard.defaultProps = {
  bordered: true,
  children: undefined,
  title: undefined,
  align: 'right'
};
