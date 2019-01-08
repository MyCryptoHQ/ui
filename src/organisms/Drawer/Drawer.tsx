import React, { Component, createRef, ReactNode } from 'react';

import { Heading, Panel } from 'src/atoms';
import styled from 'src/styled-components';
import Typography from 'src/Typography';
import exit from './exit.svg';

const Overlay = styled.section`
  height: 100%; /* stylelint-disable-line unit-whitelist */
  width: 100%; /* stylelint-disable-line unit-whitelist */
  background-color: rgba(0, 0, 0, 0.15);
  position: fixed;
  top: 0;
  left: 0;
`;

export const Drawer = styled(Panel)<{ visible?: boolean }>`
  width: 23.475em; /* stylelint-disable-line unit-whitelist */
  box-shadow: -2px 0 6px 0 rgba(0, 0, 0, 0.1); /* stylelint-disable-line unit-whitelist */
  height: 100vh; /* stylelint-disable-line unit-whitelist */
  position: fixed;
  right: ${props => (props.visible ? '0' : '-23.474em')};
  transition: 0.3s; /* stylelint-disable-line unit-whitelist */
  top: 0;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

const DrawerControls = styled.section`
  margin-top: 1.125em;
  display: flex;
  justify-content: flex-end;
`;

const DrawerCloseButton = styled.button`
  margin-right: 1.125em;
  cursor: pointer;
  line-height: 0;
  background: none;
  padding: 0;
  border: none;
`;

const DrawerHeader = styled.section`
  text-align: center;
`;

const DrawerHeading = styled(Heading)`
  margin-top: 1.07083em;
  margin-bottom: 0.2083em;
  font-weight: 900;
  font-size: 1.5625;
`;

const DrawerHeaderText = styled(Typography)`
  margin-top: 0;
  line-height: 1.31;
  padding-right: 2.9375em;
  padding-left: 2.9375em;
`;

const Divider = styled.hr`
  height: 0.125em;
  color: #e9e9e9;
  border: none;
  background-color: #e9e9e9;
  margin-top: 0;
  margin-bottom: 0.9375em;
`;

const DrawerContent = styled.section`
  flex: 1;
`;

interface DrawerProps {
  headerIcon?: string;
  iconAltText?: string;
  headerTitle?: string;
  headerText?: string;
  visible?: boolean;

  children?: ReactNode;
  footer?: ReactNode;

  handleClose?(): void;
}

interface DrawerState {
  visible?: boolean;
  reset?: boolean;
}

export class DrawerContainer extends Component<DrawerProps, DrawerState> {
  public ref = createRef<HTMLButtonElement>();

  public state: Readonly<DrawerState> = {
    visible: false,
    reset: false,
  };

  public focused = false;

  public componentDidUpdate(prevProps: DrawerProps, prevState: DrawerState) {
    const { visible: internalVisible, reset } = this.state;
    if (internalVisible && this.ref.current && !this.focused) {
      this.ref.current.focus();
      this.focused = true;
    }

    const { visible: externalVisible } = this.props;
    if (externalVisible !== prevProps.visible) {
      this.setState({ visible: externalVisible });
    }

    if (reset) {
      this.setState({ reset: false });
    }
  }

  public handleExit = () => {
    this.setState({ visible: false });
    setTimeout(() => {
      this.setState({ reset: true });
    }, 320);
    const { handleClose } = this.props;
    if (typeof handleClose === 'function') {
      handleClose();
    }
  };

  public render() {
    const {
      headerIcon,
      iconAltText,
      headerTitle,
      headerText,
      children,
      footer,
    } = this.props;
    const { visible, reset } = this.state;
    return (
      <>
        {visible && <Overlay onClick={this.handleExit} />}

        {!reset && (
          <Drawer noPadding={true} visible={visible} tabIndex={0}>
            <DrawerControls>
              <DrawerCloseButton
                onClick={this.handleExit}
                //@ts-ignore
                ref={this.ref}
              >
                <img src={exit} alt="exit-button" />
              </DrawerCloseButton>
            </DrawerControls>
            <DrawerHeader>
              {headerIcon && <img src={headerIcon} alt={iconAltText} />}
              <DrawerHeading as="h2">{headerTitle}</DrawerHeading>
              <DrawerHeaderText>{headerText}</DrawerHeaderText>
              <Divider />
            </DrawerHeader>
            <DrawerContent>{children}</DrawerContent>
            {footer && <footer>{footer}</footer>}
          </Drawer>
        )}
      </>
    );
  }
}

export default DrawerContainer;
