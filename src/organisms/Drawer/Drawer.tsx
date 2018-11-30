import React, { Component, ReactNode } from 'react';

import styled from '_styled-components';
import { Heading, Panel } from 'atoms';
import Typography from 'Typography';

const Overlay = styled.section`
  height: 100%; /* stylelint-disable-line unit-whitelist */
  width: 100%; /* stylelint-disable-line unit-whitelist */
  background-color: rgba(82, 117, 201, 0.5);
  position: fixed;
  top: 0;
  left: 0;
`;

export const Drawer = styled(Panel)`
  width: 23.475em; /* stylelint-disable-line unit-whitelist */
  border: 1px solid black; /* stylelint-disable-line unit-whitelist */
  height: 100vh; /* stylelint-disable-line unit-whitelist */
  position: fixed;
  right: 0;
  top: 0;
  padding: 0;
`;

export const DrawerHeader = styled.section`
  text-align: center;
`;

export const DrawerHeading = styled(Heading)`
  margin-bottom: 0.2083em;
  font-weight: 900;
  font-size: 1.5625;
`;

export const DrawerHeaderText = styled(Typography)`
  margin-top: 0;
  line-height: 1.31;
  padding-right: 2.9375em;
  padding-left: 2.9375em;
`;

export const Divider = styled.hr`
  height: 0.125em;
  color: #e9e9e9;
  border: none;
  background-color: #e9e9e9;
  margin-top: 0;
  margin-bottom: 0.9375em;
`;

interface DrawerProps {
  headerIcon?: string;
  iconAltText?: string;
  headerTitle?: string;
  headerText?: string;

  children?: ReactNode;
  // 'aria-label': string;
  // handleClick?(): void;
}

interface DrawerState {
  visible?: boolean;
}

export class DrawerContainer extends Component<DrawerProps, DrawerState> {
  public state: Readonly<DrawerState> = {
    visible: true,
  };

  public handleClick = () => {
    this.setState({ visible: false });
  };

  public render() {
    const {
      headerIcon,
      iconAltText,
      headerTitle,
      headerText,
      children,
    } = this.props;
    const { visible } = this.state;
    return (
      <section>
        {visible && (
          <React.Fragment>
            <Overlay onClick={this.handleClick} />
            <Drawer>
              <DrawerHeader>
                <img src={headerIcon} alt={iconAltText} />
                <DrawerHeading as="h2">{headerTitle}</DrawerHeading>
                <DrawerHeaderText>{headerText}</DrawerHeaderText>
                <Divider />
              </DrawerHeader>
              {children}
            </Drawer>
          </React.Fragment>
        )}
      </section>
    );
  }
}

export default DrawerContainer;
