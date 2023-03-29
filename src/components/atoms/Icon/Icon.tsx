import React, { FC } from 'react';
import { ThemeTypes } from '../../../types/theme';
import * as Icons from '../../../assets/icons/index';
import { IconOptions } from '../../../types/icons';
import Typo from '../Typo';
import { useIconStyles } from './icon-styles';

export interface IconProps {
  size?: number;
  name: IconOptions;
  theme?: ThemeTypes;
  color?: string;
}

const Icon: FC<IconProps> = ({ name, size, color, theme }) => {
  const styles = useIconStyles({ size, name });

  const IconComponent = Icons[name];
  const colorTheme = {
    light: 'white',
    dark: 'black'
  };

  return IconComponent ? (
    <IconComponent width={size} height={size} color={color ?? colorTheme[theme ?? 'light']} />
  ) : (
    <div className={styles.noIcon}>
      <Typo theme="dark">?</Typo>
    </div>
  );
};

export default Icon;

Icon.defaultProps = {
  size: 20,
  theme: 'light',
  color: undefined
};
