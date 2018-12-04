import { library } from '@fortawesome/fontawesome-svg-core';
import { faClone, faEye } from '@fortawesome/free-regular-svg-icons';
import {
  faExclamationTriangle,
  faQuestionCircle,
  faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, Props } from '@fortawesome/react-fontawesome';
import React from 'react';

export type IconName =
  | 'eye'
  | 'exclamation-triangle'
  | 'question-circle'
  | 'shield-alt'
  | 'clone';

export const icons = [
  faEye,
  faExclamationTriangle,
  faQuestionCircle,
  faShieldAlt,
  faClone,
];

library.add(...icons);

export function Icon({ icon, ...rest }: Props & { icon: IconName }) {
  return (
    <FontAwesomeIcon
      icon={icons.find(({ iconName }) => iconName === icon)!}
      {...rest}
    />
  );
}

export default Icon;
