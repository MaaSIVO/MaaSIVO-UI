import React, { FC, useEffect, useRef, useState } from 'react';
import { Base } from '../../../../types/base';
import styles from './DiagonalFrame.module.scss';

export interface DiagonalFrameProps extends Base {
  size?: number | string;
  color?: string;
}

export const DiagonalFrame: FC<DiagonalFrameProps> = ({ style, className, size, color }) => {
  const conteinerRef = useRef<HTMLDivElement>(null);
  const [skewDeg, setSkewDeg] = useState(0);

  useEffect(() => {
    const heightContainer = conteinerRef.current?.offsetHeight ?? 0;
    const halfContainer = heightContainer / 2;
    const halframe = 100 / 2;
    const deg = halfContainer - halframe;
    setSkewDeg(deg);
  }, []);

  return (
    <div ref={conteinerRef} className={[styles.container, className].join(' ')} style={style}>
      <div style={{ position: 'relative', flex: 1 }}>
        <div
          className={styles.container__frame}
          style={{
            transform: `skewY(${-skewDeg}deg) `
          }}
        />
      </div>
    </div>
  );
};

DiagonalFrame.defaultProps = {
  size: 200,
  color: undefined
};
