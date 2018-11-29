import React from 'react';
import { render } from 'react-testing-library';

import Identicon from './Identicon';

test('Identicon', () => {
  render(<Identicon address="ETH ADDRESS" />);
});
