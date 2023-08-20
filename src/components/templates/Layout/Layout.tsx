import React, { FC } from 'react';
import styles from './Layout.module.scss';
import { Base } from '../../../types/base';
import { Footer, Header, HeaderProps } from '../../organisms';
import { SocialMediaProps } from '../../../data';

export type layout = Base & HeaderProps;
export interface LayoutProps extends layout {
  rights?: string;
  footerTitle?: string;
  footerClassName?: string;
  headerClassName?: string;
  contentClassName?: string;
  icons?: SocialMediaProps[];
  children?: React.ReactNode;
  contentStyle?: React.CSSProperties;
  headerStyle?: React.CSSProperties;
  footerStyle?: React.CSSProperties;
}

export const Layout: FC<LayoutProps> = ({
  icons,
  style,
  routes,
  rights,
  children,
  className,
  footerTitle,
  footerStyle,
  headerStyle,
  onLogoClick,
  contentStyle,
  onRouteClick,
  headerClassName,
  footerClassName,
  contentClassName
}) => {
  return (
    <div className={[styles.layout, className].join(' ')} style={style}>
      <Header
        routes={routes}
        style={headerStyle}
        onLogoClick={onLogoClick}
        onRouteClick={onRouteClick}
        className={headerClassName}
      />
      <div className={[styles.layout__children, contentClassName].join(' ')} style={contentStyle}>
        {children}
      </div>
      <Footer
        className={footerClassName}
        style={footerStyle}
        icons={icons}
        title={footerTitle}
        rights={rights}
      />
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
