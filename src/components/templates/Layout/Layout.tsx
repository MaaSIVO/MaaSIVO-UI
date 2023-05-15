import React, { FC } from 'react';
import { Divider, Icon, Typo } from '../../atoms';
import styles from './Layout.module.scss';
import { Base } from '../../../types/base';
import { Footer, Header, HeaderProps } from '../../organisms';

export type layout = Base & HeaderProps;
export interface LayoutProps extends layout {
  footerClassName?: string;
  headerClassName?: string;
  contentClassName?: string;
  children?: React.ReactNode;
  contentStyle: React.CSSProperties;
  headerStyle?: React.CSSProperties;
  footerStyle?: React.CSSProperties;
}

export const Layout: FC<LayoutProps> = ({
  style,
  routes,
  children,
  className,
  footerStyle,
  headerStyle,
  onLogoClick,
  contentStyle,
  headerClassName,
  footerClassName,
  contentClassName
}) => {
  return (
    <div className={[styles.layout, className].join(' ')} style={style}>
      <Header
        routes={routes}
        className={headerClassName}
        style={headerStyle}
        onLogoClick={onLogoClick}
      />
      <div className={[styles.layout__children, contentClassName].join(' ')} style={contentStyle}>
        {children}
      </div>
      <Footer className={footerClassName} style={footerStyle} />
    </div>
  );
};

Layout.defaultProps = {
  style: undefined,
  routes: undefined,
  children: undefined,
  className: undefined,
  footerStyle: undefined,
  headerStyle: undefined,
  contentStyle: undefined,
  footerClassName: undefined,
  headerClassName: undefined,
  contentClassName: undefined
};
