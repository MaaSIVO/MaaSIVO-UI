import React, { FC } from 'react';
import { Typo } from '../../atoms';
import { Base } from '../../../types/base';
import styles from './sectionHeader.module.scss';

export interface SectionHeaderProps extends Base {
  title: string;
  align?: 'left' | 'right';
}

const SectionHeader: FC<SectionHeaderProps> = ({ align, title, style, className }) => {
  return (
    <div
      className={[styles.headerContainer, styles[align ?? 'left'], className].join(' ')}
      style={style}
    >
      <Typo variant="title">{title}</Typo>
    </div>
  );
};
export default SectionHeader;

SectionHeader.defaultProps = {
  title: undefined,
  align: 'left'
};
