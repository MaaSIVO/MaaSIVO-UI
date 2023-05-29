import React, { FC } from 'react';
import { Base } from '../../../types/base';
import styles from './image.module.scss';

export interface ImageProps extends Base {
  src: string;
  width?: string | number;
  height?: string | number;
  bordered?: boolean;
  blured?: boolean;
  withShadow?: boolean;
}

export const Image: FC<ImageProps> = ({
  src,
  width,
  height,
  bordered,
  blured,
  withShadow,
  className
}) => {
  return (
    <div
      className={[
        styles.container,
        bordered && styles.bordered,
        withShadow && styles.shadow,
        className
      ].join(' ')}>
      <img src={src} style={{ width, height }} className={[styles.imgContainer].join(' ')} />
      {blured && (
        <>
          <div className={[styles.topBlur, styles.blurBase].join(' ')} />
          <div className={[styles.bottomBlur, styles.blurBase].join(' ')} />
          <div className={[styles.leftBlur, styles.blurBase].join(' ')} />
          <div className={[styles.rightBlur, styles.blurBase].join(' ')} />
        </>
      )}
    </div>
  );
};

Image.defaultProps = {
  src: '',
  width: '100%',
  height: '100%',
  bordered: false,
  blured: false,
  withShadow: true
};
