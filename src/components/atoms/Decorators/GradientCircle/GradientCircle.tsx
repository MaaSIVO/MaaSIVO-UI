import React, { FC } from 'react';
import { Base } from '../../../../types/base';
import styles from './GradientCircle.module.scss';

export interface GradientCircleProps extends Base {
  size?: number | string;
  color?: string;
}

export const GradientCircle: FC<GradientCircleProps> = ({ style, className, size, color }) => {
  return (
    <div
      className={[styles.gradientCircle, className].join(' ')}
      style={{
        ...style,
        width: size,
        height: size
      }}
    />
  );
};

GradientCircle.defaultProps = {
  size: 200,
  color: undefined
};
