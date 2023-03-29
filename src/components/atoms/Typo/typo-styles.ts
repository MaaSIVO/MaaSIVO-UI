import { createUseStyles } from 'react-jss';
import '../../../styles/global.css';
import { TypoProps } from './Typo';

const useTypoStyles = createUseStyles({
  typoBase: {
    letterSpacing: 1,
    fontFamily: "'Lexend', sans-serif",
    color: ({ theme }: TypoProps) => (theme === 'light' ? 'white' : 'black')
  },
  typoStyle: ({ variant }: TypoProps) => {
    switch (variant) {
      case 'title':
        return {
          fontSize: 40,
          fontWeight: 700
        };
      case 'subtitle':
        return {
          fontSize: 30,
          fontWeight: 500
        };
      case 'helperText':
        return {
          fontSize: 15,
          fontWeight: 100
        };
      default:
        return {
          fontSize: 20,
          fontWeight: 300
        };
    }
  }
});

export { useTypoStyles };
