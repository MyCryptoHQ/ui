import { darken, invert, lighten, modularScale } from 'polished';

const backgroundLight = 'white';
const backgroundDark = '#21252b';
export const borderRadius = '0.125em';
export const borderRadiusLarge = '0.375em';
const lightnessMod = 0.06;
const linkLight = '#007a99';
const linkDark = lighten(lightnessMod, linkLight);
const panelBackground = '#282c34';
const primary = '#007896';
export const scale = (steps: number) => modularScale(steps, undefined, 1.5);
export const transitionDuration = '0.12s';

type Theme = Record<
  | 'name'
  | 'actionPanelBackground'
  | 'actionPanelBorder'
  | 'background'
  | 'controlBackground'
  | 'controlBorder'
  | 'headline'
  | 'link'
  | 'linkHover'
  | 'panelBackground'
  | 'panelBackgroundDark'
  | 'primary'
  | 'primaryDark'
  | 'primaryDarker'
  | 'text',
  string
>;

export default Theme;

export const light: Theme = {
  name: 'Light',

  actionPanelBackground: darken(0.01, backgroundLight),
  actionPanelBorder: '#e8eaed',
  background: backgroundLight,
  controlBackground: backgroundLight,
  controlBorder: '#e5ecf3',
  headline: '#163150',
  link: linkLight,
  linkHover: darken(0.1, linkLight),
  panelBackground: backgroundLight,
  panelBackgroundDark: darken(lightnessMod, backgroundLight),
  primary,
  primaryDark: darken(lightnessMod, primary),
  primaryDarker: darken(lightnessMod * 2, primary),
  text: '#424242',
};

export const dark: Theme = {
  name: 'Dark',

  actionPanelBackground: lighten(lightnessMod, backgroundDark),
  actionPanelBorder: invert(light.actionPanelBorder),
  background: backgroundDark,
  controlBackground: '#393f4c',
  controlBorder: '#4d5463',
  headline: invert(light.headline),
  link: linkDark,
  linkHover: lighten(0.1, linkDark),
  panelBackground,
  panelBackgroundDark: lighten(lightnessMod, panelBackground),
  primary: lighten(lightnessMod, primary),
  primaryDark: primary,
  primaryDarker: darken(lightnessMod, primary),
  text: backgroundLight,
};
