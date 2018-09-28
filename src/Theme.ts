import 'typeface-lato';

export default interface Theme {
  background: string;
  name: string;
  primary: string;
  primaryDark: string;
  primaryDarker: string;
  text: string;
}

export const light: Theme = {
  background: '#ffffff',
  name: 'Light',
  primary: '#007896',
  primaryDark: '#006077',
  primaryDarker: '#004759',
  text: '#333',
};

export const dark: Theme = {
  background: '#21252b',
  name: 'Dark',
  primary: '#0090b5',
  primaryDark: '#007896',
  primaryDarker: '#006077',
  text: '#ffffff',
};
