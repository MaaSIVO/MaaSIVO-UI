import React, { FC } from 'react';
import styles from './header.module.scss';
import { Icon, Typo } from '../../atoms';
import { Base } from '../../../types/base';

export interface RouteProps {
  path: string;
  label: string;
}
export interface HeaderProps extends Base {
  routes: RouteProps[];
  onLogoClick?: () => void;
}

export const Header: FC<HeaderProps> = ({ routes, className, style, onLogoClick }) => {
  return (
    <div className={[styles.header, className].join(' ')} style={style}>
      <Icon name="Maasivo" size={100} className={styles.header__logo} onClick={onLogoClick} />
      <Typo className={styles.header__banner}>Innovación en Movimiento</Typo>
      <div className={styles.header__routes}>
        {routes.map((r) => (
          <a className={styles.header__route} key={r.label}>
            <Typo>{r.label}</Typo>
          </a>
        ))}
      </div>
    </div>
  );
};
