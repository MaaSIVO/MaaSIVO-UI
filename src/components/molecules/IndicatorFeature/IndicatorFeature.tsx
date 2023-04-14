import React, { FC } from 'react';
import styles from './indicatorFeature.module.scss';
import { Base } from '../../../types/base';
import { ShapeIndicator, Typo } from '../../atoms';

export interface IndicatorFeatureProps extends Base {
  children: React.ReactNode;
  position?: 'left' | 'right';
  contentWidth?: string | number;
  contentStyle?: React.CSSProperties;
  contentClassName?: string;
}

const IndicatorFeature: FC<IndicatorFeatureProps> = ({
  style,
  className,
  children,
  position,
  contentWidth,
  contentStyle,
  contentClassName
}) => {
  return (
    <div
      className={[styles.featureContainer, position === 'right' && styles.right, className].join(
        ' '
      )}
      style={style}
    >
      <Typo style={{ ...contentStyle, width: contentWidth }} className={contentClassName}>
        {children}
      </Typo>
      <ShapeIndicator position={position} />
    </div>
  );
};
export default IndicatorFeature;

IndicatorFeature.defaultProps = {
  children: null,
  position: 'left',
  contentWidth: '50%'
};
