import { invert } from 'polished';

type Theme = Record<
  | 'background'
  | 'controlBackground'
  | 'controlBorder'
  | 'headline'
  | 'name'
  | 'primary'
  | 'primaryDark'
  | 'primaryDarker'
  | 'text',
  string
>;

export default Theme;

export const light: Theme = {
  background: '#ffffff',
  controlBackground: '#ffffff',
  controlBorder: '#e5ecf3',
  headline: '#163150',
  name: 'Light',
  primary: '#007896',
  primaryDark: '#006077',
  primaryDarker: '#004759',
  text: '#424242',
};

export const dark: Theme = {
  background: '#21252b',
  controlBackground: '#393f4c',
  controlBorder: '#4d5463',
  headline: invert(light.headline),
  name: 'Dark',
  primary: '#0090b5',
  primaryDark: '#007896',
  primaryDarker: '#006077',
  text: '#ffffff',
};
