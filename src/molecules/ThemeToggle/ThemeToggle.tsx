import React, { Component } from 'react';

import { size } from 'polished';
import InlineSVG from 'react-inlinesvg';
import { Switch } from 'src/atoms';
import styled from 'src/styled-components';
import { scale } from 'src/Theme';

import moon from 'src/atoms/Icon/icons/icn-dark-theme.svg';
import sun from 'src/atoms/Icon/icons/icn-light-theme.svg';

/* stylelint-disable max-nesting-depth */
/* stylelint-disable unit-whitelist */
/* stylelint-disable no-descending-specificity */
const LightThemeIcon = styled(InlineSVG)`
  position: absolute;
  z-index: 1;
  left: -1.2px;
  svg {
    ${size(scale(0))};
  }
`;

const DarkThemeIcon = styled(InlineSVG)`
  position: absolute;
  z-index: 1;
  right: -1.2px;
  svg {
    fill: white;
    ${size(scale(0))};
  }
`;

interface Props {
  greyable?: boolean;
  labelLeft?: string;
  labelRight?: string;
  checked?: boolean;
  themetoggle?: boolean;
  handleChange?(): void;
}
export class ThemeToggle extends Component<Props, {}> {
  public render() {
    const { checked } = this.props;
    const props = this.props;
    return (
      <Switch {...props} themeToggle={true}>
        {checked ? <DarkThemeIcon src={moon} /> : <LightThemeIcon src={sun} />}
      </Switch>
    );
  }
}
export default ThemeToggle;
