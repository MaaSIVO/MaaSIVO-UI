import { createUseStyles } from 'react-jss';
import '../../../styles/global.css';
import { IconProps } from './Icon';

const useIconStyles = createUseStyles({
  noIcon: ({ size }: IconProps) => ({
    width: size,
    height: size,
    borderRadius: size,
    background: 'lightgrey',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  })
});

export { useIconStyles };
