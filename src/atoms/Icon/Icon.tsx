import React, { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

import combinedShape from './icons/combined-shape.svg';
import add from './icons/icn-add.svg';
import add2 from './icons/icn-add_2.svg';
import announcement from './icons/icn-announcement.svg';
import backArrow from './icons/icn-back-arrow.svg';
import copy from './icons/icn-copy.svg';
import create from './icons/icn-create-wallet.svg';
import exit from './icons/icn-exit.svg';
import navDownCaret from './icons/icn-nav-down-caret.svg';
import settings from './icons/icn-settings.svg';
import showNetworks from './icons/icn-show-networks.svg';
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
  combinedShape,
  add,
  add2,
  announcement,
  backArrow,
  copy,
  create,
  exit,
  navDownCaret,
  settings,
  showNetworks,
  shape,
  warning,

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

export function Icon({
  icon,
  ...rest
}: { icon: keyof typeof icons } & DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>) {
  return <img src={icons[icon]} alt={icon} {...rest} />;
}

export default Icon;
