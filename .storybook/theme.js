import { create } from '@storybook/theming';
import Logo from '../src/assets/svg/other/MaasivoLogo.svg';
export default create({
  base: 'dark',
  brandTitle: 'MaaSIVO UI',
  //brandUrl: 'https://example.com',
  brandImage: Logo,
  brandTarget: '_self',
  colorPrimary: '#9F2FFF',
  colorSecondary: '#008EA1'
});
