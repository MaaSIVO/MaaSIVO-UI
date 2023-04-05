import React, { FC } from 'react';
import { TypoThemeTypes } from '../../../types/theme';
import { Base } from '../../../types/base';
import styles from './typo.module.scss';

export type typoVariants = 'title' | 'subtitle' | 'content' | 'helperText';

export interface TypoProps extends Base {
  variant?: typoVariants;
  children?: React.ReactNode;
  theme?: TypoThemeTypes;
}

const Typo: FC<TypoProps> = ({ variant, children, theme, className, style }) => {
  return (
    <p
      className={[styles[variant ?? 'content'], styles[theme ?? 'light'], className].join(' ')}
      style={style}
    >
      {children}
    </p>
  );
};

export default Typo;

Typo.defaultProps = {
  variant: 'content',
  theme: 'light'
};
