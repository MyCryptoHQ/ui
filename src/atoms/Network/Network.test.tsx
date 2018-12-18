import React from 'react';
import { render } from 'react-testing-library';

import Network from './Network';

test('Network', () => {
  render(<Network color="#a682ff">Ethereum</Network>);
});
