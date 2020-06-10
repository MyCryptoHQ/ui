import { size } from 'polished';
import React from 'react';
import InlineSVG, { Props } from 'react-inlinesvg';

import Omit from '../../Omit';
import styled from '../../styled-components';
import { scale } from '../../Theme';

import chevronDown from './icons/chevron-down.svg';
import chevronUp from './icons/chevron-up.svg';
import combinedShape from './icons/combined-shape.svg';
import add from './icons/icn-add.svg';
import add2 from './icons/icn-add_2.svg';
import announcement from './icons/icn-announcement.svg';
import backArrow from './icons/icn-back-arrow.svg';
import checkmarkBlack from './icons/icn-checkmark-black.svg'; /* New checkmark icon, black by default (use css `color`) */
import checkmark from './icons/icn-checkmark.svg'; /* Legacy checkmark icon, green color which can't be changed */
import copy from './icons/icn-copy.svg';
import create from './icons/icn-create-wallet.svg';
import exit from './icons/icn-exit.svg';
import minus from './icons/icn-minus.svg';
import navDownCaret from './icons/icn-nav-down-caret.svg';
import plus from './icons/icn-plus.svg';
import settings from './icons/icn-settings.svg';
import showNetworks from './icons/icn-show-networks.svg';
import starO from './icons/icn-star-o.svg';
import star from './icons/icn-star.svg';
import warning from './icons/icn-warning.svg';
import shape from './icons/shape.svg';

import bankVsMyCrypto from './illustrations/icn-bank-vs-mycrypto.svg';
import champagne from './illustrations/icn-champagne.svg';
import chest from './illustrations/icn-chest.svg';
import ledgerNano from './illustrations/icn-ledger-nano.svg';
import trezorNew from './illustrations/icn-trezor-new.svg';
import vault from './illustrations/icn-vault.svg';
import wallet from './illustrations/icn-wallet-copy.svg';

import lock from './nav_icons/icn-lock.svg';
import unlock from './nav_icons/icn-unlock.svg';

export const icons = {
  chevronDown,
  chevronUp,
  combinedShape,
  add,
  add2,
  announcement,
  backArrow,
  copy,
  create,
  exit,
  minus,
  navDownCaret,
  plus,
  settings,
  showNetworks,
  starO,
  star,
  shape,
  warning,
  checkmark,
  'checkmark-black': checkmarkBlack,

  bankVsMyCrypto,
  champagne,
  chest,
  ledgerNano,
  trezorNew,
  vault,
  wallet,

  lock,
  unlock,
};

const StyledInlineSVG = styled(InlineSVG)`
  svg {
    ${size(scale(0))};
    color: ${props => props.theme.iconColor};
  }
`;

export function Icon({
  'aria-label': ariaLabel,
  icon,
  ...rest
}: { 'aria-label'?: string; icon: keyof typeof icons } & Omit<Props, 'src'>) {
  return (
    <span role="img" aria-label={ariaLabel || icon}>
      <StyledInlineSVG src={icons[icon]} {...rest} />
    </span>
  );
}

export default Icon;
