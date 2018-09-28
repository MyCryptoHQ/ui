import 'typeface-lato';

export default interface Theme {
  background: string;
  name: string;
  primary: string;
  text: string;
}

export const light: Theme = {
  background: '#ffffff',
  name: 'Light',
  primary: '#027896',
  text: '#333',
};

export const dark: Theme = {
  background: '#21252b',
  name: 'Dark',
  primary: '#0090b5',
  text: '#ffffff',
};
