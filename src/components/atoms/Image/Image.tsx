import React, { FC } from 'react';
import { Base } from '../../../types/base';
import styles from './image.module.scss';

export interface ImageProps extends Base {
  src: string;
  bordered?: boolean;
  blured?: boolean;
  withShadow?: boolean;
}

export const Image: FC<ImageProps> = ({ src, bordered, blured, withShadow, className }) => {
  return (
    <div
      className={[
        styles.container,
        bordered && styles.bordered,
        withShadow && styles.shadow,
        className
      ].join(' ')}>
      <img src={src} className={styles.imgContainer} />
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
  blured: false,
  bordered: false,
  withShadow: true
};
