import React, { FC } from 'react';
import { useTypoStyles } from './typo-styles';

export type typoTheme = 'light' | 'dark';
export type typoVariants = 'title' | 'subtitle' | 'content' | 'helperText';

export interface TypoProps {
  variant?: typoVariants;
  children?: React.ReactNode;
  theme?: typoTheme;
}

const Typo: FC<TypoProps> = ({ variant, children, theme }) => {
  const styles = useTypoStyles({ variant, theme });

  return <p className={[styles.typoBase, styles.typoStyle].join(' ')}>{children}</p>;
};

export default Typo;

Typo.defaultProps = {
  variant: 'content',
  theme: 'light'
};
