import React, { FC } from 'react';
import { Base } from '../../../../types/base';
import styles from './divider.module.scss';

export interface DividerProps extends Base {
  width?: string | number;
}

const Divider: FC<DividerProps> = ({ style, className, width }) => {
  return (
    <div className={[styles.divider, className].join('')} style={{ width: width, ...style }} />
  );
};
export default Divider;

Divider.defaultProps = {
  width: '100%'
};
