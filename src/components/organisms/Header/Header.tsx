import React, { FC } from 'react';
import styles from './header.module.scss';
import { Icon, Typo } from '../../atoms';

export interface RouteProps {
  path: string;
  label: string;
}
export interface HeaderProps {
  routes: RouteProps[];
}

export const Header: FC<HeaderProps> = ({ routes }) => {
  return (
    <div className={styles.header}>
      <Icon name="Maasivo" size={100} className={styles.header__logo} />
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
