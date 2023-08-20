import React, { FC } from 'react';
import styles from './header.module.scss';
import { Icon, Typo } from '../../atoms';
import { Base } from '../../../types/base';

export interface RouteProps {
  path: string;
  label: string;
}
export interface HeaderProps extends Base {
  title?: string;
  routes: RouteProps[];
  onLogoClick?: () => void;
  onRouteClick?: (route: string) => void;
}

export const Header: FC<HeaderProps> = ({
  style,
  title,
  routes,
  className,
  onLogoClick,
  onRouteClick
}) => {
  const handleRouteClick = (path: string) => {
    if (onRouteClick) {
      onRouteClick(path);
    }
  };

  return (
    <div className={[styles.header, className].join(' ')} style={style}>
      <Icon name="Maasivo" size={100} className={styles.header__logo} onClick={onLogoClick} />
      <Typo className={styles.header__banner}>{title}</Typo>
      <div className={styles.header__routes}>
        {routes.map((r) => (
          <a
            className={styles.header__route}
            key={r.label}
            onClick={() => handleRouteClick(r.path)}>
            <Typo>{r.label}</Typo>
          </a>
        ))}
      </div>
    </div>
  );
};
