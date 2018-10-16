import { darken, invert, lighten, modularScale } from 'polished';

const lightnessMod = 0.06;
const primary = '#007896';
export const scale = (steps: number) => modularScale(steps, undefined, 1.5);
export const transitionDuration = '0.12s';

type Theme = Record<
  | 'name'
  | 'background'
  | 'controlBackground'
  | 'controlBorder'
  | 'headline'
  | 'panelBackground'
  | 'primary'
  | 'primaryDark'
  | 'primaryDarker'
  | 'text',
  string
>;

export default Theme;

export const light: Theme = {
  name: 'Light',

  background: 'white',
  controlBackground: 'white',
  controlBorder: '#e5ecf3',
  headline: '#163150',
  panelBackground: 'white',
  primary,
  primaryDark: darken(lightnessMod, primary),
  primaryDarker: darken(lightnessMod * 2, primary),
  text: '#424242',
};

export const dark: Theme = {
  name: 'Dark',

  background: '#21252b',
  controlBackground: '#393f4c',
  controlBorder: '#4d5463',
  headline: invert(light.headline),
  panelBackground: '#282c34',
  primary: lighten(lightnessMod, primary),
  primaryDark: primary,
  primaryDarker: darken(lightnessMod, primary),
  text: 'white',
};
