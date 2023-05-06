import React, { FC } from 'react';
import { Base } from '../../../../types/base';
import styles from './shapeIndicator.module.scss';

export interface ShapeIndicatorProps extends Base {
  position?: 'left' | 'right';
}

export const ShapeIndicator: FC<ShapeIndicatorProps> = ({ style, className, position }) => {
  return (
    <div
      className={[styles.indicatorContainer, position === 'right' && styles.right, className].join(
        ' '
      )}
      style={style}
    >
      <div className={styles.indicatorLine} />
      <div className={[styles.indicatorCircle, styles.circleLeft].join(' ')} />
      <div className={[styles.indicatorCircle, styles.circleRight].join(' ')} />
    </div>
  );
};

ShapeIndicator.defaultProps = {
  position: 'left'
};
