import 'typeface-lato';

export default interface Theme {
  backgroundColor: string;
  name: string;
  primaryColor: string;
  textColor: string;
}

export const light: Theme = {
  backgroundColor: 'white',
  name: 'Default',
  primaryColor: '#027896',
  textColor: '#333',
};

export const dark: Theme = {
  backgroundColor: '#21252b',
  name: 'Dark',
  primaryColor: '#0090b5',
  textColor: 'white',
};
