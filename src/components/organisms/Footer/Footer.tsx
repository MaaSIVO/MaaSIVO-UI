import React, { FC } from 'react';
import { Divider, Icon, Typo } from '../../atoms';
import styles from './footer.module.scss';
import { Base } from '../../../types/base';
import { maasivoSocialMedia } from '../../../data';

export type FooterProps = Base

export const Footer: FC<FooterProps> = ({ style, className }) => {
  return (
    <div className={[styles.footerContainer, className].join(' ')} style={style}>
      <div className={styles.blurContainer}>
        <div className={styles.contactDiv}>
          <Typo style={{ fontWeight: 400 }}>Contáctanos</Typo>
          <div className={styles.iconContainer}>
            {maasivoSocialMedia.map((s) => (
              <Icon key={s.icon} name={s.icon} size={30} className={styles.socialIcon} />
            ))}
          </div>
        </div>
        <Divider />
        <Typo variant="helperText">© MaaSIVO 2023 | Innovación en Movimiento</Typo>
      </div>
    </div>
  );
};

Footer.defaultProps = {};
