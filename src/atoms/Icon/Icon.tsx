import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import {
  faExclamationTriangle,
  faQuestionCircle,
  faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, Props } from '@fortawesome/react-fontawesome';
import React from 'react';

library.add(faEye, faExclamationTriangle, faQuestionCircle, faShieldAlt);

export const Icon = (
  props: Props & {
    icon:
      | { prefix: 'far'; iconName: 'eye' }
      | 'exclamation-triangle'
      | 'question-circle'
      | 'shield-alt';
  },
) => <FontAwesomeIcon {...props} />;

export default Icon;
