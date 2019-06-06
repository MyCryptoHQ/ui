import {
  darken,
  invert,
  lighten,
  modularScale,
  transparentize,
} from 'polished';

const backgroundLight = 'white';
const backgroundDark = '#214772';
export const borderRadius = '0.125em';
export const borderRadiusLarge = '0.375em';
const lightnessMod = 0.06;
const linkLight = '#007a99';
const linkDark = '#1eb8e7';
const optionHoverBackground = '#b5bfc7';
const optionSelected = '#a682ff';
const outline = '0 0 0 0.25em ';
const panelBackground = '#282c34';
const panelBackgroundDark = '#163150';
const primary = '#007896';
const primaryDark = '#1eb8e7';
const text = '#424242';
const textDark = '#FFFFFF';
const textLightnessMod = lightnessMod * 7.5;
export const scale = (steps: number) => modularScale(steps, undefined, 1.5);
const switchBackgroundGreyable = lighten(0.3, 'grey');
export const transitionDuration = '0.12s';
export const monospace =
  "'Roboto Mono', Menlo, Monaco, Consolas, 'Courier New', monospace";

export default interface Theme {
  name: string;

  actionPanelBackground: string;
  actionPanelBorder: string;
  background: string;
  cardText: string;
  controlBackground: string;
  controlBorder: string;
  headline: string;
  iconColor: string;
  link: string;
  linkHover: string;
  optionHoverBackground: string;
  optionSelected: string;
  outline: string;
  panelBackground: string;
  panelBackgroundDark: string;
  primary: string;
  primaryDark: string;
  primaryDarker: string;
  switchBackgroundGreyable: string;
  tableHeadBackground: string;
  tableRowBorder: string;
  tableHeadBorder: string;
  text: string;
  textLight: string;
}

export const light: Theme = {
  name: 'Light',

  actionPanelBackground: darken(0.01, backgroundLight),
  actionPanelBorder: '#e8eaed',
  background: backgroundLight,
  cardText: '#697685',
  controlBackground: backgroundLight,
  controlBorder: transparentize(0.95, '#3f3f44'),
  headline: '#163150',
  iconColor: '#424242',
  link: linkLight,
  linkHover: darken(0.1, linkLight),
  optionHoverBackground: lighten(0.2, optionHoverBackground),
  optionSelected,
  outline: outline + transparentize(0.35, linkLight),
  panelBackground: backgroundLight,
  panelBackgroundDark: darken(lightnessMod, backgroundLight),
  primary,
  primaryDark: darken(lightnessMod, primary),
  primaryDarker: darken(lightnessMod * 2, primary),
  tableHeadBackground: '#fafcfc',
  tableHeadBorder: '#e8eaed',
  tableRowBorder: '#e8eaed',
  switchBackgroundGreyable,
  text,
  textLight: lighten(textLightnessMod, text),
};

export const dark: Theme = {
  name: 'Dark',

  actionPanelBackground: lighten(lightnessMod, backgroundDark),
  actionPanelBorder: invert(light.actionPanelBorder),
  background: backgroundDark,
  cardText: '#dbe0e6',
  controlBackground: panelBackgroundDark,
  controlBorder: primaryDark,
  headline: '#FFFFFF',
  iconColor: primaryDark,
  link: linkDark,
  linkHover: lighten(0.1, linkDark),
  optionHoverBackground: darken(0.2, optionHoverBackground),
  optionSelected,
  outline: outline + transparentize(0.35, primaryDark),
  panelBackground: panelBackgroundDark,
  panelBackgroundDark: lighten(lightnessMod, panelBackground),
  primary: primaryDark,
  primaryDark: darken(lightnessMod, primaryDark),
  primaryDarker: darken(lightnessMod * 2, primaryDark),
  tableHeadBackground: darken(lightnessMod, backgroundDark),
  tableHeadBorder: 'rgba(255, 255, 255, .5)',
  tableRowBorder: panelBackgroundDark,
  switchBackgroundGreyable,
  text: textDark,
  textLight: darken(textLightnessMod, textDark),
};
