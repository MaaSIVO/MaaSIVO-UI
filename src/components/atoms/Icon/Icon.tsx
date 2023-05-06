import React, { FC } from 'react';
import { IconThemeTypes } from '../../../types/theme';
import * as Icons from '../../../assets/icons/index';
import { IconOptions } from '../../../types/icons';
import { Base } from '../../../types/base';
import styles from './icon.module.scss';
import { Typo } from '../Typo';

export interface IconProps extends Base {
  color?: string;
  name: IconOptions;
  onClick?: () => void;
  size?: number | string;
  theme?: IconThemeTypes;
}

export const Icon: FC<IconProps> = ({ name, size, theme, className, style, onClick }) => {
  const IconComponent = Icons[name];

  const colorTheme = {
    light: 'white',
    dark: 'black'
  };

  return IconComponent ? (
    <button onClick={onClick} className={className} style={style}>
      <IconComponent width={size} height={size} color={colorTheme[theme ?? 'light']} />
    </button>
  ) : (
    <div className={styles.emptyIcon} style={{ width: size, height: size }}>
      <Typo theme="dark">?</Typo>
    </div>
  );
};

Icon.defaultProps = {
  size: '100%',
  theme: 'light'
};
