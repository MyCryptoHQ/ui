import { invert } from 'polished';

export default interface Theme {
  background: string;
  headline: string;
  name: string;
  primary: string;
  primaryDark: string;
  primaryDarker: string;
  text: string;
}

export const light: Theme = {
  background: '#ffffff',
  headline: '#163150',
  name: 'Light',
  primary: '#007896',
  primaryDark: '#006077',
  primaryDarker: '#004759',
  text: '#424242',
};

export const dark: Theme = {
  background: '#21252b',
  headline: invert(light.headline),
  name: 'Dark',
  primary: '#0090b5',
  primaryDark: '#007896',
  primaryDarker: '#006077',
  text: '#ffffff',
};
