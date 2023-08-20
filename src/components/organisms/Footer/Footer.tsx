import React, { FC } from 'react';
import { Divider, Icon, Typo } from '../../atoms';
import styles from './footer.module.scss';
import { Base } from '../../../types/base';
import { SocialMediaProps } from '../../../data';
import { useWindowSize } from '../../../hooks/useWindowSize';

export interface FooterProps extends Base {
  title?: string;
  rights?: string;
  icons?: SocialMediaProps[];
}

export const Footer: FC<FooterProps> = ({ style, className, title, rights, icons }) => {
  const { width } = useWindowSize();
  const isMobile = width <= 768;
  return (
    <div className={[styles.footerContainer, className].join(' ')} style={style}>
      <div className={styles.blurContainer}>
        <div className={styles.contactDiv}>
          <Typo style={{ fontWeight: 400 }}>{title}</Typo>
          <div className={styles.iconContainer}>
            {icons?.map((s) => (
              <Icon
                key={s.icon}
                name={s.icon}
                size={isMobile ? 20 : 30}
                className={styles.socialIcon}
              />
            ))}
          </div>
        </div>
        <Divider />
        <Typo variant="helperText">{rights}</Typo>
      </div>
    </div>
  );
};

Footer.defaultProps = {};
